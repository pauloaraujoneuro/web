import { expect, test } from "@playwright/test";
import { POST_BANNER_SLUGS, TREATMENT_BANNER_SLUGS } from "../fixtures/card-banners";

for (const [route, slugs] of [["tratamentos", TREATMENT_BANNER_SLUGS], ["blog", POST_BANNER_SLUGS]] as const) {
  test(`${route} shows each selected banner on the matching card`, async ({ page, request }) => {
    await page.goto(`/${route}`);
    for (const slug of slugs) {
      const card = page.locator(".content-card, .featured-post").filter({ has: page.locator(`a[href="/${route}/${slug}"]`) });
      const image = card.locator("img");
      await image.scrollIntoViewIfNeeded();
      await expect(image).toHaveAttribute("src", new RegExp(encodeURIComponent(`/images/cards/${slug}.webp`)));
      await expect(image).toHaveAttribute("alt", "");
      await expect(card.getByRole("img")).toHaveCount(0);
      const title = await card.locator("h2, h3").innerText();
      await expect(card.getByRole("link")).toHaveAccessibleName(
        `${route === "blog" ? "Ler artigo" : "Saiba mais"}: ${title}`,
      );
      await expect(image).toHaveAttribute("width", "1200");
      await expect(image).toHaveAttribute("height", "800");
      await expect.poll(() => image.evaluate((element: HTMLImageElement) => element.complete && element.naturalWidth > 0)).toBe(true);
      const optimizedSrc = await image.getAttribute("src");
      for (const src of [`/images/cards/${slug}.webp`, optimizedSrc!]) {
        const response = await request.get(src);
        expect(response.status(), src).toBe(200);
        expect(response.headers()["content-type"], src).toMatch(/^image\//);
        expect(response.headers()["x-robots-tag"], src).toBeUndefined();
      }
    }
  });
}

test("image cards keep a visible keyboard focus and logical tab order", async ({ page }) => {
  for (const route of ["tratamentos", "blog"]) {
    await page.goto(`/${route}`);
    const links = page.locator(".content-card .card-link, .featured-post > a");
    await links.first().focus();
    await page.keyboard.press("Tab");
    const second = links.nth(1);
    await expect(second).toBeFocused();
    await expect(second.locator("..")).toHaveCSS("outline-style", "solid");
    const bounds = await second.boundingBox();
    expect(bounds!.height).toBeGreaterThanOrEqual(44);
    await page.keyboard.press("Shift+Tab");
    await expect(links.first()).toBeFocused();
    await expect(links.first().locator("..")).toHaveCSS("outline-style", "solid");
  }
});

for (const [route, selector, label] of [
  ["tratamentos", ".content-card", "treatment"],
  ["blog", ".content-card", "blog"],
  ["blog", ".featured-post", "featured blog"],
] as const) {
  test(`${label} card banners, titles and footers show a pointer and open the page`, async ({ page }) => {
    for (const part of ["img", "h2, h3", "a"]) {
      await page.goto(`/${route}`);
      const card = page.locator(selector).first();
      await expect(card.getByRole("link")).toHaveCount(1);
      const href = await card.getByRole("link").getAttribute("href");
      const target = card.locator(part).first();
      await target.scrollIntoViewIfNeeded();
      const bounds = await target.boundingBox();
      expect(bounds).not.toBeNull();
      const point = { x: bounds!.x + bounds!.width / 2, y: bounds!.y + bounds!.height / 2 };
      await page.mouse.move(point.x, point.y);
      await expect.poll(() => page.evaluate(({ x, y }) => {
        const element = document.elementFromPoint(x, y);
        return {
          cursor: element ? getComputedStyle(element).cursor : null,
          href: element?.closest("a")?.getAttribute("href"),
        };
      }, point)).toEqual({ cursor: "pointer", href });
      await page.mouse.click(point.x, point.y);
      await expect(page).toHaveURL(new RegExp(`${href}$`));
    }
  });
}

test("banners preserve keyboard navigation, 16:9 cards and narrow layouts", async ({ page }) => {
  for (const width of [320, 390, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    for (const route of ["tratamentos", "blog"]) {
      await page.goto(`/${route}`);
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
      const media = page.locator(".content-card .card-media, .featured-post-image");
      for (const banner of await media.all()) {
        const box = await banner.boundingBox();
        expect(box).not.toBeNull();
        expect(box!.width / box!.height).toBeCloseTo(16 / 9, 1);
      }
    }
  }
  const link = page.getByRole("link", { name: "Ler artigo: Fisioterapia após cirurgia de nervo: quando começar?" });
  await link.focus();
  await expect(link).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/\/blog\/fisioterapia-apos-cirurgia-de-nervo$/);
  await expect(page.locator(".markdown-body img[src*='cards']")).toHaveCount(0);
});
