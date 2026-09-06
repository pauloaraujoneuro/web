import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/app/lib/og";

export const alt = "Sobre o Dr. Paulo Araújo";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: "Perfil do especialista",
    title: "Sobre o Dr. Paulo Araújo",
    description: "Formação, trajetória profissional e áreas de atuação.",
  });
}
