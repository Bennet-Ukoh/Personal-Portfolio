"use client";

import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <motion.div
      className="my-10 block h-16 w-1 rounded-full bg-gray-200 dark:bg-gray-700 sm:hidden"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    />
  );
}
