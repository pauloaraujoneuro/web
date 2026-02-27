import Image from "next/image";
import {
  BRAND_LOGO_HEADER,
  CONTACT_WHATSAPP_URL,
  CTA_PRIMARY,
  INSTAGRAM_URL,
  NAV_ITEMS,
} from "@/constants";
import InstagramIcon from "@/app/components/icons/InstagramIcon";
import HeaderDesktopNav from "@/app/components/layout/HeaderDesktopNav";
import HeaderMobileMenu from "@/app/components/layout/HeaderMobileMenu";
import Link from "next/link";

export default function Header() {
  const hasExternalWhatsApp = CONTACT_WHATSAPP_URL.startsWith("https://");

  return (
    <header className="sticky top-0 z-50 border-b border-primary/10 bg-bg/96">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-secondary/65 to-transparent" />

      <nav className="container-shell py-3">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
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
          </Link>

          <HeaderDesktopNav navItems={NAV_ITEMS} />

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

          <HeaderMobileMenu
            navItems={NAV_ITEMS}
            instagramUrl={INSTAGRAM_URL}
            whatsappUrl={CONTACT_WHATSAPP_URL}
            hasExternalWhatsApp={hasExternalWhatsApp}
            ctaPrimary={CTA_PRIMARY}
          />
        </div>
      </nav>
    </header>
  );
}
