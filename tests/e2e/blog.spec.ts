import { expect, test } from "@playwright/test";

test("blog hub features a published article once", async ({ page }) => {
  await page.goto("/blog");

  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Conteúdo sobre neurocirurgia, coluna e nervos",
  );
  await expect(page.getByRole("heading", { level: 2, name: "Como se preparar para uma consulta neurocirúrgica" })).toHaveCount(1);
  await expect(page.getByRole("link", { name: /Ler artigo/ })).toHaveAttribute(
    "href",
    "/blog/como-se-preparar-para-consulta-neurocirurgica",
  );
});

test("article renders markdown headings, attribution, disclaimer, and related links", async ({ page }) => {
  await page.goto("/blog/como-se-preparar-para-consulta-neurocirurgica");

  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Como se preparar para uma consulta neurocirúrgica");
  await expect(page.locator(".markdown-body").getByRole("heading", { level: 2 })).toHaveCount(4);
  await expect(page.getByLabel("Autoria médica")).toContainText("CRM-PR 37567");
  await expect(page.getByText("Aviso de responsabilidade médica")).toBeVisible();
  await expect(page.getByRole("navigation", { name: "Índice do artigo" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Cirurgia de nervos periféricos" })).toHaveAttribute("href", "/tratamentos/cirurgia-nervos-perifericos");
});

test("unknown article returns not found", async ({ page }) => {
  const response = await page.goto("/blog/nao-existe");
  expect(response?.status()).toBe(404);
});
