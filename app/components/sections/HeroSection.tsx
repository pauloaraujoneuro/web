import Image from "next/image";
import Link from "next/link";
import TrackedWhatsAppLink from "@/app/components/analytics/TrackedWhatsAppLink";
import {
  CONTACT_WHATSAPP_URL,
  CTA_PRIMARY,
  DOCTOR_CREDENTIALS,
  DOCTOR_CRM,
  DOCTOR_HERO_POSITIONING,
  DOCTOR_NAME,
  DOCTOR_PROFILE_IMAGE,
  DOCTOR_RQE,
  DOCTOR_SHORTER_BIO,
  DOCTOR_SUBTITLE,
} from "@/constants";

interface HeroImageCardProps {
  className?: string;
}

function HeroImageCard({ className = "" }: HeroImageCardProps) {
  return (
    <div
      className={`card-surface relative overflow-hidden p-2.5 sm:p-4 xl:shadow-[0_34px_56px_-30px_rgba(13,29,36,0.74)] ${className}`}
    >
      <Image
        src={DOCTOR_PROFILE_IMAGE}
        alt="Retrato profissional do Dr. Paulo Araújo"
        width={900}
        height={1351}
        sizes="(max-width: 640px) 92vw, (max-width: 1023px) 78vw, (max-width: 1279px) 44vw, 528px"
        quality={68}
        className="h-auto w-full rounded-[0.45rem] object-cover object-top"
        priority
        fetchPriority="high"
      />
      <div className="pointer-events-none absolute inset-0 hidden bg-linear-to-t from-primary/28 via-transparent to-secondary/20 sm:block" />
      <div className="pointer-events-none absolute inset-0 hidden bg-linear-to-br from-primary/22 via-transparent to-primary/14 xl:block" />
      <div className="pointer-events-none absolute inset-4 hidden rounded-[0.4rem] border border-bg/30 shadow-[inset_0_0_0_1px_rgba(35,62,76,0.22)] xl:block" />
    </div>
  );
}

export default function HeroSection() {
  const hasExternalWhatsApp = CONTACT_WHATSAPP_URL.startsWith("https://");

  return (
    <section
      id="sobre"
      className="section-shell section-hero section-anchor section-tone-neutral"
    >
      <div className="container-shell grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start xl:items-center">
        <div>
          <h1 className="max-w-3xl text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-primary sm:text-5xl">
            {DOCTOR_NAME}{" "}
            <span className="mt-3 block text-2xl font-medium leading-snug tracking-normal text-primary/86 sm:text-3xl">
              {DOCTOR_HERO_POSITIONING}
            </span>
          </h1>

          <p className="mt-3 text-balance text-base font-normal text-primary/78 sm:text-lg uppercase">
            {DOCTOR_SUBTITLE}
          </p>

          <div className="mt-6 lg:hidden">
            <HeroImageCard className="mx-auto max-w-124" />
          </div>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary/87 sm:text-lg">
            {DOCTOR_SHORTER_BIO}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            <span className="license-badge">{DOCTOR_CRM}</span>
            <span className="license-badge">{DOCTOR_RQE}</span>
          </div>

          <div className="stagger-grid mt-8 grid gap-3">
            {DOCTOR_CREDENTIALS.map((item) => (
              <article key={item} className="panel-line p-4">
                <p className="text-sm font-normal leading-relaxed text-primary/88">
                  {item}
                </p>
              </article>
            ))}
          </div>

          {/* Mobile and desktop CTAs stay separate so analytics keeps the
              existing `hero_mobile` series; desktop had no hero CTA before. */}
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {/* Visibility lives on wrappers: `.btn-primary` sets display
                outside Tailwind's layers and would win over `hidden`. */}
            <div className="lg:hidden">
              <TrackedWhatsAppLink
                href={CONTACT_WHATSAPP_URL}
                target={hasExternalWhatsApp ? "_blank" : undefined}
                rel={hasExternalWhatsApp ? "noopener noreferrer" : undefined}
                className="btn-primary min-h-12 w-full sm:w-auto"
                eventLocation="hero_mobile"
                eventLabel={CTA_PRIMARY}
              >
                {CTA_PRIMARY}
              </TrackedWhatsAppLink>
            </div>
            <div className="hidden lg:block">
              <TrackedWhatsAppLink
                href={CONTACT_WHATSAPP_URL}
                target={hasExternalWhatsApp ? "_blank" : undefined}
                rel={hasExternalWhatsApp ? "noopener noreferrer" : undefined}
                className="btn-primary min-h-12"
                eventLocation="hero_desktop"
                eventLabel={CTA_PRIMARY}
              >
                {CTA_PRIMARY}
              </TrackedWhatsAppLink>
            </div>
            <Link href="/tratamentos" className="btn-secondary min-h-12 w-full sm:w-auto">
              Ver tratamentos
            </Link>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <HeroImageCard className="mx-auto w-full max-w-132 lg:ml-auto" />
        </div>
      </div>
    </section>
  );
}
