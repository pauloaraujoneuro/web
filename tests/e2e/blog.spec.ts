import { expect, test } from "@playwright/test";

test("blog hub features a published article once", async ({ page }) => {
  await page.goto("/blog");

  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Conteúdo sobre neurocirurgia, coluna e nervos",
  );
  await expect(page.getByRole("heading", { level: 2, name: "Como se preparar para uma consulta neurocirúrgica" })).toHaveCount(1);
  await expect(page.getByRole("link", { name: /Ler artigo/ }).first()).toHaveAttribute(
    "href",
    "/blog/como-se-preparar-para-consulta-neurocirurgica",
  );
  await expect(page.locator(".post-grid .content-card")).toHaveCount(3);
  await expect(page.locator(".post-grid .card-eyebrow-topic").first()).toHaveText("Nervo periférico");
});

test("every listed article is open to search and present in both discovery files", async ({ page, request }) => {
  await page.goto("/blog/hernia-disco-lombar-quando-operar");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Hérnia de disco lombar");
  await expect(page.locator('meta[name="robots"]')).not.toHaveAttribute(
    "content",
    /noindex/,
  );

  const sitemap = await (await request.get("/sitemap.xml")).text();
  expect(sitemap).toContain("hernia-disco-lombar-quando-operar");
  const llms = await (await request.get("/llms.txt")).text();
  expect(llms).toContain("hernia-disco-lombar-quando-operar");
});

test("article renders markdown headings, attribution, disclaimer, and related links", async ({ page }) => {
  await page.goto("/blog/como-se-preparar-para-consulta-neurocirurgica");

  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Como se preparar para uma consulta neurocirúrgica");
  await expect(page.locator(".markdown-body").getByRole("heading", { level: 2 })).toHaveCount(4);
  await expect(page.getByLabel("Autoria médica")).toContainText("CRM-PR 37567");
  await expect(page.getByText("Aviso de responsabilidade médica")).toBeVisible();
  await expect(page.getByRole("navigation", { name: "Nesta leitura" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Cirurgia de nervos periféricos" })).toHaveAttribute("href", "/tratamentos/cirurgia-nervos-perifericos");
});

test("unknown article returns not found", async ({ page }) => {
  const response = await page.goto("/blog/nao-existe");
  expect(response?.status()).toBe(404);
});
