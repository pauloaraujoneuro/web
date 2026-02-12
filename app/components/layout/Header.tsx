"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  BRAND_LOGO_HEADER,
  CONTACT_WHATSAPP_URL,
  CTA_PRIMARY,
  INSTAGRAM_URL,
  NAV_ITEMS,
} from "@/constants";
import InstagramIcon from "@/app/components/icons/InstagramIcon";

function MenuIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <span className="relative block h-5 w-6">
      <span
        className={`absolute left-0 top-0.5 block h-0.5 w-6 rounded-full bg-primary transition ${
          isOpen ? "translate-y-2 rotate-45" : ""
        }`}
      />
      <span
        className={`absolute left-0 top-2.5 block h-0.5 w-6 rounded-full bg-primary transition ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
      />
      <span
        className={`absolute left-0 top-4.5 block h-0.5 w-6 rounded-full bg-primary transition ${
          isOpen ? "-translate-y-2 -rotate-45" : ""
        }`}
      />
    </span>
  );
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const hasExternalWhatsApp = CONTACT_WHATSAPP_URL.startsWith("https://");
  const menuContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isMenuOpen) return;

    const onPointerDown = (event: PointerEvent) => {
      if (!menuContainerRef.current) return;
      if (!menuContainerRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-primary/10 bg-bg/92 backdrop-blur-md">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-secondary/65 to-transparent" />

      <nav className="container-shell py-3">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="group flex shrink-0 items-center leading-tight"
            aria-label="Página inicial"
          >
            <Image
              src={BRAND_LOGO_HEADER}
              alt="Logo Paulo Araújo"
              width={3758}
              height={727}
              className="h-10 w-auto sm:h-11"
              priority
            />
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="nav-link">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-2 lg:flex">
            <Link
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-button h-10 w-10"
              aria-label="Instagram"
            >
              <InstagramIcon className="h-4.5 w-4.5" />
            </Link>
            <Link
              href={CONTACT_WHATSAPP_URL}
              target={hasExternalWhatsApp ? "_blank" : undefined}
              rel={hasExternalWhatsApp ? "noopener noreferrer" : undefined}
              className="btn-primary whitespace-nowrap"
            >
              {CTA_PRIMARY}
            </Link>
          </div>

          <div
            ref={menuContainerRef}
            className="relative flex items-center gap-2 lg:hidden"
          >
            <Link
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-button h-10 w-10"
              aria-label="Instagram"
            >
              <InstagramIcon className="h-4.5 w-4.5" />
            </Link>

            <button
              className="icon-button h-10 w-10"
              onClick={() => setIsMenuOpen((value) => !value)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav-panel"
              aria-label="Abrir menu"
            >
              <MenuIcon isOpen={isMenuOpen} />
            </button>

            {isMenuOpen ? (
              <div
                id="mobile-nav-panel"
                className="absolute right-0 top-[calc(100%+0.7rem)] z-10 w-[min(92vw,22rem)] rounded-xl border border-primary/15 bg-bg/96 p-4 shadow-lg"
              >
                <ul className="space-y-1.5">
                  {NAV_ITEMS.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="block whitespace-nowrap rounded-lg px-3 py-2 text-sm font-semibold text-primary/92 transition hover:bg-primary/8"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 border-t border-primary/12 pt-4">
                  <Link
                    href={CONTACT_WHATSAPP_URL}
                    target={hasExternalWhatsApp ? "_blank" : undefined}
                    rel={
                      hasExternalWhatsApp ? "noopener noreferrer" : undefined
                    }
                    onClick={() => setIsMenuOpen(false)}
                    className="btn-primary w-full whitespace-nowrap text-sm"
                  >
                    {CTA_PRIMARY}
                  </Link>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </nav>
    </header>
  );
}
