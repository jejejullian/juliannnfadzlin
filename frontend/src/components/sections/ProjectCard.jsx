// ============================================================
// src/components/sections/ProjectCard.jsx
// Disesuaikan dengan field dari Backend API:
//   project.title       → Judul
//   project.description → Deskripsi / tipe project
//   project.tech_stack  → String CSV: "React, Tailwind, Supabase"
//   project.image_url   → URL gambar dari Supabase Storage
//   project.live_link   → Link demo (optional)
//   project.github_link → Link GitHub (optional)
//   project.createdAt   → Tanggal dibuat (diambil tahunnya)
// ============================================================

import { FiArrowUpRight, FiGithub } from "react-icons/fi";

export default function ProjectCard({ project, index, theme, isDark }) {
  // Setiap card sticky sedikit lebih rendah dari yang sebelumnya
  const topOffset = 64 + index * 20;

  // Ambil tahun dari createdAt
  const year = project.createdAt
    ? new Date(project.createdAt).getFullYear()
    : "—";

  // Parse tech_stack string menjadi array (maks 3 tampil sebagai badge)
  const techList = project.tech_stack
    ? project.tech_stack.split(",").map((t) => t.trim()).filter(Boolean)
    : [];

  return (
    <div
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
              src={project.image_url}
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
                  — {year}
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
                {project.description}
              </p>

              {/* Tech Stack Badges */}
              {techList.length > 0 && (
                <div className="flex flex-wrap items-center gap-2 md:gap-3">
                  {techList.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-xs font-medium"
                      style={{
                        backgroundColor: isDark
                          ? "rgba(255,255,255,0.08)"
                          : "rgba(0,0,0,0.06)",
                        color: theme.iconColor,
                        border: `1px solid ${isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)"}`,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                  {techList.length > 4 && (
                    <span
                      className="text-xs"
                      style={{ color: theme.accent, opacity: 0.6 }}
                    >
                      +{techList.length - 4} more
                    </span>
                  )}
                </div>
              )}
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 md:mt-10 flex items-center gap-3 flex-wrap">
              {project.live_link ? (
                <a
                  href={project.live_link}
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

              {/* GitHub Link (jika ada) */}
              {project.github_link && (
                <a
                  href={project.github_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-3 md:py-3.5 rounded-full border text-sm transition-all duration-300"
                  style={{
                    borderColor: isDark
                      ? "rgba(237,237,237,0.2)"
                      : "rgba(10,10,10,0.15)",
                    color: theme.accent,
                    backgroundColor: "transparent",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = isDark
                      ? "rgba(255,255,255,0.06)"
                      : "rgba(0,0,0,0.04)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                  }}
                >
                  <FiGithub size={16} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
