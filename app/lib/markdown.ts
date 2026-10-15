/**
 * The Markdown representation of every page, served at the page's own URL to
 * clients that send `Accept: text/markdown` (see `proxy.ts`).
 *
 * Each document is composed from the same catalogs and constants as the HTML
 * page, never from scraped markup, so the two representations cannot drift
 * into saying different things. Relative links are made absolute: an agent
 * reading the Markdown has no base URL to resolve them against.
 */
import { getVisiblePosts } from "@/app/lib/blog";
import { clinicPath, fullAddress, getVisibleClinics } from "@/app/lib/clinics";
import { getFaqTopics } from "@/app/lib/faqs";
import { getPublishedLocations } from "@/app/lib/locations";
import {
  getVisibleTreatments,
  TREATMENT_GROUPS,
  TREATMENT_KIND_LABELS,
} from "@/app/lib/treatments";
import { TRUST_PAGES, type TrustPage } from "@/app/lib/trust-pages";
import {
  ACADEMIC_MILESTONES,
  CONSULTATION_APPROACH_POINTS,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_WHATSAPP_FORMATTED,
  CONTACT_WHATSAPP_URL,
  DOCTOR_CREDENTIALS,
  DOCTOR_CRM,
  DOCTOR_NAME,
  DOCTOR_RQE,
  DOCTOR_SHORT_BIO,
  DOCTOR_SHORTER_BIO,
  DOCTOR_SUBTITLE,
  DOCTOR_TITLE,
  EXPERTISE_AREAS,
  FAQ_ITEMS,
  LATTES_URL,
  LATTES_URL_LABEL,
  LOCATIONS_SCHEDULING_NOTE,
  PROFESSIONAL_ROLES,
  PUBLICATIONS,
  SITE_URL,
} from "@/constants";
import type { BlogPost, ClinicProfile, Location, Treatment } from "@/content/types";

const BYLINE = `Dr. ${DOCTOR_NAME} — ${DOCTOR_TITLE} (${DOCTOR_CRM} • ${DOCTOR_RQE})`;

const absoluteUrl = (path: string) => (path.startsWith("/") ? `${SITE_URL}${path}` : path);

/** `](/x)` → `](https://…/x)`, for links and images written in content. */
const absolutizeLinks = (markdown: string) =>
  markdown.replace(/\]\(\s*\//g, `](${SITE_URL}/`);

const link = (label: string, href: string) => `[${label}](${absoluteUrl(href)})`;

const bullets = (items: string[]) => items.map((item) => `- ${item}`);

const numbered = (items: string[]) => items.map((item, index) => `${index + 1}. ${item}`);

const section = (heading: string, ...body: Array<string | string[]>) => [
  `## ${heading}`,
  "",
  ...body.flatMap((part) => (Array.isArray(part) ? [...part, ""] : [part, ""])),
];

/** `path` is the canonical page the document represents; `null` for errors. */
function renderDocument(path: string | null, title: string, lead: string, body: string[]) {
  const lines = [
    `# ${title}`,
    "",
    `> ${lead}`,
    "",
    ...body,
    "---",
    "",
    ...(path === null ? [] : [`Página: ${SITE_URL}${path} · ${BYLINE}`, ""]),
    "Conteúdo educativo, em conformidade com as normas do Conselho Federal de Medicina (CFM). Não substitui consulta, exame físico ou orientação individualizada, e não apresenta promessa de resultado.",
    "",
    `Mais conteúdo: ${link("índice para agentes (llms.txt)", "/llms.txt")} · ${link("mapa do site", "/sitemap.xml")} · ${link("contato", "/contato")}`,
  ];
  return `${absolutizeLinks(lines.join("\n").replace(/\n{3,}/g, "\n\n")).trimEnd()}\n`;
}

const contactLines = () => [
  `- WhatsApp: ${link(CONTACT_WHATSAPP_FORMATTED, CONTACT_WHATSAPP_URL)}`,
  `- Telefone: ${CONTACT_PHONE}`,
  `- E-mail: ${link(CONTACT_EMAIL, `mailto:${CONTACT_EMAIL}`)}`,
];

const overviewHref: Record<string, string> = {
  "peripheral-nerves": "/tratamentos/cirurgia-nervos-perifericos",
  spine: "/tratamentos/cirurgia-coluna",
  rehabilitation: "/tratamentos/reabilitacao-neurocirurgica",
};

function homeDocument() {
  const clinics = getVisibleClinics();
  return renderDocument(
    "",
    `Dr. ${DOCTOR_NAME} — ${DOCTOR_TITLE} em Campo Grande - MS`,
    `${DOCTOR_SUBTITLE}. ${DOCTOR_SHORTER_BIO}`,
    [
      `${DOCTOR_CRM} • ${DOCTOR_RQE}`,
      "",
      ...bullets(DOCTOR_CREDENTIALS),
      "",
      ...section(
        "Especialidades",
        EXPERTISE_AREAS.flatMap((area) => [
          `### ${area.title}`,
          "",
          area.description,
          "",
          ...bullets(area.highlights),
          "",
          `Saiba mais: ${link(area.title, overviewHref[area.id] ?? "/tratamentos")}`,
          "",
        ]),
      ),
      ...section(
        "Formação acadêmica e titulação",
        bullets(
          ACADEMIC_MILESTONES.map(
            (milestone) => `${milestone.period} — ${milestone.title}, ${milestone.institution}`,
          ),
        ),
      ),
      ...section(
        "Perguntas e respostas",
        FAQ_ITEMS.flatMap((faq) => [`### ${faq.question}`, "", faq.answer, ""]),
        `Mais respostas: ${link("perguntas frequentes", "/perguntas-frequentes")}`,
      ),
      ...section(
        "Participações recentes em congressos científicos",
        bullets(
          PUBLICATIONS.map((item) => `${item.year} — ${item.title} (${item.location}). ${item.event}`),
        ),
        `${link(LATTES_URL_LABEL, LATTES_URL)}`,
      ),
      ...section(
        "Contato e atendimento presencial em Campo Grande",
        LOCATIONS_SCHEDULING_NOTE,
        contactLines(),
        clinics.map(
          (clinic) => `Local: ${link(clinic.name, clinicPath(clinic))} — ${fullAddress(clinic)}.`,
        ),
        bullets(CONSULTATION_APPROACH_POINTS),
      ),
      ...section(
        "Páginas do site",
        bullets([
          link(`Sobre o Dr. ${DOCTOR_NAME}`, "/sobre"),
          link("Tratamentos e áreas de atuação", "/tratamentos"),
          link("Blog e conteúdo educativo", "/blog"),
          link("Perguntas frequentes", "/perguntas-frequentes"),
          link("Locais de atendimento", "/locais-de-atendimento"),
          link("Contato e agendamento", "/contato"),
          link("Privacidade", "/privacidade"),
        ]),
      ),
    ],
  );
}

function aboutDocument() {
  const current = PROFESSIONAL_ROLES.filter((role) => role.status === "active");
  const prior = PROFESSIONAL_ROLES.filter((role) => role.status === "deferred");
  return renderDocument("/sobre", `Sobre o Dr. ${DOCTOR_NAME}`, `${DOCTOR_TITLE} — ${DOCTOR_CRM} • ${DOCTOR_RQE}`, [
    DOCTOR_SHORT_BIO,
    "",
    ...section(
      "Áreas de foco",
      "O atendimento reúne três frentes: cirurgia de nervo periférico, cirurgia de coluna e reabilitação neurocirúrgica. A conduta de cada caso é definida na avaliação presencial, a partir do exame clínico e dos exames disponíveis.",
      EXPERTISE_AREAS.flatMap((area) => [`### ${area.title}`, "", area.description, "", ...bullets(area.highlights), ""]),
    ),
    ...section(
      "Formação e fellowship",
      bullets(
        ACADEMIC_MILESTONES.map(
          (milestone) => `${milestone.period} — ${milestone.title}, ${milestone.institution}. ${milestone.summary}`,
        ),
      ),
    ),
    ...section("Atendimento atual", bullets(current.map((role) => `${role.institution}: ${role.summary}`))),
    ...section("Atuações anteriores", bullets(prior.map((role) => `${role.institution}: ${role.summary}`))),
    ...section(
      "Congressos e atividade acadêmica",
      bullets(PUBLICATIONS.map((item) => `${item.year} · ${item.location} — ${item.title}. ${item.event}`)),
      bullets(DOCTOR_CREDENTIALS),
      link(LATTES_URL_LABEL, LATTES_URL),
    ),
    ...section("Agendamento", contactLines()),
  ]);
}

function treatmentsHubDocument(treatments: Treatment[]) {
  return renderDocument(
    "/tratamentos",
    "Cuidado neurocirúrgico orientado à função e à qualidade de vida",
    "Cada plano começa pela avaliação individual do quadro. Conheça os principais eixos de atuação e encontre informações para conversar com o especialista com mais clareza.",
    TREATMENT_GROUPS.flatMap((group) => {
      const entries = treatments.filter((entry) => entry.group === group.id);
      if (!entries.length) return [];
      return section(
        group.label,
        group.description,
        bullets(
          entries.map(
            (entry) =>
              `${link(entry.title, `/tratamentos/${entry.slug}`)} (${TREATMENT_KIND_LABELS[entry.kind]}): ${entry.shortDescription}`,
          ),
        ),
      );
    }),
  );
}

function treatmentDocument(treatment: Treatment, treatments: Treatment[], posts: BlogPost[]) {
  const related = treatments.filter((entry) => treatment.relatedTreatmentSlugs.includes(entry.slug));
  const relatedPosts = posts.filter((post) => treatment.relatedPostSlugs.includes(post.slug));
  const faqs = treatment.faqs.filter((faq) => !faq.draft);
  return renderDocument(`/tratamentos/${treatment.slug}`, treatment.title, treatment.summary, [
    ...treatment.sections.flatMap((entry) =>
      section(
        entry.heading,
        entry.paragraphs.join("\n\n"),
        entry.bullets?.length ? bullets(entry.bullets) : [],
        entry.figure
          ? `![${entry.figure.alt}](${absoluteUrl(entry.figure.src)}${entry.figure.caption ? ` "${entry.figure.caption.replace(/"/g, "'")}"` : ""})`
          : [],
      ),
    ),
    ...section("Quando procurar avaliação especializada", bullets(treatment.indications)),
    ...section("Limites e alternativas de cuidado", treatment.limitations.join("\n\n")),
    ...section("Etapas do cuidado", numbered(treatment.carePath)),
    ...(faqs.length
      ? section("Perguntas frequentes", faqs.flatMap((faq) => [`### ${faq.question}`, "", faq.answer, ""]))
      : []),
    ...(related.length
      ? section("Tratamentos relacionados", bullets(related.map((entry) => link(entry.title, `/tratamentos/${entry.slug}`))))
      : []),
    ...(relatedPosts.length
      ? section("Artigos relacionados", bullets(relatedPosts.map((post) => link(post.title, `/blog/${post.slug}`))))
      : []),
    ...section("Agendamento", contactLines()),
  ]);
}

function blogHubDocument(posts: BlogPost[]) {
  return renderDocument(
    "/blog",
    "Conteúdo sobre neurocirurgia, coluna e nervos",
    "Textos claros para ajudar você a entender a avaliação, organizar dúvidas e participar das decisões sobre o cuidado com mais segurança.",
    posts.length
      ? section(
          "Artigos",
          bullets(posts.map((post) => `${link(post.title, `/blog/${post.slug}`)} (${post.publishDate}): ${post.dek}`)),
        )
      : section("Novos conteúdos em preparação", "Os primeiros artigos serão publicados em breve."),
  );
}

function postDocument(post: BlogPost, treatments: Treatment[]) {
  const related = treatments.filter((entry) => post.relatedTreatmentSlugs.includes(entry.slug));
  return renderDocument(`/blog/${post.slug}`, post.title, post.dek, [
    `Por ${BYLINE}. Publicado em ${post.publishDate}; atualizado em ${post.lastModified}.`,
    "",
    post.body,
    "",
    ...(related.length
      ? section("Informações relacionadas", bullets(related.map((entry) => link(entry.title, `/tratamentos/${entry.slug}`))))
      : []),
  ]);
}

function faqDocument() {
  return renderDocument(
    "/perguntas-frequentes",
    "Perguntas frequentes sobre consulta e cuidado neurocirúrgico",
    "Reunimos respostas objetivas para ajudar no preparo da consulta. Questões sobre diagnóstico, prognóstico ou indicação de cirurgia precisam de avaliação individual.",
    getFaqTopics().flatMap((topic) =>
      section(
        topic.label,
        topic.items.flatMap((faq) => [
          `### ${faq.question}`,
          "",
          faq.answer,
          ...(faq.relatedHref ? ["", `Saiba mais: ${link("página relacionada", faq.relatedHref)}`] : []),
          "",
        ]),
      ),
    ),
  );
}

function locationsHubDocument(locations: Location[], clinics: ClinicProfile[]) {
  return renderDocument(
    "/locais-de-atendimento",
    `Onde encontrar o Dr. ${DOCTOR_NAME}`,
    "Confira o local de atendimento ativo, com endereço, horários e orientações para organizar sua consulta.",
    [
      ...section(
        "Atendimento presencial",
        bullets(
          locations.map(
            (location) =>
              `${link(`Neurocirurgião em ${location.city} - ${location.state}`, `/locais-de-atendimento/${location.slug}`)}: ${location.clinicName}${location.streetAddress ? `, ${location.streetAddress}` : ""}`,
          ),
        ),
      ),
      ...section("Clínica", bullets(clinics.map((clinic) => `${link(clinic.name, clinicPath(clinic))}: ${clinic.tagline}`))),
      ...section("Agendamento", LOCATIONS_SCHEDULING_NOTE, contactLines()),
    ],
  );
}

function locationDocument(location: Location, treatments: Treatment[]) {
  const related = treatments.filter((entry) => location.relatedTreatmentSlugs.includes(entry.slug));
  return renderDocument(
    `/locais-de-atendimento/${location.slug}`,
    `Neurocirurgião em ${location.city} - ${location.state}`,
    location.introduction,
    [
      ...section(
        "Local de atendimento",
        bullets(
          [
            location.clinicName,
            location.streetAddress,
            location.hours,
            location.phone,
            location.email,
            location.mapUrl ? link("Abrir mapa", location.mapUrl) : undefined,
            location.clinicSlug ? link("Contato e detalhes da clínica", `/clinica/${location.clinicSlug}`) : undefined,
          ].filter((item): item is string => Boolean(item)),
        ),
      ),
      ...section("Como funciona a primeira consulta", location.schedulingGuidance, numbered(location.firstAppointmentSteps)),
      ...section("O que trazer para a consulta", bullets(location.whatToBring)),
      ...(related.length
        ? section("Informações relacionadas", bullets(related.map((entry) => link(entry.title, `/tratamentos/${entry.slug}`))))
        : []),
      ...(location.faqs.length
        ? section("Perguntas sobre o atendimento", location.faqs.flatMap((faq) => [`### ${faq.question}`, "", faq.answer, ""]))
        : []),
      ...section("Agendamento", contactLines()),
    ],
  );
}

function clinicDocument(clinic: ClinicProfile, treatments: Treatment[]) {
  const overviews = treatments.filter((entry) => entry.kind === "overview");
  return renderDocument(clinicPath(clinic), `${clinic.name} em ${clinic.city} - ${clinic.state}`, clinic.description, [
    ...section(
      "Endereço",
      fullAddress(clinic),
      link("Ver rota no mapa", clinic.mapUrl),
    ),
    ...section(
      "Contato da clínica",
      bullets([
        `Telefone: ${clinic.phone}`,
        `WhatsApp da recepção: ${link(clinic.whatsappLabel, `https://wa.me/${clinic.whatsappNumber}`)}`,
      ]),
    ),
    ...section(
      "Horários",
      bullets(clinic.openingHours.map((entry) => `${entry.days}: ${entry.hours}`)),
      clinic.openingHoursNote,
    ),
    ...section(
      "Na internet",
      clinic.tagline,
      bullets([...clinic.socialLinks.map((item) => link(item.label, item.href)), link("protrauma.net", clinic.websiteUrl)]),
    ),
    ...section(
      `O que o Dr. ${DOCTOR_NAME} atende na ${clinic.name}`,
      "As consultas cobrem condições da coluna vertebral, dos nervos periféricos e necessidades de reabilitação neurocirúrgica. A conduta é definida na avaliação presencial.",
      bullets(overviews.map((entry) => link(entry.title, `/tratamentos/${entry.slug}`))),
    ),
    ...section("Agendamento com o Dr. " + DOCTOR_NAME, contactLines()),
  ]);
}

function trustDocument(page: TrustPage) {
  return renderDocument(
    page.path,
    page.title,
    page.description,
    page.sections.flatMap((entry) => {
      const items = (entry.items ?? []).map((item) => {
        const text = item.href ? link(item.text, item.href) : item.text;
        return item.label ? `**${item.label}:** ${text}` : text;
      });
      return section(
        entry.heading,
        entry.paragraphs.join("\n\n"),
        entry.ordered ? numbered(items) : bullets(items),
      );
    }),
  );
}

/**
 * Every page that renders HTML, mapped to its Markdown builder. Keys are paths
 * as the proxy sees them ("" is the homepage). Builders run lazily so a request
 * for one page does not render all of them.
 */
function markdownRoutes() {
  const treatments = getVisibleTreatments();
  const posts = getVisiblePosts();
  const locations = getPublishedLocations();
  const clinics = getVisibleClinics();

  const routes = new Map<string, () => string>([
    ["", homeDocument],
    ["/sobre", aboutDocument],
    ["/tratamentos", () => treatmentsHubDocument(treatments)],
    ["/blog", () => blogHubDocument(posts)],
    ["/perguntas-frequentes", faqDocument],
    ["/locais-de-atendimento", () => locationsHubDocument(locations, clinics)],
  ]);
  for (const page of TRUST_PAGES) routes.set(page.path, () => trustDocument(page));
  for (const entry of treatments) {
    routes.set(`/tratamentos/${entry.slug}`, () => treatmentDocument(entry, treatments, posts));
  }
  for (const post of posts) routes.set(`/blog/${post.slug}`, () => postDocument(post, treatments));
  for (const location of locations) {
    routes.set(`/locais-de-atendimento/${location.slug}`, () => locationDocument(location, treatments));
  }
  for (const clinic of clinics) routes.set(clinicPath(clinic), () => clinicDocument(clinic, treatments));
  return routes;
}

/** "/" and "/sobre/" resolve to the same keys as "" and "/sobre". */
export function normalizeMarkdownPath(path: string) {
  const trimmed = path.replace(/\/+$/, "");
  return trimmed === "/" ? "" : trimmed;
}

export function getMarkdownPaths() {
  return [...markdownRoutes().keys()];
}

export function getMarkdownDocument(path: string) {
  return markdownRoutes().get(normalizeMarkdownPath(path))?.();
}

/**
 * The requested path is deliberately not echoed: reflecting arbitrary URL text
 * into a document an agent reads would let anyone inject instructions into it.
 */
export function getMarkdownNotFound() {
  return renderDocument(
    null,
    "Página não encontrada (404)",
    "O endereço solicitado não existe neste site ou foi movido.",
    [
      "Use uma das referências abaixo para encontrar o conteúdo:",
      "",
      ...bullets([
        `${link("llms.txt", "/llms.txt")}: índice para agentes, com todas as páginas publicadas e orientações de uso.`,
        `${link("sitemap.xml", "/sitemap.xml")}: mapa do site.`,
        `${link("Página inicial", "/")}`,
        `${link("Contato e agendamento", "/contato")}`,
      ]),
      "",
    ],
  );
}
