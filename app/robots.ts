import type { MetadataRoute } from "next";
import { SITE_URL } from "@/constants";

/**
 * The site is entirely public and educational, so every crawler is allowed.
 * Assistant crawlers are named explicitly so the permission is a recorded
 * decision rather than a side effect of the wildcard rule. Pages withheld from
 * search say so with `noindex`, never here: a disallowed URL cannot be crawled,
 * so its `noindex` would never be read.
 */
const ASSISTANT_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: ASSISTANT_CRAWLERS, allow: "/" },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
