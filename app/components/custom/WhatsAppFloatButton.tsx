import { CONTACT_WHATSAPP_URL } from "@/constants";
import WhatsAppIcon from "@/app/components/icons/WhatsAppIcon";
import TrackedWhatsAppLink from "@/app/components/analytics/TrackedWhatsAppLink";

export default function WhatsAppFloatButton() {
  const hasExternalWhatsApp = CONTACT_WHATSAPP_URL.startsWith("https://");

  return (
    <TrackedWhatsAppLink
      href={CONTACT_WHATSAPP_URL}
      target={hasExternalWhatsApp ? "_blank" : undefined}
      rel={hasExternalWhatsApp ? "noopener noreferrer" : undefined}
      className="fab-whatsapp group inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent-green text-white shadow-xl shadow-primary/28 transition hover:bg-accent-green-hover focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-primary sm:h-14 sm:w-14"
      aria-label="Falar no WhatsApp"
      eventLocation="floating_button"
      eventLabel="Falar no WhatsApp"
    >
      <WhatsAppIcon className="h-6 w-6 sm:h-7 sm:w-7" />
      <span className="pointer-events-none absolute right-[calc(100%+0.7rem)] top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-full border border-primary/18 bg-bg/95 px-3 py-1 text-xs font-semibold text-primary opacity-0 shadow-md transition group-hover:opacity-100 md:block">
        WhatsApp
      </span>
    </TrackedWhatsAppLink>
  );
}
