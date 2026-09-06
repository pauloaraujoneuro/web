import Link from "next/link";
import { ArrowRight } from "lucide-react";

export type ContentCardChip =
  | "overview"
  | "condition"
  | "procedure"
  | "topic"
  | "status";

interface ContentCardProps {
  chip: string;
  chipVariant: ContentCardChip;
  /** Small supporting text on the chip row, such as a publication date. */
  meta?: string;
  title: string;
  description: string;
  href: string;
  actionLabel: string;
  /** 2 where the card is the first heading under the page title. */
  headingLevel?: 2 | 3;
}

export default function ContentCard({
  chip,
  chipVariant,
  meta,
  title,
  description,
  href,
  actionLabel,
  headingLevel = 3,
}: ContentCardProps) {
  const Heading = headingLevel === 2 ? "h2" : "h3";
  return (
    <article className="content-card group">
      <div>
        <div className="card-chip-row">
          <span className={`card-eyebrow card-eyebrow-${chipVariant}`}>{chip}</span>
          {meta ? <span className="card-meta">{meta}</span> : null}
        </div>
        <Heading className="mt-3 text-lg font-semibold leading-snug text-slate-900">
          {title}
        </Heading>
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
