"use client";

import { useEffect, useRef, useState } from "react";

interface ContactMapEmbedProps {
  mapUrl: string;
}

export default function ContactMapEmbed({ mapUrl }: ContactMapEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isVisible) return;

    const container = containerRef.current;
    if (!container) return;

    if (!("IntersectionObserver" in window)) {
      const fallbackTimer = globalThis.setTimeout(() => {
        setIsVisible(true);
      }, 0);
      return () => globalThis.clearTimeout(fallbackTimer);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "280px 0px" },
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <div
      ref={containerRef}
      className="relative h-80 overflow-hidden rounded-[0.5rem] border border-primary/18 sm:h-97.5"
    >
      {isVisible ? (
        <iframe
          title="Mapa de atendimento"
          src={mapUrl}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-full w-full border-0"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-bg/72">
          <p className="text-sm font-medium text-primary/72">
            Carregando mapa ao aproximar da seção...
          </p>
        </div>
      )}
    </div>
  );
}
