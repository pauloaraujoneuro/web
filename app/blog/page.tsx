import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import Breadcrumb from "@/app/components/content/Breadcrumb";
import PageIntro from "@/app/components/content/PageIntro";
import AppointmentCta from "@/app/components/custom/AppointmentCta";
import SiteShell from "@/app/components/layout/SiteShell";
import { getPublishedPosts } from "@/app/lib/blog";
import { isBlogHubIndexable } from "@/app/lib/seo";
import { CONTACT_WHATSAPP_CAMPO_GRANDE_TEXT, SITE_URL } from "@/constants";

const title = "Conteúdo sobre neurocirurgia, coluna e nervos";
const description =
  "Artigos educativos do Dr. Paulo Araújo sobre avaliação neurocirúrgica, nervos periféricos, coluna e recuperação funcional.";

export function generateMetadata(): Metadata {
  const indexable = isBlogHubIndexable(getPublishedPosts());
  return {
    title: "Blog e conteúdo educativo",
    description,
    alternates: { canonical: `${SITE_URL}/blog` },
    openGraph: { title, description, url: `${SITE_URL}/blog` },
    robots: indexable ? { index: true, follow: true } : { index: false, follow: true },
  };
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T12:00:00Z`));
}

export default function BlogPage() {
  const posts = getPublishedPosts();
  const featured = posts.find((post) => post.featured);
  const remaining = posts.filter((post) => post.slug !== featured?.slug);

  return (
    <SiteShell>
      <div className="subpage-shell">
        <Breadcrumb items={[{ name: "Início", href: "/" }, { name: "Blog" }]} />
        <PageIntro
          eyebrow="Informação para pacientes e familiares"
          title={title}
          description="Textos claros para ajudar você a entender a avaliação, organizar dúvidas e participar das decisões sobre o cuidado com mais segurança."
        />

        {featured ? (
          <section className="featured-post">
            <div>
              <span>Leitura em destaque</span>
              <h2>{featured.title}</h2>
              <p>{featured.dek}</p>
              <div className="post-meta"><CalendarDays aria-hidden size={16} />{formatDate(featured.publishDate)}</div>
            </div>
            <Link href={`/blog/${featured.slug}`}>
              Ler artigo
              <ArrowRight aria-hidden size={18} strokeWidth={1.5} />
            </Link>
          </section>
        ) : (
          <section className="empty-state" aria-live="polite">
            <h2>Novos conteúdos em preparação</h2>
            <p>Esta área receberá artigos educativos revisados antes da publicação.</p>
          </section>
        )}

        {remaining.length ? (
          <section className="mt-14 sm:mt-20">
            <h2 className="section-title">Artigos mais recentes</h2>
            <div className="post-grid">
              {remaining.map((post) => (
                <article className="post-card" key={post.slug}>
                  <span>{formatDate(post.publishDate)}</span>
                  <h3>{post.title}</h3>
                  <p>{post.dek}</p>
                  <Link href={`/blog/${post.slug}`}>Ler artigo <ArrowRight aria-hidden size={17} /></Link>
                </article>
              ))}
            </div>
          </section>
        ) : null}

        <div className="mt-12 sm:mt-16">
          <AppointmentCta
            heading="Tem dúvidas sobre o seu caso?"
            body="O conteúdo do blog é educativo. Para uma orientação individualizada, converse com a equipe e organize sua avaliação presencial."
            message={CONTACT_WHATSAPP_CAMPO_GRANDE_TEXT}
            eventLocation="blog_hub_final"
          />
        </div>
      </div>
    </SiteShell>
  );
}
