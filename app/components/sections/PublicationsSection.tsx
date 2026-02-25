import {
  LATTES_URL,
  LATTES_URL_LABEL,
  PUBLICATIONS,
} from "@/constants";
import LattesIcon from "@/app/components/icons/LattesIcon";

export default function PublicationsSection() {
  const hasLattesLink = LATTES_URL.startsWith("http");

  return (
    <section
      id="publications"
      className="section-shell section-anchor section-tone-spotlight"
    >
      <div className="container-shell relative z-10">
        <div className="max-w-3xl">
          <span className="badge">Publicações</span>
          <h2 className="mt-4 text-balance text-3xl font-semibold text-primary sm:text-4xl">
            Participações recentes em congressos científicos
          </h2>
          <p className="mt-4 text-base leading-relaxed text-primary/84">
            Registro das apresentações como palestrante convidado a partir de
            2023.
          </p>
        </div>

        <div className="stagger-grid mt-8 space-y-4">
          {PUBLICATIONS.map((item) =>
            (() => {
              const [, rawRole = "", rawTheme = ""] = item.event
                .split("|")
                .map((value) => value.trim());
              const themeText = rawTheme.replace(/^Tema:\s*/i, "").trim();
              const roleText = rawRole.trim();

              return (
                <article
                  key={item.id}
                  className="card-surface relative overflow-hidden p-5 sm:p-6"
                >
                  <span className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-linear-to-r from-primary/40 via-primary/12 to-transparent" />

                  <div className="flex flex-wrap items-center justify-between gap-2.5">
                    <span className="text-2xl font-semibold tracking-[0.01em] text-primary/78">
                      {item.year}
                    </span>
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-primary">
                      Congresso
                    </span>
                  </div>

                  <h3 className="mt-3 text-lg font-semibold text-primary">
                    {item.title}
                  </h3>

                  <div className="panel-line mt-4 p-4 sm:p-4.5">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-primary/70">
                      Tema
                    </p>
                    <p className="mt-1.5 text-lg font-semibold leading-relaxed text-primary sm:text-[1.34rem]">
                      {themeText}
                    </p>
                  </div>

                  <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
                    <p className="text-sm font-medium leading-relaxed text-primary/82">
                      Local: {item.location}
                    </p>
                    {roleText ? (
                      <span className="rounded-full border border-primary/20 bg-bg px-3 py-1 text-xs font-semibold tracking-[0.01em] text-primary/78">
                        {roleText}
                      </span>
                    ) : null}
                  </div>

                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="interactive-link mt-4 whitespace-nowrap text-sm font-semibold text-primary"
                    >
                      Acessar material
                    </a>
                  ) : null}
                </article>
              );
            })(),
          )}
        </div>

        <div className="mt-8 text-sm text-primary/86">
          {hasLattesLink ? (
            <a
              href={LATTES_URL}
              target="_blank"
              rel="noreferrer"
              className="interactive-link inline-flex items-center gap-2 font-semibold text-primary"
            >
              <LattesIcon className="h-4 w-4" />
              {LATTES_URL_LABEL}
            </a>
          ) : (
            <span className="inline-flex items-center gap-2">
              <LattesIcon className="h-4 w-4 text-primary/88" />
              Currículo Lattes: link será adicionado em breve.
            </span>
          )}
        </div>
      </div>
    </section>
  );
}
