import { ACADEMIC_MILESTONES, PROFESSIONAL_ROLES } from "@/constants";

export default function BackgroundSection() {
  return (
    <section id="background" className="section-shell section-anchor section-tone-primary">
      <div className="container-shell grid gap-10 xl:grid-cols-[0.34fr_0.66fr]">
        <div className="xl:sticky xl:top-[calc(var(--anchor-offset)+1.25rem)] xl:self-start">
          <span className="badge">Formação e Histórico Profissional</span>
          <h2 className="mt-4 text-balance text-3xl font-semibold text-primary sm:text-4xl">
            Trajetória acadêmica e prática clínica
          </h2>
          <p className="mt-4 text-base leading-relaxed text-primary/84">
            Linha de formação médica, residência, fellowship e atuação atual em neurocirurgia com
            foco em coluna, nervo periférico e reabilitação.
          </p>
        </div>

        <div className="stagger-grid space-y-6">
          <article className="relative overflow-hidden border border-primary/24 bg-primary px-6 py-7 text-bg sm:px-7">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-bg/80 to-transparent" />
            <h3 className="text-xl font-semibold text-bg">Formação acadêmica</h3>
            <ul className="mt-6 space-y-4 border-l border-bg/24 pl-4">
              {ACADEMIC_MILESTONES.map((item) => (
                <li key={item.id}>
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-bg/72">
                    {item.period}
                  </p>
                  <p className="mt-1 text-base font-semibold text-bg">{item.title}</p>
                  <p className="mt-1 text-sm font-medium text-bg/88">{item.institution}</p>
                  <p className="mt-2 text-sm leading-relaxed text-bg/80">{item.summary}</p>
                </li>
              ))}
            </ul>
          </article>

          <article className="card-surface px-6 py-7 sm:px-7">
            <h3 className="text-xl font-semibold text-primary">Atuação profissional</h3>
            <ul className="mt-6 space-y-4">
              {PROFESSIONAL_ROLES.map((item) => (
                <li key={item.id} className="panel-line p-4">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-primary/72">
                    {item.period}
                  </p>
                  <p className="mt-1 text-base font-semibold text-primary">{item.title}</p>
                  <p className="mt-1 text-sm font-medium text-primary/82">{item.institution}</p>
                  <p className="mt-2 text-sm leading-relaxed text-primary/78">{item.summary}</p>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
