import type { Metadata } from "next";
import Image from "next/image";
import { BookOpen, BriefcaseMedical, GraduationCap } from "lucide-react";
import Breadcrumb from "@/app/components/content/Breadcrumb";
import JsonLd from "@/app/components/content/JsonLd";
import AppointmentCta from "@/app/components/conversion/AppointmentCta";
import SiteShell from "@/app/components/layout/SiteShell";
import { buildPageMetadata } from "@/app/lib/metadata";
import { clinicEntityId, getVisibleClinic } from "@/app/lib/clinics";
import {
  ACADEMIC_MILESTONES,
  CONTACT_WHATSAPP_CAMPO_GRANDE_TEXT,
  DOCTOR_CREDENTIALS,
  DOCTOR_CRM,
  DOCTOR_NAME,
  DOCTOR_PROFILE_IMAGE_FRONT_WIDE,
  DOCTOR_RQE,
  DOCTOR_SHORT_BIO,
  DOCTOR_TITLE,
  EXPERTISE_AREAS,
  PROFESSIONAL_ROLES,
  PUBLICATIONS,
  SITE_URL,
} from "@/constants";

const title = `Sobre o Dr. ${DOCTOR_NAME}`;
const description =
  "Conheça a formação, trajetória e áreas de atuação do Dr. Paulo Araújo, neurocirurgião com atendimento presencial em Campo Grande - MS.";

export const metadata: Metadata = buildPageMetadata({
  title,
  description,
  path: "/sobre",
  openGraph: { type: "profile" },
});

export default function AboutPage() {
  const currentRoles = PROFESSIONAL_ROLES.filter((role) => role.status === "active");
  const priorRoles = PROFESSIONAL_ROLES.filter((role) => role.status === "deferred");

  return (
    <SiteShell>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Physician",
        "@id": `${SITE_URL}#physician`,
        name: `Dr. ${DOCTOR_NAME}`,
        url: SITE_URL,
        mainEntityOfPage: `${SITE_URL}/sobre`,
        image: `${SITE_URL}${DOCTOR_PROFILE_IMAGE_FRONT_WIDE}`,
        description,
        medicalSpecialty: "Neurosurgery",
        identifier: [
          { "@type": "PropertyValue", propertyID: "CRM", value: DOCTOR_CRM },
          { "@type": "PropertyValue", propertyID: "RQE", value: DOCTOR_RQE },
        ],
        // Facilities that have a catalog entry are referenced by their canonical
        // `@id`; only roles without one are described inline.
        workLocation: currentRoles.map((role) => {
          const clinic = role.clinicSlug ? getVisibleClinic(role.clinicSlug) : undefined;
          if (clinic) return { "@id": clinicEntityId(clinic) };
          return {
            "@type": "MedicalClinic",
            name: role.institution,
            address:
              role.city && role.state ? `${role.city} - ${role.state}` : undefined,
          };
        }),
      }} />
      <div className="subpage-shell">
        <Breadcrumb items={[{ name: "Início", href: "/" }, { name: "Sobre" }]} />

        <header className="profile-hero">
          <div className="profile-portrait">
            <Image
              src={DOCTOR_PROFILE_IMAGE_FRONT_WIDE}
              alt={`Dr. ${DOCTOR_NAME}, neurocirurgião`}
              fill
              priority
              sizes="(min-width: 900px) 42vw, 100vw"
              className="object-cover object-top"
            />
          </div>
          <div className="profile-intro">
            <span className="eyebrow">Perfil médico</span>
            <h1>Dr. {DOCTOR_NAME}</h1>
            <p className="profile-title">{DOCTOR_TITLE} · {DOCTOR_CRM} · {DOCTOR_RQE}</p>
            <p>{DOCTOR_SHORT_BIO}</p>
            <div className="active-location-note">
              <span>Atendimento presencial atual</span>
              <strong>Clínica Protrauma · Campo Grande - MS</strong>
            </div>
          </div>
        </header>

        <section className="profile-section">
          <div className="profile-section-heading">
            <BriefcaseMedical aria-hidden size={22} strokeWidth={1.5} />
            <div><span>Atuação</span><h2>Áreas de foco</h2></div>
          </div>
          <div className="focus-grid">
            {EXPERTISE_AREAS.map((area) => (
              <article key={area.id}>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="profile-section profile-timeline-panel">
          <div className="profile-section-heading profile-heading-dark">
            <GraduationCap aria-hidden size={22} strokeWidth={1.5} />
            <div><span>Trajetória acadêmica</span><h2>Formação e fellowship</h2></div>
          </div>
          <ol className="profile-timeline">
            {ACADEMIC_MILESTONES.map((milestone) => (
              <li key={milestone.id}>
                <span>{milestone.period}</span>
                <div><h3>{milestone.title}</h3><p>{milestone.institution}</p><small>{milestone.summary}</small></div>
              </li>
            ))}
          </ol>
        </section>

        <section className="profile-section role-section">
          <div>
            <span className="section-kicker">Atuação profissional</span>
            <h2>Atendimento atual</h2>
            {currentRoles.map((role) => (
              <article className="current-role" key={role.id}>
                <span>{role.period}</span><h3>{role.institution}</h3><p>{role.summary}</p>
              </article>
            ))}
          </div>
          <div>
            <span className="section-kicker">Histórico</span>
            <h2>Atuações anteriores</h2>
            <div className="prior-role-list">
              {priorRoles.map((role) => (
                <article key={role.id}><span>{role.period}</span><h3>{role.institution}</h3><p>{role.summary}</p></article>
              ))}
            </div>
          </div>
        </section>

        <section className="profile-section">
          <div className="profile-section-heading">
            <BookOpen aria-hidden size={22} strokeWidth={1.5} />
            <div><span>Atualização científica</span><h2>Congressos e atividade acadêmica</h2></div>
          </div>
          <div className="publication-list">
            {PUBLICATIONS.map((publication) => (
              <article key={publication.id}>
                <span>{publication.year} · {publication.location}</span>
                <h3>{publication.title}</h3>
                <p>{publication.event}</p>
              </article>
            ))}
          </div>
          <div className="credential-strip">
            {DOCTOR_CREDENTIALS.map((credential) => <p key={credential}>{credential}</p>)}
          </div>
        </section>

        <AppointmentCta
          heading="Converse com a equipe em Campo Grande"
          body="Agende uma avaliação presencial para discutir seu quadro, seus exames e os próximos passos possíveis."
          message={CONTACT_WHATSAPP_CAMPO_GRANDE_TEXT}
          eventLocation="about_final"
        />
      </div>
    </SiteShell>
  );
}
