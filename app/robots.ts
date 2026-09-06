import type { MetadataRoute } from "next";
import { SITE_URL } from "@/constants";

/**
 * The site is entirely public and educational, so every crawler is allowed.
 * Assistant crawlers are named explicitly so the permission is a recorded
 * decision rather than a side effect of the wildcard rule.
 */
const ASSISTANT_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-User",
  "PerplexityBot",
  "Google-Extended",
  "Applebot-Extended",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: ASSISTANT_CRAWLERS, allow: "/" },
    ],
    host: SITE_URL,
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
