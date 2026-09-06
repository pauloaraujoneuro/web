import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/app/lib/og";
import { getPublishedLocation, getPublishedLocations } from "@/app/lib/locations";

export const alt = "Local de atendimento";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return getPublishedLocations().map((location) => ({ slug: location.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const location = getPublishedLocation(slug);

  return renderOgImage({
    eyebrow: "Atendimento presencial",
    title: location
      ? `Neurocirurgião em ${location.city} - ${location.state}`
      : "Locais de atendimento",
    description: location?.clinicName,
  });
}
