# SAMARTH TECHNOOLOGIES — Premium Next.js Website

Production-ready Next.js website for Samarth Technoologies, focused on ISO, FSSAI, HACCP, BRC, GMP/GHP, accreditation and food-safety consultancy services.

## Project summary

- Next.js 16 App Router project
- React 19 with TypeScript
- Global CSS styling system
- Responsive homepage and internal pages
- Service listing and dynamic service-detail routes
- SEO metadata, Open Graph image, sitemap and robots generation
- Redirects from legacy `.htm` URLs to the new routes
- Local brand, service, gallery and certificate assets
- Mailto-based enquiry form with a lightweight validation route
- Visitor counter API with safe fallback behavior
- Vercel-ready configuration

## Project structure

```txt
app/
  page.tsx                       Homepage
  about/page.tsx                 About page
  team/page.tsx                  Team page
  credentials/page.tsx           Credentials page
  food-safety/page.tsx           Food Safety page
  gallery/page.tsx               Gallery page
  certificates/page.tsx          Certificates page
  services/page.tsx              All services
  services/[slug]/page.tsx       Individual service pages
  contact/page.tsx               Contact page
  api/enquiry/route.ts           Enquiry validation route
  api/views/route.ts             Visitor counter route
  sitemap.ts                     SEO sitemap
  robots.ts                      SEO robots
components/                      Reusable UI components
lib/data.ts                      Company, service and page content
public/                          Public images, icons and manifests
next.config.mjs                  Next.js configuration and redirects
vercel.json                      Vercel configuration
```

## Run locally

```bash
npm install
npm run dev
```

Open:

```txt
http://localhost:3000
```

## Quality checks

```bash
npm run typecheck
npm run build
```

Full check command:

```bash
npm run ci
```

## Deployment

1. Push the project folder to GitHub.
2. Import the repository in Vercel.
3. Keep the framework as Next.js.
4. Build command: `npm run build`.
5. Output directory: use the Vercel default.
6. Deploy.

## Visitor counter configuration

The visitor counter works safely without external configuration and can use a persistent Redis-compatible REST backend when configured on the deployment platform.

Supported environment variables:

```txt
KV_REST_API_URL=
KV_REST_API_TOKEN=
VIEW_COUNTER_SEED=18132
VIEW_COUNTER_KEY=samarth-technoologies:visitor-count
```

Do not commit `.env` files to the repository.

## Editing content

Most editable website content is in:

```txt
lib/data.ts
```

Use this file to update company details, service descriptions, gallery labels, certificate labels and frequently asked questions.

## Notes

- The brand spelling **SAMARTH TECHNOOLOGIES** is preserved as used by the company and domain.
- `package-lock.json` is included for consistent installs.
- Build and TypeScript checks pass on the current package versions.
