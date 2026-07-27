# Harishan Rajendrakumar — Portfolio

Portfolio and case-study website for Harishan Rajendrakumar, a Lead UI/UX
Engineer working across product design, responsive frontend engineering and
travel booking experiences.

## Highlights

- 14 project case studies covering travel, SaaS, creative and physical-computing work
- Responsive portfolio design built with Next.js and React
- Original project photography, video and editorial media
- Automated static deployment to GitHub Pages

## Local development

Requires Node.js `>=22.13.0`.

```bash
npm install
npm run dev
```

The local development server uses vinext for compatibility with the existing
Cloudflare-based deployment.

## Quality checks

```bash
npm run lint
npm test
```

`npm test` creates the same static export used by GitHub Pages and verifies the
homepage, case-study routes, metadata and media output.

## Deployment

Pushing `main` runs `.github/workflows/deploy-pages.yml`. The workflow:

1. installs the locked dependencies;
2. creates a Next.js static export in `out/`;
3. uploads the export as a GitHub Pages artifact; and
4. deploys it to `https://harishan15.github.io/`.

The existing Cloudflare/Sites build remains available through `npm run build`.
