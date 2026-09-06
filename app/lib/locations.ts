import {
  CONTACT_EMAIL,
  CONTACT_WHATSAPP_CAMPO_GRANDE_TEXT,
  FIRST_APPOINTMENT_STEPS,
  LOCATIONS_SCHEDULING_NOTE,
  SERVICE_LOCATIONS,
} from "@/constants";
import type { Location } from "@/app/lib/content-types";
import { validateLocations } from "@/app/lib/content-validation";
import { getPublishedTreatments } from "@/app/lib/treatments";

const campoGrande = SERVICE_LOCATIONS.find((item) => item.id === "campo-grande");

if (!campoGrande) {
  throw new Error("locations.campo-grande: canonical service location is missing");
}

export const LOCATIONS: Location[] = [
  {
    slug: "campo-grande",
    active: true,
    indexable: true,
    clinicName: campoGrande.name,
    city: campoGrande.city,
    state: campoGrande.state,
    metaTitle: "Neurocirurgião em Campo Grande - MS",
    metaDescription:
      "Informações para avaliação neurocirúrgica com o Dr. Paulo Araújo na Clínica Protrauma, em Campo Grande - MS.",
    introduction:
      "Atendimento presencial para avaliação de condições da coluna, nervos periféricos e necessidades de reabilitação neurocirúrgica.",
    schedulingGuidance: LOCATIONS_SCHEDULING_NOTE,
    firstAppointmentSteps: FIRST_APPOINTMENT_STEPS,
    whatToBring: [
      "Documento de identificação.",
      "Exames e laudos relacionados ao problema, inclusive os antigos.",
      "Lista atualizada de medicamentos em uso.",
      "Relatórios de tratamentos ou cirurgias anteriores, quando disponíveis.",
    ],
    relatedTreatmentSlugs: [
      "cirurgia-nervos-perifericos",
      "cirurgia-coluna",
      "reabilitacao-neurocirurgica",
    ],
    faqs: [],
    ctaMessage: CONTACT_WHATSAPP_CAMPO_GRANDE_TEXT,
    lastModified: "2026-09-06",
    email: CONTACT_EMAIL,
  },
];

export function getPublishedLocations(source = LOCATIONS) {
  return source
    .filter((item) => item.active && item.indexable)
    .toSorted((a, b) => a.city.localeCompare(b.city));
}

export function getPublishedLocation(slug: string) {
  return getPublishedLocations().find((item) => item.slug === slug);
}

validateLocations(
  LOCATIONS,
  new Set(getPublishedTreatments().map((treatment) => treatment.slug)),
);
