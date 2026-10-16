import { expect, test, type APIRequestContext, type Page } from "@playwright/test";

/**
 * What search engines may index, checked on real responses: canonical content
 * is indexable in both representations; the privacy notice, error pages,
 * internal helpers and generated preview images are not; article illustrations
 * stay indexable and social previews stay fetchable.
 */

const SITE = "https://www.pauloaraujoneuro.com.br";

async function sitemapPaths(request: APIRequestContext) {
  const xml = await (await request.get("/sitemap.xml")).text();
  return [...xml.matchAll(/<loc>https:\/\/www\.pauloaraujoneuro\.com\.br([^<]*)<\/loc>/g)].map(
    (match) => match[1] || "/",
  );
}

async function robotsMeta(page: Page) {
  return page
    .locator('meta[name="robots"], meta[name="googlebot"]')
    .evaluateAll((nodes) =>
      nodes.map((node) => `${node.getAttribute("name")}: ${node.getAttribute("content")}`),
    );
}

test("every sitemap page is indexable as HTML and as Markdown", async ({ request }) => {
  const paths = await sitemapPaths(request);
  for (const path of paths) {
    const html = await request.get(path);
    expect(html.headers()["x-robots-tag"], path).toBeUndefined();
    expect(await html.text(), path).not.toMatch(/<meta name="(robots|googlebot)" content="[^"]*noindex/);

    const markdown = await request.get(path, { headers: { Accept: "text/markdown" } });
    expect(markdown.headers()["x-robots-tag"], `${path} (Markdown)`).toBeUndefined();
    expect(markdown.headers()["link"], `${path} (Markdown)`).toBe(
      `<${SITE}${path === "/" ? "" : path}>; rel="canonical"`,
    );
  }
});

test("the sitemap lists content only", async ({ request }) => {
  const paths = await sitemapPaths(request);
  for (const path of paths) {
    expect(path).not.toMatch(/opengraph-image|markdown-variant|privacidade|^\/(about|contact|privacy)$/);
  }
  expect(paths).toContain("/contato");
});

test("the privacy notice renders for people but stays out of search", async ({ page, request }) => {
  const response = await page.goto("/privacidade");
  expect(response?.status()).toBe(200);
  // Replaces the root policy entirely: no inherited googlebot `index` survives.
  expect(await robotsMeta(page)).toEqual(["robots: noindex, follow"]);

  const markdown = await request.head("/privacidade", { headers: { Accept: "text/markdown" } });
  expect(markdown.status()).toBe(200);
  expect(markdown.headers()["x-robots-tag"]).toBe("noindex, follow");

  const llms = await (await request.get("/llms.txt")).text();
  expect(llms).not.toContain(`${SITE}/privacidade`);
});

test("indexable pages keep the root robots policy, including googlebot", async ({ page }) => {
  await page.goto("/contato");
  const meta = await robotsMeta(page);
  expect(meta).toContain("robots: index, follow");
  expect(meta.find((entry) => entry.startsWith("googlebot:"))).toContain("max-image-preview:large");
});

test("error pages say noindex once, without an inherited index", async ({ page }) => {
  const response = await page.goto("/__indexing-probe");
  expect(response?.status()).toBe(404);
  const meta = await robotsMeta(page);
  expect(meta.length).toBeGreaterThan(0);
  for (const entry of meta) expect(entry).toContain("noindex");
});

test("helper responses carry noindex; redirects stay permanent", async ({ request }) => {
  const missing = await request.get("/__indexing-probe", { headers: { Accept: "text/markdown" } });
  expect(missing.status()).toBe(404);
  expect(missing.headers()["x-robots-tag"]).toBe("noindex");

  const refused = await request.get("/", { headers: { Accept: "application/pdf" } });
  expect(refused.status()).toBe(406);
  expect(refused.headers()["x-robots-tag"]).toBe("noindex");

  for (const method of ["get", "head"] as const) {
    const redirect = await request[method]("/privacy", { maxRedirects: 0 });
    expect(redirect.status(), method).toBe(308);
    expect(redirect.headers()["location"], method).toBe("/privacidade");
  }
});

test("social previews stay fetchable and out of image search", async ({ page, request }) => {
  await page.goto("/blog/pe-caido-tratamento");
  const ogImage = await page.locator('meta[property="og:image"]').first().getAttribute("content");
  const twitterImage = await page.locator('meta[name="twitter:image"]').first().getAttribute("content");
  expect(ogImage).toContain("/opengraph-image");
  expect(twitterImage).toBeTruthy();

  for (const url of [ogImage!, "/opengraph-image"]) {
    const path = url.replace(SITE, "");
    for (const method of ["get", "head"] as const) {
      const response = await request[method](path);
      expect(response.status(), `${method} ${path}`).toBe(200);
      expect(response.headers()["content-type"], `${method} ${path}`).toContain("image/png");
      expect(response.headers()["x-robots-tag"], `${method} ${path}`).toBe("noindex");
    }
  }
});

test("article illustrations stay indexable, original and optimised", async ({ page, request }) => {
  await page.goto("/blog/pe-caido-tratamento");
  const optimised = await page.locator(".content-figure img").first().getAttribute("src");
  expect(optimised).toContain("/_next/image?url=");

  for (const path of [optimised!, "/images/conteudo/anatomia-plexo-braquial.webp"]) {
    const response = await request.get(path);
    expect(response.status(), path).toBe(200);
    expect(response.headers()["content-type"], path).toMatch(/^image\//);
    expect(response.headers()["x-robots-tag"], path).toBeUndefined();
  }
});
