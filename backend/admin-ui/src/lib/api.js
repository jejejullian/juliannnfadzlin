// ============================================================
// src/lib/api.js
// Axios instance — semua request ke backend melalui file ini
// ============================================================

// ⚠️ SUPABASE/DEPLOY STEP:
// Ubah BASE_URL ke URL backend Anda saat sudah live
// Contoh: "https://your-backend.railway.app"
// Saat development lokal: tetap "http://localhost:5000"

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

// Helper: ambil token dari localStorage
const getToken = () => localStorage.getItem("admin_token");

// Helper: buat headers dengan Authorization
const authHeaders = () => ({
  Authorization: `Bearer ${getToken()}`,
});

// -------------------------------------------------------
// AUTH
// -------------------------------------------------------
export const loginApi = async (password) => {
  const res = await fetch(`${BASE_URL}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ password }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || "Login gagal");
  return data;
};

// -------------------------------------------------------
// PROJECTS - GET ALL
// -------------------------------------------------------
export const fetchProjects = async () => {
  const res = await fetch(`${BASE_URL}/api/projects`);
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || "Gagal mengambil project");
  return data;
};

// -------------------------------------------------------
// PROJECTS - CREATE (FormData untuk upload gambar)
// -------------------------------------------------------
export const createProject = async (formData) => {
  const res = await fetch(`${BASE_URL}/api/projects`, {
    method: "POST",
    headers: authHeaders(), // Tidak set Content-Type agar browser atur boundary
    body: formData,
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || "Gagal membuat project");
  return data;
};

// -------------------------------------------------------
// PROJECTS - UPDATE
// -------------------------------------------------------
export const updateProject = async (id, formData) => {
  const res = await fetch(`${BASE_URL}/api/projects/${id}`, {
    method: "PUT",
    headers: authHeaders(),
    body: formData,
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || "Gagal mengupdate project");
  return data;
};

// -------------------------------------------------------
// PROJECTS - DELETE
// -------------------------------------------------------
export const deleteProject = async (id) => {
  const res = await fetch(`${BASE_URL}/api/projects/${id}`, {
    method: "DELETE",
    headers: { ...authHeaders(), "Content-Type": "application/json" },
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || "Gagal menghapus project");
  return data;
};
