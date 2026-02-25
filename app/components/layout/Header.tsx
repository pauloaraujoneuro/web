import Image from "next/image";
import {
  BRAND_LOGO_HEADER,
  CONTACT_WHATSAPP_URL,
  CTA_PRIMARY,
  INSTAGRAM_URL,
  NAV_ITEMS,
} from "@/constants";
import InstagramIcon from "@/app/components/icons/InstagramIcon";

export default function Header() {
  const hasExternalWhatsApp = CONTACT_WHATSAPP_URL.startsWith("https://");

  return (
    <header className="sticky top-0 z-50 border-b border-primary/10 bg-bg/96">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-secondary/65 to-transparent" />

      <nav className="container-shell py-3">
        <div className="flex items-center justify-between gap-4">
          <a
            href="#about"
            className="group flex shrink-0 items-center leading-tight"
            aria-label="Ir para o início da página"
          >
            <Image
              src={BRAND_LOGO_HEADER}
              alt="Logo Paulo Araújo"
              width={376}
              height={73}
              className="h-10 w-auto sm:h-11"
              priority
              unoptimized
              fetchPriority="high"
            />
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="nav-link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-2 lg:flex">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-button h-10 w-10"
              aria-label="Instagram"
            >
              <InstagramIcon className="h-4.5 w-4.5" />
            </a>
            <a
              href={CONTACT_WHATSAPP_URL}
              target={hasExternalWhatsApp ? "_blank" : undefined}
              rel={hasExternalWhatsApp ? "noopener noreferrer" : undefined}
              className="btn-primary whitespace-nowrap"
            >
              {CTA_PRIMARY}
            </a>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-button h-10 w-10"
              aria-label="Instagram"
            >
              <InstagramIcon className="h-4.5 w-4.5" />
            </a>

            <details className="relative">
              <summary
                className="icon-button flex h-10 w-10 list-none items-center justify-center [&::-webkit-details-marker]:hidden"
                aria-label="Abrir menu"
              >
                <span className="relative block h-5 w-6" aria-hidden="true">
                  <span className="absolute left-0 top-0.5 block h-0.5 w-6 rounded-full bg-primary" />
                  <span className="absolute left-0 top-2.5 block h-0.5 w-6 rounded-full bg-primary" />
                  <span className="absolute left-0 top-4.5 block h-0.5 w-6 rounded-full bg-primary" />
                </span>
              </summary>

              <div className="absolute right-0 top-[calc(100%+0.7rem)] z-10 w-[min(92vw,22rem)] rounded-xl border border-primary/15 bg-bg/96 p-4 shadow-lg">
                <ul className="space-y-1.5">
                  {NAV_ITEMS.map((item) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        className="block whitespace-nowrap rounded-lg px-3 py-2 text-sm font-semibold text-primary/92 transition hover:bg-primary/8"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 border-t border-primary/12 pt-4">
                  <a
                    href={CONTACT_WHATSAPP_URL}
                    target={hasExternalWhatsApp ? "_blank" : undefined}
                    rel={hasExternalWhatsApp ? "noopener noreferrer" : undefined}
                    className="btn-primary w-full whitespace-nowrap text-sm"
                  >
                    {CTA_PRIMARY}
                  </a>
                </div>
              </div>
            </details>
          </div>
        </div>
      </nav>
    </header>
  );
}
