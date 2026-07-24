"use client";

import { useTheme } from "@/context/theme-context";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="fixed bottom-5 left-5 flex h-[3rem] w-[3rem] items-center justify-center rounded-full border border-[#0f2545]/10 bg-white/80 text-[#0F2545] shadow-2xl backdrop-blur-[0.5rem] transition-all hover:scale-[1.15] active:scale-105 dark:bg-gray-950 dark:text-inherit"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}
