import Intro from "@/features/home/components/intro";
import SectionDivider from "@/components/ui/section-divider";
import About from "@/features/home/components/about";
import Projects from "@/features/projects/components/projects";
import Skills from "@/features/home/components/skills";
import Experience from "@/features/home/components/experience";
import Contact from "@/features/contact/components/contact";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
