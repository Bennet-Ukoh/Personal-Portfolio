import corpcommentImg from "@/public/corp-comment.png";
import petsoftImg from "@/public/pet-soft.png";
import trekbagImg from "@/public/trek-bag.png";
import eventoImg from "@/public/evento.png";

export const projectsData = [
  {
    title: "PetSoft",
    description:
      "An end-to-end pet management platform for tracking pets and appointments, with full CRUD, authentication, and a polished UI built on Next.js and Prisma.",
    tags: ["React", "TypeScript", "Next.js", "Shadcn-ui", "Prisma"],
    imageUrl: petsoftImg,
    linkName: "Live Demo",
    url: "https://pet-soft-ashy.vercel.app",
    githubUrl: "https://github.com/Bennet-Ukoh/PetSoft",
  },
  {
    title: "Evento",
    description:
      "An event discovery and booking platform where users search for events by city and browse upcoming experiences, powered by a PostgreSQL-backed Next.js app.",
    tags: ["React", "Next.js", "PostgreSQL", "TypeScript", "Tailwind", "Zustand"],
    imageUrl: eventoImg,
    linkName: "Live Demo",
    url: "https://evento-tan.vercel.app",
    githubUrl: "https://github.com/Bennet-Ukoh/evento",
  },
  {
    title: "CorpComment",
    description:
      "A public feedback platform that allows users to post and upvote feedback about companies, built as a deep-dive into React state management with Zustand.",
    tags: ["React", "CSS", "Zustand"],
    imageUrl: corpcommentImg,
    linkName: "Live Demo",
    url: "https://corp-comments-six.vercel.app/",
    githubUrl: "",
  },
  {
    title: "TrekBag",
    description:
      "A smart packing list app that helps users remember what to bring on a trip — supports adding, checking off, and managing items with persistent state.",
    tags: ["React", "CSS"],
    imageUrl: trekbagImg,
    linkName: "Live Demo",
    url: "https://trek-bag-ten.vercel.app/",
    githubUrl: "",
  },
] as const;
