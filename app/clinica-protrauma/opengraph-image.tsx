import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/app/lib/og";
import { getClinic } from "@/app/lib/clinics";

export const alt = "Clínica Protrauma";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  const clinic = getClinic("clinica-protrauma")!;
  return renderOgImage({
    eyebrow: "Local de atendimento",
    title: `${clinic.name} em ${clinic.city} - ${clinic.state}`,
    description: `${clinic.streetAddress} - ${clinic.neighborhood}`,
  });
}
