import assert from "node:assert/strict";
import test from "node:test";
import { getPublicRouteInventory, getSitemapEntries } from "../../app/lib/seo";
import { SITE_URL } from "../../constants";

test("SEO inventory contains every and only published canonical route once", () => {
  const paths = getPublicRouteInventory().map((entry) => entry.path);
  assert.deepEqual(paths, [
    "",
    "/sobre",
    "/tratamentos",
    "/blog",
    "/perguntas-frequentes",
    "/locais-de-atendimento",
    "/tratamentos/cirurgia-nervos-perifericos",
    "/tratamentos/cirurgia-coluna",
    "/tratamentos/reabilitacao-neurocirurgica",
    "/blog/como-se-preparar-para-consulta-neurocirurgica",
    "/locais-de-atendimento/campo-grande",
  ]);
  assert.equal(new Set(paths).size, paths.length);
});

test("sitemap maps canonical URLs and content dates deterministically", () => {
  const sitemap = getSitemapEntries();
  assert.equal(sitemap.length, 11);
  assert.equal(sitemap[0].url, SITE_URL);
  assert.equal(sitemap.at(-1)?.url, `${SITE_URL}/locais-de-atendimento/campo-grande`);
  assert.ok(sitemap.every((entry) => entry.lastModified === "2026-09-06"));
});
