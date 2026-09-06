import assert from "node:assert/strict";
import test from "node:test";
import { FAQ_CATEGORIES, getPublishedFaqs } from "../../app/lib/faqs";
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

test("the FAQ hub inherits questions from approved treatments only", () => {
  const faqs = getPublishedFaqs();
  const answers = new Set(faqs.map((faq) => faq.answer));

  const approvedQuestion = getPublishedTreatments()[0].faqs[0];
  assert.ok(answers.has(approvedQuestion.answer));

  const awaitingApproval = getVisibleTreatments().filter(
    (treatment) => !treatment.indexable,
  );
  assert.ok(awaitingApproval.length > 0, "expected unapproved treatments to exist");
  for (const treatment of awaitingApproval) {
    for (const faq of treatment.faqs) {
      assert.ok(
        !answers.has(faq.answer),
        `${treatment.slug} leaked "${faq.question}" into the indexable FAQ hub`,
      );
    }
  }
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
