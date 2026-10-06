# Sri Vijaya Durga Nursery - Next.js Premium Web Platform

A state-of-the-art, fully responsive, modern web application for **Sri Vijaya Durga Nursery** (Kadiyapulanka, Andhra Pradesh — Established 1948).

Designed and built with Next.js (App Router), Tailwind CSS, Framer Motion, GSAP, and interactive SVG animations.

---

## 🌿 Key Features & Technical Highlights

1. **Interactive Plant Growth Timeline (6-Stage Animation)**:
   - Dynamic SVG path morphing for roots, sprout, leaves, branches, and flowering fruits.
   - Environmental transitions (Sunlight rays, rain drops, moving clouds, nutrient soil composition).
   - Step indicator bar synced with controls.

2. **Ultra-Modern Nature Design System**:
   - Palette: Deep Forest (`#072314`), Emerald (`#10B981`), Leaf Green (`#22C55E`), Soft Gold (`#D4AF37`), Warm Cream (`#FDFBF7`), Dark Charcoal (`#09140C`).
   - Fonts: `Playfair Display` for serif luxury headings & `Poppins` for crisp readability.
   - Glassmorphism cards with smooth blur backdrop filters.
   - Integrated **Light & Dark Mode Switcher** with preference memory.

3. **Full-Screen Hero Video Section**:
   - Looping plant greenery background video with poster fallback (`/images/hero.jpg`).
   - Floating animated SVG leaves drifting across viewport.
   - Dual Call to Actions ("Explore Plants" & "WhatsApp Us").

4. **Interactive Plant Explorer**:
   - Real-time search filter and category tabs (Fruit, Avenue, Indoor, Palms, Bonsai, Bougainvillea).
   - Card tilt animations & details modal.
   - Instant WhatsApp enquiry buttons with pre-filled plant payloads.

5. **Commercial Landscaping & Bulk Quote Calculator**:
   - Interactive bulk quote request form with confetti celebratory feedback.
   - Service cards for Highway/Infrastructure avenue plantations and commercial farm orchards.

6. **SEO & Performance Ready**:
   - Schema.org `LocalBusiness` JSON-LD microdata embedded in HTML head.
   - OpenGraph metadata for Facebook/WhatsApp link previews.
   - WebP image placeholders & responsive mobile drawer navigation.

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js 18.x or higher
- npm 9.x or higher

### Installation & Execution

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# Open http://localhost:3000 in your browser
```

### Production Build & Preview

```bash
# 1. Build optimized production bundle
npm run build

# 2. Start production server on custom port
npm run start -- -p 3030
```

---

## 🛠 How to Customize Real Content

### 1. Replace Video & Image Assets
- **Hero Background Video**: Update the `<source src="..." />` URL in `components/Hero.tsx` or place your `.mp4` file in `public/videos/hero.mp4`.
- **Hero Poster Fallback**: Replace `public/images/hero.jpg`.
- **Category & Plant Images**: Place your real nursery photography inside `public/images/` and update paths in `components/CategoriesSection.tsx` & `components/PlantExplorer.tsx`.

### 2. Update Contact Numbers & Social Links
- **Phone / WhatsApp Number**: Search for `9160122226` in `components/Navbar.tsx`, `components/ContactSection.tsx`, `components/Footer.tsx`, and `components/FloatingWhatsApp.tsx`.
- **Email**: Update `Svdn.plants@gmail.com` in `app/layout.tsx`, `components/ContactSection.tsx`, and `components/Footer.tsx`.
- **Address & Google Map**: Update `Kadiyapulanka, Rajahmundry, AP - 533126` in `app/layout.tsx` and the Google Map iframe URL in `components/ContactSection.tsx`.

---

## 📁 Project Structure

```
├── app/
│   ├── globals.css           # Tailwind v4 theme, glassmorphism, animations
│   ├── layout.tsx            # Root layout, Google fonts, Schema.org LocalBusiness
│   └── page.tsx              # Main homepage integrating all 15 sections
├── components/
│   ├── Navbar.tsx            # Sticky header, dark mode toggle, mobile drawer
│   ├── Hero.tsx              # Video background, floating leaves, CTAs
│   ├── AboutSection.tsx      # SVDN 75-year legacy, core stats & values
│   ├── PlantGrowthSection.tsx# 6-stage interactive SVG plant growth animation
│   ├── CategoriesSection.tsx # 11 botanical categories with count badges
│   ├── PlantExplorer.tsx     # Live search catalog & WhatsApp quote modal
│   ├── WhyChooseUs.tsx       # Advantage pillars & quality highlights
│   ├── PlantCareSection.tsx  # Horticultural care tips accordion
│   ├── LandscapingSection.tsx# Bulk supply quote request form & services
│   ├── GallerySection.tsx    # Masonry photo showcase & lightbox modal
│   ├── TestimonialsSection.tsx# Client review carousel with star ratings
│   ├── FaqSection.tsx        # Accordion FAQ for wholesale queries
│   ├── ContactSection.tsx    # Google Map embed & contact cards
│   ├── Footer.tsx            # Navigation links & social channels
│   ├── FloatingWhatsApp.tsx  # Pulsing quick WhatsApp action button
│   ├── ThemeContext.tsx      # Light/Dark mode state provider
│   └── CustomCursor.tsx      # Subtle leaf particle mouse effect
```

---

## 🌐 Original Website Reference
- **Existing Site Audit Reference**: [srivijayadurganursery.in](https://srivijayadurganursery.in/)
- **Location**: Kadiyapulanka, East Godavari, Andhra Pradesh, India.
