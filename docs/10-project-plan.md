# Project Plan

## Strategy in one paragraph

Tino is two businesses wearing one hat. To a homeowner he's a licensed multi-trade contractor who
does the work himself and can show finished proof — and his best proof is his own property, which
means no permission problems. To a company or agency he's a specialist with years of large-scale
sanitary sewer, storm drainage, and water main experience, which is genuinely rare and almost
impossible for a homeowner-focused competitor to fake. **The site should serve both without diluting
either**, and it should compete on specifics — a printed license number, real photos, named
references, published price ranges, a downloadable capability statement — because the research is
consistent that specifics beat adjectives in this category, and because most of his competition
publishes adjectives.

---

## Phases

### Phase 0 — Intake and decisions *(current)*

Blocked on Tino and on decisions from you. Nothing should be built until the license question is
answered, because it determines the service list.

- [ ] Send [`intake/questionnaire-en.md`](../intake/questionnaire-en.md) (or the
      [Spanish version](../intake/questionnaire-es.md)) to Tino
- [ ] Get answers to the [five first questions](02-needed-from-tino.md#the-five-things-to-ask-for-first)
- [ ] **Resolve the electrical/plumbing licensing question** — hard blocker
- [ ] Lock the business name; check domain, LLC name availability, and social handles together
- [ ] Collect the first photo batch (his house, carport, outdoor kitchen)
- [ ] Decide: bilingual full mirror, or a single Spanish landing page?
- [ ] Decide: publish price ranges? (Strongly recommended — biggest differentiator found)
- [ ] Decide: buy a $99 commercial Astro theme, or build on AstroWind free?
- [ ] Your input on the ideas you mentioned wanting to hit

### Phase 1 — Foundation

Scaffold and infrastructure, buildable in parallel with intake as long as the content model stays
flexible.

- [ ] Astro + Tailwind scaffold, `siteConfig`, content collections per
      [09-sitemap-and-content-model.md](09-sitemap-and-content-model.md)
- [ ] Deploy to Render as a static site, on the real domain, with PR previews on
- [ ] Image pipeline and image CDN wired up — **before** photos start arriving in volume
- [ ] Layout shell: header with license number, sticky mobile call bar, footer with full NAP
- [ ] Form with a real backend, tested end-to-end from an actual phone
- [ ] Zod validation on the content collections, including the photo-permission gates
- [ ] `GeneralContractor` JSON-LD, sitemap, robots

Definition of done: an empty but correct site, live on the domain, where a form submission reaches
Tino's phone.

### Phase 2 — Launchable site

The minimum that can start generating leads. Ship this before it feels finished — an unfinished site
is worse than a smaller complete one
([why](04-common-patterns.md#valverdeconstcom--the-subtler-more-useful-lesson)).

- [ ] Homepage with hero, trust strip, and the audience split
- [ ] `/residential` and 4–6 outcome-grouped service pages
- [ ] `/projects` with 8–12 projects, at least 3 with before/after sliders
- [ ] `/about` — Tino's story in his own voice
- [ ] `/process` — estimating, permits, communication, warranty
- [ ] `/contact` with form, click-to-call, SMS, WhatsApp, service area
- [ ] Google Business Profile created and optimized (arguably higher priority than the site itself)
- [ ] Business email at the domain
- [ ] Analytics, and a monthly reminder to test the form

### Phase 3 — Commercial track

- [ ] `/commercial` page per [07-commercial-bid-playbook.md](07-commercial-bid-playbook.md#what-the-commercial-page-should-contain)
- [ ] Capability statement PDF, downloadable
- [ ] Municipal pipe-network experience written up in prose (no photos needed)
- [ ] Certifications, insurance limits, self-performance, equipment list
- [ ] Named references with titles and organizations
- [ ] SAM.gov registration for UEI and CAGE
- [ ] Vendor-portal registrations on local city, county, and utility bid lists

### Phase 4 — Bilingual and depth

- [ ] Spanish routes, hreflang, translated navigation and forms
- [ ] Published price tiers per service
- [ ] Reviews page, and a habit of asking for one at every job close
- [ ] A few genuine service-area pages
- [ ] Referral program

### Later, only if warranted

Video walkthroughs, 3D renderings, a client project portal, financing, three-axis project filtering,
a subcontractor portal. All discussed in
[05-differentiators.md](05-differentiators.md#tier-c--later-or-only-if-he-asks). None belong in a
launch.

---

## Sequencing notes

**Google Business Profile before the website is finished.** GBP signals carry roughly a third of
local-pack weight and the profile can start earning reviews immediately. It only needs the business
name, phone, category, and a few photos — all Phase 0 outputs. Reviews accumulate slowly, so starting
early is worth more than starting polished.

**Image CDN before the photo dump.** Retrofitting hundreds of images onto a CDN is tedious; wiring it
up empty is an hour. And Render's 5 GB Hobby bandwidth cap means the site goes *dark* if we get this
wrong — see [08-tech-stack-and-hosting.md](08-tech-stack-and-hosting.md#render-the-constraint-that-shapes-everything).

**Photo permission gates in the schema, not in a checklist.** With this volume of photos arriving,
the only reliable guard is a build that refuses to publish an image lacking a release.

**Residential before commercial.** Faster to build, faster to produce leads, and the photo material
is already unencumbered. The commercial track needs certifications, insurance documents, and
possibly former-employer clearances that will take time to gather.

---

## Risks

| Risk | Severity | Mitigation |
| --- | --- | --- |
| He isn't licensed for trades the brief implies | **High** | Resolve in Phase 0. Reframe as "coordinates licensed subs." Never publish an unlicensed trade. |
| Prior-employer photos are unusable (NDA / ownership) | Medium | Assume unusable. Describe in prose; his own-property work carries the portfolio. |
| Render bandwidth cap takes the site offline | Medium | Image CDN from day one; add a payment method so overage bills rather than spins down. |
| Form silently fails | Medium | 1 in 6 contractor forms do. Test monthly, auto-reply to the customer, keep tel/SMS/WhatsApp as redundancy. |
| Photo backlog never materializes | Medium | Ship with the four known own-property projects. Send the [photo guide](../intake/photo-guide.md) early. |
| Published prices go stale | Low | Visible "last updated" date; a quarterly review reminder. |
| Content goes stale after launch | Low | Move to Sanity so he can post himself; recency helps GBP ranking. |
| Business name unavailable | Low | Check domain, LLC, and social handles as one step before committing. |
| MBE/DBE expectations set by outdated advice | Low | [07-commercial-bid-playbook.md](07-commercial-bid-playbook.md#minority-certifications--read-this-before-promising-anything) — federal presumptions are gone; NMSDC and state MBE are the reliable paths. |

---

## Budget sketch

| Item | Cost |
| --- | --- |
| Domain | ~$15/yr |
| Render static site | $0 (Hobby) |
| Cloudflare Images | ~$5/mo |
| Web3Forms | $0 (250/mo) |
| Google Business Profile | $0 |
| Sanity (later) | $0 free tier |
| Commercial Astro theme (optional) | ~$99 once |
| Logo (optional) | varies |
| **Recurring floor** | **~$6/mo** |

Optional later: NMSDC MBE certification ~$350–650/yr, NASSCO PACP ~$1,270 per 3 years. Both are
business investments rather than website costs, but they show up on the site as credentials.

---

## How this repo is organized

| | |
| --- | --- |
| [01-legal-and-licensing.md](01-legal-and-licensing.md) | **Read first.** Licensing blockers, advertising rules, photo rights |
| [02-needed-from-tino.md](02-needed-from-tino.md) | The master intake list, tiered by what it blocks |
| [03-reference-sites.md](03-reference-sites.md) | 21 live sites, what to take from each |
| [04-common-patterns.md](04-common-patterns.md) | Frequency table, standard skeleton, failure modes |
| [05-differentiators.md](05-differentiators.md) | The rare high-impact stuff, ranked |
| [06-leadgen-and-local-seo.md](06-leadgen-and-local-seo.md) | Conversion data, GBP, structured data, performance |
| [07-commercial-bid-playbook.md](07-commercial-bid-playbook.md) | Capability statement, prequalification, certifications |
| [08-tech-stack-and-hosting.md](08-tech-stack-and-hosting.md) | Stack recommendation, Render constraints, components |
| [09-sitemap-and-content-model.md](09-sitemap-and-content-model.md) | Proposed sitemap and schemas |
| [10-project-plan.md](10-project-plan.md) | This file |
| [11-open-questions.md](11-open-questions.md) | Decisions waiting on you |
| [`intake/`](../intake/) | Questionnaires (EN/ES), project template, photo guide, tracker |
