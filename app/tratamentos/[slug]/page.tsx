import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Route } from "lucide-react";
import { notFound } from "next/navigation";
import AuthorCard from "@/app/components/content/AuthorCard";
import Breadcrumb, { type BreadcrumbItem } from "@/app/components/content/Breadcrumb";
import FaqAccordion from "@/app/components/content/FaqAccordion";
import JsonLd from "@/app/components/content/JsonLd";
import RelatedLinks from "@/app/components/content/RelatedLinks";
import SectionToc from "@/app/components/content/SectionToc";
import AppointmentCta from "@/app/components/custom/AppointmentCta";
import SiteShell from "@/app/components/layout/SiteShell";
import { getPublishedPosts } from "@/app/lib/blog";
import {
  getVisibleTreatment,
  getVisibleTreatments,
  TREATMENT_KIND_LABELS,
} from "@/app/lib/treatments";
import {
  CONTACT_WHATSAPP_CAMPO_GRANDE_TEXT,
  DOCTOR_CRM,
  DOCTOR_NAME,
  DOCTOR_RQE,
  SITE_URL,
} from "@/constants";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getVisibleTreatments().map((treatment) => ({ slug: treatment.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const treatment = getVisibleTreatment(slug);
  if (!treatment) return { robots: { index: false, follow: true } };
  const url = `${SITE_URL}/tratamentos/${treatment.slug}`;
  return {
    title: treatment.metaTitle,
    description: treatment.metaDescription,
    alternates: { canonical: url },
    robots: treatment.indexable
      ? { index: true, follow: true }
      : { index: false, follow: true },
    openGraph: {
      title: treatment.metaTitle,
      description: treatment.metaDescription,
      url,
      type: "article",
    },
  };
}

export default async function TreatmentDetailPage({ params }: Props) {
  const { slug } = await params;
  const treatment = getVisibleTreatment(slug);
  if (!treatment) notFound();

  const breadcrumbs: BreadcrumbItem[] = [
    { name: "Início", href: "/" },
    { name: "Tratamentos", href: "/tratamentos" },
    { name: treatment.title },
  ];
  const related = getVisibleTreatments().filter((item) =>
    treatment.relatedTreatmentSlugs.includes(item.slug),
  );
  const relatedPosts = getPublishedPosts().filter((post) =>
    treatment.relatedPostSlugs.includes(post.slug),
  );
  const pageUrl = `${SITE_URL}/tratamentos/${treatment.slug}`;

  return (
    <SiteShell>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "MedicalWebPage",
              "@id": pageUrl,
              url: pageUrl,
              name: treatment.title,
              description: treatment.metaDescription,
              lastReviewed: treatment.lastModified,
              author: {
                "@type": "Physician",
                name: `Dr. ${DOCTOR_NAME}`,
                identifier: [DOCTOR_CRM, DOCTOR_RQE],
              },
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: breadcrumbs.map((item, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name: item.name,
                item: item.href ? `${SITE_URL}${item.href}` : pageUrl,
              })),
            },
            {
              "@type": "FAQPage",
              mainEntity: treatment.faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: { "@type": "Answer", text: faq.answer },
              })),
            },
          ],
        }}
      />
      <div className="subpage-shell">
        <Breadcrumb items={breadcrumbs} />
        <header className="detail-hero">
          <div>
            <span className="eyebrow">Informação sobre tratamento</span>
            <h1>{treatment.title}</h1>
            <p>{treatment.summary}</p>
          </div>
          <aside className="detail-hero-card">
            <span>Como começa</span>
            <p>História clínica, exame neurológico e revisão dos exames já disponíveis.</p>
            <Link href="/locais-de-atendimento/campo-grande">
              Ver atendimento em Campo Grande
              <ArrowRight aria-hidden size={17} strokeWidth={1.5} />
            </Link>
          </aside>
        </header>

        <div className="editorial-layout">
          <article className="article-body">
            <SectionToc
              items={treatment.sections.map((section) => ({
                id: section.id,
                text: section.heading,
              }))}
            />

            {treatment.sections.map((section) => (
              <section id={section.id} key={section.id}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.bullets?.length ? (
                  <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
                ) : null}
              </section>
            ))}

            <section>
              <h2>Quando procurar avaliação especializada</h2>
              <ul className="check-list">
                {treatment.indications.map((item) => (
                  <li key={item}><Check aria-hidden size={19} strokeWidth={1.5} />{item}</li>
                ))}
              </ul>
            </section>

            <section className="soft-panel">
              <h2>Limites e alternativas de cuidado</h2>
              {treatment.limitations.map((item) => <p key={item}>{item}</p>)}
            </section>

            <section>
              <h2>Etapas do cuidado</h2>
              <ol className="timeline-list">
                {treatment.carePath.map((item, index) => (
                  <li key={item}>
                    <span>{index + 1}</span>
                    <p>{item}</p>
                  </li>
                ))}
              </ol>
            </section>

            <section>
              <h2>Perguntas frequentes</h2>
              <FaqAccordion items={treatment.faqs} currentPath={`/tratamentos/${treatment.slug}`} />
            </section>

            <section>
              <h2>Tratamentos relacionados</h2>
              <RelatedLinks
                items={related.map((item) => ({
                  href: `/tratamentos/${item.slug}`,
                  title: item.title,
                  eyebrow: TREATMENT_KIND_LABELS[item.kind],
                }))}
              />
            </section>

            {relatedPosts.length ? (
              <section>
                <h2>Leituras relacionadas</h2>
                <RelatedLinks
                  items={relatedPosts.map((post) => ({
                    href: `/blog/${post.slug}`,
                    title: post.title,
                    eyebrow: "Artigo educativo",
                  }))}
                />
              </section>
            ) : null}

            <aside className="medical-disclaimer">
              <strong>Informação médica responsável</strong>
              <p>Este conteúdo é educativo e não substitui consulta, exame físico ou orientação individualizada. Não há promessa de resultado.</p>
            </aside>
          </article>

          <aside className="detail-sidebar">
            <AuthorCard />
            <div className="sidebar-note">
              <Route aria-hidden size={21} strokeWidth={1.5} />
              <p>O melhor caminho depende do diagnóstico, do impacto funcional e dos objetivos discutidos em consulta.</p>
            </div>
          </aside>
        </div>

        <div className="mt-12 sm:mt-16">
          <AppointmentCta
            heading="Avalie seu caso com contexto e clareza"
            body="Converse com a equipe para organizar sua consulta presencial e saber quais exames levar."
            message={CONTACT_WHATSAPP_CAMPO_GRANDE_TEXT}
            eventLocation={`treatment_${treatment.slug}_final`}
          />
        </div>
      </div>
    </SiteShell>
  );
}
