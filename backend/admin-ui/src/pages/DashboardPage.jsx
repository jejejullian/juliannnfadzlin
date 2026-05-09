// ============================================================
// src/pages/DashboardPage.jsx
// Halaman utama — tabel project + stat cards + CRUD actions
// ============================================================

import { useState, useEffect, useCallback } from "react";
import {
  FiEdit2, FiTrash2, FiExternalLink, FiGithub,
  FiLayers, FiPlus, FiRefreshCw, FiSearch
} from "react-icons/fi";
import { fetchProjects, deleteProject, createProject, updateProject, uploadImage } from "../lib/api";
import ProjectForm from "../components/ProjectForm";
import ConfirmModal from "../components/ConfirmModal";

export default function DashboardPage({ setActivePage, showToast }) {
  const [projects, setProjects] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(false);

  // Edit modal
  const [editTarget, setEditTarget] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

  // Delete confirm
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  // Load projects
  const loadProjects = useCallback(async () => {
    setLoading(true);
    try {
      const data = await fetchProjects();
      setProjects(data);
      setFiltered(data);
    } catch (err) {
      showToast("error", "Gagal memuat project: " + err.message);
    } finally {
      setLoading(false);
    }
  }, [showToast]);

  useEffect(() => { loadProjects(); }, [loadProjects]);

  // Search filter
  useEffect(() => {
    if (!search.trim()) {
      setFiltered(projects);
    } else {
      const q = search.toLowerCase();
      setFiltered(
        projects.filter(
          (p) =>
            p.title.toLowerCase().includes(q) ||
            p.tech_stack.toLowerCase().includes(q) ||
            p.description.toLowerCase().includes(q)
        )
      );
    }
  }, [search, projects]);

  // --- Handle Edit Submit ---
  const handleEditSubmit = async ({ projectData, imageFile }) => {
    setActionLoading(true);
    try {
      let finalData = { ...projectData };

      // Upload gambar baru jika ada
      if (imageFile) {
        const imageUrl = await uploadImage(imageFile);
        finalData.image_url = imageUrl;
      }

      await updateProject(editTarget.id, finalData);
      showToast("success", "Project berhasil diupdate!");
      setShowEditModal(false);
      setEditTarget(null);
      loadProjects();
    } catch (err) {
      showToast("error", err.message);
    } finally {
      setActionLoading(false);
    }
  };

  // --- Handle Delete ---
  const handleDelete = async () => {
    setActionLoading(true);
    try {
      await deleteProject(deleteTarget.id);
      showToast("success", `"${deleteTarget.title}" berhasil dihapus.`);
      setShowDeleteModal(false);
      setDeleteTarget(null);
      loadProjects();
    } catch (err) {
      showToast("error", err.message);
    } finally {
      setActionLoading(false);
    }
  };

  // Format date
  const formatDate = (d) =>
    new Date(d).toLocaleDateString("id-ID", {
      day: "2-digit", month: "short", year: "numeric",
    });

  return (
    <div className="p-5 md:p-8 space-y-6 animate-fade-up">
      {/* ── Page Header ── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-[#ededed]">Dashboard</h1>
          <p className="text-sm text-muted mt-0.5">Kelola semua project portfolio</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={loadProjects}
            disabled={loading}
            title="Refresh"
            className="p-2.5 rounded-xl text-muted hover:text-[#ededed] transition-colors cursor-pointer"
            style={{ background: "var(--color-surface-2)", border: "1px solid var(--color-border)" }}
          >
            <FiRefreshCw size={16} className={loading ? "animate-spin-slow" : ""} />
          </button>
          <button
            id="goto-add-btn"
            onClick={() => setActivePage("add")}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold cursor-pointer transition-colors"
            style={{ background: "#ededed", color: "#0a0a0a" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#ffffff")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#ededed")}
          >
            <FiPlus size={16} />
            Tambah Project
          </button>
        </div>
      </div>

      {/* ── Stat Cards ── */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {[
          { label: "Total Project", value: projects.length, icon: FiLayers },
          {
            label: "Live Project",
            value: projects.filter((p) => p.live_link).length,
            icon: FiExternalLink,
          },
          {
            label: "Private Project",
            value: projects.filter((p) => !p.live_link).length,
            icon: FiGithub,
          },
        ].map(({ label, value, icon: Icon }) => (
          <div
            key={label}
            className="rounded-2xl p-5"
            style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}
          >
            <div className="flex items-start justify-between mb-3">
              <p className="text-xs text-muted font-medium">{label}</p>
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: "rgba(237,237,237,0.06)" }}
              >
                <Icon size={15} className="text-muted" />
              </div>
            </div>
            <p className="text-3xl font-black text-[#ededed]">{value}</p>
          </div>
        ))}
      </div>

      {/* ── Search + Table ── */}
      <div className="rounded-2xl overflow-hidden" style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}>
        {/* Search Bar */}
        <div className="p-4 flex items-center gap-3" style={{ borderBottom: "1px solid var(--color-border)" }}>
          <FiSearch size={15} className="text-[#555] shrink-0" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Cari project, tech stack..."
            className="flex-1 bg-transparent text-sm text-[#ededed] placeholder-[#555] outline-none"
          />
          {search && (
            <button onClick={() => setSearch("")} className="text-[#555] hover:text-[#ededed] transition-colors cursor-pointer">
              <FiSearch size={13} />
            </button>
          )}
        </div>

        {/* Table */}
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="w-7 h-7 rounded-full border-2 border-border border-t-[#ededed] animate-spin-slow" />
          </div>
        ) : filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 gap-3">
            <FiLayers size={32} className="text-border" />
            <p className="text-sm text-[#555]">
              {search ? "Tidak ada project yang cocok." : "Belum ada project. Tambahkan yang pertama!"}
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
                  {["Gambar", "Judul", "Deskripsi", "Tech Stack", "Link", "Dibuat", "Aksi"].map((h) => (
                    <th
                      key={h}
                      className="text-left px-5 py-3 text-xs font-medium text-[#555] uppercase tracking-wider whitespace-nowrap"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map((p, i) => (
                  <tr
                    key={p.id}
                    className="group transition-colors"
                    style={{
                      borderBottom: i < filtered.length - 1 ? "1px solid var(--color-surface-2)" : "none",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "#1a1a1a")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                  >
                    {/* Gambar */}
                    <td className="px-5 py-3">
                      <div className="w-16 h-11 rounded-lg overflow-hidden shrink-0" style={{ background: "var(--color-surface-2)" }}>
                        {p.image_url ? (
                          <img
                            src={p.image_url}
                            alt={p.title}
                            className="w-full h-full object-cover object-top"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <FiLayers size={14} className="text-[#555]" />
                          </div>
                        )}
                      </div>
                    </td>

                    {/* Judul */}
                    <td className="px-5 py-3">
                      <p className="font-semibold text-[#ededed] whitespace-nowrap max-w-[160px] truncate">
                        {p.title}
                      </p>
                    </td>

                    {/* Deskripsi */}
                    <td className="px-5 py-3">
                      <p className="text-muted capitalize whitespace-nowrap max-w-[140px] truncate">
                        {p.description}
                      </p>
                    </td>

                    {/* Tech Stack */}
                    <td className="px-5 py-3">
                      <div className="flex flex-wrap gap-1 max-w-[200px]">
                        {p.tech_stack.split(",").slice(0, 3).map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 rounded-full text-xs text-[#a3a3a3] whitespace-nowrap"
                            style={{ background: "rgba(237,237,237,0.06)", border: "1px solid var(--color-border)" }}
                          >
                            {t.trim()}
                          </span>
                        ))}
                        {p.tech_stack.split(",").length > 3 && (
                          <span className="px-2 py-0.5 text-xs text-[#555]">
                            +{p.tech_stack.split(",").length - 3}
                          </span>
                        )}
                      </div>
                    </td>

                    {/* Link */}
                    <td className="px-5 py-3">
                      <div className="flex items-center gap-2">
                        {p.live_link && (
                          <a
                            href={p.live_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted hover:text-[#ededed] transition-colors"
                            title="Live Demo"
                          >
                            <FiExternalLink size={15} />
                          </a>
                        )}
                        {p.github_link && (
                          <a
                            href={p.github_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted hover:text-[#ededed] transition-colors"
                            title="GitHub"
                          >
                            <FiGithub size={15} />
                          </a>
                        )}
                        {!p.live_link && !p.github_link && (
                          <span className="text-xs text-[#555]">—</span>
                        )}
                      </div>
                    </td>

                    {/* Dibuat */}
                    <td className="px-5 py-3">
                      <p className="text-[#555] text-xs whitespace-nowrap">{formatDate(p.createdAt)}</p>
                    </td>

                    {/* Aksi */}
                    <td className="px-5 py-3">
                      <div className="flex items-center gap-2">
                        <button
                          id={`edit-btn-${p.id}`}
                          onClick={() => { setEditTarget(p); setShowEditModal(true); }}
                          className="p-2 rounded-lg text-muted hover:text-[#ededed] transition-colors cursor-pointer"
                          style={{ background: "rgba(237,237,237,0.04)", border: "1px solid var(--color-border)" }}
                          title="Edit"
                        >
                          <FiEdit2 size={14} />
                        </button>
                        <button
                          id={`delete-btn-${p.id}`}
                          onClick={() => { setDeleteTarget(p); setShowDeleteModal(true); }}
                          className="p-2 rounded-lg text-muted hover:text-red-400 transition-colors cursor-pointer"
                          style={{ background: "rgba(239,68,68,0.04)", border: "1px solid rgba(239,68,68,0.15)" }}
                          title="Hapus"
                        >
                          <FiTrash2 size={14} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* ── Edit Modal ── */}
      {showEditModal && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center px-4 py-8 animate-fade-in overflow-y-auto"
          style={{ background: "rgba(0,0,0,0.85)" }}
          onClick={() => !actionLoading && setShowEditModal(false)}
        >
          <div
            className="w-full max-w-lg rounded-2xl p-6 my-auto animate-fade-up"
            style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-base font-bold text-[#ededed]">Edit Project</h2>
              <button
                onClick={() => !actionLoading && setShowEditModal(false)}
                className="text-muted hover:text-[#ededed] transition-colors cursor-pointer"
              >
                <FiPlus size={20} className="rotate-45" />
              </button>
            </div>
            <ProjectForm
              initialData={editTarget}
              onSubmit={handleEditSubmit}
              onCancel={() => setShowEditModal(false)}
              loading={actionLoading}
            />
          </div>
        </div>
      )}

      {/* ── Delete Confirm Modal ── */}
      <ConfirmModal
        isOpen={showDeleteModal}
        title="Hapus Project?"
        message={`Project "${deleteTarget?.title}" akan dihapus permanen dan tidak bisa dikembalikan.`}
        onConfirm={handleDelete}
        onCancel={() => !actionLoading && setShowDeleteModal(false)}
        loading={actionLoading}
      />
    </div>
  );
}
