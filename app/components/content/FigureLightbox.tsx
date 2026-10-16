"use client";

import Image from "next/image";
import { useRef, type MouseEventHandler } from "react";
import { Maximize2, X } from "lucide-react";

interface FigureLightboxProps {
  src: string;
  alt: string;
  caption?: string;
  width: number;
  height: number;
}

/**
 * The zoom control over an illustration and the full-size view it opens.
 *
 * The control is a real link to the file, so it still works before hydration;
 * once hydrated it opens a modal `<dialog>` instead, which brings Escape, focus
 * trapping and focus return with it. The link stretches over the whole
 * illustration, so tapping the drawing itself opens it too.
 */
const FigureLightbox = ({ src, alt, caption, width, height }: FigureLightboxProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const handleOpen: MouseEventHandler<HTMLAnchorElement> = (event) => {
    // Let modified clicks open the file in a new tab as a link would.
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return;
    event.preventDefault();
    dialogRef.current?.showModal();
  };

  const handleClose = () => dialogRef.current?.close();

  // Anything but the drawing itself counts as "outside": the dark backdrop,
  // the margin around the image and the caption.
  const handleDialogClick: MouseEventHandler<HTMLDialogElement> = (event) => {
    if (event.target instanceof HTMLImageElement) return;
    handleClose();
  };

  return (
    <>
      {/* Every figure has this link; the label keeps them distinguishable in
          a screen reader's link list while still starting with the visible text. */}
      <a
        href={src}
        className="content-figure-zoom"
        aria-label={`Ampliar ilustração: ${caption ?? alt}`}
        aria-haspopup="dialog"
        onClick={handleOpen}
      >
        <span className="content-figure-zoom-pill">
          <Maximize2 aria-hidden size={16} strokeWidth={1.5} />
          Ampliar
        </span>
      </a>
      <dialog
        ref={dialogRef}
        className="figure-lightbox"
        aria-label={caption ?? alt}
        onClick={handleDialogClick}
      >
        <button
          type="button"
          className="figure-lightbox-close"
          aria-label="Fechar ilustração ampliada"
          onClick={handleClose}
        >
          <X aria-hidden size={20} strokeWidth={1.5} />
        </button>
        <div className="figure-lightbox-body">
          <div className="figure-lightbox-scroller">
            <Image src={src} alt={alt} width={width} height={height} quality={90} sizes="100vw" />
          </div>
          {caption ? <p>{caption}</p> : null}
        </div>
      </dialog>
    </>
  );
};

export default FigureLightbox;
