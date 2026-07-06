
# Callas Foundation — Full Frontend Rebuild Plan

A complete, frontend-only React rebuild inspired by the Saartjie Baartman Centre layout, styled with the Callas brand (blue #2B59C3, red #D91A1A, black, white). No Supabase, no backend — mock data + placeholder REST endpoints ready for a future ASP.NET Core API.

## 1. Foundation & Design System
- Strip Lovable placeholder; set brand tokens in `src/styles.css` (blue/red/black/off-white, typography scale, shadows, motion easings).
- Add fonts via `<link>` in `__root.tsx` (Playfair Display for headings, Inter for body).
- Install `framer-motion` and `lucide-react`; set up shared motion presets (fade-slide `y:15→0`, `cubic-bezier(0.16,1,0.3,1)`, stagger, hover lift `y:-4`).
- Copy uploaded logo + banner image into `src/assets/` via lovable-assets pointers; set favicon from logo.
- Set proper `<head>` metadata (title, description, OG) per route.

## 2. Public Layout & Navigation
- `PublicLayout` wrapping public routes: sticky navbar (`backdrop-blur-md bg-white/85`), footer, page transitions.
- **Navbar**: logo left; nav links center with animated underline on active route; social icons (Facebook, Instagram, Twitter/X, LinkedIn, WhatsApp) inside navbar right side; pulsing red "Get Help Now" CTA; mobile hamburger drawer.
- **Footer**: dark section with mission, quick links, contact (32 Kiewiet Road, +27 72 539 5113, emails), NPO 217-433 governance line, dynamic copyright year.
- No admin links anywhere public.

## 3. Public Routes
- `/` **Home** — Hero with uploaded banner as background (visible behind headline), tagline "Cape Flats · Helping In Our Way", H1 "Dignity. Protection. Restoration.", dual CTAs (Get Help Now / Our Programmes); red crisis alert strip (SAPS 10111 / GBV 0800 428 428); rolling impact counters (500+ meals, 240+ responders trained, cases supported, years of service); "Why Donate" section with embedded YouTube video (7pRgdkQGFdI) beside inline donate form; programmes preview grid; founder feature (Caroline Peters); partners strip; latest news preview; volunteer CTA band.
- `/about` — Story, vision, mission, 5 core pillars, values, timeline, team preview.
- `/founder` — Caroline Peters full profile.
- `/programmes` — Master grid of 7 pillars with `<Link>` to each detail page.
  - `/programmes/access-to-justice`
  - `/programmes/psychosocial-support`
  - `/programmes/gbv-first-responders`
  - `/programmes/bbb-boys-programme`
  - `/programmes/community-kitchen`
  - `/programmes/human-rights-clubs`
  - `/programmes/mens-engagement`
- `/get-help` — Emergency intake: quick-exit button (ESC or button navigates to google.com + clears history), safety notice, contact preference (Safe to call / Text only / Active risk), form.
- `/donate` — Tier cards (R100 meal-pack, R500 court accompaniment, R1500 responder training sponsor, custom), impact explanation, bank details, PayFast/placeholder button.
- `/volunteer` — Multi-step form (profile → skills alignment → schedule → confirm).
- `/support-our-work` — Partnership tiers for corporates/institutions.
- `/news` — News/blog grid (mock data, filterable by category).
- `/news/$slug` — Article detail.
- `/events` — Upcoming events list + past events.
- `/events/$slug` — Event detail.
- `/gallery` — Masonry gallery using uploaded images + generated assets, lightbox.
- `/resources` — Downloadable PDFs/links (safety plan, legal rights, referral directory).
- `/shop` — "Coming Soon" polished placeholder with email capture.
- `/contact` — Contact form + map + hours.
- `/partners` — Full partner listing.

## 4. Chatbot Widget
- Floating bottom-right chatbot on all public pages: canned Q&A tree (What we do, How to get help, Donate, Volunteer, Location), then "Continue on WhatsApp" button linking to `wa.me/27725395113`.

## 5. Admin Portal (frontend-only, mock auth)
- `/admin` — Login page (email/password) — calls placeholder `POST /api/auth/login`, stores JWT in `localStorage` (`callas_admin_token`), redirects to `/admin/dashboard`. For local dev, any credentials with `admin@callas` + non-empty password succeeds so it's usable without a backend.
- `_admin` pathless layout with `beforeLoad` guard → redirects to `/admin` if no token.
- Admin layout: side nav (Dashboard, Posts, Events, Team, Gallery, Messages, Settings), top bar with logout.
- `/admin/dashboard` — Stats cards, edit impact counters (persisted to localStorage as mock).
- `/admin/posts`, `/admin/events`, `/admin/team`, `/admin/gallery`, `/admin/messages`, `/admin/settings` — CRUD tables wired to `src/lib/api.ts` mock client (in-memory + localStorage) using the placeholder REST paths listed in the brief.
- All admin API calls attach `Authorization: Bearer <token>` header so swapping to ASP.NET Core later is trivial.

## 6. Data & Integration Layer
- `src/lib/api.ts` — typed fetch wrapper for `/api/...` endpoints with mock fallback when no backend responds.
- `src/data/*.ts` — authentic mock arrays (programmes, news, events, team, gallery, partners, resources, impact metrics).
- No Supabase packages, no Cloud enablement.

## 7. Motion & Polish
- Route transition wrapper using `AnimatePresence`.
- Staggered reveal on lists/cards via `motion` variants.
- Hover lift + icon bloom on cards.
- Counter animation using `useMotionValue` + `animate` for rolling impact numbers.
- Fully responsive (mobile drawer nav, stacked grids, fluid typography).

## 8. SEO & Meta
- Per-route `head()` with unique title/description/OG.
- `sitemap.xml` server route enumerating all public routes.
- `robots.txt` allowing all.

## Technical notes
- Stack stays TanStack Start + Tailwind v4 + shadcn.
- Tokens in `src/styles.css` under `@theme inline` (oklch equivalents of the hex values).
- Framer Motion + lucide-react added via `bun add`.
- YouTube embed via privacy-enhanced `youtube-nocookie.com` iframe.
- Quick-exit: `window.location.replace('https://www.google.com')` + `history.replaceState`.
- All admin auth is client-side placeholder; clearly commented for ASP.NET Core JWT swap.
