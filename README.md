# Indowud NFC — Marketing Website

A marketing and product-information website for **Indowud NFC** (Natural
Fibre Composite) — an agro-husk-based, zero-wood building material brand
built around the "Ahimsa" design philosophy: build without cutting down a
single tree.

The site presents the material story, product range, sustainability
credentials, technical specifications, a journal/blog, case studies and
contact/sample-request flows for architects, designers, builders and
homeowners.

## Tech stack

- **React 19** with **React Router 7** for client-side routing
- **Vite** (rolldown) for the dev server and production build
- **Tailwind CSS v4** for styling, with a custom brand token palette
  (ink, husk, sand, leaf, grain) defined in `src/index.css`
- **Framer Motion** for scroll reveals, page transitions and the floating
  navigation's layout animations
- **lucide-react** for iconography
- Hand-built SVG illustrations and lightweight chart/table components
  (no external charting libraries or stock imagery for the journal)

## Getting started

```bash
npm install
npm run dev       # start the local dev server (http://localhost:5173)
npm run build     # production build to dist/
npm run preview   # preview the production build locally
npm run lint      # run ESLint
```

## Project structure

```
src/
├── components/         # Shared UI: nav, footer, hero, reveals, illustrations…
│   └── ui/             # Smaller primitives: buttons, badges, counters…
├── data/               # Static content data (e.g. blog posts)
├── pages/              # Route-level views (one file per page)
├── App.jsx             # Route table, page-transition wrapper, splash screen
└── index.css           # Tailwind entry + brand tokens + texture/surface utilities
```

## Pages

| Route | Page | Purpose |
|---|---|---|
| `/` | Home | Material story, hero, product highlights, key stats |
| `/products`, `/products/category/:slug`, `/products/:id` | Products | Product catalogue, categories and detail pages |
| `/about-us` | Sustainability | Ahimsa philosophy, mission/vision, certifications, founder's note |
| `/technical-details` | Technical Details | The NFC matrix formulation and test reports |
| `/suggestions` | Guidelines | Installation and fabrication suggestions |
| `/downloads` | Downloads | Spec sheets and downloadable resources |
| `/contact` | Contact | Enquiry form and office details |
| `/blog`, `/blog/:slug` | Journal | Original essays on material, sustainability and the industry, with live search and per-entry numbering |
| `/notice-board` | Notice Board | Announcements |
| `/case-study` | Case Study | Project showcase |

## Notable features

- **Adaptive floating navigation** — the dock-style nav detects whether the
  section behind it is dark or bright and switches its entire colour theme
  (textured light pill on dark art, dark pill on bright sections) so it
  always reads with clear contrast.
- **Journal search & numbering** — every blog entry carries a stable,
  unique number and the journal listing supports live keyword filtering.
- **Hand-drawn SVG illustrations & data visualisations** — each blog post
  has a bespoke scene illustration plus lightweight `CompareTable` /
  `StatBars` components for grounding claims in numbers.
- **Tactile, material-led visual language** — custom paper-grain textures,
  engraved/embossed surface treatments and an earthen colour palette
  (ink/husk/sand/leaf/grain) reinforce the "built from husk, not wood" story.
- **Content protection** — right-click, text selection, copy/cut and common
  devtools shortcuts are deterred site-wide via `ContentGuard`, while still
  allowing normal interaction with form fields.
- **Scroll-reveal & page-transition animations** powered by Framer Motion,
  kept lightweight throughout.

## Design tokens & theming

Brand colours, fonts and reusable surface/texture utility classes
(`texture-grain`, `texture-charcoal`, `surface-engraved`, etc.) are defined
once in `src/index.css` under the Tailwind `@theme` block and a small set of
custom utility classes, so the visual language stays consistent across every
page and component.
