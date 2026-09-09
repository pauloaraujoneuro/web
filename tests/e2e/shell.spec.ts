import { expect, test } from "@playwright/test";

test("global navigation exposes every epic section", async ({ page }) => {
  await page.goto("/");

  const menuToggle = page.getByLabel("Menu principal");
  if (await menuToggle.isVisible()) {
    await menuToggle.click();
  }

  const expectedLinks = [
    ["Sobre", "/sobre"],
    ["Tratamentos", "/tratamentos"],
    ["Blog", "/blog"],
    ["Dúvidas frequentes", "/perguntas-frequentes"],
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

test("the WhatsApp action keeps its recognisable brand colours", async ({ page }) => {
  await page.goto("/");

  const colours = await page.evaluate(() => {
    const fab = document.querySelector(".fab-whatsapp")!;
    return {
      background: getComputedStyle(fab).backgroundColor,
      glyph: getComputedStyle(fab.querySelector("svg")!).fill,
    };
  });

  // Unlayered `a { color: inherit }` outranks Tailwind's layered utilities, so a
  // text-* class alone cannot hold this glyph white.
  expect(colours.background).toBe("rgb(37, 211, 102)");
  expect(colours.glyph).toBe("rgb(255, 255, 255)");
});

test("homepage area links stay legible on the dark panel", async ({ page }) => {
  await page.goto("/");

  const link = page.locator(".expertise-link").first();
  await expect(link).toHaveAttribute("href", "/tratamentos/cirurgia-nervos-perifericos");
  // Set in CSS, not via a text-* utility: unlayered `a { color: inherit }`
  // outranks Tailwind's layered utilities and would leave this dark on dark.
  await expect(link).toHaveCSS("color", "rgb(220, 234, 241)");
});
