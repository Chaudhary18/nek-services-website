# NEK Services Website — Combined Audit Report

**Sources:** Claude_audit_report.md (Claude Sonnet 4.6) + OMP_AUDIT_REPORT.md (OMP Agent, Claude Sonnet 4.6)
**Compiled:** June 27, 2026
**Pages covered:** index.html, about.html, services.html, contact.html, for-firms.html
**Rule:** Where the two reports contradict, OMP takes precedence.

---

## HOW DUPLICATES WERE HANDLED

The following issues appeared in both reports and are merged into one entry (most specific version kept):
- Contact form broken → merged as CRIT-01
- Watermark overlay → merged as CRIT-02
- for-firms.html anchor links broken → merged as CRIT-03
- for-firms.html not linked from navigation → merged as CRIT-04
- No lazy loading → merged as PERF-02
- No OG image/social meta → merged as SEO-01
- Testimonials repeated across pages → merged as CONT-01 (OMP distribution used — see contradiction notes)

## CONTRADICTION RESOLUTIONS (OMP OVERRIDES)

| Topic | Claude Said | OMP Said | Resolution |
|---|---|---|---|
| Testimonial star ratings | Remove stars or attribute to platform | Keep stars, add aria-label="5 out of 5 stars" | **OMP wins** — stars kept, made accessible |
| Testimonial distribution | Homepage all 5; about 3 firm-focused; services 3 outcomes | Homepage 3 (Cozette, Courtney, Sam); about 2 (Marshea, Carl); services all 5 | **OMP wins** — see CONT-01 for exact distribution. About gets Sam added as 3rd for slider UX. |
| Homepage dark section | Noted near-identical to about page | Shorten homepage version, remove founder-sig from homepage, let about carry fuller story | **OMP wins** — homepage dark section shortened |
| Homepage hero CTA | Not mentioned | Add "Book a Free 30-Min Call" as primary CTA, make "Our Services" secondary ghost | **OMP wins** — this was missed entirely in Claude report |

---

## PRIORITY 1 — CRITICAL (fix before any public traffic)

### CRIT-01 — Contact form does not submit
**File:** contact.html (form element)
**Problem:** `action="mailto:..."` opens local email client. Fails silently for most US users.
**Fix:** Connect Formspree.io. Change form action to `https://formspree.io/f/[FORM_ID]`, method `POST`. Remove `enctype="text/plain"`. **Requires Muhammad's Formspree account ID — cannot implement without it.**
**Also:** Add `id="contact-form"` to the form element so the nav CTA can scroll to it.

### CRIT-02 — Developer watermark visible to live visitors
**Files:** index.html (about section), about.html (founder story section)
**Problem:** `<div class="photo-placeholder__watermark">📷 REPLACE WITH PROFESSIONAL PHOTO</div>` rendered over live photos for all visitors.
**Fix:** Remove both watermark `<div>` elements entirely. Also remove the `<!-- TODO: Add service photography -->` HTML comment in index.html services section.

### CRIT-03 — for-firms.html footer anchor links broken
**File:** for-firms.html footer
**Problem:** Links to `#bookkeeping-production`, `#tax-prep`, `#full-engagement` — none of these IDs exist in the HTML.
**Fix:** Add `id="bookkeeping-production"` to the Bookkeeping Production card, `id="tax-prep"` to Tax Preparation Support card, `id="full-engagement"` to Full Engagement Support card.

### CRIT-04 — for-firms.html is unreachable from site navigation
**Files:** All 5 pages (nav + footer)
**Problem:** No link on any page points to for-firms.html. Page is an orphan.
**Fix:**
1. Add `<li><a href="for-firms.html">For Firms</a></li>` between Services and Contact in the nav on all 5 pages.
2. Fix for-firms.html nav: `aria-current="page"` must move from Services link to For Firms link.
3. Add `<li><a href="for-firms.html">For CPA Firms</a></li>` to the Services footer column on all pages.
4. Update services.html hero "For CPA Firms" ghost button from `href="#outsourcing"` to `href="for-firms.html"`.

### CRIT-05 — Homepage hero has no primary booking CTA
**File:** index.html hero section
**Problem:** The highest-visibility spot on the site has only one CTA: "Our Services" pointing to services.html. No booking CTA in the hero.
**Fix (OMP L-03):** Change hero actions to:
```html
<div class="hero__actions">
  <a class="btn btn--arrow" href="contact.html"><span>Book a Free 30-Min Call</span></a>
  <a class="btn btn--ghost" href="services.html">Our Services</a>
</div>
```

---

## PRIORITY 2 — HIGH IMPACT

### PERF-01 — Hero founder image is 1.5 MB (destroys LCP)
**File:** assets/img/founder/muhammad-ilyas-standing-1-cutout.png (referenced in index.html)
**Problem:** LCP element at 1.5 MB causes 3–8 second delay on average connections. Core Web Vitals failure.
**Fix (OMP V-01):** Re-export as WebP at ≤ 300 KB. Use `<picture>` element with WebP source and PNG fallback. Add `<link rel="preload">` in index.html `<head>`. **Cannot compress binary files — requires external tool. Noted as missing asset.**

### PERF-02 — No lazy loading on any below-fold image
**Files:** All 5 pages
**Problem:** All images load immediately, competing with the hero for bandwidth.
**Fix (OMP V-04):** Add `loading="lazy"` to every image that is NOT in the first viewport. Do NOT add to the hero image.

### PERF-03 — Testimonial avatar images are grossly oversized
**Files:** assets/img/team/ (cozette.png 359KB, courtney-arrington.png 324KB, carl-cyrius.png 204KB, samantha-mabry.png 190KB, marshea-mayfield.jpg 65KB — all displayed at ~48×48px)
**Fix (OMP V-02):** Resize all to 96×96px, convert to WebP. **Cannot compress binary files — noted as missing asset.**

### CONT-01 — Same testimonials repeated on every page
**Files:** index.html, about.html, services.html, for-firms.html
**Problem:** All 5 testimonials appear identically on homepage, about, and services. Zero additional persuasion from the 2nd and 3rd exposure.
**Fix (OMP distribution — override):**
- **index.html:** Dr. Cozette White (227% revenue), Courtney Arrington (doubled revenue, left job), Sam Mabry (game-changer). 3 cards only.
- **about.html:** Marshea Mayfield (firm growth), Carl Cyrius (professionalism), Sam Mabry (processes streamlined). 3 cards. Sam added as 3rd for slider UX — 2 cards creates blank space in 3-up slider.
- **services.html:** All 5, keep current order (Marshea, Courtney, Carl, Cozette, Sam).
- **for-firms.html:** Keep current — already correctly ordered (Courtney, Cozette, Marshea, Carl, Sam).

### CONT-02 — Homepage dark "NEK Difference" section near-identical to about.html version
**Files:** index.html (dark about section), about.html (dark section)
**Problem (OMP C-06):** Same bullet list, guarantee, NDA note, founder-sig on both pages.
**Fix:** Shorten homepage version to 3 punchy bullets + one-line guarantee. Remove founder-sig from homepage (belongs on About only). Let about.html carry the fuller story.

### CONT-03 — Alt text on trust bar logo is a person's name, not a brand
**File:** index.html (two instances — visible and aria-hidden duplicate)
**Problem (OMP C-03):** `alt="Mysherri Rhodes"` on taxedo-tax.png logo. Should be the brand name.
**Fix:** Change both instances to `alt="Taxedo Tax"`.

### CONT-04 — Generic filename `images.png` for Royal Financial Services logo
**File:** assets/img/clients/images.png (referenced in index.html × 2)
**Problem (OMP C-04):** Filename gives no indication of content. Will break on case-sensitive Linux servers.
**Fix:** Rename file to `royal-financial-services.png`. Update both `src` references in index.html.

### CONT-05 — Filename typo: `Devconerns.png`
**File:** assets/img/clients/Devconerns.png (referenced in index.html × 2)
**Problem (OMP C-05):** Filename typo — brand is "DevConcerns." Will cause 404 on Linux servers.
**Fix:** Rename file to `devconcerns.png`. Update both `src` references in index.html.

### CONT-06 — Footer "Outsourced Accounting" links should go to for-firms.html
**Files:** index.html footer, about.html footer
**Problem (OMP C-07):** Both link to `services.html` generically. The dedicated for-firms page is the better destination now.
**Fix:** Change `href="services.html"` on both "Outsourced Accounting" footer links to `href="for-firms.html"`.

### LINK-01 — Homepage service cards don't use anchor links
**File:** index.html (3 service card "Learn more" links)
**Problem (OMP L-04):** All three link to `services.html` without anchors. The services page has correct IDs: `#bookkeeping`, `#cleanup`, `#reporting`.
**Fix:** Update the three links:
- Monthly Bookkeeping card: `href="services.html#bookkeeping"`
- Accounting Cleanup card: `href="services.html#cleanup"`
- Financial Reporting card: `href="services.html#reporting"`

### LINK-02 — Contact page nav CTA self-links
**File:** contact.html nav
**Problem (OMP L-02):** "Book a Free Call" nav button links back to contact.html — the current page. Circular.
**Fix:** Change nav CTA on contact.html only: `href="#contact-form"`. This scrolls to the form instead of reloading the page.

### LINK-03 — btn--ghost used on dark hero backgrounds (contrast risk)
**Files:** services.html hero, for-firms.html hero
**Problem (OMP L-05):** `.btn--ghost` uses blue border and blue text, which may not meet WCAG AA contrast on the dark page-hero gradient.
**Fix:** Change `btn--ghost` to `btn--ghost-light` on the secondary hero buttons on both services.html and for-firms.html. `btn--ghost-light` uses white border and white text — correct for dark backgrounds.

### STRUCT-01 — CPA firm right-column cards missing reveal animation
**File:** services.html (CPA firms section, 3 cards)
**Problem (OMP S-01):** Three cards in the "For CPA Firms" right column have `class="card"` without the `reveal` class. They appear immediately on load without the scroll-in animation — inconsistent with every other card on the site.
**Fix:** Add `reveal` class to all three cards.

### STRUCT-02 — Two consecutive `section--soft` sections on homepage
**File:** index.html (Software section and How It Works section)
**Problem (OMP S-03):** Back-to-back `section--soft` (#f7f7f7 grey) creates a visually undifferentiated block.
**Fix:** Change How It Works section from `class="section section--soft"` to `class="section"` (white background). This breaks the consecutive grey sections.

### STRUCT-03 — Dead JavaScript handler
**File:** assets/js/main.js (lines 63–73)
**Problem (OMP S-05):** The `[data-provider-ready]` form handler queries a `data-provider-ready` attribute that exists on no form element in the site. Dead code.
**Fix:** Remove the `document.querySelectorAll("[data-provider-ready]")` block entirely.

---

## PRIORITY 3 — ACCESSIBILITY & SEO

### A11Y-01 — Testimonial star ratings not accessible
**Files:** All pages with testimonial sliders
**Problem (OMP V-05):** Stars rendered as raw Unicode. Screen readers announce "black star black star black star..." five times.
**Fix (OMP override — keep stars, make accessible):**
```html
<div class="testimonial__stars" aria-label="5 out of 5 stars">
  <span aria-hidden="true">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
</div>
```
Apply to all testimonial cards across all pages.

### A11Y-02 — Testimonial slider has no ARIA live region
**Files:** All pages with `[data-slider]`
**Problem (OMP V-06):** When user presses prev/next, slide content changes with no screen reader announcement.
**Fix:** Add `aria-live="polite"` to the slider viewport:
```html
<div class="slider__viewport" aria-live="polite">
```

### A11Y-03 — Hamburger menu spans not hidden from assistive tech
**Files:** All 5 pages (nav button)
**Problem (OMP V-07):** Three empty `<span>` elements (decorative hamburger lines) are not marked as aria-hidden.
**Fix:** Add `aria-hidden="true"` to all three spans.

### SEO-01 — No Open Graph or Twitter Card meta tags
**Files:** All 5 pages `<head>`
**Problem:** Pages shared on LinkedIn render as blank previews.
**Fix:** Add per-page Open Graph + Twitter Card meta tags. Requires a branded 1200×630px OG image (`assets/img/og-image.png`). **OG image is a missing asset — noted at end.**

### SEO-02 — No structured data (JSON-LD schema)
**Files:** All 5 pages
**Problem (OMP SEO-02):** No schema markup. Search engines have no structured understanding of the business or services.
**Fix:** Add `AccountingService` schema to index.html. Add `Service` schema to services.html and for-firms.html.

### SEO-03 — No robots.txt or sitemap.xml
**Location:** website/ root (neither file exists)
**Fix (OMP SEO-03):** Create both files. Sitemap must include for-firms.html.

### SEO-04 — No canonical link tags
**Files:** All 5 pages `<head>`
**Problem (OMP SEO-04):** Without canonical tags, if the site is accessible at both www and non-www, duplicate content issues arise.
**Fix:** Add `<link rel="canonical">` to each page's `<head>`.

---

## PRIORITY 4 — VISUAL CONSISTENCY & POLISH

### VIS-01 — Photo placeholder uses inline height override
**File:** about.html (founder section photo)
**Problem:** `style="height:320px"` overrides the CSS `.photo-placeholder img { height: 200px; }`. Inline style breaks the design system.
**Fix:** Add `.photo-placeholder--tall img { height: 320px; }` to styles.css. Replace the inline style attribute with the class on the element's parent div.

### VIS-02 — Repeated inline styles should be CSS classes
**Files:** about.html, for-firms.html, services.html (30+ inline style attributes across all pages)
**Problem (OMP S-02):** Patterns like `style="color:var(--muted);font-size:13px;margin-top:10px;"` appear 3 times on for-firms.html alone — a clear candidate for a shared class.
**Fix:** Add the following classes to styles.css:
- `.card__meta` → `color: var(--muted); font-size: 13px; margin-top: 10px;` (replaces software name lines under service cards on for-firms.html)
- `.card__desc` → `color: var(--muted); font-size: 14px; margin: 10px 0 0;` (replaces card intro sentences)
- `.section__actions--center` → `justify-content: center; margin-top: 44px;` (replaces inline on section__actions divs)

### VIS-03 — Consistent section background rhythm throughout site
**Current state:** Homepage: hero → white → tint → white → soft → soft → dark → soft → dark. Two consecutive soft sections.
**After fix (STRUCT-02):** hero → white → tint → white → soft → white → dark → soft → dark. Resolved.
**Inner pages:** About (hero → white → soft → dark → white → soft → dark ✓), Services (hero → white → tint → soft → white → dark ✓), Contact (hero → white → soft → white ✓), For Firms (hero → tint → white → soft → dark → soft → white → dark ✓).

### VIS-04 — `split` CSS class overflows container
**File:** styles.css
**Problem:** `grid-template-columns: minmax(560px, 0.86fr) minmax(760px, 1.14fr)` — combined minimums (1342px) exceed the 1180px container. Right column gets clipped.
**Fix:** Change `.split` to `grid-template-columns: 1.2fr 0.8fr; gap: 56px;` or ensure no page uses `.split` (currently contact.html and about.html use `.about-grid` which is correct — verify `.split` is unused and remove if so).

### VIS-05 — Counter animation shows final value before animating
**Files:** index.html, about.html, for-firms.html (all stats with data-count)
**Problem:** HTML hardcodes final values ("13+", "400+", "10K+", "6+"). On page load visitors see final values. When IntersectionObserver fires, counter resets to 0 and animates up — creates a flash.
**Fix:** Change initial text content of all `[data-count]` elements to match the suffix only (e.g., `0+`, `0K+`) — JavaScript overrides this on scroll.

---

## PRIORITY 5 — TECHNICAL DEBT (pre-launch, best effort)

### TECH-01 — No image width/height attributes (Layout Shift / CLS)
**Files:** All pages
**Problem:** No `<img>` has explicit `width` and `height`. Causes layout shift as images load.
**Fix:** Add `width` and `height` to all `<img>` elements matching their natural dimensions.

### TECH-02 — No WebP format support site-wide
**Problem (OMP V-08):** Site serves only PNG and JPG. WebP is 25–35% smaller and supported by all modern browsers.
**Fix (OMP V-08):** Wrap each significant image in `<picture>` with a WebP `<source>`. **Requires WebP versions of all images — external compression tool needed. Noted as missing.**

### TECH-03 — CSS has ~40% unused rules
**File:** styles.css
**Problem:** Classes including `.image-stack`, `.logo-tile`, `.process`, `.credential-panel`, `.person`, `.svc-num`, `.steps-flow`, `.step`, `.problem-grid`, `.logos`, `.testimonial-grid`, `.service-item` are not referenced on any current page.
**Fix:** Remove unused CSS rules before production deployment.

### TECH-04 — `downloads/` folder publicly accessible
**Location:** website/assets/img/software/downloads/
**Problem:** Contains .zip, .ai, .eps, .DS_Store, __MACOSX files — publicly accessible via browser URL.
**Fix:** Delete entire `downloads/` folder from the public web directory. **Manual deletion required.**

---

## IMPLEMENTATION BLOCKERS — ITEMS REQUIRING EXTERNAL INPUT

The following cannot be implemented without external assets or credentials:

| # | Item | What's needed |
|---|---|---|
| 1 | Contact form (CRIT-01) | Formspree account + form ID from Muhammad |
| 2 | Hero image compression (PERF-01) | WebP conversion tool — 1.5MB PNG needs ≤300KB WebP |
| 3 | Testimonial avatar compression (PERF-03) | Resize all to 96×96px and convert to WebP |
| 4 | OG image (SEO-01) | 1200×630px branded PNG/JPG to create |
| 5 | Professional photos (CRIT-02 partial) | 5 types listed in Claude_audit_report.md |
| 6 | Downloads folder (TECH-04) | Manual folder deletion |
| 7 | WhatsApp number verification (OMP L-09) | Confirm +92 334 472 1225 is correct and active |

---

## COMPLETE IMPLEMENTATION CHECKLIST

| # | Issue | File(s) | Can implement now |
|---|---|---|---|
| 1 | CRIT-02 Remove watermark divs | index.html, about.html | ✅ |
| 2 | CRIT-03 Add card IDs in for-firms footer | for-firms.html | ✅ |
| 3 | CRIT-04 Add for-firms to nav on all pages | All 5 | ✅ |
| 4 | CRIT-04 Fix aria-current on for-firms | for-firms.html | ✅ |
| 5 | CRIT-04 Add for-firms to all footers | All 5 | ✅ |
| 6 | CRIT-04 Fix services.html hero button | services.html | ✅ |
| 7 | CRIT-05 Add Book a Call to homepage hero | index.html | ✅ |
| 8 | CRIT-01 Form ID (partial — no Formspree ID) | contact.html | Partial |
| 9 | PERF-02 Add loading="lazy" everywhere | All 5 | ✅ |
| 10 | CONT-01 Curate testimonials per page | index, about, services | ✅ |
| 11 | CONT-02 Shorten homepage dark section | index.html | ✅ |
| 12 | CONT-03 Fix taxedo-tax alt text | index.html | ✅ |
| 13 | CONT-04 Rename images.png | Asset + index.html | ✅ |
| 14 | CONT-05 Rename Devconerns.png | Asset + index.html | ✅ |
| 15 | CONT-06 Footer "Outsourced Accounting" → for-firms | index.html, about.html | ✅ |
| 16 | LINK-01 Fix service card anchor links | index.html | ✅ |
| 17 | LINK-02 Fix contact nav CTA self-link | contact.html | ✅ |
| 18 | LINK-03 Change btn--ghost → btn--ghost-light | services.html, for-firms.html | ✅ |
| 19 | STRUCT-01 Add reveal to CPA firm cards | services.html | ✅ |
| 20 | STRUCT-02 Break consecutive soft sections | index.html | ✅ |
| 21 | STRUCT-03 Remove dead JS handler | main.js | ✅ |
| 22 | A11Y-01 Fix star rating accessibility | All pages with testimonials | ✅ |
| 23 | A11Y-02 Add aria-live to slider | All pages with slider | ✅ |
| 24 | A11Y-03 Add aria-hidden to hamburger spans | All 5 pages | ✅ |
| 25 | SEO-01 Add OG + Twitter meta tags | All 5 pages | ✅ (no image yet) |
| 26 | SEO-02 Add JSON-LD schema | All 5 pages | ✅ |
| 27 | SEO-03 Create robots.txt | website/ | ✅ |
| 28 | SEO-03 Create sitemap.xml | website/ | ✅ |
| 29 | SEO-04 Add canonical link tags | All 5 pages | ✅ |
| 30 | VIS-01 Add photo-placeholder--tall class | styles.css + about.html | ✅ |
| 31 | VIS-02 Extract inline styles to CSS classes | styles.css + all pages | ✅ |
| 32 | VIS-04 Fix split CSS overflow | styles.css | ✅ |
| 33 | VIS-05 Fix counter animation flash | index.html, about.html, for-firms.html | ✅ |
| 34 | TECH-03 Remove unused CSS | styles.css | ✅ |
| 35 | LINK-02 Add id="contact-form" to form | contact.html | ✅ |

---

*Combined from Claude_audit_report.md and OMP_AUDIT_REPORT.md. OMP takes precedence on contradictions. Last updated: June 27, 2026.*
