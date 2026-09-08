import type { Treatment } from "@/content/types";

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
      "A reabilitação depois de uma doença ou cirurgia neurológica trabalha o que a pessoa consegue fazer no dia a dia, e não apenas a força de um músculo ou o resultado de um exame. O programa é montado a partir dos objetivos funcionais de cada caso.",
    sections: [
      {
        id: "o-que-e",
        heading: "O que a reabilitação neurocirúrgica reúne",
        paragraphs: [
          "A reabilitação neurológica é um conjunto multiprofissional de intervenções organizado em torno de objetivos funcionais, e não um único tratamento.",
          "Conforme o caso, pode incluir fisioterapia, terapia ocupacional, manejo da dor e da espasticidade, tecnologia assistiva, órteses, treino de marcha e do membro superior, reabilitação sensitiva e apoio psicossocial e de retorno ao trabalho.",
        ],
      },
      {
        id: "principios",
        heading: "Princípios que orientam o programa",
        paragraphs: [
          "O ponto de partida é o que a pessoa precisa voltar a fazer, e não uma sequência de exercícios padronizada.",
        ],
        bullets: [
          "Partir dos déficits reais e dos objetivos definidos com a pessoa.",
          "Prevenir complicações secundárias: rigidez, contratura, perda de força, lesões por pressão, quedas e dor.",
          "Treinar tarefas específicas, mais úteis do que medir isoladamente a força de um músculo.",
          "Ajustar o programa à fase biológica da recuperação, sobretudo depois de cirurgia de nervo.",
        ],
      },
      {
        id: "nervo",
        heading: "Depois de uma cirurgia de nervo",
        paragraphs: [
          "Enquanto o músculo ainda não foi reinervado, o trabalho é de preservação: manter a mobilidade passiva das articulações e proteger regiões fracas ou sem sensibilidade, que se machucam sem que a pessoa perceba.",
          "Detectar o início da reinervação é uma etapa própria do acompanhamento. Depois de uma transferência nervosa, o treino evolui do uso do comando do músculo doador até a separação dos movimentos, e o trabalho de sensibilidade pode ser incorporado quando indicado.",
        ],
      },
      {
        id: "medular",
        heading: "Depois de uma lesão medular",
        paragraphs: [
          "A reabilitação abrange independência nas atividades diárias, transferências, uso da cadeira de rodas, função do membro superior, manejo intestinal e urinário e participação na vida em comunidade.",
          "Quando há reconstrução cirúrgica do membro superior, o programa é planejado junto à cirurgia, antes e depois dela.",
        ],
      },
      {
        id: "limites",
        heading: "O que não dá para prometer",
        paragraphs: [
          "Reabilitação neurológica é um termo amplo demais para ter uma taxa única de sucesso. O protocolo e a intensidade precisam corresponder ao diagnóstico e ao procedimento realizado.",
          "Fazer mais exercício não é automaticamente melhor, e nenhum programa garante recuperação. O que se pode organizar é um plano coerente com o estágio da recuperação, revisto ao longo do acompanhamento.",
        ],
      },
    ],
    indications: [
      "Pós-operatório de cirurgia de nervo periférico, coluna ou reconstrução funcional.",
      "Sequelas neurológicas com perda de movimento ou de função.",
      "Necessidade de prevenir contraturas e complicações durante a espera pela reinervação.",
      "Objetivos funcionais definidos, como retomar tarefas do dia a dia ou o trabalho.",
    ],
    limitations: [
      "Não existe um protocolo único que sirva a todos os diagnósticos.",
      "A reabilitação não garante recuperação.",
      "Mais exercício não é sempre melhor.",
      "A duração depende do diagnóstico, do procedimento e dos objetivos, e é revista ao longo do acompanhamento.",
    ],
    carePath: [
      "Definição dos objetivos funcionais junto à pessoa e à família.",
      "Avaliação dos déficits, das articulações e dos riscos de complicação.",
      "Programa ajustado à fase da recuperação, com orientação para casa.",
      "Reavaliações para acompanhar ganhos e redefinir metas.",
    ],
    faqs: [
      {
        id: "reabilitacao-quando-comeca",
        question: "Quando a reabilitação começa?",
        answer:
          "Em geral cedo, e com objetivos que mudam conforme a fase. Antes de a força voltar, o trabalho é de preservação da mobilidade e proteção das áreas fracas ou sem sensibilidade.",
      },
      {
        id: "reabilitacao-antes-cirurgia",
        question: "A reabilitação pode começar antes da cirurgia?",
        answer:
          "Pode, e em várias situações isso é importante. Manter a amplitude das articulações e evitar contraturas ajuda a preservar as opções de reconstrução e a qualidade do resultado depois.",
      },
      {
        id: "reabilitacao-tempo",
        question: "Quanto tempo dura a reabilitação?",
        answer:
          "A duração varia conforme o diagnóstico, o procedimento e os objetivos funcionais. O cronograma é ajustado durante o acompanhamento.",
      },
      {
        id: "reabilitacao-nervo-mais-rapido",
        question: "A fisioterapia faz o nervo crescer mais rápido?",
        answer:
          "Não é isso que a reabilitação faz. Ela preserva articulações e músculos, protege áreas sem sensibilidade e treina o uso do movimento quando ele aparece. O ritmo biológico da regeneração é outro.",
      },
      {
        id: "reabilitacao-fisio-vs-to",
        question: "Qual a diferença entre fisioterapia e terapia ocupacional?",
        answer:
          "As duas se complementam. De forma geral, a fisioterapia trabalha mais movimento, força e marcha, e a terapia ocupacional foca as atividades do dia a dia e o uso funcional das mãos. Muitos programas usam as duas.",
      },
      {
        id: "reabilitacao-casa",
        question: "Vou precisar fazer exercícios em casa?",
        answer:
          "Na maior parte dos casos, sim. A prática entre as sessões é parte do programa, com orientação específica sobre o que fazer e o que evitar em cada fase.",
      },
      {
        id: "reabilitacao-dor",
        question: "Sentir dor significa que devo parar?",
        answer:
          "Nem sempre, mas dor nova, intensa ou acompanhada de perda de um movimento já conquistado deve ser comunicada à equipe antes de continuar. O programa é ajustado, não simplesmente interrompido.",
      },
      {
        id: "reabilitacao-como-saber",
        question: "Como sabemos que o nervo começou a funcionar?",
        answer:
          "Pelo reaparecimento de atividade muscular no exame, às vezes com apoio de recursos que ajudam a captar contrações ainda muito fracas. Esse é um marco que muda a etapa do treino.",
      },
    ],
    relatedTreatmentSlugs: ["cirurgia-nervos-perifericos", "cirurgia-coluna"],
    relatedPostSlugs: ["como-se-preparar-para-consulta-neurocirurgica"],
    keywords: ["reabilitação neurocirúrgica", "recuperação funcional"],
    lastModified: "2026-09-07",
    order: 3,
  },
  {
    slug: "reeducacao-cortical-biofeedback",
    state: "published",
    indexable: true,
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
      "Depois de uma lesão ou reconstrução de nervo, o cérebro precisa reaprender a comandar o movimento. A reeducação motora e sensitiva trabalha esse reaprendizado, com objetivos honestos sobre o que a evidência sustenta.",
    sections: [
      {
        id: "o-que-e",
        heading: "Por que o cérebro entra no tratamento",
        paragraphs: [
          "Uma lesão de nervo muda os sinais motores e sensitivos que chegam ao cérebro. A recuperação, por isso, não é só do tecido periférico: envolve reaprendizado e reorganização do comando.",
          "Depois de uma transferência nervosa isso fica evidente. No começo, o comando cerebral original do músculo doador é o que ativa o novo alvo — e o objetivo do treino é construir o controle separado dos dois movimentos.",
        ],
      },
      {
        id: "etapas",
        heading: "Como o treino costuma ser organizado",
        paragraphs: [
          "A reabilitação estruturada depois de transferências nervosas costuma progredir por etapas, cada uma com um objetivo diferente.",
        ],
        bullets: [
          "Manter a representação do movimento antes de a reinervação aparecer, com visualização e treino mental.",
          "Identificar a primeira atividade muscular, às vezes com apoio de captação de sinal do músculo.",
          "Ativar o novo alvo usando o movimento do doador.",
          "Usar diferentes formas de retorno de informação durante o treino.",
          "Separar o movimento do doador do movimento reconstruído.",
          "Ganhar força e levar o movimento para tarefas reais do dia a dia.",
        ],
      },
      {
        id: "sensibilidade",
        heading: "Reeducação sensitiva",
        paragraphs: [
          "O trabalho de sensibilidade após reparo de nervo é praticado há muito tempo, mas a evidência que o sustenta é mais fraca do que se costuma sugerir.",
          "Uma revisão sistemática de estudos controlados encontrou poucos trabalhos de boa qualidade e concluiu que a evidência para a reeducação sensitiva convencional não é forte. Abordagens com retorno visual em espelho iniciadas cedo e algumas estratégias combinadas apareceram como promissoras, ainda com amostras pequenas.",
        ],
      },
      {
        id: "biofeedback",
        heading: "Biofeedback por eletromiografia",
        paragraphs: [
          "O biofeedback capta a atividade elétrica do músculo e a mostra à pessoa, o que ajuda a perceber contrações fracas demais para serem sentidas. Na prática, é um recurso de aprendizado motor.",
          "A evidência específica é limitada: uma revisão sobre lesões de nervo periférico encontrou poucos estudos elegíveis, com populações heterogêneas e qualidade metodológica em geral baixa. Usar o recurso como apoio ao treino é diferente de afirmar que ele acelera a regeneração do nervo — o que a evidência não estabelece.",
        ],
      },
    ],
    indications: [
      "Pós-operatório de transferência nervosa, com necessidade de separar o comando do doador.",
      "Reinervação em curso, com contrações ainda muito fracas.",
      "Alteração de sensibilidade após reparo de nervo.",
      "Necessidade de levar um movimento recuperado para tarefas do dia a dia.",
    ],
    limitations: [
      "O treino cortical não faz o nervo regenerar mais rápido.",
      "A evidência sobre reeducação sensitiva convencional não é forte.",
      "A evidência sobre biofeedback em lesões de nervo periférico é limitada e de baixa qualidade metodológica.",
      "A neuroplasticidade não remove os limites biológicos da lesão periférica.",
    ],
    carePath: [
      "Definição do movimento-alvo e da etapa atual da recuperação.",
      "Identificação da primeira atividade muscular no acompanhamento.",
      "Treino progressivo, do comando do doador até o movimento separado.",
      "Transferência do movimento para tarefas reais, com prática orientada em casa.",
    ],
    faqs: [
      {
        id: "reeducacao-necessidade",
        question: "Por que preciso treinar se a cirurgia já foi feita?",
        answer:
          "A cirurgia restabelece o caminho do nervo, mas o comando do movimento continua sendo cerebral. O treinamento dirigido é o que transforma a conexão recuperada em movimento útil no dia a dia.",
      },
      {
        id: "reeducacao-comando-doador",
        question: "Por que o movimento novo depende de outro movimento no começo?",
        answer:
          "Porque o comando que chega ao músculo reconstruído é, no início, o mesmo do músculo doador. Usar esse comando é justamente o caminho para ativar o novo movimento, e a separação vem com o treino.",
      },
      {
        id: "reeducacao-biofeedback-o-que-e",
        question: "O que é o biofeedback por eletromiografia?",
        answer:
          "É um recurso que capta a atividade elétrica do músculo e a mostra à pessoa em tempo real, permitindo perceber contrações fracas demais para serem sentidas. Serve ao aprendizado do movimento.",
      },
      {
        id: "reeducacao-biofeedback-nervo",
        question: "O biofeedback faz o nervo crescer?",
        answer:
          "Não é isso que a evidência mostra. Ele pode apoiar o reaprendizado motor, mas não há dados que estabeleçam que acelere a regeneração do nervo.",
      },
      {
        id: "reeducacao-espelho",
        question: "A terapia do espelho funciona?",
        answer:
          "É uma das abordagens que aparecem como promissoras quando iniciadas cedo, mas os estudos disponíveis são pequenos. Pode ser usada como parte do programa, sem prometer um resultado específico.",
      },
      {
        id: "reeducacao-tempo-separar",
        question: "Quanto tempo leva para separar os movimentos?",
        answer:
          "Varia conforme a reconstrução, o músculo envolvido e a dedicação ao treino. É um processo de meses, acompanhado nas reavaliações.",
      },
      {
        id: "reeducacao-casa",
        question: "Posso treinar em casa?",
        answer:
          "A prática em casa costuma ser parte do programa, com orientação específica sobre quais movimentos treinar em cada etapa e por quanto tempo.",
      },
      {
        id: "reeducacao-plasticidade",
        question: "Plasticidade cerebral significa que qualquer função pode voltar?",
        answer:
          "Não. A capacidade de reorganização do cérebro é real e importante, mas não supera os limites biológicos da lesão do nervo e do músculo. Os objetivos possíveis são definidos caso a caso.",
      },
    ],
    relatedTreatmentSlugs: ["reabilitacao-neurocirurgica", "transferencia-nervosa-tetraplegia"],
    relatedPostSlugs: ["como-se-preparar-para-consulta-neurocirurgica"],
    keywords: ["reeducação cortical", "biofeedback", "reabilitação neurológica", "Campo Grande"],
    lastModified: "2026-09-07",
    order: 13,
  },
  {
    slug: "orteses-dinamicas",
    state: "published",
    indexable: true,
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
      "As órteses dinâmicas usam forças controladas, por elástico ou mola, para assistir ou resistir ao movimento enquanto protegem os tecidos em recuperação. Não são um dispositivo único: cada reconstrução exige um desenho e um protocolo próprios.",
    sections: [
      {
        id: "o-que-e",
        heading: "O que diferencia uma órtese dinâmica",
        paragraphs: [
          "Ao contrário de uma tala estática, que imobiliza, a órtese dinâmica aplica uma força controlada que permite ou auxilia determinado movimento enquanto limita outros.",
          "Modelos estáticos, dinâmicos e de movimento relativo têm finalidades diferentes. Falar em órtese dinâmica descreve um princípio, não um dispositivo padronizado.",
        ],
      },
      {
        id: "objetivos",
        heading: "Para que ela é usada",
        paragraphs: [
          "A indicação depende do procedimento realizado e da fase da recuperação.",
        ],
        bullets: [
          "Proteger uma reconstrução recente.",
          "Manter o alinhamento desejado da articulação.",
          "Prevenir contraturas.",
          "Assistir o movimento enquanto a força muscular ainda é insuficiente.",
          "Permitir o deslizamento controlado dos tendões.",
          "Equilibrar proteção e mobilidade, evitando aderências e rigidez.",
        ],
      },
      {
        id: "evidencia",
        heading: "O que a evidência mostra e o que ela não mostra",
        paragraphs: [
          "Revisões sistemáticas sobre reparo de tendões extensores da mão indicam que protocolos com mobilização precoce oferecem recuperação de movimento mais rápida nas primeiras semanas do que a imobilização estática, com as diferenças diminuindo ao longo do tempo. A heterogeneidade dos estudos impede eleger um protocolo único como o melhor.",
          "Esses dados vêm de reparo de tendão e não podem ser transportados automaticamente para toda transferência nervosa ou de tendão. Ganhar amplitude mais cedo também não significa, por si só, um resultado funcional melhor no fim.",
          "Na prática, a escolha da órtese e o protocolo de uso são específicos do procedimento e seguem a orientação da equipe cirúrgica e de terapia da mão.",
        ],
      },
      {
        id: "sinais-de-alerta",
        heading: "Quando comunicar a equipe",
        paragraphs: [
          "Alguns sinais devem interromper o uso e motivar contato com a equipe antes da próxima consulta marcada.",
        ],
        bullets: [
          "Perda de um movimento que já havia sido recuperado, ou deformidade nova.",
          "Dor súbita ou sensação de estalo após reconstrução de tendão.",
          "Ferida ou marca de pressão na pele.",
          "Inchaço importante.",
          "Dormência ou mudança de cor dos dedos.",
          "Aumento progressivo de sintomas neurológicos com o uso.",
        ],
      },
    ],
    indications: [
      "Proteção de uma reconstrução recente de tendão ou nervo.",
      "Prevenção de contratura enquanto a musculatura não responde.",
      "Assistência ao movimento em paralisias com força insuficiente.",
      "Necessidade de deslizamento controlado dos tendões em fase definida da recuperação.",
    ],
    limitations: [
      "Órteses dinâmicas não são superiores em toda reabilitação da mão.",
      "Elas não aceleram a regeneração biológica do nervo.",
      "Não existe um único esquema de uso que sirva a todas as reconstruções.",
      "Mais tensão não significa melhor reabilitação.",
    ],
    carePath: [
      "Definição do objetivo da órtese conforme o procedimento e a fase.",
      "Confecção ou ajuste com a equipe de terapia da mão.",
      "Orientação sobre horários de uso, higiene e sinais de alerta.",
      "Reavaliações para ajustar a tensão e retirar o dispositivo quando indicado.",
    ],
    faqs: [
      {
        id: "orteses-diferenca-tala",
        question: "Qual a diferença entre órtese dinâmica e tala comum?",
        answer:
          "A tala estática imobiliza. A órtese dinâmica aplica uma força controlada que permite ou auxilia um movimento específico, enquanto continua protegendo a reconstrução.",
      },
      {
        id: "orteses-dia-inteiro",
        question: "Preciso usar o dia inteiro?",
        answer:
          "Depende do procedimento e da fase. O esquema de uso é definido pela equipe e revisto nas reavaliações; não existe um horário padrão que sirva a todos os casos.",
      },
      {
        id: "orteses-banho",
        question: "Posso tirar para tomar banho?",
        answer:
          "Isso faz parte da orientação individual. Em algumas fases a retirada é permitida com cuidados específicos, em outras não. Pergunte à equipe antes de mudar a rotina por conta própria.",
      },
      {
        id: "orteses-musculo",
        question: "A órtese faz o músculo voltar a funcionar?",
        answer:
          "Não. Ela protege, posiciona e pode assistir o movimento enquanto a força é insuficiente. Quem devolve a função é a recuperação do nervo e do músculo, com o treino correspondente.",
      },
      {
        id: "orteses-elasticos",
        question: "Por que ela usa elásticos?",
        answer:
          "Os elásticos aplicam uma força suave e contínua na direção desejada, permitindo movimento controlado sem exigir força do músculo em recuperação.",
      },
      {
        id: "orteses-aperta",
        question: "Se apertar ou formigar é normal?",
        answer:
          "Não. Marca de pressão na pele, dormência, mudança de cor dos dedos ou inchaço importante devem ser comunicados à equipe, porque costumam indicar necessidade de ajuste.",
      },
      {
        id: "orteses-tempo",
        question: "Por quanto tempo vou precisar usar?",
        answer:
          "O tempo de uso depende do quadro e da fase da recuperação. A indicação é revista nas reavaliações e ajustada conforme a função retorna.",
      },
      {
        id: "orteses-cada-cirurgia",
        question: "Cada cirurgia usa a mesma órtese?",
        answer:
          "Não. O desenho e o protocolo mudam conforme o procedimento realizado e o objetivo daquela fase, e seguem a orientação da equipe cirúrgica e de terapia da mão.",
      },
    ],
    relatedTreatmentSlugs: ["reabilitacao-neurocirurgica", "cirurgia-nervos-perifericos"],
    relatedPostSlugs: ["como-se-preparar-para-consulta-neurocirurgica"],
    keywords: ["órteses", "adaptações funcionais", "reabilitação", "Campo Grande"],
    lastModified: "2026-09-07",
    order: 14,
  },
];
