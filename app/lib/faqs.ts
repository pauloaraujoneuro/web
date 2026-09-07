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
    return { ...item, ...classification, state: "published" as const };
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
        state: "published" as const,
        order: 100 + treatmentIndex * 10 + faqIndex,
        relatedHref: `/tratamentos/${treatment.slug}`,
      })),
  );
}

export const FAQS: FaqItem[] = [...classifyHomeFaqs(), ...treatmentFaqs()];

export function getPublishedFaqs(source = FAQS) {
  const published = source.filter((item) => item.state === "published");
  const ids = published.map((item) => item.id);
  if (new Set(ids).size !== ids.length) {
    throw new Error("faqs: duplicate question id");
  }
  return published.toSorted((a, b) => a.order - b.order);
}
