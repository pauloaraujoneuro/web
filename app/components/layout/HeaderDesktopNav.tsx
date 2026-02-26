"use client";

import type { NavigationItem } from "@/constants";
import useActiveSectionHash from "@/app/components/layout/useActiveSectionHash";

interface HeaderDesktopNavProps {
  navItems: NavigationItem[];
}

export default function HeaderDesktopNav({ navItems }: HeaderDesktopNavProps) {
  const { activeHash, setActiveHash } = useActiveSectionHash(navItems);

  return (
    <ul className="hidden items-center gap-1 lg:flex">
      {navItems.map((item) => {
        const isActive = item.href === activeHash;
        return (
          <li key={item.href}>
            <a
              href={item.href}
              className={`nav-link ${isActive ? "nav-link-active" : ""}`}
              aria-current={isActive ? "location" : undefined}
              onClick={() => setActiveHash(item.href)}
            >
              {item.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
