# Martinez Built — Demo Contractor Site

A bilingual (English/Spanish) demo website for Tino's contractor business, built from the research in `/docs`.

## Quick Start (Local)

```bash
cd site
npm install
cp .env.example .env
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

**Admin panel:** [http://localhost:3000/admin/login](http://localhost:3000/admin/login)  
**Demo password:** `tino-demo-admin` (set `ADMIN_PASSWORD` in `.env`)

## Features

- **Bilingual EN/ES** — English at `/`, Spanish at `/es/…`
- **Language banner** — Top-right popup asks about language preference; auto-dismisses after 5s; cookie remembers choice
- **Language toggle** — Small EN/ES button (bottom-right) reopens the banner anytime
- **Homepage** — Audience split (homeowner vs commercial), trust strip, projects, before/after slider, services, testimonials
- **Pages** — Residential, Commercial, Projects (with case studies), About, Process, Reviews, Pricing guide, News, Contact
- **Admin** — Edit JSON content, view contact messages, reply with translation preview

## Deploy to Render

This app runs as a **Web Service** (not static) because it needs a database and admin APIs.

1. Push this repo to GitHub
2. In Render: **New → Blueprint** and point at `render.yaml`, or create a Web Service manually:
   - **Root Directory:** `site`
   - **Build Command:** `npm ci && npm run build`
   - **Start Command:** `npm start`
3. Set environment variables:
   - `ADMIN_PASSWORD` — your secure admin password
   - `JWT_SECRET` — random string (Render can auto-generate)
   - `DATABASE_URL` — `file:./data/prod.db` (default in render.yaml)
   - `NEXT_PUBLIC_SITE_URL` — your Render URL (e.g. `https://tino-contractor-demo.onrender.com`)

Optional: set `LIBRETRANSLATE_URL` for real translation in the admin panel (otherwise uses a demo word-swap translator).

> **Note:** SQLite on Render uses ephemeral disk — contact messages reset on redeploy. For production, switch to Render PostgreSQL and update `DATABASE_URL`.

## Content

All demo content uses placeholder business name **Martinez Built LLC** with fake license numbers, phone numbers, and Unsplash photos. Tino can replace everything via the admin panel or by editing files in `src/data/`.

## Inspired By

- [Apex Underground](https://apexunderground.com) — audience split, core competencies
- [Jackson Design & Remodeling](https://www.jacksondesignandremodeling.com) — visual polish, projects, news
- [DECA Improvements](https://www.decaimprovements.com) — outcome-grouped services, bilingual positioning
- [Alpha Development Group Pricing](https://www.alphadevg.com/pricing/) — transparent pricing tiers (light touch, not money-focused)
