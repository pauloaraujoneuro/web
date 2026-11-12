import assert from "node:assert/strict";
import test from "node:test";
import { buildArticleReviewSchema } from "../../app/lib/article-review";
import { validatePosts } from "../../app/lib/content-validation";
import { getAllPosts } from "../../app/lib/blog";
import { TREATMENTS } from "../../app/lib/treatments";

const reviewer = { name: "Dr. Revisor", url: "https://example.com/sobre", identifier: ["CRM-XX 0"] };

test("articles without review data emit no review or citation claims", () => {
  assert.deepEqual(buildArticleReviewSchema({}, reviewer), {});
  assert.deepEqual(buildArticleReviewSchema({ sources: [] }, reviewer), {});
});

test("review date and sources become lastReviewed, reviewedBy and citation", () => {
  const schema = buildArticleReviewSchema(
    {
      lastReviewed: "2026-11-01",
      sources: [{ title: "Diretriz fictícia", publisher: "Sociedade X", year: 2024, url: "https://doi.org/10.0/x" }],
    },
    reviewer,
  );
  assert.equal(schema.lastReviewed, "2026-11-01");
  assert.deepEqual(schema.reviewedBy, { "@type": "Physician", ...reviewer });
  assert.deepEqual(schema.citation, [{
    "@type": "CreativeWork",
    name: "Diretriz fictícia",
    publisher: { "@type": "Organization", name: "Sociedade X" },
    datePublished: "2024",
    url: "https://doi.org/10.0/x",
  }]);
});

const withPost = (patch: Record<string, unknown>) => {
  const posts = getAllPosts();
  return () => validatePosts([{ ...posts[0], ...patch }, ...posts.slice(1)], TREATMENTS);
};

test("review fields are validated", () => {
  assert.doesNotThrow(withPost({ lastReviewed: "2026-11-01", sources: [{ title: "Fonte", url: "https://doi.org/1" }] }));
  assert.throws(withPost({ lastReviewed: "2026-02-31" }), /lastReviewed/);
  assert.throws(withPost({ lastReviewed: "2000-01-01" }), /predates publishDate/);
  assert.throws(withPost({ sources: [{ title: " " }] }), /needs a title/);
  assert.throws(withPost({ sources: [{ title: "Fonte", url: "http://insecure.example" }] }), /https/);
  assert.throws(withPost({ sources: [{ title: "Fonte", year: 2024.5 }] }), /year/);
});
