import { ArrowRight } from "lucide-react";
import TrackedWhatsAppLink from "@/app/components/analytics/TrackedWhatsAppLink";
import { createWhatsAppUrl } from "@/constants";

interface AppointmentCtaProps {
  heading: string;
  body: string;
  message: string;
  eventLocation: string;
  label?: string;
}

export default function AppointmentCta({
  heading,
  body,
  message,
  eventLocation,
  label = "Agendar avaliação",
}: AppointmentCtaProps) {
  const href = createWhatsAppUrl(message);
  return (
    <section className="appointment-cta">
      <div>
        <span className="eyebrow eyebrow-on-dark">Atendimento em Campo Grande</span>
        <h2>{heading}</h2>
        <p>{body}</p>
      </div>
      <TrackedWhatsAppLink
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-light min-h-12"
        eventLocation={eventLocation}
        eventLabel={label}
      >
        {label}
        <ArrowRight aria-hidden size={18} strokeWidth={1.5} />
      </TrackedWhatsAppLink>
    </section>
  );
}
