import { expect, test } from "@playwright/test";

test("location hub exposes only the active Campo Grande location", async ({ page }) => {
  await page.goto("/locais-de-atendimento");

  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Onde encontrar o Dr. Paulo Araújo");
  await expect(page.getByRole("heading", { level: 2, name: "Campo Grande - MS" })).toHaveCount(1);
  await expect(page.locator(".location-highlight img")).toBeVisible();
  await expect(page.getByText("R. 15 de Novembro, 2808", { exact: false }).first()).toBeVisible();
  await expect(
    page.locator(".location-highlight").getByRole("link", { name: "Agendar avaliação" }),
  ).toHaveAttribute("href", /wa\.me\/554120180330/);
  await expect(page.getByText("Curitiba", { exact: false })).toHaveCount(0);
  await expect(page.getByText("União da Vitória", { exact: false })).toHaveCount(0);
});

test("Campo Grande page renders the fields the client confirmed", async ({ page }) => {
  await page.goto("/locais-de-atendimento/campo-grande");

  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Neurocirurgião em Campo Grande - MS");
  await expect(
    page.getByRole("heading", { level: 2, name: "Clínica Protrauma", exact: true }),
  ).toBeVisible();
  await expect(page.getByRole("heading", { level: 2, name: "O que trazer para a consulta" })).toBeVisible();
  // Address and hours became publishable once the client supplied them.
  await expect(page.locator("address").first()).toContainText("R. 15 de Novembro, 2808");
  await expect(page.getByText("Segunda a sexta", { exact: false }).first()).toBeVisible();
  await expect(page.getByRole("link", { name: "Agendar em Campo Grande" })).toHaveAttribute("href", /wa\.me\/554120180330/);
});

test("related links carry a label and never point at the current page", async ({ page }) => {
  await page.goto("/locais-de-atendimento/campo-grande");

  await expect(page.locator(".related-link").first().locator(".related-link-eyebrow")).toHaveText(
    "Visão geral da área",
  );
  await expect(
    page.locator('.faq-answer a[href="/locais-de-atendimento/campo-grande"]'),
  ).toHaveCount(0);
});

test("unknown location returns not found", async ({ page }) => {
  const response = await page.goto("/locais-de-atendimento/nao-existe");
  expect(response?.status()).toBe(404);
});
