import type { ReactNode } from "react";

type SectionHeadingProps = {
  children: ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="mb-6 text-center text-3xl font-semibold capitalize text-slate-800 dark:text-white/70">
      {children}
    </h2>
  );
}
