import type { BlogPost, Location, Treatment } from "@/app/lib/content-types";

const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;
const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

function fail(source: string, field: string, detail: string): never {
  throw new Error(`${source}.${field}: ${detail}`);
}

function assertUnique<T>(
  entries: T[],
  sourceName: string,
  field: (entry: T) => string,
  label: string,
  identify: (entry: T) => string,
) {
  const seen = new Map<string, string>();
  for (const entry of entries) {
    const value = field(entry);
    const source = `${sourceName}.${identify(entry) || "unknown"}`;
    const previous = seen.get(value);
    if (previous) fail(source, label, `duplicates ${previous}`);
    seen.set(value, source);
  }
}

export function validateTreatments(entries: Treatment[]) {
  assertUnique(entries, "treatments", (entry) => entry.slug, "slug", (entry) => entry.slug);
  assertUnique(
    entries,
    "treatments",
    (entry) => entry.primaryIntent,
    "primaryIntent",
    (entry) => entry.slug,
  );
  const slugs = new Set(entries.map((entry) => entry.slug));

  for (const entry of entries) {
    const source = `treatments.${entry.slug}`;
    if (!SLUG.test(entry.slug)) fail(source, "slug", "must be lowercase and hyphenated");
    if (!ISO_DATE.test(entry.lastModified)) fail(source, "lastModified", "must be an ISO date");
    if (entry.state === "published" && entry.indexable) {
      if (!entry.summary.trim()) fail(source, "summary", "is required");
      if (entry.sections.length < 2) fail(source, "sections", "requires at least two sections");
      if (!entry.indications.length) fail(source, "indications", "is required");
      if (!entry.limitations.length) fail(source, "limitations", "is required");
      if (!entry.carePath.length) fail(source, "carePath", "is required");
      if (!entry.faqs.length) fail(source, "faqs", "is required");
    }
    for (const target of entry.relatedTreatmentSlugs) {
      if (!slugs.has(target)) fail(source, "relatedTreatmentSlugs", `unknown target ${target}`);
    }
  }
}

export function validateTreatmentPostReferences(
  entries: Treatment[],
  postSlugs: Set<string>,
) {
  for (const entry of entries) {
    for (const target of entry.relatedPostSlugs) {
      if (!postSlugs.has(target)) {
        fail(`treatments.${entry.slug}`, "relatedPostSlugs", `unknown target ${target}`);
      }
    }
  }
}

export function validateLocations(entries: Location[], treatmentSlugs: Set<string>) {
  assertUnique(entries, "locations", (entry) => entry.slug, "slug", (entry) => entry.slug);
  for (const entry of entries) {
    const source = `locations.${entry.slug}`;
    if (!SLUG.test(entry.slug)) fail(source, "slug", "must be lowercase and hyphenated");
    if (!ISO_DATE.test(entry.lastModified)) fail(source, "lastModified", "must be an ISO date");
    if (entry.active && entry.indexable && (!entry.clinicName || !entry.city || !entry.state)) {
      fail(source, "identity", "clinicName, city, and state are required");
    }
    for (const target of entry.relatedTreatmentSlugs) {
      if (!treatmentSlugs.has(target)) {
        fail(source, "relatedTreatmentSlugs", `unknown target ${target}`);
      }
    }
  }
}

export function validatePosts(posts: BlogPost[], treatmentSlugs: Set<string>) {
  assertUnique(posts, "posts", (entry) => entry.slug, "slug", (entry) => entry.slug);
  assertUnique(
    posts,
    "posts",
    (entry) => entry.primaryKeyword,
    "primaryKeyword",
    (entry) => entry.slug,
  );
  for (const post of posts) {
    const source = `posts.${post.slug}`;
    if (!SLUG.test(post.slug)) fail(source, "slug", "must be lowercase and hyphenated");
    for (const field of ["title", "metaDescription", "dek", "primaryKeyword", "searchIntent"] as const) {
      if (!post[field]?.trim()) fail(source, field, "is required");
    }
    if (!ISO_DATE.test(post.publishDate)) fail(source, "publishDate", "must be an ISO date");
    if (!ISO_DATE.test(post.lastModified)) fail(source, "lastModified", "must be an ISO date");
    if (post.author !== "paulo-araujo") fail(source, "author", `unknown author ${post.author}`);
    if (!Array.isArray(post.secondaryKeywords)) fail(source, "secondaryKeywords", "must be an array");
    if (!Array.isArray(post.relatedTreatmentSlugs)) fail(source, "relatedTreatmentSlugs", "must be an array");
    if (typeof post.featured !== "boolean") fail(source, "featured", "must be a boolean");
    if (!Number.isInteger(post.order)) fail(source, "order", "must be an integer");
    if (post.state === "published" && !post.body.trim()) fail(source, "body", "is required");
    for (const target of post.relatedTreatmentSlugs) {
      if (!treatmentSlugs.has(target)) {
        fail(source, "relatedTreatmentSlugs", `unknown target ${target}`);
      }
    }
  }
}
