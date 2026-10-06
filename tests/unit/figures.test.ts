import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { getPublishedPost, getPublishedPosts } from "../../app/lib/blog";
import { validatePosts, validateTreatments } from "../../app/lib/content-validation";
import { TREATMENTS } from "../../app/lib/treatments";
import { FIGURE_SIZES } from "../../content/figures";

const FIGURE_DIRECTORY = path.join(process.cwd(), "public", "images", "conteudo");

/** Reads width and height from a WebP header (lossy, lossless or extended). */
function webpSize(file: string) {
  const buffer = fs.readFileSync(file);
  assert.equal(buffer.toString("ascii", 0, 4), "RIFF", `${file} is not RIFF`);
  assert.equal(buffer.toString("ascii", 8, 12), "WEBP", `${file} is not WebP`);
  const chunk = buffer.toString("ascii", 12, 16);
  if (chunk === "VP8 ") {
    return {
      width: buffer.readUInt16LE(26) & 0x3fff,
      height: buffer.readUInt16LE(28) & 0x3fff,
    };
  }
  if (chunk === "VP8L") {
    const bits = buffer.readUInt32LE(21);
    return { width: (bits & 0x3fff) + 1, height: ((bits >> 14) & 0x3fff) + 1 };
  }
  if (chunk === "VP8X") {
    return {
      width: buffer.readUIntLE(24, 3) + 1,
      height: buffer.readUIntLE(27, 3) + 1,
    };
  }
  throw new Error(`${file}: unknown WebP chunk ${chunk}`);
}

function usedFigureSources() {
  return new Set([
    ...getPublishedPosts().flatMap((post) => post.figures.map((figure) => figure.src)),
    ...TREATMENTS.flatMap((treatment) =>
      treatment.sections.flatMap((section) => (section.figure ? [section.figure.src] : [])),
    ),
  ]);
}

// The registered size is what next/image reserves before the file loads; a
// mismatch is a layout shift on every article that shows the drawing.
test("every registered figure exists with the size it is registered at", () => {
  for (const [src, size] of Object.entries(FIGURE_SIZES)) {
    const file = path.join(process.cwd(), "public", src);
    assert.ok(fs.existsSync(file), `${src} is registered but missing`);
    assert.deepEqual(webpSize(file), size, `${src} registered size is stale`);
  }
});

test("every illustration on disk is registered and shown somewhere", () => {
  const used = usedFigureSources();
  for (const filename of fs.readdirSync(FIGURE_DIRECTORY)) {
    const src = `/images/conteudo/${filename}`;
    assert.ok(FIGURE_SIZES[src], `${src} is not registered in content/figures.ts`);
    assert.ok(used.has(src), `${src} is not used by any article or treatment`);
  }
});

test("article figures carry alt text and an optional caption from the Markdown", () => {
  const post = getPublishedPost("pe-caido-tratamento");

  assert.ok(post);
  assert.equal(post.figures.length, 4);
  assert.equal(post.figures[0].src, "/images/conteudo/pe-caido-nervo-fibular.webp");
  assert.match(post.figures[0].alt, /nervo fibular/);
  assert.ok(post.figures.every((figure) => figure.caption?.trim()));
});

test("validation rejects an unregistered image and a figure without alt text", () => {
  const post = getPublishedPost("pe-caido-tratamento")!;

  assert.throws(
    () => validatePosts([{ ...post, figures: [{ src: "/images/conteudo/nao-existe.webp", alt: "x" }] }], TREATMENTS),
    /posts\.pe-caido-tratamento\.figures: unregistered image/,
  );
  assert.throws(
    () => validatePosts([{ ...post, figures: [{ ...post.figures[0], alt: " " }] }], TREATMENTS),
    /posts\.pe-caido-tratamento\.figures: .* needs alt text/,
  );

  const treatment = TREATMENTS.find((entry) => entry.slug === "pe-caido")!;
  const [first, ...rest] = treatment.sections;
  assert.throws(
    () =>
      validateTreatments([
        ...TREATMENTS.filter((entry) => entry.slug !== "pe-caido"),
        { ...treatment, sections: [{ ...first, figure: { ...first.figure!, alt: "" } }, ...rest] },
      ]),
    /treatments\.pe-caido\.sections\.o-que-e\.figure: .* needs alt text/,
  );
});

test("an image that does not stand alone on its line fails the build", () => {
  const post = getPublishedPost("pe-caido-tratamento")!;
  const inline = `${post.body}\n\nVeja ![nervo](/images/conteudo/pe-caido-nervo-fibular.webp) acima.`;
  const reference = `${post.body}\n\n![nervo][figura]\n\n[figura]: /images/conteudo/pe-caido-nervo-fibular.webp`;

  for (const body of [inline, reference]) {
    assert.throws(
      () => validatePosts([{ ...post, body }], TREATMENTS),
      /posts\.pe-caido-tratamento\.body: images must stand alone on their line/,
    );
  }
});

test("article body links must point at pages that exist", () => {
  const posts = getPublishedPosts();
  const post = posts.find((entry) => entry.slug === "pe-caido-tratamento")!;
  const broken = (href: string) => [
    ...posts.filter((entry) => entry !== post),
    { ...post, body: `${post.body}\n\nLeia [este texto](${href}).` },
  ];

  assert.throws(
    () => validatePosts(broken("/blog/enxerto-de-nervos"), TREATMENTS),
    /posts\.pe-caido-tratamento\.body: unknown target enxerto-de-nervos/,
  );
  assert.throws(
    () => validatePosts(broken("/tratamentos/nao-existe"), TREATMENTS),
    /posts\.pe-caido-tratamento\.body: unknown target nao-existe/,
  );
  assert.doesNotThrow(() => validatePosts(broken("/blog/enxerto-de-nervo#como-o-enxerto-funciona"), TREATMENTS));
});

