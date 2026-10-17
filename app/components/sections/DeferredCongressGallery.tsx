"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import type { CongressGalleryItem } from "@/app/components/sections/CongressGallery";
import CongressGallerySkeleton from "@/app/components/sections/CongressGallerySkeleton";

const CongressGallery = dynamic(
  () => import("@/app/components/sections/CongressGallery"),
  { ssr: false, loading: () => <CongressGallerySkeleton /> },
);

interface DeferredCongressGalleryProps {
  items: CongressGalleryItem[];
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
      {isVisible ? (
        <CongressGallery items={items} />
      ) : (
        <CongressGallerySkeleton />
      )}
    </div>
  );
}
