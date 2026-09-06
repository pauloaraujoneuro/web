# AGENTS.md

Working agreement for coding agents in this repository. Read `README.md` first
for the routes, content model and commands.

This is a medical practice site in Brazilian Portuguese. Public copy is subject
to CFM (Conselho Federal de Medicina) rules, so factual discipline matters more
here than implementation speed.

## Non-negotiable rules

1. **Never invent a fact about the practice.** Addresses, phone numbers, e-mail,
   opening hours, prices, insurance acceptance, society memberships,
   years-in-practice, success rates and patient volumes come from the client, via
   `constants.ts` or a catalog field. If it is not already in the repository, it
   does not go on the site.
2. **Never publish clinical claims as approved.** New medical copy ships as
   `state: "published"` with `indexable: false` so the clinician can review it on
   the deployment. Only the clinician's approval flips `indexable` to `true`.
3. **No promises of outcome.** Every treatment page states its limits and says
   plainly when a condition often does not need surgery. Keep the register
   conservative: no timelines, percentages or technique-outcome claims unless
   they are sourced and approved.
4. **Design exports are references, not sources.** Mockups (Stitch, Figma,
   screenshots) guide hierarchy and spacing. Do not copy their generated HTML,
   CDN config, placeholder images or invented facts into the app.
5. **Preserve the established identity.** Brand petrol `#233E4C`, the real logo
   and portrait, the existing header, footer and floating WhatsApp action.
   Two accents exist and stay small: `--accent-sky` for category chips, soft
   callouts and icon plates; green for direct-contact and confirmation
   affordances only. Green is a fill colour — use `--accent-green-ink` when it
   carries an icon or label on a light surface, never `--accent-green` as text.

## Conventions

- TypeScript throughout; `const Component = () => {}` over `function`.
- Tailwind utilities for layout; shared visual patterns live in `app/globals.css`
  as semantic classes (`.content-card`, `.subpage-shell`, `.eyebrow`).
- Early returns. Handlers prefixed `handle`. Descriptive names over comments.
- Icons: `lucide-react`, `strokeWidth={1.5}`, 18–20px, only where they aid
  usability. No emojis, no decorative icon noise.
- Minimum touch target 44px; primary mobile actions 48px.
- Mobile-first: roughly 90% of traffic is mobile, so 390px is the design
  viewport and 320px must not overflow.
- Optional content omits cleanly — a missing address, map or FAQ group must not
  leave an empty container.

## Before you add a page

Add the entry to its catalog (`app/lib/treatments.ts`, `faqs.ts`, `locations.ts`)
or a Markdown file in `content/posts/`. Routing, hub cards, internal links,
sitemap and `llms.txt` follow automatically. Reach for a new component only when
an existing one genuinely cannot express the layout — the component set is
already broad.

## Before you open a PR

- `npm run check` must pass — unit tests, lint, production build and Playwright
  across mobile, tablet and desktop.
- Add coverage with the change: unit tests for content and SEO logic, Playwright
  for routes, keyboard interaction and responsive behaviour.
- Verify visually at 390px and 1440px. Screenshots catch what assertions miss —
  a duplicated heading, a footer gap, a card that reads badly.
- Keep local design exports (`tmp/`) out of the commit.
- Record substantive work in `.specs/features/<feature>/tasks.md` with the
  verification evidence, not just the claim.

## Commit and PR style

Conventional commits (`feat(scope):`, `fix(scope):`, `test(scope):`,
`chore:`). Body explains why, and states what was verified. One logical change
per commit; unrelated local tooling changes stay out.
