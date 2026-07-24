"use client";

import { Fragment } from "react";
import SectionHeading from "@/components/ui/section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "./data/experience";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  return (
    <section id="experience" ref={ref} className="mb-16 scroll-mt-28 sm:mb-40">
      <SectionHeading>Experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item) => (
          <Fragment key={item.title}>
            <VerticalTimelineElement
              visible={true}
              contentStyle={{
                background:
                  theme === "light" ? "#ffffff" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "none",
                border:
                  theme === "light"
                    ? "1px solid rgba(15, 37, 69, 0.1)"
                    : "1px solid rgba(255, 255, 255, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #7c8aa3"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.date}
              dateClassName="sm:mx-4"
              icon={item.icon}
              iconStyle={{
                background:
                  theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize text-[#0F2545] dark:text-white">{item.title}</h3>
              <p className="!mt-0 font-normal text-[#0F2545] dark:text-white">{item.location}</p>
              <p className="!mt-1 !font-normal text-[#3C4B63] dark:text-white/75">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
