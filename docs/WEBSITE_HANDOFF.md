# NEK Services Website Handoff

This document is the main context file for anyone continuing the NEK Services website.

**Current status:** Homepage (`index.html`) is complete and approved. Inner pages (`about.html`, `services.html`, `contact.html`) need rebuilding to match the homepage quality and design system.

**START HERE:** Read `docs/NEW_CODER_PROMPT.md` for a concise handover brief, then read `docs/NEK_GUIDELINES.md` for the full design system.

---

## 1. Project Objective

Build a fast static website for NEK Services that communicates:

- Clean books, clear reports, and CPA-ready financials.
- Bookkeeping, cleanup, CFO-style support, and offshore accounting support.
- Support for US businesses AND CPA firms, tax firms, and bookkeeping firms.
- Practical accounting support built around clean records, clear communication, reliable deadlines, and confidentiality.
- Trust, expertise, and reliability from a Lahore-based team serving US clients since 2012.

The homepage has been fully redesigned and approved. The inner pages need to match the same standard.

## 2. Repository Layout

```text
E:/Coding/NEK Services Website Codex/
  AGENTS.md
  docs/
    WEBSITE_HANDOFF.md
    PROJECT_BRIEF.md
    SITE_MAP.md
    CONTENT_INVENTORY.md
    DESIGN_NOTES.md
    COMPETITOR_NOTES.md
    TODO.md
  website/
    index.html
    about.html
    services.html
    contact.html
    assets/
      css/styles.css
      js/main.js
      img/
      logos/
  source-materials/
  reference/
    live-site/
    linkedin-company.html
  themeforest-LiyY7Ogc-porto-responsive-wordpress-ecommerce-theme/
```

## 3. Current Implemented Website

The current static website lives in `website/`.

Implemented pages:

- `index.html`
- `about.html`
- `services.html`
- `contact.html`

Implemented assets and behavior:

- Plain HTML, CSS, and JavaScript.
- No framework, no build step, no CDN dependency.
- Responsive header and mobile menu.
- Company palette encoded in CSS variables.
- Real logo, favicon, founder photo, client photos, client logos, and software logos.
- Email-only contact form using `mailto:hello@nekservices.com`.
- Real testimonials matched to available photos where possible.
- Homepage now includes one combined "What we solve" section based on the founder's LinkedIn profile pain points. The earlier separate services/problem intro sections were merged to avoid repetition.
- Homepage hero has been revised closer to the Gerow finance reference: one "Our Services" CTA, founder imagery, floating decorative shapes, and smaller/calmer typography.
- Hero-specific decisions from user review: title case is "Clean Books, Clear Reports, CPA-Ready Financials"; experience is 13+ years; button hover should feel Gerow-like with a green arrow segment expanding across the blue pill; the founder image should eventually be replaced with a transparent cutout PNG/WebP for a true no-background look.
- The blue hero arc was corrected to use Gerow's actual `banner-shape03.png` asset, stored locally at `website/assets/img/hero-blue-arc.png`; the previous CSS circle approximation should not be used.
- The extra header Contact Us CTA button was removed from all pages; the normal Contact navigation link remains.
- Homepage testimonial cards and client/partner logos now use lightweight side-arrow sliders.
- The About preview on the homepage now shows credential cards instead of reusing client photos: Qualified Accountants, Certified QuickBooks ProAdvisors, and US Business Support.
- Modern accounting systems now include logo image tiles for QuickBooks Online, Xero, Aplos, Excel, Housecall Pro, Toast POS, Shopify, and Square. QuickBooks ProAdvisor was removed from the software strip because it is a credential, not software.
- Services page now includes detailed service lists and FAQs from the older Porto website document.
- About page now emphasizes accuracy, integrity, timeliness, outsourcing, and partner-firm support.
- Topbar now uses real NEK contact information and LinkedIn link, closer to the live site style.
- Footer now uses a white/blue visual treatment closer to the live NEK/Gerow footer.
- Inner pages now use a lighter page-hero/breadcrumb pattern similar to the live site.
- About page now uses Muhammad Ilyas as the real founder profile and leaves blank team placeholders for future team photos.
- Founder image has been optimized to a smaller JPG for performance.
- Browser and static audits previously passed: no broken local asset links, no console errors, no horizontal overflow.
- Latest static/browser audit passed after the hero, slider, typography, and logo updates: no broken local links/assets, no horizontal overflow at desktop or mobile widths, one hero CTA, and two slider controls present.

Important limitation:

- This current build is much closer to the live Gerow/NEK direction than the first draft and is ready for user review. Exact matching would still require the live site's missing media assets from Botble `storage/` or a hosting backup.

## 4. Desired Final Direction

The final site should closely resemble the current live NEK website at `https://www.nekservices.com/`, which is a Botble Gerow theme implementation.

Desired match:

- Header/topbar layout similar to live site.
- Gerow finance-style hero/banner structure.
- Live-style About/Overview sections.
- Breadcrumb layout for inner pages.
- Services grid similar to live `services` page.
- Contact page layout similar to live `contact` page.
- Footer structure similar to live site, but with real NEK details and no demo links.
- Preserve static simplicity, but visually move closer to Gerow.

Do not copy competitor wording or images. Competitor research is only for patterns and positioning.

## 5. Live Website Reference

Downloaded live-site reference files exist in:

```text
reference/live-site/
  home.html
  about.html
  services.html
  contact.html
  css/
    bootstrap.min.css
    default.css
    flaticon.css
    fontawesome-all.min.css
    responsive.css
    style.css
```

These were downloaded from:

- `https://www.nekservices.com/`
- `https://www.nekservices.com/about`
- `https://www.nekservices.com/services`
- `https://www.nekservices.com/contact`

Live structure discovered:

- Home: `banner-area-two banner-bg-two`, `overview-area`, lazy-loaded intro/video/team/testimonial/contact blocks, footer.
- About: `breadcrumb-area`, `about-area-seven`, `features-area-three`, footer.
- Services: `breadcrumb-area`, `services-area-seven inner-services-bg`, `brand-area-two`, footer.
- Contact: `breadcrumb-area`, `inner-contact-area`, `contact-area contact-bg`, form, map, footer.

Important issue:

- The live HTML is readable, but direct live image URLs such as `/storage/general/finance-banner-img.png`, `/storage/general/overview-img01.png`, `/storage/general/contact-img.jpg`, and `/storage/n-logo-3.png` returned `404` when downloaded directly.
- To match the live site more closely, the best missing asset source would be the Botble `storage/` folder, hosting backup, cPanel backup, or manually saved images from the browser.

## 6. Brand Details

Confirmed contact and company details:

- Email: `hello@nekservices.com`
- Phone: `+92 334 4721225`
- Address: `72-A Faisal Town, Lahore`
- LinkedIn company: `https://www.linkedin.com/company/nek-services/`
- Founder: Muhammad Ilyas, Founder & CEO, NEK Services
- Target market: USA
- Main audiences: US businesses, CPA firms, tax firms, and bookkeeping firms equally.

Brand palette:

```text
#497acc
#84c2ff
#ebe9e9
#86ee99
#ffffff
```

Logo files:

```text
website/assets/logos/nek-logo.png
website/assets/logos/favicon.png
website/assets/logos/nek-logo-large.jpg
```

Founder photo:

```text
website/assets/img/founder/muhammad-ilyas.png
```

## 7. Source Content

Main content sources:

- `source-materials/Website Documentation.docx`
- `D:/Work/04. NEK Services/Company Data/Website Data/NEK Services- Porto Website (2021).docx`
- `D:/Work/04. NEK Services/Company Data/Website Data/2024 Website data/Client Photos/Testimonials.docx`
- LinkedIn company profile public metadata
- Logged-in LinkedIn personal profile for Muhammad Ilyas

Strongest current headline direction:

```text
Clean books, clear reports, and CPA-ready financials for US businesses and CPA firms.
```

Useful supporting language:

- A cleaner accounting workflow.
- Reliable support for real accounting problems.
- Fewer month-end surprises.
- Clean records, clear reports, reliable deadlines.
- Practical accounting support with professional review and judgment.
- AI and automation can improve workflow speed, but reviewed accounting, reconciliations, controls, and human judgment remain central.

## 8. Services To Include

Core service categories:

- Bookkeeping
- Accounting cleanup
- Monthly accounting support
- Bank and credit card reconciliations
- Financial statement preparation
- Financial reporting
- Management reporting
- Budgeting and cash flow visibility
- Financial analysis
- CFO-style reporting support
- Offshore accounting support for CPA and bookkeeping firms
- Tax preparation support for partner firms
- Tax preparation
- Accounting
- Financial accounting
- Financial planning
- Payroll support

Detailed service points from the old Porto document:

- Chart of accounts setup
- Recording and categorizing transactions
- Invoicing and billing
- Accounts receivable and payable
- Inventory management
- Fixed assets and depreciation/amortization support
- Income and expense reports
- Receivable and payable aging reports
- Performance reports
- Ratio analysis, vertical analysis, and horizontal analysis
- Business plans and financial plans
- Customer, vendor, inventory, and other reconciliations

Software/tool references:

- QuickBooks
- Xero
- Wave
- Zoho Books
- FreshBooks
- Aplos
- Excel
- Asana
- Trello
- ClickUp
- Slack
- Google Workspace
- Drake
- TaxSlayer
- TaxWise
- Housecall Pro
- Toast POS
- Shopify
- Square

Use tool references where relevant, but do not overload the homepage.

## 9. Testimonials

Testimonials are real and approved for use according to the user.

Available testimonial people and matching:

- Sam/Samantha Mabry, Mabry Tax Advisory: match to `samantha-mabry.png` or `samantha mabry.png`.
- Marshea Mayfield, Financial Services Plus: match to `01. Marshea-W.jpg`; logo `Financial Service Plus LLC.png`.
- Dr. Cozette M. White, My Financial Home Enterprises: match to `cozette.png` or `04. Cozette-w.jpg`; logo `My Financial Home.png`.
- Carl Cyrius, The Oasis Firm: match to `carl-cyrius.png` or `03. Carl -W.jpg`; logo `the-oasis-firm.png`.
- Courtney Arrington, Arrington Solutions LLC: match to `courtney-arrington.png` or `02. COURTNEY.ARRINGTON-W.JPG`; logo `arrington-solutions.png`.

Current build uses all five in either homepage/services sections.

## 10. Competitor Research Summary

Competitors were reviewed only for inspiration, not copying.

Useful patterns:

- Bench: dedicated human support, organized software workflow, financial reporting visibility, tax readiness, proof, FAQs, clear demo CTA.
- Pilot: bookkeeping/tax/CFO service bundles, dashboards, communication, software integrations, industry-specific solutions.
- Botkeeper: firm capacity, secure and consistent work, onboarding, support, accounting-firm workflow.
- TOA Global: offshore accounting talent, firm growth, capacity, productivity, security, bookkeeping and accounting team support.

What to adapt for NEK:

- Strong problem section: behind books, mismatched reconciliations, unclear reports, unreliable numbers, deadline pressure.
- Separate sections for US businesses and CPA/bookkeeping firms.
- A more detailed services page.
- FAQs from old Porto document.
- Proof through testimonials/logos.
- Clear CTA to consultation.

## 11. Recommended Next Implementation Pass

Next pass should continue toward a closer Gerow-style rebuild. The content is now richer, so the remaining gap is mostly visual and structural similarity to the live site.

Recommended approach:

1. Keep the `website/` folder as the public static site.
2. Use `reference/live-site/*.html` and `reference/live-site/css/style.css`/`responsive.css` as layout references.
3. Rebuild clean static HTML that mirrors the live sections and classes where useful.
4. Keep only minimal necessary CSS from Gerow or recreate matching CSS in `website/assets/css/styles.css`.
5. Preserve the improved NEK details/content now in `website/`, but reshape the page sections around the Gerow reference structure.
6. Apply the official NEK palette.
7. Use local assets from `website/assets/`.
8. Add FAQ content to the services page or a later FAQ page if user approves.
9. Keep contact form email-only unless a provider is chosen later.

Important implementation constraint:

- The user wants close visual similarity to the live site, but static simplicity. Do not reintroduce Botble, Laravel, WordPress, Bootstrap-heavy dependencies, or CMS behavior unless explicitly requested.

## 12. Acceptance Criteria For Next Pass

The next visual pass should be considered successful when:

- Homepage visibly resembles the current live NEK/Gerow homepage structure.
- About, Services, and Contact pages resemble the live page structures.
- NEK logo, color palette, founder photo, testimonials, and real details are used.
- No demo names, fake addresses, fake phone numbers, fake email addresses, irrelevant menu pages, or unused blog/career/project links remain.
- All local links and image paths pass static audit.
- Desktop and mobile browser checks pass with no horizontal overflow or console errors.
- Copy is original NEK wording, informed by NEK materials and competitor structure, not copied from competitors.

## 13. Known Open Items

- Whether the user can provide the Botble `storage/` folder or current website media assets.
- Whether to add FAQ as a separate page or include it on Services.
- Whether to use the LinkedIn custom public URL exactly as `https://www.linkedin.com/company/nek-services/`.
- Whether XAMPP/Apache should be used for local preview later. Current static preview uses a simple local server.
- Final hosting and contact-form provider are undecided.

## 14. Latest Build Pass Notes

The latest build pass added stronger original NEK content:

- Homepage hero now leads with clean books, clear reports, and CPA-ready financials.
- Homepage includes a problem section: behind books, mismatched reconciliations, late reports, untrusted numbers, CPA-ready financials, and capacity support.
- Services page includes detailed service bullets for bookkeeping, reporting, budgeting, tax preparation support, CFO advisory, software/process support, payroll support, financial planning support, and financial accounting.
- Services page includes FAQ content adapted from the old Porto website document.
- About page now reflects the older NEK motto: accuracy, integrity, and timeliness.
- The shared topbar was updated from generic copy to address, email, LinkedIn, and consultation action.
- The footer was changed to a white/blue Gerow-like footer.
- Inner pages were adjusted to use large live-site-style page hero sections.
- Client photos were removed from the About team section and replaced with founder profile plus future team placeholders.
- Founder image was optimized from PNG to JPG.
- Mobile topbar was hidden to avoid crowding.
- Final static/code and browser audits passed after these changes. See `docs/FINAL_REVIEW.md`.
- User requested removal of "Free Consultation" wording and later asked to remove the extra Contact Us button. The regular Contact navigation link remains, but the prominent homepage CTA is now the Gerow-style "Our Services" pill.
- Homepage hero image was changed from client/partner collage to Muhammad Ilyas founder image.
