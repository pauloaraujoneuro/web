import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, MapPin, MessageCircle, Phone } from "lucide-react";
import Breadcrumb from "@/app/components/content/Breadcrumb";
import ClinicMap from "@/app/components/content/ClinicMap";
import JsonLd from "@/app/components/content/JsonLd";
import PageIntro from "@/app/components/content/PageIntro";
import RelatedLinks from "@/app/components/content/RelatedLinks";
import AppointmentCta from "@/app/components/custom/AppointmentCta";
import SiteShell from "@/app/components/layout/SiteShell";
import { clinicUrl, fullAddress, getClinic } from "@/app/lib/clinics";
import { getPublishedLocation } from "@/app/lib/locations";
import { getPublishedTreatments, TREATMENT_KIND_LABELS } from "@/app/lib/treatments";
import {
  CONTACT_WHATSAPP_CAMPO_GRANDE_TEXT,
  DOCTOR_CRM,
  DOCTOR_NAME,
  DOCTOR_RQE,
  SITE_URL,
} from "@/constants";

const clinic = getClinic("clinica-protrauma")!;
const pageUrl = clinicUrl(clinic);

const title = `${clinic.name} — onde o Dr. ${DOCTOR_NAME} atende em Campo Grande`;
const description = `Endereço, contato e localização da ${clinic.name}, em ${clinic.city} - ${clinic.state}, onde o Dr. ${DOCTOR_NAME} realiza as consultas de neurocirurgia.`;

export const metadata: Metadata = {
  title: `${clinic.name} em Campo Grande - MS`,
  description,
  alternates: { canonical: pageUrl },
  openGraph: { title, description, url: pageUrl, type: "website" },
};

export default function ClinicPage() {
  const location = getPublishedLocation("campo-grande");
  const treatments = getPublishedTreatments();

  return (
    <SiteShell>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "MedicalClinic",
          "@id": `${pageUrl}#clinic`,
          name: clinic.name,
          description: clinic.description,
          url: pageUrl,
          sameAs: [clinic.websiteUrl, ...clinic.socialLinks.map((item) => item.href)],
          telephone: clinic.phone,
          image: `${SITE_URL}${clinic.imageSrc}`,
          hasMap: clinic.mapUrl,
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
            priority
          />
        </div>

        <section className="clinic-facts" aria-label="Contato e endereço">
          <div>
            <span className="card-eyebrow card-eyebrow-topic">Endereço</span>
            <p>
              {clinic.streetAddress}
              <br />
              {clinic.neighborhood}, {clinic.city} - {clinic.state}
              <br />
              CEP {clinic.postalCode}
            </p>
            <a href={clinic.mapUrl} target="_blank" rel="noopener noreferrer">
              <MapPin aria-hidden size={16} strokeWidth={2} />
              Ver rota no mapa
            </a>
          </div>
          <div>
            <span className="card-eyebrow card-eyebrow-topic">Contato da clínica</span>
            <p>
              <Phone aria-hidden size={15} strokeWidth={2} /> {clinic.phone}
              <br />
              <MessageCircle aria-hidden size={15} strokeWidth={2} /> WhatsApp{" "}
              {clinic.whatsappLabel}
            </p>
            <a
              href={`https://wa.me/${clinic.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle aria-hidden size={16} strokeWidth={2} />
              Falar com a recepção
            </a>
          </div>
          <div>
            <span className="card-eyebrow card-eyebrow-topic">Na internet</span>
            <p>{clinic.tagline}</p>
            <a href={clinic.websiteUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink aria-hidden size={16} strokeWidth={2} />
              protrauma.net
            </a>
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
          </div>
        </section>

        <section className="location-section">
          <div className="location-section-heading">
            <span>Atendimento de neurocirurgia</span>
            <h2>O que o Dr. {DOCTOR_NAME} atende na Protrauma</h2>
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
            message={CONTACT_WHATSAPP_CAMPO_GRANDE_TEXT}
            eventLocation="clinic_protrauma_final"
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
