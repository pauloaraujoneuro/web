import assert from "node:assert/strict";
import test from "node:test";
import { getPublishedPost, getPublishedPosts } from "../../app/lib/blog";

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
