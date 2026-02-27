import { DOCTOR_SUBTITLE, EXPERTISE_AREAS } from "@/constants";

export default function ExpertiseSection() {
  return (
    <section
      id="especialidades"
      className="section-shell section-anchor section-tone-ink"
    >
      <div className="container-shell relative z-10 grid gap-8 xl:grid-cols-[0.38fr_0.62fr]">
        <div className="xl:sticky xl:top-[calc(var(--anchor-offset)+1.25rem)] xl:self-start">
          <span className="badge border-bg/35! bg-bg/12! text-bg!">
            Especialidades
          </span>
          <h2 className="mt-4 text-balance text-3xl font-semibold text-bg sm:text-4xl">
            {DOCTOR_SUBTITLE}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-bg/84">
            Cuidado técnico com foco em ganho funcional, segurança do paciente e
            conduta individualizada.
          </p>

          <div className="mt-6 rounded-lg border border-bg/45 bg-bg/92 p-5 shadow-[0_22px_34px_-28px_rgba(7,17,23,0.85)]">
            <span className="mb-3 block h-0.75 w-12 rounded-full bg-primary/42" />
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary/72">
              Direcionamento clínico
            </p>
            <p className="mt-2 text-base leading-relaxed font-medium text-primary/92 sm:text-[1.07rem]">
              Planejamento terapêutico orientado à recuperação de movimentos e à
              melhora da qualidade de vida.
            </p>
          </div>
        </div>

        <div className="stagger-grid grid gap-4 md:grid-cols-2">
          {EXPERTISE_AREAS.map((area, index) => (
            <article
              key={area.id}
              className={`relative overflow-hidden rounded-xl border border-bg/24 bg-[linear-gradient(180deg,rgba(239,239,239,0.12),rgba(239,239,239,0.07))] p-6 shadow-[0_26px_38px_-26px_rgba(8,18,24,0.85)] backdrop-blur-sm ${
                index === 0
                  ? "md:col-span-2 md:grid md:grid-cols-[0.34fr_0.66fr] md:items-start md:gap-6"
                  : ""
              }`}
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-bg/70 to-transparent" />
              {index === 0 ? (
                <>
                  <div>
                    <h3 className="text-2xl font-semibold text-bg">
                      {area.title}
                    </h3>
                  </div>
                  <p className="text-base leading-relaxed font-semibold text-bg/84 md:min-w-0 mt-2 md:mt-0">
                    {area.description}
                  </p>
                  <ul className="mt-4 list-disc space-y-2 pl-4 text-sm leading-relaxed text-bg/82 md:col-span-2">
                    {area.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </>
              ) : (
                <>
                  <div>
                    <h3 className="text-2xl font-semibold text-bg">
                      {area.title}
                    </h3>
                  </div>
                  <div className="mt-4">
                    <p className="text-base leading-relaxed font-semibold text-bg/84">
                      {area.description}
                    </p>
                    <ul className="mt-3 list-disc space-y-2 pl-4 text-sm leading-relaxed text-bg/82">
                      {area.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
