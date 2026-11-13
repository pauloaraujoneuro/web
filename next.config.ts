import type { NextConfig } from "next";

/**
 * Resources that pages load but that are not pages themselves. Search engines
 * still fetch them (rendering needs the fonts and scripts, link unfurlers need
 * the previews), so they stay crawlable in robots.txt; this header only keeps
 * them out of the index. Matching ignores the query string, so cache-busted
 * URLs such as `/opengraph-image?<hash>` are covered too. Article
 * illustrations (/images/conteudo, /_next/image) stay indexable.
 */
const NON_PAGE_RESOURCES = [
  "/opengraph-image",
  "/:path*/opengraph-image",
  "/favicon.ico",
  "/icons/:path*",
  "/manifest.webmanifest",
  "/_next/static/:path*",
];

const nextConfig: NextConfig = {
  images: {
    qualities: [68, 70, 72, 75],
  },
  /**
   * Pages are content-negotiated (HTML or Markdown, see `proxy.ts`), so page
   * responses must tell caches they depend on `Accept`. Declared here as well
   * as in the proxy because Next.js sets its own `Vary` on prerendered pages;
   * the deployment applies config headers at the edge, after that happens.
   */
  async headers() {
    return [
      {
        source: "/((?!_next/|.*\\.).*)",
        headers: [{ key: "Vary", value: "Accept" }],
      },
      ...NON_PAGE_RESOURCES.map((source) => ({
        source,
        headers: [{ key: "X-Robots-Tag", value: "noindex" }],
      })),
    ];
  },
  /**
   * The site is in Portuguese, so its trust pages live at Portuguese slugs.
   * Agents and tools that vet a business look for the conventional English
   * paths; these send them to the canonical page instead of a 404.
   */
  async redirects() {
    return [
      { source: "/about", destination: "/sobre", permanent: true },
      { source: "/contact", destination: "/contato", permanent: true },
      { source: "/privacy", destination: "/privacidade", permanent: true },
      { source: "/privacy-policy", destination: "/privacidade", permanent: true },
      /**
       * Misspelled copy of a post URL that Google found somewhere outside the
       * site (it never existed in this repository) and showed in results while
       * it returned 404. Sending it to the real post keeps that traffic.
       */
      {
        source: "/blog/nervo-pode-vido-anos-depois-lesao",
        destination: "/blog/nervo-pode-voltar-a-funcionar-anos-depois",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
