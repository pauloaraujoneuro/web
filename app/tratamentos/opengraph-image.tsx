import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/app/lib/og";

export const alt = "Tratamentos e áreas de atuação";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: "Tratamentos",
    title: "Cuidado neurocirúrgico orientado à função",
    description: "Nervos periféricos, cirurgia da coluna e reabilitação neurocirúrgica.",
  });
}
