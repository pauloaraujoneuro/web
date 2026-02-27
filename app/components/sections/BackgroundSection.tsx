import Image from "next/image";
import {
  ACADEMIC_MILESTONES,
  DOCTOR_PROFILE_IMAGE_FRONT,
  DOCTOR_PROFILE_IMAGE_FRONT_WIDE,
} from "@/constants";

function getAcademicMilestoneSortKey(period: string): number {
  const normalizedPeriod = period.trim().toLowerCase();
  if (normalizedPeriod === "atual") {
    return Number.MAX_SAFE_INTEGER;
  }

  const fullDateMatch = period.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
  if (fullDateMatch) {
    const [, day, month, year] = fullDateMatch;
    return Number(`${year}${month}${day}`);
  }

  const yearMatch = period.match(/^(\d{4})$/);
  if (yearMatch) {
    return Number(`${yearMatch[1]}1231`);
  }

  const rangeMatch = period.match(/^(\d{4})\s*-\s*(\d{4}|atual)$/i);
  if (rangeMatch) {
    const [, startYear, endYear] = rangeMatch;
    if (endYear.toLowerCase() === "atual") {
      return Number.MAX_SAFE_INTEGER - 1;
    }
    return Number(`${endYear}1231`) || Number(`${startYear}1231`);
  }

  return 0;
}

export default function BackgroundSection() {
  const academicMilestonesSorted = [...ACADEMIC_MILESTONES].sort(
    (firstMilestone, secondMilestone) =>
      getAcademicMilestoneSortKey(secondMilestone.period) -
      getAcademicMilestoneSortKey(firstMilestone.period),
  );

  return (
    <section
      id="formacao"
      className="section-shell section-anchor section-tone-primary"
    >
      <div className="container-shell grid gap-10 xl:grid-cols-[0.34fr_0.66fr]">
        <div className="xl:sticky xl:top-[calc(var(--anchor-offset)+1.25rem)] xl:self-start">
          <span className="badge">Formação</span>
          <h2 className="mt-4 text-balance text-3xl font-semibold text-primary sm:text-4xl">
            Formação acadêmica e titulação
          </h2>
          <p className="mt-4 text-base leading-relaxed text-primary/84">
            Histórico de titulação e especializações em neurocirurgia.
          </p>
        </div>

        <div className="stagger-grid space-y-6">
          <article className="relative overflow-hidden rounded-xl border border-primary/24 bg-primary px-6 py-7 text-bg sm:px-7">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-bg/80 to-transparent" />
            <h3 className="text-xl font-semibold text-bg">Trajetória</h3>
            <ul className="mt-6 space-y-4 border-l border-bg/24 pl-4">
              {academicMilestonesSorted.map((item) => (
                <li key={item.id}>
                  <p className="text-base font-semibold text-bg">
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm font-medium text-bg/88">
                    {item.institution}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-bg/80">
                    {item.summary}
                  </p>
                  {item.details ? (
                    <ul className="mt-2 list-disc space-y-1 pl-4 text-sm leading-relaxed text-bg/78">
                      {item.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              ))}
            </ul>
          </article>

          <article className="card-surface overflow-hidden p-2.5 sm:p-3">
            <Image
              src={DOCTOR_PROFILE_IMAGE_FRONT}
              alt="Dr. Paulo Araújo em retrato frontal"
              width={1200}
              height={1600}
              sizes="(max-width: 767px) 100vw, 0px"
              quality={70}
              className="h-auto w-full rounded-[0.5rem] object-contain object-top md:hidden"
            />
            <Image
              src={DOCTOR_PROFILE_IMAGE_FRONT_WIDE}
              alt="Dr. Paulo Araújo em retrato frontal"
              width={1920}
              height={1080}
              sizes="(min-width: 768px) 66vw, 0px"
              quality={70}
              className="hidden h-auto w-full rounded-[0.5rem] object-contain object-top md:block"
            />
          </article>
        </div>
      </div>
    </section>
  );
}
