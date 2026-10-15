# Agent Readiness — Tasks

Source: Is Agentic scan of www.pauloaraujoneuro.com.br, 73/100 on 2026-10-14
(https://is-agentic.com/scan/www.pauloaraujoneuro.com.br). Every finding was
re-checked against production with `curl` before changing anything.

## Findings and decisions

| # | Check (tier, result) | Evidence re-checked | Decision |
| --- | --- | --- | --- |
| 1 | Agent-friendly 404s (Essential, Partial) | `/__probe` → 404 `text/html` for `Accept: text/markdown` | Markdown 404 body for agents; HTML 404 unchanged |
| 2 | Markdown negotiation (Essential, Failed) | `/` → `text/html`, `Vary` without `Accept` | `proxy.ts` negotiates per RFC 9110 / acceptmarkdown.com and rewrites to a prerendered Markdown route |
| 4 | When-to-use guidance (Recommended, Failed) | llms.txt had only links | Use cases, non-use cases and how to act, generated from the catalog |
| 5 | Organization schema (Recommended, Failed) | Physician + MedicalClinic inside one `@graph` | Top-level documents; practice typed `["Physician", "Organization"]` with `contactPoint` and `address` |
| 6 | Trust pages (Recommended, Failed) | `/about`, `/contact`, `/privacy` → 404; `/sobre` existed | New `/contato` and `/privacidade`; 308s from the English paths |
| 7 | JSON-LD identity (Recommended, Partial) | Same cause as 5 | Fixed by 5 |
| 3 | Developer resources (Recommended, Failed) | The site has no API, SDK or developer portal | No change: nothing truthful to publish |
| 8 | MCP server (Recommended, Partial) | Registry hit `eliekfouri/studio76` is not this site | No change: product decision, see PR |

## Constraints honoured

- No new facts: contact, address, hours and registrations come from
  `constants/` and `content/clinics.ts`. The privacy text describes what the
  code does (no forms; Vercel Analytics, Speed Insights, GTM; WhatsApp click
  events without message text; Google Maps embed) and makes no commitments
  the repository cannot back. Client review before merge, as with all copy.
- HTML output, canonical URLs and the sitemap/llms.txt boundary are unchanged
  for existing routes; the Markdown response carries `Link: rel="canonical"`.
- The Markdown 404 never echoes the requested path (no reflected text in a
  document agents read).

## Verification (2026-10-14, local production build)

- `npm run test:unit`: 65 pass (negotiation vectors from acceptmarkdown.com,
  Markdown for every inventory route, 404 body, trust-page length, llms.txt
  guidance and format, Organization schema).
- `npm run lint`, `npm run build`: clean; 43 Markdown representations
  prerendered under the internal `/markdown-variant` route.
- `PLAYWRIGHT_USE_BUILD=1 npx playwright test`: 190 pass across mobile,
  tablet and desktop, including `tests/e2e/agent-readiness.spec.ts`, which
  asserts the final status, `Content-Type`, `Vary` and body of real responses.
- `curl` against `next start`:
  - `/` + `Accept: text/markdown` → 200 `text/markdown; charset=utf-8`,
    `Vary: Accept`, `Link: <…>; rel="canonical"`.
  - `/` + `Accept: text/html` → 200 `text/html`, unchanged.
  - unknown path + `Accept: text/markdown` → 404 Markdown linking llms.txt
    and sitemap.xml; with `text/html` → the existing HTML 404.
  - `Accept: application/pdf` → 406 with the available types listed.
  - `/about`, `/contact`, `/privacy` → 308 to the Portuguese pages.
- Visual: `/contato` and `/privacidade` at 390px and 1440px.

### Known limitation

`next start` overwrites `Vary` on prerendered HTML pages
(`res.setHeader('Vary', …)` in Next's app-page handler), so locally the HTML
variant does not list `Accept`. The Markdown, 404 and 406 responses do. The
`Vary: Accept` header in `next.config.ts` targets the Vercel deployment, where
config headers are applied at the edge; confirm on the preview deployment.
