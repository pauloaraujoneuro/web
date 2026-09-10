import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import Breadcrumb from "@/app/components/content/Breadcrumb";
import PageIntro from "@/app/components/content/PageIntro";
import TreatmentCard from "@/app/components/content/TreatmentCard";
import AppointmentCta from "@/app/components/conversion/AppointmentCta";
import SiteShell from "@/app/components/layout/SiteShell";
import { buildPageMetadata } from "@/app/lib/metadata";
import { getVisibleTreatments, TREATMENT_GROUPS } from "@/app/lib/treatments";
import { CONTACT_WHATSAPP_CAMPO_GRANDE_TEXT } from "@/constants";

const title = "Tratamentos e áreas de atuação";
const description =
  "Conheça as áreas de atuação em nervos periféricos, coluna vertebral e reabilitação neurocirúrgica.";

export const metadata: Metadata = buildPageMetadata({
  title,
  description,
  path: "/tratamentos",
});

export default function TreatmentsPage() {
  const treatments = getVisibleTreatments();

  return (
    <SiteShell>
      <div className="subpage-shell">
        <Breadcrumb items={[{ name: "Início", href: "/" }, { name: "Tratamentos" }]} />
        <PageIntro
          eyebrow="Tratamentos e áreas de atuação"
          title="Cuidado neurocirúrgico orientado à função e à qualidade de vida"
          description="Cada plano começa pela avaliação individual do quadro. Conheça os principais eixos de atuação e encontre informações para conversar com o especialista com mais clareza."
        />

        <nav aria-label="Áreas de tratamento" className="pill-navigation">
          {TREATMENT_GROUPS.map((group) => (
            <Link key={group.id} href={`#${group.id}`}>
              {group.label}
              <ArrowDown aria-hidden size={15} strokeWidth={1.5} />
            </Link>
          ))}
        </nav>

        <div className="mt-8 space-y-12 sm:mt-10 sm:space-y-16">
          {TREATMENT_GROUPS.map((group, groupIndex) => {
            const groupedTreatments = treatments.filter((item) => item.group === group.id);
            if (!groupedTreatments.length) return null;
            return (
              <section
                id={group.id}
                key={group.id}
                className={groupIndex === 0 ? "treatment-group treatment-group-featured" : "treatment-group"}
              >
                <div className="treatment-group-heading">
                  <span>Área {String(groupIndex + 1).padStart(2, "0")}</span>
                  <h2>{group.label}</h2>
                  <p>{group.description}</p>
                </div>
                <div className="treatment-grid">
                  {groupedTreatments.map((treatment) => (
                    <TreatmentCard key={treatment.slug} treatment={treatment} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        <div className="mt-12 sm:mt-16">
          <AppointmentCta
            heading="Converse com a equipe sobre sua avaliação"
            body="Atendimento presencial no INCC - Instituto de Nervos, Cérebro e Coluna, em Campo Grande - MS. Leve seus exames anteriores para uma análise contextualizada."
            message={CONTACT_WHATSAPP_CAMPO_GRANDE_TEXT}
            eventLocation="treatments_hub_final"
          />
        </div>
      </div>
    </SiteShell>
  );
}
