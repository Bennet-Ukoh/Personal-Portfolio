"use client";

import React from "react";
import SectionHeading from "./section-heading";
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
        <span className="font-medium">Electronics And Computer Technology</span>
        , I transitioned to pursue my passion for programming. I completed a
        Software Engineering program at ALX - Africa, specializing in{" "}
        <span className="font-medium">Frontend web development</span>.{" "}
        <span className="italic">I find the problem-solving aspect</span> of
        programming most rewarding,<span className="underline">especially</span>{" "}
        the the satisfaction that comes from resolving complex issues.
      </p>

      <p>
        My core stack is{" "}
        <span className="font-medium">
          React and Next.js
        </span>
        , with additional experience in TypeScript and Prisma. I am always eager
        to expand my skill set and explore new technologies. Currently, I'm
        seeking a <span className="font-medium">full-time role</span> as a
        Frontend Developer.
      </p>

      <p>
        <span className="italic">Outside of coding</span>, I enjoy playing
        football, watching movies, and{" "}
        <span className="font-medium">continually learning.</span> I am
        currently diving into AI.
      </p>
    </motion.section>
  );
}
