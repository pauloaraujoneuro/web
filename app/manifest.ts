import type { MetadataRoute } from "next";
import { DOCTOR_NAME } from "@/constants";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: DOCTOR_NAME,
    short_name: "Dr. Paulo",
    description:
      "Atendimento especializado em neurocirurgia com foco em nervo periférico, coluna e reabilitação neurocirúrgica.",
    start_url: "/",
    display: "standalone",
    background_color: "#efefef",
    theme_color: "#233e4c",
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
