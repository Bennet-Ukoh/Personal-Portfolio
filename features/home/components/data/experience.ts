import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaChalkboardTeacher, FaCertificate } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const experiencesData = [
  {
    title: "Lead Frontend Engineer & Software Development Trainer",
    location: "CrystalLattice Limited — Uyo, Nigeria",
    description:
      "Own frontend architecture for a new product while training incoming developers from fundamentals through production features.",
    icon: React.createElement(FaChalkboardTeacher),
    date: "Jan 2026 – Present",
  },
  {
    title: "Frontend Engineer (Freelance)",
    location: "Remote",
    description:
      "Built HandyHire, a skilled-worker marketplace, plus 3 additional client projects end-to-end.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 – Jan 2026",
  },
  {
    title: "3MTT Fellow — Software Development",
    location: "3MTT × Darey.io — Remote",
    description:
      "Full-stack fellowship covering React and production workflows, capped by the AI Resume Reviewer capstone.",
    icon: React.createElement(FaCertificate),
    date: "2024 – 2025",
  },
  {
    title: "ALX Fellow — Software Engineering",
    location: "ALX Africa — Remote",
    description:
      "Frontend specialization in React and modern JavaScript, alongside the Andela React Learning Program.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
] as const;
