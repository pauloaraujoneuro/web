/** Shapes for the homepage content constants. */
export type PublicationCategory = "congress" | "academic" | "scientific";

export interface NavigationItem {
  href: string;
  label: string;
}

export interface ExpertiseArea {
  id: string;
  title: string;
  description: string;
  highlights: string[];
}

export interface PublicationItem {
  id: string;
  category: PublicationCategory;
  title: string;
  year: number;
  location: string;
  event: string;
  link?: string;
}

export interface AcademicMilestone {
  id: string;
  period: string;
  title: string;
  institution: string;
  summary: string;
  details?: string[];
}

export interface ProfessionalRole {
  id: string;
  period: string;
  title: string;
  institution: string;
  summary: string;
  status: "active" | "deferred";
  /** Facility in the clinic catalog, when this role happens in one. Address and
   *  contact facts are read from there rather than repeated here. */
  clinicSlug?: string;
  city?: string;
  state?: string;
}

export interface ServiceLocation {
  id: string;
  name: string;
  city: string;
  state: string;
  phone?: string;
}

export interface CitySchedule {
  id: string;
  city: string;
  state: string;
  location: string;
  whatsappCtaLabel: string;
  whatsappUrl: string;
}
