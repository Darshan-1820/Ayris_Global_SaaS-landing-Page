# Project: Ayris Global SaaS Landing Page - Improvement Session

## Current State
- **Safe Point 1** committed: `9d495f7` — Hero mobile fixes + NetworkVisual performance
- Dev server runs on `http://localhost:3000` (start with `npx next dev`)
- No co-authored-by in commits going forward

## Completed
- [x] Hero section mobile overlap fixed (responsive text scaling, proper padding)
- [x] Canvas hidden on small mobile (<640px) for performance
- [x] Canvas resize debounced (200ms) to fix lag on window drag
- [x] Tooltip position updates throttled (skip <2px moves, was 60fps React re-renders)
- [x] Node count reduced on small screens (15 vs 30 filler nodes)
- [x] Canvas aria-label added for accessibility
- [x] Debug comments removed from Hero.js
- [x] Focus ring indicators added on hero buttons

## Pending Tasks (agreed with user)

### 1. Logo Size (Navbar)
- Current: `w-9 h-9` (36px) in `components/Navbar.js` line 46
- Change to: `w-11 h-11` (44px)
- Straightforward, no risk

### 2. Product Cards Fully Clickable (ProductSuite)
- Currently only "Learn More" button navigates to product pages
- Wrap entire card in `<Link>` so clicking anywhere on the card navigates
- Keep "Learn More" as visual indicator
- File: `components/ProductSuite.js`

### 3. Hero Tooltip Zone Constraint (NetworkVisual)
- Problem: Tooltips appear at extreme edges (top, bottom, far right) — looks chaotic
- Solution agreed: Filter auto-selection to only pick nodes in a central bounding box (~40-80% width, 20-80% height). Nodes outside still render visually but never get tooltip-selected.
- Alternative discussed: Full hero graphic redesign — user said "we will discuss"
- File: `components/NetworkVisual.js`, the `selectionInterval` block

### 4. Text Weight / Visibility (NEEDS DISCUSSION BEFORE CHANGE)
- Problem: `font-light` (300) text like typing description feels too thin/invisible
- Proposal: Change `font-light` to `font-normal` (400) + darken `text-gray-600` to `text-gray-700`
- Affects: Hero.js typing text, ProductSuite descriptions, WhyChooseUs body, Consulting description, ContactSection description
- **Must commit separately** so user can roll back just this change independently
- User said "discuss before change"

### 5. Assure PAY Hero Animation
- User wants to improve it, needs to share reference images first
- User can drag/drop images into chat, paste screenshots, or provide file paths
- File: `components/assure-pay/` directory
- Waiting on user input

### Original Task List (from initial audit)
6. Fix responsive design across ALL sections (not just hero)
7. Fix accessibility and contrast issues across all components
8. Clean up unused code (About.js, home-options/ variants) + add SEO (sitemap, robots.txt, OG tags)
9. Run full build + lint verification after all changes

## Key Files Reference
- `components/Hero.js` — Hero section (MODIFIED)
- `components/NetworkVisual.js` — Canvas animation (MODIFIED)
- `components/Navbar.js` — Navigation bar (logo size change pending)
- `components/ProductSuite.js` — Product cards (clickable card change pending)
- `components/WhyChooseUs.js` — Core advantages section
- `components/Consulting.js` — Consulting services (has debug comment line 121-123)
- `components/Testimonials.js` — Marquee carousel (needs pause-on-hover)
- `components/Founder.js` — Founder quote section
- `components/ContactSection.js` — Contact info + form
- `components/ContactForm.js` — Form with validation
- `components/Footer.js` — Footer links
- `app/layout.js` — Root layout (needs OG meta tags)
- `app/globals.css` — Global styles + CSS variables
- `app/api/contact/route.js` — Email API (uses Resend)
