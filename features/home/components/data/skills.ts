import { IconType } from "react-icons";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiGit,
} from "react-icons/si";

type Skill = { name: string; icon: IconType | null };

export const skillGroups: { label: string; skills: Skill[] }[] = [
  {
    label: "Core",
    skills: [
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss3 },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
    ],
  },
  {
    label: "UI & Libraries",
    skills: [
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Shadcn-ui", icon: null },
      { name: "Framer Motion", icon: SiFramer },
      { name: "Zustand", icon: null },
    ],
  },
  {
    label: "Backend & Tools",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Prisma", icon: SiPrisma },
      { name: "Python", icon: SiPython },
      { name: "Git", icon: SiGit },
    ],
  },
];
