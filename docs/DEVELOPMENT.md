# Development

Portfolio built with SvelteKit 5 and prerendered to static HTML via `@sveltejs/adapter-static`.

## Requirements

- Node.js 22+

## Commands

```bash
npm install     # install dependencies
npm run dev     # dev server at http://localhost:5173
npm run check   # svelte-check type pass (also runs in CI)
npm run build   # prerender the site into build/
npm run preview # serve build/ locally
```

## Layout

| Path | Purpose |
| --- | --- |
| `src/routes/` | Pages: `/`, `/resume`, `/blog/[slug]` |
| `src/lib/components/sections/` | Portfolio sections |
| `src/lib/components/art/` | Decorative SVG illustrations |
| `src/lib/data/` | Typed content (projects, experience, stack, posts) |
| `src/lib/i18n/` | English and Russian dictionaries |
| `src/lib/services/` | GitHub stats, contribution heatmap, visitor counter |
| `src/lib/styles/` | Global stylesheets, imported via `app.css` |
| `src/posts/` | Blog posts as Markdown, rendered by mdsvex |
| `static/` | `CNAME`, favicon, legacy URL redirects |

## Content changes

Copy lives in `src/lib/i18n/en/` and `src/lib/i18n/ru/`; both dictionaries share one key set, enforced at build time. Structural data (which projects exist, in what order) lives in `src/lib/data/`. Adding a blog post means dropping a Markdown file in `src/posts/` and registering it in `src/lib/data/posts.ts`.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which type-checks, builds, and publishes `build/` to GitHub Pages. The site is served at the custom domain in `static/CNAME`, so it deploys at the domain root and needs no base path.

Enable this once in the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
