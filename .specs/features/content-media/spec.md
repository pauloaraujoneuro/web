# Content media — dedicated card banners

Scope: extend PR #8 with the 22 generated banners selected in this chat.
The five simplified replacements are the selected versions for rehabilitation,
cortical re-education, nerve-surgery timing, C6/C7 and hand transfers.

## Acceptance criteria

- AC1: all 11 treatment and 11 post slugs in the generation manifest have an
  explicit optional `cardImage` path to their own WebP under `/images/cards/`.
  Convert the selected PNGs to 1200×800 WebP; no originals or rejected variants
  enter the commit. Registry dimensions match each file; each is below 150 KiB.
- AC2: cards prefer `cardImage`, then the first existing teaching figure, then
  abstract artwork. Missing or invalid registered banner paths fail validation.
  Omitting the optional field remains valid. Banners are decorative (`alt=""`).
- AC3: all selected banners load on their corresponding hub cards, including
  the featured blog block. Cards retain their 16:9 crop, title/link names and
  keyboard navigation. No horizontal overflow at 320, 390 or 1440 pixels.
- AC4: existing article/treatment body figures, lightboxes, publication/indexing
  flags, copy and structured-data/image-sitemap figures remain unchanged.
  Record that generated artwork still awaits clinician review on the PR preview;
  this task does not merge or deploy to production.
- AC5: listing banners are omitted from the accessibility image tree via empty
  alt; every associated card link, including featured, names its article or
  treatment. Tab moves between cards in DOM order with a visible focus outline
  and a link target at least 44px high. Teaching figures and expanded figures
  retain descriptive names. Audit both hubs and representative illustrated
  treatment/article pages (including open lightboxes) for WCAG A/AA violations.

## Execution

One atomic task (T3): add registered banner assets and catalog/frontmatter
fields, select them in the existing card and featured-post renderers, cover
mapping/fallback/validation in unit tests and loading/navigation in Playwright,
run `npm run check`, inspect 390px/1440px screenshots, commit and update PR #8.
