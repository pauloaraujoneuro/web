import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/app/lib/og";

export const alt = "Perguntas frequentes";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: "Orientações gerais",
    title: "Perguntas frequentes sobre consulta e cuidado",
    description: "Respostas objetivas para ajudar no preparo da avaliação.",
  });
}
