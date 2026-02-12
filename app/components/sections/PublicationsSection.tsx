"use client";

import { useMemo, useRef, useState } from "react";
import {
  LATTES_DATA_NOTE,
  PUBLICATIONS,
  type PublicationCategory,
} from "@/constants";

type PublicationFilter = "all" | PublicationCategory;

const FILTERS: { key: PublicationFilter; label: string }[] = [
  { key: "all", label: "Todos" },
  { key: "congress", label: "Congressos" },
  { key: "academic", label: "Produções Acadêmicas" },
  { key: "scientific", label: "Produções Científicas" },
];

const CATEGORY_LABEL: Record<PublicationCategory, string> = {
  congress: "Congresso",
  academic: "Acadêmica",
  scientific: "Científica",
};

export default function PublicationsSection() {
  const [activeFilter, setActiveFilter] = useState<PublicationFilter>("all");
  const sectionRef = useRef<HTMLElement>(null);

  const filteredItems = useMemo(() => {
    if (activeFilter === "all") {
      return PUBLICATIONS;
    }
    return PUBLICATIONS.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  const handleFilterChange = (filter: PublicationFilter) => {
    if (filter === activeFilter) return;

    setActiveFilter(filter);

    requestAnimationFrame(() => {
      const sectionNode = sectionRef.current;
      if (!sectionNode) return;

      const anchorOffset = Number.parseInt(
        getComputedStyle(document.documentElement).getPropertyValue(
          "--anchor-offset",
        ),
        10,
      );
      const offset = Number.isFinite(anchorOffset) ? anchorOffset : 86;
      const top = Math.max(
        0,
        sectionNode.getBoundingClientRect().top + window.scrollY - offset,
      );

      window.scrollTo({ top, behavior: "smooth" });
    });
  };

  return (
    <section
      id="publications"
      ref={sectionRef}
      className="section-shell section-anchor section-tone-neutral"
    >
      <div className="container-shell">
        <div className="max-w-3xl">
          <span className="badge">Produções e Congressos</span>
          <h2 className="mt-4 text-balance text-3xl font-semibold text-primary sm:text-4xl">
            Participações, organização e produção científica
          </h2>
          <p className="mt-4 text-base leading-relaxed text-primary/84">
            Conteúdo categorizado por ano, evento e local para consulta objetiva
            e rastreável.
          </p>
          <p className="mt-2 text-sm text-primary/72">{LATTES_DATA_NOTE}</p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[270px_minmax(0,1fr)]">
          <aside className="card-surface h-fit p-4 lg:sticky lg:top-[calc(var(--anchor-offset)+1rem)]">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary/72">
              Filtrar por categoria
            </p>
            <div className="mt-3 grid gap-2">
              {FILTERS.map((filter) => (
                <button
                  key={filter.key}
                  type="button"
                  onClick={() => handleFilterChange(filter.key)}
                  className={`cursor-pointer rounded-full border px-4 py-2 text-left text-sm font-semibold transition ${
                    filter.key === activeFilter
                      ? "border-primary bg-primary text-bg"
                      : "border-primary/22 bg-bg text-primary/88 hover:border-secondary/78 hover:bg-primary/8"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </aside>

          <div className="stagger-grid space-y-4">
            {filteredItems.map((item) => (
              <article
                key={item.id}
                className="relative overflow-hidden border border-primary/18 bg-bg/96 p-5 transition hover:border-primary/36 hover:shadow-lg hover:shadow-primary/10 sm:p-6"
              >
                <span className="absolute inset-y-0 left-0 w-0.75 bg-primary/45" />

                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-primary">
                    {CATEGORY_LABEL[item.category]}
                  </span>
                  <span className="text-sm font-semibold text-primary/74">
                    {item.year}
                  </span>
                </div>

                <h3 className="mt-3 text-lg font-semibold text-primary">
                  {item.title}
                </h3>

                <dl className="mt-3 grid gap-1 text-sm text-primary/82 sm:grid-cols-2">
                  <div>
                    <dt className="inline font-semibold text-primary">
                      Evento:{" "}
                    </dt>
                    <dd className="inline">{item.event}</dd>
                  </div>
                  <div>
                    <dt className="inline font-semibold text-primary">
                      Local:{" "}
                    </dt>
                    <dd className="inline">{item.location}</dd>
                  </div>
                </dl>

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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
