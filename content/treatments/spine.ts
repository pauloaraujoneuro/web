import type { Treatment } from "@/content/types";
import { sharedFaq } from "@/content/treatments/shared";

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
];
