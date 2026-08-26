# Open Questions & Decisions

Split by who has to answer. Nothing in the "for you" list needs Tino; nothing in the Tino list needs
you.

---

## Decisions for you

### 1. Publish price ranges? — *recommend yes*

The single biggest differentiator found (only 2 of 21 sites do it). Three benefits: pre-qualifies
leads so Tino stops driving to estimates he can't win, captures "how much does X cost" searches that
competitors cede to national aggregators, and directly answers the top homeowner complaints about
unclear proposals. The counterargument is real — it lets competitors undercut him and it can scare
off buyers who'd have been persuaded in person. A middle path is "typical range" or "starting at."

### 2. Bilingual: full mirror, or one Spanish landing page? — *recommend starting with one page*

A full `/es` mirror doubles the content maintenance forever, and half-maintained translations look
worse than none. DNA Remodeling's approach — one genuinely native Spanish page that can rank
independently and hands off to the English site — is the pragmatic middle. We can grow into a full
mirror if the Spanish page draws traffic. Either way, build the i18n routing in Phase 1 so it's not a
retrofit.

### 3. Buy a theme, or build on AstroWind? — *lean build*

There is no good free contractor template
([evidence](08-tech-stack-and-hosting.md#there-is-no-good-contractor-template-to-inherit)).
Commercial Astro construction themes run ~$99 and have the right structure out of the box. But the
audience-split homepage is custom work either way, and that's the most important page. AstroWind is
5.9k stars, MIT, actively maintained, and gets us 80% there for free.

### 4. How much do we build before Tino delivers content?

Phase 1 (scaffold, deploy, image pipeline, forms) is safe to build now and independent of his
answers. Phase 2 needs real content. Building the shell early means the photos have somewhere to land
the day they arrive.

### 5. Where does the "personal brand" line sit?

His strongest asset is that he does the work himself — but "one guy" can read as *can't handle my
job* to a commercial buyer. Options: his name in the business name (maximum trust, hardest to grow
past), or a neutral company name with him prominent on the About page (recommended). Worth knowing
whether he intends to stay solo or hire.

### 6. Small jobs: welcome or not?

Ace Handyman's productized half-day/full-day packages are a great pattern *if* he wants small work.
If he'd rather chase additions and commercial scopes, the site should quietly filter small jobs out
instead. This changes the homepage.

### 7. What are the ideas you wanted to hit?

You mentioned having some. They may reorder everything above — worth hearing before Phase 1 starts.

---

## Blockers for Tino

The full list is [02-needed-from-tino.md](02-needed-from-tino.md). The ones that stop work:

1. **State and city** — nearly every legal and SEO decision depends on it
2. **Exact license classifications** — determines what we may legally advertise
3. **Electrical and plumbing: licensed, or subcontracted?** — misdemeanor exposure in CA and TX;
   see [01-legal-and-licensing.md](01-legal-and-licensing.md#1-blocker-we-may-not-be-able-to-advertise-electrical-or-plumbing)
4. **Business name** — unblocks domain, email, logo, Google profile
5. **How fast can he really answer the phone?** — determines the whole CTA architecture

---

## Things I could not determine from research

Flagged so nobody treats them as settled:

- **Whether "certified" maps to a real credential.** The brief uses the word; it's a regulated term of
  art in some states (Florida distinguishes *certified* from *registered*). Needs confirmation before
  we print it.
- **Whether he *designed* pipe networks or built to someone else's design.** The brief says
  "building/designing." Design is a much stronger claim, and in some states "engineering" is a
  protected title. This meaningfully changes the commercial pitch either way.
- **Whether his state requires a separate underground utility license.** Florida and Georgia do. If
  his does and he qualifies on experience, that's a credential very few multi-trade contractors hold
  — a real opportunity, not just a compliance item.
- **Whether prior-employer project photos are usable at all.** Assume no until we have written
  clearance.
- **His actual competition.** Local competitive research is worth doing once we know the city — who
  ranks for "general contractor + city," what they charge, whether they publish licenses. Cheap and
  high-value, but it needs the city first.
- **Whether his address is in a HUBZone.** Free to check on the [SBA map](https://www.sba.gov/certifications/)
  once we have it, and unaffected by the federal certification turmoil.

---

## Claims in these docs I'd treat as soft

Being explicit so nothing here gets quoted as harder than it is.

- **The "5-minute / 21x" speed-to-lead statistic** is from a 2007 vendor-sponsored conference deck
  covering six companies on that vendor's platform, and it explicitly did not measure close rates.
  The direction is right; the number isn't citable.
  ([detail](06-leadgen-and-local-seo.md#speed-to-lead))
- **"Multi-step forms convert 86% higher"** — traced to no disclosed methodology, with an apparently
  fabricated HubSpot attribution. Don't use it.
- **Before/after slider conversion lifts** (40–60% longer time-on-page, 20–30% better submissions)
  come from vendors selling sliders. The feature is still worth building; the numbers aren't evidence.
- **Contractor-site audit figures** (5.4s median load, 1 in 6 forms failing silently, 72% with no
  above-fold CTA) come from marketing agencies with an interest in the answer. Directionally
  consistent across sources, not hard data.
- **Local ranking-factor weights** (GBP ~32%, reviews ~20%) are a survey of 47 practitioners, not
  Google data.
- **Hispanic share of the construction workforce (~30%)** is a third-party summary of BLS data, not
  read from BLS directly.

The section frequency counts in [04-common-patterns.md](04-common-patterns.md) are our own count
across 21 sites we actually read — small sample, but first-hand.
