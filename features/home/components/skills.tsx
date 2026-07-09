"use client";

import SectionHeading from "@/components/ui/section-heading";
import { skillGroups } from "./data/skills";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-16 max-w-[53rem] scroll-mt-28 sm:mb-40"
    >
      <SectionHeading>Skills & Technologies</SectionHeading>
      <div className="flex flex-col gap-8">
        {skillGroups.map((group) => (
          <div key={group.label}>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-indigo-400 dark:text-gray-500">
              {group.label}
            </p>
            <ul className="flex flex-wrap gap-2">
              {group.skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.li
                    key={skill.name}
                    className="flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-4 py-2 text-[0.9rem] text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-white/80"
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    custom={index}
                  >
                    {Icon && <Icon className="h-4 w-4 shrink-0" />}
                    {skill.name}
                  </motion.li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
