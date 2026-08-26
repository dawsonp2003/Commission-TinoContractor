# Commission — Tino Contractor Site

A lead-generation website for Tino, an independent contractor in **Georgia**. He does everything from
drywall and roofing to tile, additions, carports, and outdoor kitchens — and separately has years of
professional experience building large municipal pipe networks (sanitary sewer, storm drainage, water
mains) at major construction companies.

The site needs to win him work from **both** homeowners and companies/agencies. Hosting: Render.

**Status: research and planning complete. Nothing built yet — waiting on intake answers, a legal
review, and a few decisions.**

---

## Start here

| If you want to… | Read |
| --- | --- |
| Know what to send Tino | [`intake/questionnaire-en.md`](intake/questionnaire-en.md) · [español](intake/questionnaire-es.md) |
| Know what we need from him and why | [`docs/02-needed-from-tino.md`](docs/02-needed-from-tino.md) |
| Understand the plan | [`docs/10-project-plan.md`](docs/10-project-plan.md) |
| Answer the open decisions | [`docs/11-open-questions.md`](docs/11-open-questions.md) |
| **Avoid a legal problem** | [`docs/01-legal-and-licensing.md`](docs/01-legal-and-licensing.md) |
| See the Georgia license path | [`docs/02a-georgia-credentials-roadmap.md`](docs/02a-georgia-credentials-roadmap.md) |

---

## The four findings that matter most

**1. His old employment agreements may legally limit who the site can market to.** Georgia enforces
non-competes, and — unlike most states — **a Georgia judge can narrow an overbroad covenant instead of
voiding it**, so "that would never hold up" is not a safe assumption. The specific risk is a customer
non-solicitation clause: the "customers" he had material contact with are the municipalities, water and
sewer authorities, developers, and GCs that the commercial side of this site is designed to attract.
**This needs a Georgia employment attorney before that page is written**, and it's the most urgent item
in the project.
→ [`docs/01-legal-and-licensing.md §5`](docs/01-legal-and-licensing.md#5-urgent--his-old-employment-agreements-may-restrict-who-the-site-can-market-to)

**2. Georgia settles the electrical/plumbing question outright, and it's stricter than expected.**
O.C.G.A. § 43-41-2(5) and (9) say a general or residential contractor's electrical, plumbing, HVAC, and
utility work "**may not be performed by the contractor**" — it must go to a Chapter 14 licensee, with no
dollar minimum. And because § 43-14-2(7) and (11) define those trades to include anyone who "purports
to have the capacity to perform" them, **listing "Electrical" as a service is itself the violation.**
The fix is six words of copy: "we coordinate licensed Georgia trade contractors."

**3. His pipe experience maps onto a Georgia license very few multi-trade contractors hold.** Georgia
licenses underground utility work separately (anything five feet or deeper — sewer, storm drainage,
water mains), and the path runs Utility Foreman → Utility Manager → Utility Contractor, largely on
experience rather than schooling. Two consequences: he **cannot advertise that work until licensed**,
and the **notarized employer experience letters the application requires are the most time-sensitive
item on the list** — they decay as employers reorganize, and they're easier to request before he's a
visible competitor.
→ [`docs/02a-georgia-credentials-roadmap.md`](docs/02a-georgia-credentials-roadmap.md)

**4. His best portfolio material has no permission problems, and his rarest material has serious
ones.** The house addition, 4-car carport, and outdoor kitchen are his own property — shot by him, on
his land, nobody to ask. That carries the launch portfolio. The municipal pipe work is the opposite:
photos taken as an employee may belong to that employer, and municipal jobs are routinely under NDA.
Describe that experience in prose, which is what a municipal buyer searches with anyway. Note Georgia's
*Cabaniss* rule: **accidental publication of someone's likeness is still liability**, so consent has to
precede publishing.

Plus the pattern that ran through the whole site study: only 3 of 21 real contractor sites printed a
license number, only 2 published prices, and none hosted a capability statement. **Specifics beat
adjectives, and almost everyone publishes adjectives.**
→ [`docs/04-common-patterns.md`](docs/04-common-patterns.md)

---

## Repo layout

### `docs/` — research and planning

| | |
| --- | --- |
| [01-legal-and-licensing.md](docs/01-legal-and-licensing.md) | **Read first.** Georgia trade licensing, restrictive covenants, advertising rules, photo rights, mandatory warranty, formation checklist |
| [02-needed-from-tino.md](docs/02-needed-from-tino.md) | Master intake list, tiered by what it blocks |
| [02a-georgia-credentials-roadmap.md](docs/02a-georgia-credentials-roadmap.md) | The Georgia license path, and a table of what the site may say at each stage |
| [03-reference-sites.md](docs/03-reference-sites.md) | 21 live sites read directly, and what to take from each |
| [04-common-patterns.md](docs/04-common-patterns.md) | Section frequency table, standard skeleton, failure modes, bilingual patterns |
| [05-differentiators.md](docs/05-differentiators.md) | The rare high-impact features, ranked for his situation |
| [06-leadgen-and-local-seo.md](docs/06-leadgen-and-local-seo.md) | Conversion data, Google Business Profile, structured data, performance |
| [07-commercial-bid-playbook.md](docs/07-commercial-bid-playbook.md) | Capability statement, GC prequalification, Georgia bid access (GDOT, TGM, water authorities), certification reality check |
| [08-tech-stack-and-hosting.md](docs/08-tech-stack-and-hosting.md) | Stack recommendation, Render plan guidance, components, CMS options |
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

**Stack:** Astro (static) → Render static site on the free **Hobby** plan, images on Cloudflare Images,
forms via Web3Forms, bilingual via Astro's built-in i18n. Content as repo files at first, moving to
Sanity once Tino wants to post his own photos. Reasoning and alternatives are in
[`docs/08-tech-stack-and-hosting.md`](docs/08-tech-stack-and-hosting.md) — including why no existing
open-source contractor template is worth inheriting.

*On Render specifically:* stay on Hobby and put a card on the account. Bandwidth overage is $0.15/GB on
every plan, so Pro would cost $25/month for about $3 of bandwidth. The only real risk is having **no**
payment method, which makes Render spin services down instead of billing. Use an image CDN for page
speed, not to dodge a cap.

**Structure:** split the homepage into two journeys. Homeowners get before/after photos, reviews,
tap-to-call, and a four-field form. Companies and agencies get license classifications, insurance
limits, safety certifications, the pipe-network experience, and a downloadable capability statement —
which **not one** of the 21 sites we studied had.

**Build order is set by Georgia licensing.** Because *offering* a service legally counts as contracting
in Georgia, the residential service pages can't publish before the Chapter 41 license and the
underground services can't publish before the utility license. But **his story, his portfolio, and his
pipe-network experience are biography, not an offer** — so those go live first while licensing proceeds
in parallel. That inverts the usual order.

**Priorities:** license number in the header, a trust strip in the hero, real photos with before/after
sliders, the audience split, and an honest response-time promise. Then published price ranges (only 2
of 21 sites do it), a permits-and-process page, and publishing the warranty Georgia already requires
him to offer.

Full ranking in [`docs/05-differentiators.md`](docs/05-differentiators.md); what we're deliberately
*not* building is at the bottom of that file.

---

## Immediate next steps

1. Send Tino the [questionnaire](intake/questionnaire-en.md) and the
   [photo guide](intake/photo-guide.md)
2. **Get him to request the notarized employer experience letters this week** — longest lead time of
   anything in the project, and they gate the utility license
3. **Get his prior employment agreements in front of a Georgia attorney** — this can constrain who the
   commercial page may target
4. Establish what he's licensed for today, and check it against the
   [gating table](docs/02a-georgia-credentials-roadmap.md#what-the-site-can-say-and-when)
5. Lock the business name, and check the domain, Georgia LLC availability, and social handles together
6. Answer the [open decisions](docs/11-open-questions.md#decisions-for-you) — pricing transparency,
   bilingual scope, theme vs. build
7. Then Phase 1: scaffold, deploy to Render, and wire up the image pipeline before the photos arrive
