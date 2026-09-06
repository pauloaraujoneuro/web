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
  {
    slug: "transferencia-nervosa-tetraplegia",
    state: "published",
    indexable: false,
    group: "peripheral-nerve",
    kind: "procedure",
    title: "Transferência nervosa em tetraplegia",
    shortDescription:
      "Cirurgia que redireciona nervos preservados para recuperar movimentos úteis do membro superior.",
    primaryIntent: "saber quem pode ser avaliado para transferência nervosa em tetraplegia",
    metaTitle: "Transferência nervosa em tetraplegia | Campo Grande",
    metaDescription:
      "Entenda a cirurgia de transferência nervosa em tetraplegia, como é feita a avaliação e quais objetivos funcionais são discutidos.",
    summary:
      "Após uma lesão medular cervical, parte das vias nervosas acima do nível da lesão continua funcionando. A transferência nervosa aproveita esses nervos preservados para reinervar músculos que perderam o comando, com foco em movimentos que ampliam a autonomia.",
    sections: [
      {
        id: "o-que-e",
        heading: "O que é a transferência nervosa",
        paragraphs: [
          "Um nervo com função preservada e considerado dispensável é conectado ao nervo do músculo que se deseja reativar. O objetivo é devolver movimentos específicos, escolhidos junto com o paciente.",
          "Os alvos mais frequentes são movimentos que impactam diretamente o dia a dia, como a extensão do cotovelo e a preensão da mão.",
        ],
      },
      {
        id: "avaliacao",
        heading: "Como é feita a avaliação",
        paragraphs: [
          "A consulta mapeia, músculo a músculo, o que permanece funcional e o que foi perdido. Esse mapeamento define quais transferências são tecnicamente possíveis.",
          "Também são discutidos os objetivos do paciente, a rotina de cuidados e a disponibilidade para o programa de reabilitação, que é parte indissociável do tratamento.",
        ],
      },
      {
        id: "expectativas",
        heading: "Objetivos e reabilitação",
        paragraphs: [
          "Os ganhos são específicos: a cirurgia busca movimentos definidos previamente, não a reversão da lesão medular.",
          "Depois do procedimento, o treinamento orientado ajuda o cérebro a assumir o comando da nova via nervosa e a transformar o ganho em uso prático.",
        ],
      },
    ],
    indications: [
      "Tetraplegia ou tetraparesia por lesão medular cervical.",
      "Grupos musculares preservados acima do nível da lesão.",
      "Objetivos funcionais claros e discutidos em consulta.",
      "Condição clínica estável e disponibilidade para reabilitação.",
    ],
    limitations: [
      "Nem todo paciente é candidato; a indicação depende do mapeamento funcional individual.",
      "Os ganhos são pontuais e direcionados a movimentos escolhidos. Não há promessa de recuperação completa.",
      "A reabilitação após a cirurgia é indispensável para o resultado funcional.",
    ],
    carePath: [
      "Avaliação funcional detalhada do membro superior.",
      "Mapeamento dos grupos musculares preservados.",
      "Definição compartilhada dos movimentos prioritários.",
      "Planejamento cirúrgico individualizado.",
      "Programa de reabilitação orientado no pós-operatório.",
    ],
    faqs: [
      sharedFaq(
        "tetraplegia-quem-avalia",
        "Quem pode ser avaliado para a cirurgia?",
        "Pessoas com tetraplegia ou tetraparesia por lesão medular cervical que mantenham grupos musculares funcionais acima do nível da lesão. A elegibilidade é definida no exame presencial.",
      ),
      sharedFaq(
        "tetraplegia-resultado",
        "A cirurgia devolve todos os movimentos?",
        "Não. O objetivo é recuperar movimentos específicos, definidos antes da cirurgia, que ampliem a autonomia nas atividades diárias.",
      ),
    ],
    relatedTreatmentSlugs: ["cirurgia-nervos-perifericos", "reabilitacao-neurocirurgica"],
    relatedPostSlugs: ["como-se-preparar-para-consulta-neurocirurgica"],
    keywords: ["transferência nervosa", "tetraplegia", "lesão medular", "Campo Grande"],
    lastModified: "2026-09-06",
    order: 5,
  },
  {
    slug: "sindrome-tunel-carpo",
    state: "published",
    indexable: false,
    group: "peripheral-nerve",
    kind: "condition",
    title: "Síndrome do túnel do carpo",
    shortDescription:
      "Dormência, formigamento e perda de força na mão por compressão do nervo mediano no punho.",
    primaryIntent: "entender o tratamento da síndrome do túnel do carpo",
    metaTitle: "Síndrome do túnel do carpo em Campo Grande",
    metaDescription:
      "Entenda os sintomas da síndrome do túnel do carpo, como o diagnóstico é conduzido e quando a cirurgia de descompressão é considerada.",
    summary:
      "O nervo mediano passa por um túnel estreito no punho. Quando é comprimido nesse trajeto, surgem dormência, formigamento e, em quadros mais avançados, perda de força na mão.",
    sections: [
      {
        id: "sintomas",
        heading: "Sintomas que costumam chamar atenção",
        paragraphs: [
          "O formigamento nos dedos, muitas vezes mais intenso à noite ou ao acordar, é uma das queixas mais frequentes. Também é comum a sensação de precisar sacudir a mão para aliviar.",
          "Com a evolução, podem aparecer dificuldade para segurar objetos pequenos e redução da força de pinça.",
        ],
      },
      {
        id: "diagnostico",
        heading: "Como o diagnóstico é conduzido",
        paragraphs: [
          "O diagnóstico parte da história dos sintomas e do exame físico da mão e do punho, com manobras específicas.",
          "Estudos eletrofisiológicos ajudam a confirmar a compressão e a estimar sua intensidade, sempre interpretados junto ao quadro clínico.",
        ],
      },
      {
        id: "tratamento",
        heading: "Caminhos de tratamento",
        paragraphs: [
          "Quadros iniciais podem responder a medidas conservadoras, como ajustes de atividade, órteses noturnas e fisioterapia.",
          "A cirurgia de descompressão é considerada quando os sintomas persistem apesar do tratamento conservador ou quando há sinais de comprometimento mais avançado do nervo.",
        ],
      },
    ],
    indications: [
      "Dormência ou formigamento persistente nos dedos.",
      "Sintomas que interrompem o sono ou pioram ao acordar.",
      "Perda de força ou dificuldade para segurar objetos.",
      "Ausência de melhora com tratamento conservador bem conduzido.",
    ],
    limitations: [
      "Nem todo formigamento na mão corresponde a compressão do nervo mediano; outras causas precisam ser afastadas.",
      "Parte dos casos melhora sem cirurgia.",
      "O benefício esperado depende do tempo de evolução e do grau de comprometimento encontrado.",
    ],
    carePath: [
      "História dos sintomas e das atividades diárias.",
      "Exame físico da mão, do punho e da sensibilidade.",
      "Revisão dos exames eletrofisiológicos disponíveis.",
      "Decisão compartilhada entre conduta conservadora e cirúrgica.",
    ],
    faqs: [
      sharedFaq(
        "carpo-cirurgia-necessaria",
        "Todo caso precisa de cirurgia?",
        "Não. Quadros iniciais frequentemente melhoram com medidas conservadoras. A cirurgia é considerada quando os sintomas persistem ou quando há sinais de comprometimento mais avançado do nervo.",
      ),
      sharedFaq(
        "carpo-exames",
        "Preciso fazer eletroneuromiografia antes da consulta?",
        "Não é necessário fazer exames por conta própria. Leve os que já possui; na consulta é avaliada a necessidade de investigação complementar.",
      ),
    ],
    relatedTreatmentSlugs: ["cirurgia-nervos-perifericos", "sindrome-cubital"],
    relatedPostSlugs: ["como-se-preparar-para-consulta-neurocirurgica"],
    keywords: ["túnel do carpo", "nervo mediano", "dormência na mão", "Campo Grande"],
    lastModified: "2026-09-06",
    order: 6,
  },
  {
    slug: "sindrome-cubital",
    state: "published",
    indexable: false,
    group: "peripheral-nerve",
    kind: "condition",
    title: "Síndrome do túnel cubital",
    shortDescription:
      "Dormência no dedo mínimo e perda de força por compressão do nervo ulnar no cotovelo.",
    primaryIntent: "entender o tratamento da compressão do nervo ulnar no cotovelo",
    metaTitle: "Síndrome do túnel cubital em Campo Grande",
    metaDescription:
      "Entenda a compressão do nervo ulnar no cotovelo, os sinais de alerta e quando a descompressão cirúrgica é considerada.",
    summary:
      "O nervo ulnar passa por um trajeto superficial na face interna do cotovelo. A compressão nesse ponto costuma causar dormência no dedo mínimo e no anelar, além de perda de força na mão.",
    sections: [
      {
        id: "sintomas",
        heading: "Como a compressão se manifesta",
        paragraphs: [
          "A dormência no dedo mínimo e na metade do anelar é o sintoma mais característico, frequentemente piorando ao manter o cotovelo dobrado por períodos longos.",
          "Em quadros mais avançados, pode surgir perda de força para abrir e fechar os dedos e redução do volume dos músculos da mão.",
        ],
      },
      {
        id: "diagnostico",
        heading: "Investigação",
        paragraphs: [
          "O exame físico avalia a sensibilidade no território do nervo ulnar, a força dos músculos comandados por ele e a resposta a manobras no cotovelo.",
          "Exames eletrofisiológicos e de imagem, quando disponíveis, ajudam a localizar o ponto de compressão e a estimar seu impacto.",
        ],
      },
      {
        id: "tratamento",
        heading: "Possibilidades de tratamento",
        paragraphs: [
          "Casos iniciais podem ser conduzidos com orientação postural, ajustes de atividade e acompanhamento.",
          "Quando há perda de força, atrofia muscular ou sintomas persistentes, a descompressão cirúrgica do nervo passa a ser considerada, com ou sem mudança de sua posição no cotovelo.",
        ],
      },
    ],
    indications: [
      "Dormência persistente no dedo mínimo e no anelar.",
      "Piora dos sintomas ao manter o cotovelo dobrado.",
      "Perda de força na mão ou redução do volume muscular.",
      "Sintomas sem melhora com medidas conservadoras.",
    ],
    limitations: [
      "Sintomas na mão podem ter origem no cotovelo, no punho ou na coluna cervical; a origem precisa ser definida antes do tratamento.",
      "A recuperação depende do tempo de evolução e do grau de comprometimento do nervo.",
      "Não há promessa de resultado; os objetivos são discutidos individualmente.",
    ],
    carePath: [
      "História dos sintomas e do padrão de piora.",
      "Exame neurológico do membro superior.",
      "Revisão dos exames já realizados.",
      "Definição compartilhada da conduta.",
    ],
    faqs: [
      sharedFaq(
        "cubital-diferenca-carpo",
        "Qual a diferença para a síndrome do túnel do carpo?",
        "São nervos e locais diferentes. No túnel do carpo o nervo mediano é comprimido no punho e os sintomas atingem principalmente o polegar, o indicador e o médio. Na síndrome cubital, o nervo ulnar é comprimido no cotovelo e os sintomas atingem o dedo mínimo e o anelar.",
      ),
      sharedFaq(
        "cubital-quando-operar",
        "Quando a cirurgia é considerada?",
        "Principalmente diante de perda de força, atrofia muscular ou sintomas que persistem apesar das medidas conservadoras. A decisão é individual e discutida em consulta.",
      ),
    ],
    relatedTreatmentSlugs: ["cirurgia-nervos-perifericos", "sindrome-tunel-carpo"],
    relatedPostSlugs: ["como-se-preparar-para-consulta-neurocirurgica"],
    keywords: ["síndrome cubital", "nervo ulnar", "cotovelo", "Campo Grande"],
    lastModified: "2026-09-06",
    order: 7,
  },
  {
    slug: "sindrome-tunel-tarso",
    state: "published",
    indexable: false,
    group: "peripheral-nerve",
    kind: "condition",
    title: "Síndrome do túnel do tarso",
    shortDescription:
      "Dor, queimação e dormência no pé por compressão do nervo tibial no tornozelo.",
    primaryIntent: "entender o tratamento da compressão do nervo tibial no tornozelo",
    metaTitle: "Síndrome do túnel do tarso em Campo Grande",
    metaDescription:
      "Entenda a síndrome do túnel do tarso, como a compressão do nervo tibial é investigada e quais tratamentos são considerados.",
    summary:
      "O nervo tibial passa por um túnel na face interna do tornozelo. A compressão nesse trajeto pode causar dor, queimação e dormência na planta do pé, muitas vezes confundidas com outras causas de dor plantar.",
    sections: [
      {
        id: "sintomas",
        heading: "Sintomas frequentes",
        paragraphs: [
          "Queimação, choques ou dormência na planta do pé, com piora ao caminhar ou ao permanecer muito tempo em pé, são as queixas mais comuns.",
          "Os sintomas podem se concentrar em uma região do pé ou se espalhar, dependendo dos ramos nervosos envolvidos.",
        ],
      },
      {
        id: "diagnostico",
        heading: "Diagnóstico diferencial",
        paragraphs: [
          "Boa parte dos casos chega após tratamento prolongado para outras causas de dor no pé. Por isso, o exame avalia o trajeto do nervo e busca sinais que apontem para compressão.",
          "Estudos eletrofisiológicos e de imagem podem apoiar a conclusão, sempre lidos junto ao quadro clínico.",
        ],
      },
      {
        id: "tratamento",
        heading: "Caminhos de tratamento",
        paragraphs: [
          "Medidas conservadoras incluem ajustes de calçado e de atividade, fisioterapia e controle da dor neuropática.",
          "A descompressão cirúrgica é considerada quando há compressão confirmada e os sintomas persistem apesar do tratamento conservador.",
        ],
      },
    ],
    indications: [
      "Queimação ou dormência persistente na planta do pé.",
      "Piora dos sintomas ao caminhar ou ao ficar em pé.",
      "Dor no pé sem melhora com tratamentos anteriores.",
      "Suspeita de compressão do nervo tibial no tornozelo.",
    ],
    limitations: [
      "Nem toda dor no pé decorre de compressão nervosa; outras causas precisam ser afastadas.",
      "A resposta ao tratamento varia conforme o tempo de evolução e a causa da compressão.",
      "O plano é individual e não implica promessa de resultado.",
    ],
    carePath: [
      "História da dor e dos tratamentos já realizados.",
      "Exame do trajeto do nervo tibial no tornozelo e no pé.",
      "Revisão de exames eletrofisiológicos e de imagem disponíveis.",
      "Definição compartilhada entre conduta conservadora e cirúrgica.",
    ],
    faqs: [
      sharedFaq(
        "tarso-confusao",
        "É comum confundir com outras causas de dor no pé?",
        "Sim. Muitos pacientes chegam após longos tratamentos para outras causas de dor plantar. O exame direcionado ao trajeto do nervo ajuda a diferenciar os quadros.",
      ),
      sharedFaq(
        "tarso-tratamento",
        "O tratamento é sempre cirúrgico?",
        "Não. Medidas conservadoras são a primeira abordagem em boa parte dos casos. A cirurgia é considerada quando a compressão é confirmada e os sintomas persistem.",
      ),
    ],
    relatedTreatmentSlugs: ["cirurgia-nervos-perifericos", "reabilitacao-neurocirurgica"],
    relatedPostSlugs: ["como-se-preparar-para-consulta-neurocirurgica"],
    keywords: ["túnel do tarso", "nervo tibial", "dor no pé", "Campo Grande"],
    lastModified: "2026-09-06",
    order: 8,
  },
  {
    slug: "hernia-disco",
    state: "published",
    indexable: false,
    group: "spine",
    kind: "condition",
    title: "Hérnia de disco",
    shortDescription:
      "Dor irradiada para o braço ou para a perna quando um disco comprime uma raiz nervosa.",
    primaryIntent: "entender quando a hérnia de disco tem indicação cirúrgica",
    metaTitle: "Hérnia de disco em Campo Grande",
    metaDescription:
      "Entenda os sintomas da hérnia de disco, o que a investigação avalia e em quais situações a cirurgia é considerada.",
    summary:
      "Os discos entre as vértebras funcionam como amortecedores. Quando parte do disco se desloca e comprime uma raiz nervosa, a dor costuma irradiar para o braço ou para a perna, às vezes acompanhada de formigamento ou perda de força.",
    sections: [
      {
        id: "sintomas",
        heading: "O que costuma levar à consulta",
        paragraphs: [
          "A queixa mais frequente é a dor que sai da coluna e desce pelo membro, seguindo o trajeto do nervo comprimido.",
          "Formigamento, dormência e perda de força na perna ou no braço indicam maior repercussão sobre a raiz nervosa e merecem avaliação.",
        ],
      },
      {
        id: "investigacao",
        heading: "O que a investigação avalia",
        paragraphs: [
          "O exame neurológico verifica se os achados correspondem ao nível comprimido visto nos exames de imagem. Essa correlação é decisiva para a conduta.",
          "Alterações de imagem isoladas, sem sintomas correspondentes, são frequentes e não indicam, por si só, necessidade de cirurgia.",
        ],
      },
      {
        id: "tratamento",
        heading: "Caminhos de tratamento",
        paragraphs: [
          "A maior parte dos casos melhora com tratamento conservador: controle da dor, fisioterapia orientada e retorno progressivo às atividades.",
          "A cirurgia é considerada diante de perda de força relevante, dor incapacitante que não responde ao tratamento conservador ou sinais neurológicos de alerta.",
        ],
      },
    ],
    indications: [
      "Dor que irradia da coluna para o braço ou para a perna.",
      "Formigamento ou dormência no trajeto do nervo.",
      "Perda de força no membro afetado.",
      "Dor sem melhora com tratamento conservador bem conduzido.",
    ],
    limitations: [
      "Nem toda hérnia de disco tem indicação cirúrgica; a maior parte dos casos melhora sem cirurgia.",
      "Achados de imagem sem sintomas correspondentes não determinam a conduta.",
      "A decisão considera o impacto funcional, a evolução e os objetivos discutidos em consulta.",
    ],
    carePath: [
      "História da dor, do trajeto e do impacto nas atividades.",
      "Exame neurológico de força, sensibilidade e reflexos.",
      "Leitura dos exames de imagem em conjunto com o quadro clínico.",
      "Definição compartilhada entre tratamento conservador e cirúrgico.",
    ],
    faqs: [
      sharedFaq(
        "hernia-cirurgia",
        "Toda hérnia de disco precisa de cirurgia?",
        "Não. A maior parte dos casos melhora com tratamento conservador. A cirurgia é considerada diante de perda de força, dor incapacitante persistente ou sinais neurológicos de alerta.",
      ),
      sharedFaq(
        "hernia-exame-imagem",
        "Minha ressonância mostra hérnia. Isso já define o tratamento?",
        "Não. O exame precisa ser interpretado junto ao exame neurológico. Alterações de imagem sem sintomas correspondentes são comuns e não determinam sozinhas a conduta.",
      ),
    ],
    relatedTreatmentSlugs: ["cirurgia-coluna", "estenose-canal-vertebral"],
    relatedPostSlugs: ["como-se-preparar-para-consulta-neurocirurgica"],
    keywords: ["hérnia de disco", "dor ciática", "coluna", "Campo Grande"],
    lastModified: "2026-09-06",
    order: 9,
  },
  {
    slug: "estenose-canal-vertebral",
    state: "published",
    indexable: false,
    group: "spine",
    kind: "condition",
    title: "Estenose do canal vertebral",
    shortDescription:
      "Estreitamento do canal da coluna que causa dor e peso nas pernas ao caminhar.",
    primaryIntent: "entender o tratamento do estreitamento do canal vertebral",
    metaTitle: "Estenose do canal vertebral em Campo Grande",
    metaDescription:
      "Entenda a estenose do canal vertebral, por que os sintomas pioram ao caminhar e quando a descompressão cirúrgica é considerada.",
    summary:
      "Com o tempo, estruturas da coluna podem estreitar o canal por onde passam a medula e as raízes nervosas. O sintoma característico é a dor, o peso ou o formigamento nas pernas que aparece ao caminhar e alivia ao sentar ou inclinar o tronco à frente.",
    sections: [
      {
        id: "sintomas",
        heading: "Um padrão de sintomas característico",
        paragraphs: [
          "A limitação para caminhar distâncias que antes eram tranquilas é a queixa mais típica, com alívio ao parar, sentar ou inclinar o corpo para a frente.",
          "Esse padrão ajuda a diferenciar a estenose de outras causas de dor nas pernas e orienta a investigação.",
        ],
      },
      {
        id: "investigacao",
        heading: "Como o quadro é avaliado",
        paragraphs: [
          "O exame neurológico avalia força, sensibilidade e reflexos, e a distância que o paciente consegue caminhar antes do início dos sintomas.",
          "Os exames de imagem mostram o grau de estreitamento, sempre interpretados junto à limitação funcional relatada.",
        ],
      },
      {
        id: "tratamento",
        heading: "Possibilidades de tratamento",
        paragraphs: [
          "O tratamento conservador combina fisioterapia, condicionamento e controle da dor, com bons resultados em parte dos casos.",
          "A descompressão cirúrgica é considerada quando a limitação para caminhar compromete a autonomia ou quando há déficit neurológico progressivo.",
        ],
      },
    ],
    indications: [
      "Dor, peso ou formigamento nas pernas ao caminhar.",
      "Alívio dos sintomas ao sentar ou inclinar o tronco à frente.",
      "Redução progressiva da distância que consegue caminhar.",
      "Perda de força ou alteração de sensibilidade nas pernas.",
    ],
    limitations: [
      "O grau de estreitamento visto na imagem nem sempre corresponde à intensidade dos sintomas.",
      "Parte dos casos é bem conduzida sem cirurgia.",
      "Os objetivos do tratamento são funcionais e definidos individualmente.",
    ],
    carePath: [
      "História da limitação para caminhar e do padrão de alívio.",
      "Exame neurológico dos membros inferiores.",
      "Correlação entre exames de imagem e queixa funcional.",
      "Definição compartilhada da conduta.",
    ],
    faqs: [
      sharedFaq(
        "estenose-caminhar",
        "Por que a dor melhora quando sento?",
        "Ao sentar ou inclinar o tronco à frente, o canal vertebral ganha espaço e a compressão sobre as estruturas nervosas diminui. Esse padrão é característico da estenose.",
      ),
      sharedFaq(
        "estenose-cirurgia",
        "A cirurgia é sempre necessária?",
        "Não. O tratamento conservador é a primeira abordagem em boa parte dos casos. A cirurgia é considerada quando a limitação compromete a autonomia ou quando há déficit neurológico progressivo.",
      ),
    ],
    relatedTreatmentSlugs: ["cirurgia-coluna", "hernia-disco"],
    relatedPostSlugs: ["como-se-preparar-para-consulta-neurocirurgica"],
    keywords: ["estenose de canal", "canal estreito", "coluna lombar", "Campo Grande"],
    lastModified: "2026-09-06",
    order: 10,
  },
  {
    slug: "mielopatia-cervical",
    state: "published",
    indexable: false,
    group: "spine",
    kind: "condition",
    title: "Mielopatia cervical",
    shortDescription:
      "Compressão da medula no pescoço, com perda de destreza nas mãos e alteração do equilíbrio.",
    primaryIntent: "reconhecer os sinais da compressão medular cervical",
    metaTitle: "Mielopatia cervical em Campo Grande",
    metaDescription:
      "Entenda a mielopatia cervical, os sinais que indicam compressão da medula e por que a avaliação precoce é importante.",
    summary:
      "A mielopatia cervical é a compressão da medula espinhal na região do pescoço. Diferentemente da dor irradiada de uma raiz nervosa, ela costuma se manifestar por perda progressiva de destreza nas mãos e alteração do equilíbrio ao caminhar.",
    sections: [
      {
        id: "sinais",
        heading: "Sinais que merecem atenção",
        paragraphs: [
          "Dificuldade para abotoar uma camisa, escrever ou manipular objetos pequenos costuma ser percebida antes da dor.",
          "Alterações no equilíbrio e na forma de caminhar também são frequentes e podem ser atribuídas equivocadamente apenas à idade.",
        ],
      },
      {
        id: "investigacao",
        heading: "Por que a avaliação precoce importa",
        paragraphs: [
          "O exame neurológico busca sinais de comprometimento medular, que orientam tanto o diagnóstico quanto a urgência da conduta.",
          "Os exames de imagem da coluna cervical mostram o local e a extensão da compressão, interpretados junto aos achados clínicos.",
        ],
      },
      {
        id: "tratamento",
        heading: "Conduta",
        paragraphs: [
          "O objetivo principal do tratamento é interromper a progressão do comprometimento neurológico e preservar a função existente.",
          "A indicação cirúrgica, quando presente, é discutida considerando a evolução dos sinais, o impacto nas atividades diárias e o quadro clínico geral.",
        ],
      },
    ],
    indications: [
      "Perda de destreza para atividades finas com as mãos.",
      "Alteração do equilíbrio ou da forma de caminhar.",
      "Dormência ou perda de força nos braços e nas pernas.",
      "Piora progressiva desses sinais ao longo do tempo.",
    ],
    limitations: [
      "Os sinais podem ser sutis no início e confundidos com outras condições.",
      "O tratamento busca preservar a função existente; a recuperação do que já foi perdido é variável.",
      "A conduta é individual e discutida abertamente antes de qualquer decisão.",
    ],
    carePath: [
      "História da evolução dos sinais e do impacto nas atividades.",
      "Exame neurológico completo, incluindo marcha e coordenação.",
      "Leitura dos exames de imagem da coluna cervical.",
      "Definição compartilhada da conduta e do acompanhamento.",
    ],
    faqs: [
      sharedFaq(
        "mielopatia-diferenca",
        "Qual a diferença para uma hérnia de disco cervical?",
        "Na hérnia com compressão de raiz, o sintoma predominante costuma ser a dor irradiada para o braço. Na mielopatia, a medula é comprimida e os sinais aparecem como perda de destreza nas mãos e alteração do equilíbrio, muitas vezes sem dor importante.",
      ),
      sharedFaq(
        "mielopatia-urgencia",
        "É preciso procurar avaliação com urgência?",
        "Sinais progressivos de perda de destreza, força ou equilíbrio devem ser avaliados sem adiamento, já que a conduta busca interromper a progressão do comprometimento.",
      ),
    ],
    relatedTreatmentSlugs: ["cirurgia-coluna", "reabilitacao-neurocirurgica"],
    relatedPostSlugs: ["como-se-preparar-para-consulta-neurocirurgica"],
    keywords: ["mielopatia cervical", "compressão medular", "coluna cervical", "Campo Grande"],
    lastModified: "2026-09-06",
    order: 11,
  },
  {
    slug: "fraturas-coluna",
    state: "published",
    indexable: false,
    group: "spine",
    kind: "condition",
    title: "Fraturas da coluna",
    shortDescription:
      "Avaliação da estabilidade e do risco neurológico após fraturas vertebrais.",
    primaryIntent: "entender a conduta após uma fratura na coluna",
    metaTitle: "Fraturas da coluna em Campo Grande",
    metaDescription:
      "Entenda como as fraturas da coluna são avaliadas, o que define a estabilidade da lesão e quando a estabilização cirúrgica é indicada.",
    summary:
      "Fraturas vertebrais podem decorrer de traumas de alta energia ou, em ossos fragilizados, de quedas simples. A conduta depende da estabilidade da fratura e da presença ou do risco de comprometimento neurológico.",
    sections: [
      {
        id: "avaliacao",
        heading: "O que a avaliação define",
        paragraphs: [
          "A avaliação estabelece se a fratura é estável e se há comprometimento das estruturas nervosas, dois pontos que orientam toda a conduta seguinte.",
          "O mecanismo do trauma, a qualidade óssea e as condições clínicas do paciente também entram na decisão.",
        ],
      },
      {
        id: "condutas",
        heading: "Caminhos de tratamento",
        paragraphs: [
          "Fraturas estáveis e sem repercussão neurológica podem ser conduzidas de forma conservada, com controle da dor, orientação de atividades e acompanhamento por imagem.",
          "A estabilização cirúrgica é indicada quando há instabilidade, deformidade progressiva ou compressão de estruturas nervosas.",
        ],
      },
      {
        id: "acompanhamento",
        heading: "Acompanhamento e recuperação",
        paragraphs: [
          "O acompanhamento monitora a consolidação, o alinhamento da coluna e a evolução dos sintomas.",
          "A reabilitação orientada faz parte do processo e é ajustada à fase clínica e aos objetivos funcionais.",
        ],
      },
    ],
    indications: [
      "Fratura vertebral confirmada em exame de imagem.",
      "Dor intensa e persistente na coluna após trauma.",
      "Perda de força, dormência ou alteração de sensibilidade após o trauma.",
      "Necessidade de segunda opinião sobre a conduta indicada.",
    ],
    limitations: [
      "Nem toda fratura vertebral exige cirurgia; parte é conduzida de forma conservadora.",
      "A conduta depende da estabilidade da lesão, do risco neurológico e das condições clínicas individuais.",
      "O plano é definido caso a caso, sem promessa de resultado.",
    ],
    carePath: [
      "Revisão do mecanismo do trauma e do atendimento inicial.",
      "Exame neurológico direcionado ao nível acometido.",
      "Leitura dos exames de imagem para definir estabilidade.",
      "Definição da conduta e do plano de acompanhamento.",
      "Reabilitação orientada conforme a fase da recuperação.",
    ],
    faqs: [
      sharedFaq(
        "fratura-cirurgia",
        "Toda fratura da coluna precisa de cirurgia?",
        "Não. Fraturas estáveis e sem comprometimento neurológico podem ser conduzidas de forma conservadora, com acompanhamento clínico e por imagem.",
      ),
      sharedFaq(
        "fratura-segunda-opiniao",
        "Posso buscar uma segunda opinião sobre a conduta indicada?",
        "Sim. Leve os exames de imagem, os laudos e os relatórios do atendimento inicial para que a avaliação considere todo o histórico do caso.",
      ),
    ],
    relatedTreatmentSlugs: ["cirurgia-coluna", "reabilitacao-neurocirurgica"],
    relatedPostSlugs: ["como-se-preparar-para-consulta-neurocirurgica"],
    keywords: ["fratura da coluna", "trauma raquimedular", "estabilização", "Campo Grande"],
    lastModified: "2026-09-06",
    order: 12,
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
