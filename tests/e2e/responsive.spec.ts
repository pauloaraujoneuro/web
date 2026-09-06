import { expect, test } from "@playwright/test";

const publicRoutes = [
  "/sobre",
  "/tratamentos",
  "/tratamentos/cirurgia-nervos-perifericos",
  "/tratamentos/lesao-plexo-braquial",
  "/blog",
  "/blog/como-se-preparar-para-consulta-neurocirurgica",
  "/perguntas-frequentes",
  "/locais-de-atendimento",
  "/locais-de-atendimento/campo-grande",
];

for (const route of publicRoutes) {
  test(`${route} has one H1 and no horizontal overflow`, async ({ page }) => {
    await page.goto(route);
    await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
    const dimensions = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
    }));
    expect(dimensions.scrollWidth).toBeLessThanOrEqual(dimensions.clientWidth);
  });
}

test("every epic route remains usable at 320px", async ({ page }) => {
  test.skip(test.info().project.name !== "mobile-chromium");
  await page.setViewportSize({ width: 320, height: 720 });

  for (const route of publicRoutes) {
    await page.goto(route);
    const dimensions = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
    }));
    expect(dimensions.scrollWidth, `${route} overflowed at 320px`).toBeLessThanOrEqual(
      dimensions.clientWidth,
    );
  }
});

test("mobile menu closes with Escape and restores focus", async ({ page }) => {
  test.skip(test.info().project.name !== "mobile-chromium");
  await page.goto("/tratamentos");
  const toggle = page.getByLabel("Abrir menu");
  await toggle.click();
  await expect(page.locator("details.mobile-menu")).toHaveAttribute("open", "");
  await page.keyboard.press("Escape");
  await expect(page.locator("details.mobile-menu")).not.toHaveAttribute("open", "");
  await expect(toggle).toBeFocused();
});

test("in-page TOC anchors land below the sticky header", async ({ page }) => {
  await page.goto("/tratamentos/mielopatia-cervical");
  await page.getByRole("link", { name: "Conduta" }).click();
  await page.waitForTimeout(900);

  const { sectionTop, headerHeight } = await page.evaluate(() => ({
    sectionTop: document.getElementById("tratamento")!.getBoundingClientRect().top,
    headerHeight: document.querySelector("header.sticky")!.getBoundingClientRect().height,
  }));
  expect(sectionTop).toBeGreaterThanOrEqual(headerHeight);
});

test("FAQ disclosure works with keyboard input", async ({ page }) => {
  await page.goto("/perguntas-frequentes");
  const disclosure = page.locator(".subpage-faq summary").first();
  await disclosure.focus();
  await page.keyboard.press("Enter");
  await expect(page.locator(".subpage-faq").first()).toHaveAttribute("open", "");
  await expect(page.locator(".subpage-faq").first().locator(".faq-answer")).toBeVisible();
});
