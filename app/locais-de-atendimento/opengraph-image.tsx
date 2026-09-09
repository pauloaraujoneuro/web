import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/app/lib/og";

export const alt = "Locais de atendimento";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: "Atendimento presencial",
    title: "Onde encontrar o Dr. Paulo Araújo",
    description: "Local de atendimento ativo e orientações para a consulta.",
  });
}
