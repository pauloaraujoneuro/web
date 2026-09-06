import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import Breadcrumb from "@/app/components/content/Breadcrumb";
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
            <article className="location-card" key={location.slug}>
              <div className="location-card-icon"><MapPin aria-hidden size={22} strokeWidth={1.5} /></div>
              <span className="status-live">Atendimento ativo</span>
              <h2>{location.city} - {location.state}</h2>
              <p>{location.clinicName}</p>
              <Link href={`/locais-de-atendimento/${location.slug}`}>
                Ver informações para a consulta
                <ArrowRight aria-hidden size={18} strokeWidth={1.5} />
              </Link>
            </article>
          ))}
        </section>
        <div className="mt-16 sm:mt-24">
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
