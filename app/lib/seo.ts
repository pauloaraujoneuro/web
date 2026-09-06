import type { MetadataRoute } from "next";
import { getPublishedPosts } from "@/app/lib/blog";
import { getPublishedLocations } from "@/app/lib/locations";
import { getPublishedTreatments } from "@/app/lib/treatments";
import { SITE_URL } from "@/constants";

const STATIC_LAST_MODIFIED = "2026-09-06";

export function getPublicRouteInventory() {
  const staticRoutes = [
    { path: "", lastModified: STATIC_LAST_MODIFIED, priority: 1 },
    { path: "/sobre", lastModified: STATIC_LAST_MODIFIED, priority: 0.8 },
    { path: "/tratamentos", lastModified: STATIC_LAST_MODIFIED, priority: 0.9 },
    { path: "/blog", lastModified: STATIC_LAST_MODIFIED, priority: 0.8 },
    { path: "/perguntas-frequentes", lastModified: STATIC_LAST_MODIFIED, priority: 0.7 },
    { path: "/locais-de-atendimento", lastModified: STATIC_LAST_MODIFIED, priority: 0.8 },
  ];
  const treatments = getPublishedTreatments().map((entry) => ({
    path: `/tratamentos/${entry.slug}`,
    lastModified: entry.lastModified,
    priority: 0.8,
  }));
  const posts = getPublishedPosts().map((entry) => ({
    path: `/blog/${entry.slug}`,
    lastModified: entry.lastModified,
    priority: 0.7,
  }));
  const locations = getPublishedLocations().map((entry) => ({
    path: `/locais-de-atendimento/${entry.slug}`,
    lastModified: entry.lastModified,
    priority: 0.8,
  }));
  const inventory = [...staticRoutes, ...treatments, ...posts, ...locations];
  const urls = inventory.map((entry) => `${SITE_URL}${entry.path}`);
  if (new Set(urls).size !== urls.length) {
    throw new Error("seo.routeInventory: duplicate canonical URL");
  }
  return inventory;
}

export function getSitemapEntries(): MetadataRoute.Sitemap {
  return getPublicRouteInventory().map((entry) => ({
    url: `${SITE_URL}${entry.path}`,
    lastModified: entry.lastModified,
    changeFrequency: entry.path.startsWith("/blog/") ? "monthly" : "weekly",
    priority: entry.priority,
  }));
}
