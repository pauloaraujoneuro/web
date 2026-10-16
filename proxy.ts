import { NextResponse, type NextRequest } from "next/server";
import {
  HTML_MEDIA_TYPE,
  MARKDOWN_MEDIA_TYPE,
  MARKDOWN_ROUTE_PREFIX,
  negotiateRepresentation,
} from "@/app/lib/content-negotiation";

const isInternalMarkdownRoute = (pathname: string) =>
  pathname === MARKDOWN_ROUTE_PREFIX || pathname.startsWith(`${MARKDOWN_ROUTE_PREFIX}/`);

/** Generated social preview images live at extensionless paths. */
const isPreviewImage = (pathname: string) =>
  pathname === "/opengraph-image" || pathname.endsWith("/opengraph-image");

/**
 * Content negotiation for pages: the same URL answers HTML to browsers and
 * Markdown to agents that send `Accept: text/markdown`. Markdown requests are
 * rewritten to the internal Markdown route; HTML requests continue untouched.
 * Every negotiated response says `Vary: Accept` so no cache hands one
 * audience the other's representation.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const representation = negotiateRepresentation(request.headers.get("accept"));

  // The internal Markdown route is never a public URL, whatever the method or
  // headers: this check comes before every bypass below, so a spoofed `RSC`,
  // prefetch or Server Action header cannot reach it directly. Markdown
  // clients get the Markdown 404; everyone else the site's HTML 404.
  if (isInternalMarkdownRoute(pathname)) {
    const target =
      representation === "markdown" ? `${MARKDOWN_ROUTE_PREFIX}/__unknown__` : "/__unknown__";
    return NextResponse.rewrite(new URL(target, request.url), { headers: { Vary: "Accept" } });
  }

  // Framework traffic is not a document request: client navigations (RSC),
  // prefetches and Server Actions must reach the app exactly as sent.
  if (request.method !== "GET" && request.method !== "HEAD") return NextResponse.next();
  if (
    request.headers.has("rsc") ||
    request.headers.has("next-router-prefetch") ||
    request.headers.has("next-action")
  ) {
    return NextResponse.next();
  }
  if (isPreviewImage(pathname)) return NextResponse.next();

  if (representation === null) {
    return new NextResponse(
      `This resource is available in:\n- ${HTML_MEDIA_TYPE}\n- ${MARKDOWN_MEDIA_TYPE}\n`,
      {
        status: 406,
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
          Vary: "Accept",
          "Cache-Control": "no-store",
          "X-Robots-Tag": "noindex",
        },
      },
    );
  }

  if (representation === "markdown") {
    const target = `${MARKDOWN_ROUTE_PREFIX}${pathname === "/" ? "" : pathname}`;
    return NextResponse.rewrite(new URL(target, request.url), { headers: { Vary: "Accept" } });
  }

  return NextResponse.next({ headers: { Vary: "Accept" } });
}

export const config = {
  // Pages only: framework chunks and files with an extension (robots.txt,
  // sitemap.xml, llms.txt, images) keep their single type. The internal
  // Markdown route is matched on its own as well, so a dotted path under it
  // (`/markdown-variant/x.md`) is still rejected here.
  matcher: ["/((?!_next/|.*\\.).*)", "/markdown-variant/:path*"],
};
