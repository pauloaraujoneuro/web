import type { MetadataRoute } from "next";
import { DOCTOR_NAME } from "@/constants";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: DOCTOR_NAME,
    short_name: "Dr. Paulo",
    description:
      "Atendimento especializado em neurocirurgia com foco em coluna, nervo periférico e reabilitação.",
    start_url: "/",
    display: "standalone",
    background_color: "#efefef",
    theme_color: "#233e4c",
    icons: [
      {
        src: "/logo-transparent.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/logo-transparent.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
