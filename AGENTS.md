# Website Development Workflow

This project is built section by section.

Never build the entire website in one pass unless explicitly instructed.

For every major section:

1. Understand the purpose of the section.
2. Inspect existing brand/company information.
3. Search available UI registries for suitable patterns.
4. Present multiple design directions when requested.
5. Implement only the selected direction.
6. Do not modify already approved sections unless explicitly instructed.

Available UI sources include:

- shadcn/ui
- @aceternity
- @magicui
- @animate-ui
- 21st.dev
- Motion

Avoid generic AI-generated design patterns.

Do not default to:

- white backgrounds everywhere
- badge + heading + paragraph
- repeated three-card grids
- generic SaaS layouts
- purple/blue gradients
- excessive rounded cards
- centered content in every section
- random animation overload

Prefer:

- custom visual hierarchy
- real photography
- varied composition
- asymmetry where appropriate
- strong typography
- intentional spacing
- visual depth
- purposeful animation
- real multi-page architecture

All primary navigation destinations must use real Next.js routes.

Do not replace separate pages with anchor links to homepage sections.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
