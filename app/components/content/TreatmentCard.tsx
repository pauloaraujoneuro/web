import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Treatment } from "@/app/lib/content-types";

export default function TreatmentCard({ treatment }: { treatment: Treatment }) {
  return (
    <article className="content-card group">
      <div>
        <h3 className="text-lg font-semibold leading-snug text-slate-900">
          {treatment.title}
        </h3>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          {treatment.shortDescription}
        </p>
      </div>
      <Link className="card-link" href={`/tratamentos/${treatment.slug}`}>
        Saiba mais
        <ArrowRight aria-hidden size={18} strokeWidth={1.5} />
      </Link>
    </article>
  );
}
