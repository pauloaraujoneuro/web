import { expect, test, type Page } from "@playwright/test";

/**
 * Instrumentation, with every third-party request intercepted and answered by
 * a stub: nothing here reaches Vercel, Google or WhatsApp. The GTM checks run
 * only when the build carries a tag ID (`NEXT_PUBLIC_GOOGLE_TAG_ID`); the
 * default `npm run check` build has none, so they skip there.
 */

interface Counts {
  insights: number;
  speedInsights: number;
  gtm: number;
  thirdParty: string[];
}

async function interceptAnalytics(page: Page) {
  const counts: Counts = { insights: 0, speedInsights: 0, gtm: 0, thirdParty: [] };
  await page.route("**/_vercel/insights/**", (route) => {
    if (route.request().url().endsWith("/script.js")) counts.insights += 1;
    return route.fulfill({ status: 200, contentType: "text/javascript", body: "" });
  });
  await page.route("**/_vercel/speed-insights/**", (route) => {
    if (route.request().url().endsWith("/script.js")) counts.speedInsights += 1;
    return route.fulfill({ status: 200, contentType: "text/javascript", body: "" });
  });
  await page.route("https://www.googletagmanager.com/**", (route) => {
    if (route.request().url().includes("/gtm.js")) counts.gtm += 1;
    return route.fulfill({ status: 200, contentType: "text/javascript", body: "" });
  });
  await page.route(/^https:\/\/(?!www\.googletagmanager\.com)[^/]*(google|doubleclick|facebook)[^/]*\//, (route) => {
    counts.thirdParty.push(route.request().url());
    return route.abort();
  });
  await page.route("https://wa.me/**", (route) => route.abort());
  return counts;
}

const hasGtm = (page: Page) =>
  page.evaluate(() => Array.isArray((window as unknown as { dataLayer?: unknown[] }).dataLayer));

test("each analytics SDK initialises once and survives client navigation", async ({ page }) => {
  const counts = await interceptAnalytics(page);
  await page.goto("/contato");
  await expect.poll(() => counts.insights).toBe(1);
  await expect.poll(() => counts.speedInsights).toBe(1);

  // Client-side navigation (a next/link) keeps the root layout mounted: no
  // second initialisation. Footer and header links are plain anchors, so
  // they reload the page and initialise once per load by design.
  await page.getByRole("navigation", { name: "Navegação estrutural" }).getByRole("link", { name: "Início" }).click();
  await expect(page).toHaveURL(/\/$/);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Paulo Araújo");
  expect(counts.insights).toBe(1);
  expect(counts.speedInsights).toBe(1);

  if (!(await hasGtm(page))) return;
  expect(counts.gtm).toBe(1);
  const starts = await page.evaluate(
    () =>
      ((window as unknown as { dataLayer: Array<Record<string, unknown>> }).dataLayer).filter(
        (entry) => entry.event === "gtm.js",
      ).length,
  );
  expect(starts).toBe(1);
});

test("WhatsApp clicks are tracked without the prefilled message", async ({ page, context }) => {
  await interceptAnalytics(page);
  context.on("page", (popup) => popup.close());
  await page.goto("/contato");
  test.skip(!(await hasGtm(page)), "build has no GTM tag ID");

  const ctas = [
    page.getByRole("link", { name: "Falar no WhatsApp" }),
    page.locator("#canais").getByRole("link", { name: /\+55 67 4042-0561/ }),
  ];
  for (const cta of ctas) await cta.click();

  const events = await page.evaluate(() =>
    ((window as unknown as { dataLayer: Array<Record<string, unknown>> }).dataLayer).filter(
      (entry) => entry.event === "whatsapp_click",
    ),
  );
  expect(events.map((event) => event.whatsapp_location)).toEqual([
    "floating_button",
    "trust_contato_canais",
  ]);
  for (const event of events) {
    expect(event.whatsapp_url).toBe("https://wa.me/556740420561");
    expect(JSON.stringify(event)).not.toMatch(/text=|Ol%C3%A1|Olá/);
  }
});
