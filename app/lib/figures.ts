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
 * Dedicated banners take priority on hub cards; existing teaching figures and
 * abstract artwork remain the fallbacks. Banners never enter body figure URLs.
 */
export const treatmentCardImage = (treatment: Treatment) =>
  treatment.cardImage ?? treatment.sections.find((section) => section.figure)?.figure?.src;

export const postCardImage = (post: BlogPost) => post.cardImage ?? post.figures[0]?.src;
