import assert from "node:assert/strict";
import test from "node:test";
import { getPublishedPost, getPublishedPosts, getVisiblePosts } from "../../app/lib/blog";
import { validatePosts, validateTreatmentPostReferences } from "../../app/lib/content-validation";
import { TREATMENTS } from "../../app/lib/treatments";

test("published posts are deterministic and expose parsed headings", () => {
  const posts = getPublishedPosts();

  assert.equal(posts.length, 1);
  assert.equal(posts[0].slug, "como-se-preparar-para-consulta-neurocirurgica");
  assert.deepEqual(
    posts[0].headings.map((heading) => heading.id),
    ["reuna-a-historia-do-problema", "separe-exames-e-documentos", "o-que-acontece-durante-a-avaliacao"],
  );
});

test("unknown published post is absent", () => {
  assert.equal(getPublishedPost("nao-existe"), undefined);
});

test("article validation rejects malformed required frontmatter", () => {
  const invalid = { ...getPublishedPosts()[0], featured: undefined as unknown as boolean };
  assert.throws(
    () => validatePosts([invalid], new Set(TREATMENTS.map((item) => item.slug))),
    /posts\.como-se-preparar-para-consulta-neurocirurgica\.featured: must be a boolean/,
  );
});

test("treatment-to-article references use the live article catalog", () => {
  assert.throws(
    () => validateTreatmentPostReferences(TREATMENTS, new Set()),
    /treatments\.cirurgia-nervos-perifericos\.relatedPostSlugs: unknown target como-se-preparar-para-consulta-neurocirurgica/,
  );
});

test("articles awaiting approval stay visible but out of public discovery", () => {
  const visible = getVisiblePosts().map((post) => post.slug);
  const indexable = getPublishedPosts().map((post) => post.slug);

  assert.ok(visible.length > indexable.length);
  assert.ok(visible.includes("hernia-disco-lombar-quando-operar"));
  assert.ok(!indexable.includes("hernia-disco-lombar-quando-operar"));
  assert.ok(indexable.every((slug) => visible.includes(slug)));
});
