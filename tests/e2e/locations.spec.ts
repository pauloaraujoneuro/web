import { expect, test } from "@playwright/test";

test("location hub exposes only the active Campo Grande location", async ({ page }) => {
  await page.goto("/locais-de-atendimento");

  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Onde encontrar o Dr. Paulo Araújo");
  await expect(page.getByRole("heading", { level: 2, name: "Campo Grande - MS" })).toHaveCount(1);
  await expect(page.locator(".content-card .card-eyebrow-status")).toHaveText("Atendimento ativo");
  await expect(page.getByText("Curitiba", { exact: false })).toHaveCount(0);
  await expect(page.getByText("União da Vitória", { exact: false })).toHaveCount(0);
});

test("Campo Grande page renders confirmed fields and omits unconfirmed address", async ({ page }) => {
  await page.goto("/locais-de-atendimento/campo-grande");

  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Neurocirurgião em Campo Grande - MS");
  await expect(page.getByRole("heading", { level: 2, name: "Clínica Protrauma" })).toBeVisible();
  await expect(page.getByRole("heading", { level: 2, name: "O que trazer para a consulta" })).toBeVisible();
  await expect(page.locator("address")).toHaveCount(0);
  await expect(page.getByRole("link", { name: "Abrir mapa" })).toHaveCount(0);
  await expect(page.getByRole("link", { name: "Agendar em Campo Grande" })).toHaveAttribute("href", /wa\.me\/554120180330/);
});

test("unknown location returns not found", async ({ page }) => {
  const response = await page.goto("/locais-de-atendimento/nao-existe");
  expect(response?.status()).toBe(404);
});
