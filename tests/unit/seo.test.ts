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

test("a treatment awaiting approval stays visible but out of public discovery", () => {
  const visible = getVisibleTreatments().map((entry) => entry.slug);
  const indexable = getPublishedTreatments().map((entry) => entry.slug);

  assert.ok(visible.includes("lesao-plexo-braquial"));
  assert.ok(!indexable.includes("lesao-plexo-braquial"));
  assert.ok(indexable.every((slug) => visible.includes(slug)));
  assert.equal(
    getPublicRouteInventory().some((entry) => entry.path === "/tratamentos/lesao-plexo-braquial"),
    false,
  );
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
  assert.ok(!llms.includes("/tratamentos/lesao-plexo-braquial"));
  for (const heading of ["## Páginas principais", "## Tratamentos", "## Artigos", "## Locais de atendimento"]) {
    assert.ok(llms.includes(heading), `missing ${heading}`);
  }
});
