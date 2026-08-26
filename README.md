# Commission — Tino Contractor Site

A lead-generation website for Tino, an independent licensed contractor. He does everything from
drywall and roofing to tile, additions, carports, and outdoor kitchens — and separately has years of
professional experience building large municipal pipe networks (sanitary sewer, storm drainage, water
mains) at major construction companies.

The site needs to win him work from **both** homeowners and companies/agencies. Planned hosting:
Render.

**Status: research and planning complete. Nothing built yet — waiting on intake answers and a few
decisions.**

---

## Start here

| If you want to… | Read |
| --- | --- |
| Know what to send Tino | [`intake/questionnaire-en.md`](intake/questionnaire-en.md) · [español](intake/questionnaire-es.md) |
| Know what we need from him and why | [`docs/02-needed-from-tino.md`](docs/02-needed-from-tino.md) |
| Understand the plan | [`docs/10-project-plan.md`](docs/10-project-plan.md) |
| Answer the open decisions | [`docs/11-open-questions.md`](docs/11-open-questions.md) |
| **Avoid a legal problem** | [`docs/01-legal-and-licensing.md`](docs/01-legal-and-licensing.md) |

---

## The four findings that matter most

**1. We may not be legally able to advertise electrical or plumbing.** In most states those trades are
licensed separately from general contracting. Florida requires a GC to subcontract them outright;
California and Texas make advertising outside your classification a misdemeanor. Being able to do the
work and being licensed to sell it are different things. **This is the first question for Tino, and it
determines the entire service list.**
→ [`docs/01-legal-and-licensing.md`](docs/01-legal-and-licensing.md)

**2. His best portfolio material has no permission problems, and his rarest material has serious
ones.** The house addition, 4-car carport, and outdoor kitchen are his own property — shot by him, on
his land, nobody to ask. That carries the launch portfolio. The municipal pipe work is the opposite:
photos taken as an employee may belong to that employer, and municipal jobs are routinely under NDA.
Plan on describing that experience in prose, which is what a municipal buyer searches with anyway.

**3. Only 3 of 21 real contractor sites we read printed their license number.** Several states legally
require it in advertising, Arizona requires it on the home page specifically, and it instantly
separates him from the unlicensed operators undercutting him on price. It costs nothing. The broader
pattern held across the whole study: **specifics beat adjectives, and almost everyone publishes
adjectives.**
→ [`docs/04-common-patterns.md`](docs/04-common-patterns.md)

**4. Render's Hobby plan includes 5 GB/month of outbound bandwidth, and exceeding it with no payment
method on file spins your services down.** For a site whose whole value proposition is a large jobsite
photo gallery, that's a few thousand page views before it goes *dark*. Images must be served from an
image CDN, wired up before the photos arrive.
→ [`docs/08-tech-stack-and-hosting.md`](docs/08-tech-stack-and-hosting.md#render-the-constraint-that-shapes-everything)

---

## Repo layout

### `docs/` — research and planning

| | |
| --- | --- |
| [01-legal-and-licensing.md](docs/01-legal-and-licensing.md) | **Read first.** Trade licensing, advertising rules, photo rights, formation checklist |
| [02-needed-from-tino.md](docs/02-needed-from-tino.md) | Master intake list, tiered by what it blocks |
| [03-reference-sites.md](docs/03-reference-sites.md) | 21 live sites read directly, and what to take from each |
| [04-common-patterns.md](docs/04-common-patterns.md) | Section frequency table, standard skeleton, failure modes, bilingual patterns |
| [05-differentiators.md](docs/05-differentiators.md) | The rare high-impact features, ranked for his situation |
| [06-leadgen-and-local-seo.md](docs/06-leadgen-and-local-seo.md) | Conversion data, Google Business Profile, structured data, performance |
| [07-commercial-bid-playbook.md](docs/07-commercial-bid-playbook.md) | Capability statement, GC prequalification, certifications, MBE reality check |
| [08-tech-stack-and-hosting.md](docs/08-tech-stack-and-hosting.md) | Stack recommendation, Render constraints, components, CMS options |
| [09-sitemap-and-content-model.md](docs/09-sitemap-and-content-model.md) | Proposed sitemap and content schemas |
| [10-project-plan.md](docs/10-project-plan.md) | Phases, sequencing, risks, budget |
| [11-open-questions.md](docs/11-open-questions.md) | Decisions waiting on you, plus which research claims are soft |

### `intake/` — things to actually send

| | |
| --- | --- |
| [questionnaire-en.md](intake/questionnaire-en.md) | The questionnaire for Tino, plain language |
| [questionnaire-es.md](intake/questionnaire-es.md) | Same thing in Spanish |
| [project-template.md](intake/project-template.md) | One copy per project; maps to the content schema |
| [photo-guide.md](intake/photo-guide.md) | Shot list, how to shoot before/after, what to keep out of frame |
| [photo-release-template.md](intake/photo-release-template.md) | Draft client release, EN + ES |
| [asset-tracker.csv](intake/asset-tracker.csv) | Every item to collect, with status |

---

## Recommended approach, in short

**Stack:** Astro (static) → Render static site, images on Cloudflare Images, forms via Web3Forms,
bilingual via Astro's built-in i18n. Content as repo files at first, moving to Sanity once Tino wants
to post his own photos. Reasoning and the alternatives considered are in
[`docs/08-tech-stack-and-hosting.md`](docs/08-tech-stack-and-hosting.md) — including why no existing
open-source contractor template is worth inheriting.

**Structure:** split the homepage into two journeys. Homeowners get before/after photos, reviews,
tap-to-call, and a four-field form. Companies and agencies get license classifications, insurance
limits, safety certifications, the pipe-network experience, and a downloadable capability statement —
which **not one** of the 21 sites we studied had.

**Priorities:** license number in the header, a trust strip in the hero, real photos with before/after
sliders, the audience split, and an honest response-time promise. Then published price ranges (only 2
of 21 sites do it) and a permits-and-process page.

Full ranking in [`docs/05-differentiators.md`](docs/05-differentiators.md); what we're deliberately
*not* building is at the bottom of that file.

---

## Immediate next steps

1. Send Tino the [questionnaire](intake/questionnaire-en.md) and the
   [photo guide](intake/photo-guide.md)
2. Get the [five first answers](docs/02-needed-from-tino.md#the-five-things-to-ask-for-first) — the
   license question above all
3. Lock the business name, and check the domain, LLC availability, and social handles together
4. Answer the [open decisions](docs/11-open-questions.md#decisions-for-you) — pricing transparency,
   bilingual scope, theme vs. build
5. Then Phase 1: scaffold, deploy to Render, and wire up the image pipeline *before* the photos arrive
