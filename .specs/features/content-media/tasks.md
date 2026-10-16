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

## Follow-up

- Illustrations for the pages still on `CardArtwork` (generation prompt handed
  to the client; each image needs the clinician's approval before it ships).
