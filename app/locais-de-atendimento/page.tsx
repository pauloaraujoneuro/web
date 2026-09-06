import type { Metadata } from "next";
import Breadcrumb from "@/app/components/content/Breadcrumb";
import ContentCard from "@/app/components/content/ContentCard";
import PageIntro from "@/app/components/content/PageIntro";
import AppointmentCta from "@/app/components/custom/AppointmentCta";
import SiteShell from "@/app/components/layout/SiteShell";
import { getPublishedLocations } from "@/app/lib/locations";
import { CONTACT_WHATSAPP_CAMPO_GRANDE_TEXT, SITE_URL } from "@/constants";

const title = "Locais de atendimento";
const description =
  "Consulte o local confirmado para atendimento presencial com o Dr. Paulo Araújo em Campo Grande - MS.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${SITE_URL}/locais-de-atendimento` },
  openGraph: { title, description, url: `${SITE_URL}/locais-de-atendimento` },
};

export default function LocationsPage() {
  const locations = getPublishedLocations();
  return (
    <SiteShell>
      <div className="subpage-shell">
        <Breadcrumb items={[{ name: "Início", href: "/" }, { name: "Locais de atendimento" }]} />
        <PageIntro
          eyebrow="Atendimento presencial"
          title="Onde encontrar o Dr. Paulo Araújo"
          description="Confira o local de atendimento ativo e as orientações para organizar sua consulta. Endereço, mapa e horários só aparecem quando confirmados."
        />
        <section className="location-grid" aria-label="Locais ativos">
          {locations.map((location) => (
            <ContentCard
              key={location.slug}
              chip="Atendimento ativo"
              chipVariant="status"
              headingLevel={2}
              title={`${location.city} - ${location.state}`}
              description={location.clinicName}
              href={`/locais-de-atendimento/${location.slug}`}
              actionLabel="Ver informações para a consulta"
            />
          ))}
        </section>
        <div className="mt-12 sm:mt-16">
          <AppointmentCta
            heading="Organize sua consulta presencial"
            body="A equipe confirma disponibilidade e orienta os próximos passos para atendimento em Campo Grande."
            message={CONTACT_WHATSAPP_CAMPO_GRANDE_TEXT}
            eventLocation="locations_hub_final"
          />
        </div>
      </div>
    </SiteShell>
  );
}
