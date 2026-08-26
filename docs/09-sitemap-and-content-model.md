# Sitemap & Content Model

Proposed structure, derived from the patterns in [04-common-patterns.md](04-common-patterns.md) and
the audience split argued in [05-differentiators.md](05-differentiators.md).

**This is a draft to react to, not a decision.** The service list in particular can't be finalized
until we know which trades Tino is licensed to advertise
([01-legal-and-licensing.md](01-legal-and-licensing.md#1-electrical-and-plumbing-georgia-settles-it-outright)).

---

## Sitemap

```
/                           Homepage — splits to the two audiences
├── /residential            Homeowner landing page
│   └── /services/<slug>    One page per service (see caveat below)
├── /commercial             Commercial + municipal landing page
│   └── /capability-statement.pdf
├── /projects               Filterable gallery
│   └── /projects/<slug>    Individual project case study
├── /about                  Tino's story — likely the second-most-visited page
├── /process                How he estimates, permits, communicates, warranties
├── /reviews                Testimonials + links out to Google/Facebook
├── /contact                Form + phone + SMS + WhatsApp + service area
├── /es/…                   Spanish mirror, or a single /es landing page (decide later)
└── /privacy, /terms
```

Persistent across every page:

- **Header:** logo, phone (click-to-call), license number, primary CTA, language toggle
- **Sticky mobile bar:** Call · Text · Quote
- **Footer:** full NAP, license number, hours, service area cities, sitemap links

### Service pages — one caveat

Do **not** generate one page per trade mechanically. Two reasons:

1. Some trades may be illegal for him to advertise.
2. Thin, near-duplicate service pages are the classic contractor-SEO failure. 4–8 substantial pages
   beat 15 thin ones.

A useful alternative, borrowed from [DECA](https://www.decaimprovements.com/): group by **outcome**
rather than trade. Something like *Additions & New Builds* / *Kitchens & Baths* / *Roofing &
Exterior* / *Outdoor Living* / *Repairs & Maintenance*. That matches how homeowners search, lets one
page cover several trades, and sidesteps advertising a bare trade name he isn't licensed for.

### Area pages

Only where we have something genuinely local — a project photo, a named testimonial, real specifics
about that jurisdiction. See the doorway-page risk in
[06-leadgen-and-local-seo.md](06-leadgen-and-local-seo.md#service-pages-vs-city-pages--a-real-risk).
A few real ones, never template-and-swap.

---

## Homepage structure

1. **Hero** — single image (no slider), plain statement of what and where, phone, one primary CTA
2. **Trust strip** — rating · review count · project count · license number · years · warranty
3. **Audience split** — two large cards: *I'm a homeowner* / *I'm hiring a contractor for a company
   or agency*
4. **Featured projects** — 3–6 tiles, at least one before/after slider
5. **Services** — 4–8 outcome-grouped tiles
6. **Why Tino** — 3–4 concrete claims. Not adjectives: "I do the work myself," "licensed and I pull
   the permits," "bilingual," "twenty years on municipal sewer and storm systems."
7. **Process** — 3–4 numbered steps
8. **Testimonials** — named, with project type
9. **Service area** — named cities
10. **CTA block** — form + phone
11. **Footer**

---

## Content model

Shaped for a CMS from day one even though we'll start with files in the repo, so that moving to
Sanity later is mechanical rather than a rewrite
([why](08-tech-stack-and-hosting.md#cms-can-tino-self-manage-it)).

### `siteConfig` — single source of truth

One file. Everything identity-related lives here and nowhere else, so a phone number change is a
one-line diff.

```ts
{
  businessName, legalEntityName,      // may differ; both matter legally
  license: { number, classifications[], board, expires },
  phone, phoneDisplay, sms, whatsapp, email,
  address?, serviceAreaRadius, serviceAreaCities[],
  hours, emergencyAvailable,
  geo: { lat, lng },
  social: { google, facebook, instagram },
  reviews: { rating, count, profileUrl },
  trustBadges: [{ label, value }],
  yearsExperience, warrantyTerm,
  insurance: { glPerOccurrence, glAggregate, workersComp, auto },
  certifications[],
}
```

### `Project`

The most important collection. Fields chosen to make the gallery filterable by *scope and size*,
which is what homeowners actually weigh (47% vs 16% for style — see
[06-leadgen-and-local-seo.md](06-leadgen-and-local-seo.md#what-homeowners-actually-weigh)).

```ts
{
  slug, title, summary,
  audience: 'residential' | 'commercial' | 'municipal',
  categories[],                       // outcome groups
  trades[],                           // for filtering, not for advertising
  city, year, durationWeeks,
  sizeSqFt?, valueRange?,             // "$30–55K" — optional
  scopeOfWork[],                      // bullet list of what was actually done
  challenge?, solution?,              // the story — this is what differentiates
  permitted: boolean, jurisdiction?,
  images: [{ src, alt, caption, role: 'before'|'after'|'during'|'detail'|'hero' }],
  beforeAfterPairs: [{ before, after, caption }],
  video?,
  testimonialRef?,
  ownProperty: boolean,               // ← permission gate
  releaseOnFile: boolean,             // ← permission gate
  priorEmployerWork: boolean,         // ← permission gate
}
```

Those last three fields aren't metadata for its own sake. **The build should refuse to publish images
where `priorEmployerWork` is true or `releaseOnFile` is false on non-own-property work.** Encoding
the legal gate in the schema means we can't accidentally ship a photo we don't have rights to, which
is a real risk given the volume of photos coming in. Prose-only projects are still valid entries —
that's how the municipal experience gets represented.

### `Service`

```ts
{
  slug, name, shortDescription, longDescription,
  audience, requiresLicenseClass?,    // gates rendering on license data
  included[], notIncluded[],
  pricingTiers?: [{ name, rangeLow, rangeHigh, timeline, includes[] }],
  faqs: [{ q, a }],
  relatedProjects[], heroImage,
  pricingLastUpdated?,
}
```

`requiresLicenseClass` is the second legal guard: a service page whose required classification isn't
present in `siteConfig.license.classifications` doesn't render. Same principle as the photo gates.

`pricingLastUpdated` exists because published prices that silently go stale are worse than no
prices — Alpha shows a visible "Last updated" date and we should too.

### `Testimonial`

```ts
{ quote, authorName, authorRole?, authorOrg?, city?, projectRef?, source, sourceUrl?, date }
```

`authorRole` and `authorOrg` are there because only 2 of 21 sites attribute testimonials properly,
and on the commercial side a named agency contact is worth more than a dozen anonymous five-stars.

### `Certification`

```ts
{ name, issuer, number?, issued, expires?, scanUrl?, showOn: ('residential'|'commercial')[] }
```

`showOn` matters: safety credentials belong on the commercial page and are noise on the homeowner
page. Zero of the residential sites we reviewed mention safety; all five that do are commercial or
civil.

---

## Structured data

- `GeneralContractor` on the homepage, with NAP, geo, hours, service area, and `sameAs` social links
- `Service` on each service page
- `BreadcrumbList` on nested pages
- **No `aggregateRating` or `Review`** on our own domain
- **No `FAQPage`** — the rich result is deprecated; write the FAQ content anyway

Detail and sources: [06-leadgen-and-local-seo.md](06-leadgen-and-local-seo.md#structured-data--three-things-changed-recently).

---

## Accessibility & mobile

Assume the visitor is on a phone with poor signal, possibly outdoors in daylight, possibly reading
Spanish, possibly older.

- Tap targets ≥44px; the sticky call bar is the most important control on the site
- Real contrast — dark themes are trendy in 2026 trend pieces and bad in sunlight
- Alt text on every project photo, describing the *work* (also helps image search)
- Explicit `width`/`height` on all images to prevent layout shift
- Keyboard-navigable gallery and slider; the slider needs a non-drag fallback
- Never rely on hover to reveal information
