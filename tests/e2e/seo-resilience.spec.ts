import { expect, test } from "@playwright/test";

const expectedRoutes = [
  "",
  "/sobre",
  "/tratamentos",
  "/blog",
  "/perguntas-frequentes",
  "/locais-de-atendimento",
  "/tratamentos/cirurgia-nervos-perifericos",
  "/tratamentos/cirurgia-coluna",
  "/tratamentos/reabilitacao-neurocirurgica",
  "/blog/como-se-preparar-para-consulta-neurocirurgica",
  "/locais-de-atendimento/campo-grande",
  "/clinica-protrauma",
];

test("public routes expose exact unique canonical URLs", async ({ page }) => {
  const canonicals = new Set<string>();
  for (const route of expectedRoutes) {
    await page.goto(route || "/");
    const canonical = await page.locator('link[rel="canonical"]').getAttribute("href");
    expect(canonical).toBe(`https://www.pauloaraujoneuro.com.br${route}`);
    canonicals.add(canonical!);
  }
  expect(canonicals.size).toBe(expectedRoutes.length);
});

test("robots and sitemap expose the same approved discovery boundary", async ({ request }) => {
  const robots = await request.get("/robots.txt");
  await expect(robots).toBeOK();
  expect(await robots.text()).toContain("Allow: /");

  const sitemap = await request.get("/sitemap.xml");
  await expect(sitemap).toBeOK();
  const xml = await sitemap.text();
  for (const route of expectedRoutes) {
    expect(xml).toContain(`<loc>https://www.pauloaraujoneuro.com.br${route}</loc>`);
  }
  expect((xml.match(/<loc>/g) ?? []).length).toBe(expectedRoutes.length);
});

test("llms.txt exposes the same approved boundary as the sitemap", async ({ request }) => {
  const response = await request.get("/llms.txt");
  await expect(response).toBeOK();
  expect(response.headers()["content-type"]).toContain("text/plain");

  const body = await response.text();
  expect(body.startsWith("# Dr. Paulo Araújo")).toBe(true);
  expect(body).toContain("CRM-PR 37567");
  for (const route of expectedRoutes) {
    expect(body).toContain(`](https://www.pauloaraujoneuro.com.br${route}):`);
  }
  expect((body.match(/^- \[/gm) ?? []).length).toBe(expectedRoutes.length);
  expect(body).not.toContain("/tratamentos/lesao-plexo-braquial");
});

test("robots names assistant crawlers explicitly", async ({ request }) => {
  const robots = await request.get("/robots.txt");
  await expect(robots).toBeOK();
  const body = await robots.text();

  for (const agent of ["GPTBot", "ClaudeBot", "PerplexityBot", "Google-Extended"]) {
    expect(body).toContain(agent);
  }
  expect(body).toContain("Sitemap: https://www.pauloaraujoneuro.com.br/sitemap.xml");
});

test("each route advertises its own generated preview image", async ({ page, request }) => {
  const seen = new Set<string>();

  for (const route of ["", "/tratamentos", "/tratamentos/cirurgia-coluna", "/blog/como-se-preparar-para-consulta-neurocirurgica"]) {
    await page.goto(route || "/");
    const image = await page.locator('meta[property="og:image"]').first().getAttribute("content");
    expect(image, `${route} has no og:image`).toBeTruthy();
    expect(image).toContain("/opengraph-image");
    seen.add(image!.split("?")[0]);
  }
  expect(seen.size).toBe(4);

  const rendered = await request.get("/tratamentos/cirurgia-coluna/opengraph-image");
  await expect(rendered).toBeOK();
  expect(rendered.headers()["content-type"]).toContain("image/png");
});

test("core content and contact links remain usable without JavaScript", async ({ browser }) => {
  const context = await browser.newContext({
    baseURL: "http://127.0.0.1:3100",
    javaScriptEnabled: false,
  });
  const page = await context.newPage();
  await page.goto("/tratamentos/cirurgia-nervos-perifericos");

  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Cirurgia de nervos periféricos");
  await expect(page.getByRole("link", { name: /Agendar avaliação/ })).toHaveAttribute(
    "href",
    /wa\.me\/554120180330\?text=/,
  );
  await expect(page.getByRole("link", { name: "Reabilitação neurocirúrgica" })).toHaveAttribute(
    "href",
    "/tratamentos/reabilitacao-neurocirurgica",
  );
  await context.close();
});
