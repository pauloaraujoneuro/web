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
