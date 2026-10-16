"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import { sendGTMEvent } from "@next/third-parties/google";
import { sanitizeWhatsAppUrl } from "@/app/lib/analytics";

interface TrackedWhatsAppLinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  eventLocation: string;
  eventLabel: string;
  children: ReactNode;
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
          whatsapp_url: sanitizeWhatsAppUrl(href),
        });

        onClick?.(event);
      }}
      {...props}
    >
      {children}
    </a>
  );
}
