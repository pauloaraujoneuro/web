"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { NavigationItem } from "@/constants";

const ACTIVE_SECTION_OFFSET_PX = 132;

function sanitizeHash(href: string) {
  return href.startsWith("#") ? href : "";
}

export default function useActiveSectionHash(navItems: NavigationItem[]) {
  const sectionHashes = useMemo(
    () => navItems.map((item) => sanitizeHash(item.href)).filter(Boolean),
    [navItems],
  );

  const [activeHash, setActiveHashState] = useState(sectionHashes[0] ?? "");
  const sectionElementsRef = useRef<Array<{ hash: string; element: HTMLElement }>>(
    [],
  );

  useEffect(() => {
    if (sectionHashes.length === 0) return;

    const fallbackHash = sectionHashes[0];
    const normalizeHash = (hash: string) =>
      sectionHashes.includes(hash) ? hash : fallbackHash;

    const updateFromLocation = () => {
      setActiveHashState(normalizeHash(window.location.hash));
    };

    sectionElementsRef.current = sectionHashes
      .map((hash) => {
        const element = document.getElementById(hash.slice(1));
        return element ? { hash, element } : null;
      })
      .filter((entry): entry is { hash: string; element: HTMLElement } => Boolean(entry));

    const updateFromScroll = () => {
      const sections = sectionElementsRef.current;
      if (sections.length === 0) return;

      const activeInViewport = sections.find(({ element }) => {
        const rect = element.getBoundingClientRect();
        return (
          rect.top <= ACTIVE_SECTION_OFFSET_PX &&
          rect.bottom > ACTIVE_SECTION_OFFSET_PX
        );
      });

      if (activeInViewport) {
        setActiveHashState(activeInViewport.hash);
        return;
      }

      const lastReached = [...sections].reverse().find(({ element }) => {
        const rect = element.getBoundingClientRect();
        return rect.top <= ACTIVE_SECTION_OFFSET_PX;
      });

      if (lastReached) {
        setActiveHashState(lastReached.hash);
        return;
      }

      setActiveHashState(fallbackHash);
    };

    let rafId = 0;
    const onScrollOrResize = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        rafId = 0;
        updateFromScroll();
      });
    };

    const onHashChange = () => {
      updateFromLocation();
      window.requestAnimationFrame(updateFromScroll);
    };

    updateFromLocation();
    updateFromScroll();

    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);
    window.addEventListener("hashchange", onHashChange);

    return () => {
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      window.removeEventListener("hashchange", onHashChange);
    };
  }, [sectionHashes]);

  const setActiveHash = (hash: string) => {
    if (sectionHashes.includes(hash)) {
      setActiveHashState(hash);
    }
  };

  return { activeHash, setActiveHash };
}
