import { MARKDOWN_CONTENT_TYPE } from "@/app/lib/content-negotiation";
import {
  getMarkdownDocument,
  getMarkdownNotFound,
  getMarkdownPaths,
  isMarkdownPathIndexable,
} from "@/app/lib/markdown";
import { SITE_URL } from "@/constants";

/**
 * Markdown representation of each page, reached only through the rewrite in
 * `proxy.ts` when a client prefers `text/markdown`. Known pages are rendered at
 * build time; any other path answers a Markdown 404 so an agent gets a readable
 * error with a way back into the site, not an HTML error page.
 */
export const dynamic = "force-static";

type Context = { params: Promise<{ path?: string[] }> };

export function generateStaticParams() {
  return getMarkdownPaths().map((path) => ({ path: path ? path.slice(1).split("/") : [] }));
}

export async function GET(_request: Request, { params }: Context) {
  const { path = [] } = await params;
  const pagePath = path.length ? `/${path.join("/")}` : "";
  const document = getMarkdownDocument(pagePath);

  if (document === undefined) {
    return new Response(getMarkdownNotFound(), {
      status: 404,
      headers: {
        "Content-Type": MARKDOWN_CONTENT_TYPE,
        Vary: "Accept",
        "Cache-Control": "no-store",
        "X-Robots-Tag": "noindex",
      },
    });
  }

  return new Response(document, {
    headers: {
      "Content-Type": MARKDOWN_CONTENT_TYPE,
      Vary: "Accept",
      "Cache-Control": "public, max-age=0, must-revalidate",
      // Same resource as the HTML page: search engines and agents should cite
      // the page URL, never think of this as a second document.
      Link: `<${SITE_URL}${pagePath}>; rel="canonical"`,
      // Mirrors the HTML page's robots meta; absent for canonical content.
      ...(isMarkdownPathIndexable(pagePath) ? {} : { "X-Robots-Tag": "noindex, follow" }),
    },
  });
}
