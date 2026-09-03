# Sunrise Diamond & Jewels — Website

A premium, Next.js (App Router) + TypeScript + Tailwind CSS v4 website for
Sunrise Diamond & Jewels Pvt Ltd.

## Pages
- `/` — Home
- `/products` — Filterable product catalog (category / metal / occasion) with a
  WhatsApp "Enquire" button on every item
- `/about` — Brand story, values, milestones
- `/book-us` — Video consultation / in-store visit booking form (hands off to WhatsApp)

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

To build for production:

```bash
npm run build
```

The production build is a static export written to `out/`. It can be hosted on
Windows Plesk/IIS without Node.js or iisnode. Upload the contents of `out/`
to the Plesk document root (`httpdocs`). The build automatically copies
`web.config` into `out/`. Ensure the IIS URL Rewrite feature is enabled; the
included `web.config` maps clean routes such as `/about/` to their generated
`index.html` files.

For Plesk, do not configure this site as a Node.js application and do not use
`app.js` as an iisnode startup file. The site is exported as static HTML, CSS,
JavaScript, and image assets.

## Git deployment on Plesk Windows

Configure the domain's document root as the repository's `out` folder, for
example `httpdocs\out`. Then run these commands from the repository folder
using the branch you want to publish:

The Plesk server must have Node.js `20.9.0` or newer available to run the
build. Node.js is not needed to serve the finished static files.

```bat
git fetch origin
git checkout YOUR_BRANCH
git pull --ff-only origin YOUR_BRANCH
npm ci
npm run build
```

The site is ready when `out\index.html` and `out\web.config` exist. If the
Plesk plan requires the document root to remain `httpdocs`, copy the contents
of `out\` into `httpdocs\` after `npm run build`, including `web.config`.
Do not upload the repository root as the website root, because the Next source
files are not the deployable site.

## Environment and ports

This application currently has no secrets or runtime environment variables.
`.env.example` documents optional `PORT` and `HOSTNAME` values for the
Node.js/SSR fallback in `app.js`; it is not required for the static IIS build.
For static hosting, configure the public HTTP/HTTPS bindings in Plesk. IIS
`web.config` does not select a public port.

## What's new in this version

- **Animated hero carousel** on the homepage — 3 auto-rotating slides (New Season,
  Bridal Edit, Gifting), fade/slide text transitions, dot + arrow navigation
- **Draggable category slider** ("Shop by Category") — swipe/drag on mobile and desktop
- **Promo banner grid** (large banner + two stacked banners) for mangalsutra /
  pendant / men's jewellery pushes
- **"Shop However Suits You"** section — Video Call Stylist / Store Visit / Home
  Try-On, each linking to the booking page
- **"Straight From Our Customers"** video-story carousel — center-elevated card
  with peeking side cards and a play-button overlay, styled after a reference
  site's customer video slider
- **"From Our Customers"** rotating quote testimonial carousel (autoplay, star
  ratings, arrows, dots)
- **₹1,000-off signup popup** — appears ~4s after page load once per session,
  dismissible, with a working (client-side) name/mobile form
- **Scroll-reveal animation** on every section site-wide (things fade + rise in
  as you scroll)
- **Photographic-style lighting** on every product/category tile — soft spotlight
  gradient + shimmer-on-hover + subtle rotating sunburst, so pieces feel lit and
  premium rather than flat
- Built with **Framer Motion** + **Embla Carousel** (lightweight, no jQuery)



- **Fonts:** Recoleta is a paid, non-Google font (dafont/Adobe licensed) and
  can't be legally bundled into this project. I used **Fraunces** as the
  closest free equivalent — same warm, rounded-serif personality — paired with
  **Poppins** as requested. Both are self-hosted via `@fontsource` (no external
  font requests, works offline). If you purchase a Recoleta license, drop the
  `.woff2` files into `public/fonts/` and swap the `@fontsource` imports in
  `app/layout.tsx` for local `@font-face` rules.
- **Product imagery:** Real product photography wasn't provided, so product
  and category tiles currently use a custom line-art illustration system
  (rings, necklaces, the sunburst mark from your logo, etc.) instead of stock
  photos. This keeps the site looking intentional and on-brand rather than
  empty. Swap in real photography by replacing the `<ArtPanel />` component
  usage with `<Image src="..." />` wherever you have real shots — the layout,
  spacing and hover states won't need to change. A ready-made shot list for a
  full photo pass:
  - Hero: 3 wide lifestyle/product shots (everyday wear, bridal set, gifting)
  - 7 category thumbnails (ring, bracelet, necklace, earring, bangle, nosepin, anklet)
  - 4 collection banners (bridal, gifting, statement, everyday)
  - 4–12 individual product shots for the catalog
  - 3 "Ways to Shop" images (video call in progress, store interior, home try-on)
  - 2 promo banner images (mangalsutra, men's jewellery)
  - 5 short customer video clips + thumbnails for the "Straight From Our
    Customers" slider (currently a decorative play-button UI with no real
    video attached — wire up a `<video>`/embed once you have clips)
- **Dummy photography added throughout the homepage:** every section (hero,
  categories, promo banners, collections, best sellers, ways-to-shop, customer
  stories) now shows a generated placeholder photo behind the icon, instead of
  a flat colour panel — so it reads like a real photoshoot was dropped in.
  These are custom-generated soft studio-light/bokeh images
  (`public/images/dummy/*.jpg`, 6 files, 3 tones × 2 variants), not stock
  photos, so there's no licensing question — but they're still placeholders.
  Products and About/Book Us pages still use the flat icon panels, since you
  said that's fine for now.
- **Signup popup:** the ₹1,000-off popup appears once per browser session and
  currently just shows a success state on submit — connect the form's
  `handleSubmit` in `components/SubscriptionPopup.tsx` to your CRM/SMS
  provider to actually send the coupon.
- **WhatsApp number:** currently set to `+91 70218 11747` (matches the number
  on your reference site). Update it in `components/WhatsAppButton.tsx`,
  `components/ProductsExplorer.tsx`, and `components/BookingForm.tsx`.
- **No pricing / no payment logos** are shown anywhere, per your notes.
- **Logo:** `public/images/logo-transparent.png` is your original logo with
  the grey background removed, so it reads cleanly on the cream/white header
  and footer.

## Tech
- Next.js 16 (App Router, Turbopack)
- TypeScript
- Tailwind CSS v4
- Framer Motion (scroll-reveal + slide transitions)
- Embla Carousel (hero slider, category slider, testimonial slider)
- lucide-react (icons)
- @fontsource/fraunces + @fontsource/poppins (self-hosted fonts)
