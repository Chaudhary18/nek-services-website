# NEK Services Homepage â€” Master Implementation Plan
**Goal:** Best accounting website in the world. Glue visitors. Convert to leads.
**Method:** Section by section. Review after each section before moving to next.
**Status:** âœ… ALL 13 PHASES COMPLETE. Homepage approved. See NEW_CODER_PROMPT.md for next steps.

---

## CONTEXT SUMMARY (read this if resuming after session break)

### What this website is
Static HTML/CSS/JS homepage for NEK Services â€” an offshore accounting and bookkeeping firm
based in Lahore, Pakistan, serving US businesses and CPA/bookkeeping firms. No framework,
no build step, no CDN. Files: `website/index.html` + `website/assets/css/styles.css`.

### What we have analysed (all captured in this file)
1. Visual design â€” layout, aesthetics, spacing, section rhythm, background colors
2. Typography â€” sizes, hierarchy, line height, line length, readability
3. Color combinations â€” contrast ratios, palette drift, accessibility failures
4. Content/copy â€” word-level, heading copy, CTA text, eyebrow labels
5. Alignment and placement â€” hero indent, centered vs left, lead width, card density
6. Conversion optimization â€” CTAs, trust signals, objection handling, risk reducers
7. Human psychology â€” visitor brain questions, trust barriers, offshore concern, anxiety reducers
8. Lead and sales impact â€” audience targeting, funnel flow, friction reduction
9. Visitor engagement â€” page length, scroll fatigue, visual variety, icons
10. Photo placement strategy â€” where photos are needed, placeholder approach
11. Gerow theme reference â€” what to adopt, what to ignore
12. Page length â€” currently ~5,800â€“6,400px, target ~4,200â€“4,600px

### Key decisions already made
- Service cards: reduce from 6 to 3 on homepage (Bookkeeping, Cleanup, Reporting)
- How It Works: redesign to open step-flow (no card boxes)
- Testimonials: move to dark navy background
- CTA: redesign to full-width dark section (not floating box)
- Services heading: left-align, CTA button on right of same row
- Icons: add to service cards (inline SVG)
- Photos: use founder photo as placeholder everywhere with watermark overlay
- Nav: add "Book a Free 30-Min Call" CTA button
- Carl Cyrius / Oasis Firm testimonial: KEEP as is (user decision)
- Hero design: LOCKED â€” no layout/visual changes, content only

### Already completed before implementation (do NOT redo)
- Hero lead text updated âœ…
- Slider buttons changed to â† â†’ âœ…
- Testimonial company logos added to all 5 cards âœ…
- CTA eyebrow symmetric dashes (CSS added) âœ…
- About opening paragraph rewritten âœ…
- Step 2 body text rewritten (user-focused) âœ…
- Software group 2 label updated âœ…
- CTA H2 rewritten âœ…
- Footer: WhatsApp + email + LinkedIn âœ…
- `text-wrap: pretty` added to h1/h2/h3 âœ… â€” verify it is working visually after Phase 1
- Services H2 changed from "Full-stack" to "Complete" âœ…
- Testimonial H2 changed from "Don't take our word for it" âœ…

### Open decisions (ask user when reached)
1. Software section position â€” move up between Services and How It Works, or keep at end?
2. "ACCOUNTING MADE CLEARER" tagline â€” keep or remove from nav/footer?
3. Trust bar dark chip logos â€” remove `.marquee-logo--dark` pill entirely, or keep for genuinely dark logos?
4. Testimonial person row â€” remove company name text to free space, OR fix wrapping with CSS?
5. Eyebrow green (#45b85d) contrast on light backgrounds fails WCAG AA â€” accept as brand choice or darken?

### Deliberately NOT implementing (from Gerow analysis â€” do not revisit)
- Team section with member cards â€” NEK does not have enough team photos yet
- Blog / news section â€” no blog exists
- Pricing table â€” accounting services are custom-quoted, not fixed-price
- Progress bars (Consulting 85%, Investment 76%) â€” arbitrary, not appropriate for accounting
- "Request a call back" form on homepage â€” too much friction for cold visitors
- Portfolio / completed projects section â€” client privacy concern in accounting
- Mini service icon strip immediately below hero â€” trust bar serves this position better for NEK

---

## PHASE 1 â€” GLOBAL CSS FIXES
*These affect the whole page. Do first before any section work.*

### Spacing
- [ ] Section padding: `82px` â†’ `66px` (saves ~250px of excess vertical space)
- [ ] Card padding: `30px` â†’ `24px` (tighter, more modern)
- [ ] Software tile min-height: `72px` â†’ `56px`
- [ ] `.marquee-logo img` height: `72px` â†’ `48px` (trust bar logo height standardization)
- [ ] `.marquee-logo--sq img` height/width: `76px` â†’ `48px`

### Typography
- [ ] Lead text size: `16px` â†’ `17px` (distinguish from body)
- [ ] Lead text color: `#000` â†’ `#102033` (softer, consistent with body)
- [ ] Lead max-width (centered sections): `570px` â†’ `480px` (better line length ~70 chars)
- [ ] H3 size: `20px` â†’ `22px` (tighten the gap from H2 at 42px)
- [ ] H2 line-height: `1.08` â†’ `1.12` (breathing room on 3-line headings)
- [ ] How It Works card body text: add `text-align: left` override (currently centered via `.card--center`)
- [ ] About section body: add `max-width: 580px` to `.about-grid > div:first-child p` (prevent 110-char lines)
- [ ] Footer h3: override size to `16px` bold (currently inherits 22px â€” too large for footer)

### Colors â€” Contrast Fixes (CRITICAL)
- [ ] Checklist in dark section: `.checks li { color: #32455c }` â†’ `color: #dce8f5`
  - REASON: #32455c on dark navy = 1.8:1 contrast ratio. WCAG requires 4.5:1. Items are invisible.
- [ ] Lead text: `#000` â†’ `#102033` (see typography above â€” same fix)

### Colors â€” Palette Cleanup
- [ ] Remove teal radial gradient from `.cta`:
  - Remove: `radial-gradient(circle at 85% 25%, rgba(98, 201, 119, 0.36), transparent 28%),`
  - Keep: `linear-gradient(135deg, var(--blue-dark), #11263f)` only
  - REASON: Teal appears nowhere else on page â€” palette inconsistency
- [ ] Replace undeclared `#6a9cd4` in `.svc-num` gradient with `var(--sky)` (#84c2ff)
  - Affects: `.svc-num { background: linear-gradient(135deg, var(--blue), #6a9cd4) }`
  - Also affects: `.service-item__icon` if present
- [ ] Service card body text: currently `var(--ink)` â€” change to `var(--muted)` to match pain cards
  - REASON: Pain cards use muted grey body text (reads lighter, more elegant). Service cards use near-black (heavy, dense). Standardize.

### New CSS Classes Needed
- [ ] Add `.btn--ghost-light` class:
  ```css
  .btn--ghost-light {
    color: #fff;
    background: transparent;
    border: 2px solid rgba(255,255,255,0.5);
  }
  .btn--ghost-light:hover,
  .btn--ghost-light:focus {
    background: rgba(255,255,255,0.12);
    border-color: #fff;
  }
  ```
  Used for secondary buttons on dark backgrounds (CTA section)

### Dead CSS to Remove (cleanup)
- [ ] `.sw-section { width: min(100% - 40px, 1440px) }` â€” 1440px value is dead (inside 1180px container). Simplify to `width: 100%`
- [ ] `.pain-card__bar` class exists in CSS but the HTML div was never added. Decision: remove the CSS (left border accent is sufficient).
- [ ] `.section--pain` class defined in CSS but HTML uses `.section--tint`. Remove `.section--pain` if unused.
- [ ] `.topbar` and `.topbar__inner` and `.topbar__items` CSS exists but no topbar HTML exists on any page. Remove all topbar CSS.
- [ ] Several `.logos`, `.logo-tile`, `.logo-tile--text`, `.logos--systems` classes exist but are unused. Remove.

### Verify After Phase 1
- [ ] `text-wrap: pretty` on headings â€” confirm no pyramid shapes and no single-word orphans visible in browser
- [ ] "LET'S TALK" button in pain section â€” appeared fully green in screenshot (possible hover capture or CSS issue). Verify it renders correctly as blue pill with green circle, not fully green. Fix if needed.
- [ ] Check two consecutive dark sections (About â†’ Testimonials both dark navy after Phase 9) â€” they must not visually merge into one section. Add visual separator if needed. See note in Phase 9.

---

## PHASE 2 â€” HEADER / NAV
- [ ] Add "Book a Free 30-Min Call" CTA button to the right of nav links
  - HTML: add `<div class="nav__actions"><a class="btn btn--primary" href="contact.html">Book a Free Call</a></div>` after `</ul>`
  - CSS already has `.nav__actions .btn { display: none }` at â‰¤980px â€” mobile handled
- [ ] Apply to ALL four pages: index.html, about.html, services.html, contact.html
- [ ] "ACCOUNTING MADE CLEARER" tagline â€” ASK USER (open decision #2)

---

## PHASE 3 â€” HERO
**DESIGN LOCKED â€” no layout or visual changes.**

### Notes (cannot fix, for awareness)
- Hero text column has 120px left indent (`--hero-copy-shift-x: 120px`) â€” does not align with
  content below it. This is intentional to the locked design. Cannot address.
- H1 breaks across 4 lines at 60px â€” comma rhythm creates stacked list feel.
  Cannot change without unlocking hero.
- Lead text: already updated âœ…
- No further changes.

---

## PHASE 4 â€” TRUST BAR
- [ ] Standardize all logo heights to `48px` (reduce from 72/76px in Phase 1 âœ…)
- [ ] Ask user about dark chip treatment (open decision #3) before removing `.marquee-logo--dark`
- [ ] "TRUSTED BY" label: increase `11px` â†’ `13px`
- [ ] Trust bar overall: consider if marquee is better replaced with static 5-logo row (like Gerow)
  â€” ask user preference before changing animation

### Photo/visual note
- No photos in trust bar â€” logos only. No change needed.

---

## PHASE 5 â€” PAIN SECTION

### Visual
- [ ] Pain section background: currently `.section--tint` â€” keep (subtle blue-green gradient is appropriate)
- [ ] Pain cards: keep 3 cards, keep left blue border accent âœ…
- [ ] Pain card body text: already `var(--muted)` âœ…

### Content
- [ ] Eyebrow: keep "SOUND FAMILIAR?" âœ…
- [ ] H2: keep "Most business owners spend way too much time worrying about their books." âœ…
- [ ] Lead: keep "If any of these sound like you, we should talk." âœ…
- [ ] Pain card H3 copy: all three are strong, keep âœ…
- [ ] Pain card body copy: all three are strong, keep âœ…

### Bottom CTA Row â€” REDESIGN
Currently: small muted text beside large green button. Weight mismatch â€” text is invisible.
- [ ] Place "We've solved all three for 200+ clients." ABOVE the button (not beside it)
- [ ] Style that line: `font-size: 15px; font-weight: 800; color: var(--ink);` (not muted)
- [ ] Change button text: "LET'S TALK" â†’ "Book a Free 30-Min Call"
- [ ] Add risk reducer beneath button: small text "No commitment. Free first call."

### Psychology/conversion
- Pain section is the strongest emotional moment on the page.
- The 200+ clients line is powerful social proof â€” it must be VISIBLE (see above fix).
- The CTA here targets visitors who are immediately ready. Keep it friction-low.

---

## PHASE 6 â€” SERVICES SECTION

### Layout â€” Major Change
- [ ] Remove `section__head--center` class from services section head â€” LEFT-ALIGN the heading
- [ ] Restructure heading row: H2 left + "View All Services" pill button RIGHT (same flex row)
  ```html
  <div class="section__head section__head--split">
    <div>
      <p class="eyebrow">How we help</p>
      <h2>Complete accounting support, done for you.</h2>
    </div>
    <a class="btn btn--arrow" href="services.html"><span>View All Services</span></a>
  </div>
  ```
- [ ] Add `.section__head--split { display: flex; align-items: flex-end; justify-content: space-between; gap: 32px; }`
- [ ] Remove the standalone "View All Services" button at the bottom of the section

### Cards â€” Reduce from 6 to 3
- [ ] Keep on homepage: Monthly Bookkeeping (01), Accounting Cleanup (02), Financial Reporting (03)
- [ ] Remove from homepage: Bank Reconciliations (04), Tax-Ready Records (05), Budgeting & Cash Flow (06)
  â€” These remain on services.html
- [ ] Update the grid to `grid--3` with only 3 cards (already 3-col, just fewer items)

### Icons â€” Add to Each Card
Add inline SVG icon above each `.svc-num` badge. Use simple single-colour line icons.
- [ ] Monthly Bookkeeping: open book / ledger icon
- [ ] Accounting Cleanup: refresh/cycle arrows icon
- [ ] Financial Reporting: bar chart icon
- [ ] Icon size: 32px Ã— 32px, color `var(--blue)`, margin-bottom 12px
- [ ] Add CSS: `.svc-icon { width: 32px; height: 32px; color: var(--blue); margin-bottom: 12px; }`

### Content
- [ ] Eyebrow: "WHAT WE DO" â†’ "HOW WE HELP"
- [ ] H2: keep "Complete accounting support, done for you." âœ…
- [ ] Lead: keep âœ…
- [ ] "Learn more â†’" link: `13px` â†’ `14px`, slightly more visible

### Photo/visual note
- No photos in services section currently. Future: replace text cards with image cards (like Gerow).
- For now: icons are the visual upgrade. Photo cards are Phase 2 of the project.
- PLACEHOLDER NOTE: When photography is ready, each service card gets a background photo.
  Mark with a comment `<!-- TODO: Add service photography when available -->`

---

## PHASE 7 â€” HOW IT WORKS

### Layout â€” Major Redesign
Replace bordered card boxes with open connected step-flow.

- [ ] Remove `.card` class from all 3 step articles
- [ ] Remove `.grid.grid--3` wrapper â€” replace with `.steps-flow` div
- [ ] Add CSS for step flow:
  ```css
  .steps-flow {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0;
    position: relative;
  }
  .step {
    padding: 0 32px;
    text-align: left;
  }
  .step + .step {
    border-left: 1px dashed var(--line);
  }
  ```
- [ ] Step numbers: keep `.step-num` circles (blue 1 & 2, green 3) â€” no change to style
- [ ] Add micro-label "Result" beneath step 3 number circle:
  ```html
  <div class="step-num step-num--green">3</div>
  <span class="step-result-label">Result</span>
  ```
  CSS: `.step-result-label { font-size: 11px; font-weight: 700; color: var(--green-dark); text-transform: uppercase; letter-spacing: 0.08em; display: block; text-align: center; margin-top: 4px; margin-bottom: 16px; }`
- [ ] Body text: LEFT-ALIGN (override the centered alignment from removed `.card--center`)

### Content
- [ ] Eyebrow: keep "SIMPLE TO START" âœ…
- [ ] H2: keep "Clean books in 3 steps." âœ…
- [ ] Lead: keep âœ…
- [ ] Step H3 copy: all three strong âœ…
- [ ] Step body copy: Step 2 already fixed âœ…

### CTA Below
- [ ] Button: change "GET STARTED TODAY" â†’ "Book a Free 30-Min Call"
- [ ] ADD "what happens next" line beneath button:
  - `<p class="steps-followup">Within 24 hours of booking, Muhammad Ilyas will personally reach out to discuss your books and next steps.</p>`
  - CSS: `.steps-followup { font-size: 14px; color: var(--muted); margin-top: 12px; text-align: center; }`
- [ ] Add risk reducer: "No contracts. No commitment. Free first call." beneath that

---

## PHASE 8 â€” ABOUT SECTION (DARK)

### Content
- [ ] Eyebrow: "WHY CHOOSE NEK?" â†’ "THE NEK DIFFERENCE"
- [ ] H2: keep "13 years. 200 clients. Zero shortcuts." âœ…
- [ ] Opening paragraph: already updated âœ…
- [ ] Second paragraph: keep âœ…

### Checklist â€” Fix Contrast AND Copy
- [ ] Fix contrast (Phase 1 handles CSS) âœ…
- [ ] Keep: "Qualified accountants â€” not just bookkeepers" âœ…
- [ ] Keep: "Certified QuickBooks ProAdvisors" âœ…
- [ ] Change: "Responsive communication, always" â†’ "Same-day responses during US business hours"
- [ ] Keep: "A dedicated team of 6+ accounting professionals" âœ…

### Add Guarantee Statement (CONVERSION CRITICAL)
- [ ] After checklist, before founder signature:
  ```html
  <div class="guarantee">
    <p>If we make an error, we fix it immediately â€” at no cost to you.</p>
  </div>
  ```
  CSS: `.guarantee { margin-top: 20px; padding: 14px 18px; border-left: 3px solid var(--green); background: rgba(134,238,153,0.08); border-radius: 0 6px 6px 0; font-size: 14px; font-weight: 700; color: #dce8f5; }`

### Add Data Security Line (TRUST CRITICAL)
- [ ] After guarantee:
  ```html
  <p class="security-note">All client data handled under strict NDA and confidentiality agreement.</p>
  ```
  CSS: `.security-note { font-size: 13px; color: rgba(220,232,245,0.65); margin-top: 10px; }`

### Photo Placeholder â€” About Section
- [ ] Add photo placeholder in the STATS column (above the 2Ã—2 grid):
  ```html
  <div class="photo-placeholder">
    <img src="assets/img/founder/muhammad-ilyas.jpg" alt="Muhammad Ilyas, Founder NEK Services">
    <div class="photo-placeholder__watermark">ðŸ“· REPLACE WITH PROFESSIONAL PHOTO</div>
  </div>
  ```
  CSS:
  ```css
  .photo-placeholder {
    position: relative;
    border-radius: 12px;
    overflow: hidden;
    margin-bottom: 14px;
  }
  .photo-placeholder img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    object-position: top;
    filter: brightness(0.7);
  }
  .photo-placeholder__watermark {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 12px;
    font-weight: 700;
    text-align: center;
    background: rgba(16,32,51,0.45);
    letter-spacing: 0.04em;
  }
  ```

### Stats
- [ ] Keep all 4 stats âœ…
- [ ] Note: "10K+ Books & Reports Completed" is vague â€” future improvement: split into two separate stats. For now, keep.

### Two-Audience Signal
- [ ] Add line before the guarantee, after checklist:
  ```html
  <p class="audience-note">Serving US business owners and CPA firms since 2012.</p>
  ```
  CSS: `.audience-note { font-size: 13px; color: rgba(220,232,245,0.65); margin-top: 16px; font-style: italic; }`

---

## PHASE 9 â€” TESTIMONIALS

### Section Background â€” Major Change
- [ ] Change section class from `section--soft` to `section--dark`
  - REASON: Dark background gives testimonials more authority and visual weight
  - Card style on dark background: white cards with standard styling look excellent

### Content
- [ ] Eyebrow: keep "REAL RESULTS" âœ…
- [ ] H2: keep "Our clients say it better than we can." âœ…
- [ ] Lead: fix incomplete sentence:
  - Current: "Business owners and accounting firms that trusted us with their most important numbers."
  - Fix: "Real results from the business owners and accounting firms that trust NEK with their most important numbers."

### Testimonial Quote Trimming (ENGAGEMENT + PAGE LENGTH)
Keep the most specific, result-driven sentences only. 2-3 sentences max per card.

- [ ] Marshea Mayfield â€” trim to:
  "Partnering with Muhammad was a great business decision â€” he has helped my firm with continued growth. Being able to outsource select services allows both companies to create scalable businesses."
- [ ] Courtney Arrington â€” trim to:
  "In less than a year I have been able to double my monthly client revenue and leave my 9-5 job. The team consistently demonstrates professionalism, timeliness, and strong attention to detail."
- [ ] Carl Cyrius â€” trim to:
  "NEK provided exceptional services in accounting, bookkeeping, and tax preparation. I would highly recommend their services because of their professionalism, timeliness, and overall great work."
- [ ] Dr. Cozette M. White â€” trim to:
  "NEK Services has helped our firm revenue increase by 227%. Knowledgeable, out-of-the-box thinkers â€” we've enjoyed partnering with a firm that truly meets our needs."
- [ ] Sam Mabry â€” keep as is âœ… (already short)

### Person Row â€” Fix Crowding (open decision #4)
Option A: Remove company name text (logo identifies the company)
Option B: Add `white-space: nowrap` to `strong` inside person row
- [ ] ASK USER â€” then implement chosen option
- [ ] Fix Oasis Firm logo cutoff: increase `.testimonial__logo-dark-wrap` width to `max-width: 110px; padding: 5px 14px;`

### Photo notes
- Testimonial avatars are 58px circles â€” acceptable for now
- Future: increase to 72px circles for better human presence on dark background
- Mark with comment: `<!-- TODO: Upgrade avatar size to 72px when reviewing dark bg testimonials -->`

### CRITICAL â€” Two Consecutive Dark Sections Warning
After Phase 9, About (dark navy) and Testimonials (dark navy) will be back-to-back.
Two identical dark sections will visually merge and feel like one giant dark block.
Fix options:
- Option A: Use a slightly different dark shade for testimonials (e.g. `#0d1f35` vs `#11263f`)
- Option B: Add a thin light divider element between the two sections
- Option C: Reconsider â€” keep testimonials on soft/grey background for visual rhythm
**Decision needed during Phase 9 before implementing dark background.**

### Testimonial Stars â€” Minor
- Currently use Unicode entities `â˜…â˜…â˜…â˜…â˜…` â€” renders differently across OS/fonts
- SVG stars would be more consistent but not critical for now
- Note for future: replace with inline SVG star icon set

---

## PHASE 10 â€” SOFTWARE SECTION

### Position Decision (ASK USER â€” open decision #1)
Option A: Move between Services and How It Works (earlier in funnel = more impact)
Option B: Keep at current position after testimonials

### Content
- [ ] Eyebrow: "THE TOOLS WE USE" â†’ "WORKS WITH WHAT YOU HAVE"
- [ ] H2: keep âœ…
- [ ] Lead: keep âœ…
- [ ] Group label "Business Platforms We Support" âœ… (already updated)

### Visual
- [ ] Tile height: reduced in Phase 1 âœ…
- [ ] No other changes needed â€” software section is visually the cleanest section on the page

### Photo/visual note
- No photos needed in software section â€” logos are the visual element

---

## PHASE 11 â€” FINAL CTA SECTION

### Layout â€” Major Redesign
Currently: floating dark box inside white section with visible white margins all around.
Fix: make the dark background span the full section (not a contained box).

- [ ] Remove `.cta` class from the inner div â€” move dark styling to the `.section` itself
- [ ] Add new class `.section--cta` with the dark gradient background
- [ ] Inner content: use `.container` for width constraint, but background spans full width
- [ ] Layout: centered (eyebrow + H2 + sub + buttons stacked centered) OR two-column (heading left, buttons right)
  â€” Recommendation: keep centered for emotional impact at this position. Two-column can feel transactional.

### Content
- [ ] Eyebrow: keep "READY TO GET STARTED?" âœ… (symmetric dashes âœ…)
- [ ] H2: keep "Clean books. Clear reports. Starting this month." âœ…
- [ ] Subtext: fix "accurate" â†’ "clean":
  - Current: "Join 200+ businesses that already have accurate books..."
  - Fix: "200+ US businesses and CPA firms already have clean books, clear reports, and an accounting team they count on every month."
- [ ] Primary button: "TALK TO OUR TEAM" â†’ "Book a Free 30-Min Call"
  - Style: keep `btn--arrow` âœ…
- [ ] Secondary button: "About NEK" â†’ "Meet the Team"
  - Style: change from `btn--light` to `btn--ghost-light` (new class from Phase 1)
  - Link: keep `about.html`

### Conversion Additions
- [ ] ADD risk reducer beneath buttons:
  ```html
  <p class="cta-reassurance">No contracts. No lock-in. Your first call is free.</p>
  ```
  CSS: `.cta-reassurance { font-size: 13px; color: rgba(220,232,245,0.60); margin-top: 16px; }`
- [ ] ADD transparency line (offshore trust signal):
  ```html
  <p class="cta-location">Based in Lahore, Pakistan. Supporting US businesses since 2012.</p>
  ```
  CSS: `.cta-location { font-size: 12px; color: rgba(220,232,245,0.45); margin-top: 8px; }`

### Photo placeholder
- [ ] If CTA moves to two-column layout: add founder photo placeholder on one side
- [ ] If stays centered: no photo needed

---

## PHASE 12 â€” FOOTER

### Content
- [ ] Footer contact: Email + WhatsApp + LinkedIn âœ… (already done)
- [ ] "ACCOUNTING MADE CLEARER" â€” ASK USER (open decision #2)
- [ ] Footer description: "dependable" â†’ "trusted":
  - Current: "dependable accounting support for US businesses..."
  - Fix: "trusted accounting support for US businesses..."
- [ ] Footer h3: override to `16px` bold (Phase 1 handles this âœ…)

### No photos needed in footer.

---

## PHOTO PLACEMENT STRATEGY (full page map)

This maps where human photography is needed across the page. Use founder photo as
placeholder everywhere with watermark overlay until real photos are available.

| Section | Photo needed | Placeholder | Priority |
|---|---|---|---|
| Hero | Founder cutout (existing) | âœ… Already placed | Done |
| About (dark) | Founder / team professional portrait | muhammad-ilyas.jpg + watermark | HIGH |
| Services | Future: one photo per service card (background image) | Comment only, no placeholder yet | MEDIUM |
| Testimonials | Client avatars (existing 58px circles) | âœ… Already placed | LOW |
| How It Works | Future: small icon illustrations per step | No photo needed | LOW |
| CTA | Future: if two-column layout | Founder photo + watermark | MEDIUM |

### Watermark CSS (one reusable class for all placeholders)
```css
.photo-placeholder { position: relative; border-radius: 12px; overflow: hidden; }
.photo-placeholder img { width: 100%; object-fit: cover; filter: brightness(0.7); }
.photo-placeholder__watermark {
  position: absolute; inset: 0;
  display: flex; align-items: center; justify-content: center;
  color: #fff; font-size: 11px; font-weight: 700; text-align: center;
  background: rgba(16,32,51,0.5); letter-spacing: 0.05em; padding: 8px;
}
```

---

## HUMAN PSYCHOLOGY IMPLEMENTATION CHECKLIST

Mapping the 5 questions a visitor's brain asks â€” and where we answer each:

| Question | Where answered | Status |
|---|---|---|
| Is this for me? | Two-audience signal (About section + Testimonials lead) | [ ] To implement |
| Can they do it? | Stats (13yr/200 clients), testimonials with specific results, certifications | âœ… Exists |
| Why them over anyone else? | Guarantee statement, NDA line, "not just bookkeepers", 13 years | [ ] Guarantee to add |
| What happens if I contact them? | How It Works Phase 7 followup text | [ ] To implement |
| Is it safe to trust them? | NDA line, guarantee, Lahore transparency line, US clients testimonials | [ ] To implement |

---

## LEAD AND SALES IMPACT CHECKLIST

- [ ] CTA standardized to "Book a Free 30-Min Call" across: Pain, How It Works, Final CTA, Nav
- [ ] Risk reducer beneath every primary CTA: "No contracts. No commitment. Free first call."
- [ ] Guarantee statement visible in About section
- [ ] NDA/data security line visible in About section
- [ ] Two-audience signal (US businesses + CPA firms) in About and Testimonials
- [ ] Offshore transparency handled: Lahore line in CTA section
- [ ] "What happens after contact" clarity in How It Works
- [ ] Low-friction first step: specific time (30 min), free, no commitment

---

## VISITOR ENGAGEMENT CHECKLIST

- [ ] Page length: reduce from ~6,000px to ~4,200px via padding + card reductions
- [ ] Service cards: 6 â†’ 3 (removes full card row ~250px)
- [ ] Section padding: 82px â†’ 66px (saves ~250px)
- [ ] Testimonial quotes: trimmed to 2-3 sentences (cards become ~40% shorter)
- [ ] Software tile height: 72px â†’ 56px
- [ ] Card padding: 30px â†’ 24px
- [ ] Three card-grid monotony broken: How It Works â†’ step flow (different visual texture)
- [ ] Icons on service cards (visual anchor points for scanning)
- [ ] Left-aligned services heading (editorial feel, visual variety)
- [ ] Testimonials on dark bg (visual rhythm change)

---

## IMPLEMENTATION ORDER
1. Phase 1 â€” Global CSS (affects whole page, do first)
2. Phase 2 â€” Header nav CTA (all 4 pages)
3. Phase 4 â€” Trust bar
4. Phase 5 â€” Pain section
5. Phase 6 â€” Services section
6. Phase 7 â€” How It Works
7. Phase 8 â€” About section
8. Phase 9 â€” Testimonials
9. Phase 10 â€” Software section
10. Phase 11 â€” Final CTA
11. Phase 12 â€” Footer
12. Phase 13 â€” AUTOMATIC: Create NEK Design & Content Guidelines file

**Phase 3 (Hero) â€” LOCKED. Skip.**
**Review with user after each phase before moving to next.**

### Post-Homepage Tasks (before creating guidelines file)
- [ ] Mobile responsiveness review â€” we have NOT checked mobile at all during this session.
  After desktop implementation is approved, test on 375px, 768px, and 1024px widths.
  Known mobile CSS exists (breakpoints at 980px and 640px) but hasn't been visually verified
  against all the new changes.
- [ ] Full browser check â€” hard refresh, check for console errors, check no broken images
- [ ] Then trigger Phase 13 (guidelines file) automatically

---

## PHASE 13 â€” CREATE GUIDELINES FILE (automatic, after homepage approved)

**Trigger:** User confirms homepage is complete and approved.
**Action:** Claude automatically creates `docs/NEK_GUIDELINES.md` without being asked.
**No user prompt needed â€” just do it.**

### What the guidelines file must contain:

#### 1. Design System
- Full color palette with hex values, variable names, and usage rules
- Typography scale: H1/H2/H3/lead/body/eyebrow/caption â€” sizes, weights, colors, line-heights
- Spacing system: section padding, card padding, grid gaps, container max-width
- Border radius values and when to use each
- Shadow system (card shadows, button shadows)
- Button system: all button types, their colors, hover states, when to use each
- Breakpoints and responsive behavior rules

#### 2. Component Patterns
- Eyebrow label pattern (dashes, color, size, uppercase, letter-spacing)
- Section heading pattern (eyebrow + H2 + lead + grid)
- Card pattern (padding, border, shadow, hover behavior)
- Pain card pattern (left border accent, muted body text)
- Step-flow pattern (open layout, connecting line, colored circles)
- CTA pattern (full-width dark section, centered content, pill button + ghost button)
- Testimonial card pattern (dark section, white cards, trimmed quotes, person row with logo)
- Software tile pattern (height, padding, hover border)
- Trust bar pattern (logo height, grayscale, blend mode, animation)
- Photo placeholder pattern (watermark overlay, filter, CSS)

#### 3. Content & Copy Guidelines
- Tone of voice: confident, direct, specific, human â€” never generic or corporate
- Eyebrow copy rules: short, uppercase, action or context label â€” never "WHAT WE DO"
- H2 copy rules: benefit-led, specific, punchy â€” never vague or jargon-heavy
- Lead paragraph rules: max 20 words, one clear point, no lists
- CTA text rules: always "Book a Free 30-Min Call" or outcome-specific â€” never "Learn More"
- Risk reducer rules: always beneath primary CTA â€” "No contracts. No commitment. Free first call."
- Words to use: clean, clear, trusted, accurate, reliable, dedicated, real, specific
- Words to avoid: full-stack, solution, leverage, synergy, seamless, world-class
- Oxford comma: yes. Em dashes: yes. Exclamation marks: no.

#### 4. Conversion & Psychology Rules
- Every primary CTA must have a risk reducer beneath it
- Trust signals (stats, certifications, testimonials) must appear near CTAs not just in their own sections
- Two-audience signal (US businesses + CPA firms) must appear on every page
- Guarantee statement must be visible on every page (about or services)
- NDA/data security line must appear on services and contact pages
- Offshore transparency: "Based in Lahore. Supporting US businesses since 2012." on every page
- "What happens next" clarity required near every conversion CTA
- Never use more than 3 card-grid sections consecutively on any page

#### 5. Page Length Rules
- Homepage target: 4,200â€“4,600px
- Inner pages target: 3,500â€“4,200px
- Section padding: 66px top and bottom
- Card padding: 24px
- Max 3 service items per homepage section (full list on services page)
- Testimonial quotes: 2-3 sentences max
- Lead text max-width: 480px (centered sections)
- Body text max line length: 75 characters (~580px at 16px)

#### 6. Photo & Visual Guidelines
- Photo placement map (from IMPLEMENTATION_PLAN.md Phase 13 table)
- Watermark placeholder system for all pending photos
- Icon usage: 32px, single-color, `var(--blue)`, line style only
- No mix of icon styles on the same page
- Founder photo: use as placeholder everywhere until professional photography available
- All photography: professional, business setting, warm lighting, genuine expressions

#### 7. Per-Page Notes (what each remaining page needs)
- **about.html:** Full team section, founder story, credentials, expanded stats, NDA mention
- **services.html:** All 6 services with full descriptions, FAQ section, audience-specific sections, software mention
- **contact.html:** Simple form, "what happens next" clarity, WhatsApp link, response time promise, no address shown

---

*Last updated: 2026-06-26*
*Project: NEK Services Website Codex*
*File: e:\Coding\NEK Services Website Codex\docs\IMPLEMENTATION_PLAN.md*

