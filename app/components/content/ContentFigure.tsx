import Image from "next/image";
import { Maximize2 } from "lucide-react";
import type { ContentFigure as ContentFigureData } from "@/content/types";
import { FIGURE_SIZES } from "@/content/figures";

/**
 * An illustration inside an article or treatment section. The drawings carry
 * their own labels, which get small on a phone, so the caption offers the
 * full-size file rather than asking the reader to pinch-zoom the page.
 */
const ContentFigure = ({ src, alt, caption }: ContentFigureData) => {
  const size = FIGURE_SIZES[src];
  // Validation should have caught this; failing the build beats an
  // illustration silently missing from a published page.
  if (!size) throw new Error(`ContentFigure: unregistered image ${src}`);

  return (
    <figure className="content-figure">
      <Image
        src={src}
        alt={alt}
        width={size.width}
        height={size.height}
        quality={75}
        sizes="(min-width: 900px) 820px, 100vw"
      />
      <figcaption>
        {caption ? <span>{caption}</span> : null}
        {/* Every figure has this link; the label keeps them distinguishable in
            a screen reader's link list while still starting with the visible text. */}
        <a
          href={src}
          className="content-figure-zoom"
          aria-label={`Ampliar ilustração: ${caption ?? alt}`}
        >
          <Maximize2 aria-hidden size={16} strokeWidth={1.5} />
          Ampliar ilustração
        </a>
      </figcaption>
    </figure>
  );
};

export default ContentFigure;
