import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/app/lib/og";

export const alt = "Dr. Paulo Araújo — Neurocirurgia";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: "Neurocirurgia",
    title: "Cirurgia de coluna, nervos periféricos e reabilitação",
    description: "Atendimento presencial na Clínica Protrauma, em Campo Grande - MS.",
  });
}
