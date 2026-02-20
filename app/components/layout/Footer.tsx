import Image from "next/image";
import Link from "next/link";
import {
  BRAND_LOGO_WORDMARK_INVERTED,
  CLINIC_NAME,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  DOCTOR_CRM,
  DOCTOR_NAME,
  DOCTOR_RQE,
  DOCTOR_SUBTITLE,
  INSTAGRAM_URL,
  LATTES_URL,
  LATTES_URL_LABEL,
  NAV_ITEMS,
} from "@/constants";
import InstagramIcon from "@/app/components/icons/InstagramIcon";
import LattesIcon from "@/app/components/icons/LattesIcon";

export default function Footer() {
  const year = new Date().getFullYear();
  const hasLattesLink = LATTES_URL.startsWith("http");

  return (
    <footer className="relative overflow-hidden border-t border-secondary/38 bg-primary text-bg">
      <div className="pointer-events-none absolute inset-0 opacity-36">
        <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-secondary/30 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-secondary/26 blur-3xl" />
      </div>

      <div className="container-shell relative z-10 py-14">
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-[1.35fr_0.7fr_0.95fr]">
          <section className="md:col-span-2 xl:col-span-1">
            <div className="md:grid md:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] md:items-center md:gap-8 xl:block">
              <Image
                src={BRAND_LOGO_WORDMARK_INVERTED}
                alt="Marca Paulo Araújo"
                width={4501}
                height={4501}
                className="h-auto w-full max-w-87.5 md:mx-auto md:max-w-75 xl:mx-0 xl:max-w-87.5"
              />

              <div className="mt-4 md:mt-0 xl:mt-4">
                <p className="max-w-xl text-sm leading-relaxed text-bg/88 md:max-w-none xl:max-w-xl">
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
              </div>
            </div>
          </section>

          <section className="md:col-span-1">
            <h3 className="text-lg font-semibold text-bg mt-0 xl:mt-12">
              Navegação
            </h3>
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

          <section className="md:col-span-1">
            <h3 className="text-lg font-semibold text-bg mt-0 xl:mt-12">
              Contato
            </h3>
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
              {hasLattesLink ? (
                <li>
                  <Link
                    href={LATTES_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="interactive-link whitespace-nowrap"
                  >
                    <LattesIcon className="h-4.5 w-4.5" />
                    {LATTES_URL_LABEL}
                  </Link>
                </li>
              ) : null}
            </ul>
          </section>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-bg/35 pt-6 text-sm text-bg/78 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {DOCTOR_NAME}. Todos os direitos reservados.
          </p>
          <p className="text-bg/72">Neurocirurgia | {DOCTOR_SUBTITLE}</p>
        </div>
      </div>
    </footer>
  );
}
