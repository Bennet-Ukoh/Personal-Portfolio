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
      className="mb-12 max-w-[50rem] scroll-mt-[100rem] text-center sm:mb-24"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src={profileImg}
              alt="Bennet portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-[192px] w-[192px] rounded-full border-[0.35rem] border-white object-cover shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-4 right-3 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.div
        className="mt-4 flex items-center justify-center gap-2 text-sm text-[#3C4B63] dark:text-gray-400"
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
        className="mb-2 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <span className="font-bold">Hello, I'm Bennet.</span> I'm a{" "}
        <span className="font-bold">Frontend Engineer</span> specialising in{" "}
        <span className="underline">React & Next.js</span>.
      </motion.h1>

      <motion.p
        className="mb-6 px-4 text-sm text-[#3C4B63] dark:text-gray-400 sm:text-base"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.12 }}
      >
        Currently leading frontend engineering at{" "}
        <span className="font-medium text-[#0F2545] dark:text-gray-200">
          CrystalLattice Limited
        </span>
        .
      </motion.p>

      <motion.div
        className="flex flex-wrap items-center justify-center gap-2 px-4 text-sm font-medium sm:flex-row sm:text-base"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
      >
        <Link
          href="#contact"
          className="group flex items-center gap-2 rounded-full bg-[#132C4F] px-5 py-2.5 text-white outline-none transition hover:scale-110 hover:bg-[#0B1E3A] focus:scale-110 active:scale-105 dark:bg-black"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 transition group-hover:translate-x-1" />
        </Link>

        <a
          className="borderBlack group flex cursor-pointer items-center gap-2 rounded-full bg-white px-5 py-2.5 outline-none transition hover:scale-110 focus:scale-110 active:scale-105 dark:bg-white/10"
          href="/Bennet_Ukoh_CV.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 transition group-hover:translate-y-1" />
        </a>

        <a
          className="borderBlack hidden cursor-pointer items-center gap-2 rounded-full bg-white p-3 text-[#3C4B63] transition hover:scale-[1.15] hover:text-[#0F2545] focus:scale-[1.15] active:scale-105 dark:bg-white/10 dark:text-white/60 sm:flex"
          href="https://linkedin.com/in/ukohbennet"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit my LinkedIn profile"
        >
          <BsLinkedin />
        </a>

        <a
          className="borderBlack hidden cursor-pointer items-center gap-2 rounded-full bg-white p-3 text-lg text-[#3C4B63] transition hover:scale-[1.15] hover:text-[#0F2545] focus:scale-[1.15] active:scale-105 dark:bg-white/10 dark:text-white/60 sm:flex"
          href="https://github.com/Bennet-Ukoh"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit my GitHub profile"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
