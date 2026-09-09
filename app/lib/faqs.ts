import { FAQ_ITEMS as HOME_FAQS } from "@/constants";
import type { FaqItem } from "@/content/types";
import { getPublishedTreatments } from "@/app/lib/treatments";

export const FAQ_CATEGORIES: Record<FaqItem["category"], string> = {
  consulta: "Consulta",
  tratamentos: "Tratamentos",
  recuperacao: "Recuperação",
  atendimento: "Atendimento",
};

/**
 * Classification for the homepage questions, keyed by id rather than by array
 * position: reordering `FAQ_ITEMS` must not silently recategorise an answer.
 */
const HOME_FAQ_CLASSIFICATION: Record<
  string,
  { category: FaqItem["category"]; order: number; relatedHref?: string }
> = {
  "faq-primeira-consulta": { category: "consulta", order: 1 },
  "faq-cirurgia-quando": {
    category: "tratamentos",
    order: 2,
    relatedHref: "/tratamentos",
  },
  "faq-exames-consulta": { category: "consulta", order: 3 },
  "faq-agendamento": {
    category: "atendimento",
    order: 4,
    relatedHref: "/locais-de-atendimento/campo-grande",
  },
};

function classifyHomeFaqs(): FaqItem[] {
  return HOME_FAQS.map((item) => {
    const classification = HOME_FAQ_CLASSIFICATION[item.id];
    if (!classification) {
      throw new Error(`faqs.${item.id}: missing category classification`);
    }
    return {
      ...item,
      ...classification,
      topic: FAQ_CATEGORIES[classification.category],
      topicId: classification.category,
      state: "published" as const,
    };
  });
}

/**
 * Questions answered on approved treatment pages, so the FAQ hub grows with the
 * catalog. Entries from treatments awaiting clinical approval are excluded —
 * `/perguntas-frequentes` is indexable, and unapproved answers must not reach it
 * through the back door.
 */
export function treatmentFaqs(treatments = getPublishedTreatments()): FaqItem[] {
  return treatments.flatMap((treatment, treatmentIndex) =>
    treatment.faqs
      .filter((faq) => !faq.draft)
      .map(({ id, question, answer }, faqIndex) => ({
        id,
        question,
        answer,
        category: "tratamentos" as const,
        topic: treatment.title,
        topicId: treatment.slug,
        state: "published" as const,
        order: 100 + treatmentIndex * 10 + faqIndex,
        relatedHref: `/tratamentos/${treatment.slug}`,
      })),
  );
}

export const FAQS: FaqItem[] = [...classifyHomeFaqs(), ...treatmentFaqs()];

/**
 * Questions grouped the way the hub presents them: in catalog order, so the
 * consultation questions lead and the treatments follow the order they have
 * everywhere else on the site.
 */
export function getFaqTopics(source = getPublishedFaqs()) {
  const topics = new Map<string, { id: string; label: string; items: FaqItem[] }>();
  for (const faq of source) {
    const topic = topics.get(faq.topicId) ?? { id: faq.topicId, label: faq.topic, items: [] };
    topic.items.push(faq);
    topics.set(faq.topicId, topic);
  }
  return [...topics.values()];
}

export function getPublishedFaqs(source = FAQS) {
  const published = source.filter((item) => item.state === "published");
  const ids = published.map((item) => item.id);
  if (new Set(ids).size !== ids.length) {
    throw new Error("faqs: duplicate question id");
  }
  return published.toSorted((a, b) => a.order - b.order);
}
