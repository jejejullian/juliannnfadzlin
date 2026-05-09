// ============================================================
// src/components/ProjectForm.jsx
// Form untuk Create & Edit project — dengan upload gambar 5MB limit
// ============================================================

import { useState, useRef, useEffect } from "react";
import {
  FiUploadCloud,
  FiX,
  FiLink,
  FiGithub,
  FiTag,
  FiFileText,
  FiType,
} from "react-icons/fi";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

const INITIAL_FORM = {
  title: "",
  description: "",
  tech_stack: "",
  live_link: "",
  github_link: "",
};

export default function ProjectForm({ initialData, onSubmit, onCancel, loading }) {
  const [form, setForm] = useState(initialData || INITIAL_FORM);
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(initialData?.image_url || null);
  const [imageError, setImageError] = useState("");
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef(null);

  // Sync jika initialData berubah (saat edit)
  useEffect(() => {
    if (initialData) {
      setForm({
        title: initialData.title || "",
        description: initialData.description || "",
        tech_stack: initialData.tech_stack || "",
        live_link: initialData.live_link || "",
        github_link: initialData.github_link || "",
      });
      setImagePreview(initialData.image_url || null);
      setImageFile(null);
    }
  }, [initialData]);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFile = (file) => {
    setImageError("");
    if (!file) return;

    // Validasi tipe file
    const allowed = ["image/jpeg", "image/png", "image/webp", "image/gif"];
    if (!allowed.includes(file.type)) {
      setImageError("Format tidak didukung. Gunakan JPG, PNG, WebP, atau GIF.");
      return;
    }

    // Validasi ukuran — max 5MB
    if (file.size > MAX_FILE_SIZE) {
      setImageError(`Ukuran file terlalu besar. Maksimal 5MB (ukuran kamu: ${(file.size / 1024 / 1024).toFixed(1)}MB).`);
      return;
    }

    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    handleFile(file);
  };

  const handleFileInput = (e) => {
    handleFile(e.target.files[0]);
  };

  const clearImage = () => {
    setImageFile(null);
    setImagePreview(initialData?.image_url || null);
    setImageError("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validasi wajib
    if (!form.title.trim() || !form.description.trim() || !form.tech_stack.trim()) return;

    // Jika create, gambar wajib
    if (!initialData && !imageFile) {
      setImageError("Gambar project wajib diunggah.");
      return;
    }

    const projectData = {
      title: form.title.trim(),
      description: form.description.trim(),
      tech_stack: form.tech_stack.trim(),
      live_link: form.live_link.trim() || null,
      github_link: form.github_link.trim() || null,
    };

    onSubmit({ projectData, imageFile });
  };

  const isValid =
    form.title.trim() &&
    form.description.trim() &&
    form.tech_stack.trim() &&
    (initialData ? true : imageFile);

  const fieldStyle = {
    background: "#1c1c1c",
    border: "1px solid #2a2a2a",
    color: "#ededed",
  };

  const labelClass = "block text-xs font-medium text-[#737373] uppercase tracking-widest mb-2";
  const inputClass =
    "w-full px-4 py-3 rounded-xl text-sm placeholder-[#555] outline-none transition-all duration-200";

  const focusHandler = (e) => {
    e.target.style.borderColor = "#ededed";
    e.target.style.boxShadow = "0 0 0 3px rgba(237,237,237,0.06)";
  };
  const blurHandler = (e) => {
    e.target.style.borderColor = "#2a2a2a";
    e.target.style.boxShadow = "none";
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* ── Title ── */}
      <div>
        <label className={labelClass}>
          <span className="flex items-center gap-1.5">
            <FiType size={12} /> Judul Project *
          </span>
        </label>
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Contoh: PT. Niki Akurasi Persada"
          required
          className={inputClass}
          style={fieldStyle}
          onFocus={focusHandler}
          onBlur={blurHandler}
        />
      </div>

      {/* ── Description ── */}
      <div>
        <label className={labelClass}>
          <span className="flex items-center gap-1.5">
            <FiFileText size={12} /> Deskripsi / Tipe Project *
          </span>
        </label>
        <input
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Contoh: Company Profile, Management System..."
          required
          className={inputClass}
          style={fieldStyle}
          onFocus={focusHandler}
          onBlur={blurHandler}
        />
      </div>

      {/* ── Tech Stack ── */}
      <div>
        <label className={labelClass}>
          <span className="flex items-center gap-1.5">
            <FiTag size={12} /> Tech Stack *
          </span>
        </label>
        <input
          name="tech_stack"
          value={form.tech_stack}
          onChange={handleChange}
          placeholder="Contoh: React, Tailwind CSS, Supabase"
          required
          className={inputClass}
          style={fieldStyle}
          onFocus={focusHandler}
          onBlur={blurHandler}
        />
        <p className="text-xs text-[#555] mt-1.5">Pisahkan dengan koma</p>
      </div>

      {/* ── Image Upload ── */}
      <div>
        <label className={labelClass}>
          <span className="flex items-center gap-1.5">
            <FiUploadCloud size={12} />
            Gambar Project {!initialData && "*"}
          </span>
        </label>

        {imagePreview ? (
          <div className="relative group rounded-xl overflow-hidden" style={{ border: "1px solid #2a2a2a" }}>
            <img
              src={imagePreview}
              alt="Preview"
              className="w-full h-52 object-cover object-top"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="px-4 py-2 rounded-lg text-xs font-medium text-[#ededed] mr-2 cursor-pointer"
                style={{ background: "rgba(237,237,237,0.15)", border: "1px solid rgba(237,237,237,0.2)" }}
              >
                Ganti Gambar
              </button>
              <button
                type="button"
                onClick={clearImage}
                className="p-2 rounded-lg text-red-400 cursor-pointer"
                style={{ background: "rgba(239,68,68,0.15)", border: "1px solid rgba(239,68,68,0.2)" }}
              >
                <FiX size={14} />
              </button>
            </div>
            {imageFile && (
              <div className="absolute top-2 left-2 px-2 py-1 rounded-lg text-xs text-[#ededed]"
                style={{ background: "rgba(0,0,0,0.7)" }}>
                {(imageFile.size / 1024 / 1024).toFixed(1)} MB
              </div>
            )}
          </div>
        ) : (
          <div
            onDrop={handleDrop}
            onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
            onDragLeave={() => setDragOver(false)}
            onClick={() => fileInputRef.current?.click()}
            className="w-full h-44 rounded-xl flex flex-col items-center justify-center gap-2 cursor-pointer transition-all duration-200"
            style={{
              background: dragOver ? "rgba(237,237,237,0.06)" : "#1c1c1c",
              border: `2px dashed ${dragOver ? "#ededed" : "#2a2a2a"}`,
            }}
          >
            <FiUploadCloud size={28} className={dragOver ? "text-[#ededed]" : "text-[#555]"} />
            <p className="text-sm text-muted">
              {dragOver ? "Lepaskan untuk upload..." : "Drag & drop atau klik untuk pilih"}
            </p>
            <p className="text-xs text-[#555]">JPG, PNG, WebP, GIF — maks. <strong className="text-muted">5 MB</strong></p>
          </div>
        )}

        <input
          ref={fileInputRef}
          type="file"
          accept="image/jpeg,image/png,image/webp,image/gif"
          className="hidden"
          onChange={handleFileInput}
        />

        {imageError && (
          <p className="text-xs text-red-400 mt-2 flex items-center gap-1">
            <span>⚠</span> {imageError}
          </p>
        )}
      </div>

      {/* ── Live Link (Optional) ── */}
      <div>
        <label className={labelClass}>
          <span className="flex items-center gap-1.5">
            <FiLink size={12} /> Live Link
            <span className="normal-case text-[#555] font-normal">(opsional)</span>
          </span>
        </label>
        <input
          name="live_link"
          value={form.live_link}
          onChange={handleChange}
          placeholder="https://your-project.vercel.app"
          className={inputClass}
          style={fieldStyle}
          onFocus={focusHandler}
          onBlur={blurHandler}
        />
      </div>

      {/* ── GitHub Link (Optional) ── */}
      <div>
        <label className={labelClass}>
          <span className="flex items-center gap-1.5">
            <FiGithub size={12} /> GitHub Link
            <span className="normal-case text-[#555] font-normal">(opsional)</span>
          </span>
        </label>
        <input
          name="github_link"
          value={form.github_link}
          onChange={handleChange}
          placeholder="https://github.com/username/repo"
          className={inputClass}
          style={fieldStyle}
          onFocus={focusHandler}
          onBlur={blurHandler}
        />
      </div>

      {/* ── Actions ── */}
      <div className="flex items-center gap-3 pt-2">
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            disabled={loading}
            className="flex-1 py-3 rounded-xl text-sm font-medium text-muted hover:text-[#ededed] transition-colors cursor-pointer"
            style={{ background: "#1c1c1c", border: "1px solid #2a2a2a" }}
          >
            Batal
          </button>
        )}
        <button
          id="submit-project-btn"
          type="submit"
          disabled={loading || !isValid}
          className="flex-1 py-3 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
          style={{
            background: loading || !isValid ? "#1c1c1c" : "#ededed",
            color: loading || !isValid ? "#555" : "#0a0a0a",
            border: "1px solid #2a2a2a",
          }}
          onMouseEnter={(e) => {
            if (!loading && isValid) e.currentTarget.style.background = "#ffffff";
          }}
          onMouseLeave={(e) => {
            if (!loading && isValid) e.currentTarget.style.background = "#ededed";
          }}
        >
          {loading ? (
            <>
              <span className="w-4 h-4 rounded-full border-2 border-current border-t-transparent animate-spin-slow" />
              Menyimpan...
            </>
          ) : initialData ? (
            "Simpan Perubahan"
          ) : (
            "Tambah Project"
          )}
        </button>
      </div>
    </form>
  );
}
