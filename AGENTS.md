# AGENTS.md - CPC Demo

## Stack

- Astro 5.x + React (client-side only), TypeScript strict, Tailwind CSS
- Content: Astro Content Collections + Zod schemas
- Package manager: npm (v10.8.2 pinned in `packageManager`)
- No test suite

## Commands

```bash
npm run dev          # dev server → http://localhost:4321
npm run build        # production build
npm run postbuild   # pagefind indexing (run after build)
npm run format      # prettier format (run before committing)
npm run deploy       # build + postbuild + scripts/deploy.js
```

## Path Aliases

```
@components/* → ./src/components/*
@lib/*        → src/lib/*
@shortcodes/* → src/components/common/shortcodes/*
@types/*     → src/types/*
@/*          → ./src/*
```

## Content Collections

**Critical:** files starting with `_` are **ignored** by the glob loader. Use this pattern:

| Pattern | Use case |
|---------|---------|
| `**/[^_]*.{md,mdx}` | multi-entry collections |
| `-index.{md,mdx}` | single-entry collections |

When adding a new collection, update **both**:
- `src/content/config.ts` — schema + loader
- `src/types/index.d.ts` — TypeScript type (e.g., `XxxEntry`)

Active collections: `nosotros`, `integrantes`, `informacion`, `nuestroCompromiso`, `normatividad`, `nuestro-trabajo`, `estudios-proyectos`, `blog`, `docs`, `home`, `indexCards`, `poetry`, `portfolio`, `recipes`, `terms`.

The `blog` collection uses `reference("authors")` — authors is the only cross-collection reference.

## Shortcodes

Auto-imported via `astro-auto-import` (no manual import needed):

```md
<Accordion title="Click">content</Accordion>
<Notice type="info">message</Notice>
<Youtube id="videoId" />
<Tabs>
  <Tab title="Tab 1">content</Tab>
</Tabs>
```

Available at `@shortcodes/Accordion`, `@shortcodes/Notice`, `@shortcodes/Youtube`, `@shortcodes/Tabs`, `@shortcodes/Tab`.

## Components

- Astro: `.astro` files → prefer these
- React: `.tsx` files → only when client-side interactivity is required
- Naming: `PascalCase.{astro|tsx}`, `kebab-case.ts`

## Styles

- Tailwind utilities in templates
- Custom CPC colors: `text-cpc-navy`, `bg-cpc-blue`, `bg-cpc-gold`
- Custom `intersect` variant for scroll-triggered animations
- Global: `src/styles/main.scss`

## Formatting

No ESLint. Prettier only with `prettier-plugin-astro`. Always run `npm run format` before committing.