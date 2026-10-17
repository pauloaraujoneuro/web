# Content media banner validation

**Date**: 2026-10-16
**Spec**: `.specs/features/content-media/spec.md`
**Diff range**: `75b686f..505748b` (T3 including crop correction)
**Verifier**: independent sub-agent; author ≠ verifier
**Verdict**: **PASS — 4/4 acceptance criteria verified after crop correction**

## Task completion

T1 and T2 are outside this diff. T3 passes technical acceptance after one
fix/reverify cycle. Artwork still requires clinician review on the PR preview;
this verification neither grants clinical approval nor authorizes production.

## Spec-anchored acceptance criteria

| Criterion | Exact expected outcome | File:line and assertion evidence | Result |
| --- | --- | --- | --- |
| AC1 exact mapping | 11 treatment + 11 post slugs, each assigned its own `/images/cards/<slug>.webp` | `tests/unit/card-images.test.ts:18` — ``assert.equal(entry.cardImage, `/images/cards/${slug}.webp`)``; `:21–23` exact registry/assignment counts | PASS |
| AC1 assets | 22 selected WebPs, 1200×800, registry dimensions equal actual dimensions, each below 150 KiB | `tests/unit/card-images.test.ts:29` — `assert.equal(disk.length, 22)`; `:33–41` RIFF/WEBP, `assert.deepEqual(actual, { width: 1200, height: 800 })`, registry equality, `buffer.length < 150 * 1024` | PASS |
| AC2 priority | Dedicated image, then first teaching figure, then abstract artwork | `tests/unit/card-images.test.ts:49–54` — exact dedicated/figure paths and `undefined` for no media; unchanged `app/components/content/ContentCard.tsx:55–59` renders `CardArtwork` for no image | PASS |
| AC2 invalid/optional fields | Unknown paths rejected in both catalogs; omitted field allowed | `tests/unit/card-images.test.ts:62–66` — catalog-specific `assert.throws(... /cardImage: unregistered image/)`, then `assert.doesNotThrow(...)`; includes missing, external, empty and inherited-property paths | PASS |
| AC2 decorative images | Empty alt for every selected banner, including featured | `tests/e2e/card-banners.spec.ts:8–15` — matching card or featured section, exact encoded source, `toHaveAttribute("alt", "")`, intrinsic dimensions and successful decoding | PASS |
| AC3 visible association | All 22 banners load on corresponding hub cards, including featured blog | Same `tests/e2e/card-banners.spec.ts:8–15`; independent fixture matches all 22 manifest slugs | PASS |
| AC3 navigation/layout | Existing link names, keyboard navigation; no overflow at 320/390/1440 | `tests/e2e/card-banners.spec.ts:25` — `scrollWidth <= innerWidth`; `:34–38` exact named article link, focus and Enter navigation; unchanged `ContentCard.tsx:72` includes action and title in accessible name | PASS |
| AC3 crop | Every ordinary and featured banner retains 16:9 at tested widths | `tests/e2e/card-banners.spec.ts:26–30` selects `.content-card .card-media, .featured-post-image`, loops all matched media, and asserts `toBeCloseTo(16 / 9, 1)` at 320/390/1440. Independent corrected featured measurement: 526×295.875 at 1440px, ratio 1.7778 | PASS |
| AC4 isolation | Body figures/lightboxes, clinical copy, indexing flags, figure schema and image sitemap remain unchanged | `tests/e2e/card-banners.spec.ts:39` — body has zero card images; `tests/e2e/blog.spec.ts:63–84` preserves figure counts/alt/zoom names/schema image count; `tests/e2e/treatments.spec.ts:89–131` preserves figures/lightbox; `tests/e2e/indexing.spec.ts:27–38` preserves indexable responses; diff inspection confirms catalog/Markdown changes only add `cardImage`, and `app/lib/figures.ts:11–14` figure URL accessors remain unchanged | PASS |
| AC4 review/scope | Artwork awaits clinician review; no production release | `.specs/features/content-media/tasks.md:46–49` records pending review and excludes merge/deployment authorization; committed diff contains optimized assets only, no original/rejected PNGs | PASS |

**Aggregate**: 4/4 ACs pass. No residual acceptance gaps or spec-precision gaps.

### Independent selected-source check

Reconverted all 22 current `tmp/card-images/<slug>.png` files using Sharp resize
1200×800 and WebP quality 80/effort 6, and compared each buffer byte-for-byte to
its committed banner. All 22 match; total **1,222,846 bytes**. Manifest revisions
identify exactly the five requested simplified replacements: rehabilitation,
cortical re-education, timing after accident, C6/C7, and hand transfers. Thus
slug equality is supported by selected-image content equality, not filenames
alone. The refined neuropathic pain source is also included in that comparison.

## Gate evidence and test integrity

- Full unchanged `npm run check` completed in `/tmp/paulo-card-banners-clean`:
  **72 unit tests passed, lint passed, production build passed (136 outputs),
  247 Playwright executions passed, 0 failed, 11 conditional skips**.
- Reviewed `/tmp/paulo-card-banners-clean-check-v2.log`. Compared the complete
  52-file diff surface with that clean copy: implementation/assets/tests match;
  only tasks/lesson documentation, lesson bookkeeping, and one trailing blank
  fixture line differ. These differences cannot affect the reported execution behavior.
- Full gate was not repeated: the existing complete run is usable evidence and
  the implementer reran the complete gate after the fix. Independent checks
  below verify the correction and the strengthened assertions.
- Test delta from this diff: **+4 unit tests**, **+3 Playwright cases × 3 projects
  = +9 executions**; no tests deleted. Baseline inferred from the additive diff:
  68 unit tests; 238 passing + 11 skipped browser executions.
- Existing selector correction targets the specific full-card accessible name.
  Spine placeholder assertions change from five to zero because all five now
  have dedicated images; the existing teaching-figure fallback and whole-card
  click assertions remain. No new skip or disabled test was introduced.
- Skip justification: 3 analytics click executions require an absent GTM ID;
  2 narrow-route checks, 2 mobile-menu checks and 2 shell-overflow checks run
  only in the mobile project; 2 desktop-header checks run only on desktop.
  These conditions predate this diff.
- The workspace gate's lint problem comes from generated `.next` content under
  an ignored nested `.claude/worktrees` checkout, rather than this integration.
  The clean copy passes the same gate without changing lint configuration.

## Discrimination sensor

Scratch location: `/tmp/paulo-banner-verifier-sensors`. Copied source and tests;
symlinked read-only dependencies/public assets. No mutation touched the real
tree or the existing clean production build. Baseline targeted run: **4/4 pass**.

| Mutation | Changed behavior | Observed discrimination | Result |
| --- | --- | --- | --- |
| M1 | Scratch `app/lib/figures.ts:21,23`: remove both dedicated-banner priorities | Targeted run exits 1; `tests/unit/card-images.test.ts:49` expects `/images/cards/hernia-disco.webp`, receives the body figure path | Killed |
| M2 | Scratch `app/lib/content-validation.ts:136,213`: remove catalog calls to `assertCardImage` | Targeted run exits 1; `tests/unit/card-images.test.ts:62` reports `Missing expected exception` for invalid treatment path | Killed |
| M3 | In a scratch browser test, restore the old full-width featured layout and `max-height: 20rem` only in the isolated page DOM/style | Unchanged strengthened ratio assertion fails at scratch test line 36 (source assertion `tests/e2e/card-banners.spec.ts:30`): expected 1.7778, received **3.3625**, reproducing the original defect | Killed |

M1/M2 fail semantic assertions after successful setup; each unit run has
3 passes and 1 expected failure. Their logs are `baseline.log`,
`mutant-priority.log`, `mutant-validation.log` in the scratch directory.

For M3, copied the current browser test and fixtures to
`/tmp/paulo-banner-verifier-browser-sensor`, targeting the existing production
preview. Baseline: **3/3 browser cases pass**. Injected only a page-local DOM/style
fault after navigation; did not edit assertions or production files. The original
capped/one-column behavior is restored for the fault by removing the new
`featured-post-with-image` class and setting the image cap to 20rem. This makes
the test fail on the exact original 1440px crop. The isolated page was closed,
and the copied test restored. **3 injected, 3 killed, 0 survived** in total;
lightweight depth.

## Independent browser and visual check

Measured the existing production preview on port 3200 with visible Chromium:

| Viewport | Featured image bounds | Width/height | Expected |
| --- | --- | --- | --- |
| 320 | 248×139.5 | 1.7778 | 1.7778 |
| 390 | 318×178.875 | 1.7778 | 1.7778 |
| 1440 | 526×295.875 | 1.7778 | 1.7778 |

Reproduction script: `/tmp/playwright-test-verify-banners.js`. Its runner was
copied to writable scratch because the installed skill runner writes its own
temporary execution file. Chromium required sandbox escalation for macOS
launch permissions; the subsequent read-only run succeeded. Existing
`tmp/card-banners-qa/blog-{390,1440}.png` captures independently inspected:
fresh mobile and desktop captures look coherent, and the desktop two-column
layout preserves the composition. Parent's treatment captures and full
responsive gate provide the remaining layout QA.
Interactive clinician UAT is still pending and was not represented as passed.

## Code quality

Scope is surgical: typed optional media field, separate asset registry,
selection helpers, existing renderers, and focused tests. Existing body-figure
and clinical metadata pipelines are preserved. No production facts or medical
copy were added. No scope creep, unnecessary configuration, or new rendering
abstraction was found. All new tests map to AC1–AC4. Repository guidelines:
`AGENTS.md`, `README.md`; skill coding-principles review completed.

The initial featured-crop coverage gap is resolved: the ratio assertion now
checks all ordinary media and the featured image at each required width.
Edge cases for absent media, missing paths, external paths, empty strings and
inherited registry properties are covered. No remaining quality defect found.

## Initial finding and fix history

Initial verification of `75b686f..e1152c7` returned **FAIL** for AC3. At 1440px,
`app/globals.css:2077` capped a 1076px-wide featured image at 320px high, producing
3.3625:1 instead of 16:9. The initial browser test checked only the first ordinary
card, so the complete gate did not detect that featured branch.

Correction `505748b` removes the height cap (`app/globals.css:2073–2079`), adds a
two-column featured layout from 1024px (`app/globals.css:2474–2492`), and adds
`featured-post-with-image` conditionally (`app/blog/page.tsx:82`). The strengthened
browser test includes all regular media and featured media. Independent current
measurements, the fresh full gate, and M3 confirm the defect is fixed and that the
new assertion detects its return. No further fix task is required.

## Traceability and limitations

AC1, AC2, AC3 and AC4: verified. T3 passes technical acceptance. The report does
not change task/spec statuses because the verifier writes only this report.
No implementation or real tests were edited.

The orchestrator recorded grounded candidate lesson **L-001** through the skill
script: "Check both regular and featured listing banners at every responsive
breakpoint." No duplicate lesson was created during this re-verification.

Clinician artwork review on the PR preview remains pending. No clinical
approval, production deployment or merge is implied by this technical PASS.
