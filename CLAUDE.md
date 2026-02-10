# Project: Ayris Global SaaS Landing Page

## Repository
- **GitHub:** https://github.com/Darshan-1820/Ayris_Global_SaaS-landing-Page.git
- **Branch:** `main`

## Current State
- Latest commit: `b8f39ce` — README + full project documentation
- Dev server: `http://localhost:3000` (start with `npx next dev`)
- No co-authored-by in commits
- Hero is now `HeroOption4.js` (static with interactive glow + animated blobs — no canvas/NetworkVisual)

## Completed (Previous Sessions)
- [x] Hero section mobile overlap fixed (responsive text scaling, proper padding)
- [x] Canvas replaced with HeroOption4 (interactive glow, gradient blobs, no more canvas)
- [x] Old hero variants cleaned up — only `hero-options/HeroOption4.js` remains
- [x] Logo size increased to `w-11 h-11` (44px) in `Navbar.js:46`
- [x] Product cards fully clickable — entire card wrapped in `<Link>` (`ProductSuite.js:83`)
- [x] Text weight fixed — `font-normal` applied across Hero, ProductSuite, WhyChooseUs, Consulting, ContactSection
- [x] Focus ring indicators on nav, hero buttons, mobile menu
- [x] Mobile menu accessibility (aria-label, aria-expanded, aria-controls, aria-hidden)
- [x] OG text metadata added to `layout.js` (openGraph + twitter)
- [x] SEO: `app/sitemap.js` created with all pages
- [x] SEO: `public/robots.txt` exists
- [x] Testimonials marquee fixed

## Completed (Current Session — Feb 10, 2026)

### Favicon
- [x] Deleted default Next.js `app/favicon.ico` (was the black Next.js triangle, not Ayris branding)
- [x] Used `public/logo.png` (1280x681, orange "A" + blue accent bars) as source
- [x] Generated icons using `sharp` (bundled with Next.js, no extra install needed)
- [x] Created `app/icon.png` (512x512, contain mode, transparent bg) — Next.js App Router auto-serves as favicon
- [x] Created `app/apple-icon.png` (180x180, resized from icon.png) — for iOS home screen
- [x] Tested 4 styles live on localhost:3000, swapping each into `app/icon.png`:
  1. **Tight** — less padding, logo shifted up. Looked compressed in tab.
  2. **Cover** — center-cropped to fill square. Left edge + bottom blue bar clipped. Felt cropped.
  3. **White background** — full logo on white. Slightly more visible but similar to tight.
  4. **Cropped center** — zoomed into central "A" mark. Bold but lost blue bars.
  - **User picked: Original (contain, transparent bg, even padding)** — full logo centered in square
- [x] Cleaned up all temp files: `icon-cover.png`, `icon-tight.png`, `icon-white.png`, `icon-cropped-center.png`
- Note: Logo is 1.88:1 wide — will always appear small in 16x16 tab. A dedicated square logomark would help in future.

### OG Image
- [x] Attempted dynamic `app/opengraph-image.js` (ImageResponse from next/og) — failed with Next.js 16 Turbopack (404 on route, even with `runtime: "nodejs"`)
- [x] Switched to static approach: generated `public/og-image.png` (1200x630) using sharp + SVG overlay
  - Design: gradient bg (blue-50 → orange-50), dot pattern, blue/orange blobs, Ayris logo, headline with blue gradient text, subtitle (semibold, #475569), 3 feature pills, ayrisglobal.com watermark
- [x] Subtitle text made bolder per user request (font-weight 400 → 600, color #64748b → #475569)
- [x] Added "Ayris Global" text next to logo in OG image
- [x] Adjusted per user feedback: bigger text (font-size 28 → 40), smaller logo (220px → 160px)
- [x] Created `scripts/gen-og.js` helper script for regenerating OG image
- [x] Tightened spacing: moved logo+text closer to headline (top 80→110, text y 140→170)
- [x] Added `metadataBase: new URL("https://ayrisglobal.com")` to `layout.js`
- [x] Added `openGraph.images` and `twitter.images` referencing `/og-image.png` in `layout.js`
- [x] Verified image serves correctly at `localhost:3000/og-image.png` (200 OK, 110KB)
- [ ] **Needs dev server restart** for Turbopack to pick up metadata changes — verify og:image in page source after restart
- [x] Cleaned up: removed broken `app/opengraph-image.js`, removed `temp-response.txt`

### Assure PAT Mobile & Tablet Responsiveness Fix

**Problem:**
The Assure PAT product page hero section was broken on mobile and tablet devices:
1. On phones (iPhone XR 414px, iPhone SE 375px): Hero text ("Automated payment acceptance testi...") was cut off at the right edge. Description text also cut off. The PaymentRealTimeVisual (monitor + phone animation) was cropped on the right. Users could not scroll to see the hidden content.
2. On iPad Pro (1024px): The 2-column grid activated (`lg:grid-cols-2`), putting text and visual side-by-side. But each column was only ~464px — far too narrow for the 680px visual. The phone mockup was cropped from the left side.

**Root Cause (two separate issues):**

1. **Phone issue — visual too wide for viewport:**
   - `PaymentRealTimeVisual.js` uses hardcoded pixel widths: outer container `w-[680px]`, monitor `w-[540px] h-[360px]`, phone `w-[170px]`
   - 680px is way wider than a 414px phone screen (even with padding subtracted)
   - The only scaling was `scale-90` (still 612px effective) — doesn't help
   - The hero section had `overflow-hidden` which clipped BOTH the overflowing visual AND all the hero text

2. **iPad Pro issue — 2-column grid too early:**
   - The grid used `lg:grid-cols-2` which activates at 1024px
   - At 1024px with padding (px-6 + px-12 = 96px total) and gap (48px), each column = ~464px
   - The 680px visual cannot fit in 464px, so it overflows and gets cropped by `overflow-hidden`
   - We tried CSS `transform: scale(0.65)` to shrink the visual, but it still looked cropped and awkward

**Solution (final, what's currently applied):**

- [x] **Hide visual on phones (< 768px):** Added `<style>` media query `@media (max-width: 767px) { .pat-hero-visual { display: none !important; } }` in `assure-pat/page.js`
  - Used inline `<style>` tag instead of Tailwind `hidden lg:block` because Turbopack wasn't regenerating CSS for new utility classes (file watcher issue — edits made by external tools weren't triggering CSS rebuild)
  - The 680px monitor+phone mockup simply cannot work on phone screens

- [x] **Push 2-column layout to wider screens:** Changed hero grid from `lg:grid-cols-2` to `xl:grid-cols-2` and `lg:gap-12` to `xl:gap-12` in `assure-pat/page.js:92`
  - Below 1280px (phones + tablets + iPad Pro): single column layout — text on top, visual below with full width
  - 1280px+ (desktops): side-by-side layout — text left, visual right
  - At 1280px each column is ~568px. Visual at 680px overflows slightly but is clipped cleanly by `overflow-hidden` on the section — the main content (monitor screen + phone) remains visible

- [x] **Prevent horizontal scroll globally:** Added `overflow-x: hidden` to body in `globals.css:43`
  - Prevents any element from creating a horizontal scrollbar on any page

- [x] **Added `overflow-x-hidden`** on page root wrapper div in all 3 product pages for extra safety

- [x] **Added `overflow-hidden` and `max-w-full`** to PaymentRealTimeVisual's own container (`PaymentRealTimeVisual.js:40,47`)
  - Safety measure so the visual can't break parent layout even if visible

**What we tried that didn't work:**
1. `hidden lg:block` on visual wrapper — Turbopack didn't generate `lg:block` CSS (file watcher issue). Visual was hidden at ALL sizes including desktop.
2. `lg:overflow-hidden` instead of `overflow-hidden` — Same Tailwind CSS generation issue, class wasn't in the CSS output.
3. `transform: scale(0.65)` on iPad Pro — Visual still appeared cropped and awkward. Scaling down a complex mockup to 65% looks bad.
4. Dev server had to be **restarted** (`taskkill` + `npx next dev`) for any changes to take effect — Turbopack's file watcher wasn't detecting external edits.

**Assure PAY and POS pages:**
- Their visuals (`PaymentControlVisual`, `POSHeroVisual`) use `w-full` with relative positioning, so they scale naturally on all screen sizes — no fix needed for them
- Added `overflow-x-hidden` on their root wrappers and kept `overflow-hidden` on hero sections for consistency

**Files Changed:**
1. `app/products/assure-pat/page.js` — media query style tag (hide visual < 768px), grid `xl:grid-cols-2` + `xl:gap-12`, `overflow-x-hidden` on root
2. `components/PaymentRealTimeVisual.js` — `overflow-hidden` + `max-w-full` on containers
3. `app/globals.css` — `overflow-x: hidden` on body
4. `app/products/assure-pay/page.js` — `overflow-x-hidden` on root, `overflow-hidden` on hero section
5. `app/products/assure-pos/page.js` — `overflow-x-hidden` on root, `overflow-hidden` on hero section

## Pending Tasks

### 2. Assure PAY Hero Animation
- User wants to improve it, needs to share reference images first
- File: `components/assure-pay/` directory
- Waiting on user input

### 3. Responsive Design Audit (all sections)
- Hero is done, remaining sections need audit
- Sections: ProductSuite, WhyChooseUs, Consulting, Testimonials, Founder, ContactSection, Footer

### 4. Accessibility & Contrast Audit
- Some sections still need review for contrast, focus states, screen reader support

### 5. Cleanup
- `Consulting.js:121-123` — debug comment still present
- Check for any other dead code or unused files

### 6. Full Build + Lint Verification
- Run `npx next build` and `npx next lint` to confirm zero errors before deploy

## Key Files Reference
- `components/hero-options/HeroOption4.js` — Hero section (active hero)
- `components/Navbar.js` — Navigation bar
- `components/ProductSuite.js` — Product cards (fully clickable)
- `components/WhyChooseUs.js` — Core advantages section
- `components/Consulting.js` — Consulting services (has debug comment L121-123)
- `components/Testimonials.js` — Marquee carousel
- `components/Founder.js` — Founder quote section
- `components/ContactSection.js` — Contact info + form
- `components/ContactForm.js` — Form with validation
- `components/Footer.js` — Footer links
- `components/TypingText.js` — Typing animation (used in Consulting + Founder)
- `components/ScrollReveal.js` — Scroll-triggered fade-in wrapper
- `app/layout.js` — Root layout with OG metadata + og:image configured
- `app/page.js` — Home page composition
- `app/globals.css` — Global styles + CSS variables
- `app/icon.png` — Favicon (512x512, from logo.png)
- `app/apple-icon.png` — Apple Touch Icon (180x180)
- `app/sitemap.js` — Auto-generated sitemap
- `app/api/contact/route.js` — Email API (uses Resend)
- `public/logo.png` — Ayris Global logo (1280x681, orange A + blue bars)
- `public/founder.png` — Founder photo
- `public/og-image.png` — OG image for social sharing (1200x630)
- `public/robots.txt` — Robots file

## Product Pages
- `app/products/assure-pat/` — Assure PAT product page
- `app/products/assure-pay/` — Assure PAY product page
- `app/products/assure-pos/` — Assure POS product page
- `components/assure-pat/` — PAT components (ROI_Spotlight, WhyAssurePAT, design-options/, features-options/)
- `components/assure-pay/` — PAY components (Features, PaymentControlVisual, WhatIs, Why)
- `components/assure-pos/` — POS components (Features, POSHeroVisual, WhatIs, Why)
