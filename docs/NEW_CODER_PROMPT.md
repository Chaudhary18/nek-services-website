# Handover Prompt â€” NEK Services Website

You are taking over the NEK Services static website project. The homepage is **complete and approved**. Your job is to implement the remaining inner pages: `about.html`, `services.html`, and `contact.html`.

---

## Project Location

```
E:/Coding/NEK Services Website Codex/
```

## Primary Files

```
website/index.html          â† COMPLETE â€” do not change without approval
website/about.html          â† needs work
website/services.html       â† needs work
website/contact.html        â† needs work
website/assets/css/styles.css
website/assets/js/main.js
```

## Read These First

```
docs/NEK_GUIDELINES.md      â† MOST IMPORTANT â€” full design system + rules for all pages
docs/WEBSITE_HANDOFF.md     â† project context and brand details
docs/IMPLEMENTATION_PLAN.md â† what was done on homepage (all 13 phases complete)
```

---

## What Has Been Built

### Homepage (index.html) â€” COMPLETE
All 13 phases implemented:
1. Global CSS fixes â€” spacing, typography, contrast, palette cleanup
2. Nav CTA button ("Book a Free Call") on all 4 pages
3. Hero â€” content only, design locked
4. Trust bar â€” premium slow marquee with 11 client logos
5. Pain section â€” 3 cards + redesigned CTA row
6. Services section â€” 3 cards (bookkeeping, cleanup, reporting), gradient badge icons
7. How It Works â€” 3-step cards with centered layout
8. About section â€” dark navy, checklist, guarantee, NDA line, photo placeholder, stats
9. Testimonials â€” trimmed quotes, soft background, no logos
10. Software section â€” moved between services and steps, two logo groups
11. Final CTA â€” full-width dark navy, risk reducer, Lahore transparency line
12. Footer â€” "trusted" wording, 16px h3
13. Guidelines file created (NEK_GUIDELINES.md)

### CSS Architecture
- No framework. Pure CSS with custom properties (variables).
- All variables defined in `:root` in `styles.css`
- Mobile breakpoints at 980px and 640px
- `overflow-x: hidden` on html + body prevents horizontal scroll
- `text-wrap: pretty` on all headings
- Reveal scroll animation via IntersectionObserver in `main.js`

---

## What Still Needs Building

### about.html
- Expand founder story (Muhammad Ilyas, Founder & CEO, 13+ years)
- Full team section (placeholders until real photos provided)
- Expanded credential cards: Qualified Accountants, QuickBooks ProAdvisors, US Business Support
- Guarantee statement visible
- NDA/data security line
- Two-audience signal (US businesses AND CPA firms)
- Stats section (same 4 stats as homepage: 13+, 200+, 10K+, 6+)
- Use `section--dark` for the main about section

### services.html
- All 6 services with full descriptions:
  1. Monthly Bookkeeping
  2. Accounting Cleanup
  3. Financial Reporting
  4. Bank Reconciliations
  5. Tax-Ready Records
  6. Budgeting & Cash Flow
- Separate section for CPA/bookkeeping firm outsourcing services
- FAQ section at bottom (content in old Porto document)
- Software logos mention
- NDA line required
- Guarantee line required
- Two-audience signal

### contact.html
- Simple form: name, email, what kind of support needed, message
- "What happens next" section: within 24 hours, Muhammad Ilyas personally reaches out
- WhatsApp link prominently placed: https://wa.me/923344721225
- Response time promise: same business day during US hours
- No physical address shown
- NDA reassurance line
- No pricing discussion

---

## Design Rules Summary

Full rules in `docs/NEK_GUIDELINES.md`. Key points:

- **Primary CTA text:** always "Book a Free 30-Min Call"
- **Risk reducer:** always beneath every primary CTA â€” "No contracts. No commitment. Free first call."
- **Eyebrow labels:** short, uppercase, never "WHAT WE DO" or "ABOUT US"
- **Card body text:** always `var(--muted)`, never `var(--ink)`
- **Lead paragraphs in centered sections:** always `margin: 0 auto` so they center under the heading
- **Section padding:** 66px top and bottom
- **Card padding:** 24px
- **H3 size:** 22px
- **Footer H3 size:** 16px

---

## Brand Details

- **Company:** NEK Services
- **Founder:** Muhammad Ilyas, Founder & CEO
- **Location:** Lahore, Pakistan (show on every page: "Based in Lahore, Pakistan. Supporting US businesses since 2012.")
- **Target market:** US businesses and CPA/bookkeeping firms
- **Email:** hello@nekservices.com
- **WhatsApp:** https://wa.me/923344721225
- **LinkedIn:** https://www.linkedin.com/company/nek-services/
- **Years:** 13+ years (since 2012)
- **Clients:** 200+
- **Team:** 6+ accounting professionals

## Testimonial Clients (do not fabricate â€” these are real)
- Marshea Mayfield â€” Financial Services Plus LLC
- Courtney Arrington â€” Arrington Solutions LLC
- Carl Cyrius â€” The Oasis Firm
- Dr. Cozette M. White â€” My Financial Home Enterprises
- Sam Mabry â€” The Fixer Firm

---

## Asset Locations

```
website/assets/img/founder/       â† Muhammad Ilyas photos
website/assets/img/team/          â† testimonial client photos
website/assets/img/clients/       â† client company logos
website/assets/img/software/      â† software platform logos
website/assets/logos/             â† NEK logo files
```

---

## Constraints

- No Bootstrap, no CDN, no build step
- No framework â€” plain HTML/CSS/JS only
- No fake contact details, demo content, or placeholder text in final output
- Do not change index.html without explicit approval
- Always verify local image paths before committing
- Always test desktop (1280px+) and mobile (375px) before reporting done
- Update docs if design decisions change

---

*Last updated: 2026-06-26*
*Homepage status: COMPLETE*
*Next: about.html â†’ services.html â†’ contact.html*

