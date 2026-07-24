import eventoImg from "@/public/evento.png";
import aiResumeImg from "@/public/resume_reviewer.png";
import medminderImg from "@/public/medminder.png";

export const projectsData = [
  {
    title: "MedMinder",
    description:
      "Offline-first medication reminder PWA for caregivers and older adults, with AI-powered prescription label scanning.",
    tags: ["Next.js", "TypeScript", "Dexie/IndexedDB", "Zustand", "Vitest", "Claude"],
    imageUrl: medminderImg,
    url: "#",
    githubUrl: "#",
  },
  {
    title: "Evento",
    description:
      "City-based event discovery platform for browsing upcoming experiences by location.",
    tags: ["React", "Next.js", "PostgreSQL", "TypeScript", "Tailwind", "Zustand"],
    imageUrl: eventoImg,
    url: "https://evento-tan.vercel.app",
    githubUrl: "https://github.com/Bennet-Ukoh/evento",
  },
  {
    title: "AI Resume Reviewer",
    description:
      "AI-powered tool that gives structured, actionable feedback on an uploaded resume.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "AI/LLM", "React"],
    imageUrl: aiResumeImg,
    url: "#",
    githubUrl: "https://github.com/Bennet-Ukoh/ai-review-resume",
  },
] as const;
