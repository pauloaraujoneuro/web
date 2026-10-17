import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Treatment } from "@/content/types";
import { FIGURE_SIZES } from "@/content/figures";
import { CARD_IMAGE_SIZES } from "@/content/card-images";
import CardArtwork from "@/app/components/content/CardArtwork";

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
  /** Dedicated banner or the page's first teaching figure. */
  imageSrc?: string;
  /** Picks the placeholder artwork when there is no illustration. */
  area?: Treatment["group"];
}

export default function ContentCard({
  chip,
  chipVariant,
  meta,
  title,
  description,
  href,
  actionLabel,
  imageSrc,
  area,
}: ContentCardProps) {
  const imageSize = imageSrc ? CARD_IMAGE_SIZES[imageSrc] ?? FIGURE_SIZES[imageSrc] : undefined;

  return (
    <article className="content-card group">
      <div>
        {/* Decorative here: the title beside it already names the page, and
            the drawing's own alt text is written for where it sits in the page. */}
        {imageSrc && imageSize ? (
          <div className="card-media">
            <Image
              src={imageSrc}
              alt=""
              width={imageSize.width}
              height={imageSize.height}
              quality={70}
              sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
            />
          </div>
        ) : (
          // Every card keeps the same media slot, so a grid mixing pages with
          // and without illustrations still lines up row by row.
          <div aria-hidden className="card-media card-media-placeholder">
            <CardArtwork area={area} seed={href} />
          </div>
        )}
        <div className="card-chip-row">
          <span className={`card-eyebrow card-eyebrow-${chipVariant}`}>{chip}</span>
          {meta ? <span className="card-meta">{meta}</span> : null}
        </div>
        <h3 className="mt-3 text-lg font-semibold leading-snug text-slate-900">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
      </div>
      {/* The link's hit area stretches over the whole card (see .card-link). */}
      <Link className="card-link" href={href} aria-label={`${actionLabel}: ${title}`}>
        <span>{actionLabel}</span>
        <span aria-hidden className="card-link-arrow">
          <ArrowRight size={17} strokeWidth={2} />
        </span>
      </Link>
    </article>
  );
}
