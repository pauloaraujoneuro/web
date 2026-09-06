import { expect, test } from "@playwright/test";

test("FAQ page groups only non-empty published categories", async ({ page }) => {
  await page.goto("/perguntas-frequentes");

  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Perguntas frequentes sobre consulta e cuidado neurocirúrgico",
  );
  await expect(page.getByRole("heading", { level: 3, name: "Consulta" })).toBeVisible();
  await expect(page.getByRole("heading", { level: 3, name: "Tratamentos" })).toBeVisible();
  await expect(page.getByRole("heading", { level: 3, name: "Atendimento" })).toBeVisible();
  await expect(page.getByRole("heading", { level: 3, name: "Recuperação" })).toHaveCount(0);
});

test("visible FAQ answer exactly matches structured data", async ({ page }) => {
  await page.goto("/perguntas-frequentes");

  const question = "Como é a primeira consulta?";
  await page.getByText(question, { exact: true }).click();
  const visibleAnswer = await page.locator(".subpage-faq").first().locator(".faq-answer p").innerText();
  const structuredData = await page.locator('script[type="application/ld+json"]').allTextContents();
  const faqSchema = structuredData.map((value) => JSON.parse(value)).find((value) => value["@type"] === "FAQPage");
  const schemaAnswer = faqSchema.mainEntity.find((item: { name: string }) => item.name === question).acceptedAnswer.text;

  expect(schemaAnswer).toBe(visibleAnswer);
});
