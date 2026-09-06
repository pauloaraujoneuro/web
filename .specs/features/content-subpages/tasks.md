# SEO Subpage Foundation — Tasks

## Execution Protocol

Implement these tasks with the `tlc-spec-driven` skill. Each task includes its
own tests or build gate and receives an atomic commit before the next begins.

**Design**: `.specs/features/content-subpages/design.md`
**Status**: Approved / In Progress

## Test Coverage Matrix

> Generated from the repository and spec. No project test guidelines or
> existing tests were found; strong defaults apply. The user approved Node
> built-in unit tests and Playwright E2E, with visual/mobile behavior prioritized.

| Code Layer | Required Test Type | Coverage Expectation | Location Pattern | Run Command |
| --- | --- | --- | --- | --- |
| Content models and validation | unit | Published/draft filtering, ordering, completeness, duplicates, dates, and cross-references | `tests/unit/**/*.test.ts` | `npm run test:unit` |
| App Router pages and interactions | e2e | Every route family has a happy path; dynamic routes cover unknown slugs; representative mobile and desktop behavior | `tests/e2e/**/*.spec.ts` | `npm run test:e2e` |
| Metadata, schema, sitemap | unit + build | Exact public inventory, canonical URLs, schema/visible-source parity | `tests/unit/**/*.test.ts` | `npm run test:unit && npm run build` |
| Presentational CSS/config | build + e2e | No compile/lint errors; no page overflow at 390px; usable controls and heading hierarchy | `app/**/*.css`, `tests/e2e/**/*.spec.ts` | `npm run check` |

## Gate Check Commands

| Gate Level | When to Use | Command |
| --- | --- | --- |
| Quick | Content/domain tasks | `npm run test:unit && npm run lint` |
| Full | Route and interaction tasks | `npm run test:unit && npm run test:e2e && npm run lint` |
| Build | Phase completion and visual integration | `npm run check` |

## Execution Plan

### Phase 1: Foundation

```text
T1 → T2
```

### Phase 2: Public Content Routes

```text
T2 → T3 → T4 → T5 → T6 → T7
```

### Phase 3: Responsive Verification

```text
T7 → T8
```

## Task Breakdown

### T1: Establish content and test foundation

**Status**: Complete

**What**: Add test tooling, Markdown dependencies, typed catalogs, publication
filters, and build-time validation for treatments, posts, FAQs, and locations.
**Where**: `package.json`, lockfile, `content/`, `app/lib/`, `tests/unit/`
**Depends on**: None
**Reuses**: `constants.ts`
**Requirement**: SUBP-12–13, SUBP-16, SUBP-18–20, SUBP-24, SUBP-27–29,
SUBP-39, SUBP-45, SUBP-47–49
**Tools**: shell, apply_patch; Skills: tlc-spec-driven, Next.js
**Done when**: public inventories are deterministic; invalid publishable data
fails with source/field detail; draft/incomplete entries are undiscoverable;
unit tests and lint pass.
**Tests**: unit
**Gate**: Quick
**Commit**: `feat(content): add typed publication catalogs`

### T2: Create shared subpage shell and content primitives

**Status**: Complete

**What**: Make global navigation route-aware and add the shared subpage shell,
breadcrumbs, intro, cards, accordion, author, and appointment CTA primitives.
**Where**: `app/components/`, `app/globals.css`, `constants.ts`
**Depends on**: T1
**Reuses**: Current Header, Footer, WhatsApp tracking, and FAB
**Requirement**: SUBP-01–05, SUBP-32, SUBP-37, SUBP-40–46
**Tools**: apply_patch; Skills: tlc-spec-driven, Next.js, react-best-practices
**Done when**: inner routes have semantic shared chrome, 44px controls, valid
full-route navigation, reusable content primitives, and build/lint pass.
**Tests**: e2e
**Gate**: Build
**Commit**: `feat(layout): add responsive subpage shell`

### T3: Implement treatment hub and detail template

**Status**: Complete

**What**: Add `/tratamentos` and `/tratamentos/[slug]` from the canonical
catalog, including related content, disclaimer, FAQ, author, and CTA.
**Where**: `app/tratamentos/`, related content components
**Depends on**: T4
**Requirement**: SUBP-10–14, SUBP-30–34, SUBP-37–38
**Tools**: apply_patch; Skills: tlc-spec-driven, Next.js
**Done when**: published treatments group/order correctly, representative detail
is complete, and unknown/unpublished slugs return 404.
**Tests**: e2e
**Gate**: Full
**Commit**: `feat(treatments): add hub and detail pages`

### T4: Implement Markdown blog hub and article template

**Status**: Complete

**What**: Add `/blog` and `/blog/[slug]` backed by repository Markdown with
metadata, table of contents, article attribution, disclaimer, and relations.
**Where**: `content/posts/`, `app/blog/`, `app/lib/blog.ts`
**Depends on**: T3
**Requirement**: SUBP-15–20, SUBP-30–34, SUBP-37–38, SUBP-45–46
**Tools**: apply_patch; Skills: tlc-spec-driven, Next.js
**Done when**: valid published posts render newest-first without duplication,
Markdown is semantic, and invalid/draft/unknown posts stay undiscoverable.
**Tests**: unit + e2e
**Gate**: Full
**Commit**: `feat(blog): add markdown article routes`

### T5: Implement specialist profile page

**Status**: Complete

**What**: Add `/sobre` using canonical identity, credentials, roles, formation,
congress activity, and Campo Grande contextual CTA.
**Where**: `app/sobre/page.tsx`
**Depends on**: T5
**Requirement**: SUBP-06–09, SUBP-30, SUBP-34, SUBP-37
**Tools**: apply_patch; Skills: tlc-spec-driven, Next.js
**Done when**: profile has one H1, current/prior locations are unambiguous, and
visible/structured facts share canonical sources.
**Tests**: e2e
**Gate**: Full
**Commit**: `feat(profile): add specialist profile page`

### T6: Implement canonical FAQ page

**Status**: Complete

**What**: Add `/perguntas-frequentes` with grouped visible FAQs and matching
FAQPage structured data.
**Where**: `app/perguntas-frequentes/page.tsx`
**Depends on**: T2
**Requirement**: SUBP-21–24, SUBP-30, SUBP-33, SUBP-37
**Tools**: apply_patch; Skills: tlc-spec-driven, Next.js
**Done when**: only published categories render, answers remain non-diagnostic,
and JSON-LD exactly matches visible content.
**Tests**: e2e
**Gate**: Full
**Commit**: `feat(faq): add canonical questions page`

### T7: Implement location routes and SEO inventory

**What**: Add location hub/detail pages, shared structured-data helpers, and a
deterministic sitemap covering exactly the indexable route inventory.
**Where**: `app/locais-de-atendimento/`, `app/lib/seo.ts`, `app/sitemap.ts`
**Depends on**: T6
**Requirement**: SUBP-25–36, SUBP-38–44, SUBP-47–49
**Tools**: apply_patch; Skills: tlc-spec-driven, Next.js
**Done when**: Campo Grande uses only approved optional facts, invalid locations
404, canonical metadata/schema agree, and sitemap has no omissions/duplicates.
**Tests**: unit + e2e
**Gate**: Build
**Commit**: `feat(locations): add attendance pages and SEO inventory`

### T8: Verify and polish mobile-first behavior

**What**: Add representative Playwright journeys and adjust only the responsive
styles needed for 390px-first usability, keyboard access, and desktop scaling.
**Where**: `tests/e2e/`, `playwright.config.ts`, `app/globals.css`, affected components
**Depends on**: T7
**Requirement**: SUBP-03–05, SUBP-37–46
**Tools**: Playwright, apply_patch; Skills: tlc-spec-driven, Next.js,
react-best-practices
**Done when**: routes pass at mobile/desktop widths, have no horizontal overflow,
menus/accordions work by keyboard, CTAs remain usable, and `npm run check` passes.
**Tests**: e2e
**Gate**: Build
**Commit**: `test(subpages): verify responsive public journeys`

## Diagram–Definition Cross-Check

| Task | Depends On | Diagram Shows | Status |
| --- | --- | --- | --- |
| T1 | None | Start | Match |
| T2 | T1 | T1 → T2 | Match |
| T3 | T2 | T2 → T3 | Match |
| T4 | T3 | T3 → T4 | Match |
| T5 | T4 | T4 → T5 | Match |
| T6 | T5 | T5 → T6 | Match |
| T7 | T6 | T6 → T7 | Match |
| T8 | T7 | T7 → T8 | Match |

## Test Co-location Validation

| Task | Layer | Matrix Requires | Task Says | Status |
| --- | --- | --- | --- | --- |
| T1 | Content/domain | unit | unit | OK |
| T2 | Routes/components/styles | e2e/build | e2e | OK |
| T3 | Routes | e2e | e2e | OK |
| T4 | Content + routes | unit + e2e | unit + e2e | OK |
| T5 | Route | e2e | e2e | OK |
| T6 | Route/schema | e2e | e2e | OK |
| T7 | Content/SEO/routes | unit + e2e/build | unit + e2e | OK |
| T8 | Responsive interaction | e2e | e2e | OK |
