import type { Metadata } from "next";
import Breadcrumb from "@/app/components/content/Breadcrumb";
import FaqAccordion from "@/app/components/content/FaqAccordion";
import JsonLd from "@/app/components/content/JsonLd";
import PageIntro from "@/app/components/content/PageIntro";
import AppointmentCta from "@/app/components/custom/AppointmentCta";
import SiteShell from "@/app/components/layout/SiteShell";
import { FAQ_CATEGORIES, getPublishedFaqs } from "@/app/lib/faqs";
import { CONTACT_WHATSAPP_FAQ_TEXT, SITE_URL } from "@/constants";

const title = "Perguntas frequentes";
const description =
  "Respostas gerais sobre consulta, tratamentos e atendimento neurocirúrgico com o Dr. Paulo Araújo em Campo Grande.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${SITE_URL}/perguntas-frequentes` },
  openGraph: {
    title,
    description,
    url: `${SITE_URL}/perguntas-frequentes`,
  },
};

export default function FrequentlyAskedQuestionsPage() {
  const faqs = getPublishedFaqs();
  const categories = Object.entries(FAQ_CATEGORIES).flatMap(([id, label]) => {
    const items = faqs.filter((item) => item.category === id);
    return items.length ? [{ id, label, items }] : [];
  });

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
          <div className="faq-category-list">
            {categories.map((category) => (
              <section key={category.id}>
                <h3>{category.label}</h3>
                <FaqAccordion items={category.items} theme="dark" />
              </section>
            ))}
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
