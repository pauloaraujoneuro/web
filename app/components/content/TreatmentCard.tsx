import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Treatment } from "@/app/lib/content-types";
import { TREATMENT_KIND_LABELS } from "@/app/lib/treatments";

export default function TreatmentCard({ treatment }: { treatment: Treatment }) {
  return (
    <article className="content-card treatment-card group">
      <div>
        <span className={`card-eyebrow card-eyebrow-${treatment.kind}`}>
          {TREATMENT_KIND_LABELS[treatment.kind]}
        </span>
        <h3 className="mt-3 text-lg font-semibold leading-snug text-slate-900">
          {treatment.title}
        </h3>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          {treatment.shortDescription}
        </p>
      </div>
      <Link className="card-link" href={`/tratamentos/${treatment.slug}`}>
        <span>Saiba mais</span>
        <span aria-hidden className="card-link-arrow">
          <ArrowRight size={17} strokeWidth={2} />
        </span>
      </Link>
    </article>
  );
}
