import Image from "next/image";
import {
  DOCTOR_CRM,
  DOCTOR_NAME,
  DOCTOR_PROFILE_IMAGE,
  DOCTOR_RQE,
  DOCTOR_SHORT_BIO,
  DOCTOR_SUBTITLE,
  DOCTOR_TITLE,
  SERVICE_LOCATIONS,
} from "@/constants";

const HERO_DIFFERENTIALS = [
  "Especialista em nervo periférico e reabilitação pela Rede SARAH",
  "Preceptor de nervo periférico e coluna no Hospital Universitário Cajuru - PR",
  "Mestrando em Medicina (Clínica Cirúrgica) na UFPR",
];

interface HeroImageCardProps {
  serviceLocationSummary: string;
  imageClassName: string;
}

function HeroImageCard({
  serviceLocationSummary,
  imageClassName,
}: HeroImageCardProps) {
  return (
    <div className="card-surface relative overflow-hidden p-2.5 sm:p-4">
      <Image
        src={DOCTOR_PROFILE_IMAGE}
        alt="Retrato profissional do Dr. Paulo Araújo"
        width={1600}
        height={1066}
        sizes="(max-width: 640px) 100vw, (max-width: 1279px) 88vw, 46vw"
        className={imageClassName}
        priority
      />
      <div className="pointer-events-none absolute inset-0 hidden bg-linear-to-t from-primary/28 via-transparent to-secondary/20 sm:block" />

      <div className="mt-3 sm:absolute sm:bottom-5 sm:left-5 sm:mt-0">
        <div className="relative max-w-108 overflow-hidden rounded-xl border border-bg/55 bg-bg/88 px-3.5 py-3 shadow-[0_24px_45px_-28px_rgba(35,62,76,0.85)] ring-1 ring-primary/10 backdrop-blur-md sm:max-w-88 sm:px-4 sm:py-3.5">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-secondary/85 to-transparent" />

          <p className="text-[0.64rem] font-semibold uppercase tracking-[0.16em] text-primary/62 sm:text-[0.66rem]">
            Atendimento principal
          </p>

          <p className="mt-1.5 flex items-center gap-2 text-sm font-semibold text-primary">
            <span className="inline-flex h-2 w-2 rounded-full bg-secondary" />
            Curitiba - PR
          </p>

          <p className="mt-1.5 text-xs leading-relaxed text-primary/78">
            {serviceLocationSummary}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function HeroSection() {
  const serviceLocationSummary = SERVICE_LOCATIONS.map(
    (location) => location.name,
  )
    .slice(0, 2)
    .join(" e ");

  return (
    <section
      id="about"
      className="section-shell section-anchor section-tone-neutral"
    >
      <div className="container-shell grid gap-10 xl:grid-cols-[1.05fr_0.95fr] xl:items-center">
        <div>
          <span className="badge hero-badge">
            Atendimento especializado em neurocirurgia
          </span>

          <h1 className="mt-5 max-w-3xl text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-primary sm:text-5xl">
            {DOCTOR_NAME}
          </h1>

          <p className="mt-3 text-base font-semibold text-primary/84 sm:text-lg">
            {DOCTOR_TITLE}
          </p>
          <p className="text-balance text-base font-medium text-primary/78 sm:text-lg">
            {DOCTOR_SUBTITLE}
          </p>

          <div className="mt-6 xl:hidden">
            <HeroImageCard
              serviceLocationSummary={serviceLocationSummary}
              imageClassName="h-auto w-full object-cover object-center sm:h-[31rem]"
            />
          </div>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary/87 sm:text-lg">
            {DOCTOR_SHORT_BIO}
          </p>

          <div className="stagger-grid mt-8 grid gap-3">
            {HERO_DIFFERENTIALS.map((item) => (
              <article key={item} className="panel-line p-4">
                <p className="text-sm font-medium leading-relaxed text-primary/88">
                  {item}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <span className="license-badge">{DOCTOR_CRM}</span>
            <span className="license-badge">{DOCTOR_RQE}</span>
          </div>
        </div>

        <div className="relative hidden xl:block">
          <HeroImageCard
            serviceLocationSummary={serviceLocationSummary}
            imageClassName="h-[39rem] w-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
