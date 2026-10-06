/**
 * Intrinsic size of every illustration under `public/images/conteudo/`, keyed by
 * the public path an article or treatment section references.
 *
 * Size belongs to the file, so it lives here once. Alt text and caption belong
 * to the place the image is used — the same anatomy drawing says something
 * different beside a diagnosis than beside a surgical step — so they stay with
 * the Markdown or the catalog entry that shows it.
 */
export const FIGURE_SIZES: Record<string, { width: number; height: number }> = {
  "/images/conteudo/anatomia-plexo-braquial.webp": { width: 1024, height: 559 },
  "/images/conteudo/atrofia-muscular-apos-denervacao.webp": { width: 1024, height: 559 },
  "/images/conteudo/degeneracao-coto-distal-nervo.webp": { width: 1024, height: 559 },
  "/images/conteudo/diferenca-nervo-e-tendao.webp": { width: 1024, height: 559 },
  "/images/conteudo/enxerto-de-nervo-etapas-cirurgicas.webp": { width: 1024, height: 559 },
  "/images/conteudo/mecanismo-lesao-plexo-braquial-acidente-moto.webp": { width: 1024, height: 559 },
  "/images/conteudo/neurolise-liberacao-do-nervo.webp": { width: 1024, height: 559 },
  "/images/conteudo/neurorrafia-direta-passo-a-passo.webp": { width: 1024, height: 559 },
  "/images/conteudo/pe-caido-nervo-fibular.webp": { width: 1024, height: 559 },
  "/images/conteudo/regeneracao-nervo-apos-reparo.webp": { width: 1024, height: 559 },
  "/images/conteudo/regeneracao-nervosa-atraves-do-enxerto.webp": { width: 1024, height: 559 },
  "/images/conteudo/reparo-enxerto-nervo-fibular.webp": { width: 1024, height: 559 },
  "/images/conteudo/transferencia-nervo-acessorio-lesao-cervical-alta.webp": { width: 1024, height: 559 },
  "/images/conteudo/transferencia-nervosa-extensao-cotovelo-triceps.webp": { width: 1024, height: 559 },
  "/images/conteudo/transferencia-nervosa-flexao-cotovelo-tetraplegia.webp": { width: 1024, height: 559 },
  "/images/conteudo/transferencia-nervosa-pinca-interosseo-anterior.webp": { width: 1024, height: 559 },
  "/images/conteudo/transferencia-supinador-interosseo-posterior.webp": { width: 1024, height: 559 },
  "/images/conteudo/transferencia-tendao-pe-caido.webp": { width: 1024, height: 552 },
};
