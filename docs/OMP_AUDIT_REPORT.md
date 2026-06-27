# NEK Services Website — Complete OMP Audit Report

**Date:** 2026-06-26 (Updated with `for-firms.html` audit)
**Auditor:** OMP Agent (Claude Sonnet 4.6)
**Pages audited:** `index.html`, `about.html`, `services.html`, `contact.html`, `for-firms.html`
**Assets audited:** `assets/css/styles.css` (2,087 lines), `assets/js/main.js`, all linked images
**Working directory:** `E:/Coding/NEK Services Website Codex/website/`

---

## HOW TO USE THIS REPORT

This report is a complete audit of the NEK Services static website. It is structured for direct implementation by any coding agent or model. Each issue includes:
- Severity level
- Exact file and line reference
- Clear description of the problem
- Specific recommendation for the fix

Implement issues in priority order (Critical first, then High, Medium, Low). Do NOT change anything not listed in this report without explicit user approval. The site uses plain HTML, one CSS file (`assets/css/styles.css`), and one JS file (`assets/js/main.js`) — no framework, no build system.

---

## SEVERITY KEY

| Symbol | Meaning |
|--------|---------|
| CRITICAL | Breaks functionality or is visibly embarrassing/damaging to visitors |
| HIGH | Degrades UX significantly, conversion rate, or trust |
| MEDIUM | Noticeable quality issue; should be fixed before launch |
| LOW | Polish / best practice; fix when time allows |

---

## SECTION 1 — CONTENT ISSUES

### [C-01] CRITICAL — Developer Watermark Visible to Live Visitors

**Files:**
- `website/index.html` line 296
- `website/about.html` line 93

**Problem:**
Both pages contain a `<div class="photo-placeholder__watermark">📷 REPLACE WITH PROFESSIONAL PHOTO</div>` overlay rendered inside the live DOM. Any visitor to the site sees this text on top of the founder photo.

**Fix:**
Remove both `<div class="photo-placeholder__watermark">…</div>` elements entirely.
The professional standing photo (`assets/img/founder/muhammad-ilyas-standing-1-cutout.png`) already exists and is used in the homepage hero. The dark section on `index.html` (line 286) and the Founder Story section on `about.html` (line 92) should use either that image or `assets/img/founder/muhammad-ilyas.jpg` without the watermark wrapper.

Also remove the HTML comment on `index.html` line 140:
```html
<!-- TODO: Add service photography when available -->
```

---

### [C-02] HIGH — Testimonials Duplicated Identically Across Pages

**Files:**
- `website/index.html` testimonials section (~lines 323–385)
- `website/about.html` testimonials section (~lines 195–257)
- `website/services.html` testimonials section (~lines 238–300)
- `website/for-firms.html` testimonials section (~lines 226–288) — partially improved

**Problem:**
All 5 testimonials (Marshea Mayfield, Courtney Arrington, Carl Cyrius, Dr. Cozette M. White, Sam Mabry) appear in the same order on index, about, and services. A visitor navigating between pages sees the same quotes repeated, undermining credibility.

Note: `for-firms.html` has improved curation — it leads with firm-specific testimonials (Courtney Arrington doubled revenue, Dr. Cozette 227% growth, Marshea Mayfield firm growth) which is the right approach and should serve as the model for other pages.

**Fix:**
Curate different subsets per page. Suggested distribution:
- `index.html`: Show Dr. Cozette (227% revenue), Courtney Arrington (doubled revenue, quit 9–5), Sam Mabry (game-changer)
- `about.html`: Show Marshea Mayfield (firm growth/scalability), Carl Cyrius (professionalism/timeliness)
- `services.html`: Show all 5 or a mix weighted toward firm/outsourcing clients
- `for-firms.html`: Keep current selection — it is already well-curated for this audience

---

### [C-03] MEDIUM — Alt Text Mismatch on Trust Bar Logo

**File:** `website/index.html` line 72

**Problem:**
```html
<div class="marquee-logo"><img src="assets/img/clients/taxedo-tax.png" alt="Mysherri Rhodes"></div>
```
`alt="Mysherri Rhodes"` is a person's name, not a brand name. For logos, alt text should describe the brand.

**Fix:**
Change to `alt="Taxedo Tax"`.
Also update the duplicate (aria-hidden) entry on line 84.

---

### [C-04] MEDIUM — Generic Filename `images.png` for Client Logo

**File:** `website/assets/img/clients/images.png` (referenced in `index.html` lines 77 and 89)

**Problem:**
The filename `images.png` is entirely generic. On case-sensitive Linux/Unix servers (most web hosting), a rename would silently break the image. The alt text correctly says "Royal Financial Services" but the filename gives no clue.

**Fix:**
1. Rename `assets/img/clients/images.png` → `assets/img/clients/royal-financial-services.png`
2. Update both references in `index.html`:
   - Line 77: `src="assets/img/clients/images.png"` → `src="assets/img/clients/royal-financial-services.png"`
   - Line 89 (aria-hidden duplicate): same change

---

### [C-05] MEDIUM — Filename Typo: `Devconerns.png`

**File:** `website/assets/img/clients/Devconerns.png` (referenced in `index.html` lines 78 and 90)

**Problem:**
The filename is `Devconerns.png` but the brand is "DevConcerns". On Linux servers this typo would cause a 404.

**Fix:**
1. Rename the file to `devconcerns.png`
2. Update `index.html` line 78: `src="assets/img/clients/Devconerns.png"` → `src="assets/img/clients/devconcerns.png"`
3. Update line 90 (aria-hidden duplicate): same change

---

### [C-06] MEDIUM — Homepage About Section and About Page Are Near-Identical

**Files:**
- `website/index.html` lines 267–318 ("The NEK Difference" dark section)
- `website/about.html` lines 102–148 ("The NEK Difference" dark section)

**Problem:**
The two sections share almost identical copy: same bullet list, same guarantee text, same NDA note, same founder signature. Reads as a copy-paste rather than intentional.

**Fix:**
Shorten the homepage version to a punchy 3–4 bullet summary and one-line guarantee. Let the about page version carry the fuller story. The homepage version does not need the `founder-sig` block — that detail belongs on the About page only.

---

### [C-07] LOW — Footer "Outsourced Accounting" Link Does Not Anchor

**Files:**
- `website/index.html` footer line 421: `<a href="services.html">Outsourced Accounting</a>`
- `website/about.html` footer line 293: `<a href="services.html">Outsourced Accounting</a>`

**Problem:**
Both link to the top of `services.html`, not to the outsourcing section. The section has `id="outsourcing"` on `services.html` line 146. Now that `for-firms.html` exists, these footer links should also be updated to point to the dedicated page.

**Fix:**
Change both links to `href="for-firms.html"` — the dedicated page is the better destination now that it exists.

---

## SECTION 2 — LINKS & BUTTONS

### [L-01] CRITICAL — Contact Form Uses `mailto:` Action — Broken for Most Users

**File:** `website/contact.html` line 68

**Problem:**
```html
<form class="form" action="mailto:hello@nekservices.com" method="post" enctype="text/plain">
```
This action opens the user's local email client (Outlook, Apple Mail, etc.) with the form content pre-filled as raw text. It:
- Fails silently for users with no local email client configured (most browser-only and mobile webmail users)
- Loses field structure — `enctype="text/plain"` dumps raw name=value text into the email body
- Does not work reliably on mobile browsers

**Fix:**
Replace the `mailto:` form action with a real form submission backend. Recommended options (no backend server required):
- **Formspree** (free tier): `action="https://formspree.io/f/YOUR_FORM_ID" method="POST"`
- **EmailJS**: JavaScript-based, no server needed
- **Netlify Forms**: add `netlify` attribute if hosted on Netlify

Also note: The `[data-provider-ready]` handler in `main.js` (lines 63–73) is dead code — it intercepts forms with `action="#"` but the contact form does not have that attribute. Remove this handler or repurpose it once a real provider is connected.

---

### [L-02] HIGH — "Book a Free Call" Nav Button Self-Links on Contact Page

**File:** `website/contact.html` line 29

**Problem:**
```html
<a class="btn btn--primary" href="contact.html">Book a Free Call</a>
```
On the contact page, this button links to `contact.html` — the current page. Clicking it re-navigates to the same page, which is disorienting.

**Fix:**
Add `id="contact-form"` to the `<form>` element (line 68), then change the nav CTA on `contact.html` only:
```html
<a class="btn btn--primary" href="#contact-form">Book a Free Call</a>
```

---

### [L-03] HIGH — Homepage Hero Has No "Book a Free Call" CTA

**File:** `website/index.html` lines 45–47

**Problem:**
The homepage hero has only one CTA button:
```html
<a class="btn btn--arrow" href="services.html"><span>Our Services</span></a>
```
Every other page hero has a primary CTA pointing to `contact.html`. The homepage hero — the highest-visibility spot on the site — has none.

**Fix:**
Add a "Book a Free 30-Min Call" primary button to the hero actions:
```html
<div class="hero__actions">
  <a class="btn btn--arrow" href="contact.html"><span>Book a Free 30-Min Call</span></a>
  <a class="btn btn--ghost" href="services.html">Our Services</a>
</div>
```

---

### [L-04] MEDIUM — Homepage Service Cards "Learn More" Links Don't Anchor

**File:** `website/index.html` lines 150, 160, 170

**Problem:**
All three service cards link to `services.html` without anchors:
```html
<a class="card-link" href="services.html">Learn more</a>
```
The services page has correct anchor IDs: `#bookkeeping`, `#cleanup`, `#reporting`.

**Fix:**
- Line 150 (Monthly Bookkeeping): change to `href="services.html#bookkeeping"`
- Line 160 (Accounting Cleanup): change to `href="services.html#cleanup"`
- Line 170 (Financial Reporting): change to `href="services.html#reporting"`

---

### [L-05] MEDIUM — `btn--ghost` on Hero Pages Needs Contrast Check

**Files:**
- `website/services.html` line 47: `<a class="btn btn--ghost" href="#outsourcing">For CPA Firms</a>`
- `website/for-firms.html` line 47: `<a class="btn btn--ghost" href="services.html">All Services</a>`

**Problem:**
The `btn--ghost` style uses `border: 2px solid var(--blue)` and `color: var(--blue)`. Both page heroes have a dark gradient overlay. The blue-on-dark contrast may not meet WCAG AA (4.5:1).

**Fix:**
Open both pages in a browser and inspect the buttons. If the blue border/text is not clearly legible on the dark hero, change the class to `btn--ghost-light` on both pages (line 47 in each file). `btn--ghost-light` uses white border and text, which contrasts correctly on dark backgrounds.

---

### [L-06] CRITICAL — `for-firms.html` Footer Anchor Links Point to Non-Existent IDs

**File:** `website/for-firms.html` lines 361–363

**Problem:**
The footer on `for-firms.html` has these anchor links:
```html
<li><a href="for-firms.html#bookkeeping-production">Bookkeeping Production</a></li>
<li><a href="for-firms.html#tax-prep">Tax Prep Support</a></li>
<li><a href="for-firms.html#full-engagement">Full Engagements</a></li>
```
None of the service cards on `for-firms.html` have these `id` attributes. The cards at lines 134, 145, and 156 are plain `<article class="card reveal">` with no `id`. Clicking these footer links silently scrolls to the top of the page — the anchors resolve to nothing.

**Fix:**
Add the matching `id` attributes to the three service cards:
- Line 134: `<article class="card reveal" id="bookkeeping-production">`
- Line 145: `<article class="card reveal" id="tax-prep">`
- Line 156: `<article class="card reveal" id="full-engagement">`

---

### [L-07] HIGH — `for-firms.html` Is Not Linked from Any Other Page's Navigation

**Files:** `index.html`, `about.html`, `services.html`, `contact.html` — all nav elements

**Problem:**
`for-firms.html` exists but is completely invisible in the site navigation. The only way to reach it is:
- A direct URL (if someone knows it)
- The `services.html#outsourcing` section which links to `#outsourcing` (a section on services.html, not to `for-firms.html`)

The page is effectively orphaned — search engines and visitors have no way to discover it through normal navigation.

**Fix (two changes required):**

**1. Add `for-firms.html` to the main navigation on all five pages.**
Current nav items: Home · About · Services · Contact
Recommended updated nav: Home · About · Services · For Firms · Contact

Add this `<li>` to the `<ul class="nav__links">` on all five pages (index, about, services, contact, for-firms):
```html
<li><a href="for-firms.html">For Firms</a></li>
```
Place it between Services and Contact.

**2. Update `for-firms.html` nav `aria-current`.**
Currently (line 25), `for-firms.html` has `aria-current="page"` incorrectly set on the Services link:
```html
<li><a href="services.html" aria-current="page">Services</a></li>
```
Once "For Firms" is added to the nav, the active indicator on `for-firms.html` must point to the For Firms link:
```html
<li><a href="for-firms.html" aria-current="page">For Firms</a></li>
```

---

### [L-08] HIGH — Other Pages' Footers Do Not Reference `for-firms.html`

**Files:** `index.html`, `about.html`, `contact.html` footers

**Problem:**
The footer on `for-firms.html` correctly has a dedicated "For Firms" column. But the footers on `index.html`, `about.html`, and `contact.html` have a generic "Services" column that lists `services.html` links only. The "For Firms" page is unlinked from their footers.

Note: `services.html` has its own footer with anchor links to service sections — it should also get a link to `for-firms.html`.

**Fix:**
In the "Services" footer column on `index.html`, `about.html`, and `contact.html`, add:
```html
<li><a href="for-firms.html">For CPA Firms</a></li>
```
In the `services.html` footer, add:
```html
<li><a href="for-firms.html">For CPA Firms</a></li>
```

---

### [L-09] LOW — WhatsApp Number Needs Human Verification

**File:** All pages, footer and contact.html

**Problem:**
The WhatsApp link `https://wa.me/923344721225` appears on all pages. No tool can verify this number is correct and active.

**Action Required:**
Confirm with Muhammad Ilyas that `+92 334 472 1225` is the correct active WhatsApp number.

---

## SECTION 3 — STRUCTURAL ISSUES

### [S-01] MEDIUM — Three CPA Firm Cards Missing `reveal` Class

**File:** `website/services.html` lines 165, 174, 183

**Problem:**
The three cards in the "For CPA Firms" right column lack the `reveal` CSS class that every other card in the site has. They appear immediately on page load without the scroll-in fade animation, creating an inconsistent experience.

Affected cards:
- Line 165: `<article class="card">` (Bookkeeping Production)
- Line 174: `<article class="card">` (Tax Preparation Support)
- Line 183: `<article class="card">` (Full Engagement Support)

**Fix:**
Add `reveal` class to all three:
```html
<article class="card reveal">
```

---

### [S-02] MEDIUM — Inline Styles Scattered Throughout All Pages

**Problem:**
30+ inline `style` attributes appear across the five HTML files. Examples from existing pages:
- `about.html` line 66: `style="color:var(--muted);font-size:14px;margin:10px 0 0;"`
- `index.html` line 173: `style="justify-content:center; margin-top:44px;"`
- `contact.html` line 48: `style="font-weight:700;color:var(--ink);margin:6px 0 16px;font-size:15px;"`

Additional examples from `for-firms.html`:
- Line 101: `style="margin-top:20px;"` on a `<ul>`
- Line 111: `style="color:var(--muted);font-size:14px;margin:10px 0 0;"` on a `<p>` (identical to about.html line 66 — should be a shared class)
- Line 112: `style="margin-top:16px;"` on a `<ul>`
- Lines 142, 153, 164: `style="color:var(--muted);font-size:13px;margin-top:10px;"` repeated identically on 3 consecutive cards — this is a clear candidate for a CSS class

These increase specificity, resist theming, and violate the project's single-CSS-file pattern.

**Fix:**
Extract repeated patterns into named classes in `styles.css`. The pattern `color:var(--muted);font-size:13px;margin-top:10px;` appearing 3 times in `for-firms.html` alone should become `.card__meta` or similar. Acceptable to leave one-off layout nudges, but typography overrides should be classes.

---

### [S-03] MEDIUM — Two Consecutive `section--soft` Sections on Homepage

**File:** `website/index.html` lines 182 and 230

**Problem:**
The Software section (line 182) and the How It Works section (line 230) both use `class="section section--soft"` (background `#f7f7f7`). They render back-to-back with identical backgrounds, making them feel like one continuous undifferentiated block.

**Fix:**
Change one of the two to break the monotony. Recommendation: change the How It Works section to plain `class="section"` (white background), or change Software to `class="section section--tint"`.

---

### [S-04] MEDIUM — Missing `id` on Contact Form for Scroll Targeting

**File:** `website/contact.html` line 68

**Problem:**
The `<form>` element has no `id`, so no button or link can scroll directly to the form.

**Fix:**
Add `id="contact-form"` to the form opening tag:
```html
<form id="contact-form" class="form" …>
```
This enables the fix described in [L-02].

---

### [S-05] MEDIUM — Dead JavaScript: `[data-provider-ready]` Handler

**File:** `website/assets/js/main.js` lines 63–73

**Problem:**
```js
document.querySelectorAll("[data-provider-ready]").forEach((form) => { … });
```
No form on any page has the `data-provider-ready` attribute. This code never executes. It is dead code.

**Fix:**
Remove lines 63–73 from `main.js`. Re-add when a real form provider is integrated.

---

### [S-06] LOW — `sw-row--5` Contains 10 Items (Class Name Misleading)

**File:** `website/index.html` line 209

**Problem:**
The Business Platforms row uses `class="sw-row sw-row--5"` but contains 10 `<div class="sw-tile">` children. The CSS defines `sw-row--5 { grid-template-columns: repeat(5, 1fr); }` — so 10 items auto-wrap into 2 rows of 5. This works visually but the class name is misleading.

**Fix (optional):**
Rename the class to `sw-row--5col` in both the HTML and CSS to make the intent (5 columns, any number of rows) explicit.

---

### [S-07] LOW — `for-firms.html` Footer Structure Inconsistent With Other Pages

**File:** `website/for-firms.html` lines 357–365

**Problem:**
The footer on `for-firms.html` replaces the standard "Services" column with a "For Firms" column. While this makes sense for contextual relevance, it means users on this page have no footer shortcut to the main Services page or other services.

**Fix:**
Keep the "For Firms" column, but also retain a "Company" column that links to Services. The current "Company" column (lines 366–373) already exists — this is acceptable as-is. The "For Firms" footer column is a reasonable choice for this page. No change required unless the user prefers full consistency.

---

## SECTION 4 — VISUAL & STYLING

### [V-01] HIGH — Hero Founder Image is 1.5 MB (Destroys LCP)

**File:** `website/assets/img/founder/muhammad-ilyas-standing-1-cutout.png` (1.5 MB)
**Referenced in:** `website/index.html` line 54

**Problem:**
This is the Largest Contentful Paint (LCP) element — the first major visible content on page load. At 1.5 MB, it will cause a 3–8 second delay on average connections, which is a Core Web Vital failure.

**Fix:**
1. Re-export the cutout as WebP at ≤ 300 KB. Keep the PNG as fallback.
2. Use a `<picture>` element:
```html
<picture>
  <source srcset="assets/img/founder/muhammad-ilyas-standing-1-cutout.webp" type="image/webp">
  <img src="assets/img/founder/muhammad-ilyas-standing-1-cutout.png" alt="Muhammad Ilyas, Founder and CEO of NEK Services">
</picture>
```
3. Add a preload hint in `<head>` of `index.html`:
```html
<link rel="preload" as="image" href="assets/img/founder/muhammad-ilyas-standing-1-cutout.webp" type="image/webp">
```

---

### [V-02] HIGH — Testimonial Avatar Images Grossly Oversized

**Files in:** `website/assets/img/team/`

| File | Current Size | Display Size | Waste |
|------|-------------|--------------|-------|
| `cozette.png` | 359 KB | ~48×48 px | ~99% |
| `courtney-arrington.png` | 324 KB | ~48×48 px | ~99% |
| `team-collage.png` | 369 KB | not used in testimonials | — |
| `carl-cyrius.png` | 204 KB | ~48×48 px | ~98% |
| `samantha-mabry.png` | 190 KB | ~48×48 px | ~98% |
| `marshea-mayfield.jpg` | 65 KB | ~48×48 px | ~96% |

These same oversized images are used on `for-firms.html` testimonials as well.

**Fix:**
Resize all testimonial avatar images to 96×96 px (2× for retina), convert to WebP. Target: ≤ 15 KB each. Keep originals as fallback PNG/JPG inside `<picture>` elements.

---

### [V-03] HIGH — Client/Software Logos Oversized

**Files:** `assets/img/clients/aplus-tax-white.png` (325 KB), `assets/img/software/excel-official.png` (119 KB)

**Fix:**
Re-export all client logos and software logos at their display size (typically 80–120 px height) and convert to WebP. Target: ≤ 30 KB each.

---

### [V-04] HIGH — No `loading="lazy"` on Below-Fold Images

**Files:** All five HTML pages

**Problem:**
No images use `loading="lazy"`. All images — including testimonial avatars, software logos, client logos, and the founder photo in the dark section — are fetched eagerly, competing with the hero image for bandwidth on page load. This applies to `for-firms.html` as well (founder photo line 193, testimonial avatars lines 242, 251, 260, 269, 278).

**Fix:**
Add `loading="lazy"` to every image that is NOT in the first viewport (i.e., everything below the hero section). Examples:
```html
<!-- In trust bar -->
<img src="…" alt="…" loading="lazy">

<!-- In testimonials -->
<img src="…" alt="…" loading="lazy">

<!-- In dark section founder photo -->
<img src="…" alt="…" loading="lazy">
```
Do NOT add `loading="lazy"` to the hero image — it is above the fold and must load immediately.

---

### [V-05] MEDIUM — Testimonial Stars Not Accessible

**Files:** All pages with testimonial sliders, including `for-firms.html`

**Problem:**
Stars are rendered as raw Unicode characters:
```html
<div class="testimonial__stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
```
Screen readers announce these as "black star black star black star black star black star" rather than "5 out of 5 stars."

**Fix:**
```html
<div class="testimonial__stars" aria-label="5 out of 5 stars">
  <span aria-hidden="true">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
</div>
```
Apply this change to all testimonial cards across all five pages.

---

### [V-06] MEDIUM — Testimonial Slider Has No ARIA Live Region

**Files:** All pages with `[data-slider]`, including `for-firms.html` line 233

**Problem:**
When a user presses prev/next buttons, the slide content changes but no announcement is made to screen readers.

**Fix:**
Add `aria-live="polite"` to the slider viewport on all pages:
```html
<div class="slider__viewport" aria-live="polite">
```

---

### [V-07] MEDIUM — Hamburger Menu Spans Not Hidden from Assistive Tech

**Files:** All five pages, nav `<button>` element (line 19–21 on each page)

**Problem:**
```html
<button class="menu-toggle" … >
  <span></span><span></span><span></span>
</button>
```
The three empty `<span>` elements are decorative (hamburger lines) but not hidden from screen readers.

**Fix:**
```html
<button class="menu-toggle" … >
  <span aria-hidden="true"></span>
  <span aria-hidden="true"></span>
  <span aria-hidden="true"></span>
</button>
```
Apply to all five pages.

---

### [V-08] LOW — No `<picture>` / WebP Format Support Site-Wide

**Problem:**
The site serves only PNG and JPG. All modern browsers support WebP (25–35% smaller). No `<picture>` elements are used anywhere, including on `for-firms.html`.

**Fix:**
For each significant image, wrap in a `<picture>` with a WebP source:
```html
<picture>
  <source srcset="path/to/image.webp" type="image/webp">
  <img src="path/to/image.png" alt="…">
</picture>
```
Prioritize: hero image, testimonial avatars, client logos.

---

### [V-09] LOW — CSS Not Minified

**File:** `website/assets/css/styles.css` (2,087 lines, ~35 KB)

**Problem:**
The stylesheet is unminified source code. Minification would reduce file size by approximately 30–40%.

**Fix:**
For production, run the CSS through a minifier (e.g., `cssnano`, `clean-css`) and serve the minified version. Keep the source as `styles.source.css`. Or add a simple minification step if a build process is ever introduced.

---

## SECTION 5 — PAGE-BY-PAGE SECTIONS AUDIT

### 5.1 `index.html` (Homepage)

| # | Section | Status | Issue ID |
|---|---------|--------|----------|
| 1 | Header/Nav | MEDIUM | [L-07] — No link to for-firms.html in nav |
| 2 | Hero | HIGH | [L-03] — Missing primary "Book a Call" CTA |
| 3 | Trust Bar (Marquee) | ✅ Good | aria-hidden duplicates, pauses on hover |
| 4 | Pain Points | ✅ Good | Emotionally resonant, CTA and risk-reversal present |
| 5 | Services (3 cards) | MEDIUM | [L-04] — Card links don't anchor to service sections |
| 6 | Software Grid | LOW | [S-06] — Class name misleading; verify mobile orphan |
| 7 | How It Works | MEDIUM | [S-03] — Consecutive soft backgrounds with previous section |
| 8 | About + Stats | CRITICAL | [C-01] — Watermark overlay visible on photo |
| 9 | Testimonials | HIGH | [C-02] — Same 5 on all pages |
| 10 | Final CTA | ✅ Good | Two CTAs, reassurance text, location note |
| 11 | Footer | HIGH | [L-08] — No link to for-firms.html |

---

### 5.2 `about.html`

| # | Section | Status | Issue ID |
|---|---------|--------|----------|
| 1 | Header/Nav | MEDIUM | [L-07] — No link to for-firms.html in nav |
| 2 | Page Hero | ✅ Good | Strong headline, 400+ stat card |
| 3 | Who We Serve | ✅ Good | Clear dual audience explanation |
| 4 | Founder Story | CRITICAL | [C-01] — Watermark on photo |
| 5 | The NEK Difference (dark) | MEDIUM | [C-06] — Near-identical to homepage dark section |
| 6 | Credentials | ✅ Good | Three well-structured cards |
| 7 | Testimonials | HIGH | [C-02] — Same 5 on all pages |
| 8 | Final CTA | ✅ Good | |
| 9 | Footer | HIGH | [L-08] — No link to for-firms.html |

---

### 5.3 `services.html`

| # | Section | Status | Issue ID |
|---|---------|--------|----------|
| 1 | Header/Nav | MEDIUM | [L-07] — No link to for-firms.html in nav |
| 2 | Page Hero | MEDIUM | [L-05] — btn--ghost contrast on dark bg needs verification |
| 3 | Services (6 cards) | ✅ Good | All anchored, all CTAs go to contact.html |
| 4 | For CPA Firms | MEDIUM | [S-01] — 3 right-column cards missing reveal class |
| 5 | FAQ | ✅ Good | Native details/summary, 6 relevant questions |
| 6 | Testimonials | HIGH | [C-02] — Same 5 on all pages |
| 7 | Final CTA | ✅ Good | |
| 8 | Footer | HIGH | [L-08] — No link to for-firms.html |

---

### 5.4 `contact.html`

| # | Section | Status | Issue ID |
|---|---------|--------|----------|
| 1 | Header/Nav | MEDIUM | [L-07] — No link to for-firms.html in nav |
| 2 | Page Hero | ✅ Good | "24h" stat card compelling, confidentiality bullets right |
| 3 | Contact Form | CRITICAL | [L-01] — mailto: broken for most users |
| 4 | Contact Alternatives | ✅ Good | WhatsApp / Email / LinkedIn alternatives are strong |
| 5 | What Happens Next | ✅ Good | Clear 3-step process |
| 6 | Trust Strip | ✅ Good | Same-day, confidential, no-commitment |
| 7 | Footer | HIGH | [L-08] — No link to for-firms.html |
| Note | Nav CTA | HIGH | [L-02] — "Book a Free Call" button self-links on this page |

---

### 5.5 `for-firms.html` (New Page)

| # | Section | Status | Issue ID |
|---|---------|--------|----------|
| 1 | Header/Nav | CRITICAL | [L-07] — aria-current set on "Services" instead of "For Firms"; page not in nav |
| 2 | Page Hero | MEDIUM | [L-05] — btn--ghost contrast on dark bg needs verification |
| 3 | Pain Points (CPA-specific) | ✅ Excellent | Firm-specific, targeted, distinct from homepage pain points |
| 4 | How We Work | ✅ Good | Clear white-label / NDA positioning |
| 5 | Services for Firms (3 cards) | CRITICAL | [L-06] — Footer anchor links point to non-existent card IDs |
| 6 | Firm Commitment (dark) | ✅ Good | "No subcontracting" bullet is a strong, unique differentiator |
| 7 | Testimonials | ✅ Good | Best-curated testimonial set on the site — firm-focused |
| 8 | FAQ | ✅ Excellent | Firm-specific, answers real objections, direct and honest |
| 9 | Final CTA | ✅ Good | Headline ("More clients. Same team size.") is sharp and relevant |
| 10 | Footer | MEDIUM | [S-07] — Footer structure differs from other pages (acceptable but noted) |

---

## SECTION 6 — SEO

### [SEO-01] HIGH — No Open Graph or Twitter Card Meta Tags on Any Page

**Files:** `<head>` section of all five pages

**Problem:**
When any page is shared on LinkedIn, Twitter/X, WhatsApp, Facebook, or Slack, it renders as a blank preview with no title, description, or image. This includes `for-firms.html`, which is a high-value landing page for CPA firms that are likely to be shared among firm partners.

**Fix:**
Add to the `<head>` of every page (customized per page):
```html
<!-- Open Graph -->
<meta property="og:type" content="website">
<meta property="og:title" content="[Page-specific title]">
<meta property="og:description" content="[Page-specific description]">
<meta property="og:url" content="https://www.nekservices.com/[page].html">
<meta property="og:image" content="https://www.nekservices.com/assets/img/og-image.png">

<!-- Twitter / X -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="[Page-specific title]">
<meta name="twitter:description" content="[Page-specific description]">
<meta name="twitter:image" content="https://www.nekservices.com/assets/img/og-image.png">
```

Suggested per-page values for `for-firms.html`:
- `og:title`: "Outsourced Accounting for CPA & Bookkeeping Firms | NEK Services"
- `og:description`: "Scale your firm without scaling your headcount. Qualified bookkeeping production, tax prep support, and full engagement delivery — NDA on every engagement. NEK Services since 2012."

Also create a dedicated OG image (`og-image.png`) at 1200×630 px with the NEK logo and brand tagline.

---

### [SEO-02] HIGH — No Structured Data (JSON-LD Schema)

**Files:** All pages (add to `<head>` or before `</body>`)

**Problem:**
No `application/ld+json` schema is present. Search engines have no structured understanding of the business, its services, or its location. The `for-firms.html` page in particular would benefit from a `ProfessionalService` schema targeting accounting firms.

**Fix:**
Add at minimum an `Organization` schema on all pages. Example for `index.html`:
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "AccountingService",
  "name": "NEK Services",
  "description": "Monthly bookkeeping, accounting cleanup, financial reporting, and outsourced accounting for US businesses and CPA firms.",
  "url": "https://www.nekservices.com",
  "email": "hello@nekservices.com",
  "foundingDate": "2012",
  "founder": {
    "@type": "Person",
    "name": "Muhammad Ilyas"
  },
  "areaServed": "US",
  "sameAs": [
    "https://www.linkedin.com/company/nek-services/"
  ]
}
</script>
```

---

### [SEO-03] MEDIUM — No `robots.txt` or `sitemap.xml`

**Location:** `website/` root directory (neither file exists)

**Fix:**

Create `website/robots.txt`:
```
User-agent: *
Allow: /
Sitemap: https://www.nekservices.com/sitemap.xml
```

Create `website/sitemap.xml` — updated to include `for-firms.html`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://www.nekservices.com/</loc><priority>1.0</priority></url>
  <url><loc>https://www.nekservices.com/about.html</loc><priority>0.8</priority></url>
  <url><loc>https://www.nekservices.com/services.html</loc><priority>0.9</priority></url>
  <url><loc>https://www.nekservices.com/for-firms.html</loc><priority>0.9</priority></url>
  <url><loc>https://www.nekservices.com/contact.html</loc><priority>0.8</priority></url>
</urlset>
```
Update the domain once the real domain is confirmed.

---

### [SEO-04] MEDIUM — No Canonical Link Tags

**Files:** `<head>` of all five pages, including `for-firms.html`

**Problem:**
If the site is accessible at both `www.nekservices.com` and `nekservices.com`, duplicate content issues arise without canonical tags.

**Fix:**
Add to each page's `<head>`:
```html
<link rel="canonical" href="https://www.nekservices.com/[page].html">
```
For `for-firms.html`:
```html
<link rel="canonical" href="https://www.nekservices.com/for-firms.html">
```

---

## SECTION 7 — MOBILE RESPONSIVENESS

### [M-01] MEDIUM — Software Grid May Have Visual Orphan on Mobile

**File:** `website/assets/css/styles.css` lines 2083–2085

**Problem:**
At 640px, `sw-row--8` switches to `repeat(3, 1fr)`. QuickBooks has `grid-column: span 2`, so it occupies 2 of 3 columns on row 1. The remaining 6 tiles fill 2 more rows. This creates an uneven layout. Needs browser verification.

**Fix:**
Test in browser at 375px, 390px, and 414px viewport widths. If visually awkward, consider switching to `repeat(2, 1fr)` for `sw-row--8` at 640px and removing the `span 2` on mobile.

---

### [M-02] LOW — Hero Cutout Image May Collide with Text on Small Screens

**File:** `website/assets/css/styles.css` lines 1974–1979

**Problem:**
At 640px, the hero cutout image is `width: 92%; height: 395px; bottom: 0`. If the headline wraps to 3+ lines on a narrow phone, the image and text blocks may visually overlap.

**Fix:**
Test on a real 375px-width device or Chrome DevTools mobile simulation. If overlap occurs, add `z-index` separation or reduce the image height at very small widths.

---

## PRIORITY ACTION LIST (ORDERED — ALL 5 PAGES)

Implement in this order:

| # | ID | Severity | Action | Page(s) |
|---|----|----------|--------|---------|
| 1 | C-01 | CRITICAL | Remove photo watermark overlays | index.html, about.html |
| 2 | L-01 | CRITICAL | Replace `mailto:` form with Formspree or equivalent | contact.html |
| 3 | L-06 | CRITICAL | Add missing `id` attributes to 3 service cards | for-firms.html |
| 4 | L-07 | HIGH | Add `for-firms.html` to nav on all 5 pages; fix aria-current on for-firms | All pages |
| 5 | V-01 | HIGH | Compress hero image from 1.5 MB to ≤ 300 KB WebP | index.html + asset |
| 6 | L-03 | HIGH | Add "Book a Free Call" primary CTA to homepage hero | index.html |
| 7 | L-08 | HIGH | Add for-firms.html link to footer of all other pages | index, about, services, contact |
| 8 | C-02 | HIGH | Differentiate testimonials across pages (for-firms.html already correct) | index, about, services |
| 9 | SEO-01 | HIGH | Add Open Graph + Twitter Card meta tags to all 5 pages | All pages |
| 10 | V-02 | HIGH | Resize and compress testimonial avatar images | Asset files |
| 11 | V-04 | HIGH | Add `loading="lazy"` to all below-fold images | All pages |
| 12 | L-02 | HIGH | Fix self-linking "Book a Free Call" nav button | contact.html |
| 13 | SEO-02 | HIGH | Add JSON-LD structured data schema | All pages |
| 14 | S-01 | MEDIUM | Add `reveal` class to 3 CPA firm cards | services.html |
| 15 | L-04 | MEDIUM | Fix homepage service card anchor links | index.html |
| 16 | L-05 | MEDIUM | Verify btn--ghost contrast on dark hero backgrounds | services.html, for-firms.html |
| 17 | C-03 | MEDIUM | Fix alt text on taxedo-tax.png | index.html |
| 18 | C-04 | MEDIUM | Rename images.png → royal-financial-services.png | Asset + index.html |
| 19 | C-05 | MEDIUM | Rename Devconerns.png → devconcerns.png | Asset + index.html |
| 20 | SEO-03 | MEDIUM | Create robots.txt and sitemap.xml (include for-firms.html) | website/ root |
| 21 | SEO-04 | MEDIUM | Add canonical link tags to all 5 pages | All pages |
| 22 | V-05 | MEDIUM | Fix testimonial star accessibility | All pages |
| 23 | V-06 | MEDIUM | Add aria-live to slider viewport | All pages |
| 24 | V-07 | MEDIUM | Add aria-hidden to hamburger spans | All pages |
| 25 | S-02 | MEDIUM | Extract repeated inline styles to CSS classes | All pages |
| 26 | S-03 | MEDIUM | Break consecutive section--soft sections on homepage | index.html |
| 27 | S-04 | MEDIUM | Add id="contact-form" to form element | contact.html |
| 28 | S-05 | MEDIUM | Remove dead [data-provider-ready] JS handler | main.js |
| 29 | C-07 | LOW | Update footer "Outsourced Accounting" links to for-firms.html | index.html, about.html |
| 30 | C-06 | MEDIUM | Differentiate homepage vs about page dark section copy | index.html, about.html |
| 31 | V-08 | LOW | Add WebP picture elements for major images | All pages |
| 32 | V-09 | LOW | Minify CSS for production | styles.css |
| 33 | M-01 | MEDIUM | Verify software grid mobile layout in browser | index.html |
| 34 | M-02 | LOW | Verify hero mobile layout at 375px | index.html |
| 35 | L-09 | LOW | Confirm WhatsApp number with Muhammad Ilyas | All pages |

---

## PROJECT CONSTRAINTS (DO NOT VIOLATE)

- Plain HTML only — no framework, no build system, no CDN dependency unless user approves
- Single CSS file: `website/assets/css/styles.css`
- Single JS file: `website/assets/js/main.js`
- Official palette: `#497acc`, `#84c2ff`, `#ebe9e9`, `#86ee99`, `#ffffff`
- Do not add new pages without user approval
- Do not change content copy beyond what is specified in this report
- Verify browser rendering after any visual change
- The fifth page `for-firms.html` is now a confirmed part of the site and must be treated as a first-class page in all nav, footer, sitemap, and SEO work

---

*Report generated by OMP Agent on 2026-06-26. Updated same day to include for-firms.html audit. Grounded entirely in direct source code and asset inspection — no inferences.*
