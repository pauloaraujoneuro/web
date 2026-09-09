import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/app/lib/og";
import {
  getVisibleTreatment,
  getVisibleTreatments,
  TREATMENT_KIND_LABELS,
} from "@/app/lib/treatments";

export const alt = "Tratamento";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return getVisibleTreatments().map((treatment) => ({ slug: treatment.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const treatment = getVisibleTreatment(slug);

  return renderOgImage({
    eyebrow: treatment ? TREATMENT_KIND_LABELS[treatment.kind] : "Tratamentos",
    title: treatment?.title ?? "Tratamentos e áreas de atuação",
    description: treatment?.shortDescription,
  });
}
