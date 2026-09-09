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

/**
 * Clinic pages live under a static segment rather than at the site root: a
 * root-level dynamic segment would claim every top-level path the site ever
 * adds, and the slug alone ("protrauma") does not read as a URL on its own.
 */
export const CLINIC_PATH_PREFIX = "/clinica";

export function clinicPath(clinic: ClinicProfile) {
  return `${CLINIC_PATH_PREFIX}/${clinic.slug}`;
}

export function clinicUrl(clinic: ClinicProfile) {
  return `${SITE_URL}${clinicPath(clinic)}`;
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
