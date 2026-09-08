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
      "Na hérnia de disco lombar, parte do disco ultrapassa seus limites e pode irritar ou comprimir uma raiz nervosa, causando dor irradiada pela perna. A maior parte dos casos melhora sem cirurgia.",
    sections: [
      {
        id: "o-que-e",
        heading: "O que acontece na hérnia de disco",
        paragraphs: [
          "O disco funciona como um amortecedor entre as vértebras. Quando parte do seu conteúdo se desloca para fora, pode entrar em contato com uma raiz nervosa.",
          "O que importa clinicamente é a síndrome resultante: dor irradiada, formigamento ou perda de força seguindo o trajeto da raiz afetada — e não apenas a imagem do disco.",
        ],
      },
      {
        id: "evolucao",
        heading: "A evolução natural costuma ser favorável",
        paragraphs: [
          "O material herniado é reabsorvido pelo organismo com frequência ao longo do tratamento conservador. Uma metanálise recente, reunindo mais de dois mil pacientes, encontrou reabsorção radiológica em cerca de 70% dos casos no conjunto, com as hérnias maiores e extrusas mostrando as maiores taxas e a maior parte da reabsorção ocorrendo nos primeiros seis meses.",
          "Esse dado ajuda a explicar por que esperar costuma ser razoável. Ele também tem um limite importante: a reabsorção vista na imagem não é o mesmo que resolução garantida dos sintomas, e o acompanhamento é clínico.",
        ],
      },
      {
        id: "avaliacao",
        heading: "Como a avaliação é conduzida",
        paragraphs: [
          "O diagnóstico parte do padrão da dor e do exame neurológico, que identifica qual raiz está envolvida.",
          "A ressonância é indicada quando o resultado pode mudar a conduta especializada ou quando a cirurgia está sendo considerada. Alterações de disco aparecem em exames de pessoas sem sintoma nenhum, e por isso um achado isolado não é tratado como diagnóstico.",
        ],
      },
      {
        id: "tratamento",
        heading: "Tratamento conservador e cirúrgico",
        paragraphs: [
          "A maior parte dos casos começa sem cirurgia, mantendo atividade adequada em vez de repouso prolongado, com estratégia de analgesia e reabilitação definida individualmente.",
          "Diretrizes internacionais orientam considerar a descompressão quando o tratamento não cirúrgico não melhorou a dor e a função e quando os achados de imagem correspondem aos sintomas. A infiltração epidural com anestésico e corticoide pode ser considerada em quadros agudos e intensos.",
          "O procedimento mais comum é a discectomia ou microdiscectomia, que retira o fragmento que comprime a raiz preservando as estruturas nervosas. Artrodese não é sinônimo de cirurgia de hérnia e não faz parte da maioria das primeiras cirurgias.",
        ],
      },
      {
        id: "sinais-de-alerta",
        heading: "Sinais que pedem avaliação urgente",
        paragraphs: [
          "Alguns sintomas devem ser levados a um serviço de emergência, sem aguardar consulta eletiva.",
        ],
        bullets: [
          "Retenção urinária ou perda do controle da urina.",
          "Dormência na região genital ou perineal.",
          "Alteração nova do funcionamento intestinal associada a sintomas neurológicos.",
          "Perda de força importante ou que progride rapidamente.",
          "Sintomas neurológicos graves nas duas pernas.",
        ],
      },
    ],
    indications: [
      "Dor irradiada persistente, com perda funcional, que não melhorou com tratamento conservador adequado.",
      "Perda de força relacionada à raiz comprimida.",
      "Achados de imagem que correspondem ao quadro clínico.",
      "Sinais neurológicos de alerta, que mudam a urgência da avaliação.",
    ],
    limitations: [
      "A maior parte das hérnias melhora sem cirurgia.",
      "A reabsorção vista na ressonância não garante, por si só, o desaparecimento dos sintomas.",
      "O tamanho da hérnia na imagem não determina sozinho a indicação.",
      "A hérnia pode voltar depois da cirurgia.",
    ],
    carePath: [
      "História da dor, do trajeto irradiado e dos tratamentos já realizados.",
      "Exame neurológico para identificar a raiz envolvida.",
      "Revisão das imagens à luz dos achados clínicos.",
      "Definição conjunta entre manter o tratamento conservador e considerar a cirurgia.",
    ],
    faqs: [
      {
        id: "hernia-cirurgia",
        question: "Toda hérnia de disco precisa de cirurgia?",
        answer:
          "Não. A maior parte dos casos melhora com tratamento conservador. A cirurgia é considerada diante de perda de força, dor incapacitante persistente ou sinais neurológicos de alerta.",
      },
      {
        id: "hernia-desaparece",
        question: "A hérnia pode desaparecer sozinha?",
        answer:
          "Com frequência o material herniado é reabsorvido ao longo dos meses, sobretudo nas hérnias maiores e extrusas, e a maior parte disso acontece nos primeiros seis meses. Isso não significa que os sintomas desaparecem no mesmo ritmo.",
      },
      {
        id: "hernia-exame-imagem",
        question: "Minha ressonância mostra hérnia. Isso já define o tratamento?",
        answer:
          "Não. O exame precisa ser interpretado junto ao exame neurológico. Alterações de imagem sem sintomas correspondentes são comuns e não determinam sozinhas a conduta.",
      },
      {
        id: "hernia-grande",
        question: "Hérnia grande sempre precisa operar?",
        answer:
          "Não. O tamanho isolado não define a conduta — inclusive porque hérnias maiores estão entre as que mais frequentemente reabsorvem. O que pesa é o quadro clínico e a evolução.",
      },
      {
        id: "hernia-esperar",
        question: "Quanto tempo devo esperar antes de pensar em cirurgia?",
        answer:
          "Não existe um prazo único. A decisão considera a resposta ao tratamento conservador, o impacto na função e a presença de déficit neurológico. Sinais de alerta mudam a urgência imediatamente.",
      },
      {
        id: "hernia-forca",
        question: "Perder força muda a urgência?",
        answer:
          "Sim. Perda de força, sobretudo quando progride, muda a prioridade da avaliação e pode antecipar a discussão sobre cirurgia.",
      },
      {
        id: "hernia-microdiscectomia",
        question: "A microdiscectomia retira o disco inteiro?",
        answer:
          "Não. O objetivo é retirar o fragmento que está comprimindo a raiz nervosa, preservando o restante do disco e as estruturas ao redor.",
      },
      {
        id: "hernia-volta",
        question: "A hérnia pode voltar depois da cirurgia?",
        answer:
          "Pode. A recidiva é uma possibilidade conhecida do procedimento e faz parte da conversa antes da decisão, junto aos objetivos esperados.",
      },
    ],
    relatedTreatmentSlugs: ["cirurgia-coluna", "estenose-canal-vertebral"],
    relatedPostSlugs: ["como-se-preparar-para-consulta-neurocirurgica"],
    keywords: ["hérnia de disco", "dor ciática", "coluna", "Campo Grande"],
    lastModified: "2026-09-07",
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
      "A estenose do canal vertebral é o estreitamento do espaço disponível para as estruturas nervosas na coluna lombar. O sintoma característico é a dor ou o peso nas pernas ao caminhar, que melhora ao sentar ou inclinar o tronco.",
    sections: [
      {
        id: "o-que-e",
        heading: "O que é a estenose e como ela se manifesta",
        paragraphs: [
          "Com o passar dos anos, alterações degenerativas podem reduzir o espaço do canal vertebral e das saídas das raízes nervosas.",
          "A manifestação típica é a claudicação neurogênica: dor, peso, dormência ou fraqueza nas pernas ao ficar em pé ou caminhar, com alívio ao sentar ou flexionar o tronco à frente. Nem toda estenose vista na imagem produz sintomas: o estreitamento também aparece em exames de pessoas assintomáticas.",
        ],
      },
      {
        id: "evolucao",
        heading: "A evolução nem sempre é de piora",
        paragraphs: [
          "A ideia de que a estenose fecha progressivamente até a paralisia não se sustenta na evidência disponível.",
          "Em uma coorte de pacientes com sintomas moderados acompanhados sem cirurgia por cerca de três anos, a dor na perna melhorou em cerca de um terço, permaneceu estável na maioria e piorou em uma minoria — e apenas uma pequena parcela teve a decisão inicial de não operar revista. Isso não vale como previsão individual, mas mostra que acompanhar é uma conduta legítima quando os sintomas são toleráveis.",
        ],
      },
      {
        id: "avaliacao",
        heading: "Como a avaliação é conduzida",
        paragraphs: [
          "A consulta caracteriza a distância que a pessoa consegue caminhar, o padrão de alívio ao sentar e os sintomas neurológicos associados.",
          "O exame inclui a avaliação vascular, porque a claudicação de origem circulatória entra no diagnóstico diferencial, assim como problemas do quadril e neuropatias periféricas. A ressonância confirma a anatomia depois da suspeita clínica, e não antes dela.",
        ],
      },
      {
        id: "tratamento",
        heading: "Tratamento conservador e cirúrgico",
        paragraphs: [
          "Quando os sintomas são toleráveis e não há indicação neurológica urgente, o tratamento conservador é razoável, com exercício, reabilitação e manejo dos sintomas.",
          "Diretrizes internacionais recomendam não usar infiltração epidural para a claudicação neurogênica por estenose do canal central.",
          "Sobre a comparação entre operar e não operar, a evidência é genuinamente conflitante: uma revisão Cochrane concluiu que os dados eram insuficientes para estabelecer superioridade, enquanto estudos individuais e análises posteriores encontraram maior melhora após descompressão em pacientes selecionados. Essa divergência é parte da conversa, e não algo a esconder.",
          "O objetivo da cirurgia é descomprimir as estruturas nervosas. A artrodese é acrescentada apenas quando existe instabilidade ou deformidade envolvida, e não faz parte de toda descompressão.",
        ],
      },
    ],
    indications: [
      "Limitação da caminhada que compromete a autonomia, apesar do tratamento conservador.",
      "Déficit neurológico progressivo.",
      "Quadro clínico de claudicação neurogênica com imagem correspondente.",
    ],
    limitations: [
      "A estenose não evolui necessariamente para piora progressiva.",
      "Estenose importante na ressonância, isoladamente, não indica cirurgia.",
      "Nem toda descompressão exige artrodese.",
      "A infiltração epidural não é recomendada para a claudicação por estenose do canal central.",
    ],
    carePath: [
      "História da distância caminhada, do padrão de alívio e do impacto no dia a dia.",
      "Exame neurológico e avaliação dos diagnósticos diferenciais, inclusive vasculares.",
      "Revisão das imagens à luz do quadro clínico.",
      "Escolha conjunta entre acompanhamento, reabilitação e descompressão.",
    ],
    faqs: [
      {
        id: "estenose-caminhar",
        question: "Por que a dor melhora quando sento?",
        answer:
          "Ao sentar ou inclinar o tronco à frente, o canal vertebral ganha espaço e a compressão sobre as estruturas nervosas diminui. Esse padrão é característico da estenose.",
      },
      {
        id: "estenose-piora",
        question: "A estenose sempre piora com o tempo?",
        answer:
          "Não. Em pacientes com sintomas moderados acompanhados sem cirurgia, a maior parte permaneceu estável ou melhorou ao longo de alguns anos. A piora progressiva não é a regra.",
      },
      {
        id: "estenose-cirurgia",
        question: "A cirurgia é sempre necessária?",
        answer:
          "Não. O tratamento conservador é a primeira abordagem em boa parte dos casos. A cirurgia é considerada quando a limitação compromete a autonomia ou quando há déficit neurológico progressivo.",
      },
      {
        id: "estenose-ressonancia",
        question: "Uma ressonância com estenose importante significa cirurgia?",
        answer:
          "Não por si só. O estreitamento aparece também em exames de pessoas sem sintomas. O que orienta a conduta é a limitação funcional e o exame neurológico.",
      },
      {
        id: "estenose-infiltracao",
        question: "A infiltração funciona?",
        answer:
          "Para a claudicação neurogênica causada por estenose do canal central, diretrizes internacionais recomendam não utilizar infiltração epidural. Outras situações são avaliadas individualmente.",
      },
      {
        id: "estenose-descompressao",
        question: "O que a descompressão faz?",
        answer:
          "Amplia o espaço ao redor das estruturas nervosas comprimidas. O objetivo prático é a caminhada e os sintomas nas pernas, mais do que a aparência do canal na imagem.",
      },
      {
        id: "estenose-artrodese",
        question: "Vou precisar de artrodese junto?",
        answer:
          "Nem sempre. A artrodese é acrescentada quando há instabilidade ou deformidade envolvida. Muitas descompressões são feitas sem ela.",
      },
      {
        id: "estenose-fisioterapia",
        question: "A fisioterapia pode ajudar?",
        answer:
          "Pode fazer parte do tratamento conservador, junto ao exercício e ao manejo dos sintomas, sobretudo quando o quadro é tolerável e não há indicação neurológica urgente.",
      },
    ],
    relatedTreatmentSlugs: ["cirurgia-coluna", "hernia-disco"],
    relatedPostSlugs: ["como-se-preparar-para-consulta-neurocirurgica"],
    keywords: ["estenose de canal", "canal estreito", "coluna lombar", "Campo Grande"],
    lastModified: "2026-09-07",
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
      "A mielopatia cervical degenerativa é a alteração neurológica causada pela compressão da medula na coluna cervical. Ela se manifesta mais por perda de destreza e desequilíbrio do que por dor no pescoço.",
    sections: [
      {
        id: "o-que-e",
        heading: "O que é a mielopatia cervical",
        paragraphs: [
          "Alterações degenerativas da coluna cervical podem reduzir o espaço da medula espinhal e comprometer sua função.",
          "É um quadro diferente da dor cervical isolada e também da radiculopatia, em que a raiz nervosa é comprimida e a dor irradia para o braço. Aqui, quem está comprometida é a medula.",
        ],
      },
      {
        id: "sintomas",
        heading: "Sinais que costumam aparecer primeiro",
        paragraphs: [
          "Os sintomas iniciais são frequentemente atribuídos à idade ou ao cansaço, o que atrasa o diagnóstico.",
        ],
        bullets: [
          "Perda de destreza nas mãos, com dificuldade para abotoar roupas, escrever ou manipular objetos pequenos.",
          "Sensação de deixar objetos cair.",
          "Desequilíbrio ou alteração da marcha.",
          "Fraqueza ou dormência nos membros.",
          "Em quadros avançados, comprometimento da mobilidade e do controle dos esfíncteres.",
        ],
      },
      {
        id: "avaliacao",
        heading: "Como o diagnóstico é feito",
        paragraphs: [
          "O diagnóstico exige sinais clínicos de mielopatia somados à compressão da medula na ressonância. A imagem alterada, sozinha, não estabelece o diagnóstico: compressão sem sintomas existe e não é a mesma coisa.",
          "A gravidade é quantificada por escalas específicas no exame, o que permite acompanhar a evolução de forma objetiva entre as consultas.",
        ],
      },
      {
        id: "tratamento",
        heading: "Como a conduta é definida",
        paragraphs: [
          "Diretrizes internacionais organizam a decisão pela gravidade, e essa é uma das áreas da coluna com orientação mais bem definida.",
        ],
        bullets: [
          "Mielopatia moderada ou grave: o tratamento cirúrgico é recomendado.",
          "Mielopatia leve: é possível oferecer cirurgia ou um programa estruturado e supervisionado de reabilitação, com indicação cirúrgica se houver piora neurológica ou se não houver melhora.",
          "Compressão da medula sem sintomas e sem radiculopatia: não se indica cirurgia preventiva de rotina; orienta-se acompanhamento clínico e informação sobre os sinais a observar.",
          "Compressão sem mielopatia, mas com radiculopatia associada: existe risco aumentado de desenvolver mielopatia, o que muda o acompanhamento.",
        ],
      },
      {
        id: "cirurgia",
        heading: "O que a cirurgia busca",
        paragraphs: [
          "O objetivo é descomprimir a medula. A via de acesso, anterior ou posterior, e o tipo de procedimento dependem dos níveis acometidos, do alinhamento e da anatomia — não existe uma abordagem melhor em geral.",
          "Uma parte importante do objetivo é interromper a progressão do comprometimento neurológico, além da possibilidade de melhora funcional. A recuperação é variável e pode ser parcial, sobretudo em quadros graves ou de longa evolução. Descomprimir a medula não é o mesmo que garantir o retorno da função normal.",
        ],
      },
    ],
    indications: [
      "Sinais clínicos de mielopatia com compressão medular correspondente na ressonância.",
      "Mielopatia moderada ou grave.",
      "Piora neurológica durante o acompanhamento de um quadro leve.",
      "Perda progressiva de destreza, força ou equilíbrio.",
    ],
    limitations: [
      "Compressão da medula na ressonância, sem sintomas, não indica cirurgia preventiva de rotina.",
      "A mielopatia não é apenas dor no pescoço, e a ausência de dor não afasta o diagnóstico.",
      "A recuperação neurológica é variável e pode ser incompleta.",
      "Não existe uma via de acesso superior às demais em geral.",
    ],
    carePath: [
      "História dirigida à destreza das mãos, ao equilíbrio e à evolução dos sintomas.",
      "Exame neurológico com graduação da gravidade por escala.",
      "Revisão da ressonância cervical à luz dos achados clínicos.",
      "Definição da conduta pela gravidade, com acompanhamento programado nos quadros leves.",
    ],
    faqs: [
      {
        id: "mielopatia-diferenca",
        question: "Qual a diferença para uma hérnia de disco cervical?",
        answer:
          "Na hérnia com compressão de raiz, o sintoma predominante costuma ser a dor irradiada para o braço. Na mielopatia, a medula é comprimida e os sinais aparecem como perda de destreza nas mãos e alteração do equilíbrio, muitas vezes sem dor importante.",
      },
      {
        id: "mielopatia-derrubando",
        question: "Por que estou derrubando objetos?",
        answer:
          "A perda de destreza fina das mãos é um dos sinais mais característicos da mielopatia cervical, junto à dificuldade para abotoar roupas ou escrever. É um sintoma que merece avaliação, e não apenas atribuição à idade.",
      },
      {
        id: "mielopatia-equilibrio",
        question: "O desequilíbrio pode vir do pescoço?",
        answer:
          "Pode. A alteração da marcha e do equilíbrio é uma manifestação conhecida da compressão da medula cervical, e costuma ser avaliada junto aos sinais nas mãos.",
      },
      {
        id: "mielopatia-urgencia",
        question: "É preciso procurar avaliação com urgência?",
        answer:
          "Sinais progressivos de perda de destreza, força ou equilíbrio devem ser avaliados sem adiamento, já que a conduta busca interromper a progressão do comprometimento.",
      },
      {
        id: "mielopatia-fisioterapia",
        question: "A fisioterapia substitui a cirurgia?",
        answer:
          "Nos quadros leves, um programa estruturado e supervisionado de reabilitação é uma das opções previstas em diretriz, com indicação cirúrgica se houver piora ou ausência de melhora. Nos quadros moderados e graves, a recomendação é cirúrgica.",
      },
      {
        id: "mielopatia-esperar",
        question: "O que acontece se eu esperar?",
        answer:
          "A mielopatia pode permanecer estável por períodos, mas carrega risco acumulado de piora neurológica ao longo dos anos, maior nos quadros moderados e graves. Por isso o acompanhamento é programado e não indefinido.",
      },
      {
        id: "mielopatia-evita-ou-recupera",
        question: "A cirurgia evita a piora ou recupera o que já perdi?",
        answer:
          "Os dois objetivos entram na conversa, mas com pesos diferentes: interromper a progressão é o alvo mais previsível, e a recuperação do que já foi perdido é variável, sobretudo em quadros de longa evolução.",
      },
      {
        id: "mielopatia-recupera",
        question: "A medula consegue se recuperar?",
        answer:
          "Pode haver recuperação funcional após a descompressão, mas ela é variável e pode ser parcial. Não é possível garantir o retorno da função normal, e esse limite é discutido antes da decisão.",
      },
    ],
    relatedTreatmentSlugs: ["cirurgia-coluna", "reabilitacao-neurocirurgica"],
    relatedPostSlugs: ["como-se-preparar-para-consulta-neurocirurgica"],
    keywords: ["mielopatia cervical", "compressão medular", "coluna cervical", "Campo Grande"],
    lastModified: "2026-09-07",
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
      "As fraturas da coluna vão de lesões estáveis por compressão até fraturas instáveis com comprometimento neurológico. A conduta depende do tipo de fratura, do estado neurológico e da estabilidade, e não do nome da fratura isoladamente.",
    sections: [
      {
        id: "o-que-e",
        heading: "Tipos de fratura e o que muda entre elas",
        paragraphs: [
          "As fraturas da transição torácica e lombar são classificadas internacionalmente pela forma como a vértebra falhou, somada ao estado neurológico da pessoa.",
        ],
        bullets: [
          "Tipo A: fraturas por compressão.",
          "Tipo B: falha da banda de tensão, com envolvimento ligamentar.",
          "Tipo C: deslocamento ou translação entre segmentos.",
          "A esses padrões somam-se o exame neurológico e outros modificadores que pesam na decisão.",
        ],
      },
      {
        id: "avaliacao",
        heading: "Como a investigação é conduzida",
        paragraphs: [
          "No trauma, a indicação de imagem segue o mecanismo e o exame. Na avaliação óssea da coluna do adulto com trauma significativo, a tomografia é o exame central.",
          "Quando uma fratura da coluna é identificada, diretrizes de trauma recomendam examinar por imagem o restante da coluna, porque lesões em mais de um nível não são raras. A ressonância entra quando é necessário avaliar a medula, os ligamentos ou o disco.",
        ],
      },
      {
        id: "tratamento",
        heading: "Tratamento conservador e cirúrgico",
        paragraphs: [
          "A conduta depende da morfologia da fratura, do estado neurológico, da lesão ligamentar, da deformidade e das condições da pessoa. Fraturas estáveis com frequência são tratadas sem operação.",
          "Quando indicada, a cirurgia pode envolver descompressão das estruturas nervosas e estabilização com instrumentação, para restaurar ou manter a estabilidade mecânica.",
        ],
      },
      {
        id: "evidencia",
        heading: "Onde a evidência ainda não decidiu",
        paragraphs: [
          "Para as fraturas explosivas em pessoas sem comprometimento neurológico, uma diretriz baseada em revisão sistemática concluiu que a evidência comparando cirurgia e tratamento conservador é conflitante e insuficiente para eleger uma conduta universal, recomendando o julgamento clínico caso a caso.",
          "Isso significa que o nome da fratura, sozinho, não define um caminho automático de tratamento — e que uma segunda opinião é uma atitude razoável nessas situações.",
        ],
      },
      {
        id: "sinais-de-alerta",
        heading: "Sinais que exigem atendimento de emergência",
        paragraphs: [
          "Após um trauma da coluna, alguns achados exigem avaliação imediata.",
        ],
        bullets: [
          "Fraqueza ou dormência nos braços ou nas pernas.",
          "Perda do controle da urina ou do intestino.",
          "Alteração da sensibilidade na região genital ou perineal.",
          "Dor intensa e localizada na coluna após trauma de alta energia.",
          "Suspeita de lesão da medula espinhal.",
        ],
      },
    ],
    indications: [
      "Fraturas com comprometimento neurológico.",
      "Fraturas instáveis ou com lesão da banda de tensão.",
      "Deformidade progressiva durante o acompanhamento.",
      "Necessidade de avaliação da estabilidade após trauma.",
    ],
    limitations: [
      "Nem toda fratura da coluna precisa de cirurgia.",
      "Nem toda fratura da coluna implica risco de paralisia.",
      "Para fraturas explosivas sem déficit neurológico, a evidência não estabelece superioridade clara da cirurgia sobre o tratamento conservador.",
      "O tempo de consolidação e de retorno às atividades varia conforme a fratura e o tratamento.",
    ],
    carePath: [
      "Revisão do mecanismo do trauma e de todo o atendimento inicial.",
      "Exame neurológico completo.",
      "Análise das imagens, incluindo a avaliação do restante da coluna.",
      "Definição entre tratamento conservador e cirúrgico, com o raciocínio explicado.",
    ],
    faqs: [
      {
        id: "fratura-cirurgia",
        question: "Toda fratura da coluna precisa de cirurgia?",
        answer:
          "Não. Fraturas estáveis e sem comprometimento neurológico podem ser conduzidas de forma conservadora, com acompanhamento clínico e por imagem.",
      },
      {
        id: "fratura-paraplegia",
        question: "Fratura na coluna significa que vou ficar paraplégico?",
        answer:
          "Não. O risco varia enormemente conforme o tipo de fratura e o estado neurológico. Uma fratura estável sem déficit tem situação completamente diferente de uma fratura com luxação e lesão medular.",
      },
      {
        id: "fratura-instavel",
        question: "O que torna uma fratura instável?",
        answer:
          "A forma como a vértebra falhou, o envolvimento dos ligamentos e a presença de deslocamento entre os segmentos. Essa avaliação combina as imagens com o exame neurológico.",
      },
      {
        id: "fratura-tomografia-toda",
        question: "Por que fazer tomografia de toda a coluna?",
        answer:
          "Porque lesões em mais de um nível não são raras. Quando uma fratura é identificada, diretrizes de trauma recomendam avaliar por imagem o restante da coluna.",
      },
      {
        id: "fratura-ressonancia",
        question: "Quando é preciso fazer ressonância?",
        answer:
          "Principalmente quando é necessário avaliar a medula espinhal, os ligamentos ou o disco — informações que a tomografia não fornece com a mesma clareza.",
      },
      {
        id: "fratura-colete",
        question: "O colete substitui a cirurgia?",
        answer:
          "Em fraturas estáveis, o tratamento sem operação é uma conduta possível e frequente. Não é uma alternativa universal: depende do padrão da fratura e do estado neurológico.",
      },
      {
        id: "fratura-parafusos",
        question: "Os parafusos ficam para sempre?",
        answer:
          "Na maior parte dos casos, sim, e não costumam causar problema. A retirada é considerada apenas em situações específicas, discutidas individualmente.",
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
    lastModified: "2026-09-07",
    order: 12,
  },
];
