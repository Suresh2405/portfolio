# Mandamanedi Suresh Portfolio

A premium, production-ready personal portfolio website built for **Mandamanedi Suresh**, a final-year B.Tech Computer Science & Artificial Intelligence student at Malla Reddy University. Designed specifically for software engineering and AI/ML campus placements and technical recruiters.

## Features

- **Developer & AI Visuals**: Interactive simulated LSTM neural forecast terminal visual and custom SVG project dashboard mockups.
- **Data-Driven Architecture**: Modular data files (`projects.js`, `skills.js`, `certifications.js`, `profile.js`) for easy customization.
- **Interactive Project Showcase**: High-impact cards with scaling visuals, technology pills, and comprehensive modal views.
- **Infinite Technology Marquee**: Smooth continuous tech strip with pause-on-hover effect.
- **Responsive Navigation**: Glassmorphic sticky header with desktop navigation and mobile animated hamburger menu.
- **Client Validation & Contact**: Form with input validation and mailto fallback.
- **SEO & Accessibility Optimized**: OpenGraph meta tags, Twitter card support, semantic HTML structure, keyboard focus states, and reduced-motion compliance.
- **Resume Download**: Functional resume PDF link configured in `/public/resume.pdf`.
- **Vercel Deployment Ready**: Preconfigured with `vercel.json` SPA rewrite rules.

## Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite 6
- **Styling**: Vanilla CSS with custom Design Tokens & Glassmorphism
- **Icons**: Lucide React
- **Typography**: Google Fonts (Inter & Space Grotesk)

## Run Locally

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
# Generate production bundle in dist/
npm run build

# Preview production build locally
npm run preview
```

## Git Setup Commands

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

*(Note: Replace `YOUR_GITHUB_REPOSITORY_URL` with your actual GitHub repository URL)*
