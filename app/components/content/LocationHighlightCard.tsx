import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, MapPin, Stethoscope } from "lucide-react";
import TrackedWhatsAppLink from "@/app/components/analytics/TrackedWhatsAppLink";
import type { ClinicProfile, Location } from "@/app/lib/content-types";
import { fullAddress } from "@/app/lib/clinics";
import { createWhatsAppUrl } from "@/constants";

interface LocationHighlightCardProps {
  location: Location;
  clinic?: ClinicProfile;
}

/**
 * The hub carries a single active location, so it gets one wide card with the
 * detail a patient actually needs — where, when, and what happens there —
 * rather than a narrow tile repeating the city name.
 */
export default function LocationHighlightCard({
  location,
  clinic,
}: LocationHighlightCardProps) {
  const detailHref = `/locais-de-atendimento/${location.slug}`;

  return (
    <article className="location-highlight">
      {clinic ? (
        <div className="location-highlight-media">
          <Image
            src={clinic.imageSrc}
            alt={clinic.imageAlt}
            width={693}
            height={288}
            sizes="(min-width: 1024px) 62rem, 100vw"
          />
          <span className="location-highlight-chip">Atendimento ativo</span>
          <span className="location-highlight-caption">Fachada · {clinic.name}</span>
        </div>
      ) : null}

      <div className="location-highlight-body">
        <h2>
          {location.city} - {location.state}
        </h2>
        <p className="location-highlight-lead">{location.introduction}</p>

        <dl className="location-highlight-facts">
          <div>
            <dt>
              <MapPin aria-hidden size={17} strokeWidth={1.8} />
              Endereço
            </dt>
            <dd>{clinic ? fullAddress(clinic) : location.clinicName}</dd>
          </div>
          {clinic ? (
            <div>
              <dt>
                <Clock aria-hidden size={17} strokeWidth={1.8} />
                {clinic.openingHours[0].days}
              </dt>
              <dd>
                {clinic.openingHours[0].hours} · {clinic.openingHours[1].days}:{" "}
                {clinic.openingHours[1].hours.toLowerCase()}
              </dd>
            </div>
          ) : null}
          <div>
            <dt>
              <Stethoscope aria-hidden size={17} strokeWidth={1.8} />
              Atendimento
            </dt>
            <dd>Consultas de neurocirurgia mediante agendamento prévio.</dd>
          </div>
        </dl>

        <div className="location-highlight-actions">
          <TrackedWhatsAppLink
            href={createWhatsAppUrl(location.ctaMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary min-h-12"
            eventLocation="locations_hub_card"
            eventLabel="Agendar avaliação"
          >
            Agendar avaliação
          </TrackedWhatsAppLink>
          <Link className="location-highlight-link" href={detailHref}>
            Ver informações para a consulta
            <ArrowRight aria-hidden size={17} strokeWidth={2} />
          </Link>
          {clinic ? (
            <Link className="location-highlight-link" href={`/${clinic.slug}`}>
              Sobre a {clinic.name}
              <ArrowRight aria-hidden size={17} strokeWidth={2} />
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  );
}
