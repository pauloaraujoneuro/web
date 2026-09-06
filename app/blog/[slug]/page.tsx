import type { Metadata } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import ArticleAside from "@/app/components/content/ArticleAside";
import AuthorCard from "@/app/components/content/AuthorCard";
import Breadcrumb, { type BreadcrumbItem } from "@/app/components/content/Breadcrumb";
import JsonLd from "@/app/components/content/JsonLd";
import AppointmentCta from "@/app/components/custom/AppointmentCta";
import SiteShell from "@/app/components/layout/SiteShell";
import { getPublishedPost, getPublishedPosts } from "@/app/lib/blog";
import { getPublishedTreatments } from "@/app/lib/treatments";
import {
  CONTACT_WHATSAPP_CAMPO_GRANDE_TEXT,
  DOCTOR_CRM,
  DOCTOR_NAME,
  DOCTOR_RQE,
  SITE_URL,
} from "@/constants";

type Props = { params: Promise<{ slug: string }> };

function headingId(children: ReactNode) {
  return String(children)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const markdownComponents: Components = {
  h2: ({ children }) => <h2 id={headingId(children)}>{children}</h2>,
  h3: ({ children }) => <h3 id={headingId(children)}>{children}</h3>,
  a: ({ href, children }) => <a href={href}>{children}</a>,
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T12:00:00Z`));
}

export function generateStaticParams() {
  return getPublishedPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPublishedPost(slug);
  if (!post) return { robots: { index: false, follow: true } };
  const url = `${SITE_URL}/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      url,
      type: "article",
      publishedTime: post.publishDate,
      modifiedTime: post.lastModified,
      images: ["/og/og-image.png"],
    },
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getPublishedPost(slug);
  if (!post) notFound();

  const breadcrumbs: BreadcrumbItem[] = [
    { name: "Início", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: post.title },
  ];
  const relatedTreatments = getPublishedTreatments().filter((treatment) =>
    post.relatedTreatmentSlugs.includes(treatment.slug),
  );
  const pageUrl = `${SITE_URL}/blog/${post.slug}`;

  return (
    <SiteShell>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "MedicalWebPage",
            "@id": pageUrl,
            url: pageUrl,
            name: post.title,
            description: post.metaDescription,
            datePublished: post.publishDate,
            dateModified: post.lastModified,
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
        ],
      }} />
      <div className="subpage-shell">
        <Breadcrumb items={breadcrumbs} />
        <header className="article-header">
          <span className="eyebrow">Conteúdo educativo</span>
          <h1>{post.title}</h1>
          <p>{post.dek}</p>
          <div className="article-byline">
            <AuthorCard compact />
            <p>
              Publicado em {formatDate(post.publishDate)}
              {post.lastModified !== post.publishDate ? ` · Atualizado em ${formatDate(post.lastModified)}` : ""}
            </p>
          </div>
        </header>

        <div className="editorial-layout article-layout">
          <article className="markdown-body">
            <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
              {post.body}
            </ReactMarkdown>

            <aside className="medical-disclaimer">
              <strong>Aviso de responsabilidade médica</strong>
              <p>Conteúdo exclusivamente educativo. Ele não substitui consulta, exame físico ou orientação terapêutica individualizada.</p>
            </aside>

            {relatedTreatments.length ? (
              <section>
                <h2>Informações relacionadas</h2>
                <div className="related-grid">
                  {relatedTreatments.map((treatment) => (
                    <a key={treatment.slug} href={`/tratamentos/${treatment.slug}`}>
                      {treatment.title}<span aria-hidden>→</span>
                    </a>
                  ))}
                </div>
              </section>
            ) : null}
          </article>
          <div className="detail-sidebar"><ArticleAside post={post} /></div>
        </div>

        <div className="mt-16 sm:mt-24">
          <AppointmentCta
            heading="Uma avaliação considera o seu contexto"
            body="Organize seus exames e converse com a equipe para agendar uma consulta presencial em Campo Grande."
            message={CONTACT_WHATSAPP_CAMPO_GRANDE_TEXT}
            eventLocation={`blog_${post.slug}_final`}
          />
        </div>
      </div>
    </SiteShell>
  );
}
