import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/app/lib/og";

export const alt = "Blog e conteúdo educativo";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: "Conteúdo educativo",
    title: "Artigos sobre nervos periféricos e coluna",
    description: "Informação clara para preparar a conversa com o especialista.",
  });
}
