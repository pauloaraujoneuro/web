# Image accessibility validation

**Verdict: PASS.** No blocking image-accessibility regression found.

- Date: 2026-10-17.
- Verifier: independent agent, separate from the implementation author.
- Scope: `2d0ac40..89fa642`, T5 and AC5 (`spec.md:23–28`). AC1–AC4 remain
  covered by the earlier `validation.md`; they were not reopened here.
- Real implementation and tests were read-only. This report is the only
  repository file written by the verifier. No commit, merge or deployment.

## Spec-anchored evidence

| AC5 outcome | Exact assertion / implementation evidence | Result |
| --- | --- | --- |
| All 22 selected banners are decorative and omitted from the accessible image list | `tests/e2e/card-banners.spec.ts:12–13`: `toHaveAttribute("alt", "")` and `card.getByRole("img").toHaveCount(0)`, inside both exact-slug fixture loops. `ContentCard.tsx:48` and `app/blog/page.tsx:89` supply empty alt. | PASS |
| Every corresponding link, including featured, names its destination | `tests/e2e/card-banners.spec.ts:14–17`: `toHaveAccessibleName("Ler artigo: <title>" / "Saiba mais: <title>")`. `app/blog/page.tsx:105` now supplies the featured title; `app/components/content/ContentCard.tsx:72` supplies ordinary titles. The names include the visible action text. | PASS |
| DOM-order Tab navigation, visible focus and targets at least 44px high | `tests/e2e/card-banners.spec.ts:29–35` uses actual Tab, `toBeFocused()`, solid outline and height >=44. The committed test samples the first-to-second transition. Independent browser sweep `/tmp/playwright-test-image-a11y-verifier.js:17–34` checks **every** link, height and width >=44, solid outline >=2px, at both widths: all 15 treatment cards and all 18 blog cards, including featured. Ordinary focus CSS: `app/globals.css:369–371`; featured focus: `app/globals.css:2500–2503`; minimum heights: lines 380 and 2101. | PASS |
| Teaching and expanded figures retain descriptive names | `tests/e2e/treatments.spec.ts:95` expects `/nervo fibular/`; lines 119–121 require nonempty inline alt and the same accessible name in the dialog. `app/components/content/FigureLightbox.tsx:79` reuses the supplied alt. Independent browser checks lines 38–58 cover both the treatment and the representative article at 390px and 1440px, including Escape and focus return. | PASS |
| Expanded drawing is keyboard reachable with visible focus and mobile panning | `tests/e2e/treatments.spec.ts:122–129`: named region, actual Tab from close button, `toBeFocused()`, solid outline, ArrowRight and `scrollLeft > 0` on mobile. Implementation: `FigureLightbox.tsx:73–79`; focus CSS `app/globals.css:2374–2376`. Independent checks repeat this for both illustrated routes. | PASS |
| Audit hubs, illustrated treatment/article pages and open lightboxes | Reviewed `tmp/card-banners-qa/accessibility-audit.json`: 12 states, zero reported WCAG 2/2.1 A/AA violations. Routes: `/tratamentos`, `/blog`, `/tratamentos/pe-caido`, `/blog/tetraplegia-dobrar-cotovelo-abrir-mao`, with both body pages also scanned with open lightboxes, at 390px and 1440px. Audit scope and limitations are recorded in `tasks.md:129–144`. | PASS, subject to scan limits below |

The review found no weakened or removed assertions in this diff. Each added
assertion maps to AC5. Changes remain limited to accessible names, keyboard
access, focus presentation, dialog contrast and their verification.

## Gate and independent execution

Reviewed `/tmp/paulo-card-banners-a11y-final-check.log`: unchanged `npm run check`
completed with 72 unit passes, zero failures, lint/build passing and 250 browser
passes, with 11 existing conditional skips. All five changed implementation/test
files are byte-identical to `/tmp/paulo-card-banners-clean`, the copy used by that
gate. Browser passes increased from 247 before T5 to 250; no tests were removed.
The full gate was not repeated because no new implementation concern arose.

The skips are explained by existing conditions: three analytics executions need
a configured GTM tag (`tests/e2e/analytics.spec.ts:72`); two header executions
run only in the desktop project (`responsive.spec.ts:52`); six mobile-only
executions are omitted in tablet/desktop (`responsive.spec.ts:31,69` and
`shell.spec.ts:28`). None suppresses the new image checks.

Independently ran the visible Chromium script
`/tmp/playwright-test-image-a11y-verifier.js` against the corrected production
preview at `http://localhost:3200`; exit 0. Results:
`/tmp/paulo-image-a11y-verifier-results.json`. The sweep covers 66 card-link
visits across widths and four lightbox cases. No horizontal arrow panning is
required by the desktop layout; both mobile cases pan successfully.

## Discrimination sensor

Mutations occurred only in this verifier's isolated browser DOM. Navigating or
closing the browser discarded them; repository sources were never changed.

| Behavior fault | Assertion exercised | Result |
| --- | --- | --- |
| Remove featured link `aria-label`, corresponding to `app/blog/page.tsx:105` | Same exact accessible-name expectation as `tests/e2e/card-banners.spec.ts:15–17`; scratch script lines 66–69 | KILLED: accessible name loses the title |
| Remove scroller `tabindex`, corresponding to `FigureLightbox.tsx:77`, on desktop | Same actual-Tab / `toBeFocused()` expectation as `tests/e2e/treatments.spec.ts:123–125`; scratch script lines 75–80 | KILLED: Tab no longer reaches the region |

**Sensor result: 2 injected, 2 killed, 0 survived.** Both baseline behaviors
passed before mutation. No fix tasks or new lessons are required.

## Contrast, visuals and limits

Reviewed the supplied contrast supplement
`tmp/card-banners-qa/image-controls-contrast.json`: zoom control >=9.41:1 under
the black/white extremes beneath its translucent plate; captions 12.60:1 on
the opaque `rgb(10, 20, 27)` dialog background. Independently asserted that
background in every lightbox case. Relevant source:
`app/globals.css:2340,2382`. Visually inspected
`lightbox-treatment-390.png` and `lightbox-blog-1440.png`: the focus outline is
visible, captions remain readable and the close control remains present.

Zero axe violations does not resolve its incomplete contrast results. Those
remain for pseudoelements, gradients and overlapping content outside these
image-control checks; the supplement addresses the image controls and captions.
This is scoped image-accessibility verification, not whole-site WCAG
certification. No VoiceOver/NVDA session or Safari/Firefox run was performed.
The desktop sensor deliberately uses a non-overflowing region: browsers may
make overflowing containers keyboard reachable without explicit tabindex.
Local logs/scripts/scan JSON and screenshots are uncommitted artifacts.

T5 and AC5 are independently verified. Clinician review of the generated
artwork remains pending on the PR preview; this verdict does not grant clinical
approval or authorize production publication.
