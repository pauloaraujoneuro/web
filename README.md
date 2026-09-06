# Dr. Paulo Araújo — Neurocirurgia

Institutional and educational site for Dr. Paulo Araújo, neurosurgeon
(`CRM-PR 37567` • `RQE 29967`), practising at Clínica Protrauma in
Campo Grande – MS. Built with Next.js App Router, TypeScript and Tailwind 4.

Production: <https://www.pauloaraujoneuro.com.br>

## Getting started

```bash
npm install
npm run dev          # http://localhost:3000
```

Node 22 or newer. `npm run check` is the full gate and must pass before a PR:

```bash
npm run check        # unit tests → lint → production build → Playwright (prod server)
```

Individual steps:

```bash
npm run test:unit    # tsx + node:test, for content and SEO logic
npm run test:e2e     # Playwright against the dev server
npm run lint
npm run build
```

`npm run test:e2e` reuses a server already listening on port 3100. If you left
one running from an earlier build, kill it first or the run tests stale output.

## Routes

| Route | Source |
| --- | --- |
| `/` | homepage sections in `app/components/sections/` |
| `/sobre` | practitioner data in `constants/` |
| `/tratamentos`, `/tratamentos/[slug]` | `app/lib/treatments.ts` |
| `/blog`, `/blog/[slug]` | Markdown in `content/posts/` |
| `/perguntas-frequentes` | `app/lib/faqs.ts` |
| `/locais-de-atendimento`, `/locais-de-atendimento/[slug]` | `app/lib/locations.ts` |
| `/sitemap.xml`, `/robots.txt`, `/llms.txt` | derived from `app/lib/seo.ts` |
| `opengraph-image` (per route) | rendered by `app/lib/og.tsx` |

## Content model

Treatments, FAQs and locations live in typed catalogs; blog articles are
Markdown with validated frontmatter. Page components receive content as props,
so adding an entry to a catalog produces its page, its hub card, its internal
links and its sitemap entry with no component changes.

Catalog data lives apart from the code that reads it: treatment entries in
`app/content/treatments/`, site facts in `constants/`, accessors and validation
in `app/lib/`.

`app/lib/content-validation.ts` runs at module load. A malformed entry fails the
build rather than reaching production.

### Publication gate

Two independent flags decide how far an entry travels:

| Flag | Effect |
| --- | --- |
| `state: "draft"` | no page, no card, no links |
| `state: "published"` | real page, hub card, internal links |
| `indexable: false` | plus `robots: noindex`, and absent from sitemap and `llms.txt` |
| `indexable: true` | enters the sitemap, `llms.txt` and search results |

Clinical copy is written as `published` + `indexable: false` so it can be
reviewed on the deployment, then flipped to `indexable: true` once the clinician
approves it.

### Factual safety

Every public fact traces to `constants.ts` or an approved catalog field. Design
references and generated mockups are not sources of fact: addresses, phone
numbers, hours, memberships, outcome statistics and clinical timings are only
published once the client confirms them. Optional fields omit cleanly rather
than rendering an empty container.

## Specification

Feature work follows `.specs/features/content-subpages/` — specification,
design, task breakdown with verification evidence, and the implementation
context that records which design decisions were accepted and which generated
details were rejected.

## Deployment

Vercel, deployed from `main`, with a preview deployment per pull request.
