"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import type { CongressGalleryItem } from "@/app/components/sections/CongressGallery";

const CongressGallery = dynamic(
  () => import("@/app/components/sections/CongressGallery"),
  { ssr: false },
);

interface DeferredCongressGalleryProps {
  items: CongressGalleryItem[];
}

function GalleryPlaceholder() {
  return (
    <article className="card-surface mt-9 overflow-hidden p-4 sm:p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary/70">
        Galeria
      </p>
      <div className="mt-4 min-h-70 rounded-xl border border-primary/14 bg-primary/6 sm:min-h-82" />
    </article>
  );
}

export default function DeferredCongressGallery({
  items,
}: DeferredCongressGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isVisible) return;

    const container = containerRef.current;
    if (!container) return;

    if (!("IntersectionObserver" in window)) {
      const timer = globalThis.setTimeout(() => {
        setIsVisible(true);
      }, 0);
      return () => globalThis.clearTimeout(timer);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "320px 0px" },
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <div ref={containerRef}>
      {isVisible ? <CongressGallery items={items} /> : <GalleryPlaceholder />}
    </div>
  );
}
