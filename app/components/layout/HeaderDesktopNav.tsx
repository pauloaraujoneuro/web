"use client";

import type { NavigationItem } from "@/constants";
import { usePathname } from "next/navigation";

interface HeaderDesktopNavProps {
  navItems: NavigationItem[];
}

export default function HeaderDesktopNav({ navItems }: HeaderDesktopNavProps) {
  const pathname = usePathname();

  return (
    <ul className="hidden items-center gap-1 lg:flex">
      {navItems.map((item) => {
        const itemPath = item.href.split("#")[0];
        const isActive =
          itemPath !== "/" &&
          (pathname === itemPath || pathname.startsWith(`${itemPath}/`));
        return (
          <li key={item.href}>
            <a
              href={item.href}
              className={`nav-link ${isActive ? "nav-link-active" : ""}`}
              aria-current={isActive ? "page" : undefined}
            >
              {item.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
