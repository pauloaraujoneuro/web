import Image from "next/image";
import type { ContentFigure as ContentFigureData } from "@/content/types";
import { FIGURE_SIZES } from "@/content/figures";
import FigureLightbox from "@/app/components/content/FigureLightbox";

/**
 * An illustration inside an article or treatment section. The drawings carry
 * their own labels, which get small on a phone, so the illustration opens a
 * full-size view rather than asking the reader to pinch-zoom the page.
 */
const ContentFigure = ({ src, alt, caption }: ContentFigureData) => {
  const size = FIGURE_SIZES[src];
  // Validation should have caught this; failing the build beats an
  // illustration silently missing from a published page.
  if (!size) throw new Error(`ContentFigure: unregistered image ${src}`);

  return (
    <figure className="content-figure">
      <div className="content-figure-frame">
        <Image
          src={src}
          alt={alt}
          width={size.width}
          height={size.height}
          quality={75}
          sizes="(min-width: 900px) 820px, 100vw"
        />
        <FigureLightbox src={src} alt={alt} caption={caption} {...size} />
      </div>
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
};

export default ContentFigure;
