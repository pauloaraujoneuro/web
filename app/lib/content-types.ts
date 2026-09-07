export type PublicationState = "draft" | "published";

/** A question and its answer, before it is placed in the FAQ catalog. */
export interface FaqSeed {
  id: string;
  question: string;
  answer: string;
}

export interface FaqItem extends FaqSeed {
  category: "consulta" | "tratamentos" | "recuperacao" | "atendimento";
  order: number;
  state: PublicationState;
  relatedHref?: string;
}

export interface TreatmentSection {
  id: string;
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export type TreatmentKind = "overview" | "condition" | "procedure";

export interface Treatment {
  slug: string;
  state: PublicationState;
  indexable: boolean;
  group: "peripheral-nerve" | "spine" | "rehabilitation";
  kind: TreatmentKind;
  title: string;
  shortDescription: string;
  primaryIntent: string;
  metaTitle: string;
  metaDescription: string;
  summary: string;
  sections: TreatmentSection[];
  indications: string[];
  limitations: string[];
  carePath: string[];
  faqs: FaqItem[];
  relatedTreatmentSlugs: string[];
  relatedPostSlugs: string[];
  keywords: string[];
  lastModified: string;
  order: number;
}

export interface ClinicProfile {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  streetAddress: string;
  neighborhood: string;
  city: string;
  state: string;
  postalCode: string;
  phone: string;
  whatsappNumber: string;
  whatsappLabel: string;
  websiteUrl: string;
  mapUrl: string;
  /** Query-based embed: a plain map with a pin, without the reviews panel. */
  mapEmbedUrl: string;
  socialLinks: Array<{ label: string; href: string }>;
  openingHours: Array<{ days: string; hours: string }>;
  /** Short caveat shown with the hours, e.g. holiday variation. */
  openingHoursNote: string;
  /** Machine-readable equivalent for schema.org. */
  openingHoursSpecification: Array<{ days: string[]; opens: string; closes: string }>;
  imageSrc: string;
  imageAlt: string;
  lastModified: string;
}

export interface Location {
  slug: string;
  active: boolean;
  indexable: boolean;
  clinicName: string;
  city: string;
  state: string;
  metaTitle: string;
  metaDescription: string;
  introduction: string;
  schedulingGuidance: string;
  firstAppointmentSteps: string[];
  whatToBring: string[];
  relatedTreatmentSlugs: string[];
  faqs: FaqItem[];
  ctaMessage: string;
  lastModified: string;
  phone?: string;
  email?: string;
  streetAddress?: string;
  hours?: string;
  mapUrl?: string;
  /** The facility this location is hosted in, when it has its own page. */
  clinicSlug?: string;
}

export interface BlogFrontmatter {
  slug: string;
  state: PublicationState;
  /** Same gate as treatments: a page can exist without entering search. */
  indexable: boolean;
  title: string;
  metaDescription: string;
  dek: string;
  publishDate: string;
  lastModified: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  targetAudience: "patients" | "caregivers" | "professionals" | "general-public";
  searchIntent: string;
  featured: boolean;
  order: number;
  author: "paulo-araujo";
  relatedTreatmentSlugs: string[];
}

export interface BlogPost extends BlogFrontmatter {
  body: string;
  headings: Array<{ id: string; text: string; level: 2 | 3 }>;
}
