# SJ Group Website - Project Overview (Updated)

## Project Description
A premium corporate website for SJ Group showcasing innovation, technology leadership, and trust through a modern, clean, earthy design with teal accents.

## Tech Stack
- **Framework**: Next.js 16 with App Router
- **Styling**: Tailwind CSS 4 + Custom CSS Variables
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Charts**: Recharts (available if needed)
- **Language**: TypeScript

## Design System (Updated)

### Colors (CSS Variables)
- `--primary`: #0d9488 (Teal - Primary accent)
- `--primary-light`: #14b8a6
- `--primary-dark`: #0f766e
- `--secondary`: #0891b2 (Cyan - Secondary accent)
- `--accent`: #f59e0b (Amber - Accent)

### Theme
- Default: Light mode with white backgrounds
- Supports dark mode with smooth transitions
- Theme preference persisted in localStorage

### Design Style
- Modern, clean, earthy aesthetic
- Cards with subtle shadows and borders
- Gradient accents (teal to cyan)
- Rounded corners (1rem for cards)

## Internationalization

### Supported Languages
1. 🇺🇸 English (en) - Default
2. 🇨🇳 Chinese (zh) - 中文
3. 🇯🇵 Japanese (ja) - 日本語
4. 🇰🇷 Korean (ko) - 한국어
5. 🇪🇸 Spanish (es) - Español

### Implementation
- Language context with localStorage persistence
- Flag-based language switcher in navbar
- All text uses translation system

## Pages Structure

### Main Pages
1. **Home** (`/`) 
   - Hero with gradient background (black to teal)
   - Snowfall effect (45-degree angle)
   - Auto-scroll carousel for products/services
   - Stats, features, services preview

2. **About Us** (`/about`) 
   - Vision, mission, values with infographics
   - Team section
   - Culture section (no "Journey" timeline)

3. **Contact Us** (`/contact`) 
   - Animated form with floating labels
   - Contact info cards
   - FAQ section

### Service Pages
4. **Melora** (`/services/melora`) 
   - Retail clothing focus
   - Categories: Anime, Abstract, Text, Solid
   - Products: Hoodies, T-Shirts, Shirts

5. **JivaPure** (`/services/jivapure`) 
   - Natural wellness products

6. **SJ Tech Solution** (`/services/sj-tech`) 
   - "Solutions that move you forward" tagline
   - 10 expandable service cards:
     - Power BI Dashboarding
     - Data Analysis
     - Amazon Sellercentral Report Automation
     - Shopify Report Automation
     - Website/Webapp Development
     - iOS/Android App Development
     - Business Portal/Custom Software
     - Helium 10 Data Scraping
     - UI/UX Design
     - Custom Agentic AI Chat Models

### Products Page
7. **Products** (`/products`) 
   - No dropdown, dedicated page
   - Individual and Business pricing plans
   - Monthly/Yearly toggle (20% discount)
   - All products: HRMS, ProjectHub, Asset Tracker, Query Tracker, Business Portal

### Legal Pages
8. **Privacy Policy** (`/privacy-policy`)
9. **Terms & Conditions** (`/terms-conditions`)

## Components

### Layout Components
- `Navbar` - Transparent on home, sticky with dropdowns, language switcher
- `Footer` - Compact, organized into Quick Links and Services
- `PageHero` - Reusable hero component
- `ScrollToTop` - Scroll to top on route change

### UI Components
- `GlassCard` - Card component with hover effects
- `AnimatedSection` - Scroll-triggered animations
- `ThemeToggle` - Sun/moon toggle
- `LanguageSwitcher` - Flag-based language dropdown
- `Snowfall` - Snow particle effect
- `Carousel` - Auto-scrolling product carousel

### Templates
- `ServiceTemplate` - Reusable for service pages
- `ProductTemplate` - Reusable for product pages

## Key Features
- ✅ Modern teal/earthy color scheme
- ✅ Light/dark mode with localStorage
- ✅ Language switcher (5 languages)
- ✅ Snowfall effect on home page
- ✅ Auto-scroll carousel
- ✅ Expandable service cards
- ✅ Pricing plans with monthly/yearly toggle
- ✅ Scroll to top on route changes
- ✅ Infographic cards on all pages
- ✅ Transparent nav on home page
- ✅ Responsive design

## Running the Project
```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

## File Structure
```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx (Home)
│   ├── globals.css
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── products/page.tsx
│   ├── privacy-policy/page.tsx
│   ├── terms-conditions/page.tsx
│   ├── services/
│   │   ├── melora/page.tsx
│   │   ├── jivapure/page.tsx
│   │   └── sj-tech/page.tsx
│   └── products/
│       ├── hrms/page.tsx
│       ├── projecthub/page.tsx
│       ├── asset-tracker/page.tsx
│       ├── query-tracker/page.tsx
│       └── business-portal/page.tsx
├── components/
│   ├── index.ts
│   ├── ThemeProvider.tsx
│   ├── ThemeToggle.tsx
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── PageHero.tsx
│   ├── GlassCard.tsx
│   ├── AnimatedSection.tsx
│   ├── ServiceTemplate.tsx
│   ├── ProductTemplate.tsx
│   ├── LanguageSwitcher.tsx
│   ├── Snowfall.tsx
│   ├── Carousel.tsx
│   └── ScrollToTop.tsx
├── lib/
│   └── i18n/
│       ├── translations.ts
│       └── LanguageProvider.tsx
└── brain/
    └── project-overview.md
```
