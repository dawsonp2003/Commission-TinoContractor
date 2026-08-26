# Common Patterns — What Nearly Every Contractor Site Has

Frequency counts across the 21 live sites read for [03-reference-sites.md](03-reference-sites.md).
This is the baseline: the things we should have because their absence is conspicuous. The things
worth having because almost *nobody* has them are in
[05-differentiators.md](05-differentiators.md).

---

## Section inventory, by frequency

| Element | Count | Notes |
| --- | --- | --- |
| Services grid or list | 20/21 | Universal. The only near-exception is a brand-led commercial GC. |
| Free-estimate / quote form | ~16/21 | 3–5 fields on the good ones. |
| Project gallery / portfolio | ~15/21 | Only ~6 filter it, by room, sector, or scope. |
| Click-to-call phone above the fold | ~13/21 | Absent on the design-led and franchise sites. |
| "Years in business" / stat counters | ~13/21 | Very common, and frequently broken (see below). |
| Named testimonials | ~10/21 | Only 2 attribute to a role or organization. |
| Numbered "our process" | ~9/21 | Almost always 3–4 steps. |
| Service-area list or map | ~9/21 | The good ones name 20–30 specific suburbs or neighborhoods. |
| Blog / news | ~8/21 | Usually just award announcements. Low value. |
| Awards / press logos | ~8/21 | Houzz for residential; ENR/ABC for commercial. |
| Warranty with a stated term | ~7/21 | 1yr, 5yr, lifetime-shingle. A real differentiator. |
| FAQ section | ~7/21 | Best ones answer cost, timeline, permits, "can I live here during work." |
| Careers / hiring | ~6/21 | |
| Safety credentials (OSHA / EMR / QA-QC) | 5/21 | **All five are commercial or civil. Zero residential sites mention safety.** |
| Bilingual English/Spanish signaling | 5/21 | |
| Financing | ~4/21 | |
| Team page with real names and photos | ~4/21 | The most-skipped high-trust element. |
| **Actual license number printed** | **3/21** | Everyone else says "licensed & insured" and expects to be believed. |
| Published price ranges | 2/21 | |
| Client project portal | 2/21 | |
| Interactive before/after slider | ~1/21 | Hard to verify by fetching; regardless, rare at this scale. |

### Reading the table

Three numbers matter most.

**License number: 3 of 21.** This is nearly free to add, legally required in several states
([01-legal-and-licensing.md](01-legal-and-licensing.md#2-the-license-number-probably-has-to-be-on-the-page-not-in-the-footer)),
and instantly separates Tino from the unlicensed operators he competes with on price. The fact that
89% of sites skip it means printing it is a differentiator *and* table stakes at the same time.

**Team photos: 4 of 21.** For a one-man operation this is the whole pitch. The customer is hiring
*Tino*, not a brand. Every site that skips this is leaving its strongest asset on the table, and for
him the asset is stronger than most.

**Safety credentials: 5 of 21, all commercial.** This confirms the audience split. Safety content
belongs on the commercial and municipal pages and would be noise on the homeowner pages. Same
underlying facts, different page.

---

## The standard content skeleton

Distilled from the 20 sites that have one:

1. **Hero** — one image (not a rotating slider), a plain statement of what he does and where, a
   phone number, and one primary action
2. **Trust strip** — rating, review count, license number, years, warranty. One row, above the fold.
3. **Services grid** — 4–8 tiles, each linking to a real page
4. **Featured projects** — 3–6, linking to a fuller gallery
5. **Why choose us** — 3–4 concrete claims, not adjectives
6. **Process** — 3–4 numbered steps
7. **Testimonials** — named, ideally with the project type
8. **Service area** — named cities, not just a radius
9. **CTA block** — form plus phone
10. **Footer** — full NAP, license number, hours, service area, links

Per-service pages follow the same shape scoped down: what's included, photos of that specific work,
price range if we publish it, FAQ, CTA.

---

## What makes the bad ones bad

The instructive part, since these are all free to avoid.

### [dcbuilders.com](https://www.dcbuilders.com/) — the clearest failure

- Page title is `DCB – My WordPress Blog` — the default tagline, never changed
- Typos in headings: `MECHNICAL INSULATION`
- Corrupted copy: `Core Drilling / Wall/FCore Drilling / Wall/Flat/Wire Sawing/Wire Sawing`
- `Copyright © 2022` — four years stale
- **No phone number and no CTA anywhere on the homepage.** Two street addresses, nothing clickable.
- Service names with no descriptions, no projects, no people

### [valverdeconst.com](https://valverdeconst.com/) — the subtler, more useful lesson

A strong 54-year-old company whose site actively undercuts it:

- **A copywriting note published as body text:** "The Water Emergency Services tab leans heavily into
  Valverde's real differentiator — the 24-hour on-call center mentioned in their history. That's a
  genuine selling point worth highlighting prominently." That's an editorial instruction, almost
  certainly AI-generated, shipped live.
- Stat counters rendering as `0 Project Complate` — a broken animation *and* a typo
- Fifteen empty placeholder cards reading `Residential / Quality Materials` and `<>`
- Internally inconsistent numbers: the hero says 54 years, the FAQ says 51
- An orphan phone number with a Philadelphia area code on a Southern California site

The lesson generalizes: **an unfinished site is worse than a smaller finished one.** Broken counters,
placeholder cards, and stale copyright years all say "this business may not still exist." We should
ship five complete pages rather than twelve half-built ones, and we should not use animated stat
counters at all — they're the most common broken element in the entire study.

### Category-wide failure modes

From a [500-site contractor audit by Grow Local](https://www.growlocal.build/blog/500-contractor-websites-state-of-trade-sites):
median load time 5.4s with only 18% under 3s; ~40% failing on mobile with untappable phone numbers
or broken forms; **1 in 6 contact forms erroring silently**; over half using stock photos.
[PipelineOn](https://pipelineon.com/blog/why-not-getting-leads-from-website/) claims 72% have no
above-fold CTA.

*Caveat:* these figures come from marketing agencies with an obvious interest in the answer. They're
directionally consistent across sources but shouldn't be quoted as hard data.

**The one to take seriously regardless is the silently failing form.** It looks like a working lead
channel while eating every message, and the owner never finds out. Concrete mitigations:

- Test end-to-end from a real phone before launch, and again monthly
- A visible success state, plus an auto-reply to the customer so a missing reply is noticeable
- Redundant contact paths that don't depend on our code: a `tel:` link, SMS, WhatsApp
- An uptime or submission check so silence is detectable

---

## Serving both audiences on one site

Three patterns observed, worst to best:

1. **Undifferentiated blend** — "Residential and Commercial" as a single heading (Ibarra). Cheap and
   it dilutes both: a homeowner can't tell if she's too small, a facilities manager can't tell if
   they're too big.
2. **Split nav with real division pages** — Advanced Building Contractors puts `RESIDENTIAL` and
   `COMMERCIAL` in the top nav as peers, and the language changes completely between them. The
   residential page talks about rebuilding tornado-totaled homes, honesty, and timelines; the
   commercial page addresses "business owners, developers, and property managers" and closes with
   architects and engineers trusting them for design-build.
3. **Three-audience split** — Apex Underground's Municipal / Commercial / Residential cards, each
   with its own scope list and its own trust content: safety programs and QA/QC for municipal,
   turnkey convenience for residential.

The risk of *not* splitting, stated well from the buyer's side by
[LeadsNearby](https://www.leadsnearby.com/commercial-vs-residential-marketing-why-one-site-wont-fit-both/):
"if a homeowner lands on a site that screams 'big government contracts,' they may fear being
overcharged or ignored."

The audiences also want different *first actions*. A homeowner wants to tap a phone number or submit
a four-field form. A GC's estimator wants to email drawings and download a capability statement.
Same site, two entirely different conversion paths.

**Recommendation for Tino: pattern 2, with the option to grow into 3.** Split at the homepage into
Homeowners and Commercial / Municipal.

---

## Bilingual and Hispanic-owned presentation

Five verified sites, clustering into three approaches.

**Bilingualism as a trust badge (most common).** DECA gives it one of three hero hexagons —
"English and Spanish service makes communication easier" — while the site itself stays entirely in
English. Ibarra puts "Bilingual Attention" in the hero rotator. Note who this is aimed at: it reads
as *capability* to English-speaking readers as much as accessibility to Spanish-speaking ones.

**A real second-language surface.** AMJ carries separate `Español` and `Contáctenos` nav items — two
genuinely Spanish pages, not a machine-translated mirror. DNA Remodeling runs one dedicated
`/hablamos-espanol/` landing page written natively in Spanish. That's a pragmatic middle path: one
strong Spanish page rather than a half-maintained duplicate tree, and it can rank for
"remodelación de casas" on its own.

**Separate phone lines per language.** Rivera-Ulloa publishes distinct English and Spanish numbers
(unverified — the site 500'd).

**Heritage as a procurement asset.** DECA is the only site in the set that does this: "Latino-owned,
family-operated" *plus* **MBE certification**, which is a line item on GC and public-agency bid
forms rather than just a values statement. Rudolph & Sletten explicitly requires "verification of
certification for each qualifying diversity classification."

> The same fact plays two ways: on the residential side, bilingual service is warmth and clear
> communication; on the commercial side, it's a scoring advantage and a crew-coordination
> credential. Almost nobody works both angles. For context, roughly 30% of the US construction
> workforce is Hispanic or Latino, running higher in drywall, framing, roofing, and concrete
> ([Workhand's summary of BLS data](https://workhand.app/blog/spanish-translation-app-construction-crews/),
> their figures). That makes Tino's Spanish a subcontractor-coordination credential for commercial
> buyers, not only a customer-service feature for homeowners.

**WhatsApp** appeared on AMJ and is standard in Spanish-language construction marketing
([artecon.es](https://artecon.es/), [startconstrucciones.es](https://startconstrucciones.es/preguntas-frecuentes/)
runs a floating widget and lists WhatsApp project updates as a service feature). It is nearly absent
from mainstream US contractor sites. Cheap edge.
