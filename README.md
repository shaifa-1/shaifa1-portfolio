# shaifa-portfolio

A responsive, recruiter-friendly portfolio website for Shaifa, a Java Full Stack Developer seeking an entry-level Java / Software Developer role.

All content comes from her resume and LinkedIn profile. Nothing is invented: the numbers shown (3+ applications, 15+ and 10+ API endpoints) are the ones stated in the resume.

## Tech stack

- Next.js 14 (App Router) and React 18
- TypeScript
- Tailwind CSS 3
- No API keys or environment variables required

## Run locally

Requires Node.js 18.17 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Other commands: `npm run build` (production build), `npm start` (serve the build), `npm run lint`.

## Customize the content

Almost everything lives in one file: `data/portfolio.ts`.

- `profile`: name, title, headline, status, contact details, about text
- `profile.github`: paste your GitHub URL to show a GitHub button in Contact (hidden while empty)
- `projects`: add `repo` and `demo` URLs to show "Source code" / "Live demo" links
- `experience`, `skills`, `education`, `certifications`: edit or add entries

Colors and fonts are set in `tailwind.config.ts` (accent color) and `app/globals.css`. Dark mode follows the visitor's system setting and can be toggled in the header.

## Project structure

```
shaifa-portfolio/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Education.tsx
│   ├── Experience.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Projects.tsx
│   ├── Section.tsx
│   ├── Skills.tsx
│   └── ThemeToggle.tsx
├── data/
│   └── portfolio.ts
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

## Deploy

Push to GitHub and import the repository in Vercel (or any Next.js host). No configuration is needed.
