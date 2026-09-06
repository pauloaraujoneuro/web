import type { Treatment, TreatmentKind } from "@/app/lib/content-types";
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
    kind: "overview",
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
    slug: "lesao-plexo-braquial",
    state: "published",
    indexable: false,
    group: "peripheral-nerve",
    kind: "condition",
    title: "Lesão do plexo braquial",
    shortDescription:
      "Perda de força ou sensibilidade no braço após trauma, avaliada pelo mecanismo, pelo tempo e pelo exame neurológico.",
    primaryIntent: "entender a avaliação e as condutas na lesão do plexo braquial",
    metaTitle: "Lesão do plexo braquial em Campo Grande",
    metaDescription:
      "Entenda o que é a lesão do plexo braquial, quando procurar avaliação especializada e quais caminhos de tratamento existem.",
    summary:
      "O plexo braquial é a rede de nervos que sai da coluna cervical e comanda o movimento e a sensibilidade do ombro, do braço e da mão. Quando é lesionado, a conduta depende do mecanismo do trauma, do tempo decorrido e do que o exame neurológico mostra.",
    sections: [
      {
        id: "o-que-e",
        heading: "O que é o plexo braquial",
        paragraphs: [
          "O plexo braquial se origina nas raízes nervosas da coluna cervical, atravessa o pescoço e a região do ombro e se divide nos nervos que comandam todo o membro superior.",
          "Uma lesão nessa rede interrompe a comunicação entre o sistema nervoso central e o braço, o que pode afetar movimentos, sensibilidade ou ambos, em graus variados.",
        ],
      },
      {
        id: "avaliacao",
        heading: "Como a investigação é conduzida",
        paragraphs: [
          "A avaliação com especialista deve ser buscada assim que houver perda de movimento ou de sensibilidade no braço após um trauma: o intervalo entre a lesão e a consulta influencia as condutas disponíveis.",
          "A consulta relaciona a história do trauma ao exame neurológico detalhado, que testa a força de cada grupo muscular e mapeia a sensibilidade do membro.",
          "Exames de imagem e estudos eletrofisiológicos já realizados são revistos nesse contexto. A necessidade de novos exames e o momento adequado para repeti-los são definidos individualmente.",
        ],
      },
      {
        id: "condutas",
        heading: "Possibilidades de tratamento",
        paragraphs: [
          "Parte dos casos evolui com recuperação sob acompanhamento clínico e reabilitação, sem necessidade de cirurgia.",
          "Quando há indicação cirúrgica, as abordagens possíveis incluem a liberação do nervo de tecido cicatricial, o uso de enxertos nervosos para vencer falhas entre as extremidades e a transferência de nervos saudáveis para reinervar o músculo-alvo. A escolha é individual e discutida em consulta.",
        ],
      },
    ],
    indications: [
      "Dificuldade para levantar o braço, afastar o ombro ou dobrar o cotovelo após o trauma.",
      "Dormência ou perda de sensibilidade em faixas do braço, do antebraço ou da mão.",
      "Dor em queimação ou em choque que persiste na região afetada.",
      "Ausência de recuperação sob acompanhamento clínico.",
    ],
    limitations: [
      "Nem toda lesão do plexo braquial tem indicação cirúrgica; parte dos casos recupera com acompanhamento e reabilitação.",
      "Os objetivos funcionais são definidos caso a caso e discutidos abertamente antes de qualquer decisão. Não há promessa de resultado.",
      "A reabilitação é parte indispensável do tratamento, com ou sem cirurgia.",
    ],
    carePath: [
      "Revisão da história do trauma e dos atendimentos já realizados.",
      "Exame neurológico do membro, com avaliação de força e sensibilidade.",
      "Leitura conjunta dos exames de imagem e eletrofisiológicos disponíveis.",
      "Definição compartilhada entre acompanhamento, reabilitação e possibilidade cirúrgica.",
      "Reavaliações programadas para acompanhar a evolução.",
    ],
    faqs: [
      sharedFaq(
        "plexo-quando-procurar",
        "Quando devo procurar um especialista após o trauma?",
        "O quanto antes. O intervalo entre a lesão e a avaliação influencia as condutas disponíveis, por isso a consulta não deve ser adiada enquanto se aguarda uma recuperação espontânea.",
      ),
      sharedFaq(
        "plexo-exames",
        "Quais exames devo levar na consulta?",
        "Leve todos os exames e laudos relacionados ao trauma, incluindo imagens em mídia digital, relatórios de atendimento de urgência e estudos eletrofisiológicos, mesmo que antigos.",
      ),
      sharedFaq(
        "plexo-cirurgia",
        "Toda lesão do plexo braquial precisa de cirurgia?",
        "Não. Parte dos casos evolui com acompanhamento clínico e reabilitação. A indicação cirúrgica depende do tipo de lesão, da evolução e da avaliação presencial.",
      ),
    ],
    relatedTreatmentSlugs: ["cirurgia-nervos-perifericos", "reabilitacao-neurocirurgica"],
    relatedPostSlugs: ["como-se-preparar-para-consulta-neurocirurgica"],
    keywords: ["lesão do plexo braquial", "plexo braquial", "nervo periférico", "Campo Grande"],
    lastModified: "2026-09-06",
    order: 4,
  },
  {
    slug: "cirurgia-coluna",
    state: "published",
    indexable: true,
    group: "spine",
    kind: "overview",
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
    kind: "overview",
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

export const TREATMENT_KIND_LABELS: Record<TreatmentKind, string> = {
  overview: "Visão geral da área",
  condition: "Condição tratada",
  procedure: "Procedimento",
};

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

function byCatalogOrder(a: Treatment, b: Treatment) {
  return a.order - b.order || a.slug.localeCompare(b.slug);
}

/**
 * Entries that have a real page: rendered, linked and navigable. Copy awaiting
 * clinical approval stays visible but non-indexable until `indexable` flips.
 */
export function getVisibleTreatments(source = TREATMENTS) {
  return source.filter((item) => item.state === "published").toSorted(byCatalogOrder);
}

export function getVisibleTreatment(slug: string) {
  return getVisibleTreatments().find((item) => item.slug === slug);
}

/** The discovery surface: only these reach the sitemap and stay indexable. */
export function getPublishedTreatments(source = TREATMENTS) {
  return getVisibleTreatments(source).filter((item) => item.indexable);
}

export function getPublishedTreatment(slug: string) {
  return getPublishedTreatments().find((item) => item.slug === slug);
}

validateTreatments(TREATMENTS);
