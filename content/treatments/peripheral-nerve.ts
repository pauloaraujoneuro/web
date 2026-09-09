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
      "Lesões traumáticas e compressivas dos nervos podem afetar força, sensibilidade e autonomia. Não existe uma única cirurgia de nervo: a conduta depende do tipo de lesão, do tempo de evolução e do exame neurológico.",
    sections: [
      {
        id: "o-que-e",
        heading: "O que a cirurgia de nervos periféricos reúne",
        paragraphs: [
          "Cirurgia de nervo periférico é um conjunto de procedimentos com objetivos diferentes: restaurar, preservar ou redirecionar a função de um nervo depois de compressão, trauma ou outra lesão.",
          "A escolha depende do local e do mecanismo da lesão, da continuidade do nervo, do tempo desde o trauma, dos nervos e músculos disponíveis e dos sinais de recuperação espontânea.",
        ],
        bullets: [
          "Neurólise ou descompressão: liberar o nervo de uma estrutura ou de uma cicatriz que o comprime.",
          "Reparo direto: reconectar as extremidades do nervo quando é possível aproximá-las sem tensão.",
          "Enxerto de nervo: preencher a falha entre as extremidades.",
          "Transferência nervosa: ligar um nervo doador funcionante perto do músculo que perdeu a inervação.",
          "Transferência de tendão: redirecionar músculos que funcionam quando a reconstrução do nervo, sozinha, não deve devolver o movimento necessário.",
        ],
      },
      {
        id: "avaliacao",
        heading: "Uma avaliação orientada à função",
        paragraphs: [
          "A consulta relaciona os sintomas, o tempo de evolução e o impacto nas atividades diárias aos achados do exame neurológico.",
          "Exames complementares são analisados dentro desse contexto. A eletroneuromiografia ajuda a documentar a perda axonal e os sinais de reinervação, mas o momento em que é feita muda a leitura do resultado. Ultrassonografia e ressonância são usadas de forma seletiva e não substituem o exame clínico.",
        ],
      },
      {
        id: "tempo",
        heading: "Por que o tempo faz parte do diagnóstico",
        paragraphs: [
          "O músculo que fica muito tempo sem inervação perde progressivamente a capacidade de ser reinervado com sucesso. Por isso o intervalo entre a lesão e a reconstrução influencia o que ainda é possível fazer.",
          "Ao mesmo tempo, parte das lesões por estiramento ou compressão se recupera sozinha. Acompanhar por um período definido pode ser a conduta correta, e o exame seriado é o que mostra se a recuperação está acontecendo.",
        ],
      },
      {
        id: "abordagens",
        heading: "Possibilidades de cuidado",
        paragraphs: [
          "Conforme o diagnóstico, o plano pode incluir acompanhamento, reabilitação ou cirurgia. Nenhuma técnica de reconstrução é superior às outras de forma geral: reparo, enxerto e transferência resolvem problemas anatômicos diferentes.",
          "A cirurgia também não é o tratamento inteiro. Proteção das articulações, controle da dor, fisioterapia, terapia ocupacional e reeducação motora e sensitiva costumam ser parte central do resultado.",
        ],
      },
      {
        id: "recuperacao",
        heading: "O ritmo da recuperação",
        paragraphs: [
          "A recuperação de um nervo é medida em meses, não em dias ou semanas. O tempo depende da distância entre o reparo e o músculo, da gravidade da lesão, da idade e da reabilitação.",
          "Em algumas transferências nervosas, a primeira atividade muscular perceptível pode levar por volta de dois a seis meses, e o ganho de força e o reaprendizado do movimento continuam por muito mais tempo. Esse intervalo é específico de cada reconstrução e não vale como previsão geral.",
        ],
      },
      {
        id: "sinais-de-alerta",
        heading: "Sinais que pedem avaliação sem demora",
        paragraphs: [
          "Alguns quadros mudam a urgência da avaliação especializada.",
        ],
        bullets: [
          "Perda de força nova ou que está progredindo.",
          "Trauma importante com paralisia ou perda de sensibilidade imediata.",
          "Ferimento aberto no trajeto de um nervo importante.",
          "Atrofia muscular visível.",
          "Dor neuropática intensa após trauma, com déficit neurológico.",
          "Ausência de recuperação ao longo do acompanhamento previsto.",
        ],
      },
    ],
    indications: [
      "Perda de movimentos ou sensibilidade após trauma em braços ou pernas.",
      "Suspeita de lesão do plexo braquial.",
      "Síndromes compressivas complexas, como túnel do carpo, síndrome cubital ou túnel do tarso.",
      "Déficit que não recupera dentro do prazo esperado para o tipo de lesão.",
    ],
    limitations: [
      "Nem toda alteração nervosa precisa de cirurgia.",
      "O benefício esperado e o momento da intervenção dependem da avaliação presencial e da evolução individual.",
      "Não existe um percentual único de sucesso: o resultado se descreve por nervo, tipo de lesão, técnica, tempo decorrido e movimento pretendido.",
      "A recuperação funcional varia, e nem sempre o nervo volta a funcionar como antes da lesão.",
    ],
    carePath: [
      "Revisão da história e dos exames anteriores.",
      "Exame neurológico direcionado à força, sensibilidade e função.",
      "Reavaliação em intervalos definidos para acompanhar a evolução.",
      "Definição compartilhada entre acompanhamento, reabilitação e possibilidade cirúrgica.",
    ],
    faqs: [
      {
        id: "nervo-cirurgia-necessaria",
        question: "Toda lesão de nervo precisa de cirurgia?",
        answer:
          "Não. Parte das lesões por compressão ou estiramento se recupera sem reconstrução. O que orienta a decisão é o tipo de lesão, a gravidade e a evolução observada no acompanhamento.",
      },
      {
        id: "nervo-tempo-recuperacao",
        question: "Quanto tempo o nervo demora para se recuperar?",
        answer:
          "Em geral, meses. O tempo depende da distância entre o ponto reparado e o músculo, do tipo de lesão e do tipo de reconstrução. É um processo acompanhado ao longo de consultas, não resolvido em semanas.",
      },
      {
        id: "nervo-transferencia",
        question: "O que é uma transferência nervosa?",
        answer:
          "É redirecionar um nervo doador que ainda funciona para assumir o comando de um músculo que perdeu a inervação, ligando-o mais perto desse músculo. Isso pode encurtar a distância que os axônios precisam percorrer.",
      },
      {
        id: "nervo-enxerto-vs-transferencia",
        question: "Qual a diferença entre enxerto e transferência de nervo?",
        answer:
          "O enxerto preenche a falha no trajeto do próprio nervo lesionado. A transferência cria um caminho novo, a partir de um nervo doador, mais perto do músculo. São soluções para problemas anatômicos diferentes.",
      },
      {
        id: "nervo-quanto-antes",
        question: "Quanto mais cedo operar, melhor?",
        answer:
          "Em lesões graves que não vão se recuperar sozinhas, o tempo pesa a favor de reconstruir mais cedo. Mas operar cedo demais uma lesão com potencial de recuperação espontânea também pode não ser adequado. O prazo é discutido caso a caso.",
      },
      {
        id: "nervo-emg-decide",
        question: "A eletroneuromiografia decide se preciso operar?",
        answer:
          "Ela contribui, mas não decide sozinha. O resultado é interpretado junto ao exame neurológico, ao mecanismo da lesão, às imagens quando indicadas e à evolução entre uma consulta e outra.",
      },
      {
        id: "nervo-fisioterapia",
        question: "Ainda preciso de fisioterapia depois da cirurgia?",
        answer:
          "Na maior parte dos casos, sim. Proteção das articulações, ganho de força, trabalho de sensibilidade e reaprendizado do movimento costumam ser parte do resultado, e não um complemento opcional.",
      },
      {
        id: "nervo-volta-normal",
        question: "O nervo volta a ser como era antes?",
        answer:
          "Nem sempre. A recuperação funcional varia bastante conforme a lesão e o tempo decorrido. Os objetivos possíveis e seus limites são definidos antes da cirurgia, no plano individual.",
      },
      {
        id: "nervo-exames",
        question: "Quais exames devo levar?",
        answer:
          "Leve todos os exames relacionados ao problema, inclusive os antigos. Na consulta, o médico avalia se há necessidade de investigação complementar.",
      },
    ],
    relatedTreatmentSlugs: [
      "lesao-plexo-braquial",
      "transferencia-nervosa-tetraplegia",
      "sindrome-tunel-carpo",
      "sindrome-cubital",
      "sindrome-tunel-tarso",
      "reabilitacao-neurocirurgica",
    ],
    relatedPostSlugs: [
      "como-se-preparar-para-consulta-neurocirurgica",
      "lesao-plexo-braquial-quando-operar",
    ],
    keywords: ["nervo periférico", "reconstrução nervosa", "Campo Grande"],
    lastModified: "2026-09-07",
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
      "A lesão do plexo braquial compromete a rede de nervos que leva os comandos do pescoço para o ombro, o braço e a mão. A gravidade varia entre estiramentos com potencial de recuperação espontânea e arrancamentos de raiz.",
    sections: [
      {
        id: "o-que-e",
        heading: "O que é o plexo braquial",
        paragraphs: [
          "O plexo braquial é a rede de nervos que sai das raízes cervicais e comanda os movimentos e a sensibilidade do membro superior.",
          "A lesão pode variar do estiramento, que pode se recuperar sozinho, até a ruptura ou o arrancamento da raiz junto à medula. Cada uma dessas situações tem potencial de recuperação diferente, e por isso o diagnóstico do tipo de lesão orienta tudo o que vem depois.",
        ],
      },
      {
        id: "quem-atinge",
        heading: "Quem costuma ser atingido",
        paragraphs: [
          "As lesões graves do adulto que chegam à cirurgia estão associadas, na grande maioria, a trauma de alta energia. Nas séries cirúrgicas internacionais, os acidentes de motocicleta respondem pela maior parte dos casos fechados, e a maioria dos pacientes é composta por homens jovens.",
          "Esses números descrevem quem chega à cirurgia, e não todas as lesões de plexo — muitas lesões mais leves não seguem esse perfil.",
        ],
      },
      {
        id: "avaliacao",
        heading: "Como a investigação é conduzida",
        paragraphs: [
          "A avaliação mapeia a força músculo a músculo, a sensibilidade e os reflexos, e é repetida ao longo do acompanhamento: a evolução entre um exame e outro é uma informação diagnóstica em si.",
          "A eletroneuromiografia é feita em intervalos adequados para avaliar denervação e reinervação. A ressonância e outros exames de imagem ajudam a estudar as raízes e o plexo. Em situações selecionadas, a mielotomografia ainda tem papel na avaliação de arrancamento de raiz.",
        ],
      },
      {
        id: "tempo",
        heading: "Por que o tempo importa",
        paragraphs: [
          "Nas lesões fechadas por estiramento existe uma tensão central: esperar o suficiente para identificar uma recuperação espontânea, sem esperar tanto que a reconstrução motora deixe de ser biologicamente favorável.",
          "Um período em torno de três meses costuma permitir observar se a recuperação começou. Revisões sistemáticas descrevem resultados motores melhores quando a reconstrução das lesões por estiramento acontece dentro dos primeiros seis meses. Isso não é uma data fixa: o prazo depende do tipo de lesão e da evolução de cada pessoa.",
        ],
      },
      {
        id: "condutas",
        heading: "Possibilidades de tratamento",
        paragraphs: [
          "Parte dos casos evolui com acompanhamento e reabilitação. Quando a reconstrução é indicada, ela pode combinar neurólise, enxertos, transferências nervosas, transferência muscular funcional e procedimentos sobre tendões.",
          "A reabilitação começa antes da decisão cirúrgica: manter a amplitude passiva das articulações e evitar contraturas preserva as opções de reconstrução.",
        ],
      },
      {
        id: "sinais-de-alerta",
        heading: "Sinais que pedem avaliação urgente",
        paragraphs: [
          "Alguns achados após o trauma mudam a urgência da avaliação.",
        ],
        bullets: [
          "Paralisia completa ou quase completa logo após trauma no ombro ou no pescoço.",
          "Queda da pálpebra e alteração da pupila do mesmo lado, que levantam a suspeita de lesão junto à raiz.",
          "Lesão vascular associada.",
          "Ferimento aberto penetrante.",
          "Dor neuropática intensa e persistente.",
          "Ausência da recuperação esperada durante o acompanhamento inicial.",
        ],
      },
    ],
    indications: [
      "Perda de força ou de sensibilidade no membro superior após trauma.",
      "Suspeita de arrancamento ou ruptura de raízes do plexo.",
      "Dor neuropática persistente associada a déficit motor.",
      "Ausência de recuperação dentro do prazo esperado para o tipo de lesão.",
    ],
    limitations: [
      "Nem toda lesão do plexo braquial tem indicação cirúrgica.",
      "Não existe uma data única para operar: o prazo depende do tipo de lesão e da evolução observada.",
      "Os resultados descritos na literatura vêm de grupos selecionados e não representam a probabilidade individual de recuperação.",
      "A ressonância, isoladamente, não define a indicação cirúrgica.",
    ],
    carePath: [
      "Revisão do trauma, dos atendimentos anteriores e de todos os exames.",
      "Exame neurológico detalhado, músculo a músculo, com reavaliações programadas.",
      "Estudo eletrofisiológico e de imagem nos intervalos adequados.",
      "Definição do plano: acompanhamento, reabilitação ou reconstrução, com os objetivos funcionais combinados antes.",
    ],
    faqs: [
      {
        id: "plexo-braco-sozinho",
        question: "O braço pode voltar sozinho?",
        answer:
          "Pode, em parte dos casos. Lesões por estiramento têm potencial de recuperação espontânea; rupturas e arrancamentos de raiz, não. O acompanhamento com exames seriados é o que mostra em qual situação o caso está.",
      },
      {
        id: "plexo-avulsao",
        question: "Como se sabe se o nervo foi arrancado da medula?",
        answer:
          "A suspeita vem do exame clínico e de sinais associados, e é estudada com exames de imagem e eletrofisiológicos. Nenhum exame isolado fecha o diagnóstico: a conclusão vem do conjunto.",
      },
      {
        id: "plexo-quando-procurar",
        question: "Quando devo procurar um especialista após o trauma?",
        answer:
          "Procure avaliação quando houver perda de força ou de sensibilidade que não melhora, dor intensa persistente ou dúvida sobre a evolução. O intervalo entre a lesão e a avaliação pode influenciar as condutas disponíveis, e esse prazo é discutido caso a caso.",
      },
      {
        id: "plexo-esperar-um-ano",
        question: "Por que não esperar um ano para decidir?",
        answer:
          "Porque o músculo sem inervação perde progressivamente a capacidade de ser reinervado. Esperar tem valor para identificar recuperação espontânea, mas esperar demais pode fechar opções de reconstrução motora.",
      },
      {
        id: "plexo-cirurgia",
        question: "Toda lesão do plexo braquial precisa de cirurgia?",
        answer:
          "Não. Parte dos casos evolui com acompanhamento clínico e reabilitação. A indicação cirúrgica depende do tipo de lesão, da evolução e da avaliação presencial.",
      },
      {
        id: "plexo-mao",
        question: "Dá para recuperar a mão ou só o ombro e o cotovelo?",
        answer:
          "Depende do nível e da extensão da lesão. Os objetivos são priorizados antes da cirurgia — com frequência a flexão do cotovelo e a estabilidade do ombro vêm primeiro —, e o que é possível para a mão é discutido individualmente.",
      },
      {
        id: "plexo-nervo-doador",
        question: "Por que a cirurgia usaria um nervo que ainda funciona?",
        answer:
          "Em uma transferência nervosa, um nervo doador considerado dispensável assume o comando de um músculo que ficou sem inervação. A escolha do doador é planejada para não comprometer uma função importante que ainda existe.",
      },
      {
        id: "plexo-exames",
        question: "Quais exames devo levar na consulta?",
        answer:
          "Leve todos os exames e laudos relacionados ao trauma, incluindo imagens em mídia digital, relatórios de atendimento de urgência e estudos eletrofisiológicos, mesmo que antigos.",
      },
    ],
    relatedTreatmentSlugs: ["cirurgia-nervos-perifericos", "reabilitacao-neurocirurgica"],
    relatedPostSlugs: [
      "como-se-preparar-para-consulta-neurocirurgica",
      "lesao-plexo-braquial-quando-operar",
    ],
    keywords: ["lesão do plexo braquial", "plexo braquial", "nervo periférico", "Campo Grande"],
    lastModified: "2026-09-07",
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
      "Depois de uma lesão medular cervical, parte da função do membro superior pode ser reconstruída com transferências de nervo, de tendão e procedimentos associados. O objetivo é ampliar a autonomia em tarefas definidas, não reparar a medula.",
    sections: [
      {
        id: "o-que-e",
        heading: "O que é a transferência nervosa",
        paragraphs: [
          "Na transferência nervosa, um nervo doador que continua funcionando passa a comandar um músculo que ficou paralisado, sendo ligado próximo a ele.",
          "É diferente da transferência de tendão, que redireciona a força de um músculo que já funciona. A reconstrução moderna combina as duas estratégias com frequência, em vez de tratá-las como alternativas concorrentes.",
        ],
      },
      {
        id: "avaliacao",
        heading: "Como é feita a avaliação",
        paragraphs: [
          "A avaliação parte dos objetivos funcionais da pessoa: transferências, uso da cadeira de rodas, alimentação, higiene, autocateterismo, trabalho e uso de computador.",
          "Do lado clínico, pesam a integridade dos nervos doadores, a condição dos músculos e das articulações, a presença de contraturas e a disponibilidade para um período longo de reabilitação. O estudo eletrofisiológico ajuda a identificar se o músculo-alvo ainda tem conexão viável.",
          "A classificação internacional para cirurgia da mão na tetraplegia organiza a avaliação conforme a sensibilidade e os músculos úteis abaixo do cotovelo. Ela é um instrumento de planejamento, e não um roteiro automático de indicação.",
        ],
      },
      {
        id: "tempo",
        heading: "O momento da cirurgia",
        paragraphs: [
          "A literatura descreve transferências nervosas bem-sucedidas desde alguns meses até anos depois da lesão medular. O prazo depende do músculo que se pretende reinervar: a denervação prolongada pode eliminar algumas opções.",
          "As transferências de tendão, em geral, continuam disponíveis mais tarde, desde que existam músculos doadores adequados. Por isso a avaliação precoce amplia as escolhas, mesmo quando a cirurgia não é feita naquele momento.",
        ],
      },
      {
        id: "expectativas",
        heading: "Objetivos, limites e reabilitação",
        paragraphs: [
          "A cirurgia reconstrói funções selecionadas do membro superior. Ela não trata a lesão medular em si e não devolve a mobilidade perdida como um todo.",
          "Os movimentos a serem trabalhados são definidos antes da cirurgia, em conjunto, e o planejamento é multiprofissional. Depois de uma transferência nervosa, o reaprendizado é parte do tratamento: no início o novo movimento depende do comando do músculo doador, e a separação dos dois comandos é construída na reabilitação.",
          "Os resultados publicados vêm de séries pequenas e heterogêneas, com medidas próprias de cada estudo. Eles servem para orientar o planejamento, não para prever o resultado de uma pessoa.",
        ],
      },
    ],
    indications: [
      "Tetraplegia ou tetraparesia por lesão medular cervical com grupos musculares preservados acima do nível da lesão.",
      "Objetivo funcional definido, como pinça, preensão ou extensão do cotovelo.",
      "Condições articulares e musculares compatíveis com a reconstrução pretendida.",
      "Disponibilidade para o programa de reabilitação após a cirurgia.",
    ],
    limitations: [
      "A cirurgia não trata nem cura a lesão medular.",
      "Nem toda lesão medular cervical é elegível.",
      "A denervação prolongada pode inviabilizar parte das transferências nervosas.",
      "Medidas de força publicadas em estudos não se traduzem em percentual de recuperação da mão.",
    ],
    carePath: [
      "Conversa sobre as tarefas do dia a dia que a pessoa quer recuperar.",
      "Exame detalhado da sensibilidade, dos músculos disponíveis e das articulações.",
      "Estudo eletrofisiológico quando necessário para avaliar os músculos-alvo.",
      "Planejamento multiprofissional dos movimentos a reconstruir e da reabilitação.",
    ],
    faqs: [
      {
        id: "tetraplegia-quem-avalia",
        question: "Quem pode ser avaliado para a cirurgia?",
        answer:
          "Pessoas com tetraplegia ou tetraparesia por lesão medular cervical que mantenham grupos musculares funcionais acima do nível da lesão. A elegibilidade é definida no exame presencial.",
      },
      {
        id: "tetraplegia-nervo-vs-tendao",
        question: "Qual a diferença entre transferência de nervo e de tendão?",
        answer:
          "A transferência de nervo tenta reinervar um músculo paralisado usando um nervo doador. A transferência de tendão redireciona a força de um músculo que já funciona. As duas podem ser combinadas no mesmo plano.",
      },
      {
        id: "tetraplegia-cura-medula",
        question: "A cirurgia cura a lesão medular?",
        answer:
          "Não. Ela reconstrói funções selecionadas do membro superior. A medula em si não é reparada por esse procedimento.",
      },
      {
        id: "tetraplegia-tempo-apos-lesao",
        question: "Quanto tempo depois da lesão ainda é possível operar?",
        answer:
          "Depende do que se pretende reconstruir. Transferências nervosas têm janela mais dependente do tempo, porque o músculo sem inervação se deteriora; transferências de tendão costumam permanecer possíveis por mais tempo. A avaliação precoce ajuda a preservar opções.",
      },
      {
        id: "tetraplegia-prioridade",
        question: "Qual movimento costuma ser priorizado?",
        answer:
          "Depende dos objetivos da pessoa e dos músculos disponíveis. Extensão do cotovelo, abertura da mão e pinça estão entre os alvos mais frequentes, e a prioridade é definida em conjunto antes da cirurgia.",
      },
      {
        id: "tetraplegia-reaprender",
        question: "Vou precisar reaprender a mexer a mão?",
        answer:
          "Com frequência sim, sobretudo depois de transferências nervosas. No início o novo movimento aparece junto com o comando do músculo doador, e o treino dirigido é o que constrói o controle separado.",
      },
      {
        id: "tetraplegia-dois-bracos",
        question: "É possível operar os dois braços?",
        answer:
          "Pode ser possível, em etapas. A sequência considera a função de cada lado, os objetivos definidos e o tempo de reabilitação de cada procedimento.",
      },
      {
        id: "tetraplegia-resultado",
        question: "A cirurgia devolve todos os movimentos?",
        answer:
          "Não. O objetivo é trabalhar movimentos específicos, definidos antes da cirurgia, que possam ampliar a autonomia nas atividades diárias. Os resultados variam conforme o caso e são discutidos individualmente.",
      },
    ],
    relatedTreatmentSlugs: ["cirurgia-nervos-perifericos", "reabilitacao-neurocirurgica"],
    relatedPostSlugs: [
      "como-se-preparar-para-consulta-neurocirurgica",
      "transferencia-nervosa-tetraplegia-maos",
    ],
    keywords: ["transferência nervosa", "tetraplegia", "lesão medular", "Campo Grande"],
    lastModified: "2026-09-07",
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
      "A síndrome do túnel do carpo é a compressão do nervo mediano no punho e é a compressão nervosa mais comum do membro superior. O diagnóstico é clínico, e o tratamento vai de medidas conservadoras à liberação cirúrgica.",
    sections: [
      {
        id: "sintomas",
        heading: "Sintomas que costumam chamar atenção",
        paragraphs: [
          "O sintoma característico é dormência ou formigamento no polegar, no indicador, no médio e em parte do anelar, com piora à noite e despertares para sacudir a mão.",
          "A dor pode subir pelo antebraço. Em quadros mais avançados aparecem perda de força na oposição do polegar, dificuldade para segurar objetos e atrofia da musculatura da base do polegar.",
        ],
      },
      {
        id: "diagnostico",
        heading: "Como o diagnóstico é conduzido",
        paragraphs: [
          "O diagnóstico é clínico. Diretrizes recentes indicam que um conjunto estruturado de achados de história e exame é suficiente na maior parte dos casos, sem necessidade de ultrassonografia ou eletroneuromiografia de rotina.",
          "A eletroneuromiografia continua útil quando o diagnóstico é duvidoso, quando é preciso graduar a gravidade, quando há suspeita de outra neuropatia associada ou quando o planejamento cirúrgico exige. A ressonância não é recomendada como exame para diagnosticar a síndrome.",
        ],
      },
      {
        id: "tratamento",
        heading: "Caminhos de tratamento",
        paragraphs: [
          "O uso de órtese noturna pode aliviar os sintomas em quadros leves e moderados adequadamente selecionados.",
          "A infiltração com corticoide pode trazer alívio de curto prazo, mas as diretrizes registram que não produz melhora sustentada a longo prazo. Várias outras terapias oferecidas para o quadro não têm benefício demonstrado ao longo do tempo, o que é uma informação importante antes de investir tempo e dinheiro nelas.",
          "A cirurgia libera o ligamento transverso do carpo para reduzir a pressão sobre o nervo mediano.",
        ],
      },
      {
        id: "tecnica",
        heading: "Sobre a técnica cirúrgica",
        paragraphs: [
          "As técnicas aberta com incisão pequena e endoscópica apresentam resultados equivalentes na percepção do paciente, segundo evidência considerada forte. A escolha não define, por si só, a qualidade do resultado.",
          "O procedimento pode ser feito com anestesia local. Para uma liberação sem complicações, o uso rotineiro de imobilização e de fisioterapia supervisionada no pós-operatório não é recomendado.",
        ],
      },
      {
        id: "recuperacao",
        heading: "O que esperar da recuperação",
        paragraphs: [
          "A melhora do formigamento noturno costuma vir antes da recuperação de uma dormência antiga ou da força do polegar.",
          "Quando a compressão foi intensa e prolongada, a perda das fibras nervosas pode limitar a recuperação neurológica mesmo com uma liberação tecnicamente adequada. Esse é um dos motivos para não adiar indefinidamente a avaliação.",
        ],
      },
    ],
    indications: [
      "Sintomas persistentes apesar das medidas conservadoras.",
      "Perda de força na mão ou atrofia da base do polegar.",
      "Dormência constante, que deixou de ser apenas noturna.",
      "Quadro compatível com compressão avançada do nervo mediano.",
    ],
    limitations: [
      "Quadros iniciais frequentemente melhoram sem cirurgia.",
      "A infiltração com corticoide não é um tratamento definitivo.",
      "A técnica endoscópica não é superior à aberta com incisão pequena nos resultados relatados pelo paciente.",
      "Em compressões antigas e graves, a recuperação da sensibilidade e da força pode ser parcial.",
    ],
    carePath: [
      "História dirigida aos sintomas noturnos, à distribuição na mão e ao impacto nas atividades.",
      "Exame clínico do nervo mediano e da força do polegar.",
      "Exames complementares apenas quando mudam a conduta.",
      "Escolha entre medidas conservadoras e liberação cirúrgica, com os limites de cada uma explicados.",
    ],
    faqs: [
      {
        id: "carpo-cirurgia-necessaria",
        question: "Todo caso precisa de cirurgia?",
        answer:
          "Não. Quadros iniciais frequentemente melhoram com medidas conservadoras. A cirurgia é considerada quando os sintomas persistem ou quando há sinais de comprometimento mais avançado do nervo.",
      },
      {
        id: "carpo-digitar",
        question: "Digitar muito causa túnel do carpo?",
        answer:
          "A associação é menos direta do que se costuma dizer. Diretrizes recentes registram que não há evidência confiável ligando uso intenso de teclado ao surgimento da síndrome.",
      },
      {
        id: "carpo-exames",
        question: "Preciso fazer eletroneuromiografia antes da consulta?",
        answer:
          "Não é necessário fazer exames por conta própria. Leve os que já possui; na consulta é avaliada a necessidade de investigação complementar.",
      },
      {
        id: "carpo-infiltracao",
        question: "A infiltração resolve de vez?",
        answer:
          "Não. Ela pode aliviar os sintomas por um período, mas as diretrizes indicam que não produz melhora sustentada a longo prazo. É uma medida de alívio, não um tratamento definitivo.",
      },
      {
        id: "carpo-aberta-endoscopica",
        question: "Cirurgia aberta ou endoscópica é melhor?",
        answer:
          "As duas apresentam resultados equivalentes na avaliação dos pacientes. A escolha depende do caso e da experiência da equipe, e não determina sozinha o resultado.",
      },
      {
        id: "carpo-tala-depois",
        question: "Vou precisar usar tala depois da cirurgia?",
        answer:
          "Em uma liberação sem complicações, a imobilização de rotina não é recomendada. As orientações de pós-operatório são individualizadas.",
      },
      {
        id: "carpo-trabalho",
        question: "Quando posso voltar a trabalhar?",
        answer:
          "Depende do tipo de atividade e da mão operada. O retorno é combinado na consulta de revisão, considerando esforço, uso de força e exposição a risco.",
      },
      {
        id: "carpo-dormencia-some",
        question: "A dormência some logo depois da cirurgia?",
        answer:
          "Nem sempre. O formigamento noturno costuma melhorar primeiro; uma dormência antiga pode levar mais tempo e, em casos de compressão prolongada, pode não se recuperar por completo.",
      },
    ],
    relatedTreatmentSlugs: ["cirurgia-nervos-perifericos", "sindrome-cubital"],
    relatedPostSlugs: ["como-se-preparar-para-consulta-neurocirurgica"],
    keywords: ["túnel do carpo", "nervo mediano", "dormência na mão", "Campo Grande"],
    lastModified: "2026-09-07",
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
      "A síndrome cubital é a compressão do nervo ulnar na região do cotovelo e é considerada a segunda compressão nervosa mais comum do membro superior. O quadro vai do formigamento intermitente à perda de força e atrofia da mão.",
    sections: [
      {
        id: "sintomas",
        heading: "Como a compressão se manifesta",
        paragraphs: [
          "Os sintomas típicos são formigamento e dormência no dedo mínimo e na metade do anelar, muitas vezes piores ao manter o cotovelo dobrado por tempo prolongado ou ao apoiá-lo sobre superfícies duras.",
          "Nos quadros mais avançados aparecem perda de força da musculatura interna da mão, dificuldade para movimentos finos e de pinça, atrofia e, em casos importantes, deformidade dos dedos em garra.",
        ],
      },
      {
        id: "diagnostico",
        heading: "Investigação",
        paragraphs: [
          "O diagnóstico parte da história e do exame clínico dirigido ao trajeto do nervo ulnar.",
          "A eletroneuromiografia pode confirmar o quadro, graduar a gravidade e localizar o ponto de compressão. Diretrizes específicas também recomendam oferecer a avaliação do nervo por ultrassonografia, medindo a área de secção transversa, como apoio para confirmar e localizar a compressão.",
        ],
      },
      {
        id: "tratamento",
        heading: "Possibilidades de tratamento",
        paragraphs: [
          "As medidas conservadoras começam pela orientação: evitar manter o cotovelo dobrado por longos períodos e evitar apoiá-lo diretamente sobre superfícies rígidas. O posicionamento noturno com órtese pode ser usado.",
          "Revisões descrevem melhora sintomática em boa parte dos casos tratados dessa forma, mas os estudos são heterogêneos e nem todos comparativos, o que impede tratar esse alívio como resultado garantido. Em quadros leves, um ensaio clínico observou melhora mais rápida com cirurgia aos três meses, sem diferença entre os grupos aos seis e doze meses.",
        ],
      },
      {
        id: "cirurgia",
        heading: "Quando a cirurgia é considerada",
        paragraphs: [
          "A descompressão no local libera as estruturas que comprimem o nervo. A transposição muda o nervo de posição, para a frente do cotovelo, e é escolhida em situações anatômicas e clínicas selecionadas.",
          "Revisões que comparam as técnicas não demonstram superioridade clara de uma sobre a outra em resposta ao tratamento, e a descompressão no local aparece bem posicionada em segurança. A escolha é individual.",
          "Quando a musculatura da mão já está denervada há muito tempo, o potencial de recuperação é menor — o que costuma pesar a favor de não adiar a avaliação diante de perda de força.",
        ],
      },
    ],
    indications: [
      "Perda de força na mão ou atrofia da musculatura interna.",
      "Sintomas persistentes apesar das medidas conservadoras e da mudança de hábitos.",
      "Dificuldade progressiva em movimentos finos e de pinça.",
      "Compressão confirmada com repercussão funcional.",
    ],
    limitations: [
      "Nem todo caso precisa de cirurgia; parte melhora com orientação e mudança de posição.",
      "A transposição do nervo não é superior à descompressão no local de forma geral.",
      "A melhora relatada com órteses vem de estudos heterogêneos e não é uma taxa de sucesso garantida.",
      "Denervação antiga da musculatura da mão tem recuperação limitada.",
    ],
    carePath: [
      "História dirigida aos sintomas, à posição do cotovelo e ao impacto nas atividades.",
      "Exame clínico do trajeto do nervo ulnar e da força da mão.",
      "Exames complementares quando ajudam a confirmar ou localizar a compressão.",
      "Definição entre medidas conservadoras e cirurgia, conforme a gravidade e a evolução.",
    ],
    faqs: [
      {
        id: "cubital-diferenca-carpo",
        question: "Qual a diferença para a síndrome do túnel do carpo?",
        answer:
          "São nervos e locais diferentes. No túnel do carpo o nervo mediano é comprimido no punho e os sintomas atingem principalmente o polegar, o indicador e o médio. Na síndrome cubital, o nervo ulnar é comprimido no cotovelo e os sintomas atingem o dedo mínimo e o anelar.",
      },
      {
        id: "cubital-cotovelo-dobrado",
        question: "Dormir com o cotovelo dobrado piora?",
        answer:
          "Pode piorar. Manter o cotovelo muito flexionado por longos períodos aumenta a tensão sobre o nervo ulnar, e por isso o posicionamento noturno faz parte das primeiras orientações.",
      },
      {
        id: "cubital-ultrassom",
        question: "O ultrassom do nervo ajuda?",
        answer:
          "Pode ajudar. Diretrizes recomendam oferecer a medida da área do nervo por ultrassonografia como apoio para confirmar e localizar a compressão, junto ao exame clínico e à eletroneuromiografia.",
      },
      {
        id: "cubital-emg",
        question: "Uma eletroneuromiografia normal descarta o problema?",
        answer:
          "Não necessariamente. O exame pode não captar quadros iniciais. O diagnóstico considera o conjunto: sintomas, exame clínico e exames complementares.",
      },
      {
        id: "cubital-tala",
        question: "Quando a órtese noturna é indicada?",
        answer:
          "Em quadros sem perda de força importante, como parte das medidas conservadoras, junto às orientações de posicionamento. O tempo de uso é reavaliado conforme a resposta.",
      },
      {
        id: "cubital-quando-operar",
        question: "Quando a cirurgia é considerada?",
        answer:
          "Principalmente diante de perda de força, atrofia muscular ou sintomas que persistem apesar das medidas conservadoras. A decisão é individual e discutida em consulta.",
      },
      {
        id: "cubital-mudar-nervo",
        question: "O nervo precisa ser mudado de lugar?",
        answer:
          "Nem sempre. A transposição é escolhida em situações específicas. As comparações disponíveis não mostram superioridade clara de uma técnica sobre a outra, e a decisão considera a anatomia e o quadro clínico.",
      },
      {
        id: "cubital-forca-volta",
        question: "A força da mão volta totalmente?",
        answer:
          "Depende de quanto tempo a musculatura ficou comprometida. Quando a denervação é antiga, a recuperação pode ser parcial, e esse limite é discutido antes da decisão cirúrgica.",
      },
    ],
    relatedTreatmentSlugs: ["cirurgia-nervos-perifericos", "sindrome-tunel-carpo"],
    relatedPostSlugs: ["como-se-preparar-para-consulta-neurocirurgica"],
    keywords: ["síndrome cubital", "nervo ulnar", "cotovelo", "Campo Grande"],
    lastModified: "2026-09-07",
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
      "A síndrome do túnel do tarso é a compressão do nervo tibial posterior ou de seus ramos na face interna do tornozelo. É um diagnóstico difícil, com evidência científica reconhecidamente mais frágil do que a das compressões da mão.",
    sections: [
      {
        id: "sintomas",
        heading: "Sintomas frequentes",
        paragraphs: [
          "Queimação, formigamento, dormência ou dor na face interna do tornozelo e na planta do pé, muitas vezes com piora ao ficar muito tempo em pé ou após atividade.",
          "O quadro pode estar associado a trauma, alterações biomecânicas, cicatrizes, doenças inflamatórias, varizes locais ou lesões que ocupam espaço no túnel. Em parte dos casos não se identifica uma causa.",
        ],
      },
      {
        id: "diagnostico",
        heading: "Diagnóstico diferencial",
        paragraphs: [
          "Muitos sintomas semelhantes vêm de outras causas: fascite plantar, compressão da raiz S1 na coluna, polineuropatia, neuroma de Morton e fraturas por estresse, entre outras. Por isso o exame dirigido ao trajeto do nervo é decisivo.",
          "A eletroneuromiografia pode apoiar o diagnóstico e identificar outras doenças neurológicas, mas sua sensibilidade é limitada e um exame normal não exclui o quadro. Ultrassonografia e ressonância são especialmente úteis quando se suspeita de uma causa estrutural ou de uma lesão ocupando espaço.",
        ],
      },
      {
        id: "incerteza",
        heading: "Por que este diagnóstico é difícil",
        paragraphs: [
          "Não existe um exame considerado padrão-ouro. Uma revisão sistemática recente, reunindo dezenas de estudos, encontrou variação importante entre os critérios usados para definir o diagnóstico em cada publicação.",
          "A frequência do problema na população também não está bem estabelecida. Reconhecer essa incerteza faz parte de uma avaliação honesta: o diagnóstico é construído pelo conjunto de história, exame e exclusão de outras causas, e não por um teste isolado.",
        ],
      },
      {
        id: "tratamento",
        heading: "Caminhos de tratamento",
        paragraphs: [
          "As primeiras medidas costumam incluir ajuste de atividade e de calçado, palmilhas ou órteses, controle da dor e reabilitação. A evidência que sustenta cada uma dessas medidas isoladamente é mais fraca do que no túnel do carpo.",
          "A cirurgia consiste em liberar o retináculo dos flexores e os ramos envolvidos, quando há indicação adequada. A literatura cirúrgica é composta principalmente por séries de casos, com definições variadas de sucesso e faixas de resultado bastante amplas entre os estudos — motivo para conversar sobre expectativas com cuidado antes de decidir.",
        ],
      },
    ],
    indications: [
      "Sintomas compatíveis com compressão do nervo tibial posterior, após afastar outras causas.",
      "Persistência do quadro apesar das medidas conservadoras.",
      "Identificação de uma causa estrutural comprimindo o nervo.",
    ],
    limitations: [
      "Não existe um exame isolado que confirme o diagnóstico.",
      "Uma eletroneuromiografia normal não exclui o quadro.",
      "A falha do tratamento conservador, por si só, não confirma o diagnóstico.",
      "A evidência sobre os resultados da cirurgia é de baixo nível, com definições de sucesso que variam entre os estudos.",
    ],
    carePath: [
      "História detalhada da dor, do padrão de piora e dos tratamentos já tentados.",
      "Exame dirigido ao trajeto do nervo e às causas alternativas de dor no pé.",
      "Exames complementares para investigar causa estrutural ou diagnósticos concorrentes.",
      "Decisão conjunta, com as expectativas e a incerteza do quadro explicadas.",
    ],
    faqs: [
      {
        id: "tarso-carpo-pe",
        question: "É o túnel do carpo do pé?",
        answer:
          "A comparação ajuda a entender a ideia de compressão de um nervo em um túnel anatômico, mas para por aí. O diagnóstico do túnel do tarso é bem menos definido, e a evidência disponível é bastante mais frágil.",
      },
      {
        id: "tarso-confusao",
        question: "É comum confundir com outras causas de dor no pé?",
        answer:
          "Sim. Muitos pacientes chegam após longos tratamentos para outras causas de dor plantar. O exame direcionado ao trajeto do nervo ajuda a diferenciar os quadros.",
      },
      {
        id: "tarso-calcanhar",
        question: "Dor no calcanhar pode ser do nervo?",
        answer:
          "Pode, mas há várias outras causas mais frequentes, como a fascite plantar. A diferenciação depende do padrão dos sintomas e do exame clínico.",
      },
      {
        id: "tarso-emg-normal",
        question: "Uma eletroneuromiografia normal descarta o problema?",
        answer:
          "Não. A sensibilidade do exame nesse quadro é limitada. Ele é útil, sobretudo para identificar outras doenças neurológicas, mas não define sozinho a presença ou a ausência da compressão.",
      },
      {
        id: "tarso-imagem",
        question: "Ultrassom ou ressonância mostram o problema?",
        answer:
          "São especialmente úteis quando se suspeita de uma causa estrutural, como um cisto ou outra lesão ocupando espaço no túnel. Nem sempre mostram alteração em casos sem causa identificável.",
      },
      {
        id: "tarso-palmilha",
        question: "Palmilha ajuda?",
        answer:
          "Pode fazer parte das medidas iniciais, sobretudo quando há alteração biomecânica associada. A evidência específica para cada medida conservadora é limitada, e a resposta é acompanhada ao longo do tratamento.",
      },
      {
        id: "tarso-tratamento",
        question: "O tratamento é sempre cirúrgico?",
        answer:
          "Não. Medidas conservadoras são a primeira abordagem em boa parte dos casos. A cirurgia é considerada quando a compressão é confirmada e os sintomas persistem.",
      },
      {
        id: "tarso-queimacao",
        question: "A cirurgia sempre resolve a queimação?",
        answer:
          "Não há como afirmar isso. Os estudos disponíveis são majoritariamente séries de casos, com definições diferentes de sucesso e resultados que variam bastante. As expectativas precisam ser conversadas antes da decisão.",
      },
    ],
    relatedTreatmentSlugs: ["cirurgia-nervos-perifericos", "reabilitacao-neurocirurgica"],
    relatedPostSlugs: ["como-se-preparar-para-consulta-neurocirurgica"],
    keywords: ["túnel do tarso", "nervo tibial", "dor no pé", "Campo Grande"],
    lastModified: "2026-09-07",
    order: 8,
  },
];
