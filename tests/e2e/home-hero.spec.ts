import { expect, test, type Page } from "@playwright/test";

const WHATSAPP = /^https:\/\/wa\.me\/556740420561\?text=/;

const heroCtas = (page: Page) =>
  page.locator("#sobre").getByRole("link", { name: "Agendar consulta" });

test.beforeEach(async ({ page }) => {
  await page.route("https://wa.me/**", (route) => route.abort());
});

test("the home opening states specialty and city in the H1", async ({ page }) => {
  await page.goto("/");
  const heading = page.getByRole("heading", { level: 1 });
  await expect(heading).toHaveCount(1);
  await expect(heading).toHaveText("Paulo Araújo Neurocirurgião em Campo Grande - MS");
});

for (const [name, viewport, location] of [
  ["mobile", { width: 390, height: 844 }, "hero_mobile"],
  ["desktop", { width: 1440, height: 900 }, "hero_desktop"],
] as const) {
  test(`${name} hero offers one WhatsApp CTA and a path to treatments`, async ({ page }) => {
    await page.setViewportSize(viewport);
    await page.goto("/");

    const visible = heroCtas(page).filter({ visible: true });
    await expect(visible).toHaveCount(1);
    await expect(visible).toHaveAttribute("href", WHATSAPP);
    await expect(visible).toHaveAttribute("target", "_blank");
    await expect(visible).toHaveAttribute("rel", /noopener/);

    const treatments = page.locator("#sobre").getByRole("link", { name: "Ver tratamentos" });
    await expect(treatments).toBeVisible();
    await expect(treatments).toHaveAttribute("href", "/tratamentos");

    // Both CTAs sit in the first screen on desktop; on phones they follow the
    // portrait and credentials, as the mobile CTA did before.
    if (name === "desktop") {
      const box = await visible.boundingBox();
      expect(box!.y + box!.height).toBeLessThanOrEqual(viewport.height + 200);
    }

    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth > window.innerWidth,
    );
    expect(overflow).toBe(false);

    const hasGtm = await page.evaluate(() =>
      Array.isArray((window as unknown as { dataLayer?: unknown[] }).dataLayer),
    );
    test.skip(!hasGtm, "build has no GTM tag ID");
    await visible.click();
    const events = await page.evaluate(() =>
      ((window as unknown as { dataLayer: Array<Record<string, unknown>> }).dataLayer).filter(
        (entry) => entry.event === "whatsapp_click",
      ),
    );
    expect(events.at(-1)?.whatsapp_location).toBe(location);
    expect(JSON.stringify(events)).not.toMatch(/text=|Olá/);
  });
}
