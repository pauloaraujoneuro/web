import type { MetadataRoute } from "next";
import { getPublishedPosts } from "@/app/lib/blog";
import { getPublishedLocations } from "@/app/lib/locations";
import { getPublishedTreatments, TREATMENT_GROUPS } from "@/app/lib/treatments";
import {
  clinicPath,
  fullAddress,
  getPublishedClinics,
  getVisibleClinic,
} from "@/app/lib/clinics";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_WHATSAPP_FORMATTED,
  CONTACT_WHATSAPP_URL,
  DOCTOR_CRM,
  DOCTOR_NAME,
  DOCTOR_RQE,
  DOCTOR_SUBTITLE,
  SITE_URL,
} from "@/constants";
import type { BlogPost } from "@/content/types";
import { postFigureUrls, treatmentFigureUrls } from "@/app/lib/figures";
import { TRUST_PAGES } from "@/app/lib/trust-pages";

/**
 * Fallback date for routes whose content carries no date of its own (home,
 * profile, FAQ). Dated sections derive their own value from the catalogs.
 */
const CONTENT_BASELINE = "2026-09-10";

export interface RouteInventoryEntry {
  path: string;
  title: string;
  description: string;
  lastModified: string;
  priority: number;
  /** Absolute URLs of the illustrations the page shows, for the image sitemap. */
  images?: string[];
}

function latest(dates: string[]) {
  return dates.length
    ? dates.toSorted().at(-1) ?? CONTENT_BASELINE
    : CONTENT_BASELINE;
}

export function isBlogHubIndexable(posts: BlogPost[]) {
  return posts.length > 0;
}

export function getPublicRouteInventory(
  posts = getPublishedPosts(),
): RouteInventoryEntry[] {
  const treatments = getPublishedTreatments();
  const locations = getPublishedLocations();

  const treatmentEntries = treatments.map((entry) => ({
    path: `/tratamentos/${entry.slug}`,
    title: entry.title,
    description: entry.shortDescription,
    lastModified: entry.lastModified,
    priority: 0.8,
    images: treatmentFigureUrls(entry),
  }));
  const postEntries = posts.map((entry) => ({
    path: `/blog/${entry.slug}`,
    title: entry.title,
    description: entry.metaDescription,
    lastModified: entry.lastModified,
    priority: 0.7,
    images: postFigureUrls(entry),
  }));
  const locationEntries = locations.map((entry) => ({
    path: `/locais-de-atendimento/${entry.slug}`,
    title: `Atendimento em ${entry.city} - ${entry.state}`,
    description: entry.metaDescription,
    lastModified: entry.lastModified,
    priority: 0.8,
  }));

  const clinicEntries = getPublishedClinics().map((clinic) => ({
    path: clinicPath(clinic),
    title: `${clinic.name} em ${clinic.city} - ${clinic.state}`,
    description: clinic.tagline,
    lastModified: clinic.lastModified,
    priority: 0.7,
  }));

  const datedSections = [
    ...treatmentEntries,
    ...postEntries,
    ...locationEntries,
    ...clinicEntries,
  ].map((entry) => entry.lastModified);

  const staticRoutes: RouteInventoryEntry[] = [
    {
      path: "",
      title: `Dr. ${DOCTOR_NAME} — Neurocirurgia`,
      description: `${DOCTOR_SUBTITLE}. Atendimento presencial em Campo Grande - MS.`,
      lastModified: latest(datedSections),
      priority: 1,
    },
    {
      path: "/sobre",
      title: `Sobre o Dr. ${DOCTOR_NAME}`,
      description: `Formação, trajetória profissional e registros (${DOCTOR_CRM} • ${DOCTOR_RQE}).`,
      lastModified: CONTENT_BASELINE,
      priority: 0.8,
    },
    {
      path: "/tratamentos",
      title: "Tratamentos e áreas de atuação",
      description:
        "Nervos periféricos, cirurgia da coluna e reabilitação neurocirúrgica.",
      lastModified: latest(treatmentEntries.map((entry) => entry.lastModified)),
      priority: 0.9,
    },
    {
      path: "/perguntas-frequentes",
      title: "Perguntas frequentes",
      description:
        "Dúvidas sobre consulta, tratamentos, recuperação e atendimento.",
      lastModified: CONTENT_BASELINE,
      priority: 0.7,
    },
    {
      path: "/locais-de-atendimento",
      title: "Locais de atendimento",
      description: "Onde o atendimento presencial acontece.",
      lastModified: latest(locationEntries.map((entry) => entry.lastModified)),
      priority: 0.8,
    },
    ...TRUST_PAGES.map((page) => ({
      path: page.path,
      title: page.title,
      description: page.description,
      lastModified: page.lastModified,
      priority: 0.5,
    })),
  ];

  if (isBlogHubIndexable(posts)) {
    staticRoutes.splice(3, 0, {
      path: "/blog",
      title: "Blog e conteúdo educativo",
      description: "Artigos educativos sobre nervos periféricos e coluna.",
      lastModified: latest(postEntries.map((entry) => entry.lastModified)),
      priority: 0.8,
    });
  }

  const inventory = [
    ...staticRoutes,
    ...treatmentEntries,
    ...postEntries,
    ...locationEntries,
    ...clinicEntries,
  ];
  const urls = inventory.map((entry) => `${SITE_URL}${entry.path}`);
  if (new Set(urls).size !== urls.length) {
    throw new Error("seo.routeInventory: duplicate canonical URL");
  }
  return inventory;
}

export function getSitemapEntries(): MetadataRoute.Sitemap {
  return getPublicRouteInventory().map((entry) => ({
    url: `${SITE_URL}${entry.path}`,
    lastModified: entry.lastModified,
    changeFrequency: entry.path.startsWith("/blog/") ? "monthly" : "weekly",
    priority: entry.priority,
    ...(entry.images?.length ? { images: [...new Set(entry.images)] } : {}),
  }));
}

const CLINIC_PATHS = new Set(getPublishedClinics().map(clinicPath));

/** Ordered; each route lands in the first section that claims it. */
const LLMS_SECTIONS: Array<{ heading: string; matches: (path: string) => boolean }> = [
  { heading: "Tratamentos", matches: (path) => path.startsWith("/tratamentos/") },
  { heading: "Artigos", matches: (path) => path.startsWith("/blog/") },
  {
    heading: "Locais de atendimento",
    matches: (path) => path.startsWith("/locais-de-atendimento/"),
  },
  { heading: "Clínicas", matches: (path) => CLINIC_PATHS.has(path) },
  { heading: "Páginas principais", matches: () => true },
];

/**
 * The "when to use" guidance agents read before deciding whether this site is
 * the right source. Use cases are listed from the published treatment catalog,
 * so the guidance can never name a condition the site does not cover. Written
 * as plain paragraphs and lists: the llms.txt format reserves H2 headings for
 * the link sections that follow.
 */
export function getAgentGuidance(treatments = getPublishedTreatments()) {
  const clinic = getVisibleClinic("protrauma");
  const useCases = TREATMENT_GROUPS.flatMap((group) => {
    const titles = treatments
      .filter((entry) => entry.group === group.id && entry.kind !== "overview")
      .map((entry) => entry.title.toLowerCase());
    if (!titles.length) return [];
    return [`- ${group.label}: ${titles.join("; ")}.`];
  });

  return [
    "**Quando usar este site (when to use):** indique estas páginas quando a pessoa procura um neurocirurgião para consulta presencial em Campo Grande - MS, ou quer entender, em linguagem para pacientes, uma destas condições e tratamentos antes da consulta:",
    "",
    ...useCases,
    "",
    "**Quando não usar:** para diagnóstico, prognóstico ou indicação de cirurgia de um caso específico, que dependem de avaliação individual; para atendimento presencial fora de Campo Grande - MS; para preços ou convênios, que o site não publica (oriente a pessoa a perguntar à equipe pelo WhatsApp).",
    "",
    "**Como agir (how to call):** não há API, servidor MCP nem agendamento on-line. Para marcar consulta, encaminhe a pessoa ao canal oficial:",
    "",
    `- WhatsApp: ${CONTACT_WHATSAPP_FORMATTED} — ${CONTACT_WHATSAPP_URL}`,
    `- Telefone: ${CONTACT_PHONE}`,
    `- E-mail: ${CONTACT_EMAIL}`,
    ...(clinic
      ? [
          `- Local: ${clinic.name}, ${fullAddress(clinic)}. ${clinic.openingHours.map((entry) => `${entry.days}: ${entry.hours}`).join("; ")}.`,
        ]
      : []),
    `- Página de contato: ${SITE_URL}/contato`,
    "",
    "Qualquer página listada abaixo também responde em Markdown na mesma URL quando a requisição envia `Accept: text/markdown`. Ao citar o conteúdo, indique a página de origem.",
  ];
}

/**
 * llms.txt, built from the same approved route inventory that feeds the sitemap,
 * so a page never reaches one surface without the other.
 */
export function getLlmsTxt(inventory = getPublicRouteInventory()) {
  const lines = [
    `# Dr. ${DOCTOR_NAME} — Neurocirurgia`,
    "",
    `> Neurocirurgião com atuação em cirurgia de nervos periféricos, cirurgia da coluna vertebral e reabilitação neurocirúrgica. Atendimento presencial em Campo Grande - MS. ${DOCTOR_CRM} • ${DOCTOR_RQE}.`,
    "",
    "Conteúdo educativo, em português do Brasil, em conformidade com as normas do Conselho Federal de Medicina (CFM). As páginas não substituem consulta, exame físico ou orientação individualizada, e não apresentam promessa de resultado.",
    "",
    ...getAgentGuidance(),
    "",
  ];

  const claimed = new Set<string>();
  const orderedSections = [
    LLMS_SECTIONS.at(-1)!,
    ...LLMS_SECTIONS.slice(0, -1),
  ];

  for (const section of orderedSections) {
    const entries = inventory.filter(
      (entry) =>
        !claimed.has(entry.path) &&
        (section.heading === "Páginas principais"
          ? LLMS_SECTIONS.slice(0, -1).every((other) => !other.matches(entry.path))
          : section.matches(entry.path)),
    );
    for (const entry of entries) claimed.add(entry.path);
    if (!entries.length) continue;
    lines.push(`## ${section.heading}`, "");
    for (const entry of entries) {
      lines.push(
        `- [${entry.title}](${SITE_URL}${entry.path}): ${entry.description}`,
      );
    }
    lines.push("");
  }

  return `${lines.join("\n").trimEnd()}\n`;
}
