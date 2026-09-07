import type { Treatment } from "@/content/types";

/** Peripheral nerve and brachial plexus topics. */
export const PERIPHERAL_NERVE_TREATMENTS: Treatment[] = [
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
      {
        id: "nervo-exames",
        question: "Quais exames devo levar?",
        answer:
          "Leve todos os exames relacionados ao problema, inclusive os antigos. Na consulta, o médico avalia se há necessidade de investigação complementar.",
      },
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
    indexable: true,
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
      {
        id: "plexo-quando-procurar",
        question: "Quando devo procurar um especialista após o trauma?",
        answer:
          "Procure avaliação quando houver perda de força ou de sensibilidade que não melhora, dor intensa persistente ou dúvida sobre a evolução. O intervalo entre a lesão e a avaliação pode influenciar as condutas disponíveis, e esse prazo é discutido caso a caso.",
      },
      {
        id: "plexo-exames",
        question: "Quais exames devo levar na consulta?",
        answer:
          "Leve todos os exames e laudos relacionados ao trauma, incluindo imagens em mídia digital, relatórios de atendimento de urgência e estudos eletrofisiológicos, mesmo que antigos.",
      },
      {
        id: "plexo-cirurgia",
        question: "Toda lesão do plexo braquial precisa de cirurgia?",
        answer:
          "Não. Parte dos casos evolui com acompanhamento clínico e reabilitação. A indicação cirúrgica depende do tipo de lesão, da evolução e da avaliação presencial.",
      },
    ],
    relatedTreatmentSlugs: ["cirurgia-nervos-perifericos", "reabilitacao-neurocirurgica"],
    relatedPostSlugs: ["como-se-preparar-para-consulta-neurocirurgica"],
    keywords: ["lesão do plexo braquial", "plexo braquial", "nervo periférico", "Campo Grande"],
    lastModified: "2026-09-06",
    order: 4,
  },
  {
    slug: "transferencia-nervosa-tetraplegia",
    state: "published",
    indexable: true,
    group: "peripheral-nerve",
    kind: "procedure",
    title: "Transferência nervosa em tetraplegia",
    shortDescription:
      "Cirurgia que redireciona nervos preservados para buscar ganhos em movimentos do membro superior.",
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
          "Um nervo com função preservada e considerado dispensável é conectado ao nervo do músculo que se pretende reinervar. O objetivo é buscar ganhos em movimentos específicos, escolhidos junto com o paciente.",
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
      {
        id: "tetraplegia-quem-avalia",
        question: "Quem pode ser avaliado para a cirurgia?",
        answer:
          "Pessoas com tetraplegia ou tetraparesia por lesão medular cervical que mantenham grupos musculares funcionais acima do nível da lesão. A elegibilidade é definida no exame presencial.",
      },
      {
        id: "tetraplegia-resultado",
        question: "A cirurgia devolve todos os movimentos?",
        answer:
          "Não. O objetivo é trabalhar movimentos específicos, definidos antes da cirurgia, que possam ampliar a autonomia nas atividades diárias. Os resultados variam conforme o caso e são discutidos individualmente.",
      },
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
    indexable: true,
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
      {
        id: "carpo-cirurgia-necessaria",
        question: "Todo caso precisa de cirurgia?",
        answer:
          "Não. Quadros iniciais frequentemente melhoram com medidas conservadoras. A cirurgia é considerada quando os sintomas persistem ou quando há sinais de comprometimento mais avançado do nervo.",
      },
      {
        id: "carpo-exames",
        question: "Preciso fazer eletroneuromiografia antes da consulta?",
        answer:
          "Não é necessário fazer exames por conta própria. Leve os que já possui; na consulta é avaliada a necessidade de investigação complementar.",
      },
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
    indexable: true,
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
      {
        id: "cubital-diferenca-carpo",
        question: "Qual a diferença para a síndrome do túnel do carpo?",
        answer:
          "São nervos e locais diferentes. No túnel do carpo o nervo mediano é comprimido no punho e os sintomas atingem principalmente o polegar, o indicador e o médio. Na síndrome cubital, o nervo ulnar é comprimido no cotovelo e os sintomas atingem o dedo mínimo e o anelar.",
      },
      {
        id: "cubital-quando-operar",
        question: "Quando a cirurgia é considerada?",
        answer:
          "Principalmente diante de perda de força, atrofia muscular ou sintomas que persistem apesar das medidas conservadoras. A decisão é individual e discutida em consulta.",
      },
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
    indexable: true,
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
      {
        id: "tarso-confusao",
        question: "É comum confundir com outras causas de dor no pé?",
        answer:
          "Sim. Muitos pacientes chegam após longos tratamentos para outras causas de dor plantar. O exame direcionado ao trajeto do nervo ajuda a diferenciar os quadros.",
      },
      {
        id: "tarso-tratamento",
        question: "O tratamento é sempre cirúrgico?",
        answer:
          "Não. Medidas conservadoras são a primeira abordagem em boa parte dos casos. A cirurgia é considerada quando a compressão é confirmada e os sintomas persistem.",
      },
    ],
    relatedTreatmentSlugs: ["cirurgia-nervos-perifericos", "reabilitacao-neurocirurgica"],
    relatedPostSlugs: ["como-se-preparar-para-consulta-neurocirurgica"],
    keywords: ["túnel do tarso", "nervo tibial", "dor no pé", "Campo Grande"],
    lastModified: "2026-09-06",
    order: 8,
  },
];
