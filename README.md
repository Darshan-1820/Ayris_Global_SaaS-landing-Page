# Ayris Global - SaaS Landing Page

A modern, responsive landing page for **Ayris Global**, a payment infrastructure and consulting company. Built with Next.js 16, React 19, Tailwind CSS v4, and Framer Motion.

**Live:** [ayris-global-saa-s-landing-page.vercel.app](https://ayris-global-saa-s-landing-page.vercel.app/)

---

## What's in the Landing Page

### Homepage (`/`)

| Section | Description |
|---------|-------------|
| **Hero** | "This is Ayris Global" branded opener with animated gradient blobs, interactive mouse-following glow, and staggered text animations |
| **Product Suite** | Three clickable product cards (Assure PAT, Assure PAY, Assure POS) linking to individual product pages |
| **Why Choose Us** | Core advantages with icon-based feature cards |
| **Consulting** | Payment consulting services with spotlight hover-effect cards on a dark background |
| **Testimonials** | Auto-scrolling marquee of client testimonials with edge fade gradients |
| **Founder** | Krishna Mohan's quote with typing animation, photo, and LinkedIn link |
| **Contact** | Contact form (powered by Resend API) + direct email/phone info |
| **Footer** | Navigation links, legal links, and social links |

### Product Pages

| Page | Route | What it covers |
|------|-------|----------------|
| **Assure PAT** | `/products/assure-pat` | Automated payment acceptance testing platform. Features, ROI spotlight, demo booking form |
| **Assure PAY** | `/products/assure-pay` | Programmable payment controls for spending management. Features and benefits |
| **Assure POS** | `/products/assure-pos` | Mobile SoftPOS simulator for terminal testing. Features with phone mockup visual |

Each product page has its own navigation bar, hero section with visual, feature breakdowns, and a CTA section.

---

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| [Next.js](https://nextjs.org) | 16.1.6 | React framework with App Router and Turbopack |
| [React](https://react.dev) | 19.2.3 | UI library |
| [Tailwind CSS](https://tailwindcss.com) | v4 | Utility-first CSS framework |
| [Framer Motion](https://www.framer.com/motion) | 12.31.0 | Animations (scroll reveals, staggered entrances, path drawing) |
| [Lucide React](https://lucide.dev) | 0.563.0 | Icon library |
| [Resend](https://resend.com) | 6.9.1 | Email API for the contact form |
| [clsx](https://github.com/lukeed/clsx) + [tailwind-merge](https://github.com/dcastil/tailwind-merge) | - | Conditional class name utilities |

---

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

```bash
git clone https://github.com/Darshan-1820/Ayris_Global_SaaS-landing-Page.git
cd Ayris_Global_SaaS-landing-Page
npm install
```

### Environment Variables

Create a `.env.local` file in the project root:

```env
# Required for the contact form to send emails
RESEND_API_KEY=your_resend_api_key_here

# The email address that receives contact form submissions
# Defaults to contact@ayrisglobal.com if not set
CONTACT_EMAIL=support@ayrisglobal.com
```

> **Note:** Without `RESEND_API_KEY`, the contact form will show a fallback message asking users to email directly. The site works fine otherwise.

### Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

---

## How to Change the Contact Email

The contact email appears in **3 places**. To change it:

### 1. Environment Variable (Contact Form API)

In your `.env.local` (or Vercel environment settings):

```env
CONTACT_EMAIL=your-new-email@example.com
```

This controls where the contact form sends submissions. The API route is at `app/api/contact/route.js` (line 108).

### 2. Contact Section (Direct mailto link)

File: `components/ContactSection.js` (line 25)

```js
href="mailto:contact@ayrisglobal.com?subject=Inquiry&body=..."
```

Change `contact@ayrisglobal.com` to your email.

### 3. Assure PAT Demo Form (mailto link)

File: `app/products/assure-pat/page.js` (line 26)

```js
window.location.href = `mailto:contact@ayrisglobal.com?subject=${subject}&body=${body}`;
```

Change `contact@ayrisglobal.com` to your email.

### Fallback references

The API route at `app/api/contact/route.js` also mentions `contact@ayrisglobal.com` in error messages (lines 46 and 128). Update these if you change the primary email.

---

## Project Structure

```
app/
  layout.js              # Root layout with SEO meta tags (OG, Twitter Card)
  page.js                # Homepage
  sitemap.js             # Dynamic sitemap generation
  api/contact/route.js   # Contact form API (Resend + rate limiting)
  products/
    assure-pat/          # Assure PAT product page + layout (SEO)
    assure-pay/          # Assure PAY product page + layout (SEO)
    assure-pos/          # Assure POS product page + layout (SEO)

components/
  hero-options/
    HeroOption4.js       # Homepage hero (animated blobs + mouse glow)
  assure-pat/            # PAT-specific components (features, ROI, etc.)
  assure-pay/            # PAY-specific components
  assure-pos/            # POS-specific components
  Navbar.js              # Global navbar (hidden on product pages)
  ProductSuite.js        # Product cards grid (fully clickable)
  WhyChooseUs.js         # Feature cards section
  Consulting.js          # Consulting services with spotlight cards
  Testimonials.js        # Marquee testimonial carousel
  Founder.js             # Founder quote with typing animation
  ContactSection.js      # Contact info + form wrapper
  ContactForm.js         # Form with validation and accessibility
  Footer.js              # Site footer
  ScrollReveal.js        # Scroll-triggered fade-in wrapper
  TypingText.js          # Character-by-character typing animation

public/
  logo.png               # Ayris Global logo
  founder.png            # Founder photo
  robots.txt             # Search engine crawl directives
```

---

## Deployment

The site is deployed on **Vercel**. Push to `main` to trigger automatic deployment.

Make sure to set `RESEND_API_KEY` and `CONTACT_EMAIL` in your Vercel project's Environment Variables (Settings > Environment Variables).
