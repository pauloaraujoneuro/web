import { NextResponse, type NextRequest } from "next/server";
import {
  HTML_MEDIA_TYPE,
  MARKDOWN_MEDIA_TYPE,
  MARKDOWN_ROUTE_PREFIX,
  negotiateRepresentation,
} from "@/app/lib/content-negotiation";

/**
 * Content negotiation for pages: the same URL answers HTML to browsers and
 * Markdown to agents that send `Accept: text/markdown`. Markdown requests are
 * rewritten to the internal Markdown route; HTML requests continue untouched.
 * Every negotiated response says `Vary: Accept` so no cache hands one
 * audience the other's representation.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

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
  // Generated preview images live at extensionless paths.
  if (pathname.endsWith("/opengraph-image") || pathname === "/opengraph-image") {
    return NextResponse.next();
  }

  const representation = negotiateRepresentation(request.headers.get("accept"));

  if (representation === null) {
    return new NextResponse(
      `This resource is available in:\n- ${HTML_MEDIA_TYPE}\n- ${MARKDOWN_MEDIA_TYPE}\n`,
      {
        status: 406,
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
          Vary: "Accept",
          "Cache-Control": "no-store",
        },
      },
    );
  }

  const isInternalRoute =
    pathname === MARKDOWN_ROUTE_PREFIX || pathname.startsWith(`${MARKDOWN_ROUTE_PREFIX}/`);

  if (representation === "markdown") {
    // A direct request for the internal route is answered as the unknown
    // path it is, so the Markdown never gains a second public URL.
    const target = isInternalRoute
      ? `${MARKDOWN_ROUTE_PREFIX}/__unknown__`
      : `${MARKDOWN_ROUTE_PREFIX}${pathname === "/" ? "" : pathname}`;
    return NextResponse.rewrite(new URL(target, request.url), { headers: { Vary: "Accept" } });
  }

  if (isInternalRoute) {
    return NextResponse.rewrite(new URL("/__unknown__", request.url), {
      headers: { Vary: "Accept" },
    });
  }

  return NextResponse.next({ headers: { Vary: "Accept" } });
}

export const config = {
  // Pages only: static assets, framework chunks and files with an extension
  // (robots.txt, sitemap.xml, llms.txt, images) keep their single type.
  matcher: ["/((?!_next/|.*\\.).*)"],
};
