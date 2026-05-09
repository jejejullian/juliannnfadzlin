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
          className="p-2.5 rounded-xl text-[#737373] hover:text-[#ededed] transition-colors cursor-pointer"
          style={{ background: "#1c1c1c", border: "1px solid #2a2a2a" }}
        >
          <FiArrowLeft size={16} />
        </button>
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-[#ededed]">Tambah Project</h1>
          <p className="text-sm text-[#737373] mt-0.5">Isi detail project baru untuk portofolio</p>
        </div>
      </div>

      {/* ── Form Card ── */}
      <div
        className="max-w-xl rounded-2xl p-6 md:p-8"
        style={{ background: "#141414", border: "1px solid #2a2a2a" }}
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
