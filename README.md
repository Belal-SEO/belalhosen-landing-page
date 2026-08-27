# Nose Creek Physiotherapy — Homepage

A Next.js (App Router) rebuild of the Nose Creek Physiotherapy homepage, componentized and styled with Tailwind CSS. The site is fully static (no server code, no forms) and is configured for static export so it can be hosted on Cloudflare Pages.

## Structure

- `app/layout.tsx` — root layout, fonts (`next/font/google`), SEO metadata, JSON-LD structured data.
- `app/page.tsx` — assembles the homepage from the section components.
- `components/` — one component per homepage section (Hero, ServicesSection, WhatWeTreat, Testimonials, TeamCarousel, FAQSection, ContactLocation, etc).
- `lib/data.ts` — content data (services, conditions treated, team members, blog posts, FAQs) that the components map over.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

`next.config.mjs` sets `output: "export"`, so `npm run build` produces a static site in `out/` — no Node server required at runtime.

## Deploying to Cloudflare Pages

**Option A — Git integration (recommended, no secrets needed):**

1. In the Cloudflare dashboard, go to **Workers & Pages → Create → Pages → Connect to Git** and select this repository.
2. Framework preset: **Next.js (Static HTML Export)**, or set manually:
   - Build command: `npm run build`
   - Build output directory: `out`
3. Save and deploy. Every push to the branch you select will trigger a new deployment automatically.

**Option B — CLI deploy with Wrangler:**

```bash
npm run build
npx wrangler pages deploy out --project-name=nose-creek-physiotherapy
```

This requires a Cloudflare API token (`wrangler login` or `CLOUDFLARE_API_TOKEN` env var) — see https://developers.cloudflare.com/pages/get-started/direct-upload/.
