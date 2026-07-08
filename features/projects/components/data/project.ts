import corpcommentImg from "@/public/corp-comment.png";
import petsoftImg from "@/public/pet-soft.png";
import trekbagImg from "@/public/trek-bag.png";
import eventoImg from "@/public/evento.png";

export const projectsData = [
  {
    title: "PetSoft",
    description:
      "A pet management system that allows users to manage their pets and appointments.",
    tags: ["React", "TypeScript", "Next.js", "Shadcn-ui", "Context API"],
    imageUrl: petsoftImg,
    linkName: "petssoft.app",
    url: "https://petssoftware.vercel.app/",
  },
  {
    title: "Evento",
    description:
      "Evento is a platform that allows users search for events and book a ticket.",
    tags: ["React", "Next.js", "PostgreSQL", "TypeScript", "Tailwind", "Zustand"],
    imageUrl: eventoImg,
    linkName: "eventsapp.vercel.app",
    url: "https://eventsapp-cyan.vercel.app/",
  },

  {
    title: "CorpComment",
    description:
      "A public feedback platform that allows users to give feedback on companies.",
    tags: ["React", "CSS", "Zustand"],
    imageUrl: corpcommentImg,
    linkName: "corpcomment.app",
    url: "https://corp-comments-six.vercel.app/",
  },
  {
    title: "TrekBag",
    description:
      "App that helps users remember what to pack for a trip. Users can also create a list of items to pack.",
    tags: ["React", "CSS"],
    imageUrl: trekbagImg,
    linkName: "trekbag.vercel.app",
    url: "https://trek-bag-ten.vercel.app/",
  },
] as const;
