import type { Metadata } from "next";
import { SITE_URL } from "@/constants";

interface PageMetadataInput {
  /** Browser-tab and search title, before the root template is applied. */
  title: string;
  description: string;
  /** Path from the site root, e.g. "/tratamentos/hernia-disco". */
  path: string;
  /** Longer headline for shares, when the tab title is deliberately shorter. */
  socialTitle?: string;
  indexable?: boolean;
  openGraph?: Metadata["openGraph"];
}

/**
 * One builder for every route's metadata, so Open Graph and Twitter can never
 * drift apart again: a route that defines only `openGraph` silently inherits
 * the homepage's Twitter card, and shares then show the wrong title.
 *
 * `robots` is set only to withhold a page. Leaving it undefined lets the route
 * inherit the root policy, which carries `max-image-preview: large` and the
 * snippet limits that an `{ index: true }` override would quietly discard.
 */
export function buildPageMetadata({
  title,
  description,
  path,
  socialTitle = title,
  indexable = true,
  openGraph,
}: PageMetadataInput): Metadata {
  const url = `${SITE_URL}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    ...(indexable ? {} : { robots: { index: false, follow: true } }),
    openGraph: {
      title: socialTitle,
      description,
      url,
      type: "website",
      locale: "pt_BR",
      ...openGraph,
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
    },
  };
}

/** Metadata for a URL that resolves to nothing: never indexed, never shared. */
export const NOT_FOUND_METADATA: Metadata = {
  robots: { index: false, follow: true },
};
