# AY Black — Bespoke Tailoring Website

A premium, production-ready website for **AY Black** ("I Sew. I Design. I Combine.") built with Next.js 16, TypeScript, and Tailwind CSS v4.

---

## 1. Tech Stack

- **Next.js** (App Router, TypeScript)
- **Tailwind CSS v4**
- **next/image** for optimized, lazy-loaded images
- **Netlify Forms** for the booking form (no backend/server code needed)
- Fully responsive, mobile-first
- SEO: metadata, Open Graph, Twitter Cards, JSON-LD structured data, `sitemap.xml`, `robots.txt`

---

## 2. Project Structure

```
src/
  app/
    page.tsx              Home
    about/page.tsx         About
    services/page.tsx      Services
    portfolio/page.tsx     Portfolio (gallery + lightbox)
    testimonials/page.tsx  Testimonials
    booking/page.tsx       Booking form
    faq/page.tsx           FAQ accordion
    contact/page.tsx       Contact + Google Map
    sitemap.ts             auto-generates /sitemap.xml
    robots.ts              auto-generates /robots.txt
    layout.tsx              Navbar, Footer, WhatsApp button, SEO/meta, JSON-LD
    globals.css             brand theme (black & gold), animations
  components/               Navbar, Footer, ServiceCard, PortfolioGallery,
                              TestimonialCard, FAQAccordion, BookingForm,
                              WhatsAppButton, BackToTop, Loader, etc.
  data/                      ALL editable content lives here as JSON
    site.json                 business info, phone, WhatsApp, Instagram, hours
    services.json             service cards
    portfolio.json             gallery items
    testimonials.json          reviews (+ optional video URL)
    faq.json                   FAQ accordion content
public/
  images/                    all images (see section 4 below)
  forms.html                 static form so Netlify can detect the booking form
netlify.toml                 Netlify build config
```

---

## 3. Updating Content Later (no coding needed)

All editable content lives in `src/data/*.json`. Edit the matching JSON file and redeploy.

| What you want to change         | File to edit                  |
|---------------------------------|--------------------------------|
| Business name, phone, WhatsApp, email, address, hours, Instagram | `src/data/site.json` |
| Services offered                | `src/data/services.json` |
| Portfolio photos & categories   | `src/data/portfolio.json` |
| Customer reviews / video testimonials | `src/data/testimonials.json` |
| FAQ questions & answers         | `src/data/faq.json` |

Example — adding a new service in `services.json`:
```json
{
  "id": "new-service",
  "title": "Your New Service",
  "description": "A short description of the service.",
  "icon": "shirt"
}
```
Available icon names: `shirt`, `briefcase`, `users`, `pencil`, `ruler`, `fabric`.

Example — adding a new portfolio image in `portfolio.json`:
```json
{
  "id": "p9",
  "title": "New Outfit",
  "category": "Native Wear",
  "image": "/images/portfolio/your-new-photo.jpg"
}
```

---

## 4. Where To Put Your Images

All images go in `public/images/`. **Placeholder images are currently in place — replace them with real photos before going live.**

| Image | Path | Recommended size |
|---|---|---|
| Hero background | `public/images/hero-bg.jpg` | 1920x1080 (landscape) |
| About page portrait | `public/images/about-portrait.jpg` | 1000x1250 (portrait) |
| Social share image (Open Graph) | `public/images/og-image.jpg` | 1200x630 |
| Portfolio photos | `public/images/portfolio/your-file.jpg` | 900x1200 (portrait), then update `portfolio.json` |
| Testimonial client photos | `public/images/testimonials/your-file.jpg` | 400x400 (square) |
| Logo (optional) | `public/images/logo/logo.png` | transparent PNG, 200x200+ |

Drop your file in the right folder, then point to it from the matching JSON file (or directly in the component, for hero/about/og images).

**Tip:** compress images before uploading (TinyPNG or Squoosh) — `next/image` optimizes further automatically, but starting smaller keeps builds fast.

---

## 5. Connecting the Booking Form (Netlify Forms — already wired, free)

The booking form already works with **Netlify Forms**, Netlify's free built-in form backend — no API keys, no backend code, no monthly fee.

**How it works:**
1. `public/forms.html` contains a hidden static copy of the form so Netlify's build-time scanner can detect it (Next.js renders the real form with JavaScript, which Netlify can't scan directly — this static file solves that).
2. When a visitor submits the real form on `/booking`, it's POSTed to Netlify Forms via AJAX (see `src/components/BookingForm.tsx`).
3. Every submission appears in your **Netlify dashboard -> your site -> Forms -> booking**.

**To get email notifications for every booking:**
1. Go to your site in Netlify -> **Forms** -> **Settings and usage** -> **Form notifications**.
2. Click **Add notification** -> **Email notification**.
3. Enter the business email (e.g. `info@ayblackfashion.com`) and save.

Every new booking lands in that inbox automatically, free on Netlify's free tier (up to 100 submissions/month; paid plans raise this).

**Alternative (if not deploying on Netlify):** swap the `fetch` call in `BookingForm.tsx` to post to Formspree, Web3Forms, or EmailJS instead — all have free tiers and similar one-line integration.

---

## 6. Deploying to Netlify

**Option A — Drag and drop (fastest, no Git required):**
1. Run `npm install` then `npm run build` locally.
2. Go to https://app.netlify.com/drop
3. Drag the whole project folder onto the page.
4. Netlify auto-detects the `@netlify/plugin-nextjs` config in `netlify.toml` and deploys it correctly.

**Option B — Git-connected deploy (recommended for ongoing edits):**
1. Push this project to a GitHub repository.
2. In Netlify: **Add new site -> Import an existing project -> connect to GitHub** -> pick the repo.
3. Build settings already set in `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `.next`
4. Click **Deploy site**. Every future `git push` auto-redeploys.

---

## 7. Connecting Your Custom Domain

1. Buy a domain (Namecheap, GoDaddy, or directly through Netlify).
2. In Netlify: **Site settings -> Domain management -> Add a domain**.
3. Enter your domain (e.g. `ayblackfashion.com`).
4. Netlify gives you DNS records (automatic if bought through Netlify).
   - External registrar: copy the nameservers Netlify gives you and update them at your registrar, OR add the A/CNAME records Netlify provides under your registrar's DNS settings.
5. Netlify auto-provisions a free HTTPS certificate (Let's Encrypt) once DNS propagates — usually within a few hours.
6. Once live, update `siteUrl` in `src/data/site.json` to your real domain so SEO metadata, sitemap, and Open Graph tags point to the correct URL, then redeploy.

---

## 8. Local Development

```bash
npm install
npm run dev
```
Open http://localhost:3000

```bash
npm run build   # production build
npm run start   # run the production build locally
```

---

## 9. SEO Checklist

- [x] Unique title and meta description per page
- [x] Open Graph + Twitter Card tags (edit `og-image.jpg` to a real branded image)
- [x] JSON-LD structured data: ClothingStore schema (layout) + FAQPage schema (FAQ page)
- [x] `sitemap.xml` auto-generated at `/sitemap.xml`
- [x] `robots.txt` auto-generated at `/robots.txt`
- [ ] Update `siteUrl` in `site.json` to your real live domain once deployed
- [ ] Submit the sitemap URL to Google Search Console after launch

---

## 10. Notes

- WhatsApp number is set in `src/data/site.json` — update there and it updates everywhere automatically.
- Instagram link is wired in the Footer and Contact page social icons.
- All placeholder images (gold-bordered, labeled e.g. "PORTFOLIO 3") must be replaced with real photography before launch.
