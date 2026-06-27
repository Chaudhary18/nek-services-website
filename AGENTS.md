# NEK Services Website Codex

## Project Intent

Build and maintain a fast static website for NEK Services, focused on accounting, bookkeeping, financial reporting, tax support, and outsourced accounting services for small businesses and accounting/tax firms.

Current user preference: the final website should copy the structure and feel of the live NEK/Gerow website as closely as practical, while keeping the code static and clean. The current `website/` is a working first draft, but the next major pass should use `reference/live-site/` as the main visual/structural reference.

## Build Rules

- Keep the public site in `website/`.
- Keep planning and project memory in `docs/`.
- Treat `source-materials/` as reference material only.
- Ignore the Porto WordPress package unless the user explicitly asks about it.
- Prefer plain HTML, one CSS file, and one JS file.
- Do not add a framework, build system, CDN, or package dependency unless the user approves it.
- Keep copy professional, concise, and trust-focused.
- Preserve a premium corporate feel inspired by the current Gerow/NEK site, but remove demo clutter.
- Use the official palette: `#497acc`, `#84c2ff`, `#ebe9e9`, `#86ee99`, `#ffffff`.
- Use `docs/WEBSITE_HANDOFF.md` as the main context file before major changes.

## Verification

- Check pages in a browser after meaningful visual edits.
- Verify desktop and mobile layouts.
- Check local links, asset paths, form field behavior, and console errors.
- Keep SEO refinement as a later phase unless explicitly requested.
