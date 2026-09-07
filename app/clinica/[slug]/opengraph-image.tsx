import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/app/lib/og";
import { getVisibleClinic, getVisibleClinics } from "@/app/lib/clinics";

export const alt = "Local de atendimento";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return getVisibleClinics().map((clinic) => ({ slug: clinic.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const clinic = getVisibleClinic(slug);
  if (!clinic) throw new Error(`clinics.${slug}: no published profile`);
  return renderOgImage({
    eyebrow: "Local de atendimento",
    title: `${clinic.name} em ${clinic.city} - ${clinic.state}`,
    description: `${clinic.streetAddress} - ${clinic.neighborhood}`,
  });
}
