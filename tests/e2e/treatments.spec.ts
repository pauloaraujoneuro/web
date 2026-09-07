import { expect, test } from "@playwright/test";

test("treatment hub groups published catalog entries", async ({ page }) => {
  await page.goto("/tratamentos");

  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Cuidado neurocirúrgico orientado à função e à qualidade de vida",
  );
  for (const heading of ["Nervo periférico", "Cirurgia da coluna", "Reabilitação neurocirúrgica"]) {
    await expect(page.getByRole("heading", { level: 2, name: heading })).toBeVisible();
  }
  await expect(page.getByRole("link", { name: /Saiba mais/ })).toHaveCount(14);
  await expect(page.locator("#peripheral-nerve").getByRole("article")).toHaveCount(6);
  await expect(page.locator("#spine").getByRole("article")).toHaveCount(5);
  await expect(page.locator("#rehabilitation").getByRole("article")).toHaveCount(3);

  // The chip tells the reader whether a card opens an area, a condition or a
  // procedure, so each kind must keep its own styling hook.
  await expect(page.locator("#peripheral-nerve .card-eyebrow-overview")).toHaveCount(1);
  await expect(page.locator("#peripheral-nerve .card-eyebrow-condition")).toHaveCount(4);
  await expect(page.locator("#peripheral-nerve .card-eyebrow-procedure")).toHaveCount(1);
});

test("published treatment renders the complete educational template", async ({ page }) => {
  await page.goto("/tratamentos/cirurgia-nervos-perifericos");

  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Cirurgia de nervos periféricos");
  await expect(page.getByRole("heading", { level: 2, name: "Limites e alternativas de cuidado" })).toBeVisible();
  await expect(page.getByRole("heading", { level: 2, name: "Etapas do cuidado" })).toBeVisible();
  await expect(page.getByText("Informação médica responsável")).toBeVisible();
  await expect(page.getByLabel("Autoria médica")).toContainText("CRM-PR 37567");
  await expect(page.getByRole("heading", { level: 2, name: "Leituras relacionadas" })).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Como se preparar para uma consulta neurocirúrgica" }),
  ).toHaveAttribute("href", "/blog/como-se-preparar-para-consulta-neurocirurgica");
  await expect(page.getByRole("navigation", { name: "Nesta página" })).toBeVisible();
});

test("every catalog treatment is reachable, canonical and open to search", async ({ page, request }) => {
  await page.goto("/tratamentos");
  await page.getByRole("link", { name: "Saiba mais" }).nth(1).click();

  await expect(page).toHaveURL(/\/tratamentos\/lesao-plexo-braquial$/);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Lesão do plexo braquial");
  await expect(page.locator('meta[name="robots"]')).not.toHaveAttribute(
    "content",
    /noindex/,
  );
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    "https://www.pauloaraujoneuro.com.br/tratamentos/lesao-plexo-braquial",
  );
  await expect(page.getByRole("link", { name: /Agendar avaliação/ })).toBeVisible();

  const sitemap = await (await request.get("/sitemap.xml")).text();
  expect(sitemap).toContain("/tratamentos/lesao-plexo-braquial<");
});

test("an approved treatment describes itself as reviewed medical content", async ({ page }) => {
  await page.goto("/tratamentos/hernia-disco");

  const graph = JSON.parse(
    await page.locator('script[type="application/ld+json"]').last().textContent() ?? "{}",
  )["@graph"];
  const types = graph.map((node: { "@type": string }) => node["@type"]);

  expect(types).toContain("BreadcrumbList");
  expect(types).toContain("MedicalWebPage");
  expect(types).toContain("FAQPage");
});

test("shares carry the page's own Twitter card, not the homepage's", async ({ page }) => {
  await page.goto("/tratamentos/hernia-disco");

  await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute(
    "content",
    "summary_large_image",
  );
  const twitterTitle = await page
    .locator('meta[name="twitter:title"]')
    .getAttribute("content");
  const ogTitle = await page
    .locator('meta[property="og:title"]')
    .getAttribute("content");
  expect(twitterTitle).toBe(ogTitle);
  expect(twitterTitle).toContain("Hérnia de disco");
});

test("unknown treatment returns not found", async ({ page }) => {
  const response = await page.goto("/tratamentos/nao-existe");

  expect(response?.status()).toBe(404);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Página não encontrada");
});
