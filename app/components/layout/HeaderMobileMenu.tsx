"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import type { NavigationItem } from "@/constants";
import InstagramIcon from "@/app/components/icons/InstagramIcon";
import TrackedWhatsAppLink from "@/app/components/analytics/TrackedWhatsAppLink";

interface HeaderMobileMenuProps {
  navItems: NavigationItem[];
  instagramUrl: string;
  whatsappUrl: string;
  hasExternalWhatsApp: boolean;
  ctaPrimary: string;
}

export default function HeaderMobileMenu({
  navItems,
  instagramUrl,
  whatsappUrl,
  hasExternalWhatsApp,
  ctaPrimary,
}: HeaderMobileMenuProps) {
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const summaryRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const closeFromOutside = (event: PointerEvent) => {
      if (detailsRef.current?.open && !detailsRef.current.contains(event.target as Node)) {
        detailsRef.current.open = false;
      }
    };
    document.addEventListener("pointerdown", closeFromOutside);
    return () => document.removeEventListener("pointerdown", closeFromOutside);
  }, []);

  const closeMenu = () => {
    if (detailsRef.current) {
      detailsRef.current.open = false;
      summaryRef.current?.focus();
    }
  };

  return (
    <div className="flex items-center gap-2 lg:hidden">
      <a
        href={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="icon-button h-11 w-11"
        aria-label="Instagram"
      >
        <InstagramIcon className="h-4.5 w-4.5" />
      </a>

      <details
        ref={detailsRef}
        className="mobile-menu relative"
        onKeyDown={(event) => {
          if (event.key === "Escape" && detailsRef.current?.open) {
            event.preventDefault();
            closeMenu();
          }
        }}
      >
        <summary
          ref={summaryRef}
          className="mobile-menu-toggle icon-button flex h-11 w-11 list-none items-center justify-center cursor-pointer [&::-webkit-details-marker]:hidden"
          aria-label="Abrir menu"
        >
          <span className="mobile-menu-icon relative block h-5 w-6" aria-hidden="true">
            <span className="mobile-menu-line mobile-menu-line-top absolute left-0 top-0.5 block h-0.5 w-6 rounded-full bg-primary" />
            <span className="mobile-menu-line mobile-menu-line-middle absolute left-0 top-2.5 block h-0.5 w-6 rounded-full bg-primary" />
            <span className="mobile-menu-line mobile-menu-line-bottom absolute left-0 top-4.5 block h-0.5 w-6 rounded-full bg-primary" />
          </span>
        </summary>

        <div className="absolute right-0 top-[calc(100%+0.7rem)] z-10 w-[min(92vw,22rem)] rounded-xl border border-primary/15 bg-bg/96 p-4 shadow-lg">
          <ul className="space-y-1.5">
            {navItems.map((item) => {
              const itemPath = item.href.split("#")[0];
              const isActive =
                itemPath !== "/" &&
                (pathname === itemPath || pathname.startsWith(`${itemPath}/`));
              return <li key={item.href}>
                <a
                  href={item.href}
                  className={`mobile-nav-link flex min-h-12 items-center whitespace-nowrap rounded-lg px-3 py-2 text-sm font-semibold text-primary/92 transition hover:bg-primary/8 ${
                    isActive ? "mobile-nav-link-active" : ""
                  }`}
                  aria-current={isActive ? "page" : undefined}
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              </li>
            })}
          </ul>

          <div className="mt-4 border-t border-primary/12 pt-4">
            <TrackedWhatsAppLink
              href={whatsappUrl}
              target={hasExternalWhatsApp ? "_blank" : undefined}
              rel={hasExternalWhatsApp ? "noopener noreferrer" : undefined}
              className="btn-primary w-full whitespace-nowrap text-sm"
              eventLocation="header_mobile_menu"
              eventLabel={ctaPrimary}
              onClick={closeMenu}
            >
              {ctaPrimary}
            </TrackedWhatsAppLink>
          </div>
        </div>
      </details>
    </div>
  );
}
