# Content media UX — Tasks

**Status**: Done (awaiting review on the preview deployment)

## T1 — Dismissible full-size illustration view

- `FigureLightbox` opens a modal `<dialog>` from the zoom control; Escape,
  backdrop click and a close button dismiss it; focus returns to the control.
- The control sits on the plate's corner; its hit area covers the drawing.
- Portrait phones pan a readable-size drawing sideways.

**Verified**: Playwright `treatments.spec.ts` › "an illustration opens full
size…" on mobile, tablet and desktop; manual screenshots at 390px and 1440px.

## T2 — Card media and whole-card hit area

- Hub cards show the page's first illustration (`treatmentCoverFigure`,
  `postCoverFigure`), decorative (`alt=""`) since the title names the page.
- Pages without an illustration get `CardArtwork`: abstract line work per area
  (fibres, segments, arcs), seeded by URL, `aria-hidden`. Never a depiction.
- The card link stretches over the whole card; its accessible name includes
  the title ("Saiba mais: …").

**Verified**: Playwright `treatments.spec.ts` › "hub cards show…" (image,
placeholder count and `aria-hidden`, click on the title navigates); treatments,
blog and responsive specs pass on the production build (90 passed, 6 skipped).

## T3 — Dedicated generated banners (PR preview)

**Status**: Complete; independent verification PASS. Scope: `spec.md`.

- Add 22 current selected images as optimized WebP in `public/images/cards/`:
  11 treatment entries and 11 blog frontmatter entries, matched by exact slug.
- Use the latest simple replacements for rehabilitation, cortical re-education,
  timing after an accident, C6/C7 and hand transfers. Keep all other latest
  selected images, including the refined non-graphic neuropathic pain image.
- Optional `cardImage` is registered and validated. Selection: dedicated banner,
  then first body figure, then existing abstract artwork. Include featured blog.
- Body illustrations, clinical copy and indexing flags stay as authored. Images
  are decorative in listing banners, not new teaching figures or schema images.
- Verify unit mapping/fallback/validation/asset budgets; Playwright all 22 visible
  banners, image decoding, keyboard navigation, crops and 320px overflow; full
  `npm run check`; inspect 390px and 1440px screenshots.
- Commit only app/catalog/test/spec files and optimized assets, excluding `tmp/`.

Clinician review remains pending for the generated artwork on the PR preview.
User authorized adding all current images to the app for iteration; no production
merge/deployment or clinical approval is implied.

### Verification evidence

- `npm run check` in `/tmp/paulo-card-banners-clean`: exit 0; 72 unit tests,
  lint, production build (136 static outputs), 247 Playwright tests passed,
  11 existing conditional skips. Added 4 unit cases and 9 browser executions.
- The initial workspace run passed unit tests but lint traversed generated
  `.next` files in the ignored `.claude/worktrees/` checkout. A clean copy of
  tracked/selected files with cloned dependencies passed the unchanged gate.
  Workspace lint also passes with only nested worktrees and `tmp/` excluded.
- `npx tsc --noEmit` and `git diff --check`: exit 0.
- Visible Playwright captures inspected at 390px/1440px: treatment spine cards
  and featured blog block; no overflow or page errors. Local captures:
  `tmp/card-banners-qa/{tratamentos,blog}-{390,1440}.png` (not committed).
- Asset conversion: selected `tmp/card-images/<slug>.png` → 1200×800 WebP,
  quality 80, effort 6; 22 files total 1,222,846 bytes (about 1.2 MiB).
  Each file remains below 150 KiB. Re-running conversion for a regenerated
  slug updates its banner without changing the catalog path.

### Coverage / necessity mapping (ACs from spec.md)

| Acceptance criterion | Assertion evidence | Spec-defined outcome / necessity |
| --- | --- | --- |
| AC1 exact mapping/counts | `tests/unit/card-images.test.ts:18` `assert.equal(entry.cardImage, /images/cards/<slug>.webp)`; lines 21–23 exact 22/11/11 counts | All required pages have their own banner; no extra assigned banners |
| AC1 size/budget | Same file lines 29–41: disk count 22, dimensions 1200×800, registry equality, bytes below 150 KiB | Every selected optimized asset exists and reserves the correct space |
| AC2 priority/fallback | Same file lines 49–54: exact banner, exact first figure, then `undefined` | Existing component's abstract-art branch remains reachable |
| AC2 validation/optional | Same file lines 62–66: `assert.throws(... /cardImage: unregistered image/)`, then `assert.doesNotThrow(...)` without fields | Invalid paths fail both catalogs; omitted banner is valid |
| AC3 visible association/decode | `tests/e2e/card-banners.spec.ts:11` exact encoded slug source; lines 12–15 decorative alt, dimensions and decoded image | All 22 banners appear on their matching cards, including featured post |
| AC3 responsiveness/keyboard | Same file lines 25, 31, 36–38: no overflow, 16:9 ratio for all ordinary and featured banners, focus, Enter → exact post URL | Layout and navigation remain usable |
| AC4 body isolation | Same file line 39: zero card images in Markdown; unchanged existing figure/schema/indexing suites pass | Banners do not become clinical body figures or schema illustrations |

Every new test maps to AC1–AC4; no speculative or dependency-behavior tests.
The old spine-placeholder count changed from five to zero because those five
cards now have the requested banners; the existing peripheral figure/navigation
assertions remain. The treatment navigation selector now names the full card
link, matching PR #8's accessible-name behavior.

### T4 — Featured banner crop correction

Independent review found that `max-height: 20rem` made the featured image wider
than 16:9 on desktop, a case the first version of the crop test omitted.
Removed the cap and added a two-column desktop featured layout. The crop test
now checks every ordinary and featured banner at 320, 390 and 1440px.

Re-ran the unchanged full gate after this correction: 72 unit passes, lint and
build pass, 247 browser passes / 11 existing conditional skips (29.0s), exit 0.
Log: `/tmp/paulo-card-banners-clean-check-v2.log`. Refreshed the visual captures.
The grounded responsive-media lesson was recorded as project-local candidate
L-001. Independent re-verification passed all four ACs for `75b686f..505748b`;
three behavior-level faults were injected in scratch state and all three were
killed by assertions. The verifier independently confirmed all 22 assets match
the current selected PNG conversions. Full report: `validation.md`.

## T5 — Image accessibility before merge

**Status**: Implemented and verified; independent review pending (AC5).

- Reviewed all 22 listing banners: intentionally decorative `alt=""` beside
  title/summary, omitted from the accessibility image tree. This follows W3C
  WAI's decorative-image guidance, rather than repeating titles as alt text:
  https://www.w3.org/WAI/tutorials/images/decorative/.
- Teaching figures keep their descriptive alt text in both inline and expanded
  forms. The featured blog link now includes its title in the accessible name.
- The initial axe scan found mobile lightbox scrollers without keyboard access
  and caption contrast dependent on a transparent top-layer backdrop. Added a
  named, focusable region with a white focus outline and an explicit opaque
  dark dialog background. Tab reaches the scroller; Arrow Right pans on mobile.
- Regression coverage: all 22 banners are absent from `getByRole("img")` while
  every associated link has the full expected name; both hubs retain tab order,
  visible card focus and targets >=44px. The lightbox test asserts descriptive
  expanded-image naming, actual Tab focus, outline and mobile arrow scrolling.
- A red check against the old build failed for the featured link's missing
  title (`/tmp/paulo-card-banners-a11y-red.log`). Actual keyboard input is used
  for `:focus-visible`; pointer-initiated programmatic focus is not equivalent.

### T5 evidence

- Unchanged `npm run check` in the same clean PR copy: exit 0, 72 unit passes,
  lint/build pass, **250 browser passes**, 11 existing conditional skips.
  Log: `/tmp/paulo-card-banners-a11y-final-check.log`.
- axe-core 4.11.1 WCAG 2/2.1 A/AA scans: **12 states, 0 violations**: hubs
  `/tratamentos`, `/blog`, plus `/tratamentos/pe-caido` and
  `/blog/tetraplegia-dobrar-cotovelo-abrir-mao`, including their open lightboxes,
  at 390px and 1440px. JSON: `tmp/card-banners-qa/accessibility-audit.json`.
- axe flags contrast as incomplete where pseudoelements, gradients, images or
  overlap prevent automatic inference. Supplemented the image-control checks
  with computed foreground/background contrast: zoom text >=9.41:1 even with
  black/white image content beneath its translucent plate; captions 12.60:1 on
  the explicit dark dialog surface, at both widths. Source data:
  `tmp/card-banners-qa/image-controls-contrast.json`.
- Inspected focus/lightbox screenshots at both widths:
  `tmp/card-banners-qa/lightbox-{treatment,blog}-{390,1440}.png`.
- `npx tsc --noEmit` and diff whitespace checks pass. Audit scripts, scan data,
  screenshots and original PNGs remain local in `tmp/` or `/tmp`.
- This is scoped image-accessibility evidence, not a whole-site WCAG
  certification or a claim that VoiceOver/NVDA were manually exercised.
