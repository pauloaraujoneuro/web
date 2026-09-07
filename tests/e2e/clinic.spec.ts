import { expect, test } from "@playwright/test";

test("the clinic page carries the facility facts and structured data", async ({ page }) => {
  await page.goto("/clinica-protrauma");

  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Clínica Protrauma em Campo Grande - MS",
  );
  await expect(page.getByText("R. 15 de Novembro, 2808", { exact: false }).first()).toBeVisible();
  await expect(page.getByText("79020-300", { exact: false }).first()).toBeVisible();
  await expect(page.getByRole("link", { name: /Falar com a recepção/ })).toHaveAttribute(
    "href",
    "https://wa.me/556799120676",
  );
  await expect(page.getByRole("link", { name: "protrauma.net" })).toHaveAttribute(
    "href",
    "https://www.protrauma.net/",
  );

  const schemas = await page.locator('script[type="application/ld+json"]').allTextContents();
  const clinic = schemas
    .map((value) => JSON.parse(value))
    .find((value) => value["@type"] === "MedicalClinic");
  expect(clinic.address.postalCode).toBe("79020-300");
  expect(clinic.sameAs).toContain("https://www.instagram.com/protraumacampogrande/");
  expect(clinic.openingHoursSpecification[0].opens).toBe("07:00");
});

test("the reception number appears on the clinic page only", async ({ page }) => {
  await page.goto("/clinica-protrauma");
  await expect(page.getByText("(67) 99912-0676")).toBeVisible();

  // Everywhere else keeps the doctor's own number, so enquiries reach him.
  for (const route of ["/", "/locais-de-atendimento", "/locais-de-atendimento/campo-grande"]) {
    await page.goto(route);
    await expect(page.getByText("99912-0676", { exact: false })).toHaveCount(0);
    await expect(page.locator('a[href*="wa.me/556799120676"]')).toHaveCount(0);
  }
});

test("the map is embedded lazily and without the reviews panel", async ({ page }) => {
  await page.goto("/clinica-protrauma");

  const frame = page.locator(".clinic-map iframe");
  await expect(frame).toHaveAttribute("loading", "lazy");
  // A query embed renders a plain map with a pin; a Place embed would add ratings.
  await expect(frame).toHaveAttribute("src", /maps\?q=.*output=embed/);
  await expect(page.getByRole("link", { name: /Abrir no Google Maps/ })).toBeVisible();
});

test("the location page links to the clinic page and shows its map", async ({ page }) => {
  await page.goto("/locais-de-atendimento/campo-grande");

  await expect(page.getByRole("link", { name: /Ver contato e detalhes da clínica/ })).toHaveAttribute(
    "href",
    "/clinica-protrauma",
  );
  await expect(page.locator(".clinic-map iframe")).toHaveCount(1);
});
