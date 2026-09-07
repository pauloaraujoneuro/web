import { ExternalLink } from "lucide-react";
import type { ClinicProfile } from "@/app/lib/content-types";
import { fullAddress } from "@/app/lib/clinics";

/**
 * A plain query embed rather than a Place embed: it shows the map and the pin
 * without the ratings panel. Lazy-loaded, since it sits far below the fold.
 */
export default function ClinicMap({ clinic }: { clinic: ClinicProfile }) {
  return (
    <div className="clinic-map">
      <iframe
        src={clinic.mapEmbedUrl}
        title={`Mapa de localização da ${clinic.name}`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen={false}
      />
      <div className="clinic-map-footer">
        <address>{fullAddress(clinic)}</address>
        <a href={clinic.mapUrl} target="_blank" rel="noopener noreferrer">
          Abrir no Google Maps
          <ExternalLink aria-hidden size={15} strokeWidth={2} />
        </a>
      </div>
    </div>
  );
}
