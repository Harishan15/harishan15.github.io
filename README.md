# Harishan Rajendrakumar — Portfolio

Portfolio and case-study website for Harishan Rajendrakumar, a Lead UI/UX
Engineer working across product design, responsive frontend engineering and
travel booking experiences.

## Highlights

- 14 project case studies covering travel, SaaS, creative and physical-computing work
- Responsive portfolio design built with Next.js and React
- Original project photography, video and editorial media
- Automated static deployment to GitHub Pages
- Dark blue V2 design with interactive particles and a complete V1 design switch

## Portfolio versions

The new design is the default at `https://harishan15.github.io/`.
The original design is available at `/portfolio-v1/`. The fixed **Portfolio V1 /
Portfolio V2** switch changes the entire site, preserving the current case study.
Each version has its own layout and stylesheet so the designs stay independent.
The selected version is part of the URL and survives reloads and shared links.

- `app/(v2)/`: new homepage layout and all 14 redesigned case-study pages
- `app/v2/`: interactive React components, content and styles for the new design
- `app/(v1)/`: preserved original homepage, case studies and stylesheet
- `app/case-studies/data.ts`: shared case-study content
- `app/components/VersionSwitch.tsx`: switch available in both versions

The existing `release/v1` branch preserves the original source unchanged.

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
homepages, all 28 case-study routes, version switching, metadata and media output.
Preview the exported site with `python3 -m http.server 5174 --directory out`.

## Deployment

Pushing `main` runs `.github/workflows/deploy-pages.yml`. The workflow:

1. installs the locked dependencies;
2. creates a Next.js static export in `out/`;
3. uploads the export as a GitHub Pages artifact; and
4. deploys it to `https://harishan15.github.io/`.

The existing Cloudflare/Sites build remains available through `npm run build`.
