import petsoftImg from "@/public/pet-soft.png";
import eventoImg from "@/public/evento.png";
import aiResumeImg from "@/public/ai-resume-reviewer.png";
import movieappImg from "@/public/movieapp.png";

export const projectsData = [
  {
    title: "PetSoft",
    description:
      "Built a production-grade pet management platform with Next.js, Prisma, and Shadcn-ui — featuring full CRUD, user authentication, and a polished responsive UI. Live on Vercel.",
    tags: ["React", "TypeScript", "Next.js", "Shadcn-ui", "Prisma"],
    imageUrl: petsoftImg,
    url: "https://pet-soft-ashy.vercel.app",
    githubUrl: "https://github.com/Bennet-Ukoh/PetSoft",
  },
  {
    title: "Evento",
    description:
      "Built a city-based event discovery platform where users browse upcoming experiences by location — powered by Next.js App Router, PostgreSQL, and Zustand for client-side state.",
    tags: ["React", "Next.js", "PostgreSQL", "TypeScript", "Tailwind", "Zustand"],
    imageUrl: eventoImg,
    url: "https://evento-tan.vercel.app",
    githubUrl: "https://github.com/Bennet-Ukoh/evento",
  },
  {
    title: "AI Resume Reviewer",
    description:
      "Built an AI-powered tool where users upload a CV and receive structured, actionable feedback via LLM integration — Next.js frontend backed by a PostgreSQL database.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "AI/LLM", "React"],
    imageUrl: aiResumeImg,
    url: "",
    githubUrl: "https://github.com/Bennet-Ukoh/ai-review-resume",
  },
  {
    title: "MovieApp",
    description:
      "Built a full-stack movie discovery platform: Next.js 15 frontend consuming a custom Express.js + MongoDB backend and real-time data from the TMDB API.",
    tags: ["Next.js 15", "Express.js", "MongoDB", "TMDB API", "TypeScript"],
    imageUrl: movieappImg,
    url: "",
    githubUrl: "https://github.com/Bennet-Ukoh/movie-app",
  },
] as const;
