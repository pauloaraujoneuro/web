import { CONTACT_WHATSAPP_URL } from "@/constants";
import WhatsAppIcon from "@/app/components/icons/WhatsAppIcon";

export default function WhatsAppFloatButton() {
  const hasExternalWhatsApp = CONTACT_WHATSAPP_URL.startsWith("https://");

  return (
    <a
      href={CONTACT_WHATSAPP_URL}
      target={hasExternalWhatsApp ? "_blank" : undefined}
      rel={hasExternalWhatsApp ? "noopener noreferrer" : undefined}
      className="fab-whatsapp group inline-flex h-12 w-12 items-center justify-center rounded-full border border-secondary/60 bg-primary text-bg shadow-xl shadow-primary/28 transition hover:border-bg/75 hover:bg-primary/95 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-secondary sm:h-14 sm:w-14"
      aria-label="Falar no WhatsApp"
    >
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-bg text-primary sm:h-10 sm:w-10">
        <WhatsAppIcon className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
      </span>
      <span className="pointer-events-none absolute right-[calc(100%+0.7rem)] top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-full border border-primary/18 bg-bg/95 px-3 py-1 text-xs font-semibold text-primary opacity-0 shadow-md transition group-hover:opacity-100 md:block">
        WhatsApp
      </span>
    </a>
  );
}
