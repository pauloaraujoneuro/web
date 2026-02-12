import { EXPERTISE_AREAS } from "@/constants";

export default function ExpertiseSection() {
  return (
    <section id="expertise" className="section-shell section-anchor section-tone-secondary">
      <div className="container-shell grid gap-10 xl:grid-cols-[0.38fr_0.62fr]">
        <div className="xl:sticky xl:top-[calc(var(--anchor-offset)+1.25rem)] xl:self-start">
          <span className="badge">Especialidades</span>
          <h2 className="mt-4 text-balance text-3xl font-semibold text-primary sm:text-4xl">
            Cirurgia de coluna, nervo periférico e reabilitação
          </h2>
          <p className="mt-4 text-base leading-relaxed text-primary/85">
            Abordagem técnica com foco em diagnóstico preciso, conduta baseada em evidência e
            planejamento terapêutico individualizado.
          </p>

          <div className="mt-6 panel-line p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary/75">
              Direcionamento clínico
            </p>
            <p className="mt-2 text-sm leading-relaxed text-primary/85">
              Conduta centrada em segurança, funcionalidade e prognóstico de longo prazo para cada
              perfil de paciente.
            </p>
          </div>
        </div>

        <div className="stagger-grid grid gap-4 md:grid-cols-2">
          {EXPERTISE_AREAS.map((area, index) => (
            <article
              key={area.id}
              className={`card-surface relative p-6 ${
                index === 0 ? "md:col-span-2 md:grid md:grid-cols-[0.38fr_1fr] md:items-start" : ""
              }`}
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary/72">
                  Especialidade {index + 1}
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-primary">{area.title}</h3>
              </div>
              <p className={`text-sm leading-relaxed text-primary/82 ${index === 0 ? "mt-0" : "mt-4"}`}>
                {area.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
