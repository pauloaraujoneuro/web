import { expect, test } from "@playwright/test";

test("treatment hub groups published catalog entries", async ({ page }) => {
  await page.goto("/tratamentos");

  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Cuidado neurocirúrgico orientado à função e à qualidade de vida",
  );
  for (const heading of ["Nervo periférico", "Cirurgia da coluna", "Reabilitação neurocirúrgica"]) {
    await expect(page.getByRole("heading", { level: 2, name: heading })).toBeVisible();
  }
  await expect(page.getByRole("link", { name: /Saiba mais/ })).toHaveCount(3);
});

test("published treatment renders the complete educational template", async ({ page }) => {
  await page.goto("/tratamentos/cirurgia-nervos-perifericos");

  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Cirurgia de nervos periféricos");
  await expect(page.getByRole("heading", { level: 2, name: "Limites e alternativas de cuidado" })).toBeVisible();
  await expect(page.getByRole("heading", { level: 2, name: "Etapas do cuidado" })).toBeVisible();
  await expect(page.getByText("Informação médica responsável")).toBeVisible();
  await expect(page.getByLabel("Autoria médica")).toContainText("CRM-PR 37567");
});

test("unknown treatment returns not found", async ({ page }) => {
  const response = await page.goto("/tratamentos/nao-existe");

  expect(response?.status()).toBe(404);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Página não encontrada");
});
