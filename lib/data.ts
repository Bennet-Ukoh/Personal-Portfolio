import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corp-comment.png";
import petsoftImg from "@/public/pet-soft.png";
import trekbagImg from "@/public/trek-bag.png";
import eventoImg from "@/public/evento.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Freelance",
    location: "Remote",
    description: "Front-end Developer.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - Present",
  },
  {
    title: "Alx Africa",
    location: "Remote",
    description:
      "1 year intensive software engineering program. I specialized in frontend web development.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - 2023",
  },
  {
    title: "Start Innovation Hub",
    location: "Akwa Ibom, Nigeria",
    description:
      "Internship program where I learned the basics of app development.",
    icon: React.createElement(FaReact),
    date: "2019 - 2020",
  },
] as const;

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
    tags: ["React", "Nextjs", "Postgress", "TypeScript", "Tailwind", "Zustand"],
    imageUrl: eventoImg,
    linkName: "eventsapp.vercel.app",
    url: "https://eventsapp-cyan.vercel.app/",
  },

  {
    title: "CorpComment",
    description:
      "A public feedback platform that allows users to give feedback on companies.",
    tags: ["React", "Css", "zustand"],
    imageUrl: corpcommentImg,
    linkName: "corpcomment.app",
    url: "https://corp-comments-six.vercel.app/",
  },
  {
    title: "TrekBag",
    description:
      "App that helps users remember what to pack for a trip. Users can also create a list of items to pack.",
    tags: ["React", "Css"],
    imageUrl: trekbagImg,
    linkName: "trekbag.vercel.app",
    url: "https://trek-bag-ten.vercel.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "Shadcn-ui",
  "Prisma",
  "Zustand",
  "PostgreSQL",
  "Python",
  "Framer Motion",
] as const;
