import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/Quizzyapp.png";
import rmtdevImg from "@/public/smartshe.png";
import wordanalyticsImg from "@/public/porfolioproject.png";

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
    title: "Graduated from ALX",
    location: "Remote",
    description:
      "I graduated after 1 year of intensive studying. I learned software development with a hands on projects and soft skills.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Front-End Developer",
    location: "PortHarcourt, Nigeria",
    description:
      "I worked as a front-end developer for 1 year. I also upskilled to AICE graduate at ALX",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2024",
  },
  {
    title: "Full-Stack Developer",
    location: "Remote",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Quizy App",
    description:
      "A quiz application where users test their knowledge on interactive quizzes. It has features like creating quizzes, taking quizzes and viewing results. I was the front-end developer.",
    tags: ["React", "React-Dom", "MySql", "Tailwind", "Django", "Python"],
    imageUrl: corpcommentImg,
  },
  {
    title: "SmartSHE",
    description:
      "SmartSHE is the digital platform that passionately creates an enabling environment for African SMEs to thrive in their businesses",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "framer-motion"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Personal Portfolio",
    description:
      "A personal portfolio website that showcases my projects, skills and experience with a well articulated contact form to reach me via email.",
    tags: ["React", "Next.js", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
