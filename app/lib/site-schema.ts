import { clinicEntityId, clinicUrl, getVisibleClinic } from "@/app/lib/clinics";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_WHATSAPP_FORMATTED,
  DOCTOR_CRM,
  DOCTOR_FULL_NAME,
  DOCTOR_HOSPITAL_AFFILIATION,
  DOCTOR_NAME,
  DOCTOR_PROFILE_IMAGE,
  DOCTOR_RQE,
  DOCTOR_TITLE,
  INSTAGRAM_URL,
  LATTES_URL,
  SERVICE_LOCATIONS,
  SITE_URL,
} from "@/constants";

/**
 * The site-wide identity in schema.org terms: the practice (a Physician) and
 * the facility it consults in. Emitted as separate top-level JSON-LD documents
 * rather than one `@graph`: consumers that only read a document's own `@type`
 * (several agent-readiness checkers do) otherwise see no identity at all. The
 * nodes stay linked through their `@id`s, so search engines still merge them.
 */
export function getSiteJsonLd(description: string) {
  const clinic = getVisibleClinic("protrauma")!;
  const address = {
    "@type": "PostalAddress",
    streetAddress: `${clinic.streetAddress} - ${clinic.neighborhood}`,
    addressLocality: clinic.city,
    addressRegion: clinic.state,
    postalCode: clinic.postalCode,
    addressCountry: "BR",
  };

  const physician = {
    "@context": "https://schema.org",
    // A Physician already is a schema.org Organization (via
    // MedicalOrganization); naming the parent type as well lets parsers that
    // do not walk the type hierarchy recognise the practice as one.
    "@type": ["Physician", "Organization"],
    "@id": `${SITE_URL}#physician`,
    name: DOCTOR_NAME,
    alternateName: [`Dr. ${DOCTOR_NAME}`, DOCTOR_FULL_NAME],
    jobTitle: DOCTOR_TITLE,
    url: SITE_URL,
    image: `${SITE_URL}${DOCTOR_PROFILE_IMAGE}`,
    description,
    medicalSpecialty: ["Neurosurgery"],
    telephone: CONTACT_PHONE,
    email: CONTACT_EMAIL,
    address,
    // The scheduling line and inbox the site already publishes, typed so an
    // agent answering "how do I book?" does not have to guess which is which.
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "reservations",
      telephone: CONTACT_WHATSAPP_FORMATTED,
      email: CONTACT_EMAIL,
      url: `${SITE_URL}/contato`,
      areaServed: "BR",
      availableLanguage: "pt-BR",
    },
    worksFor: { "@id": clinicEntityId(clinic) },
    hospitalAffiliation: DOCTOR_HOSPITAL_AFFILIATION,
    areaServed: SERVICE_LOCATIONS.map((location) => ({
      "@type": "City",
      name: location.city,
    })),
    availableService: [
      { "@type": "MedicalProcedure", name: "Cirurgia de nervo periférico" },
      { "@type": "MedicalProcedure", name: "Cirurgia de coluna" },
      { "@type": "MedicalTherapy", name: "Reabilitação neurocirúrgica" },
    ],
    sameAs: [INSTAGRAM_URL, LATTES_URL],
    identifier: [
      { "@type": "PropertyValue", propertyID: "CRM", value: DOCTOR_CRM },
      { "@type": "PropertyValue", propertyID: "RQE", value: DOCTOR_RQE },
    ],
  };

  // The facility is one entity site-wide. Its canonical node lives on the
  // clinic page; the site-wide document points at the same `@id` so the
  // address is never described twice under two different identifiers.
  const facility = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "@id": clinicEntityId(clinic),
    name: clinic.name,
    url: clinicUrl(clinic),
    telephone: CONTACT_PHONE,
    email: CONTACT_EMAIL,
    medicalSpecialty: ["Neurosurgery"],
    // Publishable since the client confirmed the consulting address; PR #1 had
    // stripped it only because no address was verified at the time.
    address,
    hasMap: clinic.mapUrl,
    areaServed: SERVICE_LOCATIONS.map((location) => ({
      "@type": "AdministrativeArea",
      name: `${location.city} - ${location.state}`,
    })),
  };

  return { practice: physician, facility };
}
