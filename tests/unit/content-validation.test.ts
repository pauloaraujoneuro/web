import assert from "node:assert/strict";
import test from "node:test";
import { validateLocations, validateTreatments } from "../../app/lib/content-validation";
import { LOCATIONS, getPublishedLocations } from "../../app/lib/locations";
import { TREATMENTS, getPublishedTreatments } from "../../app/lib/treatments";

test("published treatment inventory is ordered and excludes drafts", () => {
  const draft = { ...TREATMENTS[0], slug: "rascunho", state: "draft" as const, order: 0 };
  const result = getPublishedTreatments([...TREATMENTS, draft]);

  assert.deepEqual(
    result.map((item) => item.slug),
    ["cirurgia-nervos-perifericos", "cirurgia-coluna", "reabilitacao-neurocirurgica"],
  );
});

test("canonical treatment and location inventories pass completeness validation", () => {
  assert.doesNotThrow(() => validateTreatments(TREATMENTS));
  assert.doesNotThrow(() =>
    validateLocations(
      LOCATIONS,
      new Set(TREATMENTS.map((item) => item.slug)),
    ),
  );
});

test("treatment validation names duplicate primary intents", () => {
  const duplicate = {
    ...TREATMENTS[1],
    slug: "tratamento-duplicado",
    primaryIntent: TREATMENTS[0].primaryIntent,
  };

  assert.throws(
    () => validateTreatments([...TREATMENTS, duplicate]),
    /treatments\.tratamento-duplicado\.primaryIntent: duplicates treatments\.cirurgia-nervos-perifericos/,
  );
});

test("treatment validation names unknown related targets", () => {
  const invalid = {
    ...TREATMENTS[0],
    relatedTreatmentSlugs: ["nao-existe"],
  };

  assert.throws(
    () => validateTreatments([invalid, ...TREATMENTS.slice(1)]),
    /treatments\.cirurgia-nervos-perifericos\.relatedTreatmentSlugs: unknown target nao-existe/,
  );
});

test("published location inventory excludes inactive and non-indexable entries", () => {
  const inactive = { ...LOCATIONS[0], slug: "inativa", active: false };
  const hidden = { ...LOCATIONS[0], slug: "oculta", indexable: false };

  assert.deepEqual(
    getPublishedLocations([...LOCATIONS, inactive, hidden]).map((item) => item.slug),
    ["campo-grande"],
  );
});

test("location validation names unknown treatment references", () => {
  const invalid = { ...LOCATIONS[0], relatedTreatmentSlugs: ["nao-existe"] };

  assert.throws(
    () => validateLocations([invalid], new Set(TREATMENTS.map((item) => item.slug))),
    /locations\.campo-grande\.relatedTreatmentSlugs: unknown target nao-existe/,
  );
});
