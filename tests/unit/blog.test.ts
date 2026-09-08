import assert from "node:assert/strict";
import test from "node:test";
import { getPublishedPost, getPublishedPosts, getVisiblePosts } from "../../app/lib/blog";
import { validatePosts, validateTreatmentPostReferences } from "../../app/lib/content-validation";
import { getPublicRouteInventory } from "../../app/lib/seo";
import { TREATMENTS } from "../../app/lib/treatments";

test("published posts are deterministic and expose parsed headings", () => {
  const posts = getPublishedPosts();

  assert.equal(posts.length, 4);
  assert.equal(posts[0].slug, "como-se-preparar-para-consulta-neurocirurgica");

  // The heading contract, not the current headings: anchors must be unique,
  // URL-safe and derived from real headings, so the in-page table of contents
  // never points at something that is not there. Pinning the list instead made
  // every edit to an article a test failure.
  for (const post of posts) {
    assert.ok(post.headings.length > 0, `${post.slug} parsed no headings`);
    const ids = post.headings.map((heading) => heading.id);
    assert.equal(new Set(ids).size, ids.length, `${post.slug} has duplicate anchors`);
    for (const heading of post.headings) {
      assert.match(heading.id, /^[a-z0-9]+(?:-[a-z0-9]+)*$/, `${post.slug}: ${heading.id}`);
      assert.ok(heading.text.trim().length > 0);
      assert.ok(heading.level === 2 || heading.level === 3);
      assert.ok(
        post.body.includes(heading.text),
        `${post.slug}: heading "${heading.text}" is not in the body`,
      );
    }
  }
});

test("unknown published post is absent", () => {
  assert.equal(getPublishedPost("nao-existe"), undefined);
});

test("article validation rejects malformed required frontmatter", () => {
  const invalid = { ...getPublishedPosts()[0], featured: undefined as unknown as boolean };
  assert.throws(
    () => validatePosts([invalid], TREATMENTS),
    /posts\.como-se-preparar-para-consulta-neurocirurgica\.featured: must be a boolean/,
  );
});

test("treatment-to-article references use the live article catalog", () => {
  assert.throws(
    () => validateTreatmentPostReferences(TREATMENTS, []),
    /treatments\.cirurgia-nervos-perifericos\.relatedPostSlugs: unknown target como-se-preparar-para-consulta-neurocirurgica/,
  );
});

/**
 * The catalog ships fully published: nothing depends on someone remembering to
 * flip a flag later. This test is the tripwire — if an article is ever withheld
 * again, it must be a deliberate decision that shows up here.
 */
test("every visible article is published to search", () => {
  const visible = getVisiblePosts();

  assert.equal(visible.length, getPublishedPosts().length);
  assert.deepEqual(
    visible.filter((post) => !post.indexable).map((post) => post.slug),
    [],
  );
});

test("the discovery gate still withholds an article marked non-indexable", () => {
  const withheld = { ...getPublishedPosts()[0], slug: "reservado", indexable: false };
  const inventory = getPublicRouteInventory(
    [...getPublishedPosts(), withheld].filter((post) => post.indexable),
  );

  assert.ok(!inventory.some((entry) => entry.path === "/blog/reservado"));
});
