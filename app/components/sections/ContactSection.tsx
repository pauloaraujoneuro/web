import {
  CITY_SCHEDULES,
  CLINIC_MAP_EMBED_URL,
  CONSULTATION_APPROACH_POINTS,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_WHATSAPP_URL,
} from "@/constants";
import WhatsAppIcon from "@/app/components/icons/WhatsAppIcon";
import ContactMapEmbed from "@/app/components/sections/ContactMapEmbed";

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
      id="contato"
      className="section-shell section-anchor section-tone-secondary"
    >
      <div className="container-shell">
        <div>
          <span className="badge">Contato</span>
          <h2 className="mt-4 text-balance text-3xl font-semibold text-primary sm:text-4xl">
            Atendimento presencial em Curitiba e União da Vitória
          </h2>
          <p className="mt-4 text-base leading-relaxed text-primary/85">
            Canais de contato e agenda por cidade para orientar seu agendamento
            com clareza e previsibilidade.
          </p>
        </div>

        <div className="mt-8 grid gap-6 xl:grid-cols-[0.88fr_1.12fr]">
          <article className="relative h-full overflow-hidden rounded-xl border border-primary/24 bg-primary px-6 py-7 text-bg sm:px-7 xl:px-8 xl:py-8">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-bg/85 to-transparent" />
            <div className="space-y-7 xl:space-y-8">
              <h3 className="text-xl font-semibold text-bg xl:text-2xl">
                Entre em contato
              </h3>

              <ul className="space-y-4 xl:space-y-5">
                <li className="flex gap-3">
                  <span className="mt-0.5 text-bg/90">
                    <WhatsAppIcon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-bg xl:text-base">
                      Mensagem direta
                    </p>
                    <a
                      href={CONTACT_WHATSAPP_URL}
                      target={hasExternalWhatsApp ? "_blank" : undefined}
                      rel={
                        hasExternalWhatsApp ? "noopener noreferrer" : undefined
                      }
                      className="interactive-link whitespace-nowrap text-sm leading-relaxed text-bg/82 xl:text-lg"
                    >
                      Abrir conversa
                    </a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5 text-bg/90">
                    <PhoneIcon />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-bg xl:text-base">
                      Telefone fixo
                    </p>
                    <p className="text-sm leading-relaxed text-bg/82 xl:text-lg">
                      {CONTACT_PHONE}
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5 text-bg/90">
                    <MailIcon />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-bg xl:text-base">
                      Email
                    </p>
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="interactive-link whitespace-nowrap text-sm leading-relaxed text-bg/82 xl:text-[1.07rem]"
                    >
                      {CONTACT_EMAIL}
                    </a>
                  </div>
                </li>
              </ul>

              <div className="rounded-lg border border-bg/22 bg-bg/10 p-4 xl:p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-bg/72">
                  Como funciona a consulta
                </p>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-bg/82 xl:space-y-2.5 xl:text-base">
                  {CONSULTATION_APPROACH_POINTS.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </article>

          <div className="grid gap-6">
            <article className="card-surface p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary/72">
                Locais
              </p>
              <ul className="mt-4 space-y-4">
                {CITY_SCHEDULES.map((schedule) => (
                  <li key={schedule.id} className="panel-line p-4">
                    <p className="text-sm font-semibold text-primary">
                      {schedule.city} - {schedule.state}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-primary/82">
                      {schedule.location}
                    </p>
                    <p className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-primary/85">
                      <ClockIcon />
                      {schedule.cadence}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-primary/82">
                      {schedule.availability}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-primary/78">
                      {schedule.note}
                    </p>
                  </li>
                ))}
              </ul>
            </article>

            <article className="card-surface overflow-hidden p-2.5">
              <ContactMapEmbed mapUrl={CLINIC_MAP_EMBED_URL} />
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
