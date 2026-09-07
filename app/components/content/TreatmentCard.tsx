import type { Treatment } from "@/content/types";
import { TREATMENT_KIND_LABELS } from "@/app/lib/treatments";
import ContentCard from "@/app/components/content/ContentCard";

export default function TreatmentCard({ treatment }: { treatment: Treatment }) {
  return (
    <ContentCard
      chip={TREATMENT_KIND_LABELS[treatment.kind]}
      chipVariant={treatment.kind}
      title={treatment.title}
      description={treatment.shortDescription}
      href={`/tratamentos/${treatment.slug}`}
      actionLabel="Saiba mais"
    />
  );
}
