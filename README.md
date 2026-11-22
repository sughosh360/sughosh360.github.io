# sughosh360.github.io

Personal site built with [Astro](https://astro.build) and deployed to GitHub Pages by GitHub Actions.

## Develop

Requires Node 22.

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # type-check + build to dist/
```

## Editing content

| What | File |
|---|---|
| Name, bio, contact links | `src/data/site.ts` |
| Reading list | `src/data/books.json` (`status`: `reading`, `next` or `read`) |
| Selected papers | `src/data/papers.json` (title, citation, topic, link and a short technical takeaway) |
| Case studies and walkthroughs | `src/pages/notes/` |
| Dated current-work feature | `src/pages/index.astro` |
| Projects | `src/data/projects.json` |
| Experience | `src/data/experience.json` (listed in file order, newest first) |

Data files are typed; `@astrojs/check` (in `npm run build`) catches shape mismatches.

## Deploy

Pushing to `main` builds and deploys via `.github/workflows/deploy.yml`.
One-time setup: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
