# Components Organization

This folder is organized by role:

- `analytics/`: wrappers that add measurement to an existing interaction.
- `content/`: presentation of catalog content (cards, breadcrumbs, FAQ, JSON-LD).
- `conversion/`: the appointment CTA and the floating WhatsApp action.
- `icons/`: SVG/icon components.
- `layout/`: the site shell — header, footer, navigation.
- `sections/`: page-level sections used to compose routes.

## Rules

- Use direct imports from source files (avoid barrel `index.ts` exports).
- Keep route composition in the route file and place heavy UI blocks in `sections/`.
- Keep icons isolated in `icons/` and import only the icon needed.
- Content components read from `app/lib` accessors, never from the catalogs directly.
