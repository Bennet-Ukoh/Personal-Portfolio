"use client";

import { motion } from "framer-motion";
import { SiReact } from "react-icons/si";
import { HiOutlineCode } from "react-icons/hi";
import { HiSparkles } from "react-icons/hi2";

const specialties = [
  {
    icon: SiReact,
    title: "React & Next.js Apps",
    description:
      "Fast, accessible web applications with server-side rendering, optimised performance, and polished UI.",
  },
  {
    icon: HiOutlineCode,
    title: "Full-Stack Systems",
    description:
      "End-to-end products — REST APIs, PostgreSQL databases, authentication, and production deployment.",
  },
  {
    icon: HiSparkles,
    title: "AI-Integrated Tools",
    description:
      "LLM-powered features — from resume analysis to intelligent assistants — built into modern web apps.",
  },
];

export default function WhatIBuild() {
  return (
    <section className="mb-16 w-full max-w-[53rem]">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {specialties.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              className="rounded-2xl border border-black/[0.07] bg-white px-6 py-5 dark:border-white/[0.07] dark:bg-white/5"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <Icon className="mb-3 h-5 w-5 text-gray-500 dark:text-gray-400" />
              <h3 className="mb-1.5 text-sm font-semibold text-gray-900 dark:text-white">
                {item.title}
              </h3>
              <p className="text-xs leading-relaxed text-gray-500 dark:text-gray-400">
                {item.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
