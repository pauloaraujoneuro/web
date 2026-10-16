import { SITE_URL } from "@/constants";
import type { BlogPost, ContentFigure, Treatment } from "@/content/types";

/**
 * Absolute illustration URLs for a page. The image sitemap and the page's
 * structured data both read these, so the two surfaces always list the same
 * drawings.
 */
const figureUrl = (figure: ContentFigure) => `${SITE_URL}${figure.src}`;

export const treatmentFigureUrls = (treatment: Treatment) =>
  treatment.sections.flatMap((section) => (section.figure ? [figureUrl(section.figure)] : []));

export const postFigureUrls = (post: BlogPost) => post.figures.map(figureUrl);

/**
 * The illustration a hub card shows: the first one the reader meets on the
 * page. Pages without illustrations get a card without an image.
 */
export const treatmentCoverFigure = (treatment: Treatment) =>
  treatment.sections.find((section) => section.figure)?.figure;

export const postCoverFigure = (post: BlogPost) => post.figures[0];
