import type { Treatment } from "@/app/lib/content-types";
import { sharedFaq } from "@/app/content/treatments/shared";

/** Rehabilitation topics. */
export const REHABILITATION_TREATMENTS: Treatment[] = [
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
  {
    slug: "reeducacao-cortical-biofeedback",
    state: "published",
    indexable: false,
    group: "rehabilitation",
    kind: "procedure",
    title: "Reeducação cortical e biofeedback",
    shortDescription:
      "Treinamento orientado para o cérebro assumir o comando de uma via nervosa reconstruída.",
    primaryIntent: "entender a reeducação cortical após cirurgia de nervo",
    metaTitle: "Reeducação cortical e biofeedback | Campo Grande",
    metaDescription:
      "Entenda o papel da reeducação cortical e do biofeedback na recuperação de movimentos após cirurgias de nervo periférico.",
    summary:
      "Depois de uma transferência nervosa, o músculo passa a receber comando de um nervo diferente do original. A reeducação cortical é o treinamento que ensina o cérebro a acionar esse novo caminho de forma voluntária e automática.",
    sections: [
      {
        id: "por-que",
        heading: "Por que o treinamento é necessário",
        paragraphs: [
          "A cirurgia restabelece a conexão anatômica, mas o comando do movimento continua sendo cerebral. Sem treinamento dirigido, o ganho anatômico pode não se traduzir em uso prático.",
          "O trabalho parte de movimentos assistidos e evolui para o acionamento voluntário do músculo reinervado nas atividades do dia a dia.",
        ],
      },
      {
        id: "como-funciona",
        heading: "Como o acompanhamento é conduzido",
        paragraphs: [
          "O programa é ajustado à fase da recuperação e aos movimentos definidos como prioritários junto ao paciente.",
          "Recursos de biofeedback ajudam a tornar visível uma contração ainda discreta, o que orienta o treino e sustenta a adesão ao longo do processo.",
        ],
      },
    ],
    indications: [
      "Pós-operatório de transferência nervosa ou reconstrução de nervo.",
      "Movimento reinervado que ainda não é usado de forma espontânea.",
      "Necessidade de integrar o ganho motor às atividades diárias.",
    ],
    limitations: [
      "O ritmo do processo é individual e depende da lesão, da cirurgia e da adesão ao programa.",
      "O treinamento acompanha a evolução biológica da reinervação e não a antecipa.",
      "Não há promessa de resultado; os objetivos são revistos ao longo do acompanhamento.",
    ],
    carePath: [
      "Definição dos movimentos prioritários com o paciente.",
      "Treino assistido na fase inicial da reinervação.",
      "Progressão para acionamento voluntário do músculo.",
      "Integração do movimento às atividades diárias.",
    ],
    faqs: [
      sharedFaq(
        "reeducacao-necessidade",
        "Por que preciso treinar se a cirurgia já foi feita?",
        "A cirurgia restabelece o caminho do nervo, mas o comando do movimento continua sendo cerebral. O treinamento dirigido é o que transforma a conexão recuperada em movimento útil no dia a dia.",
      ),
    ],
    relatedTreatmentSlugs: ["reabilitacao-neurocirurgica", "transferencia-nervosa-tetraplegia"],
    relatedPostSlugs: ["como-se-preparar-para-consulta-neurocirurgica"],
    keywords: ["reeducação cortical", "biofeedback", "reabilitação neurológica", "Campo Grande"],
    lastModified: "2026-09-06",
    order: 13,
  },
  {
    slug: "orteses-dinamicas",
    state: "published",
    indexable: false,
    group: "rehabilitation",
    kind: "procedure",
    title: "Órteses dinâmicas e adaptações",
    shortDescription:
      "Dispositivos que protegem, posicionam e ampliam a função do membro durante a recuperação.",
    primaryIntent: "entender o uso de órteses durante a recuperação neurocirúrgica",
    metaTitle: "Órteses dinâmicas e adaptações | Campo Grande",
    metaDescription:
      "Entenda o papel das órteses e das adaptações funcionais na proteção do membro e na autonomia durante a recuperação neurocirúrgica.",
    summary:
      "Enquanto um nervo se recupera, as articulações do membro precisam ser preservadas. Órteses e adaptações mantêm o posicionamento adequado, previnem deformidades e podem ampliar a autonomia do paciente nas tarefas diárias.",
    sections: [
      {
        id: "para-que-servem",
        heading: "Para que servem",
        paragraphs: [
          "Um membro sem comando muscular tende a assumir posições que, mantidas, levam a rigidez e a deformidades difíceis de reverter.",
          "As órteses posicionam a articulação e protegem suturas e reconstruções na fase inicial, preservando a mobilidade que a recuperação vai exigir depois.",
        ],
      },
      {
        id: "indicacao",
        heading: "Indicação e acompanhamento",
        paragraphs: [
          "O modelo e o tempo de uso são definidos conforme o quadro, a fase da recuperação e as atividades prioritárias do paciente.",
          "O acompanhamento periódico ajusta a indicação à evolução, retirando ou modificando o dispositivo conforme a função retorna.",
        ],
      },
    ],
    indications: [
      "Perda de comando muscular com risco de deformidade articular.",
      "Necessidade de proteção do membro no pós-operatório.",
      "Busca por maior autonomia em tarefas diárias durante a recuperação.",
    ],
    limitations: [
      "A órtese apoia o tratamento; não substitui a reabilitação nem o acompanhamento clínico.",
      "O modelo e o tempo de uso variam conforme o quadro e a fase da recuperação.",
      "A indicação é individual e revista ao longo do acompanhamento.",
    ],
    carePath: [
      "Avaliação do posicionamento e da mobilidade do membro.",
      "Definição do modelo e do tempo de uso.",
      "Orientação de uso e de cuidados com a pele.",
      "Reavaliações para ajustar a indicação à evolução.",
    ],
    faqs: [
      sharedFaq(
        "orteses-tempo",
        "Por quanto tempo vou precisar usar?",
        "O tempo de uso depende do quadro e da fase da recuperação. A indicação é revista nas reavaliações e ajustada conforme a função retorna.",
      ),
    ],
    relatedTreatmentSlugs: ["reabilitacao-neurocirurgica", "cirurgia-nervos-perifericos"],
    relatedPostSlugs: ["como-se-preparar-para-consulta-neurocirurgica"],
    keywords: ["órteses", "adaptações funcionais", "reabilitação", "Campo Grande"],
    lastModified: "2026-09-06",
    order: 14,
  },
];
