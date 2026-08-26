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

**Georgia adds a sequencing constraint that changes the build order.** Under § 43-41-2(3), *offering*
contracting services legally counts as contracting — so we cannot publish residential service pages
before he holds a Georgia Chapter 41 license, and cannot publish sewer or water main services before
he holds a utility contractor license. But **describing his experience and role is biography, not an
offer.** So the About page, the pipe-network narrative, and the own-property portfolio can all go live
first, while licensing proceeds in parallel. That inverts the original plan, which assumed residential
would launch first.

---

## Phases

### Phase 0 — Intake, legal, and decisions *(current)*

Two hard gates here, and the legal one is more urgent than the licensing one.

- [ ] Send [`intake/questionnaire-en.md`](../intake/questionnaire-en.md) (or the
      [Spanish version](../intake/questionnaire-es.md)) to Tino
- [ ] Get answers to the [six first questions](02-needed-from-tino.md#the-six-things-to-ask-for-first)
- [ ] **GATE 1 — Georgia employment attorney reviews his prior agreements.** Non-compete, customer
      non-solicit, NDA, equity. This can constrain which agencies the commercial page may target, so it
      precedes writing that page. See
      [01-legal-and-licensing.md §5](01-legal-and-licensing.md#5-urgent--his-old-employment-agreements-may-restrict-who-the-site-can-market-to).
- [ ] **GATE 2 — establish what he's licensed for today.** Determines what may be advertised at all;
      see the gating table in
      [02a-georgia-credentials-roadmap.md](02a-georgia-credentials-roadmap.md#what-the-site-can-say-and-when).
- [ ] **Tino requests notarized experience letters from every former employer** — start immediately,
      independent of everything else. These gate the utility license and get harder to obtain over
      time.
- [ ] Lock the business name; check domain, Georgia LLC name availability, and social handles together
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

### Phase 2 — What we can publish before the licenses land

Everything here is biography, portfolio, and contact — none of it is an offer to perform licensed work,
so none of it waits on the board. Ship it before it feels finished; an unfinished site is worse than a
smaller complete one
([why](04-common-patterns.md#valverdeconstcom--the-subtler-more-useful-lesson)).

- [ ] Homepage with hero, trust strip, and the audience split
- [ ] `/about` — Tino's story in his own voice. Likely the strongest page on the site at this stage.
- [ ] `/projects` with 8–12 projects, at least 3 with before/after sliders — his own property carries
      this
- [ ] The pipe-network experience written up in prose, in role terms
- [ ] `/contact` with form, click-to-call, SMS, WhatsApp, service area
- [ ] Non-structural repair services **if** we include the § 43-41-17(g) written disclosure
- [ ] Google Business Profile created and optimized (arguably higher priority than the site itself)
- [ ] Business email at the domain
- [ ] Analytics, and a monthly reminder to test the form

### Phase 3 — Residential services *(gated on the Chapter 41 license)*

- [ ] `/residential` and 4–6 outcome-grouped service pages
- [ ] `/process` — estimating, permits, communication, warranty
- [ ] Publish the R. 553-7-.01 written warranty terms
- [ ] License number and classification into the header trust strip
- [ ] Service-page JSON-LD

### Phase 4 — Commercial track *(partly gated on the utility license)*

Not gated: the capability statement, his experience, certifications, insurance, and references. Gated:
naming sewer, storm drain, or water main work as **services offered**.

- [ ] `/commercial` page per [07-commercial-bid-playbook.md](07-commercial-bid-playbook.md#what-the-commercial-page-should-contain)
- [ ] Capability statement PDF, downloadable
- [ ] Certifications, insurance limits, self-performance, equipment list
- [ ] Named references with titles and organizations
- [ ] **GDOT Subcontractor registration** — covers prime contracts up to $2M and is the lightest-weight
      high-value registration available
- [ ] Team Georgia Marketplace registration with accurate NIGP codes
- [ ] Vendor registration with the metro Atlanta water and sewer authorities *(after the non-solicit
      review clears them)*
- [ ] SAM.gov registration for UEI and CAGE
- [ ] Utility contractor license obtained → add the underground services

### Phase 5 — Bilingual and depth

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
up empty is an hour. This is a page-speed decision rather than a cost one — Render's bandwidth
allowance turned out to be a non-issue
([detail](08-tech-stack-and-hosting.md#render-stay-on-hobby-add-a-card-dont-upgrade)).

**Photo permission gates in the schema, not in a checklist.** With this volume of photos arriving,
the only reliable guard is a build that refuses to publish an image lacking a release. Georgia raises
the stakes: under *Cabaniss v. Hipsley*, accidental publication is still liability.

**Licensing and building run in parallel, not in sequence.** The Chapter 41 and utility licenses have
real lead times (applications, exams, notarized letters). Waiting on them idles the project; publishing
before them is illegal. Phase 2 exists precisely to fill that window with work that isn't gated.

**Notarized experience letters on day one.** They gate the utility license, they decay with time as
employers reorganize, and asking is easier before he's a visible competitor. Cheapest possible action
with the longest lead time.

---

## Risks

| Risk | Severity | Mitigation |
| --- | --- | --- |
| A former-employer non-solicit bars the agencies the commercial page targets | **High** | Georgia attorney reviews the agreements in Phase 0, before that page is written. Georgia blue-pencils, so "too broad to enforce" is not a safe assumption. |
| He has no Chapter 41 license, so most residential copy is unpublishable | **High** | Phase 2 is built entirely from ungated content. Start the license application immediately; it's the long pole. |
| Advertising electrical or plumbing | **High** | Settled: Georgia never permits self-performance. Copy says "coordinates licensed Georgia trade contractors." No exceptions. |
| Advertising underground utility work pre-license | **High** | Commercial page describes experience and role only until the license is in hand. |
| Notarized experience letters can't be obtained | Medium | Request now. Without them the utility license path closes entirely. |
| Prior-employer photos are unusable (NDA / ownership) | Medium | Assume unusable. Describe in prose; his own-property work carries the portfolio. |
| Form silently fails | Medium | 1 in 6 contractor forms do. Test monthly, auto-reply to the customer, keep tel/SMS/WhatsApp as redundancy. |
| Photo backlog never materializes | Medium | Ship with the four known own-property projects. Send the [photo guide](../intake/photo-guide.md) early. |
| Client photo published without a release | Medium | Schema-level gate. Georgia's *Cabaniss* rule means accidental publication is still liability. |
| No cancellation notice on in-home signings | Medium | If the notice isn't given, the buyer's right to cancel **never expires**. Build it into the contract package. |
| Render bandwidth | **Low** *(downgraded)* | Add a payment method; overage is $0.15/GB. Previously overstated — see [08](08-tech-stack-and-hosting.md#render-stay-on-hobby-add-a-card-dont-upgrade). |
| Published prices go stale | Low | Visible "last updated" date; a quarterly review reminder. |
| Content goes stale after launch | Low | Move to Sanity so he can post himself; recency helps GBP ranking. |
| Business name unavailable | Low | Check domain, Georgia LLC, and social handles as one step before committing. |
| Certification expectations set by outdated advice | Low | [07-commercial-bid-playbook.md](07-commercial-bid-playbook.md#minority-certifications--read-this-before-promising-anything) — federal presumptions are gone and DBE goals are suspended pending re-evaluation. |
| Missing a renewal deadline | Low | The [renewal calendar](02a-georgia-credentials-roadmap.md#renewal-calendar). GDOT in particular sends no reminders. |

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

That's the website. **The Georgia business and licensing costs are separate and larger**, and they're
what actually gate the launch:

| Item | Cost | Notes |
| --- | --- | --- |
| Georgia LLC formation | ~$110 | Plus $60/yr annual registration (Jan 1 – Apr 1) |
| Chapter 41 license | ~$200 app + $100 biennial | *Fees unverified — confirm with the board* |
| Level 1A erosion control | Course + exam | Cheapest credential; do it first |
| 12-hour utility safety training | Course fee | Prerequisite for Foreman and Manager |
| Utility Foreman | ~$30–50 | **No exam** |
| Utility Manager | ~$30–50 app + $199–256 exam | *Unverified* |
| Utility Contractor license (LLC) | ~$50 | Needs a written safety policy |
| General liability, $500K | Quote required | Buy to the GC tier — satisfies every classification |
| Workers' comp | Quote, or free via WC-10 exemption | LLC members count toward the 3-employee threshold |
| Attorney — agreement review + contract package | Quote required | **The highest-value spend in the project** |
| GDOT / TGM / SAM.gov registration | $0 | |
| DBE certification | $0 | Goals currently suspended pending re-evaluation |
| NMSDC MBE (optional) | ~$350–650/yr | Georgia Minority Supplier Development Council |
| NASSCO PACP (optional) | ~$1,270 / 3 yr | Often required by municipalities for CCTV work |

The licensing spend is a business investment, not a website cost — but the site can't advertise most
services until it's done, so it belongs in the same plan.

---

## How this repo is organized

| | |
| --- | --- |
| [01-legal-and-licensing.md](01-legal-and-licensing.md) | **Read first.** Georgia licensing blockers, restrictive covenants, advertising rules, photo rights |
| [02-needed-from-tino.md](02-needed-from-tino.md) | The master intake list, tiered by what it blocks |
| [02a-georgia-credentials-roadmap.md](02a-georgia-credentials-roadmap.md) | The Georgia license path, and what the site may say at each stage |
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
