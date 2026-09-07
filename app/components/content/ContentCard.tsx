import Link from "next/link";
import { ArrowRight } from "lucide-react";

export type ContentCardChip = "overview" | "condition" | "procedure" | "topic";

interface ContentCardProps {
  chip: string;
  chipVariant: ContentCardChip;
  /** Small supporting text on the chip row, such as a publication date. */
  meta?: string;
  title: string;
  description: string;
  href: string;
  actionLabel: string;
}

export default function ContentCard({
  chip,
  chipVariant,
  meta,
  title,
  description,
  href,
  actionLabel,
}: ContentCardProps) {
  return (
    <article className="content-card group">
      <div>
        <div className="card-chip-row">
          <span className={`card-eyebrow card-eyebrow-${chipVariant}`}>{chip}</span>
          {meta ? <span className="card-meta">{meta}</span> : null}
        </div>
        <h3 className="mt-3 text-lg font-semibold leading-snug text-slate-900">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
      </div>
      <Link className="card-link" href={href}>
        <span>{actionLabel}</span>
        <span aria-hidden className="card-link-arrow">
          <ArrowRight size={17} strokeWidth={2} />
        </span>
      </Link>
    </article>
  );
}
