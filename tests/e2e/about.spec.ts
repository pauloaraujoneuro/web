import { expect, test } from "@playwright/test";

test("profile separates current attendance from education and prior work", async ({ page }) => {
  await page.goto("/sobre");

  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Dr. Paulo Araújo");
  await expect(page.getByText("Atendimento presencial atual")).toBeVisible();
  await expect(page.getByText("Clínica Protrauma · Campo Grande - MS")).toBeVisible();
  await expect(page.getByRole("heading", { level: 2, name: "Formação e fellowship" })).toBeVisible();
  await expect(page.getByRole("heading", { level: 2, name: "Atuações anteriores" })).toBeVisible();
  await expect(page.getByText("Curitiba, PR").first()).toBeVisible();
});

test("profile exposes canonical credentials and tracked appointment path", async ({ page }) => {
  await page.goto("/sobre");

  await expect(page.getByText("CRM-PR 37567", { exact: false }).first()).toBeVisible();
  await expect(page.getByText("RQE 29967", { exact: false }).first()).toBeVisible();
  const cta = page.getByRole("link", { name: /Agendar avaliação/ }).last();
  await expect(cta).toHaveAttribute("href", /wa\.me\/554120180330/);
});
