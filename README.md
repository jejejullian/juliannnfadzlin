# Julian Nur Fadzlin — Portfolio

Personal portfolio website built with Next.js (App Router), migrated from a React + Vite SPA.

🔗 **Live:** [juliannnfadzlin.vercel.app](https://juliannnfadzlin.vercel.app)

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **Animation:** [Motion](https://motion.dev) (`motion/react`)
- **Fonts:** `next/font/local` (Nico-Moji)
- **Data:** Server-side GitHub GraphQL fetch (contribution heatmap, repo stats)
- **Deployment:** Vercel

## Features

- Fully responsive single-page portfolio
- Server Components for static sections, Client Components for interactive UI
- Server-side data fetching with ISR (1-hour revalidation) for live GitHub activity
- Custom loading screen with exit animations (`AnimatePresence`)
- Scroll-triggered reveal animations

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment Variables

Create a `.env.local` file:
