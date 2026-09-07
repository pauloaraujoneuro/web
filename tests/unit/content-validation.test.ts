import assert from "node:assert/strict";
import test from "node:test";
import {
  validateClinics,
  validateLocations,
  validateTreatments,
} from "../../app/lib/content-validation";
import { LOCATIONS, getPublishedLocations } from "../../app/lib/locations";
import { TREATMENTS, getPublishedTreatments } from "../../app/lib/treatments";
import { CLINICS } from "../../app/lib/clinics";

test("published treatment inventory is ordered and excludes drafts", () => {
  const draft = { ...TREATMENTS[0], slug: "rascunho", state: "draft" as const, order: 0 };
  const result = getPublishedTreatments([...TREATMENTS, draft]);

  assert.ok(!result.some((item) => item.slug === "rascunho"));
  assert.deepEqual(
    result.slice(0, 1).map((item) => item.slug),
    ["cirurgia-nervos-perifericos"],
  );
});

test("canonical catalogs pass completeness validation", () => {
  assert.doesNotThrow(() => validateTreatments(TREATMENTS));
  assert.doesNotThrow(() => validateLocations(LOCATIONS, TREATMENTS));
  assert.doesNotThrow(() => validateClinics(CLINICS));
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

/**
 * Completeness is a property of being public, not of being indexable. A page
 * withheld from search is still a page a patient can open and read, so it must
 * not be allowed to ship half-written.
 */
test("completeness is enforced for published entries that are not indexable", () => {
  const incomplete = {
    ...TREATMENTS[0],
    slug: "incompleto",
    primaryIntent: "intenção sem par",
    indexable: false,
    indications: [],
    relatedTreatmentSlugs: [],
    relatedPostSlugs: [],
  };

  assert.throws(
    () => validateTreatments([incomplete]),
    /treatments\.incompleto\.indications: is required/,
  );
});

test("validation rejects a date that matches the ISO shape but is not real", () => {
  const invalid = { ...TREATMENTS[0], lastModified: "2026-02-31" };

  assert.throws(
    () => validateTreatments([invalid, ...TREATMENTS.slice(1)]),
    /treatments\.cirurgia-nervos-perifericos\.lastModified: is not a real calendar date/,
  );
});

/**
 * Cross-references carry authority. An indexable page that links into a page
 * search engines are told to ignore leaks crawl budget and reads as a dead end.
 */
test("an indexable entry may not cross-link into a withheld one", () => {
  const withheld = {
    ...TREATMENTS[1],
    slug: "aguardando-aprovacao",
    primaryIntent: "intenção reservada",
    indexable: false,
    relatedTreatmentSlugs: [],
    relatedPostSlugs: [],
  };
  const linking = {
    ...TREATMENTS[0],
    relatedTreatmentSlugs: ["aguardando-aprovacao"],
  };

  assert.throws(
    () => validateTreatments([linking, withheld]),
    /relatedTreatmentSlugs: indexable entry links to non-indexable aguardando-aprovacao/,
  );
});

test("references to a draft entry fail even when the slug exists", () => {
  const draft = {
    ...TREATMENTS[1],
    slug: "rascunho",
    primaryIntent: "intenção rascunhada",
    state: "draft" as const,
    relatedTreatmentSlugs: [],
    relatedPostSlugs: [],
  };
  const linking = { ...TREATMENTS[0], relatedTreatmentSlugs: ["rascunho"] };

  assert.throws(
    () => validateTreatments([linking, draft]),
    /relatedTreatmentSlugs: rascunho has no public page/,
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
    () => validateLocations([invalid], TREATMENTS),
    /locations\.campo-grande\.relatedTreatmentSlugs: unknown target nao-existe/,
  );
});

test("clinic validation rejects malformed facility facts", () => {
  assert.throws(
    () => validateClinics([{ ...CLINICS[0], postalCode: "79020300" }]),
    /clinics\.protrauma\.postalCode: must be a Brazilian CEP/,
  );

  assert.throws(
    () =>
      validateClinics([
        {
          ...CLINICS[0],
          openingHoursSpecification: [{ days: ["Monday"], opens: "19:00", closes: "07:00" }],
        },
      ]),
    /clinics\.protrauma\.openingHoursSpecification: closes before it opens/,
  );
});
