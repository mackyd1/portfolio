# Personal Portfolio

A fast, modern portfolio website for a software engineer, built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion. Includes a hero, about section, a "Things I've built" projects showcase, and a contact section, with dark mode and smooth animations.

## Tech stack

- [Next.js 14](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Lucide](https://lucide.dev/) icons

## Getting started

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # run ESLint
```

## Customizing your content

Everything is driven by a few files. Search for these placeholders and replace them with your own details:

| What | Where |
| --- | --- |
| Your name ("Alex Morgan") | `app/layout.tsx`, `components/hero.tsx`, `components/about.tsx`, `components/navbar.tsx` (the "AM" logo), `components/footer.tsx` |
| Email (`you@example.com`) | `components/contact.tsx`, `components/footer.tsx` |
| Social links (`yourusername`) | `components/hero.tsx`, `components/footer.tsx` |
| Bio & skills | `components/about.tsx` |
| Projects | `lib/projects.ts` |
| SEO / page title & description | `app/layout.tsx` |

### Adding a project

Open `lib/projects.ts` and add an entry to the `projects` array:

```ts
{
  title: "My Project",
  description: "A short summary of what it does.",
  tags: ["Next.js", "TypeScript"],
  highlights: [
    "A notable result or accomplishment",
    "Another highlight",
  ],
  liveUrl: "https://myproject.com", // optional
  repoUrl: "https://github.com/me/myproject", // optional
}
```

## Deploying to Vercel

The easiest path:

1. Push this project to a GitHub (or GitLab/Bitbucket) repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects Next.js, no configuration needed. Click **Deploy**.

Or deploy from the command line:

```bash
npm i -g vercel
vercel        # preview deployment
vercel --prod # production deployment
```

## Security note

Dependencies are pinned to patched versions. `npm audit` may still report advisories that are only resolved by upgrading to Next.js 16 (a major version with breaking changes). See the notes shared during setup for details on that tradeoff.
