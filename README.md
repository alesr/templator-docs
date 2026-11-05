# templator-docs

Documentation site for [templator](https://github.com/alesr/templator), built
with [Astro Starlight](https://starlight.astro.build/). Deployed to GitHub
Pages at <https://stdout.alesr.me/templator-docs/> on every push to `main`.

The site lives in this dedicated repository: the templator library repo stays
docs-free. When the templator API changes, the reference pages here must be
updated manually (there is no drift check because the Go sources are not in
this repo).

## Commands

```sh
npm ci
npm run dev     # local dev server
npm run build   # production build into dist/ (fails on broken internal links)
```

## Layout

- `src/content/docs/` — all pages.
- `src/content.config.ts` — Starlight content collection schema.
- `public/` — static assets (favicon, llms.txt).
- `astro.config.mjs` — site config: `site`/`base` point at the GitHub Pages
  project URL (`https://stdout.alesr.me/templator-docs/`, base
  `/templator-docs`). The URL path equals the repo slug — the same serving
  mechanism as the mcpgen docs.
- `.github/workflows/docs.yaml` — build on PRs, deploy to GitHub Pages on
  push to `main`. Pages source must be set to "GitHub Actions" in the repo
  settings (one-time, manual).
