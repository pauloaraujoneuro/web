import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ClipboardList, Mail, MapPin } from "lucide-react";
import Breadcrumb, { type BreadcrumbItem } from "@/app/components/content/Breadcrumb";
import ClinicMap from "@/app/components/content/ClinicMap";
import RelatedLinks from "@/app/components/content/RelatedLinks";
import FaqAccordion from "@/app/components/content/FaqAccordion";
import JsonLd from "@/app/components/content/JsonLd";
import AppointmentCta from "@/app/components/conversion/AppointmentCta";
import SiteShell from "@/app/components/layout/SiteShell";
import { getPublishedLocation, getPublishedLocations } from "@/app/lib/locations";
import { getPublishedTreatments, TREATMENT_KIND_LABELS } from "@/app/lib/treatments";
import { clinicEntityId, getVisibleClinic } from "@/app/lib/clinics";
import { buildPageMetadata, NOT_FOUND_METADATA } from "@/app/lib/metadata";
import { DOCTOR_CRM, DOCTOR_NAME, DOCTOR_RQE, SITE_URL } from "@/constants";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getPublishedLocations().map((location) => ({ slug: location.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const location = getPublishedLocation(slug);
  if (!location) return NOT_FOUND_METADATA;
  return buildPageMetadata({
    title: location.metaTitle,
    description: location.metaDescription,
    path: `/locais-de-atendimento/${location.slug}`,
  });
}

export default async function LocationDetailPage({ params }: Props) {
  const { slug } = await params;
  const location = getPublishedLocation(slug);
  if (!location) notFound();
  const clinic = location.clinicSlug ? getVisibleClinic(location.clinicSlug) : undefined;
  const pageUrl = `${SITE_URL}/locais-de-atendimento/${location.slug}`;
  const breadcrumbs: BreadcrumbItem[] = [
    { name: "Início", href: "/" },
    { name: "Locais de atendimento", href: "/locais-de-atendimento" },
    { name: `${location.city} - ${location.state}` },
  ];
  const relatedTreatments = getPublishedTreatments().filter((treatment) =>
    location.relatedTreatmentSlugs.includes(treatment.slug),
  );

  return (
    <SiteShell>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@graph": [
          // This page answers the patient-journey question; the facility itself
          // is described once, on the clinic page. Referencing that `@id` keeps
          // a single MedicalClinic entity for the address instead of minting a
          // competing one on every page that mentions it.
          {
            "@type": "MedicalWebPage",
            "@id": pageUrl,
            url: pageUrl,
            name: location.metaTitle,
            description: location.metaDescription,
            inLanguage: "pt-BR",
            lastReviewed: location.lastModified,
            ...(clinic ? { about: { "@id": clinicEntityId(clinic) } } : {}),
            author: {
              "@type": "Physician",
              name: `Dr. ${DOCTOR_NAME}`,
              identifier: [DOCTOR_CRM, DOCTOR_RQE],
              url: `${SITE_URL}/sobre`,
            },
          },
          {
            "@type": "BreadcrumbList",
            itemListElement: breadcrumbs.map((item, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: item.name,
              item: item.href ? `${SITE_URL}${item.href}` : pageUrl,
            })),
          },
        ],
      }} />
      <div className="subpage-shell">
        <Breadcrumb items={breadcrumbs} />
        <header className="location-hero">
          <div>
            <span className="eyebrow">Atendimento presencial ativo</span>
            <h1>Neurocirurgião em {location.city} - {location.state}</h1>
            <p>{location.introduction}</p>
          </div>
          <aside className="clinic-summary">
            <MapPin aria-hidden size={23} strokeWidth={1.5} />
            <div><span>Local de atendimento</span><h2>{location.clinicName}</h2><p>{location.city} - {location.state}</p></div>
            {location.email ? <a href={`mailto:${location.email}`}><Mail aria-hidden size={17} />{location.email}</a> : null}
            {location.phone ? <p>{location.phone}</p> : null}
            {location.streetAddress ? <address>{location.streetAddress}</address> : null}
            {location.hours ? <p>{location.hours}</p> : null}
            {location.mapUrl ? <a href={location.mapUrl}>Abrir mapa</a> : null}
          </aside>
        </header>

        <section className="location-section">
          <div className="location-section-heading"><span>Metodologia clínica</span><h2>Como funciona a primeira consulta</h2><p>{location.schedulingGuidance}</p></div>
          <ol className="consultation-steps">
            {location.firstAppointmentSteps.map((step, index) => (
              <li key={step}><span>{String(index + 1).padStart(2, "0")}</span><p>{step}</p></li>
            ))}
          </ol>
        </section>

        <section className="location-section bring-section">
          <div className="location-section-heading"><span>Preparação</span><h2>O que trazer para a consulta</h2></div>
          <div className="bring-list">
            {location.whatToBring.map((item) => (
              <div key={item}><ClipboardList aria-hidden size={20} strokeWidth={1.5} /><p>{item}</p></div>
            ))}
          </div>
        </section>

        <section className="location-section">
          <div className="location-section-heading"><span>Áreas de atuação</span><h2>Informações relacionadas</h2></div>
          <RelatedLinks
            items={relatedTreatments.map((treatment) => ({
              href: `/tratamentos/${treatment.slug}`,
              title: treatment.title,
              eyebrow: TREATMENT_KIND_LABELS[treatment.kind],
            }))}
          />
        </section>

        {location.faqs.length ? (
          <section className="location-section">
            <div className="location-section-heading"><span>Dúvidas práticas</span><h2>Perguntas sobre o atendimento</h2></div>
            <div className="mt-5"><FaqAccordion items={location.faqs} currentPath={`/locais-de-atendimento/${location.slug}`} /></div>
          </section>
        ) : null}

        {clinic ? (
          <section className="location-section">
            <div className="location-section-heading">
              <span>Como chegar</span>
              <h2>Onde fica a {clinic.name}</h2>
              <p>
                O atendimento acontece na {clinic.name}, em {clinic.neighborhood}.{" "}
                <Link href={`/${clinic.slug}`}>Ver contato e detalhes da clínica</Link>.
              </p>
            </div>
            <ClinicMap clinic={clinic} />
          </section>
        ) : null}

        <AppointmentCta
          heading={`Agende sua avaliação em ${location.city}`}
          body="Converse com a equipe para confirmar disponibilidade e receber orientações para a consulta."
          message={location.ctaMessage}
          eventLocation={`location_${location.slug}_final`}
          label="Agendar em Campo Grande"
        />
      </div>
    </SiteShell>
  );
}
