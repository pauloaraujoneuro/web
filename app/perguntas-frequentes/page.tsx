import type { Metadata } from "next";
import Breadcrumb from "@/app/components/content/Breadcrumb";
import FaqAccordion from "@/app/components/content/FaqAccordion";
import JsonLd from "@/app/components/content/JsonLd";
import PageIntro from "@/app/components/content/PageIntro";
import AppointmentCta from "@/app/components/conversion/AppointmentCta";
import SiteShell from "@/app/components/layout/SiteShell";
import { buildPageMetadata } from "@/app/lib/metadata";
import { getFaqTopics, getPublishedFaqs } from "@/app/lib/faqs";
import { CONTACT_WHATSAPP_FAQ_TEXT, SITE_URL } from "@/constants";

const title = "Perguntas frequentes";
const description =
  "Respostas gerais sobre consulta, tratamentos e atendimento neurocirúrgico com o Dr. Paulo Araújo em Campo Grande.";

export const metadata: Metadata = buildPageMetadata({
  title,
  description,
  path: "/perguntas-frequentes",
});

export default function FrequentlyAskedQuestionsPage() {
  const faqs = getPublishedFaqs();
  const topics = getFaqTopics(faqs);
  // Long topics open with a readable handful; the rest stays one tap away
  // rather than pushing every other topic off the screen.
  const VISIBLE_PER_TOPIC = 4;

  return (
    <SiteShell>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "@id": `${SITE_URL}/perguntas-frequentes#faq`,
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        }}
      />
      <div className="subpage-shell">
        <Breadcrumb items={[{ name: "Início", href: "/" }, { name: "Perguntas frequentes" }]} />
        <PageIntro
          eyebrow="Orientações gerais"
          title="Perguntas frequentes sobre consulta e cuidado neurocirúrgico"
          description="Reunimos respostas objetivas para ajudar no preparo da consulta. Questões sobre diagnóstico, prognóstico ou indicação de cirurgia precisam de avaliação individual."
        />

        <section className="faq-page-panel">
          <div className="faq-page-heading">
            <span>Dúvidas organizadas por assunto</span>
            <h2>Encontre uma orientação inicial</h2>
            <p>Abra cada pergunta para ler a resposta completa. O conteúdo permanece disponível mesmo sem JavaScript.</p>
          </div>

          <nav className="faq-topic-index" aria-label="Assuntos">
            <ul>
              {topics.map((topic) => (
                <li key={topic.id}>
                  <a href={`#faq-${topic.id}`}>
                    {topic.label}
                    <span aria-hidden>{topic.items.length}</span>
                    <span className="sr-only">{topic.items.length} perguntas</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="faq-topic-list">
            {topics.map((topic) => {
              const visible = topic.items.slice(0, VISIBLE_PER_TOPIC);
              const rest = topic.items.slice(VISIBLE_PER_TOPIC);
              return (
                <section key={topic.id} id={`faq-${topic.id}`} className="faq-topic">
                  <h3>
                    {topic.label}
                    <span aria-hidden>{topic.items.length}</span>
                  </h3>
                  <FaqAccordion items={visible} theme="dark" />
                  {rest.length ? (
                    <details className="faq-topic-more">
                      <summary>
                        Ver mais {rest.length}{" "}
                        {rest.length === 1 ? "pergunta" : "perguntas"}
                        <span className="sr-only"> sobre {topic.label}</span>
                      </summary>
                      <FaqAccordion items={rest} theme="dark" />
                    </details>
                  ) : null}
                </section>
              );
            })}
          </div>
        </section>

        <div className="mt-12 sm:mt-16">
          <AppointmentCta
            heading="Ainda precisa de ajuda para organizar sua consulta?"
            body="Converse com a equipe para confirmar o atendimento em Campo Grande e saber quais informações levar."
            message={CONTACT_WHATSAPP_FAQ_TEXT}
            eventLocation="faq_page_final"
          />
        </div>
      </div>
    </SiteShell>
  );
}
