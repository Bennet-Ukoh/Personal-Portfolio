import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

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
