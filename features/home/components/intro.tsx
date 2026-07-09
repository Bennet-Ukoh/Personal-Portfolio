"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import profileImg from "/public/profileimage.jpg";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="flex min-h-[calc(100dvh-7rem)] w-full max-w-[55rem] scroll-mt-[100rem] items-center"
    >
      <div className="flex w-full flex-col items-center gap-6 text-center sm:flex-row sm:items-center sm:gap-12 sm:text-left">

        {/* Profile image */}
        <div className="relative shrink-0">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src={profileImg}
              alt="Bennet portrait"
              width={200}
              height={200}
              quality={95}
              priority
              className="h-[150px] w-[150px] rounded-full border-[0.35rem] border-white object-cover shadow-xl sm:h-[210px] sm:w-[210px]"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-2 right-2 text-3xl sm:bottom-4 sm:right-3 sm:text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 125, delay: 0.1, duration: 0.7 }}
          >
            👋
          </motion.span>
        </div>

        {/* Text content */}
        <div className="flex flex-col items-center sm:items-start">
          <motion.div
            className="mb-3 flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400 sm:justify-start"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            Open to remote opportunities
          </motion.div>

          <motion.h1
            className="mb-2 text-xl font-medium !leading-[1.5] sm:text-4xl"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <span className="font-bold">Hello, I'm Bennet.</span> I'm a{" "}
            <span className="font-bold">Frontend Engineer</span> specialising
            in <span className="underline">React & Next.js</span>.
          </motion.h1>

          <motion.p
            className="mb-5 text-sm text-gray-500 dark:text-gray-400 sm:text-base"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
          >
            Currently leading frontend engineering at{" "}
            <span className="font-medium text-gray-700 dark:text-gray-200">
              CrystalLattice Limited
            </span>
            .
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-2 font-medium sm:justify-start"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            <Link
              href="#contact"
              className="group flex items-center gap-2 rounded-full bg-gray-900 px-5 py-2.5 text-sm text-white outline-none transition hover:scale-110 hover:bg-gray-950 focus:scale-110 active:scale-105 sm:px-7 sm:py-3 sm:text-base dark:bg-black"
              onClick={() => {
                setActiveSection("Contact");
                setTimeOfLastClick(Date.now());
              }}
            >
              Contact me here{" "}
              <BsArrowRight className="opacity-70 transition group-hover:translate-x-1" />
            </Link>

            <a
              className="borderBlack group flex cursor-pointer items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm outline-none transition hover:scale-110 focus:scale-110 active:scale-105 sm:px-7 sm:py-3 sm:text-base dark:bg-white/10"
              href="/BENNET.docx"
              download
            >
              Download CV{" "}
              <HiDownload className="opacity-60 transition group-hover:translate-y-1" />
            </a>

            <a
              className="borderBlack flex cursor-pointer items-center gap-2 rounded-full bg-white p-3 text-gray-700 transition hover:scale-[1.15] hover:text-gray-950 focus:scale-[1.15] active:scale-105 sm:p-4 dark:bg-white/10 dark:text-white/60"
              href="https://linkedin.com/in/ukohbennet"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my LinkedIn profile"
            >
              <BsLinkedin />
            </a>

            <a
              className="borderBlack flex cursor-pointer items-center gap-2 rounded-full bg-white p-3 text-lg text-gray-700 transition hover:scale-[1.15] hover:text-gray-950 focus:scale-[1.15] active:scale-105 sm:p-4 sm:text-[1.35rem] dark:bg-white/10 dark:text-white/60"
              href="https://github.com/Bennet-Ukoh"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my GitHub profile"
            >
              <FaGithubSquare />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
