# SEO Subpage Foundation Epic — Specification

**Status**: Draft — awaiting confirmation

**Created**: 2026-09-06

**Last revised**: 2026-09-06

## Problem Statement

The current Paulo Araújo website is a single-page presentation. It has no
durable route structure for professional profile content, treatments,
educational articles, frequently asked questions, or service locations. This
limits organic-search entry points, makes internal linking shallow, and would
force future content to be implemented as bespoke pages.

This epic will deliver the complete **bare subpage foundation**: five first-class
sections, three reusable dynamic detail templates, canonical content contracts,
global navigation integration, and the technical SEO needed for safe indexing.
It will not attempt to produce the full long-term library of medical pages and
articles in the same iteration.

## Epic Boundary

The epic owns these public route families:

```text
/sobre
/tratamentos
/tratamentos/[slug]
/blog
/blog/[slug]
/perguntas-frequentes
/locais-de-atendimento
/locais-de-atendimento/[slug]
```

In product/API notation, the dynamic routes are `/tratamentos/:slug`,
`/blog/:slug`, and `/locais-de-atendimento/:slug`. This specification uses
Next.js App Router filesystem notation (`[slug]`) when referring to their source
directories; both notations describe the same public URL behavior.

The initial location detail route is:

```text
/locais-de-atendimento/campo-grande
```

“Bare structure” means the shared layouts, content models, page templates,
validation, states, navigation, metadata, structured data, sitemap integration,
and representative seed content required to prove each route family end to end.
It does **not** mean publishing empty, placeholder, or thin pages for search
engines.

## Goals

- [ ] Deliver all five section entry points: Sobre, Tratamentos, Blog, Perguntas
      Frequentes, and Locais de Atendimento.
- [ ] Deliver reusable detail templates for treatments, blog articles, and
      service locations.
- [ ] Make later treatments, articles, FAQs, and locations content additions
      rather than bespoke route implementations.
- [ ] Give every indexable page unique metadata, a canonical URL, intentional
      indexing behavior, relevant structured data, and sitemap coverage.
- [ ] Establish useful internal links between the homepage, hubs, detail pages,
      and appointment paths.
- [ ] Preserve Paulo's current brand, accessibility baseline, analytics, and
      WhatsApp conversion flow.
- [ ] Prevent unconfirmed medical, credential, contact, and location facts from
      being published or included in machine-readable data.

## Route Deliverables

| Route | Required bare structure | Initial indexability |
| --- | --- | --- |
| `/sobre` | Professional profile, credentials, formation, current/prior roles, areas of focus, CTA | Indexable after factual review |
| `/tratamentos` | Grouped treatment hub populated from the treatment catalog | Indexable when it contains at least one published treatment |
| `/tratamentos/[slug]` | Reusable long-form treatment template with related content and CTA | Per-entry `published` and content-completeness rules |
| `/blog` | Article hub with featured/latest states and an intentional empty state | Indexable when at least one article is published; otherwise `noindex` |
| `/blog/[slug]` | Markdown-driven educational article template | Published entries only |
| `/perguntas-frequentes` | Consolidated, categorized FAQ page using visible canonical answers | Indexable after factual/clinical review |
| `/locais-de-atendimento` | Active-location hub populated from the location catalog | Indexable when it contains at least one indexable active location |
| `/locais-de-atendimento/[slug]` | Reusable location template with scheduling guidance and CTA | Per-location active/indexable rules |
| `/locais-de-atendimento/campo-grande` | Initial location instance for Clínica Protrauma | Indexable after contact/location facts are approved |

## Content Foundations

### Treatment catalog

The implementation SHALL support a typed, ordered treatment catalog. The
provisional topic backlog below guides the content model and UI but is not a
promise that all twelve pages will be published during this structural epic.

| Group | Proposed slug | Topic |
| --- | --- | --- |
| Nervo periférico | `cirurgia-nervos-perifericos` | Peripheral nerve surgery overview |
| Nervo periférico | `lesao-plexo-braquial` | Brachial plexus injuries |
| Nervo periférico | `transferencia-nervosa-tetraplegia` | Nerve transfer in tetraplegia/tetraparesis |
| Nervo periférico | `sindrome-tunel-carpo` | Carpal tunnel syndrome |
| Nervo periférico | `sindrome-cubital` | Ulnar nerve compression/cubital tunnel syndrome |
| Nervo periférico | `sindrome-tunel-tarso` | Tarsal tunnel syndrome |
| Coluna | `cirurgia-coluna` | Spine surgery overview |
| Coluna | `hernia-disco` | Herniated disc |
| Coluna | `estenose-canal-vertebral` | Spinal canal stenosis |
| Coluna | `mielopatia-cervical` | Cervical myelopathy |
| Coluna | `fraturas-coluna` | Complex spinal fractures |
| Reabilitação | `reabilitacao-neurocirurgica` | Functional neuro-surgical rehabilitation |

Each treatment entry SHALL support, at minimum: slug, publication/indexing
state, group, display title, short description, unique primary intent, metadata,
summary, content sections, indications, limitations or alternative-path
guidance, care/recovery journey, visible FAQs, related-treatment references,
related-article references, relevant structured-data fields, ordering, and an
honest last-modified date.

### Blog content

Blog articles SHALL live as repository-managed Markdown content. Required
frontmatter SHALL include: title, meta description, slug, publication state,
publish date, last-modified date, primary keyword, secondary keywords, target
audience, search intent, featured flag, order, author identity, related-treatment
slugs, and optional FAQs.

The body template SHALL support an introductory dek, semantic H2/H3 headings,
paragraphs, lists, links, callouts, images with alt text, an author block, a
visible educational disclaimer, related content, and a contextual appointment
CTA.

### FAQ content

The FAQ page SHALL use a canonical typed collection rather than separately
copying answers into page markup and JSON-LD. Entries SHALL support category,
question, answer, order, publication state, and optional related-route links.

### Location catalog

The location model SHALL support slug, active/indexable state, clinic name,
city, state, approved contact fields, approved address fields, scheduling copy,
first-consultation guidance, related treatments, FAQs, CTA message, map/embed
configuration, and last-modified date. Optional or unconfirmed fields SHALL be
omitted cleanly.

## Out of Scope

| Feature | Reason |
| --- | --- |
| Full production copy for every treatment in the provisional backlog | This epic delivers the scalable structure and representative end-to-end content; bulk content is a follow-up content program. |
| Large launch batch of blog articles | Article production is separate from the blog route, parser, validation, and template foundation. |
| CMS or admin interface | Version-controlled repository content is sufficient for this release. |
| Search, pagination, tags, or filtering | Not needed to prove the initial hubs and detail templates; add after the content volume warrants it. |
| Comments, newsletter, or social sharing system | Separate product capabilities unrelated to the SEO foundation. |
| Patient portal, authentication, medical-record storage, online diagnosis, or triage | The site is public and informational. |
| Online calendar, appointment booking backend, or payments | Conversion continues through existing WhatsApp/contact paths. |
| Testimonials, ratings, before/after media, or patient cases | Requires separate consent and compliance decisions. |
| Full visual rebrand | Designs may extend the current system but must retain the established identity. |
| Thin city/keyword landing-page generation | Only truthful and useful location pages may be indexable. |
| Unsupported or unapproved medical claims | Clinical accuracy and factual approval remain publication gates. |

---

## Assumptions & Open Questions

Every unresolved choice has a conservative default. Items marked `No` must be
confirmed before their affected content becomes indexable; they do not block
building the underlying templates.

| Assumption / decision | Chosen default | Rationale | Confirmed? |
| --- | --- | --- | --- |
| Route scope | The five named sections and three detail templates listed in Epic Boundary are all P1 | This is the user's stated epic boundary | Yes |
| Architecture | Typed catalogs for treatments/FAQs/locations and Markdown for blog articles | Proven in the Dayara and Clínica Massoni reference sites and suitable for static SEO pages | Yes — direction accepted |
| Epic output | Build complete reusable structures with representative seed content; defer the bulk content library | Keeps the epic structural while proving real end-to-end behavior | Yes |
| Blog priority | `/blog` and `/blog/[slug]` are P1, not a later phase outside the epic | Explicitly requested | Yes |
| Visual direction | Adapt the supplied Stitch hierarchy and surface system while retaining Paulo's current Poppins typography, real logo/portrait, existing header/menu, and floating WhatsApp action | Captures the selected direction without importing generated HTML, fabricated facts, or unnecessary navigation changes | Yes |
| Treatment publication | A detail page is indexable only after all required content fields are complete and approved | Prevents thin or placeholder medical pages |
| Representative treatment seed | Use at least one approved entry to prove the production template; test fixtures prove unpublished and invalid states | Demonstrates the real route without forcing twelve articles of clinical copy into the structural epic | No |
| Blog seed | Use at least one approved educational article if available; otherwise ship the blog hub as `noindex` with an intentional empty state and keep fixtures out of production discovery | An empty indexable content hub offers little search value | No |
| Clinical copy | Base drafts on current approved claims and authoritative sources; clinician approval is required before indexing | Existing homepage blurbs are not sufficient for every detail page | No |
| Contact number | Continue using `+55 41 2018-0330` until a replacement is supplied | It is the only verified number in the repository | No |
| Registration display | Preserve `CRM-PR 37567` and `RQE 29967`; do not infer an MS registration | No confirmed alternative exists in the repository | No |
| Initial location | Clínica Protrauma, Campo Grande–MS is the sole active location; street address/map remain omitted until approved | Matches PR #1 and avoids republishing intentionally removed details | No |
| URL format | Lowercase, accent-free, hyphenated Portuguese slugs; no city keyword stuffing outside truthful location intent | Produces durable canonical URLs and reduces cannibalization | Yes — default |
| Legacy navigation | Global navigation becomes route-aware while valuable homepage section anchors remain reachable as `/#section` | Bare hashes fail when the header appears on inner routes | Yes — functional requirement |
| Migration dependency | Implement after PR #1 merges, or base on its exact head | Prevents reintroducing Curitiba as an active location | Yes |

**Open questions:** none are silently unresolved; every pending publication fact
or design choice is represented above with a conservative behavior.

---

## User Stories

### P1: Use a Complete Subpage Shell ⭐ MVP

**User Story**: As a visitor entering on any route, I want a coherent and
accessible site shell so that I can understand where I am, move between the five
sections, and contact the practice.

**Why P1**: Every subpage depends on shared navigation, layout, and conversion
behavior.

**Acceptance Criteria**:

1. **SUBP-01** — WHEN any route in the epic renders THEN it SHALL use the shared
   header, footer, skip link, main landmark, route-aware navigation, and
   page-contextual appointment action.
2. **SUBP-02** — WHEN global navigation renders on an inner route THEN Sobre,
   Tratamentos, Blog, Perguntas Frequentes, Locais de Atendimento, and Contato
   SHALL resolve to valid full routes or explicit `/#section` homepage anchors.
3. **SUBP-03** — WHEN a visitor navigates with a keyboard THEN all interactive
   controls SHALL have visible focus, logical focus order, accessible names, and
   touch/click targets of at least 44 by 44 CSS pixels where the control permits.
4. **SUBP-04** — WHEN an epic route is viewed at 320 px, 768 px, or 1440 px THEN
   its primary content and actions SHALL be readable without horizontal page
   overflow.
5. **SUBP-05** — WHEN the mobile menu is opened and a destination is selected or
   dismissed THEN focus SHALL move to a visible, logical control and the closed
   menu SHALL not remain keyboard-reachable.

**Independent Test**: Enter through each route family and traverse the complete
site shell on desktop, mobile, and keyboard-only input.

### P1: Verify Paulo's Profile at `/sobre` ⭐ MVP

**User Story**: As a prospective patient, I want a dedicated profile so that I
can verify Paulo's identity, qualifications, areas of focus, and professional
history before contacting the practice.

**Why P1**: Practitioner identity and trust support every medical content page.

**Acceptance Criteria**:

1. **SUBP-06** — WHEN `/sobre` renders THEN it SHALL contain exactly one H1 and
   visible sections for professional introduction, areas of focus, education,
   fellowship, current role, prior roles, and scientific/congress activity.
2. **SUBP-07** — WHEN the page displays Curitiba or União da Vitória THEN each
   reference SHALL be explicitly contextualized as education or prior work and
   SHALL not appear in current-attendance UI or structured data.
3. **SUBP-08** — WHEN `/sobre` renders identity or credential structured data
   THEN every factual value SHALL come from the same approved canonical doctor
   data used by visible content.
4. **SUBP-09** — WHEN the visitor reaches a profile CTA THEN it SHALL use the
   canonical WhatsApp helper with Campo Grande context and a stable tracking
   label.

**Independent Test**: Compare rendered profile facts and structured data against
the approved constants, including the classification of every city reference.

### P1: Discover Treatments at `/tratamentos` ⭐ MVP

**User Story**: As a patient or caregiver, I want a treatment hub and focused
detail pages so that I can understand Paulo's areas of work without treating the
website as a diagnostic tool.

**Why P1**: Treatments are the primary commercial-search route family.

**Acceptance Criteria**:

1. **SUBP-10** — WHEN `/tratamentos` renders THEN it SHALL list only published
   entries from the canonical catalog, ordered and grouped by Nervo Periférico,
   Cirurgia da Coluna, and Reabilitação Neurocirúrgica.
2. **SUBP-11** — WHEN a published `/tratamentos/[slug]` renders THEN it SHALL show
   exactly one H1, breadcrumb, summary, educational sections, indications,
   limitations or alternative-path guidance, care/recovery journey, visible FAQ,
   related content, author attribution, disclaimer, and contextual CTA.
3. **SUBP-12** — WHEN a treatment is draft, incomplete, non-indexable, or unknown
   THEN it SHALL not appear in the hub or sitemap and its public detail URL SHALL
   resolve as not found rather than as a thin page.
4. **SUBP-13** — WHEN treatment content is validated THEN duplicate slugs,
   duplicate canonical URLs, duplicate primary intents, invalid dates, missing
   required sections, or unknown cross-references SHALL fail with an error naming
   both the source entry and offending field/target.
5. **SUBP-14** — WHEN a homepage expertise card has a corresponding published
   treatment THEN its action SHALL link to that canonical detail page; otherwise
   the card SHALL remain informative without linking to an unpublished route.

**Independent Test**: Publish one representative treatment fixture, verify hub,
detail, metadata, related links, and CTA, then verify draft/invalid/unknown cases.

### P1: Read Articles at `/blog` and `/blog/[slug]` ⭐ MVP

**User Story**: As a patient or caregiver, I want an educational article hub and
readable article pages so that I can learn about symptoms and treatment topics
and find the relevant professional next step.

**Why P1**: The blog route family is an explicit deliverable and the foundation
for sustained informational-search growth.

**Acceptance Criteria**:

1. **SUBP-15** — WHEN at least one article is published THEN `/blog` SHALL list
   published articles in deterministic newest-first order, support a featured
   state without duplicating cards, and link every card to its canonical slug.
2. **SUBP-16** — WHEN zero articles are published THEN `/blog` SHALL render an
   intentional, accessible empty state, SHALL not appear as an indexable sitemap
   URL, and SHALL emit `noindex,follow` until the first article is published.
3. **SUBP-17** — WHEN a published `/blog/[slug]` renders THEN it SHALL show exactly
   one H1, breadcrumb, dek, author, publish/update dates, semantic article body,
   table of contents for eligible headings, educational disclaimer, optional
   visible FAQs, related treatment/articles, and contextual CTA.
4. **SUBP-18** — WHEN article content is parsed THEN required frontmatter,
   ISO-format dates, unique slug/canonical, known author, known related-treatment
   references, and non-empty body SHALL be validated before the route is
   discoverable.
5. **SUBP-19** — WHEN an article is draft, invalid, or unknown THEN it SHALL not
   appear in the blog hub or sitemap and its public detail URL SHALL resolve as
   not found.
6. **SUBP-20** — WHEN an article links to a treatment and the treatment links
   back to that article THEN both references SHALL resolve to published canonical
   routes; unpublished targets SHALL not produce broken public links.

**Independent Test**: Exercise the zero-post state, one valid published article,
a draft, invalid frontmatter, related links, and an unknown slug.

### P1: Review Questions at `/perguntas-frequentes` ⭐ MVP

**User Story**: As a prospective patient, I want common questions grouped in one
place so that I can understand consultation, treatment, recovery, location, and
scheduling without receiving generic diagnostic claims.

**Why P1**: FAQ is one of the five explicit subpage deliverables and supports
search intent plus patient confidence.

**Acceptance Criteria**:

1. **SUBP-21** — WHEN `/perguntas-frequentes` renders THEN it SHALL show exactly
   one H1 and only published FAQs, grouped in deterministic order by categories
   that contain at least one visible entry.
2. **SUBP-22** — WHEN FAQ JSON-LD is emitted THEN every emitted question and
   answer SHALL exactly match content visibly rendered on that page.
3. **SUBP-23** — WHEN an answer depends on diagnosis or individual circumstances
   THEN it SHALL use non-diagnostic language and direct the reader to professional
   evaluation without promising an outcome.
4. **SUBP-24** — WHEN an FAQ links to another site section THEN the link SHALL
   resolve to a published canonical route or be omitted.

**Independent Test**: Compare grouped visible FAQs with the canonical collection,
JSON-LD, internal links, and keyboard interaction.

### P1: Find Attendance at `/locais-de-atendimento` ⭐ MVP

**User Story**: As a patient, I want to find Paulo's confirmed current attendance
location and scheduling path so that I do not confuse professional history with
where appointments are available now.

**Why P1**: Accurate Campo Grande intent is the immediate migration requirement.

**Acceptance Criteria**:

1. **SUBP-25** — WHEN `/locais-de-atendimento` renders THEN it SHALL list only
   active, indexable locations from the canonical catalog and link each to its
   canonical detail route.
2. **SUBP-26** — WHEN `/locais-de-atendimento/campo-grande` renders THEN it SHALL
   show exactly one H1, Clínica Protrauma, Campo Grande–MS, approved contact and
   address fields, scheduling guidance, first-consultation guidance, visible
   FAQs, relevant treatment links, and a tracked appointment CTA.
3. **SUBP-27** — WHEN a contact, address, map, business-hours, registration, or
   offered-service field is absent or unconfirmed THEN the template SHALL omit
   that field and its container without a placeholder, broken layout, or inferred
   value.
4. **SUBP-28** — WHEN a location is inactive, non-indexable, incomplete, or
   unknown THEN it SHALL not appear in the hub, sitemap, current-attendance
   structured data, or public detail routes.
5. **SUBP-29** — WHEN active-location copy is audited THEN Curitiba and União da
   Vitória SHALL have zero occurrences as current service locations.

**Independent Test**: Verify the hub and Campo Grande detail using approved and
omitted optional fields, then test inactive and unknown location states.

### P1: Publish Technically Complete SEO ⭐ MVP

**User Story**: As a search engine, I want unambiguous URLs, metadata, visible
content, and structured relationships so that only complete and truthful pages
are eligible for indexing.

**Why P1**: Proper technical SEO is the stated goal of the epic, not a follow-up.

**Acceptance Criteria**:

1. **SUBP-30** — WHEN an indexable epic route builds THEN it SHALL have a unique
   title, unique meta description, absolute self-referencing canonical URL,
   Open Graph title/description/URL/image, and index/follow robots intent.
2. **SUBP-31** — WHEN a route is empty, draft, incomplete, inactive, or explicitly
   non-indexable THEN it SHALL emit `noindex` where it renders intentionally or
   return not found where it has no public representation, and SHALL be absent
   from the sitemap.
3. **SUBP-32** — WHEN a detail page renders THEN it SHALL include visible
   breadcrumbs and matching `BreadcrumbList` JSON-LD derived from one source.
4. **SUBP-33** — WHEN FAQ JSON-LD is present THEN its questions and answers SHALL
   exactly match visible page content and SHALL be omitted when no visible FAQ
   collection exists.
5. **SUBP-34** — WHEN treatment, article, profile, or location structured data is
   emitted THEN it SHALL use the most specific valid schema supported by the
   visible content and SHALL contain only canonical, approved facts.
6. **SUBP-35** — WHEN the sitemap is generated THEN it SHALL contain every and
   only indexable homepage, static subpage, published treatment, published blog
   article, and active/indexable location exactly once, with honest
   content-derived or hand-maintained `lastModified` dates.
7. **SUBP-36** — WHEN crawl controls are generated THEN `robots.txt` SHALL allow
   public route families, identify the canonical sitemap URL, and SHALL not rely
   on robots rules to hide pages that require `noindex` or 404 behavior.
8. **SUBP-37** — WHEN headings are inspected THEN each page SHALL have exactly
   one descriptive H1 and a sequential, meaningful H2/H3 hierarchy without
   using headings solely for visual styling.
9. **SUBP-38** — WHEN internal-link coverage is inspected THEN every published
   detail page SHALL be reachable through at least one crawlable HTML link from
   a hub or another indexable page, and no crawlable link SHALL target an
   unpublished route.
10. **SUBP-39** — WHEN two entries normalize to the same slug, canonical URL, or
    primary search intent THEN the build SHALL fail before deployment and name
    the conflicting entries.

**Independent Test**: Build the site, enumerate route outputs, and compare
metadata, robots intent, JSON-LD, internal links, and sitemap coverage against
the canonical content inventories.

### P1: Preserve Conversion and Runtime Resilience ⭐ MVP

**User Story**: As the practice, I want the expanded site to preserve reliable,
measurable appointment actions without making rendering depend on third parties.

**Why P1**: Every organic landing page needs a functioning next step.

**Acceptance Criteria**:

1. **SUBP-40** — WHEN a visitor selects a WhatsApp CTA THEN the system SHALL use
   the canonical URL builder, include route-appropriate message context, and
   preserve URL sanitization.
2. **SUBP-41** — WHEN analytics is enabled THEN a CTA SHALL emit a stable,
   page-specific location/label without placing the WhatsApp message or other
   visitor-sensitive text in the analytics payload.
3. **SUBP-42** — WHEN analytics configuration is absent or disabled THEN every
   CTA SHALL still navigate normally without a client-side exception.
4. **SUBP-43** — WHEN JavaScript is unavailable THEN server-rendered page content,
   crawlable internal links, breadcrumbs, and direct external contact links SHALL
   remain usable; only progressive enhancements may degrade.
5. **SUBP-44** — WHEN WhatsApp, Instagram, Lattes, a map, or another external
   destination is unavailable THEN the local site SHALL remain rendered and
   navigable without surfacing an application error.

**Independent Test**: Exercise representative CTAs and route navigation with
analytics enabled/disabled, JavaScript disabled, and external requests blocked.

## Edge Cases

- **SUBP-45** — WHEN optional media is absent THEN the relevant template SHALL
  preserve content hierarchy without a broken image, blank frame, or layout
  shift caused by an empty media container.
- **SUBP-46** — WHEN an image is published THEN it SHALL have explicit dimensions
  or an aspect-ratio reservation, responsive sizing, and meaningful alt text or
  an intentional empty alt for decorative imagery.
- **SUBP-47** — WHEN a related-treatment, related-article, FAQ-link, or
  location-link target does not exist or is unpublished THEN validation SHALL
  name the source and target, and public rendering SHALL not emit a broken link.
- **SUBP-48** — WHEN identical source content is used in more than one route THEN
  each route SHALL add unique intent and substantive visible value or one route
  SHALL be consolidated/non-indexed to prevent duplication.
- **SUBP-49** — WHEN repeated builds run from the same commit and content set THEN
  route inventory, ordering, metadata, structured data, and sitemap URLs SHALL be
  deterministic.

## Implicit-Requirement Dimensions

| Dimension | Resolution |
| --- | --- |
| Input validation & bounds | Required: validate content states, slugs, metadata lengths/presence, dates, headings, required sections, FAQ shape, authors, ordering, and cross-references at build time. |
| Failure / partial-failure states | Required: invalid publishable content fails the build; unknown/unpublished detail slugs return 404; intentional empty hubs use explicit empty and indexing states; optional fields omit cleanly. |
| Idempotency / retry / duplicate handling | Static generation is deterministic; repeated builds from the same commit produce the same public inventory; duplicate slug/canonical/intent fails. |
| Auth boundaries & rate limits | N/A because all epic content is public and there is no write API, authentication, or server-side submission. |
| Concurrency / ordering | N/A for runtime mutation because deployed content is immutable; deterministic date/order fields govern catalog rendering. |
| Data lifecycle / expiry | Required: draft/published and active/indexable states govern discovery; removal or unpublishing removes links/schema/sitemap entries; `lastModified` reflects real content changes. |
| Observability | Required: retain Vercel Analytics and Speed Insights; CTA events use stable page-specific identifiers and exclude message text. |
| External-dependency failure | Required: no third party may block server rendering; optional map embeds and external destinations are isolated from local page availability. |
| State-transition integrity | Required only for repository content states: an entry is publicly discoverable only when its publication/indexing state and completeness validation both permit it. No mutable end-user state exists. |

## Requirement Traceability

| Requirement IDs | Story | Planned phase | Status |
| --- | --- | --- | --- |
| SUBP-01–05 | Complete Subpage Shell | Foundation | Pending |
| SUBP-06–09 | Sobre | Core static pages | Pending |
| SUBP-10–14 | Tratamentos | Content systems | Pending |
| SUBP-15–20 | Blog | Content systems | Pending |
| SUBP-21–24 | Perguntas Frequentes | Core static pages | Pending |
| SUBP-25–29 | Locais de Atendimento | Content systems | Pending |
| SUBP-30–39 | Technical SEO | SEO integration | Pending |
| SUBP-40–44 | Conversion and Resilience | Integration | Pending |
| SUBP-45–49 | Edge Cases | Validation | Pending |

**Coverage**: 49 requirements, 0 mapped to tasks, 49 pending design/task mapping.

## Success Criteria

- [ ] All five named section routes and all three dynamic detail templates build
      successfully and use the shared site shell.
- [ ] Published treatment, blog, and location examples prove each full journey
      from hub to detail to related content to appointment CTA.
- [ ] Unknown, unpublished, incomplete, inactive, and empty states behave exactly
      as specified and never create indexable thin pages.
- [ ] Route inventory, crawlable internal links, robots intent, and sitemap agree
      on the exact set of indexable URLs with no duplicates or omissions.
- [ ] Every indexable route has unique metadata, canonical URL, meaningful
      headings, and visible-content-aligned structured data.
- [ ] All identity, credentials, current location, contact details, and treatment
      claims are canonical and approved; Curitiba/União da Vitória never appear
      as active service coverage.
- [ ] Representative routes pass automated accessibility, responsive, navigation,
      metadata, structured-data, sitemap, and CTA checks.
- [ ] Lint, automated tests, and production build pass without deleting or
      weakening pre-existing checks.
- [ ] Adding a later treatment, article, FAQ, or location requires canonical
      content plus validation/tests, not a new page implementation.

## Confirmation Gate

Before Design begins, confirm or revise:

1. Representative seed strategy: at least one approved treatment and, if content
   is available, one approved article; otherwise `/blog` launches `noindex` with
   an intentional empty state.
2. Whether the provisional 12-treatment catalog should remain only a backlog in
   this epic or whether a defined subset must publish in the first release.
3. Any revision to the approved Stitch adaptation recorded in `context.md`.
4. The conservative publication rules for clinical copy, contact details,
   credentials, offered services, street address, and map.
