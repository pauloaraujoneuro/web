import Link from "next/link";
import {
  CLINIC_ADDRESS_FULL,
  CLINIC_HOURS,
  CLINIC_MAP_EMBED_URL,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_WHATSAPP_LABEL,
  CONTACT_WHATSAPP_URL,
  SERVICE_LOCATIONS,
} from "@/constants";

function MarkerIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-5 w-5"
    >
      <path d="M12 22s7-6.4 7-12a7 7 0 1 0-14 0c0 5.6 7 12 7 12Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-5 w-5"
    >
      <path d="M5 4h3l1 5-2.2 1.6a15.8 15.8 0 0 0 6.6 6.6L15 15l5 1v3a1 1 0 0 1-1 1h-1c-7.7 0-14-6.3-14-14V5a1 1 0 0 1 1-1Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-5 w-5"
    >
      <path d="M4 6h16v12H4z" />
      <path d="m4 8 8 5 8-5" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-5 w-5"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export default function ContactSection() {
  const hasExternalWhatsApp = CONTACT_WHATSAPP_URL.startsWith("https://");

  return (
    <section
      id="contact"
      className="section-shell section-anchor section-tone-secondary"
    >
      <div className="container-shell">
        <div className="max-w-3xl">
          <span className="badge">Contato e Local</span>
          <h2 className="mt-4 text-balance text-3xl font-semibold text-primary sm:text-4xl">
            Atendimento em Curitiba
          </h2>
          <p className="mt-4 text-base leading-relaxed text-primary/85">
            Informações de contato e unidades de atuação para facilitar
            orientação, encaminhamento e agendamento de consulta.
          </p>
        </div>

        <div className="mt-8 grid gap-6 xl:grid-cols-[0.88fr_1.12fr]">
          <article className="relative overflow-hidden border border-primary/24 bg-primary px-6 py-7 text-bg sm:px-7">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-bg/85 to-transparent" />
            <h3 className="text-xl font-semibold text-bg">Canais de contato</h3>

            <ul className="mt-5 space-y-4">
              <li className="flex gap-3">
                <span className="mt-0.5 text-bg/90">
                  <MarkerIcon />
                </span>
                <div>
                  <p className="text-sm font-semibold text-bg">
                    Endereço principal
                  </p>
                  <p className="text-sm leading-relaxed text-bg/82">
                    {CLINIC_ADDRESS_FULL}
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 text-bg/90">
                  <PhoneIcon />
                </span>
                <div>
                  <p className="text-sm font-semibold text-bg">Telefone</p>
                  <p className="text-sm leading-relaxed text-bg/82">
                    {CONTACT_PHONE}
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 text-bg/90">
                  <MailIcon />
                </span>
                <div>
                  <p className="text-sm font-semibold text-bg">Email</p>
                  <Link
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="interactive-link whitespace-nowrap text-sm leading-relaxed text-bg/82"
                  >
                    {CONTACT_EMAIL}
                  </Link>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 text-bg/90">
                  <ClockIcon />
                </span>
                <div>
                  <p className="text-sm font-semibold text-bg">Horário</p>
                  <p className="text-sm leading-relaxed text-bg/82">
                    {CLINIC_HOURS.weekdays}
                  </p>
                  <p className="text-sm leading-relaxed text-bg/82">
                    {CLINIC_HOURS.saturday}
                  </p>
                  <p className="text-sm leading-relaxed text-bg/82">
                    {CLINIC_HOURS.sunday}
                  </p>
                </div>
              </li>
            </ul>

            <Link
              href={CONTACT_WHATSAPP_URL}
              target={hasExternalWhatsApp ? "_blank" : undefined}
              rel={hasExternalWhatsApp ? "noopener noreferrer" : undefined}
              className="mt-7 inline-flex items-center justify-center whitespace-nowrap rounded-full border border-bg/35 bg-bg px-5 py-2.5 text-sm font-semibold text-primary! transition hover:bg-bg/92 hover:text-primary!"
              style={{ color: "var(--primary)" }}
            >
              WhatsApp: {CONTACT_WHATSAPP_LABEL}
            </Link>
          </article>

          <div className="grid gap-6">
            <article className="card-surface p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary/72">
                Unidades de atuação
              </p>
              <ul className="mt-4 space-y-4">
                {SERVICE_LOCATIONS.map((location) => (
                  <li key={location.id} className="panel-line p-4">
                    <p className="text-sm font-semibold text-primary">
                      {location.name}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-primary/82">
                      {location.address}, {location.city} - {location.state}
                    </p>
                    {location.phone ? (
                      <p className="mt-1 text-sm leading-relaxed text-primary/82">
                        Telefone: {location.phone}
                      </p>
                    ) : null}
                  </li>
                ))}
              </ul>
            </article>

            <article className="card-surface overflow-hidden p-2">
              <iframe
                title="Mapa de atendimento"
                src={CLINIC_MAP_EMBED_URL}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-80 w-full border-0 sm:h-97.5"
              />
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
