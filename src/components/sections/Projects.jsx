import { useState } from "react";
import html from "../../assets/icon/html.png";
import css from "../../assets/icon/css.png";
import bootstrap from "../../assets/icon/bootstrap.png";
import javascript from "../../assets/icon/js.png";
import php from "../../assets/icon/php.png";
import tailwind from "../../assets/icon/tailwind.png";
import niki from "../../assets/image/project1.png";
import yadika from "../../assets/image/project2.png";
import forecazt from "../../assets/image/project3.png";

export default function Projects() {
  // State for tracking which project is open in the accordion
  const [openProjects, setOpenProject] = useState(null);

  // Array of project data
  const projects = [
    {
      id: 1,
      title: "PT. Niki Akurasi Persada",
      year: "2023",
      desc: "Company Profile",
      icons: [html, css, bootstrap],
      image: niki,
      link: "https://niki-akurasi-persada.vercel.app/",
    },
    {
      id: 2,
      title: "Yadika's Inventory",
      year: "2024",
      desc: "Management System",
      icons: [php, javascript, bootstrap],
      image: yadika,
      link: null,
    },
    {
      id: 3,
      title: "Forecazt",
      year: "2025",
      desc: "weather app",
      icons: [html, javascript, tailwind],
      image: forecazt,
      link: "https://weatherapp-odin-project.vercel.app/",
    },
  ];

  // Function to toggle project details visibility
  const toggleProject = (projectId) => {
    if (openProjects === projectId) {
      setOpenProject(null);
    } else {
      setOpenProject(projectId);
    }
  };

  return (
    <section className="px-5 md:px-[60px] mt-32 lg:mt-64 pb-32 lg:pb-64">
      <div
        className="flex flex-col lg:flex-row gap-4 md:gap-8
       lg:gap-36"
      >
        {/* LEFT: Sticky Heading */}
        <div className="lg:w-8/12">
          <div className="lg:sticky lg:top-96 2xl:top-auto">
            <h2 className="text-xl md:text-4xl lg:text-[61px] font-bold uppercase">Featured Work</h2>
          </div>
        </div>

        {/* RIGHT: Project Cards */}
        <div className="lg:w-9/12 space-y-3">
          {projects.map((project) => (
            <div key={project.id} className="px-4 lg:px-10 py-2 lg:pt-6 border-2 border-black rounded-3xl lg:rounded-[64px] overflow-hidden transition-all duration-300">
              {/* Project header (clickable to toggle details) */}
              <div onClick={() => toggleProject(project.id)} className="cursor-pointer mb-3">
                {/* Row 1: Title & Year */}
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-base md:text-xl lg:text-2xl font-bold capitalize leading-4">{project.title}</h3>
                  <span className="text-base md:text-xl lg:text-2xl font-bold leading-4">{project.year}</span>
                </div>

                {/* Row 2: Icons & Description */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    {project.icons.map((icon, iconIndex) => (
                      <img key={iconIndex} src={icon} alt={`tech-icon-${iconIndex}`} className="w-3 md:w-5 lg:w-7 h-3 md:h-5 lg:h-7 object-contain" />
                    ))}
                  </div>
                  <p className="text-xs md:text-lg lg:text-xl leading-3 text-right capitalize">{project.desc}</p>
                </div>
              </div>

              {/* Accordion-style project details */}
              <div className={`overflow-hidden transition-all duration-500 ${openProjects === project.id ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`}>
                {/* Project image with link (if provided) */}
                {project.link && project.link !== "#" ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="block mb-3 rounded-2xl overflow-hidden hover:opacity-90 transition-opacity">
                    <img src={project.image} alt={project.title} className="w-full h-auto object-cover" />
                  </a>
                ) : (
                  <div className="block mb-3 rounded-2xl overflow-hidden">
                    <img src={project.image} alt={project.title} className="w-full h-auto object-cover" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
