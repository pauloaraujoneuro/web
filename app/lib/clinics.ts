/**
 * Accessors over the clinic catalog. Authored facts live in `content/clinics.ts`;
 * everything composed from them — URLs, schema identifiers, publication gates —
 * lives here.
 */
import type { ClinicProfile } from "@/content/types";
import { CLINICS } from "@/content/clinics";
import { validateClinics } from "@/app/lib/content-validation";
import { SITE_URL } from "@/constants";

export { CLINICS };

validateClinics(CLINICS);

/** Clinics with a real page: the route builds exactly this set. */
export function getVisibleClinics(source = CLINICS) {
  return source.filter((clinic) => clinic.publicationState === "published");
}

export function getVisibleClinic(slug: string) {
  return getVisibleClinics().find((clinic) => clinic.slug === slug);
}

/** The discovery surface: only these reach the sitemap and llms.txt. */
export function getPublishedClinics(source = CLINICS) {
  return getVisibleClinics(source).filter((clinic) => clinic.indexable);
}

export function clinicUrl(clinic: ClinicProfile) {
  return `${SITE_URL}/${clinic.slug}`;
}

/**
 * The single canonical node for the facility. Every page that describes this
 * address references this `@id` instead of minting another MedicalClinic.
 */
export function clinicEntityId(clinic: ClinicProfile) {
  return `${clinicUrl(clinic)}#clinic`;
}

export function fullAddress(clinic: ClinicProfile) {
  return `${clinic.streetAddress} - ${clinic.neighborhood}, ${clinic.city} - ${clinic.state}, ${clinic.postalCode}`;
}
