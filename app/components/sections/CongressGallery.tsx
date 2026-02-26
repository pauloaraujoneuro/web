"use client";

import Image from "next/image";
import {
  useRef,
  useState,
  type KeyboardEventHandler,
  type TouchEventHandler,
} from "react";

export interface CongressGalleryItem {
  id: string;
  src: string;
  alt: string;
  year: string;
}

interface CongressGalleryProps {
  items: CongressGalleryItem[];
}

const SWIPE_THRESHOLD_PX = 42;

function getSlideLabel(item: CongressGalleryItem, index: number, total: number) {
  return `Foto ${index + 1} de ${total} (${item.year})`;
}

export default function CongressGallery({ items }: CongressGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const totalSlides = items.length;

  const goToIndex = (targetIndex: number) => {
    if (totalSlides === 0) return;
    const normalized = (targetIndex + totalSlides) % totalSlides;
    setCurrentIndex(normalized);
  };

  const goPrev = () => goToIndex(currentIndex - 1);
  const goNext = () => goToIndex(currentIndex + 1);

  const onTouchStart: TouchEventHandler<HTMLDivElement> = (event) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const onTouchEnd: TouchEventHandler<HTMLDivElement> = (event) => {
    const startX = touchStartX.current;
    touchStartX.current = null;
    if (startX === null) return;

    const endX = event.changedTouches[0]?.clientX;
    if (endX === undefined) return;

    const delta = endX - startX;
    if (Math.abs(delta) < SWIPE_THRESHOLD_PX) return;
    if (delta < 0) goNext();
    if (delta > 0) goPrev();
  };

  const onKeyDown: KeyboardEventHandler<HTMLDivElement> = (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goPrev();
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      goNext();
    }
  };

  if (totalSlides === 0) return null;

  return (
    <article className="card-surface mt-9 overflow-hidden p-4 sm:p-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary/70">
            Galeria
          </p>
        </div>
        <p
          className="hidden rounded-full border border-primary/14 bg-primary/6 px-3 py-1 text-xs font-semibold tracking-[0.08em] text-primary/80 sm:inline-flex"
          aria-live="polite"
        >
          {currentIndex + 1} / {totalSlides}
        </p>
      </div>

      <div
        className="mt-4 outline-none"
        onKeyDown={onKeyDown}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        tabIndex={0}
        aria-label="Galeria de fotos dos congressos"
      >
        <div className="relative overflow-hidden rounded-xl border border-primary/14 bg-primary/6">
          <div
            className="flex motion-safe:transition-transform motion-safe:duration-500 motion-safe:ease-out motion-reduce:transition-none"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {items.map((item, index) => (
              <figure key={item.id} className="min-w-full">
                <div className="relative aspect-[4/5] w-full bg-bg/70 sm:aspect-[16/10]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="h-full w-full object-contain"
                    sizes="(max-width: 640px) 94vw, (max-width: 1024px) 84vw, 980px"
                    priority={index === 0}
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-linear-to-t from-primary/70 via-primary/25 to-transparent px-4 py-3 text-bg sm:px-5">
                    <p className="text-xs text-bg/84">
                      {getSlideLabel(item, index, totalSlides)}
                    </p>
                  </div>
                </div>
              </figure>
            ))}
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 right-0 hidden items-center justify-between px-2 sm:flex sm:px-3">
            <button
              type="button"
              onClick={goPrev}
              className="icon-button pointer-events-auto h-9 w-9 border border-bg/32 bg-bg/88 text-primary backdrop-blur transition hover:bg-bg sm:h-10 sm:w-10"
              aria-label="Foto anterior"
            >
              <span aria-hidden="true">←</span>
            </button>
            <button
              type="button"
              onClick={goNext}
              className="icon-button pointer-events-auto h-9 w-9 border border-bg/32 bg-bg/88 text-primary backdrop-blur transition hover:bg-bg sm:h-10 sm:w-10"
              aria-label="Proxima foto"
            >
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between gap-2 rounded-lg border border-primary/12 bg-primary/5 px-2.5 py-2 sm:hidden">
        <button
          type="button"
          onClick={goPrev}
          className="icon-button h-9 w-9 border border-primary/20 bg-bg/88 text-primary transition hover:bg-bg"
          aria-label="Foto anterior"
        >
          <span aria-hidden="true">←</span>
        </button>
        <p className="text-xs font-semibold tracking-[0.08em] text-primary/80">
          {currentIndex + 1} / {totalSlides}
        </p>
        <button
          type="button"
          onClick={goNext}
          className="icon-button h-9 w-9 border border-primary/20 bg-bg/88 text-primary transition hover:bg-bg"
          aria-label="Proxima foto"
        >
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </article>
  );
}
