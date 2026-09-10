import { expect, test } from "@playwright/test";
import { CONTACT_WHATSAPP_NUMBER } from "../../constants";

test("profile separates current attendance from education and prior work", async ({ page }) => {
  await page.goto("/sobre");

  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Dr. Paulo Araújo");
  await expect(page.getByText("Atendimento presencial atual")).toBeVisible();
  await expect(page.getByText("INCC - Instituto de Nervos, Cérebro e Coluna · Campo Grande - MS")).toBeVisible();
  await expect(page.getByRole("heading", { level: 2, name: "Formação e fellowship" })).toBeVisible();
  await expect(page.getByRole("heading", { level: 2, name: "Atuações anteriores" })).toBeVisible();
  await expect(page.getByText("Curitiba, PR").first()).toBeVisible();
});

test("profile exposes canonical credentials and tracked appointment path", async ({ page }) => {
  await page.goto("/sobre");

  await expect(page.getByText("CRM-MS 16562", { exact: false }).first()).toBeVisible();
  await expect(page.getByText("RQE 9823", { exact: false }).first()).toBeVisible();
  const cta = page.getByRole("link", { name: /Agendar avaliação/ }).last();
  await expect(cta).toHaveAttribute("href", new RegExp(`wa\\.me/${CONTACT_WHATSAPP_NUMBER}`));
});
