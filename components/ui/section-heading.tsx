import type { ReactNode } from "react";

type SectionHeadingProps = {
  children: ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="mb-8 text-center text-3xl font-semibold capitalize text-black/80 dark:text-white/70">
      {children}
    </h2>
  );
}
