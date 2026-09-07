import assert from "node:assert/strict";
import test from "node:test";
import { getLlmsTxt, getPublicRouteInventory, getSitemapEntries, isBlogHubIndexable } from "../../app/lib/seo";
import { getPublishedPosts } from "../../app/lib/blog";
import { getPublishedTreatments, getVisibleTreatments } from "../../app/lib/treatments";
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
    "/tratamentos/lesao-plexo-braquial",
    "/tratamentos/transferencia-nervosa-tetraplegia",
    "/tratamentos/sindrome-tunel-carpo",
    "/tratamentos/sindrome-cubital",
    "/tratamentos/sindrome-tunel-tarso",
    "/tratamentos/hernia-disco",
    "/tratamentos/estenose-canal-vertebral",
    "/tratamentos/mielopatia-cervical",
    "/tratamentos/fraturas-coluna",
    "/tratamentos/reeducacao-cortical-biofeedback",
    "/tratamentos/orteses-dinamicas",
    "/blog/como-se-preparar-para-consulta-neurocirurgica",
    "/blog/lesao-plexo-braquial-quando-operar",
    "/blog/hernia-disco-lombar-quando-operar",
    "/blog/transferencia-nervosa-tetraplegia-maos",
    "/locais-de-atendimento/campo-grande",
    "/clinica/protrauma",
  ]);
  assert.equal(new Set(paths).size, paths.length);
});

test("sitemap maps canonical URLs and content dates deterministically", () => {
  const sitemap = getSitemapEntries();
  assert.equal(sitemap.length, 26);
  assert.equal(sitemap[0].url, SITE_URL);
  assert.equal(sitemap.at(-1)?.url, `${SITE_URL}/clinica/protrauma`);
  assert.ok(
    sitemap.every((entry) => /^\d{4}-\d{2}-\d{2}$/.test(String(entry.lastModified))),
  );
  // The homepage is as fresh as the freshest thing it leads to.
  assert.equal(sitemap[0].lastModified, "2026-09-06");
});

test("dated hubs inherit the freshest date of the content they list", () => {
  const inventory = getPublicRouteInventory();
  const dateFor = (path: string) =>
    inventory.find((entry) => entry.path === path)?.lastModified;
  const newestTreatment = inventory
    .filter((entry) => entry.path.startsWith("/tratamentos/"))
    .map((entry) => entry.lastModified)
    .toSorted()
    .at(-1);

  assert.equal(dateFor("/tratamentos"), newestTreatment);
  assert.ok(dateFor("")! >= newestTreatment!);
});

test("an empty blog is noindexable and omitted from public discovery", () => {
  assert.equal(isBlogHubIndexable([]), false);
  assert.equal(isBlogHubIndexable(getPublishedPosts()), true);
  assert.equal(
    getPublicRouteInventory([]).some((entry) => entry.path === "/blog" || entry.path.startsWith("/blog/")),
    false,
  );
});

/**
 * The catalog ships fully published. This is the tripwire: withholding a
 * treatment again has to be a deliberate change that shows up right here.
 */
test("every visible treatment is published to search", () => {
  const visible = getVisibleTreatments();

  assert.equal(visible.length, getPublishedTreatments().length);
  assert.deepEqual(
    visible.filter((entry) => !entry.indexable).map((entry) => entry.slug),
    [],
  );
});

test("the discovery gate still withholds a treatment marked non-indexable", () => {
  const withheld = {
    ...getVisibleTreatments()[0],
    slug: "reservado",
    primaryIntent: "intenção reservada",
    indexable: false,
  };
  const indexable = getPublishedTreatments([...getVisibleTreatments(), withheld]);

  assert.ok(!indexable.some((entry) => entry.slug === "reservado"));
});

test("llms.txt lists exactly the approved routes, grouped by section", () => {
  const inventory = getPublicRouteInventory();
  const llms = getLlmsTxt(inventory);

  for (const entry of inventory) {
    assert.ok(
      llms.includes(`](${SITE_URL}${entry.path}):`),
      `missing ${entry.path}`,
    );
  }
  assert.equal((llms.match(/^- \[/gm) ?? []).length, inventory.length);
  assert.ok(!llms.includes("/tratamentos/nao-aprovado"));
  for (const heading of ["## Páginas principais", "## Tratamentos", "## Artigos", "## Locais de atendimento"]) {
    assert.ok(llms.includes(heading), `missing ${heading}`);
  }
});
