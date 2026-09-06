import { expect, test } from "@playwright/test";

test("global navigation exposes every epic section", async ({ page }) => {
  await page.goto("/");

  const menuToggle = page.getByLabel("Abrir menu");
  if (await menuToggle.isVisible()) {
    await menuToggle.click();
  }

  const expectedLinks = [
    ["Sobre", "/sobre"],
    ["Tratamentos", "/tratamentos"],
    ["Blog", "/blog"],
    ["Perguntas", "/perguntas-frequentes"],
    ["Atendimento", "/locais-de-atendimento"],
  ] as const;

  for (const [name, href] of expectedLinks) {
    const link = page.locator("header").getByRole("link", { name, exact: true }).first();
    await expect(link).toHaveAttribute("href", href);
    const box = await link.boundingBox();
    expect(box?.height ?? 0).toBeGreaterThanOrEqual(44);
  }
});

test("mobile page has no horizontal document overflow", async ({ page }) => {
  test.skip(test.info().project.name !== "mobile-chromium");
  await page.goto("/");

  const dimensions = await page.evaluate(() => ({
    scrollWidth: document.documentElement.scrollWidth,
    clientWidth: document.documentElement.clientWidth,
  }));

  expect(dimensions.scrollWidth).toBeLessThanOrEqual(dimensions.clientWidth);
});
