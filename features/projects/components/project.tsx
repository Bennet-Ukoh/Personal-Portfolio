"use client";

import { useRef } from "react";
import { projectsData } from "./data/project";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  url,
  githubUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 last:mb-0 sm:mb-8"
    >
      <section className="relative max-w-[45rem] overflow-hidden rounded-lg border border-[#0f2545]/10 bg-white transition hover:bg-[#F5F8FC] dark:bg-white/10 dark:text-white dark:hover:bg-white/20 sm:min-h-[22rem] sm:pr-8 sm:group-even:pl-8">
        <Image
          src={imageUrl}
          alt={`${title} project screenshot`}
          quality={85}
          className="-right-40 top-8 w-[28.25rem] rounded-t-lg shadow-2xl transition group-even:-left-40 group-even:right-[initial] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-[1.04] group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 sm:hidden"
        />

        <div className="flex h-full flex-col px-5 pb-7 pt-4 sm:max-w-[50%] sm:pb-8 sm:pl-10 sm:pr-2 sm:pt-10 sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold text-[#0F2545] dark:text-white">{title}</h3>
          <p className="mt-2 leading-relaxed text-[#3C4B63] dark:text-white/70">
            {description}
          </p>
          <ul className="mb-4 mt-4 flex flex-wrap gap-2 sm:mt-auto">
            {tags.map((tag) => (
              <li
                className="rounded-full bg-[#0F2545]/85 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white dark:bg-black/[0.7] dark:text-white/70"
                key={tag}
              >
                {tag}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-x-2 font-semibold text-[#6B7A93] group-hover:text-orange-700 dark:text-zinc-200 dark:group-hover:text-orange-500"
              >
                <FaGithub className="h-4 w-4" />
                Code
              </a>
            )}
            {url && (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-x-2 font-semibold text-[#6B7A93] group-hover:text-orange-700 dark:text-zinc-200 dark:group-hover:text-orange-500"
              >
                <FiExternalLink className="h-4 w-4" />
                Live Demo
              </a>
            )}
          </div>
        </div>

        <Image
          src={imageUrl}
          alt={`${title} project screenshot`}
          quality={85}
          className="absolute -right-40 top-8 hidden w-[28.25rem] rounded-t-lg shadow-2xl transition group-even:-left-40 group-even:right-[initial] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-[1.04] group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 sm:block"
        />
      </section>
    </motion.div>
  );
}
