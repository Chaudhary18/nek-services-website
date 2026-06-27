# NEK Services Website — Complete Audit & Analysis Report

**Prepared by:** Claude Sonnet 4.6 (Senior Audit Review)
**Date:** June 27, 2026
**Scope:** index.html, about.html, services.html, contact.html, for-firms.html, styles.css, main.js, all assets, docs, reference files
**Status:** Version 2 — Updated after for-firms.html build.
**Pages audited:** 5 (homepage, about, services, contact, for-firms)

---

## EXECUTIVE SUMMARY

The website is structurally sound, technically clean for a static site, and significantly better than the original Gerow/Botble template. The homepage is the strongest page. The new `for-firms.html` is the most focused and audience-specific page on the site and represents the right direction for all inner pages. However, across all five pages, four systemic problems persist: **the contact form does not work**, **a visible "replace with photo" watermark is live for visitors**, **content repetition dilutes the strongest trust signals**, and **inner pages lack the emotional structure that makes the homepage convert**. These problems are fixable. Priorities are ordered by conversion impact.

---

## SECTION 1 — TECHNICAL & CODE AUDIT

### Critical Issues

**1.1 — The contact form does not work.**
`action="mailto:hello@nekservices.com" method="post" enctype="text/plain"` opens the operating system's default email client when submitted — not a form processor. On most US corporate devices and iPhones, this either opens an unconfigured mail client, throws an error, or does nothing visibly. The button says "Send Message." The behavior is "open your email client." That mismatch breaks trust at the single most important conversion moment on the site.

**Fix:** Connect Formspree.io free tier (50 submissions/month, no backend code required). One `action` URL change resolves this entirely. No other code change needed.

**1.2 — "REPLACE WITH PROFESSIONAL PHOTO" watermark is publicly visible.**
The about.html founder story section and the homepage dark About section both display `muhammad-ilyas.jpg` with a darkened overlay and the text "📷 REPLACE WITH PROFESSIONAL PHOTO" in large white letters. This is live and visible to every visitor right now. Nothing signals an unfinished site more clearly. Fix immediately — either remove the watermark CSS overlay entirely and use the headshot as-is, or apply the headshot without any overlay until professional photos are provided.

**Professional photos needed (in order of priority):**
1. Muhammad Ilyas — professional headshot, light background, business casual, collar visible. Straight-on or slight angle. This goes on about.html hero, homepage about section, and founder signature.
2. Muhammad Ilyas — at desk, laptop open, natural and relaxed. Used for about.html founder story section.
3. Team at work — 2-4 people at screens or working together. Natural moment, not posed. Used on about.html and for-firms.html.
4. Team discussion — 2-4 people reviewing papers or a screen together. Collaborative energy. Used on services.html or about.html.
5. Office wide shot — clean workspace, screens visible, no people required. Used as visual background.

**1.3 — Footer anchor links on for-firms.html are broken.**
The for-firms.html footer links to `for-firms.html#bookkeeping-production`, `for-firms.html#tax-prep`, and `for-firms.html#full-engagement`. None of these `id` attributes exist in the HTML. Clicking these links takes visitors to the top of the page rather than the intended section. Either add the missing IDs to the correct HTML elements or remove the anchor fragments from the footer links.

**1.4 — for-firms.html is not linked from any other page.**
The page exists at `/for-firms.html` but nothing points to it. The services.html hero "For CPA Firms" button still links to `#outsourcing` on the same page. The main nav has no link to it. The footer on all other pages has no mention of it. A page with no inbound links from the same site is effectively invisible — visitors cannot discover it through normal navigation.

**Fix required on all other pages:**
- services.html: change hero "For CPA Firms" ghost button from `href="#outsourcing"` to `href="for-firms.html"`
- All page footers: add "For CPA Firms" link under the Services column
- index.html: consider adding "For accounting firms →" text link near the trust bar or pain section CTA

**1.5 — The `split` CSS class overflows its container.**
`.split` is defined as `grid-template-columns: minmax(560px, 0.86fr) minmax(760px, 1.14fr)`. The two column minimums together (560 + 760 + 22px gap = 1342px) exceed the 1180px container width. The right column is clipped and hidden by `overflow-x: hidden` on the body. The class is used on about.html and contact.html.

**Fix:** Replace with `grid-template-columns: 1.2fr 0.8fr; gap: 56px;` or simply use the existing `.about-grid` class which has correct column ratios.

**1.6 — The `downloads/` folder is publicly accessible.**
`website/assets/img/software/downloads/` contains `.zip` files, Adobe Illustrator `.ai` files, `.eps` files, `.DS_Store` macOS metadata, and `__MACOSX` system folders. Any visitor can access these directly via browser. Remove the entire `downloads/` folder before launch.

**1.7 — No image dimensions declared on any page.**
No `<img>` element across any of the 5 pages has `width` and `height` attributes. This causes Cumulative Layout Shift (CLS) as images load — a Core Web Vitals metric Google uses in ranking. With 15+ software logos, 11 marquee logos, 5 client photos, and founder photos, CLS will be significant. Add explicit dimensions to all images.

**1.8 — No lazy loading on below-fold images.**
All images load immediately regardless of scroll position. Add `loading="lazy"` to all images below the hero fold on every page.

### Minor Issues

**1.9 — Counter animation shows final value before animating.**
Stats like `10K+` are hardcoded in HTML as the final value. On page load the visitor sees "10K+" immediately. When the IntersectionObserver triggers on scroll, the counter resets to "0" and animates up. The initial text should be empty or "0" — JavaScript fills the final value.

**1.10 — Unused CSS is approximately 40% of the stylesheet.**
Classes including `.image-stack`, `.logo-tile`, `.process`, `.credential-panel`, `.person`, `.svc-num`, `.steps-flow`, `.step`, `.problem-grid`, `.logos`, `.testimonial-grid`, `.service-item`, `.stats`, `.stat` exist in styles.css but are referenced on no current page. Remove before launch.

**1.11 — No Open Graph image for social sharing.**
When any page URL is shared on LinkedIn, no image appears in the preview. For an accounting firm whose primary professional network is LinkedIn, this is a missed impression on every shared link. Add `<meta property="og:image">` pointing to a branded 1200×630px image.

**1.12 — CSS version strings are managed manually.**
If styles.css changes, every HTML page needs its version string updated manually. Low risk but fragile process. Establish one version string used site-wide.

---

## SECTION 2 — VISUAL DESIGN & HIERARCHY AUDIT

### Critical Issues

**2.1 — Watermark overlay is live (repeated from 1.2).**
This is both a technical issue and a visual brand-destroying issue. It is listed in both sections because of its severity. The photo placeholder with overlay text must be removed before any visitor sees the site publicly.

**2.2 — `section--tint` is used for three different emotional purposes across the site.**
The blue-green gradient background (`linear-gradient(160deg, #f0f5ff 0%, #f5fff8 100%)`) is now applied to:
- Homepage pain section — communicating urgency and discomfort
- Services.html CPA section — communicating partnership and opportunity
- For-firms.html pain section — communicating urgency and discomfort again

Using the same visual treatment for three different contexts across the site creates visual incoherence. Visitors associate color and pattern with emotional context. When the same background signals pain (homepage), solution (services), and pain again (for-firms), it loses its communicative function entirely. The services.html CPA section needs a distinct background treatment to break this pattern.

**2.3 — Service card descriptions are unequal in length, causing visible height imbalance.**
On services.html, the 6 service cards have descriptions ranging from 1 to 3 sentences of different lengths. CSS grid forces equal column widths but card heights within each row vary. Monthly Bookkeeping and Accounting Cleanup are noticeably taller than Financial Analysis and CFO-Style Advisory. In a professional services context, unequal cards subliminally suggest unequal quality. All 6 descriptions should be equalized to approximately the same line count.

**2.4 — Contact page WhatsApp, email, and LinkedIn buttons are built with inline styles.**
The three contact method links on contact.html use 200+ characters of inline CSS per element, including hardcoded colors, spacing, backgrounds, and border values. These components exist entirely outside the CSS architecture and are impossible to maintain consistently. They must be converted to CSS classes before the contact page is finalized.

### Moderate Issues

**2.5 — Visual richness drops significantly from homepage to all inner pages.**
The homepage has: decorative hero shapes, trust bar marquee, tinted pain section, gradient service card badges, software logo grid, step number circles, dark about section. Every inner page is visually flatter. A visitor entering through about.html, services.html, or for-firms.html gets a measurably weaker brand impression than one who enters through the homepage.

**2.6 — Client logo trust bar only exists on the homepage.**
11 client logos appear in the homepage marquee and never again. A visitor who enters directly through services.html or for-firms.html never encounters this third-party credibility evidence. A simplified static logo strip should appear on at least about.html and for-firms.html — both are pages where trust decisions are being made.

**2.7 — "Book a Free Call" nav CTA button is circular on contact.html.**
When a visitor is already on contact.html, the nav CTA button links back to contact.html. The button text and behavior are circular. On the contact page specifically, this button should either be hidden or point to something meaningful (WhatsApp, direct email).

**2.8 — for-firms.html "NDA" hero card is visually strong and correctly placed.**
The breadcrumb-card showing `<strong>NDA</strong>` at 42px in brand blue is a deliberately confrontational design choice that addresses the firm's primary concern immediately. This is the right approach for the for-firms audience and should be noted as a best practice to carry to other inner page hero cards.

---

## SECTION 3 — CONTENT & REPETITION AUDIT

### Site-wide Repetition Map (all 5 pages)

| Content Element | Homepage | About | Services | Contact | For Firms |
|---|---|---|---|---|---|
| "400+ US businesses and CPA firms" | 3× | 3× | 1× | 0× | 1× |
| "No contracts. No commitment. Free first call." | 2× | 1× | 2× | 1× | 1× |
| "Based in Lahore, Pakistan. Since 2012." | 1× | 2× | 1× | 0× | 1× |
| All 5 testimonials | ✓ | ✓ | ✓ | — | — |
| "Clean books. Clear reports." | 2× | 2× | 1× | 0× | 0× |
| Guarantee statement | 1× | 1× | 1× (CPA section only) | 0× | 1× |
| "Book a Free 30-Min Call" CTA | 3× | 2× | 3× | 0× | 2× |
| NDA statement | 1× | 1× | 1× | 1× | 2× |

### Critical Repetition Problems

**3.1 — Same 5 testimonials appear on homepage, about, services, AND for-firms.**
Courtney Arrington, Dr. Cozette White, Marshea Mayfield, Carl Cyrius, and Sam Mabry appear on every page that has a testimonial section. A visitor reading homepage → about → services sees these same people 3 times. By the third encounter, they provide zero additional persuasion. The testimonials lose all credibility impact from repetition.

**Correct distribution:**
- Homepage: all 5 (widest net, first impression)
- About: 3 — Courtney, Cozette, Marshea (firm credibility emphasis)
- Services: 3 — Courtney, Cozette, Carl (outcomes and specific results)
- For Firms: current 5 is acceptable since all 5 are from firms, but Courtney first, Cozette second is correct (already done on for-firms.html)

**3.2 — CTA sections are nearly identical across all 5 pages.**
Homepage, about, and services pages all share the same CTA H2: "Clean books. Clear reports. Starting this month." with the same subtext and same risk reducer. For-firms.html correctly breaks this pattern with "More clients. Same team size. Starting this month." — this is the model other pages should follow. Each CTA should reflect the visitor's specific context and decision stage.

**3.3 — "400+ US businesses and CPA firms" appears 3 times on the about page alone.**
Hero card → Who We Serve body → dark section body → audience note → CTA sub = 5 appearances of the same stat on one page. A stat mentioned 5 times on one page reads as a marketing claim, not a trust signal.

**3.4 — Pain framing only exists on the homepage and for-firms.html.**
The homepage pain section and for-firms.html pain section are the only places on the site where the visitor's actual problem is named and validated before the solution is presented. About.html and services.html go directly to competence and features — skipping the psychological step that makes the visitor feel understood. For-firms.html correctly uses a pain section. Services.html should too.

**3.5 — "What happens next" is described differently in 3 places.**
- Homepage: "How It Works" — 3 steps framed as transformation (tell us, we work, you get numbers)
- Contact page: "What happens next" — 3 steps framed as process (you send, Muhammad reaches out, books cleaned)
- Services FAQ: one paragraph in FAQ answer

All three should use the same core process description. The contact page version (most specific, most personal) should be the master version.

**3.6 — NDA mentioned twice on for-firms.html within 3 sections.**
For-firms.html mentions NDA in: hero card, how we work service-list, dark section checklist, dark section security note. Four mentions on one page. The first mention (hero card) should be the striking one. Subsequent mentions should be brief confirmations, not repetitions. The dark section security note becomes redundant when the checklist above already mentions NDA twice.

---

## SECTION 4 — MARKETING & CONVERSION AUDIT

**4.1 — The contact form failure is the single largest conversion loss.**
Every visitor who fills in the contact form on contact.html and clicks "Send Message" encounters either nothing, an email client opening unexpectedly, or an error. For the subset of visitors who attempt to contact via form (likely the majority), the conversion rate is effectively zero. Fix Formspree first.

**4.2 — for-firms.html is the only inner page with a working pain section.**
For-firms.html: pain section → how we work → services → trust/guarantee → social proof → FAQ → CTA. This is closer to the homepage funnel structure than any other inner page. Services.html and about.html both skip the pain validation step and go directly to competence signals. A visitor who does not feel understood first is less likely to trust the subsequent credibility claims.

**4.3 — CPA firm audience finally has a dedicated first-person page.**
For the first time on the site, for-firms.html speaks directly TO CPA firm owners (not about them). The pain cards address capacity, deadline pressure, and confidentiality — the three actual pain points. The checklist addresses "no subcontracting" which is a hidden concern most CPA firms have but that the site never addressed before. This is the strongest audience-specific content on any inner page.

**4.4 — Guarantee is still missing from services.html main service grid.**
Business owners visiting services.html see 6 service cards and then the CPA section. The guarantee statement only appears in the CPA section. A US business owner evaluating Monthly Bookkeeping or Financial Analysis never sees the guarantee. Move the guarantee to a visible position before or after the 6-card grid.

**4.5 — WhatsApp is positioned as primary contact for a US professional audience.**
Contact.html lists WhatsApp first as "Fastest way to reach Muhammad directly." For US business owners and CPA firm partners, WhatsApp reads as informal — used with friends and family, not with financial services providers. Email should be the primary featured method. WhatsApp should be labeled as "for international messaging" or positioned after email in all contact panels.

**4.6 — No urgency signal exists on any page except the pain sections.**
Every CTA is soft and patient. Accounting urgency is real and specific — books fall further behind every month, tax deadlines are fixed, year-end closes are non-negotiable. The pain sections name these urgencies. Nothing in the CTA sections capitalizes on them. Adding one urgency line near each CTA would increase conversion: "Every month your books sit unreconciled is another month of decisions made on wrong numbers."

**4.7 — No pricing context creates comparison paralysis.**
No prices shown is correct. But US business owners comparing NEK to Bench, Pilot, or local bookkeepers have zero frame of reference. One line on services.html or for-firms.html — "A qualified accounting team for significantly less than a US full-time hire" — removes comparison paralysis without committing to a number.

**4.8 — "Get started" micro-CTA on service cards fires too early.**
Each service card on services.html ends with "Get started →" linking to contact.html after a 2-sentence description. Visitors are not ready to commit at this stage — they are still evaluating. The micro-CTA should be informational ("See how it works") or absent, with the conversion action reserved for the large CTA below the grid.

---

## SECTION 5 — HUMAN PSYCHOLOGY AUDIT

**5.1 — for-firms.html opens with the audience's primary anxiety.**
The hero breadcrumb card showing "NDA" as the first large visual element on the page is psychologically correct. CPA firms' primary barrier to outsourcing is confidentiality. Addressing that concern in the first 2 seconds of the page visit — before the firm owner has even read the H1 — is a strong conversion decision. This approach should be replicated on other inner pages.

**5.2 — Loss aversion is activated on 2 of 5 pages.**
The homepage pain section and for-firms.html pain section use loss framing. The remaining 3 pages are entirely gain-framed. Loss aversion is the most reliable motivator in human decision-making — we avoid losses twice as urgently as we seek equivalent gains. A visitor entering through about.html or services.html never encounters the language that activates this motivation.

**5.3 — The guarantee is buried and reached only by visitors who scroll deeply.**
On homepage: position 65-70% down. On about.html: position 4 of 7 sections. On services.html: only in the CPA section — business owners never see it. On for-firms.html: position 5 of 8 sections. The guarantee is one of the highest-converting trust signals available for a financial services provider handing confidential records to an offshore team. It should appear near the first primary CTA on every page, not at the end of a dark section.

**5.4 — Social proof is positioned as a page conclusion, not a decision support tool.**
On all 5 pages, testimonials appear near the bottom as a pre-CTA flourish. In a high-trust purchase like handing financial records to an offshore accounting team, social proof should appear earlier in the visitor's decision journey — while they are still weighing whether to trust the firm, not after all other content has been presented. Moving testimonials earlier (above the credential cards on about.html, above the FAQ on services.html) would support the decision rather than confirm it.

**5.5 — "No subcontracting" on for-firms.html addresses a hidden concern correctly.**
The for-firms.html dark section checklist includes "No subcontracting — your work stays within our team." This addresses a concern CPA firms have but almost never voice explicitly: if NEK outsources to another team, the confidentiality chain breaks. Proactively naming hidden concerns and resolving them is a powerful psychological trust-building technique. More of this throughout the site.

**5.6 — Strongest testimonials are now in the first position on for-firms.html.**
Courtney Arrington ("doubled monthly revenue, left 9-5") is now first and Dr. Cozette White ("227% revenue increase") is now second on for-firms.html. This is correct. These two testimonials have specific measurable outcomes — the most psychologically persuasive format for social proof. The other 3 pages should reorder to match.

**5.7 — The founder signature humanizes the brand but is underused.**
`founder-sig` (circular photo + name + title) appears only in the dark sections of homepage and about.html. Research consistently shows human faces near conversion points increase completion rates. The founder signature should also appear at the bottom of the contact form, at the end of the for-firms.html FAQ, and in the services.html CPA section.

**5.8 — Five star ratings with no review platform reference lose credibility.**
Every testimonial card shows ★★★★★ with no attribution — no Google, no Clutch, no Trustpilot. Five stars without a source are indistinguishable from self-reported ratings. If testimonials are collected outside a verified platform, remove the star rating entirely and let the quoted words carry the weight. Stars without a source reduce trust, not increase it.

**5.9 — Zero testimonials from US business owners (non-accounting firms).**
All 5 testimonials are from firm owners. A restaurant owner, contractor, or retailer visiting the site sees only accounting firms as social proof — not businesses like theirs. This gap cannot be fixed without a new testimonial. In the interim, the services.html hero and homepage pain section copy should explicitly name the types of businesses served.

---

## SECTION 6 — STRUCTURAL & ARCHITECTURE AUDIT

**6.1 — for-firms.html exists but is unreachable through site navigation.**
The most significant structural problem introduced by building the new page is that it cannot be found. No link on any other page points to it. The services.html hero button still says "For CPA Firms" and links to `#outsourcing` on the same page. The main nav has no entry. The footer on all other pages has no mention. This must be resolved immediately after the page is built.

**Integration points needed:**
- services.html: hero "For CPA Firms" ghost button → `for-firms.html`
- All pages footer: add "For CPA Firms" link in the Services column
- index.html: add "For accounting firms →" text link near the trust bar or pain section
- Optionally: add to main nav as a Services dropdown or a 5th nav link

**6.2 — Inner page structure is informational, not emotional.**
Homepage works because each section answers a psychological question: hero (who are you?), pain (do you understand me?), services (what can you do?), how it works (how easy is it?), about (can I trust you?), testimonials (do others trust you?), CTA (what do I do now?). Inner pages present information in sensible order without this emotional logic. For-firms.html comes closest with its pain section. The other inner pages need the equivalent.

**6.3 — No inbound link from homepage to for-firms.html.**
The homepage has the highest traffic of any page on the site. CPA firm owners will encounter the homepage. Nothing on the homepage guides them toward the for-firms.html page. The trust bar could include a "For accounting firms" text link. The pain section CTA could offer a secondary path. This is a missed acquisition opportunity.

**6.4 — Services page is the longest with no navigation aids.**
With hero + 6 service cards + CPA section + 6-question FAQ + 5-card testimonial slider + CTA, services.html is the longest page on the site. No anchor links at top. No sticky navigation. No "jump to" shortcuts. On mobile this is a significant scrolling burden.

**6.5 — No 404 page.**
A visitor typing a wrong URL gets the server's default error. A branded 404 page keeps visitors on the site. Low effort, high value.

**6.6 — for-firms.html is the first page on the site with a dedicated audience-specific funnel.**
This is the correct direction for the site architecture. Recommendation: the homepage should serve as a sorting mechanism that routes visitors to either `/services` (general) or `/for-firms` (accounting firms) based on their identity. The homepage currently treats both audiences the same, which serves neither well.

---

## SECTION 7 — FOR-FIRMS.HTML SPECIFIC AUDIT

### What Works Well

- Pain section opens with the right 3 firm-specific problems — capacity, deadline pressure, confidentiality
- "NDA" as the hero card stat is psychologically correct for this audience
- Checklist includes "No subcontracting" — addresses a hidden concern proactively
- Guarantee is reworded for the firm context: "if we miss a deadline or make an error" (not just "error")
- Testimonials are correctly reordered (Courtney first, Cozette second)
- FAQ is entirely firm-specific — no overlap with services.html FAQ
- CTA headline is unique and audience-specific: "More clients. Same team size."
- Services section adds software names beneath each card description
- "How We Work" section explicitly states "We work for your firm, not alongside it"

### What Needs Fixing

- Footer anchor links (`#bookkeeping-production`, `#tax-prep`, `#full-engagement`) are broken — IDs don't exist
- Page is unreachable from any other page
- NDA appears 4 times on the page — reduce to 2 prominent mentions
- section--tint used for pain section (3rd use of same bg for different contexts site-wide)
- No founder signature near the FAQ or CTA — missed humanization opportunity
- Dark section on for-firms.html could display a team photo placeholder instead of the standard stats 2x2 grid since firms care more about the team than about the client count numbers

---

## COMPLETE PRIORITY LIST — ALL 5 PAGES

**Priority 1 — Critical (must fix before any public traffic)**

1. Fix contact form — Formspree.io, one `action` attribute change.
2. Remove watermark overlay from all photo placeholders on all pages.
3. Fix for-firms.html footer anchor links (add IDs or remove anchors).
4. Link for-firms.html from services.html hero button, all page footers, and homepage.
5. Delete `downloads/` folder from public web directory.
6. Fix `split` CSS class column overflow.

**Priority 2 — High Impact (week 1)**

7. Reorder testimonials sitewide — Courtney first, Cozette second, on every page.
8. Reduce testimonial repetition: homepage all 5, about 3 (firm), services 3 (outcomes), for-firms 5 (all firm — keep as is).
9. Add guarantee statement near the primary CTA on services.html main service grid.
10. Vary CTA H2 across pages — same headline on 3 pages becomes invisible by page 2. Model: for-firms.html CTA headline.
11. Add pain framing paragraph to services.html before the service card grid.
12. Reorder testimonial slider on homepage and about.html to Courtney first, Cozette second.

**Priority 3 — Conversion (week 2)**

13. Add `loading="lazy"` and `width`/`height` to all below-fold images.
14. Connect Formspree and update contact form action.
15. Reposition contact page — email featured first, WhatsApp second.
16. Add founder signature to contact form and for-firms.html FAQ.
17. Remove star ratings or attribute them to a verified review platform.
18. Add one pricing-context sentence on services.html or for-firms.html.
19. Replace "Get started" micro-CTA on service cards with "See how it works" or remove entirely.

**Priority 4 — Audience & Trust**

20. Add "For accounting firms →" link on homepage near trust bar or pain section.
21. Add static client logo strip on about.html and for-firms.html.
22. Add urgency line near each CTA referencing the cost of delay.
23. Reduce NDA mentions on for-firms.html from 4 to 2 — one in hero card, one in dark section.
24. Fix section--tint inconsistency — use a different background for services.html CPA section.

**Priority 5 — Technical Debt (pre-launch)**

25. Add `width` and `height` attributes to all `<img>` tags.
26. Remove unused CSS — approximately 40% of stylesheet.
27. Add `<meta property="og:image">` for LinkedIn sharing.
28. Fix counter animation flash — set initial HTML text to empty.
29. Build branded 404 page.
30. Standardize CSS version string management.

---

## OPEN ITEMS FROM MUHAMMAD ILYAS

| # | Item | Status |
|---|---|---|
| Photos | Headshot, at-desk, team working, team meeting, office wide shot | Pending shoot |
| Form provider | Formspree free tier — 50 submissions/month, no credit card | Pending implementation |
| Email primary, WhatsApp secondary | Contact page needs updating | Pending |
| CPA firms page | `/for-firms.html` built | Complete — needs linking |
| Business owner testimonial | None available | Gap accepted — address in copy |

---

## PAGE-BY-PAGE STATUS SUMMARY

| Page | Structure | Content | Conversion | Technical | Overall |
|---|---|---|---|---|---|
| index.html | ✅ Strong | ⚠️ Repetition issues | ✅ Best funnel on site | ⚠️ No img dims | Strong |
| about.html | ✅ Good | ⚠️ 400+ stat 3× | ⚠️ Missing pain step | ⚠️ Watermark live | Good |
| services.html | ⚠️ No pain section | ✅ Good | ⚠️ No guarantee for biz owners | ⚠️ No img dims | Adequate |
| contact.html | ✅ Good | ✅ Good | 🚨 Form broken | 🚨 Form broken | Broken |
| for-firms.html | ✅ Best inner page | ✅ Audience-specific | ✅ Pain → solution funnel | 🚨 Unreachable, broken anchors | Strong (once linked) |

---

*Version 2 — Updated June 27, 2026 after for-firms.html build.*
*Next review: after Priority 1 and Priority 2 items are addressed.*
