# SEO Subpage Foundation — Implementation Context

**Gathered:** 2026-09-06

**Spec:** `.specs/features/content-subpages/spec.md`

**Status:** Ready for design

---

## Feature Boundary

Deliver the reusable, SEO-safe foundation for `/sobre`, `/tratamentos`,
`/tratamentos/[slug]`, `/blog`, `/blog/[slug]`,
`/perguntas-frequentes`, `/locais-de-atendimento`, and
`/locais-de-atendimento/[slug]`. The iteration includes shared components,
content contracts, representative content states, navigation, metadata,
structured data, sitemap coverage, and validation. Bulk medical/article content
production remains outside this iteration.

## Implementation Decisions

### Stitch Is a Reference, Not Source Code

- Use the exported Stitch screens to guide hierarchy, spacing, responsive
  composition, and reusable component boundaries.
- Do not paste the generated HTML, Tailwind CDN configuration, inline scripts,
  Google-hosted images, Material Symbols, or generated placeholder links into
  the Next.js application.
- Rebuild selected patterns with the repository's existing App Router,
  TypeScript, Tailwind 4, Next Image, analytics wrapper, real Paulo assets, and
  semantic HTML.
- Retain the current logo and professional photography. Generated people, logos,
  clinic photos, maps, or medical illustrations are not production assets.

### Visual Language

- Preserve the established petrol brand anchor `#233E4C`, muted steel
  `#7E97A3`, and neutral background family.
- Adopt Stitch's clearer surface hierarchy: white reading cards, subtle
  blue-gray secondary surfaces, thin borders, restrained shadows, and occasional
  dark-petrol authority/CTA panels.
- Keep the current Poppins font for the first implementation slice. Plus Jakarta
  Sans is visually acceptable but changing the whole site's font is unnecessary
  to establish the subpage system.
- Prefer generous editorial whitespace and legible typography over high-density
  dashboards, metric tiles, or icon-heavy bento layouts.
- Reuse pills only for short categories/statuses. Do not turn every label or
  action into a pill.

### Responsive Navigation

- Preserve the existing responsive header, logo, menu, and floating WhatsApp
  action, then make their links route-aware.
- Do not add Stitch's fixed mobile bottom navigation during the foundation
  slice. It competes with the existing floating CTA and materially changes the
  homepage shell.
- Inner pages use visible breadcrumbs. Desktop long-form pages may use a sticky
  table of contents; on mobile it becomes an inline, collapsible or static
  section without consuming fixed viewport space.
- Minimum interactive target is 44 by 44 CSS pixels; primary mobile actions
  should generally be 48 pixels tall.

### Flexible Content

- Treatment, FAQ, location, and practitioner facts live in typed canonical
  modules instead of JSX.
- Blog articles live in Markdown with validated frontmatter.
- Page components receive content as props and do not embed topic-specific
  claims unless the component is a static profile section sourced from canonical
  practitioner data.
- Repeated elements such as breadcrumbs, page introductions, treatment cards,
  FAQ accordions, author cards, related-content cards, and appointment CTAs are
  reusable.
- Optional content blocks omit cleanly. A missing image, map, FAQ group, related
  item, or address must not leave an empty visual container.

### Medical and Factual Safety

- Existing repository constants are the factual baseline.
- Stitch-generated clinical copy is reference material only and requires source
  research plus clinician approval before it can become indexable content.
- Do not publish or encode generated addresses, phone numbers, email addresses,
  opening hours, memberships, years-in-practice metrics, success percentages,
  insurance status, telemedicine availability, clinic amenities, or surgical
  technology claims.
- Specifically reject the generated WhatsApp placeholders, generated
  `Rua Marechal Rondon` / `Rua Oceano Atlântico` addresses, generated
  `contato@drpauloaraujo.com.br`, generated schedules, `12+`, `100%`,
  SBN/ABNc membership claims, “Lattes verificado” claims, and current Curitiba
  attendance.
- The current repository phone and CRM/RQE remain unchanged until the client
  supplies replacements or confirms their public use in Mato Grosso do Sul.

### Page-Specific Direction

#### Treatments Hub

- Keep the three-pillar structure: Nervo Periférico, Cirurgia da Coluna, and
  Reabilitação Neurocirúrgica.
- Use concise treatment cards and clear hierarchy from the Stitch desktop/mobile
  screens.
- Category jump links may be used when they navigate visible sections; they are
  not interactive filters.
- Defer clinical metrics, regeneration timelines, and procedure-specific
  technology banners until their copy is researched and approved.

#### Treatment Detail

- Use the Stitch editorial split: readable primary column plus restrained
  desktop sidebar.
- Required content regions remain those in the spec: summary, educational
  sections, indications, limits/alternatives, care journey, FAQ, related content,
  attribution, disclaimer, and CTA.
- “Lesão do plexo braquial” is the representative design topic, not permission to
  publish every generated timing, diagnostic, prognostic, or technique claim.

#### Blog Detail

- Reuse the long-form article layout, author metadata, optional table of
  contents, disclaimer, related content, and contextual CTA.
- Reading progress is deferred; it is not required to prove the SEO/content
  foundation.
- Reading time may be derived from content only if implemented deterministically.

#### Sobre

- Use the existing portrait and canonical education/professional-history data.
- Clearly separate current Campo Grande attendance from prior work and education
  in Curitiba/União da Vitória.
- Use an editorial timeline rather than porting all Stitch cards verbatim.

#### Location

- Prioritize confirmed clinic identity, city/state, appointment guidance, what to
  bring, and CTA.
- Address, hours, map, phone, parking, accessibility, and other amenities render
  only when explicitly approved in canonical location data.

### Agent's Discretion

- Exact component names and file splits, provided components remain cohesive.
- Whether FAQ uses native `details/summary` or a small client component,
  provided keyboard and screen-reader behavior meets the spec. Native disclosure
  is preferred for progressive enhancement.
- Exact responsive breakpoints and card grid counts within the existing Tailwind
  system.
- Exact decorative textures, borders, and shadows within the restrained visual
  direction.

## Specific References

- Desktop treatments hub:
  `tmp/tratamentos_dr._paulo_ara_jo/screen.png`
- Mobile treatments hub:
  `tmp/tratamentos_dr._paulo_ara_jo_mobile/screen.png`
- Desktop treatment detail:
  `tmp/les_o_do_plexo_braquial_dr._paulo_ara_jo/screen.png`
- Mobile treatment detail:
  `tmp/les_o_do_plexo_braquial_dr._paulo_ara_jo_mobile/screen.png`
- Desktop article:
  `tmp/artigo_quando_a_cirurgia_de_nervo_indicada_dr._paulo_ara_jo/screen.png`
- Mobile article:
  `tmp/artigo_quando_a_cirurgia_de_nervo_indicada_dr._paulo_ara_jo_mobile/screen.png`
- Mobile profile:
  `tmp/sobre_o_dr._paulo_ara_jo_neurocirurgia_mobile/screen.png`
- Mobile Campo Grande location:
  `tmp/atendimento_em_campo_grande_ms_dr._paulo_ara_jo_mobile/screen.png`

The `tmp/` exports remain local design references and are not production
dependencies or PR assets.

## Deferred Ideas

- Fixed mobile bottom navigation.
- Reading-progress indicator.
- Advanced treatment filters, search, pagination, or taxonomy browsing.
- Medical diagrams or AI-generated clinical imagery.
- Interactive clinical timelines and metric dashboards.
- Live maps before exact address and embed approval.
- Full bulk treatment/article writing program.

## Testing Decision

- Use Node's built-in test runner through `tsx` for typed content and SEO logic.
- Use Playwright for representative route, keyboard, and responsive journeys.
- Prioritize visual and interaction coverage at a 390 px mobile viewport because
  mobile accounts for approximately 90% of expected traffic.
