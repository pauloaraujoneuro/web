import type {
  BlogPost,
  ClinicProfile,
  Location,
  Treatment,
} from "@/content/types";

const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;
const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const TIME_OF_DAY = /^([01]\d|2[0-3]):[0-5]\d$/;
const TREATMENT_KINDS = new Set<Treatment["kind"]>(["overview", "condition", "procedure"]);

function fail(source: string, field: string, detail: string): never {
  throw new Error(`${source}.${field}: ${detail}`);
}

/** Rejects impossible calendar dates that still match the ISO shape (2026-02-31). */
function assertCalendarDate(source: string, field: string, value: string) {
  if (!ISO_DATE.test(value)) fail(source, field, "must be an ISO date");
  const parsed = new Date(`${value}T00:00:00.000Z`);
  if (Number.isNaN(parsed.getTime()) || parsed.toISOString().slice(0, 10) !== value) {
    fail(source, field, `is not a real calendar date (${value})`);
  }
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

interface ReferenceTarget {
  visible: boolean;
  indexable: boolean;
}

/**
 * Cross-reference rule, applied to every catalog relation: a link may only point
 * at a page that exists, and an indexable page may only send authority to
 * another indexable page. Keeping the two checks separate from completeness is
 * deliberate — a page can be complete and still point somewhere it should not.
 */
function assertReference(
  source: string,
  field: string,
  target: string,
  targets: Map<string, ReferenceTarget>,
  from: ReferenceTarget,
) {
  const resolved = targets.get(target);
  if (!resolved) fail(source, field, `unknown target ${target}`);
  if (!resolved.visible) fail(source, field, `${target} has no public page`);
  if (from.indexable && !resolved.indexable) {
    fail(source, field, `indexable entry links to non-indexable ${target}`);
  }
}

function treatmentTargets(entries: Treatment[]) {
  return new Map(
    entries.map((entry) => [
      entry.slug,
      { visible: entry.state === "published", indexable: entry.indexable },
    ]),
  );
}

function postTargets(posts: BlogPost[]) {
  return new Map(
    posts.map((post) => [
      post.slug,
      { visible: post.state === "published", indexable: post.indexable },
    ]),
  );
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
  const targets = treatmentTargets(entries);

  for (const entry of entries) {
    const source = `treatments.${entry.slug}`;
    if (!SLUG.test(entry.slug)) fail(source, "slug", "must be lowercase and hyphenated");
    if (!TREATMENT_KINDS.has(entry.kind)) fail(source, "kind", `unknown kind ${entry.kind}`);
    assertCalendarDate(source, "lastModified", entry.lastModified);
    // Completeness is a property of being public, not of being indexable: a
    // non-indexable page is still a page a patient can reach and read.
    if (entry.state === "published") {
      if (!entry.summary.trim()) fail(source, "summary", "is required");
      if (!entry.metaTitle.trim()) fail(source, "metaTitle", "is required");
      if (!entry.metaDescription.trim()) fail(source, "metaDescription", "is required");
      if (entry.sections.length < 2) fail(source, "sections", "requires at least two sections");
      if (!entry.indications.length) fail(source, "indications", "is required");
      if (!entry.limitations.length) fail(source, "limitations", "is required");
      if (!entry.carePath.length) fail(source, "carePath", "is required");
      if (!entry.faqs.length) fail(source, "faqs", "is required");
    }
    const from = targets.get(entry.slug)!;
    for (const target of entry.relatedTreatmentSlugs) {
      if (target === entry.slug) fail(source, "relatedTreatmentSlugs", "refers to itself");
      assertReference(source, "relatedTreatmentSlugs", target, targets, from);
    }
  }
}

export function validateTreatmentPostReferences(entries: Treatment[], posts: BlogPost[]) {
  const targets = postTargets(posts);
  const treatments = treatmentTargets(entries);
  for (const entry of entries) {
    const from = treatments.get(entry.slug)!;
    for (const target of entry.relatedPostSlugs) {
      assertReference(`treatments.${entry.slug}`, "relatedPostSlugs", target, targets, from);
    }
  }
}

export function validateLocations(entries: Location[], treatments: Treatment[]) {
  assertUnique(entries, "locations", (entry) => entry.slug, "slug", (entry) => entry.slug);
  const targets = treatmentTargets(treatments);
  for (const entry of entries) {
    const source = `locations.${entry.slug}`;
    if (!SLUG.test(entry.slug)) fail(source, "slug", "must be lowercase and hyphenated");
    assertCalendarDate(source, "lastModified", entry.lastModified);
    if (entry.active) {
      if (!entry.clinicName || !entry.city || !entry.state) {
        fail(source, "identity", "clinicName, city, and state are required");
      }
      if (!entry.metaTitle.trim()) fail(source, "metaTitle", "is required");
      if (!entry.metaDescription.trim()) fail(source, "metaDescription", "is required");
      if (!entry.introduction.trim()) fail(source, "introduction", "is required");
      if (!entry.firstAppointmentSteps.length) {
        fail(source, "firstAppointmentSteps", "is required");
      }
      if (!entry.whatToBring.length) fail(source, "whatToBring", "is required");
    }
    const from = { visible: entry.active, indexable: entry.indexable };
    for (const target of entry.relatedTreatmentSlugs) {
      assertReference(source, "relatedTreatmentSlugs", target, targets, from);
    }
  }
}

export function validatePosts(posts: BlogPost[], treatments: Treatment[]) {
  assertUnique(posts, "posts", (entry) => entry.slug, "slug", (entry) => entry.slug);
  assertUnique(
    posts,
    "posts",
    (entry) => entry.primaryKeyword,
    "primaryKeyword",
    (entry) => entry.slug,
  );
  const targets = treatmentTargets(treatments);
  for (const post of posts) {
    const source = `posts.${post.slug}`;
    if (!SLUG.test(post.slug)) fail(source, "slug", "must be lowercase and hyphenated");
    for (const field of ["title", "metaDescription", "dek", "primaryKeyword", "searchIntent"] as const) {
      if (!post[field]?.trim()) fail(source, field, "is required");
    }
    assertCalendarDate(source, "publishDate", post.publishDate);
    assertCalendarDate(source, "lastModified", post.lastModified);
    if (post.lastModified < post.publishDate) {
      fail(source, "lastModified", "predates publishDate");
    }
    if (post.author !== "paulo-araujo") fail(source, "author", `unknown author ${post.author}`);
    if (!Array.isArray(post.secondaryKeywords)) fail(source, "secondaryKeywords", "must be an array");
    if (!Array.isArray(post.relatedTreatmentSlugs)) fail(source, "relatedTreatmentSlugs", "must be an array");
    if (typeof post.featured !== "boolean") fail(source, "featured", "must be a boolean");
    if (!Number.isInteger(post.order)) fail(source, "order", "must be an integer");
    if (typeof post.indexable !== "boolean") fail(source, "indexable", "must be a boolean");
    if (post.state === "published") {
      if (!post.body.trim()) fail(source, "body", "is required");
      if (post.headings.length < 2) fail(source, "headings", "requires at least two sections");
    }
    const from = { visible: post.state === "published", indexable: post.indexable };
    for (const target of post.relatedTreatmentSlugs) {
      assertReference(source, "relatedTreatmentSlugs", target, targets, from);
    }
  }
}

export function validateClinics(entries: ClinicProfile[]) {
  assertUnique(entries, "clinics", (entry) => entry.slug, "slug", (entry) => entry.slug);
  for (const entry of entries) {
    const source = `clinics.${entry.slug}`;
    if (!SLUG.test(entry.slug)) fail(source, "slug", "must be lowercase and hyphenated");
    assertCalendarDate(source, "lastModified", entry.lastModified);
    if (entry.publicationState !== "published") continue;
    for (const field of [
      "name",
      "tagline",
      "description",
      "streetAddress",
      "city",
      "state",
      "phone",
      "mapUrl",
      "mapEmbedUrl",
      "imageSrc",
      "imageAlt",
    ] as const) {
      if (!entry[field]?.trim()) fail(source, field, "is required");
    }
    if (!/^\d{5}-\d{3}$/.test(entry.postalCode)) {
      fail(source, "postalCode", "must be a Brazilian CEP (00000-000)");
    }
    if (!entry.openingHours.length) fail(source, "openingHours", "is required");
    for (const window of entry.openingHoursSpecification) {
      if (!window.days.length) fail(source, "openingHoursSpecification", "needs a day list");
      if (!TIME_OF_DAY.test(window.opens) || !TIME_OF_DAY.test(window.closes)) {
        fail(source, "openingHoursSpecification", "opens/closes must be HH:MM");
      }
      if (window.closes <= window.opens) {
        fail(source, "openingHoursSpecification", "closes before it opens");
      }
    }
  }
}
