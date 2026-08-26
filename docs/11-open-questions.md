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

Georgia adds a wrinkle worth deciding explicitly: **a lot of the residential copy cannot legally be
published until he's licensed.** Two options — build those pages and hold them unpublished behind the
license gate, or defer writing them entirely. I'd lean toward building them, gated in the schema by
`requiresLicenseClass`, so the site fills out the day the license issues rather than starting from
scratch then.

### 5. Where does the "personal brand" line sit?

His strongest asset is that he does the work himself — but "one guy" can read as *can't handle my
job* to a commercial buyer. Options: his name in the business name (maximum trust, hardest to grow
past), or a neutral company name with him prominent on the About page (recommended). Worth knowing
whether he intends to stay solo or hire.

### 6. Small jobs: welcome or not?

Ace Handyman's productized half-day/full-day packages are a great pattern *if* he wants small work.
If he'd rather chase additions and commercial scopes, the site should quietly filter small jobs out
instead. This changes the homepage.

Georgia makes this more interesting than it looks: **§ 43-41-17(g) exempts non-structural repair work
at any dollar amount** provided he discloses in writing that he holds no Chapter 41 license. So if he
*isn't* licensed yet, productized repair work is the one revenue line the site can legitimately
advertise from day one. That's a real bridge strategy, not a consolation prize — and it starts
generating reviews before the license lands.

The catch: the disclosure has to be genuine and prominent, and § 43-41-12(a)(7) criminalizes slicing
larger jobs into sub-threshold pieces. So this works as a real small-jobs business, not as a workaround.

### 7. What are the ideas you wanted to hit?

You mentioned having some. They may reorder everything above — worth hearing before Phase 1 starts.

---

## Blockers for Tino

The full list is [02-needed-from-tino.md](02-needed-from-tino.md). The ones that stop work:

1. **His prior employment agreements, reviewed by a Georgia attorney** — a customer non-solicit could
   bar him from the agencies the commercial page targets. Most urgent item in the project.
2. **Does he hold a Georgia Chapter 41 license?** In Georgia, offering a service *is* contracting, so
   without it most residential copy is unpublishable.
3. **Does he hold any Georgia Chapter 14 license?** Determines the service list.
4. **Notarized experience letters requested from former employers** — gates the utility license and
   decays with time.
5. **Business name** — unblocks domain, email, logo, Google profile.
6. **How fast can he really answer the phone?** — determines the whole CTA architecture.

---

## Resolved by the Georgia research

Previously open, now settled:

- **Can he self-perform electrical or plumbing?** **No, definitively.** § 43-41-2(5) and (9) require
  Chapter 14 subcontracting with no dollar minimum, and advertising the trades is itself the violation
  under § 43-14-2(7) and (11). No judgment call left to make.
- **Must the license number appear in advertising?** **No** — Georgia has no such rule for Chapter 41,
  unlike California and Arizona. We'll print it anyway as a trust signal, but placement is now ours to
  choose.
- **Is there a separate underground utility license?** **Yes**, and it's his biggest opportunity.
  Georgia's Utility Foreman → Utility Manager → Utility Contractor path is achievable on experience.
  See [02a-georgia-credentials-roadmap.md](02a-georgia-credentials-roadmap.md).
- **Does Render's bandwidth cap matter?** **No.** Overage is $0.15/GB on every plan, so a card on file
  reduces it to pennies, and Pro would cost $25 for $3 of bandwidth. I'd overstated this.

---

## Things I still could not determine

Flagged so nobody treats them as settled:

- **Whether "certified" maps to a real credential.** Still unknown, and it's the riskiest word on the
  site — § 43-41-12(a)(2) is a misdemeanor with a $1,000 minimum fine, and Georgia's FBPA reaches
  certification claims specifically.
- **Whether he *designed* pipe networks or built to someone else's design.** Georgia makes this matter
  twice: "engineer" is a protected title, and the Level II erosion-control design certification is
  restricted to registered design professionals, so he cannot be described as designing ES&PC plans.
- **Whether prior-employer project photos are usable at all.** Assume no until we have written
  clearance.
- **Which Georgia city or county his office is in.** Needed for the occupation tax certificate, zoning,
  service-area SEO, and to know whether MARTA or GDOT is his DBE certifier (MARTA covers Fulton,
  DeKalb, and Clayton).
- **His actual competition.** Worth researching once we know the city — who ranks for "general
  contractor + city," what they charge, whether they publish licenses.
- **Whether his address is in a HUBZone.** Free to check on the [SBA map](https://www.sba.gov/certifications/),
  and unaffected by the certification turmoil.
- **The Georgia utility contractor Class A / B / U distinction.** § 43-14-8.2 names three classes and
  § 43-14-6(a)(4)(H) penalizes "bidding in excess of license coverage," but **no definition appears
  anywhere in Chapter 14 or the Department 121 rules**, and Rule 121-2-.07 describes a single
  undifferentiated statewide license. A real statute-to-rules gap. Call the division at 478-207-2440.
- **Board fee schedules.** The Georgia Secretary of State site sits behind a Cloudflare challenge that
  blocked retrieval, so every fee figure in these docs is from a secondary source and marked as such.
- **Whether Atlanta's HABE and other ethnicity-linked municipal categories survive challenge.** They're
  municipal ordinance programs untouched by the federal rulings, but they're the type of program that
  reasoning targets, and no Georgia litigation resolves it.
- **Metro county diversity programs** (APS, Fulton, DeKalb, Gwinnett, Cobb). Not verified — these are
  board-level policies that change with each administration. Confirm with each purchasing department
  before any claim goes on the site.

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
