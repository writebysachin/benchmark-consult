# Benchmark Global — Study Abroad Consultancy Website

A production-quality website for **Benchmark Global Consultants**, built with Next.js 16, React 19, Tailwind CSS v4, and TypeScript.

## 🚀 Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Deployment:** Netlify

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout + SEO metadata
│   ├── page.tsx            # Homepage
│   └── globals.css
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # Sticky nav + mobile menu
│   │   └── Footer.tsx      # 4-column footer
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Stats.tsx
│   │   ├── Destinations.tsx
│   │   ├── Services.tsx
│   │   ├── Process.tsx
│   │   ├── Testimonials.tsx
│   │   ├── EligibilityForm.tsx
│   │   ├── BlogPreview.tsx
│   │   ├── Universities.tsx
│   │   └── CTA.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Badge.tsx
│       └── SectionHeader.tsx
└── lib/
    └── data.ts             # All static content
```

## 🛠️ Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 🌐 Deployment

Deployed on **Netlify** via the `@netlify/plugin-nextjs` plugin.

Auto-deploys on every push to `main`.

## 📄 License

© 2024 Benchmark Global Consultants. All rights reserved.
