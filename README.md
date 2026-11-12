# ShakTech Labs Website

The website for ShakTech Labs, a one-person software studio. Built with Next.js 15, TypeScript and Tailwind CSS, deployed on Vercel at https://shak-tech.com.

## Getting Started

Requires Node.js 18.17 or later.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run screenshot <url> <name>` - Capture a website screenshot

## Project Structure

```
src/
├── app/              # Next.js app router pages
├── components/       # React components
│   └── ui/           # Reusable UI components
└── lib/              # Shared data and utilities
```

Portfolio content lives in `src/lib/projects.ts` and is shared by the homepage and the portfolio page. Engagement models and prices live in `src/components/engagements.tsx` and are shared by the services and pricing pages.

## Pages

- **Home** - Studio pitch, featured products, approach, founder
- **Portfolio** - Every product, with screenshots and links
- **Services** - What the studio builds and how to engage it
- **Pricing** - Engagement models and common questions
- **About** - Shakeel Bhamani's background
- **Contact** - Contact form (delivered over Gmail SMTP)

## License

© 2026 ShakTech Labs. All rights reserved.
