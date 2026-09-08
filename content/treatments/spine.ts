import type { Treatment } from "@/content/types";

/** Spine topics. */
export const SPINE_TREATMENTS: Treatment[] = [
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
      "A avaliação da coluna considera sintomas, exame neurológico, impacto funcional e exames de imagem para definir uma conduta proporcional ao caso. A maior parte das dores de coluna não tem indicação cirúrgica.",
    sections: [
      {
        id: "quadros-avaliados",
        heading: "Quadros avaliados",
        paragraphs: [
          "A cirurgia da coluna reúne procedimentos diferentes para problemas estruturais distintos das colunas cervical, torácica e lombar. Não é uma operação única.",
          "A avaliação inclui hérnia de disco com dor irradiada, estenose do canal, mielopatia cervical, fraturas e quadros de instabilidade.",
        ],
      },
      {
        id: "quando-avaliar",
        heading: "Quando a cirurgia entra na discussão",
        paragraphs: [
          "A cirurgia passa a ser considerada quando existe um diagnóstico anatômico definido para o qual o procedimento tem um alvo plausível — e não pela intensidade da dor isoladamente.",
        ],
        bullets: [
          "Déficit neurológico progressivo, como perda de força que aumenta.",
          "Compressão da medula cervical com sinais de mielopatia.",
          "Dor irradiada persistente, com perda funcional, que não melhorou com tratamento conservador adequado e cujo exame de imagem corresponde aos sintomas.",
          "Fraturas instáveis ou com repercussão neurológica.",
        ],
      },
      {
        id: "imagem-nao-e-diagnostico",
        heading: "O exame de imagem não decide sozinho",
        paragraphs: [
          "Alterações em ressonância são comuns e aparecem também em pessoas sem sintomas. O achado de imagem precisa corresponder à história clínica e ao exame neurológico.",
          "Por isso a investigação começa pela consulta. Diretrizes internacionais desaconselham imagem de rotina na dor lombar sem sinais de alerta, e o exame é pedido quando o resultado pode mudar a conduta.",
        ],
      },
      {
        id: "tipos-de-procedimento",
        heading: "O que a cirurgia pode envolver",
        paragraphs: [
          "Procedimentos diferentes resolvem problemas diferentes, e a escolha depende do diagnóstico, da anatomia e da estabilidade da coluna.",
        ],
        bullets: [
          "Descompressão: ampliar o espaço ao redor das estruturas nervosas.",
          "Discectomia: retirar o fragmento de disco que comprime a raiz nervosa.",
          "Artrodese: unir segmentos vertebrais quando há necessidade de estabilização.",
          "Instrumentação: parafusos, hastes ou espaçadores usados como apoio à estabilização, quando indicados.",
          "\"Minimamente invasivo\" descreve a via de acesso, não um procedimento único — e não significa, por si só, resultado melhor a longo prazo.",
        ],
      },
      {
        id: "decisao-por-diagnostico",
        heading: "A decisão muda conforme o diagnóstico",
        paragraphs: [
          "Não existe uma regra única para \"cirurgia de coluna\": cada condição tem evidência e momento próprios.",
        ],
        bullets: [
          "Hérnia de disco lombar: boa parte dos casos melhora sem cirurgia, e o material herniado com frequência é reabsorvido ao longo dos meses.",
          "Estenose de canal com sintomas toleráveis: acompanhar costuma ser razoável, e a piora progressiva não é a regra.",
          "Mielopatia cervical moderada ou grave: diretrizes internacionais recomendam tratamento cirúrgico.",
          "Fratura sem déficit neurológico: a evidência que compara cirurgia e tratamento conservador é conflitante, e a decisão é individual.",
        ],
      },
      {
        id: "sinais-de-alerta",
        heading: "Sinais que pedem avaliação urgente",
        paragraphs: [
          "Alguns sintomas mudam a urgência da avaliação e devem ser levados a um serviço de emergência, e não aguardar consulta eletiva.",
        ],
        bullets: [
          "Perda do controle da urina ou retenção urinária associada a sintomas neurológicos.",
          "Perda de sensibilidade na região genital ou perineal.",
          "Perda de força que progride rapidamente.",
          "Sintomas neurológicos graves nas duas pernas.",
          "Trauma recente da coluna com fraqueza ou dormência.",
        ],
      },
    ],
    indications: [
      "Sintomas neurológicos relacionados a condições compressivas da coluna.",
      "Dor irradiada persistente, com perda funcional, após tratamento conservador adequado.",
      "Sinais de mielopatia cervical.",
      "Fraturas que precisam de avaliação de estabilidade.",
    ],
    limitations: [
      "Muitos quadros podem ser acompanhados com medidas conservadoras.",
      "A presença de uma alteração no exame de imagem, isoladamente, não define a necessidade de cirurgia.",
      "A dor lombar inespecífica, sem diagnóstico anatômico correspondente, não costuma ter alvo cirúrgico.",
      "Cirurgia da coluna não é sinônimo de artrodese nem de colocação de parafusos.",
      "O tempo de recuperação varia conforme o procedimento e o diagnóstico.",
    ],
    carePath: [
      "Entendimento dos sintomas, do impacto funcional e dos tratamentos prévios.",
      "Exame neurológico e revisão das imagens disponíveis.",
      "Discussão das alternativas conservadoras, de reabilitação e cirúrgicas.",
      "Definição conjunta dos próximos passos e do acompanhamento.",
    ],
    faqs: [
      {
        id: "coluna-cirurgia",
        question: "Todo problema de coluna precisa de cirurgia?",
        answer:
          "Não. A conduta depende da avaliação clínica e do impacto funcional. Tratamento conservador e reabilitação podem ser indicados em muitos casos.",
      },
      {
        id: "coluna-ressonancia",
        question: "Uma ressonância alterada significa que preciso operar?",
        answer:
          "Não por si só. Alterações de disco e de canal aparecem também em pessoas sem sintomas. O achado precisa corresponder à história e ao exame neurológico para orientar a conduta.",
      },
      {
        id: "coluna-so-cirurgia",
        question: "O neurocirurgião só trata com cirurgia?",
        answer:
          "Não. Boa parte das consultas termina em conduta conservadora, reabilitação ou acompanhamento. A avaliação existe para definir se há um problema com alvo cirúrgico.",
      },
      {
        id: "coluna-descompressao-artrodese",
        question: "Qual a diferença entre descompressão e artrodese?",
        answer:
          "A descompressão amplia o espaço ao redor das estruturas nervosas. A artrodese une segmentos vertebrais quando existe necessidade de estabilização. São objetivos diferentes e nem sempre andam juntos.",
      },
      {
        id: "coluna-parafusos",
        question: "Toda cirurgia de coluna coloca parafusos?",
        answer:
          "Não. A instrumentação é usada quando o caso exige estabilização. Muitas descompressões e discectomias são feitas sem parafusos.",
      },
      {
        id: "coluna-minimamente-invasiva",
        question: "Cirurgia minimamente invasiva é sempre melhor?",
        answer:
          "O termo descreve a via de acesso, não um procedimento único. A escolha depende do diagnóstico e da anatomia, e a via de acesso isoladamente não determina o resultado a longo prazo.",
      },
      {
        id: "coluna-urgencia",
        question: "Quando a dor nas costas vira urgência?",
        answer:
          "Perda do controle da urina, dormência na região genital, perda de força que progride rapidamente ou sintomas neurológicos graves nas duas pernas exigem avaliação de emergência, sem aguardar consulta eletiva.",
      },
      {
        id: "coluna-dor-residual",
        question: "Posso continuar com dor depois da cirurgia?",
        answer:
          "Pode. Cada procedimento tem um alvo definido — por exemplo, aliviar a dor irradiada ou descomprimir a medula — e nem toda dor tem a mesma origem. Os objetivos e os limites esperados são discutidos antes da decisão.",
      },
    ],
    relatedTreatmentSlugs: [
      "hernia-disco",
      "estenose-canal-vertebral",
      "mielopatia-cervical",
      "fraturas-coluna",
      "reabilitacao-neurocirurgica",
    ],
    relatedPostSlugs: ["como-se-preparar-para-consulta-neurocirurgica"],
    keywords: [
      "cirurgia da coluna",
      "neurocirurgia",
      "hérnia de disco",
      "estenose de canal",
      "mielopatia cervical",
      "Campo Grande",
    ],
    lastModified: "2026-09-07",
    order: 2,
  },
  {
    slug: "hernia-disco",
    state: "published",
    indexable: true,
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
      {
        id: "hernia-cirurgia",
        question: "Toda hérnia de disco precisa de cirurgia?",
        answer:
          "Não. A maior parte dos casos melhora com tratamento conservador. A cirurgia é considerada diante de perda de força, dor incapacitante persistente ou sinais neurológicos de alerta.",
      },
      {
        id: "hernia-exame-imagem",
        question: "Minha ressonância mostra hérnia. Isso já define o tratamento?",
        answer:
          "Não. O exame precisa ser interpretado junto ao exame neurológico. Alterações de imagem sem sintomas correspondentes são comuns e não determinam sozinhas a conduta.",
      },
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
    indexable: true,
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
      {
        id: "estenose-caminhar",
        question: "Por que a dor melhora quando sento?",
        answer:
          "Ao sentar ou inclinar o tronco à frente, o canal vertebral ganha espaço e a compressão sobre as estruturas nervosas diminui. Esse padrão é característico da estenose.",
      },
      {
        id: "estenose-cirurgia",
        question: "A cirurgia é sempre necessária?",
        answer:
          "Não. O tratamento conservador é a primeira abordagem em boa parte dos casos. A cirurgia é considerada quando a limitação compromete a autonomia ou quando há déficit neurológico progressivo.",
      },
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
    indexable: true,
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
      {
        id: "mielopatia-diferenca",
        question: "Qual a diferença para uma hérnia de disco cervical?",
        answer:
          "Na hérnia com compressão de raiz, o sintoma predominante costuma ser a dor irradiada para o braço. Na mielopatia, a medula é comprimida e os sinais aparecem como perda de destreza nas mãos e alteração do equilíbrio, muitas vezes sem dor importante.",
      },
      {
        id: "mielopatia-urgencia",
        question: "É preciso procurar avaliação com urgência?",
        answer:
          "Sinais progressivos de perda de destreza, força ou equilíbrio devem ser avaliados sem adiamento, já que a conduta busca interromper a progressão do comprometimento.",
      },
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
    indexable: true,
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
      {
        id: "fratura-cirurgia",
        question: "Toda fratura da coluna precisa de cirurgia?",
        answer:
          "Não. Fraturas estáveis e sem comprometimento neurológico podem ser conduzidas de forma conservadora, com acompanhamento clínico e por imagem.",
      },
      {
        id: "fratura-segunda-opiniao",
        question: "Posso buscar uma segunda opinião sobre a conduta indicada?",
        answer:
          "Sim. Leve os exames de imagem, os laudos e os relatórios do atendimento inicial para que a avaliação considere todo o histórico do caso.",
      },
    ],
    relatedTreatmentSlugs: ["cirurgia-coluna", "reabilitacao-neurocirurgica"],
    relatedPostSlugs: ["como-se-preparar-para-consulta-neurocirurgica"],
    keywords: ["fratura da coluna", "trauma raquimedular", "estabilização", "Campo Grande"],
    lastModified: "2026-09-06",
    order: 12,
  },
];
