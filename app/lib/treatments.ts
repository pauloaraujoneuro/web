import type { Treatment } from "@/app/lib/content-types";
import { validateTreatments } from "@/app/lib/content-validation";

const sharedFaq = (
  id: string,
  question: string,
  answer: string,
): Treatment["faqs"][number] => ({
  id,
  category: "tratamentos",
  question,
  answer,
  order: 1,
  state: "published",
});

export const TREATMENTS: Treatment[] = [
  {
    slug: "cirurgia-nervos-perifericos",
    state: "published",
    indexable: true,
    group: "peripheral-nerve",
    title: "Cirurgia de nervos periféricos",
    shortDescription:
      "Avaliação e reconstrução nervosa orientadas à recuperação de movimentos e sensibilidade.",
    primaryIntent: "entender a avaliação para cirurgia de nervos periféricos",
    metaTitle: "Cirurgia de nervos periféricos em Campo Grande",
    metaDescription:
      "Conheça a avaliação de lesões de nervos periféricos e as possibilidades de acompanhamento, reconstrução e reabilitação.",
    summary:
      "Lesões traumáticas e compressivas dos nervos podem afetar força, sensibilidade e autonomia. A conduta depende da história, do exame neurológico e dos exames já realizados.",
    sections: [
      {
        id: "avaliacao",
        heading: "Uma avaliação orientada à função",
        paragraphs: [
          "A consulta relaciona os sintomas, o tempo de evolução e o impacto nas atividades diárias aos achados do exame neurológico.",
          "Exames complementares são analisados dentro desse contexto. A indicação de novos exames ou de uma intervenção é individualizada.",
        ],
      },
      {
        id: "abordagens",
        heading: "Possibilidades de cuidado",
        paragraphs: [
          "Conforme o diagnóstico, o plano pode incluir acompanhamento, reabilitação ou cirurgia. Reconstruções e enxertos nervosos são considerados quando podem contribuir para ganho funcional.",
        ],
      },
    ],
    indications: [
      "Perda de movimentos ou sensibilidade após trauma em braços ou pernas.",
      "Suspeita de lesão do plexo braquial.",
      "Síndromes compressivas complexas, como túnel do carpo, síndrome cubital ou túnel do tarso.",
    ],
    limitations: [
      "Nem toda alteração nervosa precisa de cirurgia.",
      "O benefício esperado e o momento da intervenção dependem da avaliação presencial e da evolução individual.",
    ],
    carePath: [
      "Revisão da história e dos exames anteriores.",
      "Exame neurológico direcionado à força, sensibilidade e função.",
      "Definição compartilhada entre acompanhamento, reabilitação e possibilidade cirúrgica.",
    ],
    faqs: [
      sharedFaq(
        "nervo-exames",
        "Quais exames devo levar?",
        "Leve todos os exames relacionados ao problema, inclusive os antigos. Na consulta, o médico avalia se há necessidade de investigação complementar.",
      ),
    ],
    relatedTreatmentSlugs: ["reabilitacao-neurocirurgica"],
    relatedPostSlugs: ["como-se-preparar-para-consulta-neurocirurgica"],
    keywords: ["nervo periférico", "reconstrução nervosa", "Campo Grande"],
    lastModified: "2026-09-06",
    order: 1,
  },
  {
    slug: "cirurgia-coluna",
    state: "published",
    indexable: true,
    group: "spine",
    title: "Cirurgia da coluna vertebral",
    shortDescription:
      "Investigação de patologias traumáticas e compressivas com foco em estabilidade e descompressão neural.",
    primaryIntent: "entender quando avaliar cirurgia da coluna vertebral",
    metaTitle: "Cirurgia da coluna vertebral em Campo Grande",
    metaDescription:
      "Entenda como é feita a avaliação neurocirúrgica da coluna e como são discutidas opções conservadoras, reabilitação e cirurgia.",
    summary:
      "A avaliação da coluna considera sintomas, exame neurológico, impacto funcional e exames de imagem para definir uma conduta proporcional ao caso.",
    sections: [
      {
        id: "quadros-avaliados",
        heading: "Quadros avaliados",
        paragraphs: [
          "A atuação inclui avaliação de hérnia de disco, estenose do canal, mielopatia cervical e fraturas da coluna.",
        ],
      },
      {
        id: "planejamento",
        heading: "Planejamento individualizado",
        paragraphs: [
          "Quando uma cirurgia é considerada, o planejamento busca equilibrar descompressão neural, estabilidade e preservação dos tecidos.",
        ],
      },
    ],
    indications: [
      "Sintomas neurológicos relacionados a condições compressivas da coluna.",
      "Fraturas que precisam de avaliação de estabilidade.",
    ],
    limitations: [
      "Muitos quadros podem ser acompanhados com medidas conservadoras.",
      "A presença de uma alteração no exame de imagem, isoladamente, não define a necessidade de cirurgia.",
    ],
    carePath: [
      "Entendimento dos sintomas e tratamentos prévios.",
      "Exame neurológico e revisão das imagens disponíveis.",
      "Discussão das alternativas e dos próximos passos.",
    ],
    faqs: [
      sharedFaq(
        "coluna-cirurgia",
        "Todo problema de coluna precisa de cirurgia?",
        "Não. A conduta depende da avaliação clínica e do impacto funcional. Tratamento conservador e reabilitação podem ser indicados em muitos casos.",
      ),
    ],
    relatedTreatmentSlugs: ["reabilitacao-neurocirurgica"],
    relatedPostSlugs: ["como-se-preparar-para-consulta-neurocirurgica"],
    keywords: ["cirurgia da coluna", "neurocirurgia", "Campo Grande"],
    lastModified: "2026-09-06",
    order: 2,
  },
  {
    slug: "reabilitacao-neurocirurgica",
    state: "published",
    indexable: true,
    group: "rehabilitation",
    title: "Reabilitação neurocirúrgica",
    shortDescription:
      "Acompanhamento orientado ao ganho de movimentos e ao retorno funcional.",
    primaryIntent: "conhecer a reabilitação após avaliação neurocirúrgica",
    metaTitle: "Reabilitação neurocirúrgica em Campo Grande",
    metaDescription:
      "Conheça o papel da reabilitação orientada à função após cirurgias e em lesões neurológicas.",
    summary:
      "A reabilitação integra o planejamento neurocirúrgico e busca transformar ganhos clínicos em movimentos úteis e maior independência.",
    sections: [
      {
        id: "objetivos",
        heading: "Objetivos funcionais claros",
        paragraphs: [
          "O plano é definido a partir das necessidades do paciente, dos movimentos prioritários e da fase de recuperação.",
        ],
      },
      {
        id: "acompanhamento",
        heading: "Acompanhamento ao longo da recuperação",
        paragraphs: [
          "Orientações, treinamento de movimentos e uso de órteses podem fazer parte do cuidado quando indicados.",
        ],
      },
    ],
    indications: [
      "Pós-operatório de reconstruções nervosas ou cirurgias da coluna.",
      "Lesões neurológicas com impacto na função e na autonomia.",
    ],
    limitations: [
      "O ritmo e o potencial de recuperação variam conforme o diagnóstico e a condição individual.",
      "O acompanhamento não implica promessa de resultado.",
    ],
    carePath: [
      "Definição dos movimentos e atividades prioritárias.",
      "Plano progressivo alinhado à fase clínica.",
      "Reavaliações para ajustar objetivos e estratégias.",
    ],
    faqs: [
      sharedFaq(
        "reabilitacao-tempo",
        "Quanto tempo dura a reabilitação?",
        "A duração varia conforme o diagnóstico, o procedimento e os objetivos funcionais. O cronograma é ajustado durante o acompanhamento.",
      ),
    ],
    relatedTreatmentSlugs: ["cirurgia-nervos-perifericos", "cirurgia-coluna"],
    relatedPostSlugs: ["como-se-preparar-para-consulta-neurocirurgica"],
    keywords: ["reabilitação neurocirúrgica", "recuperação funcional"],
    lastModified: "2026-09-06",
    order: 3,
  },
];

export const TREATMENT_GROUPS: Array<{
  id: Treatment["group"];
  label: string;
  description: string;
}> = [
  {
    id: "peripheral-nerve",
    label: "Nervo periférico",
    description: "Reconstrução, descompressão e planejamento funcional.",
  },
  {
    id: "spine",
    label: "Cirurgia da coluna",
    description: "Condições traumáticas e compressivas da coluna vertebral.",
  },
  {
    id: "rehabilitation",
    label: "Reabilitação neurocirúrgica",
    description: "Recuperação de movimentos e retorno às atividades.",
  },
];

export function getPublishedTreatments(source = TREATMENTS) {
  return source
    .filter((item) => item.state === "published" && item.indexable)
    .toSorted((a, b) => a.order - b.order || a.slug.localeCompare(b.slug));
}

export function getPublishedTreatment(slug: string) {
  return getPublishedTreatments().find((item) => item.slug === slug);
}

validateTreatments(TREATMENTS);
