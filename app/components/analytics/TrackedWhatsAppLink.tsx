"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import { sendGTMEvent } from "@next/third-parties/google";

interface TrackedWhatsAppLinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  eventLocation: string;
  eventLabel: string;
  children: ReactNode;
}

function getSanitizedWhatsAppUrl(href: string) {
  try {
    const url = new URL(href);
    return `${url.origin}${url.pathname}`;
  } catch {
    return href.split("?")[0] || href;
  }
}

export default function TrackedWhatsAppLink({
  href,
  eventLocation,
  eventLabel,
  children,
  onClick,
  ...props
}: TrackedWhatsAppLinkProps) {
  return (
    <a
      href={href}
      onClick={(event) => {
        sendGTMEvent({
          event: "whatsapp_click",
          whatsapp_location: eventLocation,
          whatsapp_label: eventLabel,
          whatsapp_url: getSanitizedWhatsAppUrl(href),
        });

        onClick?.(event);
      }}
      {...props}
    >
      {children}
    </a>
  );
}
