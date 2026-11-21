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
| Projects | `src/data/projects.json` |

Entries are validated at build time against the schemas in `src/content.config.ts`.

## Deploy

Pushing to `main` builds and deploys via `.github/workflows/deploy.yml`.
One-time setup: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
