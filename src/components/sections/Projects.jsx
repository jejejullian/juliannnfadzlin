import { projectsData } from "../../data";
import { FiArrowUpRight } from "react-icons/fi";

export default function Projects() {
  // Sort newest → oldest using the precise date field (YYYY-MM)
  const projects = [...projectsData].sort((a, b) => b.date.localeCompare(a.date));

  // Alternating color themes for stacked cards — dark/light rhythm
  const cardThemes = [
    { bg: "var(--color-dark)",       text: "var(--color-light)",    accent: "var(--color-muted)",      iconColor: "var(--color-muted-light)" },
    { bg: "var(--color-card-light)", text: "var(--color-dark)",     accent: "var(--color-muted-dark)", iconColor: "var(--color-muted-dark)"  },
    { bg: "var(--color-dark)",       text: "var(--color-light)",    accent: "var(--color-muted)",      iconColor: "var(--color-muted-light)" },
    { bg: "var(--color-card-light)", text: "var(--color-dark)",     accent: "var(--color-muted-dark)", iconColor: "var(--color-muted-dark)"  },
  ];

  return (
    <section id="project" className="mt-16 md:mt-20 lg:mt-24 scroll-mt-24">
      {/* Section Heading */}
      <div className="px-5 md:px-page mb-10 md:mb-16">
        <p className="text-sm md:text-base text-neutral-500 uppercase tracking-widest mb-2 md:mb-3">
          Portfolio
        </p>
        <h2 className="text-3xl md:text-5xl lg:text-[72px] font-bold uppercase leading-none">
          Featured Work
        </h2>
      </div>

      {/* Stacked Cards Container */}
      <div className="relative">
        {projects.map((project, index) => {
          const theme = cardThemes[index % cardThemes.length];
          const isDark = index % 2 === 0;
          // Each card sticks a bit lower than the previous one
          const topOffset = 64 + index * 20;

          return (
            <div
              key={project.id}
              className="sticky px-3 md:px-5 lg:px-8"
              style={{
                top: `${topOffset}px`,
                marginBottom: "40px",
                zIndex: index + 1,
              }}
            >
              <div
                className="rounded-2xl md:rounded-3xl lg:rounded-[32px] overflow-hidden transition-shadow duration-500"
                style={{
                  backgroundColor: theme.bg,
                  color: theme.text,
                  boxShadow: `0 25px 60px -15px rgba(0,0,0,${isDark ? "0.5" : "0.2"})`,
                }}
              >
                <div className="flex flex-col lg:flex-row">
                  {/* === Image Side === */}
                  <div className="lg:w-7/12 overflow-hidden relative group">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-[220px] md:h-[320px] lg:h-[520px] object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    {/* Gradient overlay on hover */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        background: `linear-gradient(to top, ${theme.bg}90, transparent 60%)`,
                      }}
                    />
                    {/* Project number watermark on image */}
                    <span
                      className="absolute bottom-4 left-6 md:bottom-6 md:left-10 text-[80px] md:text-[120px] lg:text-[160px] font-black leading-none opacity-0 group-hover:opacity-[0.08] transition-opacity duration-700 pointer-events-none select-none"
                      style={{ color: theme.text }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* === Info Side === */}
                  <div className="lg:w-5/12 p-6 md:p-10 lg:p-14 flex flex-col justify-between">
                    <div>
                      {/* Number + Year Row */}
                      <div className="flex items-baseline justify-between mb-6 md:mb-8">
                        <span
                          className="text-5xl md:text-6xl lg:text-[88px] font-black leading-none"
                          style={{ color: theme.text, opacity: 0.06 }}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span
                          className="text-xs md:text-sm font-medium tracking-widest uppercase"
                          style={{ color: theme.accent }}
                        >
                          — {project.year}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl md:text-3xl lg:text-[40px] font-bold mb-2 md:mb-3 leading-tight">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p
                        className="text-sm md:text-lg capitalize mb-6 md:mb-8"
                        style={{ color: theme.accent }}
                      >
                        {project.desc}
                      </p>

                      {/* Tech Stack Icons */}
                      <div className="flex items-center gap-3 md:gap-4">
                        {project.icons.map((Icon, iconIndex) => (
                          <div
                            key={iconIndex}
                            className="p-2 md:p-2.5 rounded-xl transition-colors duration-300"
                            style={{
                              backgroundColor: isDark
                                ? "rgba(255,255,255,0.06)"
                                : "rgba(0,0,0,0.05)",
                            }}
                          >
                            <Icon
                              className="w-5 h-5 md:w-6 md:h-6"
                              style={{ color: theme.iconColor }}
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="mt-8 md:mt-10">
                      {project.link ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/btn inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-3.5 rounded-full border text-sm md:text-base font-semibold transition-all duration-300 hover:gap-3"
                          style={{
                            borderColor: isDark
                              ? "rgba(237,237,237,0.3)"
                              : "rgba(10,10,10,0.2)",
                            color: theme.text,
                            backgroundColor: isDark
                              ? "rgba(255,255,255,0.04)"
                              : "rgba(0,0,0,0.03)",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = isDark
                              ? "rgba(255,255,255,0.1)"
                              : "rgba(0,0,0,0.08)";
                            e.currentTarget.style.borderColor = isDark
                              ? "rgba(237,237,237,0.6)"
                              : "rgba(10,10,10,0.4)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = isDark
                              ? "rgba(255,255,255,0.04)"
                              : "rgba(0,0,0,0.03)";
                            e.currentTarget.style.borderColor = isDark
                              ? "rgba(237,237,237,0.3)"
                              : "rgba(10,10,10,0.2)";
                          }}
                        >
                          View Project
                          <FiArrowUpRight
                            size={18}
                            className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                          />
                        </a>
                      ) : (
                        <span
                          className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-3.5 rounded-full border text-sm md:text-base font-medium"
                          style={{
                            borderColor: isDark
                              ? "rgba(237,237,237,0.15)"
                              : "rgba(10,10,10,0.1)",
                            color: theme.accent,
                            opacity: 0.6,
                          }}
                        >
                          Private Project
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom spacer — ensures the last card can scroll into its sticky position */}
      <div className="h-16 lg:h-20" />
    </section>
  );
}