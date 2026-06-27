# NEK Services â€” Design & Content Guidelines
*Created automatically after homepage approval. Apply to all remaining pages.*

---

## 1. DESIGN SYSTEM

### Color Palette
| Variable | Hex | Usage |
|---|---|---|
| `--ink` | `#102033` | Body text, headings on light bg |
| `--muted` | `#5f6f84` | Secondary text, captions, card body |
| `--blue` | `#497acc` | Primary brand, buttons, icons, links |
| `--blue-dark` | `#2f5fa8` | CTA gradient start, hover states |
| `--sky` | `#84c2ff` | Gradient end on badges/buttons |
| `--green` | `#86ee99` | Eyebrow dashes, checklist circles, accents |
| `--green-dark` | `#45b85d` | Step 3 circle, hover on buttons, guarantee border |
| `--paper` | `#ffffff` | Page background |
| `--soft` | `#f7f7f7` | Alternate section backgrounds |
| `--silver` | `#ebe9e9` | Borders, dividers (light) |
| `--line` | `#dce6f0` | Card borders, step dividers |

**Dark section text:** `#dce8f5` (primary), `rgba(220,232,245,0.65)` (secondary), `rgba(220,232,245,0.45)` (tertiary)

### Typography Scale
| Element | Size | Weight | Line-height | Color |
|---|---|---|---|---|
| H1 | `clamp(36px, 4.17vw, 60px)` | 900 | 1.06 | `#264a87` |
| H2 | `clamp(29px, 3.4vw, 42px)` | 900 | 1.12 | `var(--ink)` |
| H3 | `22px` | 900 | 1.12 | `var(--ink)` |
| Lead | `17px` | 400 | 1.6 | `#102033` |
| Body | `16px` | 400 | 1.6 | `var(--ink)` |
| Card body | `14â€“15px` | 400 | 1.65 | `var(--muted)` |
| Eyebrow | `13px` | 900 | â€” | `var(--green-dark)` |
| Caption/note | `13px` | 400/700 | â€” | `var(--muted)` |
| Footer H3 | `16px` | 700 | â€” | `var(--ink)` |

All headings use `text-wrap: pretty` to prevent single-word orphans.

### Spacing System
| Token | Value | Usage |
|---|---|---|
| Section padding | `66px 0` | All `.section` elements |
| Card padding | `24px` | All `.card` elements |
| Container max-width | `1180px` | `var(--max)` |
| Grid gap | `24px` | Standard card grids |
| Section head margin-bottom | `42px` | `.section__head` |
| Lead max-width (centered) | `480px` | Centered section leads |
| Body text max-width | `580px` | About section paragraphs |

### Border Radius
| Value | Usage |
|---|---|
| `999px` | Pill buttons (`.btn--arrow`) |
| `14px` | Service cards |
| `12px` | Photo placeholders |
| `10px` | Badge icons, about stats |
| `8px` | Standard cards, CTA box |
| `6px` | Form fields, small elements |
| `50%` | Avatars, step number circles |

### Button System
| Class | Style | Usage |
|---|---|---|
| `.btn--arrow` | Blue pill, green circle right, white arrow | Primary CTA everywhere |
| `.btn--primary` | Solid blue, white text | Nav CTA, secondary actions |
| `.btn--ghost` | White bg, blue border | Ghost on light backgrounds |
| `.btn--ghost-light` | Transparent, white border | Secondary on dark backgrounds |
| `.btn--light` | White bg, dark text | Avoid â€” use ghost-light on dark |

**Nav button override:** `.nav__actions .btn` â€” 36px height, 14px font, 999px radius.

### Breakpoints
| Width | Behavior |
|---|---|
| `â‰¤980px` | 2-col grids, mobile nav toggle, hide nav CTA button |
| `â‰¤640px` | 1-col everything, smaller hero, 64px section padding |

---

## 2. COMPONENT PATTERNS

### Eyebrow Label
```html
<p class="eyebrow">Label text</p>
```
- Always uppercase, 13px, `var(--green-dark)`, 900 weight, 0.08em letter-spacing
- Has a green dash before (`::before`) always
- Has a green dash after (`::after`) only on centered sections and CTA
- Never use "WHAT WE DO" â€” always action or context: "HOW WE HELP", "REAL RESULTS", "THE NEK DIFFERENCE"

### Section Heading Pattern
```html
<div class="section__head section__head--center reveal">
  <p class="eyebrow">Eyebrow</p>
  <h2>Heading.</h2>
  <p class="lead">One clear sentence, max 20 words.</p>
</div>
```
- All section headings are **centered** on homepage for visual consistency
- Max-width: 760px on section head, 480px on lead paragraph
- Always: eyebrow â†’ H2 â†’ lead. Never skip the eyebrow.

### Card Pattern
```html
<article class="card reveal">
  <h3>Title</h3>
  <p>Body text in var(--muted).</p>
</article>
```
- Padding: 24px. Border: 1px `var(--line)`. Radius: `var(--radius)` (8px).
- Shadow: `0 14px 34px rgba(16,32,51,0.06)`
- Hover: `translateY(-4px)` transition
- Body text: always `var(--muted)` â€” never `var(--ink)` on cards

### Service Card Pattern
```html
<article class="card reveal">
  <div class="svc-heading">
    <div class="svc-badge"><svg ...></svg></div>
    <h3>Service Name</h3>
  </div>
  <p>Description in var(--muted).</p>
  <a class="card-link" href="services.html">Learn more</a>
</article>
```
- Badge: 40Ã—40px, `border-radius: 10px`, gradient `var(--blue)` â†’ `var(--sky)`, white SVG icon
- Max 3 service cards on homepage. Full list on services.html.

### Pain Card Pattern
```html
<article class="card pain-card reveal">
  <h3>Pain heading</h3>
  <p>Description.</p>
</article>
```
- Left border: `4px solid var(--blue)`
- Border-radius: `0 var(--radius) var(--radius) 0`
- Body: `var(--muted)`, 15px, line-height 1.7

### Step Flow Pattern
```html
<div class="steps-flow">
  <article class="step">
    <div class="step-num">1</div>
    <h3>Step title</h3>
    <p>Body text.</p>
  </article>
  <!-- step 3 uses step-num--green -->
</div>
```
- Open layout â€” no card boxes
- Dashed left border between steps: `1px dashed var(--line)`
- Steps 1 & 2: blue circle. Step 3: green circle.
- First step: no left padding. Last step: no right padding.
- Body text: left-aligned

### CTA Section Pattern
```html
<section class="section section--cta">
  <div class="container cta-inner reveal">
    <p class="eyebrow">Ready to get started?</p>
    <h2>Heading.</h2>
    <p class="cta__sub">Subtext.</p>
    <div class="section__actions" style="justify-content:center;">
      <a class="btn btn--arrow" href="contact.html"><span>Book a Free 30-Min Call</span></a>
      <a class="btn btn--ghost-light" href="about.html">Meet the Team</a>
    </div>
    <p class="cta-reassurance">No contracts. No lock-in. Your first call is free.</p>
    <p class="cta-location">Based in Lahore, Pakistan. Supporting US businesses since 2012.</p>
  </div>
</section>
```
- Full-width dark navy gradient â€” background spans entire section
- Always centered layout for emotional impact
- Always include risk reducer and location transparency line

### Testimonial Card Pattern
```html
<article class="card testimonial">
  <div class="testimonial__stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
  <p class="testimonial__body">"Quote â€” max 2-3 sentences."</p>
  <div class="testimonial__person">
    <img src="..." alt="Name">
    <div><strong>Full Name</strong><span>Company Name</span></div>
  </div>
</article>
```
- Quotes: 2-3 sentences max. Trim to most specific, result-driven lines.
- No company logos in testimonial cards (removed â€” name identifies company)
- Person name: `white-space: nowrap` to prevent wrapping
- Section background: `section--soft` (grey) â€” NOT dark navy

### Trust Bar Pattern
- Full-width marquee, 55s scroll speed, 80px gap between logos
- Logo height: 58px standard, 86Ã—86px for square logos
- Edge fade: `80px` mask on each side
- Dark chip (`#1c2b3a`) only for logos with white text on dark background
- Pauses on hover

### Software Tile Pattern
- Min-height: 56px. Padding: 12px 16px. Border-radius: 10px.
- Hover: `translateY(-3px)`, border-color `var(--blue)`
- Positioned between service cards and 3-step process

### Photo Placeholder Pattern
```html
<div class="photo-placeholder">
  <img src="assets/img/founder/muhammad-ilyas.jpg" alt="...">
  <div class="photo-placeholder__watermark">ðŸ“· REPLACE WITH PROFESSIONAL PHOTO</div>
</div>
```
- Height: 200px, brightness: 0.7, object-position: top
- Dark overlay: `rgba(16,32,51,0.45)`
- Remove watermark when real photo is added

---

## 3. CONTENT & COPY GUIDELINES

### Tone of Voice
- **Confident, direct, specific, human.** Never generic or corporate.
- Write like a trusted advisor, not a sales pitch.
- Use real numbers: 13 years, 200 clients, 6+ team members, 227% revenue increase.
- Oxford comma: yes. Em dashes: yes. Exclamation marks: no.

### Eyebrow Rules
- Short, uppercase, action or context label
- Examples: "HOW WE HELP", "THE NEK DIFFERENCE", "REAL RESULTS", "SIMPLE TO START"
- Never: "WHAT WE DO", "OUR SERVICES", "ABOUT US"

### H2 Rules
- Benefit-led, specific, punchy
- Examples: "Clean books in 3 steps.", "13 years. 200 clients. Zero shortcuts."
- Never vague: "Accounting Solutions for Your Business"
- Punctuation: period at end of declarative, no period on fragments

### Lead Paragraph Rules
- Max 480px wide (centered sections)
- One clear point, no lists
- Conversational but precise

### CTA Text Rules
- Primary CTA: always **"Book a Free 30-Min Call"**
- Never: "Learn More", "Get Started", "Contact Us", "Submit"
- Secondary CTA: outcome-specific â€” "View All Services", "Meet the Team"

### Risk Reducer Rules
- Always beneath primary CTA
- Standard text: **"No contracts. No commitment. Free first call."**
- On pain section: "No commitment. Free first call."

### Words to Use
clean, clear, trusted, accurate, reliable, dedicated, real, specific, qualified, certified, responsive

### Words to Avoid
full-stack, solution, leverage, synergy, seamless, world-class, innovative, cutting-edge, dependable (use "trusted")

---

## 4. CONVERSION & PSYCHOLOGY RULES

1. **Every primary CTA must have a risk reducer beneath it** â€” no exceptions
2. **Trust signals near CTAs** â€” stats and testimonial snippets near conversion points, not just in their own sections
3. **Two-audience signal on every page** â€” "US businesses and CPA firms" â€” never assume one audience
4. **Guarantee statement on every service/about page** â€” "If we make an error, we fix it immediately â€” at no cost to you."
5. **NDA/data security line on services and contact pages** â€” "All client data handled under strict NDA and confidentiality agreement."
6. **Offshore transparency on every page** â€” "Based in Lahore, Pakistan. Supporting US businesses since 2012."
7. **"What happens next" clarity near every conversion CTA** â€” eliminate uncertainty about the first step
8. **Never more than 3 card-grid sections consecutively** on any page
9. **Pain before solution** â€” address the visitor's problem before presenting the service
10. **Specific beats vague** â€” "double my monthly client revenue" beats "great results"

---

## 5. PAGE LENGTH RULES

| Page | Target length |
|---|---|
| Homepage | 4,200â€“4,600px |
| Inner pages | 3,500â€“4,200px |

| Element | Rule |
|---|---|
| Section padding | 66px top and bottom |
| Card padding | 24px |
| Max service cards on homepage | 3 (full list on services.html) |
| Testimonial quote length | 2â€“3 sentences max |
| Lead text max-width | 480px (centered), 580px (left-aligned) |
| Body text max line length | ~75 characters |

---

## 6. PHOTO & VISUAL GUIDELINES

### Photo Placement Map
| Section | Photo | Status |
|---|---|---|
| Hero | Founder standing cutout PNG | âœ… Done |
| About (dark) | Professional portrait | Placeholder active |
| Services | Per-service background photo | Future â€” comment in HTML |
| Testimonials | Client avatars (58px circles) | âœ… Done |
| CTA | Founder photo (if two-column) | Future |

### Photography Standards (when real photos arrive)
- Professional business setting
- Warm lighting, genuine expressions
- Muhammad Ilyas: use as placeholder everywhere until professional shoot

### Icon Usage
- Service badge icons: 40Ã—40px rounded square, gradient blue bg, white SVG stroke icon
- SVG icons: `stroke-width: 2`, `stroke-linecap: round`, `stroke-linejoin: round`
- No mix of icon styles on the same page
- Color: white on gradient badge, `var(--blue)` on white background

### Grayscale on Trust Bar Logos
- Standard logos: `grayscale(0.4)`, `opacity: 0.80`
- Hover: full color, full opacity
- Mix-blend-mode multiply on white-background logos

---

## 7. PER-PAGE NOTES

### about.html
- Expand the founder story section with Muhammad Ilyas's background
- Full team section when team photos are available
- Expanded credential cards: Qualified Accountants, QuickBooks ProAdvisors, US Business Support
- Guarantee statement must be visible
- NDA/data security line required
- Two-audience signal required

### services.html
- All 6 services with full descriptions (bookkeeping, cleanup, reporting, reconciliations, tax-ready, budgeting/cash flow)
- Add: outsourced accounting support for CPA firms (separate audience section)
- FAQ section at bottom (from old Porto document)
- Software mention in context of each service
- NDA line required
- Guarantee line required
- Two-audience signal required

### contact.html
- Simple form â€” name, email, message, what kind of support needed
- "What happens next" section: within 24 hours, Muhammad Ilyas personally reaches out
- WhatsApp link prominently placed
- Response time promise: same business day during US hours
- No physical address shown
- NDA reassurance line
- No pricing â€” direct to conversation

---

*File created: 2026-06-26*
*Project: NEK Services Website Codex*
*Apply these guidelines to: about.html, services.html, contact.html*

