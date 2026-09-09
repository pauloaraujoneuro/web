import type { Metadata } from "next";
import type { ClinicProfile } from "@/content/types";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Breadcrumb from "@/app/components/content/Breadcrumb";
import ClinicMap from "@/app/components/content/ClinicMap";
import JsonLd from "@/app/components/content/JsonLd";
import PageIntro from "@/app/components/content/PageIntro";
import RelatedLinks from "@/app/components/content/RelatedLinks";
import AppointmentCta from "@/app/components/conversion/AppointmentCta";
import TrackedWhatsAppLink from "@/app/components/analytics/TrackedWhatsAppLink";
import SiteShell from "@/app/components/layout/SiteShell";
import { notFound } from "next/navigation";
import {
  clinicEntityId,
  clinicPath,
  clinicUrl,
  fullAddress,
  getVisibleClinic,
  getVisibleClinics,
} from "@/app/lib/clinics";
import { buildPageMetadata, NOT_FOUND_METADATA } from "@/app/lib/metadata";
import { getPublishedLocations } from "@/app/lib/locations";
import { getPublishedTreatments, TREATMENT_KIND_LABELS } from "@/app/lib/treatments";
import {
  CONTACT_WHATSAPP_CAMPO_GRANDE_TEXT,
  createWhatsAppUrl,
  DOCTOR_CRM,
  DOCTOR_NAME,
  DOCTOR_RQE,
  SITE_URL,
} from "@/constants";

type Props = { params: Promise<{ slug: string }> };

/**
 * Clinic pages are built from the catalog that feeds the sitemap and llms.txt,
 * so a clinic can never be published into discovery without a route to land on.
 * Unknown slugs fall through to `notFound()` rather than to `dynamicParams:
 * false`, which answers correctly but logs an internal error for every stray
 * URL under `/clinica` a crawler tries.
 */
export function generateStaticParams() {
  return getVisibleClinics().map((clinic) => ({ slug: clinic.slug }));
}

function describe(clinic: ClinicProfile) {
  return {
    socialTitle: `${clinic.name} — onde o Dr. ${DOCTOR_NAME} atende em ${clinic.city}`,
    description: `Endereço, contato e localização da ${clinic.name}, em ${clinic.city} - ${clinic.state}, onde o Dr. ${DOCTOR_NAME} realiza as consultas de neurocirurgia.`,
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const clinic = getVisibleClinic(slug);
  if (!clinic) return NOT_FOUND_METADATA;
  const { socialTitle, description } = describe(clinic);
  return buildPageMetadata({
    title: `${clinic.name} em ${clinic.city} - ${clinic.state}`,
    socialTitle,
    description,
    path: clinicPath(clinic),
    indexable: clinic.indexable,
  });
}

export default async function ClinicPage({ params }: Props) {
  const { slug } = await params;
  const clinic = getVisibleClinic(slug);
  if (!clinic) notFound();
  const pageUrl = clinicUrl(clinic);
  const location = getPublishedLocations().find(
    (entry) => entry.clinicSlug === clinic.slug,
  );
  // The clinic page names the areas of practice, not the full condition
  // catalog: the three overview pages are the right depth for a facility page,
  // and each one leads on to its own conditions and procedures.
  const treatments = getPublishedTreatments().filter(
    (treatment) => treatment.kind === "overview",
  );

  return (
    <SiteShell>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "MedicalClinic",
          "@id": clinicEntityId(clinic),
          name: clinic.name,
          description: clinic.description,
          url: pageUrl,
          sameAs: [clinic.websiteUrl, ...clinic.socialLinks.map((item) => item.href)],
          telephone: clinic.phone,
          image: `${SITE_URL}${clinic.imageSrc}`,
          hasMap: clinic.mapUrl,
          openingHoursSpecification: clinic.openingHoursSpecification.map((entry) => ({
            "@type": "OpeningHoursSpecification",
            dayOfWeek: entry.days,
            opens: entry.opens,
            closes: entry.closes,
          })),
          address: {
            "@type": "PostalAddress",
            streetAddress: `${clinic.streetAddress} - ${clinic.neighborhood}`,
            addressLocality: clinic.city,
            addressRegion: clinic.state,
            postalCode: clinic.postalCode,
            addressCountry: "BR",
          },
          employee: {
            "@type": "Physician",
            name: `Dr. ${DOCTOR_NAME}`,
            identifier: [DOCTOR_CRM, DOCTOR_RQE],
            url: `${SITE_URL}/sobre`,
          },
        }}
      />
      <div className="subpage-shell">
        <Breadcrumb items={[{ name: "Início", href: "/" }, { name: clinic.name }]} />
        <PageIntro
          eyebrow="Local de atendimento"
          title={`${clinic.name} em ${clinic.city} - ${clinic.state}`}
          description={clinic.description}
        />

        <div className="clinic-photo">
          <Image
            src={clinic.imageSrc}
            alt={clinic.imageAlt}
            width={693}
            height={288}
            sizes="(min-width: 1024px) 60rem, 100vw"
            quality={90}
            priority
          />
        </div>

        <section className="clinic-facts" aria-label="Contato e endereço">
          <article className="clinic-fact">
            <span className="clinic-fact-label">Endereço</span>
            <address>
              {clinic.streetAddress}
              <br />
              {clinic.neighborhood}
              <br />
              {clinic.city} - {clinic.state}, {clinic.postalCode}
            </address>
            <a
              className="clinic-fact-action"
              href={clinic.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver rota no mapa
              <ArrowUpRight aria-hidden size={16} strokeWidth={2} />
            </a>
          </article>

          <article className="clinic-fact">
            <span className="clinic-fact-label">Contato da clínica</span>
            <ul className="clinic-fact-list">
              <li>
                <span>Telefone</span>
                <strong>{clinic.phone}</strong>
              </li>
              <li>
                <span>WhatsApp</span>
                <strong>{clinic.whatsappLabel}</strong>
              </li>
            </ul>
            <a
              className="clinic-fact-action"
              href={`https://wa.me/${clinic.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar com a recepção
              <ArrowUpRight aria-hidden size={16} strokeWidth={2} />
            </a>
          </article>

          <article className="clinic-fact">
            <span className="clinic-fact-label">Horários</span>
            <ul className="clinic-fact-list">
              {clinic.openingHours.map((entry) => (
                <li key={entry.days}>
                  <span>{entry.days}</span>
                  <strong>{entry.hours}</strong>
                </li>
              ))}
            </ul>
            <p className="clinic-fact-note">{clinic.openingHoursNote}</p>
          </article>

          <article className="clinic-fact">
            <span className="clinic-fact-label">Na internet</span>
            <p className="clinic-fact-text">{clinic.tagline}</p>
            <div className="clinic-social">
              {clinic.socialLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <a
              className="clinic-fact-action"
              href={clinic.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              protrauma.net
              <ArrowUpRight aria-hidden size={16} strokeWidth={2} />
            </a>
          </article>
          </section>

        {/* The cards above are the clinic's own contacts. Scheduling a
            neurosurgical consultation goes to the practice, so it gets one
            unambiguous action rather than a button competing inside a card. */}
        <div className="clinic-contact-cta">
          <p>
            Consultas de neurocirurgia são agendadas com a equipe do Dr. {DOCTOR_NAME}.
          </p>
          <TrackedWhatsAppLink
            href={createWhatsAppUrl(
              location?.ctaMessage ?? CONTACT_WHATSAPP_CAMPO_GRANDE_TEXT,
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            eventLocation={`clinic_${clinic.slug}_contact`}
            eventLabel={`Agendar com o Dr. ${DOCTOR_NAME}`}
          >
            Agendar com o Dr. {DOCTOR_NAME}
          </TrackedWhatsAppLink>
        </div>

        <section className="location-section">
          <div className="location-section-heading">
            <span>Atendimento de neurocirurgia</span>
            <h2>O que o Dr. {DOCTOR_NAME} atende na {clinic.name}</h2>
            <p>
              As consultas cobrem condições da coluna vertebral, dos nervos periféricos
              e necessidades de reabilitação neurocirúrgica. A conduta é definida na
              avaliação presencial.
            </p>
          </div>
          <RelatedLinks
            items={treatments.map((treatment) => ({
              href: `/tratamentos/${treatment.slug}`,
              title: treatment.title,
              eyebrow: TREATMENT_KIND_LABELS[treatment.kind],
            }))}
          />
          {location ? (
            <p className="clinic-crosslink">
              Para saber como organizar a consulta, o que levar e como funciona a
              primeira avaliação, veja{" "}
              <Link href={`/locais-de-atendimento/${location.slug}`}>
                o atendimento em {location.city} - {location.state}
              </Link>
              .
            </p>
          ) : null}
        </section>

        <section className="location-section">
          <div className="location-section-heading">
            <span>Como chegar</span>
            <h2>Localização em {clinic.neighborhood}</h2>
          </div>
          <ClinicMap clinic={clinic} />
        </section>

        <div className="mt-12 sm:mt-16">
          <AppointmentCta
            heading={`Agende sua avaliação na ${clinic.name}`}
            body={`Converse com a equipe para confirmar disponibilidade de agenda em ${clinic.city} - ${clinic.state}.`}
            message={location?.ctaMessage ?? CONTACT_WHATSAPP_CAMPO_GRANDE_TEXT}
            eventLocation={`clinic_${clinic.slug}_final`}
            label="Agendar avaliação"
          />
        </div>

        <p className="clinic-note">
          {clinic.name} é a clínica onde o Dr. {DOCTOR_NAME} realiza os atendimentos de
          neurocirurgia. Os dados de contato acima são da clínica; o endereço completo é{" "}
          {fullAddress(clinic)}.
        </p>
      </div>
    </SiteShell>
  );
}
