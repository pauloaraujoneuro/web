import type { MetadataRoute } from "next";
import { getPublishedPosts } from "@/app/lib/blog";
import { getPublishedLocations } from "@/app/lib/locations";
import { getPublishedTreatments } from "@/app/lib/treatments";
import { clinicPath, getPublishedClinics } from "@/app/lib/clinics";
import {
  DOCTOR_CRM,
  DOCTOR_NAME,
  DOCTOR_RQE,
  DOCTOR_SUBTITLE,
  SITE_URL,
} from "@/constants";
import type { BlogPost } from "@/content/types";

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
  }));
  const postEntries = posts.map((entry) => ({
    path: `/blog/${entry.slug}`,
    title: entry.title,
    description: entry.metaDescription,
    lastModified: entry.lastModified,
    priority: 0.7,
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
