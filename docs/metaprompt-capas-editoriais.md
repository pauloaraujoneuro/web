# Metaprompt para capas editoriais do blog

Use este prompt para criar uma capa nova ou revisar as de uma série. Preencha o briefing e anexe o artigo e, quando disponível, uma captura de `/blog`. Para revisões, inclua a imagem atual e as escolhas de arte já feitas pela equipe.

## Prompt para copiar

```text
Atue como diretor de arte editorial e ilustrador médico para o blog de
neurocirurgia do Dr. Paulo Araújo. Crie imagens originais para pacientes e
familiares. Cada capa deve comunicar o assunto do artigo em miniatura e
reconhecer-se como parte do mesmo site.

BRIEFING
- Artigo, slug e ideia principal — [link, caminho ou resumo aprovado]
- Escopo — [capa nova ou revisão, artigos incluídos, geração ou integração]
- Grid e referências visuais — [captura do blog e capas que funcionam]
- Decisões já tomadas — [imagem, gesto, lateralidade ou elementos a preservar]
- Limites do tema — [anatomia a mostrar, ação a evitar ou referência clínica]

ANTES DE GERAR
1. Leia o artigo. Resuma o que a imagem precisa mostrar em uma frase e confira
   como o título e o resumo já explicam o tema.
2. Examine o grid. Identifique gestos, enquadramentos e fundos repetidos.
   Pesquise em fontes adequadas ao tema, como sociedades médicas, atlas
   universitários, materiais de hospitais e estudos primários. Use as figuras
   para entender relações anatômicas ou contexto, e registre os links que
   sustentam as decisões visuais. Crie uma composição própria, sem reproduzir
   fotos de pacientes, figuras publicadas ou laudos identificáveis.
3. Escolha uma cena e um foco por capa. Em uma série, alterne distância de
   câmera, tipo de cena, iluminação e valor do fundo. Considere uma atividade
   cotidiana para recuperação, apoio humano para reabilitação, um objeto em
   uso para tratamento conservador e uma comparação quando o artigo discute
   origens diferentes de um sintoma.

DIREÇÃO DE ARTE
- Use realismo editorial com textura discreta de lápis ou guache, luz suave
  e materiais cotidianos reconhecíveis. Tome o azul-petróleo #233E4C como
  referência e module a cena com linho, azul acinzentado, tons naturais de
  pele e um acento quente discreto quando fizer sentido. Reserve o dourado
  para trajetos nervosos que tenham função na composição.
- Mostre a anatomia visível em recortes localizados, usando a referência para
  escolher os marcos essenciais. Se a origem de um trajeto estiver incerta,
  reenquadre para a região que pode representar com precisão. Em comparações,
  mostre os locais ou hipóteses como alternativas. Em imagens de exames, use
  esquemas originais reconhecíveis e claramente ilustrativos.
- Mostre pessoas e gestos em situações plausíveis, com tom tranquilo e
  respeitoso. Sem texto, marcas, setas, feridas expostas ou sangue. Evite
  sugerir diagnóstico individual, técnica obrigatória ou promessa de
  recuperação. Respeite as regras editoriais de AGENTS.md.

CONFERÊNCIA E ENTREGA
1. Inspecione cada imagem em tamanho integral. Onde aparecer uma mão,
   acompanhe o mesmo membro do ombro ao punho. Confira o lado do polegar
   em relação à palma ou ao dorso, a quantidade de dedos, a flexão e a
   separação entre as mãos de pessoas diferentes. Confira as articulações e
   os trajetos anatômicos com as fontes. Corrija ou descarte imagens ambíguas.
2. Gere em 3:2. Mantenha o gesto e os detalhes essenciais dentro dos 75%
   centrais da altura para o recorte 16:9. Exporte em WebP de 1200 × 800 px
   com menos de 150 kB. Confira o card no grid a 390 e 1440 px e compare
   a proposta com a capa atual. Se a atual comunicar melhor ou refletir
   uma decisão aprovada, proponha conservá-la.
3. Entregue a imagem selecionada por slug, o prompt final de geração,
   as referências efetivamente usadas e a evidência da conferência.
   Registre a conferência editorial e técnica. Indique os pontos que
   precisam de revisão pelo profissional responsável.
```

## Exemplos de aplicação

- **Recuperação do túnel do carpo.** Uma mão com curativo discreto vira a página de um caderno. O gesto dá escala à imagem e situa o tema no cotidiano.
- **Tala noturna.** Uma órtese em uso, em cena de quarto, dá contexto à pergunta do artigo sobre sintomas à noite.
- **Plexo braquial em adultos.** Um recorte do ombro serve para mostrar a relação entre clavícula e nervos. Uma sessão de reabilitação funciona como cena de apoio humano.
- **Plexo braquial em bebês.** Quando o briefing pede preservar a palma aberta já escolhida, verifique o lado do polegar e qual braço está apoiado antes de considerar qualquer substituição.

Veja as composições de referência da revisão editorial de novembro. [PR #30](https://github.com/pauloaraujoneuro/web/pull/30)

## Integração no site

- Salve capas em `public/images/cards/<slug>.webp`. Para uma capa nova, aponte o `cardImage` do artigo para o arquivo e registre as dimensões no [catálogo de capas](../content/card-images.ts).
- Os cards tratam a capa como decorativa. Quando a imagem for necessária para entender a explicação do artigo, use o fluxo de figura didática com texto alternativo e legenda conforme o conteúdo.
- Para adicionar capas, atualize a [lista de cobertura](../tests/fixtures/card-banners.ts) e as [contagens verificadas](../tests/unit/card-images.test.ts). Rode `npm run check` e confira as imagens servidas pelo navegador.
