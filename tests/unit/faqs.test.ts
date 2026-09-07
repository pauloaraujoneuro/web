import assert from "node:assert/strict";
import test from "node:test";
import { FAQ_CATEGORIES, getPublishedFaqs, treatmentFaqs } from "../../app/lib/faqs";
import { getPublishedTreatments, getVisibleTreatments } from "../../app/lib/treatments";
import { FAQ_ITEMS } from "../../constants";

test("every homepage question carries an explicit category and order", () => {
  const faqs = getPublishedFaqs();

  for (const item of FAQ_ITEMS) {
    const classified = faqs.find((faq) => faq.id === item.id);
    assert.ok(classified, `${item.id} is missing from the catalog`);
    assert.ok(classified.category in FAQ_CATEGORIES);
    assert.ok(Number.isInteger(classified.order));
  }
});

test("the FAQ hub inherits questions from every approved treatment", () => {
  const answers = new Set(getPublishedFaqs().map((faq) => faq.answer));

  for (const treatment of getPublishedTreatments()) {
    for (const faq of treatment.faqs.filter((item) => item.state === "published")) {
      assert.ok(
        answers.has(faq.answer),
        `${treatment.slug} is approved but "${faq.question}" is missing from the hub`,
      );
    }
  }
});

/**
 * `/perguntas-frequentes` is indexable, so it must never become the back door
 * through which a withheld treatment's answers reach search.
 */
test("a treatment kept out of search keeps its answers out of the FAQ hub", () => {
  const withheld = { ...getVisibleTreatments()[0], slug: "reservado", indexable: false };
  const hub = treatmentFaqs(getPublishedTreatments([...getVisibleTreatments(), withheld]));

  assert.ok(hub.length > 0);
  assert.ok(!hub.some((faq) => faq.relatedHref === "/tratamentos/reservado"));
});

test("published questions are uniquely identified and deterministically ordered", () => {
  const faqs = getPublishedFaqs();
  const ids = faqs.map((faq) => faq.id);

  assert.equal(new Set(ids).size, ids.length);
  assert.deepEqual(
    faqs.map((faq) => faq.order),
    faqs.map((faq) => faq.order).toSorted((a, b) => a - b),
  );
});
