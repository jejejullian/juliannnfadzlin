// ============================================================
// src/components/sections/Projects.jsx
// Membaca project dari Backend API (bukan lagi data statis)
// ============================================================

// ⚠️ INTEGRASI BACKEND → FRONTEND
// Pastikan VITE_API_URL sudah diset di file .env frontend:
//   VITE_API_URL=http://localhost:5000        (development)
//   VITE_API_URL=https://your-backend.railway.app  (production)

import { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";

// Ambil URL backend dari .env (Vite mengekspos variable dengan prefix VITE_)
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

// Warna tema kartu bergantian (sama seperti sebelumnya)
const projectThemes = [
  { bg: "#0a0a0a", text: "#ededed", accent: "#737373", iconColor: "#a3a3a3" },
  { bg: "#f5f5f5", text: "#0a0a0a", accent: "#525252", iconColor: "#525252" },
  { bg: "#0a0a0a", text: "#ededed", accent: "#737373", iconColor: "#a3a3a3" },
  { bg: "#f5f5f5", text: "#0a0a0a", accent: "#525252", iconColor: "#525252" },
];

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch(`${API_URL}/api/projects`);
        if (!res.ok) throw new Error("Gagal memuat project");
        const data = await res.json();
        setProjects(data);
      } catch (err) {
        console.error("[Projects] Fetch error:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section id="project" className="mt-32 lg:mt-64 scroll-mt-24">
      {/* Section Heading */}
      <div className="px-5 md:px-[60px] mb-10 md:mb-16">
        <p className="text-sm md:text-base text-neutral-500 uppercase tracking-widest mb-2 md:mb-3">
          Portfolio
        </p>
        <h2 className="text-3xl md:text-5xl lg:text-[72px] font-bold uppercase leading-none">
          Featured Work
        </h2>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="px-5 md:px-[60px] flex flex-col gap-4">
          {[1, 2].map((n) => (
            <div
              key={n}
              className="rounded-2xl md:rounded-3xl h-[220px] md:h-[320px] animate-pulse"
              style={{ background: "#e5e5e5" }}
            />
          ))}
        </div>
      )}

      {/* Error State */}
      {!loading && error && (
        <div className="px-5 md:px-[60px]">
          <div className="rounded-2xl p-8 text-center" style={{ background: "#f5f5f5" }}>
            <p className="text-neutral-500 text-sm">
              Gagal memuat project. Pastikan backend berjalan.
            </p>
            <p className="text-xs text-neutral-400 mt-1">{error}</p>
          </div>
        </div>
      )}

      {/* Empty State */}
      {!loading && !error && projects.length === 0 && (
        <div className="px-5 md:px-[60px]">
          <div className="rounded-2xl p-8 text-center" style={{ background: "#f5f5f5" }}>
            <p className="text-neutral-500 text-sm">Belum ada project yang ditampilkan.</p>
          </div>
        </div>
      )}

      {/* Stacked Cards Container */}
      {!loading && !error && projects.length > 0 && (
        <div className="relative">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              theme={projectThemes[index % projectThemes.length]}
              isDark={index % 2 === 0}
            />
          ))}
        </div>
      )}

      {/* Bottom spacer */}
      <div className="h-32 lg:h-64" />
    </section>
  );
}