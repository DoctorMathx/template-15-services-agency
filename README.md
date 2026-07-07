# Studio Ova — Template 15

A premium FinStore template for **design studios, agencies, and creative services**. Editorial black-white with signal-red accent, case-study driven.

Built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4**.
Design: **Sora** display + **Inter** body + **IBM Plex Mono** for labels. Jet-black + stone + signal red.

## Pages
`/` Home (statement hero, marquee logos, flagship case, work grid, services table, process, big quote, testimonials) · `/work` Filterable case-study index (by category + industry) · `/work/[slug]` Full case study with problem-approach-outcome, gallery, metrics · `/services` (with 6 service lines) · `/about` (studio story + team + clients + principles) · `/contact` · `/faq` · `/brief` (multi-step brief intake) · `/thank-you`

## Customise
- **Brand & studio** → `lib/site-config.ts`
- **Case studies & services** → `mock/products.ts`
- **Client notes** → `mock/testimonials.ts`
- **FAQs** → `mock/faqs.ts`
- **Design tokens** → `app/globals.css`

Note: case-study covers use Unsplash by default. Replace with your own project shots for production.

## Run
```bash
npm install && npm run dev
```
