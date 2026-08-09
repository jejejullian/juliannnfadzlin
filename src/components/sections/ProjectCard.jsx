import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";

export default function ProjectCard({ project, theme, isDark, index, topOffset }) {
  return (
    <div
      className="sticky px-5 md:px-page"
      style={{
        top: `${topOffset}px`,
        marginBottom: "40px",
        zIndex: index + 1,
      }}
    >
      <div
        className="rounded-2xl md:rounded-3xl lg:rounded-4xl overflow-hidden transition-shadow duration-500"
        style={{
          backgroundColor: theme.bg,
          color: theme.text,
          boxShadow: `0 25px 60px -15px rgba(0,0,0,${isDark ? "0.5" : "0.2"})`,
        }}
      >
        <div className="flex flex-col lg:flex-row">
          {/* === Image Side === */}
          <div className="lg:w-7/12 overflow-hidden relative group">
            <Image src={project.image} alt={project.title} className="w-full h-56 md:h-80 lg:h-520 object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: `linear-gradient(to top, ${theme.bg}90, transparent 60%)` }} />
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
              <div className="flex items-baseline justify-between mb-6 md:mb-8">
                <span className="text-5xl md:text-6xl lg:text-[88px] font-black leading-none" style={{ color: theme.text, opacity: 0.06 }}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-xs md:text-sm font-medium tracking-widest uppercase" style={{ color: theme.accent }}>
                  — {project.year}
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl lg:text-[40px] font-bold mb-2 md:mb-3 leading-tight">{project.title}</h3>

              <p className="text-sm md:text-lg capitalize mb-6 md:mb-8" style={{ color: theme.accent }}>
                {project.desc}
              </p>

              <div className="flex flex-wrap items-center gap-2 md:gap-4 w-full">
                {project.icons.map((Icon, iconIndex) => (
                  <div key={iconIndex} className="p-1.5 md:p-2.5 rounded-[10px] md:rounded-xl transition-colors duration-300" style={{ backgroundColor: isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.05)" }}>
                    <Icon className="w-5 h-5 md:w-6 md:h-6" style={{ color: theme.iconColor }} />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 md:mt-10">
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group/btn inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-3.5 rounded-full border text-sm md:text-base font-semibold transition-all duration-300 ${
                    isDark ? "border-white/30 bg-white/5 hover:bg-white/10 hover:border-white/60" : "border-black/20 bg-black/5 hover:bg-black/8 hover:border-black/40"
                  }`}
                  style={{ color: theme.text }}
                >
                  View Project
                  <FiArrowUpRight size={18} className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </a>
              ) : (
                <span
                  className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-3.5 rounded-full border text-sm md:text-base font-medium"
                  style={{
                    borderColor: isDark ? "rgba(237,237,237,0.15)" : "rgba(10,10,10,0.1)",
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
}
