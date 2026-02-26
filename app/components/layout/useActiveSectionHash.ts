"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { NavigationItem } from "@/constants";

function sanitizeHash(href: string) {
  return href.startsWith("#") ? href : "";
}

export default function useActiveSectionHash(navItems: NavigationItem[]) {
  const sectionHashes = useMemo(
    () => navItems.map((item) => sanitizeHash(item.href)).filter(Boolean),
    [navItems],
  );

  const [activeHash, setActiveHash] = useState(sectionHashes[0] ?? "");
  const visibleRatiosRef = useRef<Record<string, number>>({});

  useEffect(() => {
    if (sectionHashes.length === 0) return;

    const fallbackHash = sectionHashes[0];
    const normalizeHash = (hash: string) =>
      sectionHashes.includes(hash) ? hash : fallbackHash;

    const updateFromLocation = () => {
      setActiveHash(normalizeHash(window.location.hash));
    };

    updateFromLocation();

    const sections = sectionHashes
      .map((hash) => document.getElementById(hash.slice(1)))
      .filter((element): element is HTMLElement => Boolean(element));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const hash = `#${(entry.target as HTMLElement).id}`;
          if (entry.isIntersecting) {
            visibleRatiosRef.current[hash] = entry.intersectionRatio;
          } else {
            delete visibleRatiosRef.current[hash];
          }
        });

        const mostVisibleHash = Object.entries(visibleRatiosRef.current).sort(
          (a, b) => b[1] - a[1],
        )[0]?.[0];

        if (mostVisibleHash) {
          setActiveHash(mostVisibleHash);
        }
      },
      {
        rootMargin: "-42% 0px -50% 0px",
        threshold: [0, 0.2, 0.45, 0.7, 1],
      },
    );

    sections.forEach((section) => observer.observe(section));
    window.addEventListener("hashchange", updateFromLocation);

    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", updateFromLocation);
    };
  }, [sectionHashes]);

  return { activeHash, setActiveHash };
}
