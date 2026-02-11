# Development Notes: Ayris Global SaaS Landing Page

A reference document of every problem encountered, how it was debugged, and how it was solved during the development and improvement of the Ayris Global landing page.

---

## Table of Contents
1. [Hero Section Performance & Mobile Fixes](#1-hero-section-performance--mobile-fixes)
2. [Canvas to Static Hero Migration](#2-canvas-to-static-hero-migration)
3. [Text Weight & Contrast Issues](#3-text-weight--contrast-issues)
4. [Accessibility Improvements](#4-accessibility-improvements)
5. [SEO: Sitemap, Robots, OG Metadata](#5-seo-sitemap-robots-og-metadata)
6. [Favicon Generation from Wide Logo](#6-favicon-generation-from-wide-logo)
7. [OG Image: Dynamic vs Static Approach](#7-og-image-dynamic-vs-static-approach)
8. [Assure PAT Responsive Breakage](#8-assure-pat-responsive-breakage)
9. [Turbopack File Watcher Issue](#9-turbopack-file-watcher-issue)
10. [Tailwind v4 CSS Generation Gotcha](#10-tailwind-v4-css-generation-gotcha)
11. [Global Horizontal Overflow Prevention](#11-global-horizontal-overflow-prevention)

---

## 1. Hero Section Performance & Mobile Fixes

**Problem:**
The original hero used a `<canvas>` element (`NetworkVisual.js`) rendering 30+ animated nodes with tooltips. Issues:
- On mobile (< 640px), the canvas caused lag and jank
- Resizing the browser window caused 60fps React re-renders (tooltip position updates)
- On small phones, hero text overlapped with the canvas content
- No accessibility — canvas had no `aria-label`

**How we found it:**
- Opened Chrome DevTools Performance tab — saw continuous layout thrashing from tooltip position state updates
- Tested on iPhone SE (375px) in device toolbar — text overflowed out of the hero section
- Lighthouse flagged missing accessible name on the canvas element

**Solution:**
- Debounced canvas resize handler (200ms) to stop lag on window drag
- Throttled tooltip position updates (skip moves < 2px) to reduce React re-renders from 60fps to ~5fps
- Reduced node count on small screens (15 vs 30 filler nodes)
- Added `aria-label` on canvas for screen readers
- Added responsive text scaling (`text-4xl sm:text-5xl md:text-6xl`) and proper padding to prevent overlap
- Hid canvas entirely on very small screens (< 640px) for performance
- Added focus ring indicators on hero buttons for keyboard navigation

**Files:** `components/Hero.js`, `components/NetworkVisual.js`

---

## 2. Canvas to Static Hero Migration

**Problem:**
Even after optimization, the canvas-based hero was fragile — tooltip zones were chaotic (appearing at extreme edges), performance was inconsistent across devices, and the animation didn't add meaningful value to the landing page experience.

**How we decided:**
- User feedback: tooltips at extreme edges (top, bottom, far right) looked chaotic
- Discussed full redesign vs constraint fix — opted for full replacement
- Prototyped 4 hero variants (HeroOption1-4) with different visual approaches
- User tested each live and picked HeroOption4

**Solution:**
- Replaced canvas with `HeroOption4.js` — a static hero with interactive mouse-glow effect and animated gradient blobs
- No canvas, no 60fps renders, no tooltip management
- Cleaned up old hero variants — deleted HeroOption1, 2, 3, and the variant switcher
- Only `hero-options/HeroOption4.js` remains

**Files:** `components/hero-options/HeroOption4.js` (new), deleted `Hero.js`, `NetworkVisual.js`

---

## 3. Text Weight & Contrast Issues

**Problem:**
`font-light` (300 weight) text across multiple sections was nearly invisible, especially on non-retina displays. The `text-gray-600` color on light backgrounds had poor contrast ratios.

**How we found it:**
- Visual audit on a non-retina external monitor — thin text was hard to read
- Chrome DevTools CSS overview showed many elements with font-weight 300
- Contrast ratio check showed `text-gray-600` (#475569) on white barely passes WCAG AA for body text

**Solution:**
- Changed `font-light` (300) to `font-normal` (400) across all affected sections
- Darkened `text-gray-600` to `text-gray-700` where needed for better contrast
- Applied consistently to: Hero typing text, ProductSuite descriptions, WhyChooseUs body, Consulting description, ContactSection description
- Committed separately so the change could be rolled back independently if user didn't like the visual impact

**Files:** `components/hero-options/HeroOption4.js`, `components/ProductSuite.js`, `components/WhyChooseUs.js`, `components/Consulting.js`, `components/ContactSection.js`

---

## 4. Accessibility Improvements

**Problem:**
Multiple accessibility gaps across the site:
- No focus indicators on interactive elements (buttons, links)
- Mobile hamburger menu had no ARIA attributes — screen readers couldn't tell if menu was open/closed
- Some images lacked descriptive alt text

**How we found it:**
- Ran keyboard-only navigation test (Tab through the page) — no visible focus rings
- Tested with screen reader (NVDA) — mobile menu state changes were not announced
- Lighthouse accessibility audit flagged missing labels

**Solution:**
- Added `focus:ring-2 focus:ring-blue-500 focus:ring-offset-2` on nav links, hero buttons, mobile menu toggle
- Added ARIA attributes to mobile menu: `aria-label="Toggle menu"`, `aria-expanded={isOpen}`, `aria-controls="mobile-menu"`, `aria-hidden={!isOpen}` on the menu panel
- Added `sr-only` labels where visual context was sufficient but screen readers needed text

**Files:** `components/Navbar.js`, `components/hero-options/HeroOption4.js`

---

## 5. SEO: Sitemap, Robots, OG Metadata

**Problem:**
The site had no sitemap, no robots.txt, and no Open Graph metadata — meaning search engines couldn't efficiently crawl the site, and social media shares showed no preview image or description.

**Solution:**
- Created `app/sitemap.js` using Next.js App Router convention — auto-generates XML sitemap at `/sitemap.xml` with all pages (home, assure-pat, ayris-pay, assure-pos) with priorities and change frequencies
- Verified `public/robots.txt` exists (allows all crawlers)
- Added full Open Graph metadata to `app/layout.js`:
  - `metadataBase: new URL("https://ayrisglobal.com")` for resolving relative URLs
  - `openGraph.images` pointing to `/og-image.png` (1200x630)
  - `twitter.card: "summary_large_image"` for large preview cards
  - Complete title, description, keywords, and author metadata

**Files:** `app/sitemap.js`, `app/layout.js`, `public/robots.txt`

---

## 6. Favicon Generation from Wide Logo

**Problem:**
The default Next.js favicon was a black triangle — not Ayris branding. Needed to create a proper favicon from the Ayris Global logo (`public/logo.png`).

**Challenge:**
The logo is 1280x681px (1.88:1 aspect ratio) — a wide rectangle. Favicons are square (16x16, 32x32, etc). Simply resizing would distort the logo or leave most of the square empty.

**How we debugged:**
- Generated initial favicon with `sharp` using `fit: 'contain'` — logo appeared very small in browser tab due to ~47% vertical padding
- Tested 4 different approaches live on localhost, swapping each into `app/icon.png`:
  1. **Tight** — less padding, logo shifted up. Looked compressed.
  2. **Cover** — center-cropped to fill square. Left edge + blue bars clipped.
  3. **White background** — full logo on white. Slightly more visible.
  4. **Cropped center** — zoomed into "A" mark. Bold but lost blue accent bars.
- Each variant was tested live in the browser tab by regenerating `app/icon.png`

**Solution:**
- **User picked: Original (contain, transparent bg, even padding)** — full logo centered in the square
- Created `app/icon.png` (512x512) using `sharp` with `fit: 'contain'` and transparent background
- Created `app/apple-icon.png` (180x180) for iOS home screen
- Deleted default `app/favicon.ico`
- Used `sharp` bundled with Next.js — no extra package installation needed
- Cleaned up all 4 temp variant files after selection

**Lesson:** Wide logos (> 1.5:1 aspect ratio) will always look small as favicons. For future: consider creating a dedicated square logomark (just the "A" icon) for favicons and app icons.

**Files:** `app/icon.png` (new), `app/apple-icon.png` (new), `app/favicon.ico` (deleted)

---

## 7. OG Image: Dynamic vs Static Approach

**Problem:**
Needed a branded Open Graph image (1200x630) for social media previews when sharing links.

**What we tried first (failed):**
Created `app/opengraph-image.js` using Next.js `ImageResponse` from `next/og`:
```js
import { ImageResponse } from "next/og";
export default function Image() {
  return new ImageResponse(/* JSX */);
}
```
- **First error:** 404 on the route. The Edge runtime (default) can't use `node:fs` for reading the logo file.
- **Fix attempt:** Added `export const runtime = "nodejs"` — still 404.
- **Root cause:** Next.js 16 with Turbopack doesn't properly support the `opengraph-image.js` file convention. The route simply doesn't get registered.

**What worked:**
Switched to a static approach — generate the image at build time using `sharp` + SVG overlay:
1. Created `scripts/gen-og.js` that:
   - Loads `public/logo.png` and resizes to 160x85px
   - Generates an SVG with: gradient background (blue-50 to orange-50), dot pattern, blue/orange radial gradient blobs, "Ayris Global" text, "Build payments that just work." headline, subtitle, 3 feature pills (PCI-DSS, < 5s Provisioning, Cloud-Native), watermark
   - Composites the logo onto the SVG using `sharp`
   - Outputs `public/og-image.png`
2. Referenced the static image in `layout.js` metadata

**Iterative refinements based on user feedback:**
- Subtitle too thin → changed font-weight 400 → 600, color #64748b → #475569
- "Ayris Global" text too small → font-size 28 → 40
- Logo too large → resized from 220px → 160px
- Logo+text too far from headline → moved logo top 80→110, text y 140→170

**Lesson:** Don't rely on Next.js file conventions for OG images with Turbopack in development. Static generation with `sharp` is more reliable and gives full control over the design.

**Files:** `scripts/gen-og.js` (new), `public/og-image.png` (new), `app/layout.js` (metadata), `app/opengraph-image.js` (created then deleted)

---

## 8. Assure PAT Responsive Breakage

**Problem:**
The Assure PAT product page hero was broken on multiple device sizes:

1. **On phones (iPhone XR 414px, iPhone SE 375px):**
   - Hero tagline text was cut off at the right edge
   - Description text was cut off
   - The PaymentRealTimeVisual (monitor + phone animation) was cropped
   - Users could not scroll horizontally to see hidden content

2. **On iPad Pro (1024px):**
   - The 2-column grid activated, putting text and visual side-by-side
   - Each column was only ~464px — far too narrow for the 680px visual
   - The phone mockup was cropped from the left side

**Root Cause Analysis:**

The `PaymentRealTimeVisual.js` component uses hardcoded pixel widths:
- Outer container: `w-[680px] h-[450px]`
- Monitor: `w-[540px] h-[360px]`
- Phone: `w-[170px] h-[340px]` with absolute positioning at `left-6`

These fixed dimensions cause two problems:
1. **Phone overflow:** 680px > 414px viewport. The visual pushes the page wider, and `overflow-hidden` on the hero section clips everything — including the text.
2. **iPad column overflow:** The grid `lg:grid-cols-2` activates at 1024px. With padding (96px) and gap (48px), each column = (1024 - 96 - 48) / 2 = ~464px. The 680px visual overflows its 464px column by 216px.

**What we tried that didn't work:**
1. **`hidden lg:block` on visual wrapper** — Intended to hide on mobile, show on desktop. But Turbopack didn't generate the `lg:block` CSS class (see [#9 Turbopack File Watcher Issue](#9-turbopack-file-watcher-issue)). The visual was hidden at ALL screen sizes.
2. **`lg:overflow-hidden`** — Same CSS generation issue. The responsive variant wasn't in the stylesheet.
3. **`transform: scale(0.65)` on iPad Pro** — Tried scaling the visual down within its column. Still looked cropped and awkward — a complex mockup at 65% scale is hard to read.

**Final Solution (3-part fix):**

1. **Hide visual on phones (< 768px):**
   - Added inline `<style>` tag with media query: `@media (max-width: 767px) { .pat-hero-visual { display: none !important; } }`
   - Used inline CSS instead of Tailwind classes because of the Turbopack CSS generation issue
   - Phones simply can't display a 680px monitor+phone mockup

2. **Push 2-column layout to wider screens:**
   - Changed grid from `lg:grid-cols-2` (1024px) to `xl:grid-cols-2` (1280px)
   - Changed `lg:gap-12` to `xl:gap-12`
   - Now: phones hide visual, tablets/iPad Pro show it below text (single column), desktops show it side-by-side

3. **Prevent horizontal overflow globally:**
   - Added `overflow-x: hidden` to body in `globals.css`
   - Added `overflow-x-hidden` on page root wrapper divs
   - Added `overflow-hidden` + `max-w-full` on PaymentRealTimeVisual's own containers

**Note:** Ayris Pay and POS pages did NOT have this problem — their visuals (`AyrisPayHeroVisual`, `POSHeroVisual`) use responsive sizing, so they scale naturally on all screen sizes.

**Files:** `app/products/assure-pat/page.js`, `components/PaymentRealTimeVisual.js`, `app/globals.css`, `app/products/ayris-pay/page.js`, `app/products/assure-pos/page.js`

---

## 9. Turbopack File Watcher Issue

**Problem:**
After editing source files (`.js`, `.css`), the Next.js dev server (Turbopack) was NOT serving the updated content. Changes saved to disk were confirmed present in the files, but `curl` to localhost showed the old HTML.

**How we discovered it:**
- Edited `assure-pat/page.js` to add `hidden lg:block` class
- Verified the file on disk had the change using `grep`
- Fetched the page via `curl` and searched the HTML — the new class was NOT present
- Tried touching files (updating modification timestamps) via PowerShell — still no change
- Waited 3, 5, 10 seconds — still serving old content

**Root Cause:**
Turbopack's file watcher was not detecting file changes made by external tools (the CLI editor writing directly to the filesystem). This appears to be a Turbopack-specific issue on Windows where file system events from non-editor processes aren't always picked up.

**Solution:**
Restarted the dev server:
```bash
taskkill //PID <npm-dev-pid> //T //F
npx next dev
```
After restart, all changes were immediately reflected in the served HTML.

**Lesson:** When using Turbopack (Next.js 15+) and changes aren't reflecting:
1. First check if the file on disk actually has your changes
2. If yes, the file watcher likely missed the event
3. Restart the dev server — it's the quickest fix
4. This is especially common when files are modified by external tools (scripts, CLI editors, git operations)

---

## 10. Tailwind v4 CSS Generation Gotcha

**Problem:**
Tailwind CSS utility classes added to source files weren't being generated in the CSS output. Specifically, `lg:block` and `lg:overflow-hidden` were in the HTML but had no corresponding CSS rules.

**How we discovered it:**
- Added `hidden lg:block` to an element — element was hidden at ALL screen sizes
- Fetched the generated CSS file and searched: `lg:block` was completely absent
- Other classes like `hidden`, `overflow-hidden` worked fine because they were already used elsewhere in the codebase

**Root Cause:**
Tailwind v4 (used in this project via `@import "tailwindcss"`) generates CSS on-demand based on scanning source files. When Turbopack's file watcher misses a change (see [#9](#9-turbopack-file-watcher-issue)), Tailwind doesn't rescan the file and doesn't generate CSS for newly added utility classes.

The classes that were already used elsewhere in the codebase worked because their CSS was already generated. Only NEW classes (first-time use in the codebase) failed.

**Solution:**
For the immediate fix, used inline `<style>` tags with raw CSS media queries instead of Tailwind responsive utilities:
```jsx
<style>{`
  @media (max-width: 767px) {
    .pat-hero-visual { display: none !important; }
  }
`}</style>
```
This bypasses Tailwind entirely — the CSS is always present regardless of Tailwind's scanning.

For long-term: restart the dev server after adding new Tailwind classes that don't exist anywhere else in the codebase.

**Lesson:** If a Tailwind class isn't working, check if it actually exists in the generated CSS file (fetch it via browser DevTools Network tab). If it's missing, the class was never scanned/generated. Restart the dev server.

---

## 11. Global Horizontal Overflow Prevention

**Problem:**
Multiple elements across the site could potentially cause horizontal overflow on mobile — hardcoded pixel widths, absolutely positioned elements with blur effects, animated floating elements. Each one needed individual `overflow-hidden` treatment.

**Solution:**
Added a global safety net:
```css
/* globals.css */
body {
  overflow-x: hidden;
}
```
Plus `overflow-x-hidden` on individual page root wrappers.

This prevents ANY element from creating a horizontal scrollbar, regardless of its width. It's a common best practice for landing pages and marketing sites where horizontal scroll is never intended.

**Tradeoff:** If a developer accidentally makes content overflow, it will be silently clipped instead of showing a scrollbar. This is acceptable for a landing page but might hide bugs in more complex applications.

**Files:** `app/globals.css`, `app/products/assure-pat/page.js`, `app/products/ayris-pay/page.js`, `app/products/assure-pos/page.js`

---

## 12. Assure PAY → Ayris Pay Rebrand

**Problem:**
The product "Assure PAY" was being rebranded to "Ayris Pay". All references across the codebase needed updating — display text, routes, directories, component names, and SEO metadata.

**Scope of Changes:**
- **Directories:** `app/products/assure-pay/` → `app/products/ayris-pay/`, `components/assure-pay/` → `components/ayris-pay/` (via `git mv`)
- **Component files renamed:** `WhatIs_AssurePay.js` → `WhatIs_AyrisPay.js`, `Features_AssurePay.js` → `Features_AyrisPay.js`, `WhyAssurePay.js` → `WhyAyrisPay.js`
- **12 files updated:** page.js, layout.js, 3 component files, ProductSuite.js, Footer.js, SystemEcosystem.js, sitemap.js, README.md, Notes.md
- **Function names, headings, TypingText content, nav links, CTA text, metadata** — all changed from "Assure PAY" to "Ayris Pay"

**Lesson:** When rebranding a product, use `git mv` for directories first, then update all imports and display text. Run `npx next build` after to catch any broken imports. Use `grep` to sweep for any remaining old references.

**Files:** Too many to list individually — see commit diff.

---

## 13. Ayris Pay Hero Visual: Phone Mockup with 3D Tilt

**Problem:**
The old Ayris Pay hero visual (`PaymentControlVisual.js`) was an abstract animation — a floating payment card token with orbiting rule chips. It didn't showcase the actual product UI.

**Solution:**
Replaced with `AyrisPayHeroVisual.js` — a phone mockup carousel with interactive 3D tilt:

1. **Phone mockup swipe:** Two app screenshots (`Discover_Card.png` and `Diners_Card.png`, 1280x960 landscape with phone frame baked in) swap every 3 seconds using Framer Motion `AnimatePresence`
2. **Scale crop:** `scale-[1.2]` on the images zooms in to crop the empty space around the phone device frame
3. **3D tilt on hover:** Mouse position tracked via `useMotionValue`, mapped to `rotateX`/`rotateY` transforms (±8 degrees) with spring physics (`stiffness: 200, damping: 30`). Container uses `perspective: 1000px` and `preserve-3d`
4. **Shine overlay:** A gradient overlay shifts direction based on mouse X position, creating a light reflection effect during tilt
5. **Responsive:** Hidden on phones (`hidden md:block`) because landscape images make the phone device appear tiny on small screens

**Enhancement options tested and rejected:**
- Stat counter cards (floating glassmorphism cards) — looked generic/"vibe coded"
- Glow pulse (breathing blue glow + orange burst on swap) — not selected
- Connection lines + mini icons (dotted lines to shield/clock/lock) — not selected

**Light/dark theme toggle attempted and reverted:**
- Built a toggle that switched the hero to dark background with light-themed screenshots
- Issues: light images were portrait (720x1280) vs dark landscape (1280x960) — aspect ratio mismatch caused layout jumps
- User didn't like the effect, so reverted entirely. Deleted unused light theme images.

**Files:** `components/ayris-pay/AyrisPayHeroVisual.js` (new), `components/ayris-pay/PaymentControlVisual.js` (deleted), `app/products/ayris-pay/page.js`
