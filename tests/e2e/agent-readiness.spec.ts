import { expect, test, type APIResponse } from "@playwright/test";

/**
 * Agent-facing HTTP contract, checked against the real server: Markdown
 * negotiation on every page URL, a Markdown 404, 406 when nothing fits, and
 * the trust pages agents look for. Header assertions read the final response,
 * because Next.js rewrites `Vary` on its own and a passing unit test proves
 * nothing about what leaves the server.
 */

const CHROME_ACCEPT =
  "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8";

/** Every `Vary` field, split into tokens: multiple header lines combine. */
function varyTokens(response: APIResponse) {
  return response
    .headersArray()
    .filter((header) => header.name.toLowerCase() === "vary")
    .flatMap((header) => header.value.split(","))
    .map((token) => token.trim().toLowerCase());
}

test("the homepage answers Markdown to agents and HTML to browsers", async ({ request }) => {
  const markdown = await request.get("/", { headers: { Accept: "text/markdown" } });
  expect(markdown.status()).toBe(200);
  expect(markdown.headers()["content-type"]).toBe("text/markdown; charset=utf-8");
  expect(varyTokens(markdown)).toContain("accept");
  expect(markdown.headers()["link"]).toBe('<https://www.pauloaraujoneuro.com.br>; rel="canonical"');
  const body = await markdown.text();
  expect(body.startsWith("# Dr. Paulo Araújo")).toBe(true);
  expect(body).toContain("CRM-MS 16562");
  expect(body).not.toContain("<html");

  for (const accept of ["text/html", CHROME_ACCEPT, "*/*"]) {
    const html = await request.get("/", { headers: { Accept: accept } });
    expect(html.status(), accept).toBe(200);
    expect(html.headers()["content-type"], accept).toContain("text/html");
    expect(await html.text(), accept).toContain("<html");
  }
});

test("quality values decide between the representations", async ({ request }) => {
  const cases: Array<[string, string]> = [
    ["text/markdown, text/html;q=0.8", "text/markdown"],
    ["text/html;q=0.5, text/markdown;q=0.9", "text/markdown"],
    ["text/markdown;q=0, text/html", "text/html"],
    ["text/html, text/markdown", "text/html"],
  ];
  for (const [accept, expected] of cases) {
    const response = await request.get("/sobre", { headers: { Accept: accept } });
    expect(response.status(), accept).toBe(200);
    expect(response.headers()["content-type"], accept).toContain(expected);
  }
});

test("a request no representation satisfies gets 406, not a guess", async ({ request }) => {
  const response = await request.get("/", { headers: { Accept: "application/pdf" } });
  expect(response.status()).toBe(406);
  expect(varyTokens(response)).toContain("accept");
  expect(await response.text()).toContain("text/markdown");
});

test("every published page has a Markdown representation at its own URL", async ({ request }) => {
  const sitemap = await (await request.get("/sitemap.xml")).text();
  const paths = [...sitemap.matchAll(/<loc>https:\/\/www\.pauloaraujoneuro\.com\.br([^<]*)<\/loc>/g)].map(
    (match) => match[1] || "/",
  );
  expect(paths.length).toBeGreaterThan(40);

  for (const path of paths) {
    const response = await request.get(path, { headers: { Accept: "text/markdown" } });
    expect(response.status(), path).toBe(200);
    expect(response.headers()["content-type"], path).toBe("text/markdown; charset=utf-8");
    expect((await response.text()).startsWith("# "), path).toBe(true);
  }
});

test("unknown paths answer a Markdown 404 to agents and the HTML page to browsers", async ({ request }) => {
  const markdown = await request.get("/__agent-404-probe", { headers: { Accept: "text/markdown" } });
  expect(markdown.status()).toBe(404);
  expect(markdown.headers()["content-type"]).toBe("text/markdown; charset=utf-8");
  expect(varyTokens(markdown)).toContain("accept");
  const body = await markdown.text();
  expect(body.length).toBeGreaterThanOrEqual(20);
  expect(body).toContain("(https://www.pauloaraujoneuro.com.br/llms.txt)");
  // The requested path is never reflected into the document.
  expect(body).not.toContain("__agent-404-probe");

  const html = await request.get("/__agent-404-probe", { headers: { Accept: "text/html" } });
  expect(html.status()).toBe(404);
  expect(html.headers()["content-type"]).toContain("text/html");
});

test("the internal Markdown route has no public URL of its own", async ({ request }) => {
  for (const accept of ["text/markdown", "text/html"]) {
    const response = await request.get("/markdown-variant/sobre", { headers: { Accept: accept } });
    expect(response.status(), accept).toBe(404);
  }
});

test("spoofed framework headers cannot reach the Markdown helper", async ({ request }) => {
  const spoofs: Array<Record<string, string>> = [
    { RSC: "1" },
    { RSC: "1", "Next-Router-Prefetch": "1" },
    { "Next-Action": "7f".repeat(21) },
    { "x-middleware-subrequest": "proxy:proxy:proxy:proxy:proxy" },
    { "x-middleware-rewrite": "/markdown-variant/sobre" },
  ];
  for (const path of ["/markdown-variant/sobre", "/markdown-variant", "/markdown-variant/sobre.md"]) {
    for (const headers of spoofs) {
      const label = `${path} ${JSON.stringify(headers)}`;
      const response = await request.get(path, { headers: { Accept: "text/markdown", ...headers } });
      expect(response.status(), label).toBe(404);
      expect(await response.text(), label).not.toContain("# Sobre o Dr.");
    }
    const post = await request.post(path, { headers: { Accept: "text/markdown" } });
    expect(post.status(), `POST ${path}`).toBe(404);
  }
});

test("HEAD requests negotiate exactly like GET", async ({ request }) => {
  const markdown = await request.head("/sobre", { headers: { Accept: "text/markdown" } });
  expect(markdown.status()).toBe(200);
  expect(markdown.headers()["content-type"]).toBe("text/markdown; charset=utf-8");
  expect(varyTokens(markdown)).toContain("accept");

  const missing = await request.head("/__agent-404-probe", { headers: { Accept: "text/markdown" } });
  expect(missing.status()).toBe(404);
  expect(missing.headers()["content-type"]).toBe("text/markdown; charset=utf-8");

  const html = await request.head("/sobre", { headers: { Accept: "text/html" } });
  expect(html.status()).toBe(200);
  expect(html.headers()["content-type"]).toContain("text/html");
});

test("client navigations still receive RSC payloads, not Markdown", async ({ page }) => {
  const flight: string[] = [];
  page.on("response", (response) => {
    if (response.url().includes("_rsc=")) flight.push(response.headers()["content-type"] ?? "");
  });
  await page.goto("/contato");
  await page.getByRole("navigation", { name: "Navegação estrutural" }).getByRole("link", { name: "Início" }).click();
  await expect(page).toHaveURL(/\/$/);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Paulo Araújo");
  expect(flight.length).toBeGreaterThan(0);
  for (const type of flight) expect(type).toContain("text/x-component");
});

test("framework requests and binary assets are never negotiated", async ({ request, page }) => {

  const action = await request.post("/", {
    headers: { Accept: "text/markdown", "Next-Action": "7f".repeat(21) },
  });
  expect(action.status()).not.toBe(406);
  expect(action.headers()["content-type"] ?? "").not.toContain("text/markdown");

  const image = await request.get("/images/conteudo/anatomia-plexo-braquial.webp", {
    headers: { Accept: "text/markdown" },
  });
  expect(image.status()).toBe(200);
  expect(image.headers()["content-type"]).toBe("image/webp");

  await page.goto("/");
  const chunk = await page.locator('script[src^="/_next/static/"]').first().getAttribute("src");
  const script = await request.get(chunk!, { headers: { Accept: "text/markdown" } });
  expect(script.status()).toBe(200);
  expect(script.headers()["content-type"]).toContain("javascript");
});

test("Markdown links and images are absolute and point at real pages", async ({ request }) => {
  const body = await (
    await request.get("/blog/pe-caido-tratamento", { headers: { Accept: "text/markdown" } })
  ).text();
  const targets = [...body.matchAll(/\]\(([^)\s]+)/g)].map((match) => match[1]);
  expect(targets.length).toBeGreaterThan(5);
  for (const target of targets) {
    expect(target, target).toMatch(/^(https:\/\/|mailto:)/);
  }
  const internal = [
    ...new Set(
      targets
        .filter((target) => target.startsWith("https://www.pauloaraujoneuro.com.br/"))
        .map((target) => new URL(target).pathname),
    ),
  ];
  for (const path of internal) {
    const response = await request.get(path, { maxRedirects: 0 });
    expect(response.status(), path).toBe(200);
  }
});

test("files keep their single type whatever the client asks for", async ({ request }) => {
  const llms = await request.get("/llms.txt", { headers: { Accept: "text/markdown" } });
  expect(llms.status()).toBe(200);
  expect(llms.headers()["content-type"]).toContain("text/plain");

  const image = await request.get("/sobre/opengraph-image", { headers: { Accept: "text/markdown" } });
  expect(image.status()).toBe(200);
  expect(image.headers()["content-type"]).toContain("image/png");
});

test("conventional trust paths lead to the Portuguese pages", async ({ request }) => {
  const redirects: Array<[string, string]> = [
    ["/about", "/sobre"],
    ["/contact", "/contato"],
    ["/privacy", "/privacidade"],
  ];
  for (const [from, to] of redirects) {
    const response = await request.get(from, { maxRedirects: 0 });
    expect(response.status(), from).toBe(308);
    expect(response.headers()["location"], from).toBe(to);
  }
});

test("contact and privacy pages render real content and are linked from the footer", async ({ page }) => {
  for (const [path, heading] of [
    ["/contato", "Contato e agendamento de consultas"],
    ["/privacidade", "Privacidade e uso de dados neste site"],
  ] as const) {
    await page.goto(path);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(heading);
    const text = await page.locator("main article").innerText();
    expect(text.length, path).toBeGreaterThanOrEqual(500);
  }

  await page.goto("/");
  const footer = page.locator("footer");
  await expect(footer.getByRole("link", { name: "Contato", exact: true })).toHaveAttribute("href", "/contato");
  await expect(footer.getByRole("link", { name: "Privacidade" })).toHaveAttribute("href", "/privacidade");
});

test("the homepage identifies the practice as an Organization with contact and address", async ({ page }) => {
  await page.goto("/");
  const documents = await page
    .locator('script[type="application/ld+json"]')
    .evaluateAll((nodes) => nodes.map((node) => JSON.parse(node.textContent ?? "{}")));
  const organization = documents.find(
    (document) => Array.isArray(document["@type"]) && document["@type"].includes("Organization"),
  );
  expect(organization).toBeTruthy();
  expect(organization.contactPoint.contactType).toBeTruthy();
  expect(organization.contactPoint.telephone).toBe("+55 67 4042-0561");
  expect(organization.address["@type"]).toBe("PostalAddress");
});
