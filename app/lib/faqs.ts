import { FAQ_ITEMS as HOME_FAQS } from "@/constants";
import type { FaqItem } from "@/app/lib/content-types";

export const FAQ_CATEGORIES: Record<FaqItem["category"], string> = {
  consulta: "Consulta",
  tratamentos: "Tratamentos",
  recuperacao: "Recuperação",
  atendimento: "Atendimento",
};

export const FAQS: FaqItem[] = HOME_FAQS.map((item, index) => ({
  ...item,
  category:
    index === 0
      ? "consulta"
      : index === 1
        ? "tratamentos"
        : index === 2
          ? "consulta"
          : "atendimento",
  order: index + 1,
  state: "published",
  relatedHref:
    index === 1
      ? "/tratamentos"
      : index === 3
        ? "/locais-de-atendimento/campo-grande"
        : undefined,
}));

export function getPublishedFaqs() {
  return FAQS.filter((item) => item.state === "published").toSorted(
    (a, b) => a.order - b.order,
  );
}
