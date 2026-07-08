import petsoftImg from "@/public/pet-soft.png";
import eventoImg from "@/public/evento.png";
import aiResumeImg from "@/public/ai-resume-reviewer.png";
import movieappImg from "@/public/movieapp.png";

export const projectsData = [
  {
    title: "PetSoft",
    description:
      "An end-to-end pet management platform for tracking pets and appointments, with full CRUD, authentication, and a polished UI built on Next.js and Prisma.",
    tags: ["React", "TypeScript", "Next.js", "Shadcn-ui", "Prisma"],
    imageUrl: petsoftImg,
    url: "https://pet-soft-ashy.vercel.app",
    githubUrl: "https://github.com/Bennet-Ukoh/PetSoft",
  },
  {
    title: "Evento",
    description:
      "An event discovery and booking platform where users search for events by city and browse upcoming experiences, powered by a PostgreSQL-backed Next.js app.",
    tags: ["React", "Next.js", "PostgreSQL", "TypeScript", "Tailwind", "Zustand"],
    imageUrl: eventoImg,
    url: "https://evento-tan.vercel.app",
    githubUrl: "https://github.com/Bennet-Ukoh/evento",
  },
  {
    title: "AI Resume Reviewer",
    description:
      "An AI-powered resume feedback tool that analyses uploaded resumes and returns structured, actionable suggestions using LLM integration and a PostgreSQL-backed Next.js app.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "AI/LLM", "React"],
    imageUrl: aiResumeImg,
    url: "",
    githubUrl: "https://github.com/Bennet-Ukoh/ai-review-resume",
  },
  {
    title: "MovieApp",
    description:
      "A movie recommendation and discovery platform with a Next.js 15 frontend and a separate Express.js + MongoDB backend, pulling live data from the TMDB API.",
    tags: ["Next.js 15", "Express.js", "MongoDB", "TMDB API", "TypeScript"],
    imageUrl: movieappImg,
    url: "",
    githubUrl: "https://github.com/Bennet-Ukoh/movie-app",
  },
] as const;
