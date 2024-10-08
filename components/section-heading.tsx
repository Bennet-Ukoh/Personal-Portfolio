import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="mb-8 text-center text-3xl font-bold capitalize text-black/90 dark:text-white/70">
      {children}
    </h2>
  );
}
