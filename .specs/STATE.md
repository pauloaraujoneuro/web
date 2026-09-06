# STATE

## Decisions

### AD-001
- **Decision**: Repeated public content pages use typed canonical catalogs, while long-form blog articles use validated repository Markdown.
- **Reason**: This keeps facts centralized, enables reusable dynamic templates, and makes later editorial additions independent of route implementation.
- **Trade-off**: The repository needs build-time parsers and validation rather than only inline JSX.
- **Scope**: Treatments, blog, FAQs, locations, metadata, structured data, internal links, and sitemap.
- **Date**: 2026-09-06
- **Status**: active

### AD-002
- **Decision**: Public discovery and indexing are gated by both explicit publication state and content completeness validation.
- **Reason**: Empty, fabricated, placeholder, or thin medical pages must not become crawlable production content.
- **Trade-off**: A template may exist in code before a corresponding public URL becomes available.
- **Scope**: All static hubs and dynamic treatment, blog, and location routes.
- **Date**: 2026-09-06
- **Status**: active

### AD-003
- **Decision**: Stitch exports are design references only; production UI reuses the existing brand, real assets, App Router, Tailwind, and semantic components.
- **Reason**: Generated HTML contains inline scripts, external placeholder assets, and unverified facts that are unsuitable for direct integration.
- **Trade-off**: Screens are reconstructed selectively rather than copied pixel-for-pixel.
- **Scope**: All subpage UI and shared layout work.
- **Date**: 2026-09-06
- **Status**: active

## Handoff

- **Feature**: Paulo content subpages / `.specs/features/content-subpages/spec.md`
- **Phase / Task**: Execute — T1 content and test foundation
- **Completed**: specification, design, Stitch direction, test-stack decision, and eight-task execution plan
- **In-progress** (file:line): `.specs/features/content-subpages/tasks.md:1`
- **Next step**: Implement and verify T1, then continue sequentially through the approved eight-task batch.
- **Blockers**: public Campo Grande WhatsApp/phone, MS credential display, and exact locally offered procedures require confirmation before production publication
- **Uncommitted files**: pre-existing `app/layout.tsx`, `.agents/`, and `.claude/` are intentionally excluded from this feature
- **Branch**: `docs/seo-subpage-foundation-spec`
