import Image from "next/image";
import Link from "next/link";
import {
  BRAND_LOGO_WORDMARK_INVERTED,
  CLINIC_NAME,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  DOCTOR_CRM,
  DOCTOR_NAME,
  DOCTOR_REGISTRATION_BADGES,
  DOCTOR_RQE,
  INSTAGRAM_URL,
  NAV_ITEMS,
} from "@/constants";
import InstagramIcon from "@/app/components/icons/InstagramIcon";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-secondary/38 bg-primary text-bg">
      <div className="pointer-events-none absolute inset-0 opacity-36">
        <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-secondary/30 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-secondary/26 blur-3xl" />
      </div>

      <div className="container-shell relative z-10 py-14">
        <div className="grid gap-10 xl:grid-cols-[1.35fr_0.7fr_0.95fr]">
          <section>
            <Image
              src={BRAND_LOGO_WORDMARK_INVERTED}
              alt="Marca Paulo Araújo"
              width={4501}
              height={4501}
              className="h-auto w-full max-w-87.5"
            />
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-bg/88">
              {CLINIC_NAME}. Atendimento com clareza técnica, estratégia
              terapêutica baseada em evidência e acompanhamento orientado à
              recuperação funcional.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="inline-flex items-center whitespace-nowrap rounded-full border border-secondary/65 bg-secondary/25 px-3 py-1.5 text-sm font-bold tracking-[0.02em] text-bg shadow-sm">
                {DOCTOR_CRM}
              </span>
              <span className="inline-flex items-center whitespace-nowrap rounded-full border border-secondary/65 bg-secondary/25 px-3 py-1.5 text-sm font-bold tracking-[0.02em] text-bg shadow-sm">
                {DOCTOR_RQE}
              </span>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-bg">Navegação</h3>
            <ul className="mt-4 space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="interactive-link whitespace-nowrap text-sm text-bg/84"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-bg">Contato</h3>
            <ul className="mt-4 space-y-2 text-sm text-bg/84">
              <li className="whitespace-nowrap">{CONTACT_PHONE}</li>
              <li>
                <Link
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="interactive-link whitespace-nowrap"
                >
                  {CONTACT_EMAIL}
                </Link>
              </li>
              <li>
                <Link
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="interactive-link whitespace-nowrap"
                >
                  <InstagramIcon className="h-4.5 w-4.5" />
                  Instagram
                </Link>
              </li>
            </ul>
          </section>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-bg/35 pt-6 text-sm text-bg/78 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {DOCTOR_NAME}. Todos os direitos reservados.
          </p>
          <p className="text-bg/72">
            Neurocirurgia | Cirurgia de Coluna, Nervo e Reabilitação
          </p>
        </div>
      </div>
    </footer>
  );
}
