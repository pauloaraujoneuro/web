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

test("the hub carries the questions answered on approved treatment pages", async ({ page }) => {
  await page.goto("/perguntas-frequentes");

  await expect(page.getByText("Quais exames devo levar?", { exact: true })).toBeVisible();
  await expect(
    page.getByText("Quando devo procurar um especialista após o trauma?", { exact: true }),
  ).toBeVisible();
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

test("related links stay legible inside the dark FAQ panel", async ({ page }) => {
  await page.goto("/perguntas-frequentes");
  await page.getByText("Quando a cirurgia é indicada?", { exact: true }).click();

  const colour = await page.evaluate(() => {
    const link = document.querySelector(".faq-list-dark .faq-answer a");
    return link ? getComputedStyle(link).color : null;
  });
  expect(colour).toBe("rgb(204, 231, 244)");
});
