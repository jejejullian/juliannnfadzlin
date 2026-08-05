import { projectsData, cardThemes } from "@/data";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects = [...projectsData].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <section id="project" className="mt-16 md:mt-20 lg:mt-24 scroll-mt-24">
      <div className="px-5 md:px-page mb-10 md:mb-16">
        <p className="text-sm md:text-base text-neutral-500 uppercase tracking-widest mb-2 md:mb-3">Portfolio</p>
        <h2 className="text-3xl md:text-5xl lg:text-[72px] font-bold uppercase leading-none">Featured Work</h2>
      </div>

      <div className="relative">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            theme={cardThemes[index % cardThemes.length]}
            isDark={index % 2 === 0}
            index={index}
            topOffset={64 + index * 20}
          />
        ))}
      </div>

      <div className="h-16 lg:h-20" />
    </section>
  );
}