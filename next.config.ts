import type { NextConfig } from "next";

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
      // Generated social previews are fetched by link unfurlers, which ignore
      // this header; it only keeps the cards out of image search. Article
      // illustrations (/images/conteudo) stay indexable.
      {
        source: "/opengraph-image",
        headers: [{ key: "X-Robots-Tag", value: "noindex" }],
      },
      {
        source: "/:path*/opengraph-image",
        headers: [{ key: "X-Robots-Tag", value: "noindex" }],
      },
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
    ];
  },
};

export default nextConfig;
