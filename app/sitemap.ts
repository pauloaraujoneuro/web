import type { MetadataRoute } from "next";
import { getSitemapEntries } from "@/app/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return getSitemapEntries();
}
