import assert from "node:assert/strict";
import test from "node:test";
import { negotiateRepresentation } from "../../app/lib/content-negotiation";

const CHROME =
  "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8";

/** The acceptmarkdown.com test vectors, plus the headers real clients send. */
const vectors: Array<[string | null, ReturnType<typeof negotiateRepresentation>]> = [
  ["text/markdown", "markdown"],
  ["text/markdown, text/html;q=0.8", "markdown"],
  ["text/markdown, text/plain;q=0.5, */*;q=0.1", "markdown"],
  ["text/html", "html"],
  ["text/markdown;q=0, text/html", "html"],
  [null, "html"],
  ["", "html"],
  ["*/*", "html"],
  ["text/*", "html"],
  [CHROME, "html"],
  // Equal q and specificity: the order the client listed them decides.
  ["text/markdown, text/html", "markdown"],
  ["text/html, text/markdown", "html"],
  // An exact match outranks a wildcard at the same q.
  ["text/markdown, */*", "markdown"],
  ["text/html;q=0.5, text/markdown;q=0.9", "markdown"],
  ["TEXT/MARKDOWN", "markdown"],
  ["text/markdown; charset=utf-8; q=0.7, text/html; q=0.6", "markdown"],
  // Nothing this site produces is acceptable.
  ["application/pdf", null],
  ["text/markdown;q=0", null],
  ["text/markdown;q=0, text/html;q=0", null],
  ["application/json, */*;q=0", null],
];

for (const [accept, expected] of vectors) {
  test(`Accept: ${accept === null ? "(missing)" : JSON.stringify(accept)} → ${expected ?? "406"}`, () => {
    assert.equal(negotiateRepresentation(accept), expected);
  });
}

test("the most specific range decides, even when a wildcard allows more", () => {
  assert.equal(negotiateRepresentation("text/markdown;q=0, */*"), "html");
  assert.equal(negotiateRepresentation("text/html;q=0, */*"), "markdown");
});
