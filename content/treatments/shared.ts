import type { Treatment } from "@/content/types";

/** Treatment FAQs share a shape; only the question and answer differ. */
export const sharedFaq = (
  id: string,
  question: string,
  answer: string,
): Treatment["faqs"][number] => ({
  id,
  category: "tratamentos",
  question,
  answer,
  order: 1,
  state: "published",
});
