"use client";

import { Fragment } from "react";
import SectionHeading from "@/components/ui/section-heading";
import { projectsData } from "./data/project";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="mb-16 scroll-mt-28 sm:mb-40">
      <SectionHeading>Projects</SectionHeading>
      <div>
        {projectsData.map((project) => (
          <Fragment key={project.title}>
            <Project {...project} />
          </Fragment>
        ))}
      </div>
    </section>
  );
}
