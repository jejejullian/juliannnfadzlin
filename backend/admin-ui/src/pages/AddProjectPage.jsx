// ============================================================
// src/pages/AddProjectPage.jsx
// Halaman tambah project baru
// ============================================================

import { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import ProjectForm from "../components/ProjectForm";
import { createProject } from "../lib/api";

export default function AddProjectPage({ setActivePage, showToast }) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (formData) => {
    setLoading(true);
    try {
      await createProject(formData);
      showToast("success", "Project berhasil ditambahkan! 🎉");
      setActivePage("dashboard");
    } catch (err) {
      showToast("error", err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-5 md:p-8 animate-fade-up">
      {/* ── Page Header ── */}
      <div className="flex items-center gap-4 mb-8">
        <button
          onClick={() => setActivePage("dashboard")}
          className="p-2.5 rounded-xl text-muted hover:text-[#ededed] transition-colors cursor-pointer"
          style={{ background: "var(--color-surface-2)", border: "1px solid var(--color-border)" }}
        >
          <FiArrowLeft size={16} />
        </button>
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-[#ededed]">Tambah Project</h1>
          <p className="text-sm text-muted mt-0.5">Isi detail project baru untuk portofolio</p>
        </div>
      </div>

      {/* ── Form Card ── */}
      <div
        className="max-w-xl rounded-2xl p-6 md:p-8"
        style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}
      >
        <ProjectForm
          onSubmit={handleSubmit}
          onCancel={() => setActivePage("dashboard")}
          loading={loading}
        />
      </div>
    </div>
  );
}
