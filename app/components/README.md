# Components Organization

This folder is organized by role:

- `icons/`: SVG/icon components.
- `sections/`: page-level sections used to compose routes.
- `shared/common/`: generic shared UI primitives (buttons, cards, wrappers, etc).
- `shared/custom/`: app-specific shared components (header, footer, floating actions).

## Rules

- Use direct imports from source files (avoid barrel `index.ts` exports).
- Keep route composition in `app/page.tsx` and place heavy UI blocks in `sections/`.
- Keep reusable pieces in `shared/*` to avoid duplicating behavior.
- Keep icons isolated in `icons/` and import only the icon needed.
