import type { Treatment, TreatmentKind } from "@/app/lib/content-types";
import { validateTreatments } from "@/app/lib/content-validation";
import { PERIPHERAL_NERVE_TREATMENTS } from "@/app/content/treatments/peripheral-nerve";
import { REHABILITATION_TREATMENTS } from "@/app/content/treatments/rehabilitation";
import { SPINE_TREATMENTS } from "@/app/content/treatments/spine";

export const TREATMENTS: Treatment[] = [
  ...PERIPHERAL_NERVE_TREATMENTS,
  ...SPINE_TREATMENTS,
  ...REHABILITATION_TREATMENTS,
];


export const TREATMENT_KIND_LABELS: Record<TreatmentKind, string> = {
  overview: "Visão geral da área",
  condition: "Condição tratada",
  procedure: "Procedimento",
};

export const TREATMENT_GROUPS: Array<{
  id: Treatment["group"];
  label: string;
  description: string;
}> = [
  {
    id: "peripheral-nerve",
    label: "Nervo periférico",
    description: "Reconstrução, descompressão e planejamento funcional.",
  },
  {
    id: "spine",
    label: "Cirurgia da coluna",
    description: "Condições traumáticas e compressivas da coluna vertebral.",
  },
  {
    id: "rehabilitation",
    label: "Reabilitação neurocirúrgica",
    description: "Recuperação de movimentos e retorno às atividades.",
  },
];

function byCatalogOrder(a: Treatment, b: Treatment) {
  return a.order - b.order || a.slug.localeCompare(b.slug);
}

/**
 * Entries that have a real page: rendered, linked and navigable. Copy awaiting
 * clinical approval stays visible but non-indexable until `indexable` flips.
 */
export function getVisibleTreatments(source = TREATMENTS) {
  return source.filter((item) => item.state === "published").toSorted(byCatalogOrder);
}

export function getVisibleTreatment(slug: string) {
  return getVisibleTreatments().find((item) => item.slug === slug);
}

/** The discovery surface: only these reach the sitemap and stay indexable. */
export function getPublishedTreatments(source = TREATMENTS) {
  return getVisibleTreatments(source).filter((item) => item.indexable);
}

export function getPublishedTreatment(slug: string) {
  return getPublishedTreatments().find((item) => item.slug === slug);
}

validateTreatments(TREATMENTS);
