# Bennet Ukoh — Personal Portfolio

My personal developer portfolio, built to showcase my projects, skills, and experience as a frontend developer.

**Live site:** [bennetukoh.vercel.app](https://bennetukoh.vercel.app/)

## Features

- Single-page portfolio with smooth-scroll navigation (Home, About, Projects, Skills, Experience, Contact)
- Animated section transitions and scroll-based active-link highlighting (Framer Motion)
- Light/dark theme toggle with persisted preference
- Working contact form that emails me directly (Resend + React Email)
- Fully responsive layout, built mobile-first with Tailwind CSS

## Tech Stack

- [Next.js 14](https://nextjs.org/) (App Router) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) for animation
- [Resend](https://resend.com/) + [React Email](https://react.email/) for the contact form
- [react-icons](https://react-icons.github.io/react-icons/), react-hot-toast, react-vertical-timeline-component

## Getting Started

Clone the repo and install dependencies:

```bash
git clone https://github.com/Bennet-Ukoh/Personal-Portfolio.git
cd Personal-Portfolio
npm install
```

Create a `.env.local` file in the project root with:

```
RESEND_API_KEY=your_resend_api_key
```

Then run the dev server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Project Structure

```
app/                   # Next.js App Router entry (layout, page, global styles)
components/
  layout/              # Header, footer + nav link data
  ui/                  # Shared UI (SectionHeading, SubmitBtn, ThemeSwitch, SectionDivider)
features/
  home/                # About, Intro, Skills, Experience sections + data
  projects/            # Project card components + project data
  contact/             # Contact form, server action, React Email template
context/               # React context providers (theme, active section)
lib/                   # Custom hooks, shared types, utility functions
public/                # Static assets and downloadable CV
```

## Connect

- LinkedIn: [linkedin.com/in/ukohbennet](https://linkedin.com/in/ukohbennet)
- GitHub: [github.com/Bennet-Ukoh](https://github.com/Bennet-Ukoh)
