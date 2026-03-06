interface ContactMapEmbedProps {
  mapUrl: string;
}

export default function ContactMapEmbed({ mapUrl }: ContactMapEmbedProps) {
  return (
    <div className="relative h-80 overflow-hidden rounded-lg border border-primary/18 sm:h-97.5">
      <iframe
        title="Mapa de atendimento"
        src={mapUrl}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-full w-full border-0"
      />
    </div>
  );
}
