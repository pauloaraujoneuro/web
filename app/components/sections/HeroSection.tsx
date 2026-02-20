import Image from "next/image";
import {
  DOCTOR_CREDENTIALS,
  DOCTOR_CRM,
  DOCTOR_NAME,
  DOCTOR_PROFILE_IMAGE,
  DOCTOR_RQE,
  DOCTOR_SHORT_BIO,
  DOCTOR_SUBTITLE,
  DOCTOR_TITLE,
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
        width={1066}
        height={1600}
        sizes="(max-width: 640px) 92vw, (max-width: 1023px) 78vw, (max-width: 1279px) 44vw, 40vw"
        className="h-auto w-full rounded-[0.45rem] object-cover object-top"
        priority
      />
      <div className="pointer-events-none absolute inset-0 hidden bg-linear-to-t from-primary/28 via-transparent to-secondary/20 sm:block" />
      <div className="pointer-events-none absolute inset-0 hidden bg-linear-to-br from-primary/22 via-transparent to-primary/14 xl:block" />
      <div className="pointer-events-none absolute inset-4 hidden rounded-[0.4rem] border border-bg/30 shadow-[inset_0_0_0_1px_rgba(35,62,76,0.22)] xl:block" />
    </div>
  );
}

export default function HeroSection() {
  return (
    <section
      id="about"
      className="section-shell section-hero section-anchor section-tone-neutral"
    >
      <div className="container-shell grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start xl:items-center">
        <div>
          <span className="badge hero-badge">{DOCTOR_TITLE}</span>

          <h1 className="mt-4 max-w-3xl text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-primary sm:text-5xl">
            {DOCTOR_NAME}
          </h1>

          <p className="mt-3 text-balance text-base font-medium text-primary/78 sm:text-lg uppercase">
            {DOCTOR_SUBTITLE}
          </p>

          <div className="mt-6 lg:hidden">
            <HeroImageCard className="mx-auto max-w-[31rem]" />
          </div>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary/87 sm:text-lg">
            {DOCTOR_SHORT_BIO}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            <span className="license-badge">{DOCTOR_CRM}</span>
            <span className="license-badge">{DOCTOR_RQE}</span>
          </div>

          <div className="stagger-grid mt-8 grid gap-3">
            {DOCTOR_CREDENTIALS.map((item) => (
              <article key={item} className="panel-line p-4">
                <p className="text-sm font-medium leading-relaxed text-primary/88">
                  {item}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="relative hidden lg:block">
          <HeroImageCard className="mx-auto w-full max-w-[33rem] lg:ml-auto" />
        </div>
      </div>
    </section>
  );
}
