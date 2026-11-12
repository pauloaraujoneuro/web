import type { ArticleSource, BlogPost } from "@/content/types";

interface Reviewer {
  name: string;
  url: string;
  identifier: string[];
}

const toCitation = (source: ArticleSource) => ({
  "@type": "CreativeWork",
  name: source.title,
  ...(source.publisher ? { publisher: { "@type": "Organization", name: source.publisher } } : {}),
  ...(source.year ? { datePublished: String(source.year) } : {}),
  ...(source.url ? { url: source.url } : {}),
});

/**
 * Review and citation fields for the article's MedicalWebPage node. Each one
 * is emitted only when the article shows it on the page: an article without a
 * clinician sign-off date never claims `lastReviewed`.
 */
export const buildArticleReviewSchema = (
  post: Pick<BlogPost, "lastReviewed" | "sources">,
  reviewer: Reviewer,
) => ({
  ...(post.lastReviewed
    ? {
        lastReviewed: post.lastReviewed,
        reviewedBy: { "@type": "Physician", ...reviewer },
      }
    : {}),
  ...(post.sources?.length ? { citation: post.sources.map(toCitation) } : {}),
});
