import TrackedWhatsAppLink from "@/app/components/analytics/TrackedWhatsAppLink";
import { CONTACT_WHATSAPP_FAQ_URL, FAQ_ITEMS } from "@/constants";

export default function FaqSection() {
  const hasExternalWhatsApp = CONTACT_WHATSAPP_FAQ_URL.startsWith("https://");

  return (
    <section id="faq" className="section-shell section-anchor section-tone-faq">
      <div className="container-shell">
        <div className="max-w-3xl">
          <h2 className="text-balance text-3xl font-semibold text-bg sm:text-4xl">
            Perguntas e respostas
          </h2>
          <p className="mt-4 text-base leading-relaxed text-bg/80">
            Dúvidas frequentes sobre consulta, atendimento e conduta
            neurocirúrgica.
          </p>
        </div>

        <div className="stagger-grid mt-8 space-y-3">
          {FAQ_ITEMS.map((item) => (
            <details key={item.id} className="faq-accordion group">
              <summary className="faq-accordion-summary">
                <span className="text-base font-semibold text-primary sm:text-lg">
                  {item.question}
                </span>
                <span className="faq-accordion-icon" aria-hidden="true">
                  +
                </span>
              </summary>
              <div className="faq-accordion-content">
                <p className="text-sm leading-relaxed text-primary/84 sm:text-base">
                  {item.answer}
                </p>
              </div>
            </details>
          ))}
        </div>

        <div className="mt-7 flex justify-center">
          <TrackedWhatsAppLink
            href={CONTACT_WHATSAPP_FAQ_URL}
            target={hasExternalWhatsApp ? "_blank" : undefined}
            rel={hasExternalWhatsApp ? "noopener noreferrer" : undefined}
            className="faq-cta group"
            eventLocation="faq"
            eventLabel="Agendar avaliação com a equipe"
          >
            <span className="faq-cta-kicker">Resposta rápida no WhatsApp</span>
            <span className="faq-cta-label">
              <span>Agendar avaliação com a equipe</span>
            </span>
            <span className="faq-cta-subcopy">
              Envie sua dúvida e receba orientação para o próximo passo.
            </span>
          </TrackedWhatsAppLink>
        </div>
      </div>
    </section>
  );
}
