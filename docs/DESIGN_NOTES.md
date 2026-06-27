# Design Notes — NEK Services Website

## Status
Homepage is complete. All design decisions below reflect the approved final homepage design. Apply these to all remaining pages.

**Full design system is in `docs/NEK_GUIDELINES.md` — read that first.**

---

## Direction

Premium, clean, conversion-focused accounting firm website. Static HTML/CSS/JS — no framework, no CDN, no build step. The design is original but informed by high-quality professional services sites (Bench, Pilot, Webflow) and the original NEK/Gerow live site direction.

---

## Visual System

### Colors (CSS Variables)
```css
--ink: #102033        /* body text */
--muted: #5f6f84      /* secondary text, card body */
--blue: #497acc       /* primary brand */
--blue-dark: #2f5fa8  /* CTA gradients */
--sky: #84c2ff        /* gradient ends */
--green: #86ee99      /* eyebrow dashes, checklist */
--green-dark: #45b85d /* buttons hover, step 3 */
--paper: #ffffff
--soft: #f7f7f7       /* alternate section bg */
--line: #dce6f0       /* borders, dividers */
```

### Typography
- Font: Inter, "Segoe UI", Arial, sans-serif
- H1: clamp(36px, 4.17vw, 60px), weight 900, line-height 1.06
- H2: clamp(29px, 3.4vw, 42px), weight 900, line-height 1.12
- H3: 22px, weight 900
- Lead: 17px, color #102033, max-width 480px (centered), always `margin: 0 auto` in centered sections
- Body: 16px, line-height 1.6, color var(--ink)
- Card body: 14-15px, color var(--muted)
- Eyebrow: 13px, weight 900, uppercase, color var(--green-dark)
- Footer H3: 16px (overrides global 22px)
- All headings use `text-wrap: pretty`

### Spacing
- Section padding: 66px 0
- Card padding: 24px
- Container max-width: 1180px
- Grid gap: 24px

---

## Component Rules

### Buttons
- Primary CTA: `.btn--arrow` — blue pill, green circle right side that expands on hover
- Nav CTA: `.btn--primary` with nav override (36px height, 14px font, 999px radius)
- Dark bg secondary: `.btn--ghost-light` — transparent, white border
- **CTA text always: "Book a Free 30-Min Call"**
- **Risk reducer always beneath primary CTA: "No contracts. No commitment. Free first call."**

### Section Headings
- Always centered on all pages
- Always: eyebrow → H2 → lead paragraph
- Lead in centered sections: `margin: 0 auto` required
- Never skip the eyebrow

### Cards
- Padding 24px, border 1px var(--line), radius 8px
- Body text always var(--muted)
- Hover: translateY(-4px)

### Service Cards (homepage pattern)
- Gradient badge (40×40px rounded square) inline with H3 heading
- Badge: blue→sky gradient, white SVG stroke icon
- Max 3 on homepage; full list on services.html

### Dark Sections
- Background: `linear-gradient(135deg, #11263f, #173a63)`
- Text: #dce8f5 primary, rgba(220,232,245,0.65) secondary
- Checklists: white (#ffffff)
- Checklist icons: solid green circle + dark navy checkmark (::before + ::after)
- Do NOT stack two dark sections back to back

### Trust Bar
- Full-width marquee (55s, 80px gap)
- 86×86px for square logos, 58px for horizontal logos
- Dark chip (#1c2b3a) only for logos designed for dark backgrounds
- Edge fade: 80px mask each side

---

## Conversion Rules (apply to every page)

1. Every primary CTA must have a risk reducer beneath it
2. Two-audience signal on every page: "US businesses and CPA firms"
3. Guarantee statement on about and services pages
4. NDA/data security line on services and contact pages
5. Offshore transparency on every page: "Based in Lahore, Pakistan. Supporting US businesses since 2012."
6. "What happens next" clarity near every conversion CTA
7. Never more than 3 card-grid sections consecutively

---

## Constraints

- No Bootstrap or framework
- No CDN dependencies
- No decorative clutter
- No fake contact details or demo content
- No "Free Consultation" wording
- No "WHAT WE DO", "ABOUT US", "OUR SERVICES" eyebrows
- No "Learn More" or "Submit" CTAs
- No consecutive dark sections
- Homepage hero: LOCKED — do not modify layout or visual design

---

## File Structure

```
website/
  index.html              ← COMPLETE
  about.html
  services.html
  contact.html
  assets/
    css/styles.css
    js/main.js
    img/
      founder/            ← Muhammad Ilyas photos
      team/               ← testimonial client photos
      clients/            ← client company logos
      software/           ← software platform logos
    logos/                ← NEK logo files
```

---

*Last updated: 2026-06-26*
*See `docs/NEK_GUIDELINES.md` for full design system reference.*
