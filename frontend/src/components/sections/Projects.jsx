// ============================================================
// src/components/sections/Projects.jsx
// UPDATED: Fetch langsung dari Supabase (tanpa Express backend)
// ============================================================

import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import ProjectCard from "./ProjectCard";

// Supabase client — baca dari environment variable Vite
const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

// Warna tema kartu bergantian
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
        const { data, error } = await supabase
          .from("Project")
          .select("*")
          .order("createdAt", { ascending: false });

        if (error) throw error;
        setProjects(data || []);
      } catch (err) {
        console.error("[Projects] Supabase fetch error:", err);
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
              className="rounded-2xl md:rounded-3xl h-[220px] md:h-80 animate-pulse"
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
              Gagal memuat project dari database.
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

      {/* Stacked Cards */}
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