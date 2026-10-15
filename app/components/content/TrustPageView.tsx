import Link from "next/link";
import Breadcrumb from "@/app/components/content/Breadcrumb";
import PageIntro from "@/app/components/content/PageIntro";
import AppointmentCta from "@/app/components/conversion/AppointmentCta";
import SiteShell from "@/app/components/layout/SiteShell";
import type { TrustItem, TrustPage } from "@/app/lib/trust-pages";
import { CONTACT_WHATSAPP_CAMPO_GRANDE_TEXT } from "@/constants";

const isExternal = (href: string) => /^(https?:|mailto:)/.test(href);

const ItemText = ({ item }: { item: TrustItem }) => {
  if (!item.href) return <>{item.text}</>;
  if (!isExternal(item.href)) return <Link href={item.href}>{item.text}</Link>;
  const opensNewTab = item.href.startsWith("http");
  return (
    <a
      href={item.href}
      target={opensNewTab ? "_blank" : undefined}
      rel={opensNewTab ? "noopener noreferrer" : undefined}
    >
      {item.text}
    </a>
  );
};

/** Contact and privacy share one layout: an intro, then plain text sections. */
const TrustPageView = ({ page }: { page: TrustPage }) => (
  <SiteShell>
    <div className="subpage-shell">
      <Breadcrumb items={[{ name: "Início", href: "/" }, { name: page.metaTitle }]} />
      <PageIntro eyebrow={page.eyebrow} title={page.title} description={page.description} />

      <article className="article-body trust-body">
        {page.sections.map((section) => {
          const List = section.ordered ? "ol" : "ul";
          return (
            <section id={section.id} key={section.id}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.items?.length ? (
                <List>
                  {section.items.map((item) => (
                    <li key={`${item.label ?? ""}${item.text}`}>
                      {item.label ? <strong>{item.label}: </strong> : null}
                      <ItemText item={item} />
                    </li>
                  ))}
                </List>
              ) : null}
            </section>
          );
        })}
      </article>

      <div className="mt-12 sm:mt-16">
        <AppointmentCta
          heading="Agende sua avaliação em Campo Grande"
          body="Converse com a equipe para confirmar disponibilidade de agenda e receber orientações para a consulta."
          message={CONTACT_WHATSAPP_CAMPO_GRANDE_TEXT}
          eventLocation={`trust_${page.path.slice(1)}_final`}
        />
      </div>
    </div>
  </SiteShell>
);

export default TrustPageView;
