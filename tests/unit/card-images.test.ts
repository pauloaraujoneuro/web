import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { getVisiblePosts } from "../../app/lib/blog";
import { validatePosts, validateTreatments } from "../../app/lib/content-validation";
import { postCardImage, treatmentCardImage } from "../../app/lib/figures";
import { TREATMENTS } from "../../app/lib/treatments";
import { CARD_IMAGE_SIZES } from "../../content/card-images";
import { POST_BANNER_SLUGS, TREATMENT_BANNER_SLUGS } from "../fixtures/card-banners";

test("all 22 selected banners are assigned to their exact page slugs", () => {
  const posts = getVisiblePosts();
  for (const [slugs, entries] of [[TREATMENT_BANNER_SLUGS, TREATMENTS], [POST_BANNER_SLUGS, posts]] as const) {
    for (const slug of slugs) {
      const entry = entries.find((entry) => entry.slug === slug);
      assert.ok(entry, `${slug} has no page`);
      assert.equal(entry.cardImage, `/images/cards/${slug}.webp`);
    }
  }
  assert.equal(Object.keys(CARD_IMAGE_SIZES).length, 22);
  assert.equal(TREATMENTS.filter((entry) => entry.cardImage).length, 11);
  assert.equal(posts.filter((post) => post.cardImage).length, 11);
});

test("registered banners exist, fit the size budget and have correct intrinsic sizes", () => {
  const used = new Set([...TREATMENTS, ...getVisiblePosts()].map((entry) => entry.cardImage).filter(Boolean));
  const disk = fs.readdirSync(path.join(process.cwd(), "public/images/cards"));
  assert.equal(disk.length, 22);
  for (const [src, size] of Object.entries(CARD_IMAGE_SIZES)) {
    assert.ok(used.has(src), `${src} is unused`);
    const buffer = fs.readFileSync(path.join(process.cwd(), "public", src));
    assert.equal(buffer.toString("ascii", 0, 4), "RIFF");
    assert.equal(buffer.toString("ascii", 8, 12), "WEBP");
    const chunk = buffer.toString("ascii", 12, 16);
    const actual = chunk === "VP8X"
      ? { width: buffer.readUIntLE(24, 3) + 1, height: buffer.readUIntLE(27, 3) + 1 }
      : { width: buffer.readUInt16LE(26) & 0x3fff, height: buffer.readUInt16LE(28) & 0x3fff };
    assert.deepEqual(actual, { width: 1200, height: 800 });
    assert.deepEqual(size, actual, `${src} has stale dimensions`);
    assert.ok(buffer.length < 150 * 1024, `${src} exceeds the card budget`);
  }
});

test("dedicated banners take priority and missing banners fall back to teaching figures or artwork", () => {
  const treatment = TREATMENTS.find((entry) => entry.slug === "pe-caido")!;
  const post = getVisiblePosts().find((entry) => entry.slug === "pe-caido-tratamento")!;
  const cardImage = "/images/cards/hernia-disco.webp";
  assert.equal(treatmentCardImage({ ...treatment, cardImage }), cardImage);
  assert.equal(postCardImage({ ...post, cardImage }), cardImage);
  assert.equal(treatmentCardImage(treatment), "/images/conteudo/pe-caido-nervo-fibular.webp");
  assert.equal(postCardImage(post), "/images/conteudo/pe-caido-nervo-fibular.webp");
  assert.equal(treatmentCardImage({ ...treatment, cardImage: undefined, sections: [] }), undefined);
  assert.equal(postCardImage({ ...post, cardImage: undefined, figures: [] }), undefined);
});

test("both catalogs reject unknown banner paths and allow the field to be omitted", () => {
  const treatment = TREATMENTS.find((entry) => entry.slug === "hernia-disco")!;
  const posts = getVisiblePosts();
  const post = posts.find((entry) => entry.slug === "fisioterapia-apos-cirurgia-de-nervo")!;
  for (const cardImage of ["/images/cards/missing.webp", "https://example.com/image.webp", "", "constructor"]) {
    assert.throws(() => validateTreatments(TREATMENTS.map((entry) => entry === treatment ? { ...entry, cardImage } : entry)), /treatments\.hernia-disco\.cardImage: unregistered image/);
    assert.throws(() => validatePosts(posts.map((entry) => entry === post ? { ...entry, cardImage } : entry), TREATMENTS), /posts\.fisioterapia-apos-cirurgia-de-nervo\.cardImage: unregistered image/);
  }
  assert.doesNotThrow(() => validateTreatments(TREATMENTS.map((entry) => ({ ...entry, cardImage: undefined }))));
  assert.doesNotThrow(() => validatePosts(posts.map((entry) => ({ ...entry, cardImage: undefined })), TREATMENTS));
});
