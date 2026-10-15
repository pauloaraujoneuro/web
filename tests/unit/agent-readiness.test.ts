import assert from "node:assert/strict";
import test from "node:test";
import {
  getMarkdownDocument,
  getMarkdownNotFound,
  getMarkdownPaths,
} from "../../app/lib/markdown";
import { getLlmsTxt, getPublicRouteInventory } from "../../app/lib/seo";
import { getSiteJsonLd } from "../../app/lib/site-schema";
import { CONTACT_PAGE, PRIVACY_PAGE, TRUST_PAGES } from "../../app/lib/trust-pages";
import { CONTACT_EMAIL, CONTACT_WHATSAPP_FORMATTED, SITE_URL } from "../../constants";

test("every discoverable page has a Markdown representation", () => {
  const markdownPaths = new Set(getMarkdownPaths());
  for (const entry of getPublicRouteInventory()) {
    assert.ok(markdownPaths.has(entry.path), `no Markdown for ${entry.path || "/"}`);
  }
});

test("Markdown documents are self-contained: one H1, absolute links, canonical source", () => {
  for (const path of getMarkdownPaths()) {
    const document = getMarkdownDocument(path)!;
    assert.ok(document.startsWith("# "), `${path} does not open with an H1`);
    assert.equal((document.match(/^# /gm) ?? []).length, 1, `${path} has more than one H1`);
    assert.ok(!/\]\(\s*\//.test(document), `${path} keeps a relative link`);
    assert.ok(document.includes(`Página: ${SITE_URL}${path} `), `${path} does not name its page`);
    assert.ok(!document.includes("undefined"), `${path} rendered an undefined field`);
  }
});

test("Markdown paths normalise the homepage and trailing slashes", () => {
  assert.equal(getMarkdownDocument("/"), getMarkdownDocument(""));
  assert.equal(getMarkdownDocument("/sobre/"), getMarkdownDocument("/sobre"));
  assert.equal(getMarkdownDocument("/nao-existe"), undefined);
});

test("the Markdown 404 explains the error and links back into the site", () => {
  const document = getMarkdownNotFound();
  assert.ok(document.length >= 20);
  assert.ok(document.includes("404"));
  assert.ok(document.includes(`](${SITE_URL}/llms.txt)`));
  assert.ok(document.includes(`](${SITE_URL}/sitemap.xml)`));
});

test("article Markdown carries the body as written, with absolute figures", () => {
  const document = getMarkdownDocument("/blog/pe-caido-tratamento")!;
  assert.ok(document.includes(`](${SITE_URL}/images/conteudo/`));
});

test("trust pages carry substantive text, in HTML and Markdown alike", () => {
  for (const page of TRUST_PAGES) {
    const text = page.sections
      .flatMap((section) => [
        section.heading,
        ...section.paragraphs,
        ...(section.items ?? []).map((item) => `${item.label ?? ""} ${item.text}`),
      ])
      .join(" ");
    assert.ok(text.length >= 500, `${page.path} has only ${text.length} characters`);
    assert.ok(getMarkdownDocument(page.path)!.length >= 500);
  }
});

test("contact and privacy pages publish only the practice's verified channels", () => {
  const contact = getMarkdownDocument(CONTACT_PAGE.path)!;
  assert.ok(contact.includes(CONTACT_WHATSAPP_FORMATTED));
  assert.ok(contact.includes(CONTACT_EMAIL));
  assert.ok(contact.includes("79020-300"));
  const privacy = getMarkdownDocument(PRIVACY_PAGE.path)!;
  assert.ok(privacy.includes("Lei nº 13.709/2018"));
  assert.ok(privacy.includes(CONTACT_EMAIL));
});

test("llms.txt tells agents when to use the site and how to act on it", () => {
  const llms = getLlmsTxt();
  const preamble = llms.slice(0, llms.indexOf("\n## "));

  assert.ok(preamble.includes("Quando usar este site (when to use)"));
  assert.ok(preamble.includes("Quando não usar"));
  assert.ok(preamble.includes("Como agir (how to call)"));
  assert.ok(preamble.includes("lesão do plexo braquial"));
  assert.ok(preamble.includes("hérnia de disco"));
  assert.ok(preamble.includes(CONTACT_WHATSAPP_FORMATTED));
  assert.ok(preamble.includes("Accept: text/markdown"));
  // llms.txt reserves headings for the link sections: the guidance before
  // them is prose and lists only, after the H1 and the blockquote summary.
  assert.equal((preamble.match(/^#/gm) ?? []).length, 1);
  assert.ok(/^> /m.test(preamble));
});

test("the site identity is a top-level Organization with contact point and address", () => {
  const { practice, facility } = getSiteJsonLd("descrição");

  assert.deepEqual(practice["@type"], ["Physician", "Organization"]);
  assert.equal(practice["@context"], "https://schema.org");
  assert.equal(practice.contactPoint["@type"], "ContactPoint");
  assert.ok(practice.contactPoint.contactType);
  assert.equal(practice.contactPoint.telephone, CONTACT_WHATSAPP_FORMATTED);
  assert.equal(practice.contactPoint.email, CONTACT_EMAIL);
  assert.equal(practice.address["@type"], "PostalAddress");
  assert.equal(practice.address.postalCode, "79020-300");
  assert.equal(facility["@type"], "MedicalClinic");
  assert.deepEqual(practice.worksFor, { "@id": facility["@id"] });
});
