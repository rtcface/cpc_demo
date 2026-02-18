# AGENTS.md - CPC Demo Project Guidelines

This document provides guidelines for agentic coding agents working in this Astro project.

## Project Overview

- **Framework**: Astro 5.x with React integration
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS
- **Content**: Astro Content Collections with Zod schemas
- **Package Manager**: npm

## Build Commands

```bash
npm run dev          # Start development server (http://localhost:4321)
npm run build        # Build for production
npm run postbuild    # Run pagefind search indexing (after build)
npm run format       # Format code with Prettier
```

Note: This project does not have a test suite configured.

## Code Style Guidelines

### General Conventions

- Use TypeScript strict mode (already configured in tsconfig.json)
- Prefer Astro components (.astro) over React (.tsx) when possible
- Use React only when client-side interactivity is required
- No ESLint configured - use Prettier for formatting only

### Imports and Path Aliases

The project uses path aliases configured in tsconfig.json:

```typescript
import Header from "@components/base/Header.astro";
import { slugify } from "@lib/textConverter";
import Accordion from "@shortcodes/Accordion";
import type { BlogEntry } from "@types";
import "@/styles/main.scss";
```

Available aliases:

- `@components/*` -> `./src/components/*`
- `@lib/*` -> `src/lib/*`
- `@shortcodes/*` -> `src/components/common/shortcodes/*`
- `@types/*` -> `src/types/*`
- `@/*` -> `./src/*`

### File Naming

- Astro components: `PascalCase.astro` (e.g., `Button.astro`, `Header.astro`)
- React components: `PascalCase.tsx` (e.g., `Search.tsx`, `Accordion.tsx`)
- Regular files: `kebab-case` (e.g., `textConverter.ts`)
- Content files: `kebab-case.md` or `kebab-case.mdx`

### Astro Component Props

Define Props interface inline in the component frontmatter:

```astro
---
interface Props {
  title: string;
  description?: string;
  image?: string;
}

const { title, description = "", image } = Astro.props;
---
```

### React Component Props

Use explicit TypeScript interfaces:

```tsx
interface Props {
  searchList: SearchableEntry[];
}

const SearchPage = ({ searchList }: Props) => { ... };
```

### Type Definitions

Types for Astro Content Collections are defined in `src/types/index.d.ts`. When adding new collections, also update this file.

Common type patterns:

- Collection entries: `XxxEntry` (e.g., `BlogEntry`, `IntegrantesEntry`)
- Use `CollectionEntry` from `astro:content`
- Use `z` from `astro:content` for schema validation in `src/content/config.ts`

### CSS and Styling

- Use Tailwind CSS classes in component templates
- Custom styles in `src/styles/main.scss`
- Tailwind config at project root
- Use `clsx` and `tailwind-merge` for conditional classes

### Content Collections

Content is organized in `src/content/` with collections defined in `src/content/config.ts`:

```typescript
const blog = defineCollection({
  loader: glob({ pattern: "**\/[^_]*.{md,mdx}", base: "./src/content/blog" }),
  schema: ({ image }) => searchable.extend({ ... }),
});
```

Key conventions:

- Files starting with `_` are ignored
- Use `-index.{md,mdx}` for single-entry collections
- Use `**\/[^_]*.{md,mdx}` for multi-entry collections

### Error Handling

- Use try/catch for async operations
- Return optional types when failure is acceptable
- Use Zod for runtime validation of content frontmatter

### Prettier Configuration

Prettier is configured in `.prettierrc`:

```json
{
  "plugins": ["prettier-plugin-astro"],
  "overrides": [{ "files": ["*.astro"], "options": { "parser": "astro" } }]
}
```

Run `npm run format` before committing.

## Project Structure

```
src/
├── components/       # UI components (base/, common/, shortcodes/)
├── content/         # Content collections (blog, docs, etc.)
├── lib/             # Utility functions
├── pages/           # Astro pages (file-based routing)
├── styles/          # Global SCSS styles
└── types/           # TypeScript type definitions
```

## Adding New Features

1. **New page**: Create `.astro` file in `src/pages/`
2. **New component**: Add to appropriate `src/components/` subdirectory
3. **New content collection**: Add to `src/content/config.ts` and types to `src/types/index.d.ts`
4. **New utility**: Add to `src/lib/`

## Key Dependencies

- `astro`, `@astrojs/react`, `@astrojs/tailwind`
- `react` / `react-dom`
- `tailwindcss`, `marked`, `fuse.js`, `date-fns`

## Common Patterns

### Using Shortcodes in Markdown

Shortcodes are auto-imported via `astro-auto-import`:

```markdown
<Accordion title="Click to expand">
  Content here
</Accordion>
```

### Fetching Collection Data

```typescript
import { getCollection } from "astro:content";

const posts = await getCollection("blog");
const filtered = posts.filter((p) => !p.data.draft);
```

### Conditional Classes

```astro
<div class={`base-class ${condition ? "extra-class" : ""}`}></div>
```
