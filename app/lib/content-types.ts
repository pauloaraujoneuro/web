export type PublicationState = "draft" | "published";

export interface FaqItem {
  id: string;
  category: "consulta" | "tratamentos" | "recuperacao" | "atendimento";
  question: string;
  answer: string;
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

export interface Treatment {
  slug: string;
  state: PublicationState;
  indexable: boolean;
  group: "peripheral-nerve" | "spine" | "rehabilitation";
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
}

export interface BlogFrontmatter {
  slug: string;
  state: PublicationState;
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
