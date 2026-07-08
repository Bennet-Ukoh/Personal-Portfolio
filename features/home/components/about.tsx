"use client";

import SectionHeading from "@/components/ui/section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] scroll-mt-28 text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After earning a degree in{" "}
        <span className="font-medium">Electronics and Computer Technology</span>
        , I transitioned into software engineering and completed an intensive
        fellowship at <span className="font-medium">ALX Africa</span>,
        specialising in{" "}
        <span className="font-medium">frontend web development</span>. I find
        the problem-solving side of engineering most rewarding — especially
        turning complex UI challenges into clean, maintainable solutions.
      </p>

      <p className="mb-3">
        My core stack is{" "}
        <span className="font-medium">React and Next.js</span>, with hands-on
        experience in TypeScript, PostgreSQL, and Prisma. I currently lead
        frontend engineering and developer training at{" "}
        <span className="font-medium">CrystalLattice Limited</span>, and I'm
        always looking to deepen my skills and explore emerging technologies.
      </p>

      <p>
        <span className="italic">Outside of work</span>, I enjoy football,
        watching films, and continually expanding my knowledge —{" "}
        <span className="font-medium">currently focused on AI integration</span>{" "}
        in modern web applications.
      </p>
    </motion.section>
  );
}
