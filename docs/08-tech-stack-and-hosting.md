# Tech Stack, Hosting & Open-Source References

## The recommendation, up front

| Concern | Recommendation |
| --- | --- |
| Framework | **Astro** (static output) |
| Starting point | [onwidget/astrowind](https://github.com/onwidget/astrowind) — 5.9k stars, MIT, actively maintained |
| Hosting | Render **Static Site** (free, global CDN, PR previews) |
| Images | **Served off Render** — Cloudflare Images (~$5/mo) or Cloudinary free tier |
| Forms | **Web3Forms** (250 submissions/mo free) + `react-hook-form` / native validation |
| Bilingual | Astro's built-in i18n routing + a typed JSON dictionary |
| Content editing | Start with files in the repo; **Sanity** free tier when Tino wants to self-manage |
| Reviews | Hand-curated JSON, no `aggregateRating` markup |

Two findings drove most of this: Render's bandwidth cap (below) and the fact that there is no
good open-source contractor template worth inheriting (also below).

---

## Render: the constraint that shapes everything

**Verified against Render's docs on 2026-08-26.** Outbound bandwidth is metered per workspace:

| Plan | Included bandwidth |
| --- | --- |
| Hobby | **5 GB / month** |
| Pro | 25 GB |
| Scale | 1 TB |

Source: [Render outbound bandwidth docs](https://render.com/docs/outbound-bandwidth). Static sites
count against this. And critically:

> "*If you've linked a payment method,* Render bills you for each additional GB… *Otherwise,* Render
> spins down your workspace's services until the start of the next month."

**5 GB is roughly a few thousand page views for a photo-heavy site.** For a business whose entire
value proposition is a large jobsite photo gallery, this is the single most important technical
constraint in the project — and the failure mode is the site going *dark*, not just slow.

Note that some older write-ups still cite a legacy 100 GB Hobby allowance. That is out of date;
Render introduced new workspace plans on April 23, 2026.

**Mitigation: serve every image from an image CDN so the heavy bytes never touch Render.** HTML, CSS,
and JS for a site like this is a few hundred KB per page. Images are 95%+ of the transfer.

### Static site vs. web service

Use a **static site**. Free to deploy, and it includes a global CDN, managed TLS, Brotli, HTTP/2,
DDoS protection, PR previews, dashboard-configurable redirects and rewrites, and custom response
headers. A web service is only needed for server-side logic, which this site doesn't have.

- **Astro:** Build Command `npm ci && npm run build`, Publish Directory `dist`
- **Next.js static export:** Publish Directory `out`

**Custom domains:** free, 2 included on Hobby, then $0.25/mo each. Two covers
`tinocontracting.com` + `www`.

**Render has no built-in form handling** — no equivalent of Netlify Forms appears anywhere in the
static-site documentation. This is an inference from absence, but it means any template whose forms
rely on `data-netlify="true"` needs its form backend swapped.

### `render.yaml` blueprint

A static site is `type: web` with `runtime: static`:

```yaml
services:
  - type: web
    name: tino-contracting
    runtime: static
    buildCommand: npm ci && npm run build
    staticPublishPath: ./dist
    previews:
      generation: automatic
    headers:
      - path: /*
        name: X-Frame-Options
        value: sameorigin
    routes:
      - type: rewrite
        source: /quote
        destination: /contact
```

Note that Render *preserves* existing header and route rules not listed in the blueprint, which can
cause surprises when you remove a rule.

---

## Why Astro over Next.js

- Static HTML output with near-zero JavaScript by default — matters for a buyer on one bar of signal
- `astro:assets` gives AVIF/WebP generation and correct `srcset` at build time via sharp, with no
  runtime image server
- **Built-in i18n routing since v4** — handles URL prefixing (`/` English, `/es/` Spanish via
  `prefixDefaultLocale: false`), `Astro.currentLocale`, and hreflang
- Render's Astro static-site path is a two-field setup
- Islands let us load JavaScript only for the two things that need it (before/after slider, lightbox)

Next.js would work, but it adds an image-optimization story we'd have to work around on a static
export, and Render **does not persist `.next/cache` between builds**, so incremental build caching
is lost by default (the documented workaround is a `build.sh` that `rsync`s the cache to and from
`$XDG_CACHE_HOME/next`). Not worth the friction for a brochure site.

---

## There is no good contractor template to inherit

This was the clearest finding of the open-source research. The trades/contractor template space on
GitHub is a long tail of 0–60 star repos, many unlicensed or recently AI-generated.

What exists, verified via the GitHub API on 2026-08-26:

| Repo | Stars | Stack | License |
| --- | --- | --- | --- |
| [Orion56/Construction-Company-Site-Template](https://github.com/Orion56/Construction-Company-Site-Template) | 60 | vanilla HTML/CSS/JS | **none** |
| [themefisher/constra-bootstrap](https://github.com/themefisher/constra-bootstrap) | 52 | HTML/Bootstrap | MIT |
| [markdino/Construction-website-1](https://github.com/markdino/Construction-website-1) | 35 | Gatsby | MIT |
| [themixlyweb/nextjs-construction-website-template](https://github.com/themixlyweb/nextjs-construction-website-template) | 19 | Next.js + Bootstrap 5 | MIT |
| [thomas-basham/construction-website](https://github.com/thomas-basham/construction-website) | 17 | Next.js | **none** |

Only two are both MIT and recently maintained, and both are Bootstrap-based. A search trap worth
naming: "construction website template" surfaces `tmKamal/under-construction-template` (169 stars)
at the top — that's a "coming soon" page, not a construction business site.

**Two repos worth reading rather than depending on:**

- [JulyFire365/ridgeline-lite](https://github.com/JulyFire365/ridgeline-lite) — MIT, Astro 5 +
  Tailwind 4, 0 stars. Three patterns worth lifting: a single `src/config/site.ts` holding business
  identity (name, phone, license line, geo, hours, trust badges), a `src/lib/schema.ts` that emits
  contractor JSON-LD, and a sticky mobile call bar. **Its gap is fatal for us: no project gallery at
  all** — the single most important section for Tino. There's also a "Pro" upsell, so the free tier
  is deliberately trimmed.
- [glacayo/website-multipages](https://github.com/glacayo/website-multipages) — on paper the closest
  match (a 12-file JSON data contract with Zod validation, selectable section variants, typed
  JSON-LD) but **no license file**, so it's legally unusable. Worth filing an issue asking for MIT.

Also flagged: [surjithctly/astroship](https://github.com/surjithctly/astroship) (2.0k stars) is
**GPL-3.0**, which is a poor fit for a client site, and
[cruip/open-react-template](https://github.com/cruip/open-react-template) (4.7k) reports no detected
SPDX license.

The astro.build/themes business category is now almost entirely **paid** ($99+ all-access bundles).
Construction-specific commercial Astro themes exist with exactly the right structure (projects,
industries, certifications) but aren't open source. **If there's even a $99 budget, a paid theme is
likely better value than fighting a 0-star free one.**

---

## Components

All star counts and licenses verified 2026-08-26.

**Before/after sliders.** [sneas/img-comparison-slider](https://github.com/sneas/img-comparison-slider)
(866, MIT) is a framework-agnostic **web component** — the right pick for Astro.
[nerdyman/react-compare-slider](https://github.com/nerdyman/react-compare-slider) (377, MIT) if we
end up on React.

**Galleries.** [PhotoSwipe](https://github.com/dimsemenov/PhotoSwipe) (25.2k, MIT) is vanilla JS and
the right call for hundreds of jobsite photos on an Astro site. React alternative:
[yet-another-react-lightbox](https://github.com/igordanchenko/yet-another-react-lightbox) (1.3k, MIT)
plus [react-photo-album](https://github.com/igordanchenko/react-photo-album) (783, MIT) for justified
layouts.

**Image pipeline.** [sharp](https://github.com/lovell/sharp) (32.6k, Apache-2.0) underpins
`astro:assets`, so AVIF/WebP and `srcset` come free at build time. This matters: phone photos are
4–8 MB each.

**Image CDN, checked against vendor docs:**

| Option | Cost | Notes |
| --- | --- | --- |
| **Cloudflare Images** | $5/mo per 100K stored images, **free delivery bandwidth** | Cheapest real answer, and it moves image bytes off Render's metered path entirely. **Recommended.** |
| Cloudinary | Free: 25 credits/mo (1 credit = 1,000 transformations *or* 1 GB storage *or* 1 GB bandwidth), rolling 30-day window | Fine to start; the rolling window makes it easy to trip. |
| imgix | **No free tier**, $100/mo minimum | Not viable. |

**Forms.** [react-hook-form](https://github.com/react-hook-form/react-hook-form) (44.8k, MIT) +
[zod](https://github.com/colinhacks/zod) (43.5k, MIT) for validation. For submission handling
without a backend: **Web3Forms free = 250 submissions/month** (email-only, no dashboard) vs.
**Formspree free = 50/month** (with a dashboard and 30-day history).

**Web3Forms, for the volume.** A contractor site should clear 50 leads/month, and hitting that cap
means silently lost work — the exact failure mode
[04-common-patterns.md](04-common-patterns.md#category-wide-failure-modes) warns about. Note that
most articles ranking these tools are published by competing form vendors; the free-tier numbers are
consistent across sources, the rankings aren't.

**Bilingual.** Astro's built-in i18n routing plus a typed JSON `t()` helper is sufficient at this
size. [Paraglide JS](https://github.com/opral/monorepo) only if we want compile-time type safety
(check the package license — the monorepo root has none). On Next.js the current default is
[next-intl](https://github.com/amannn/next-intl) (4.4k, MIT).

**Structured data.** [google/schema-dts](https://github.com/google/schema-dts) (1.2k, Apache-2.0) for
typed JSON-LD. `GeneralContractor` is the right type — a subtype of `HomeAndConstructionBusiness`
under `LocalBusiness`.

**Reviews.** The Google Places `Place Details` endpoint returns a **maximum of 5 reviews**, which
makes automated pull-in not worth the complexity for a single location. Curate them in a JSON file,
display them, link out to the Google profile — and don't mark them up
([why](06-leadgen-and-local-seo.md#structured-data--three-things-changed-recently)).

---

## CMS: can Tino self-manage it?

That's the only criterion that matters, and it eliminates most of the popular options.

| Option | Verdict |
| --- | --- |
| **Sanity** (6.3k, MIT) | **Best realistic answer.** Hosted Studio, genuinely good mobile drag-and-drop image upload, free tier adequate for one business. Nothing to self-host. |
| Keystatic (2.3k, MIT) | Nice editing UI, zero hosting cost — but it commits images to the repo (bad for hundreds of photos) and the GitHub auth flow will confuse a non-technical user. |
| Decap CMS (19.3k, MIT) | High stars, slow-moving project, same repo-image problem. |
| Payload (44.4k, MIT) / Directus (37.6k, **BSL — not OSI-open-source**) | Require a database and server, which forces a Render web service instead of a static site. Wrong weight class. |
| TinaCMS (13.8k, Apache-2.0) | Visual editing is appealing; setup complexity is high for the payoff. |

**Plan:** launch with content as files in the repo (fastest, zero cost, and we're doing the editing
anyway during the build). Add Sanity when Tino wants to post his own project photos without us. Keep
the content model CMS-shaped from day one so that migration is mechanical — see
[09-sitemap-and-content-model.md](09-sitemap-and-content-model.md).

---

## Real deployed contractor sites with public source

Thin, but useful for content structure. **All lack licenses — read for structure, don't copy code.**

- [pickledchicken/MerazRoofing](https://github.com/pickledchicken/MerazRoofing) — plain HTML/CSS, a
  `CNAME`, 5 pages, Formspree forms, schema.org markup, hand-made `.webp`/`.jpeg` pairs. A
  Hispanic-owned Eastern NC roofing business and the closest real-world analogue found. Its tiered
  service structure (basic repair → intermediate → full replacement) is a nice pattern.
- [jmorrell873/stormxpert-home-remodeling](https://github.com/jmorrell873/stormxpert-home-remodeling)
  — a Buffalo GC. Note the **dedicated reviews page**, which is the right instinct.
- [ksavage5280-cmd/denver-remodels](https://github.com/ksavage5280-cmd/denver-remodels) — single-page
  Astro + Tailwind (with `dist/` accidentally committed).
