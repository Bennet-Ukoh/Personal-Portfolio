import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaChalkboardTeacher, FaCertificate } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const experiencesData = [
  {
    title: "Lead Frontend Engineer & Trainer",
    location: "CrystalLattice Limited — Uyo, Nigeria",
    description:
      "Leading frontend architecture for an undisclosed software product using React and Next.js, defining component structure and UI/UX direction. Designing and delivering software development training, conducting code reviews, and setting engineering best practices for a growing team.",
    icon: React.createElement(FaChalkboardTeacher),
    date: "Jun 2026 – Present",
  },
  {
    title: "Frontend Engineer (Freelance)",
    location: "Remote",
    description:
      "Sole frontend engineer on HandyHire, a marketplace connecting clients with skilled workers, collaborating with cybersecurity and backend engineers. Also shipped PetSoft (pet management platform) and Evento (event management app) — all production-deployed.",
    icon: React.createElement(CgWorkAlt),
    date: "2025 – 2026",
  },
  {
    title: "3MTT Fellow — Software Development",
    location: "3MTT × Darey.io — Remote",
    description:
      "Intensive full-stack fellowship covering modern JavaScript, React, and production workflows. Capstone projects: AI Resume Reviewer (Next.js + LLM integration + PostgreSQL) and MovieApp (Next.js 15 + Express.js + MongoDB + TMDB API).",
    icon: React.createElement(FaCertificate),
    date: "Mar 2025 – Dec 2025",
  },
  {
    title: "ALX Fellow — Software Engineering & AI",
    location: "ALX Africa — Remote",
    description:
      "1-year intensive Software Engineering fellowship specialising in React and modern JavaScript. Capstone: Quizy — an interactive quiz platform with authentication, scoring, and leaderboards, built as part of a 4-person team. Also completed AI Starter Kit and AI Career Essentials certifications.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 – 2025",
  },
] as const;
