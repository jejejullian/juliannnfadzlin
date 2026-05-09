// ============================================================
// controllers/projectController.js
// Logika CRUD untuk Project
// ============================================================

import { PrismaClient } from "@prisma/client";

// ⚠️ SUPABASE INTEGRATION:
// PrismaClient otomatis menggunakan DATABASE_URL dari .env
// Pastikan .env sudah diisi dengan connection string Supabase yang benar
const prisma = new PrismaClient();

// -------------------------------------------------------
// [GET] /api/projects
// Ambil semua project (Public - tidak butuh auth)
// -------------------------------------------------------
export const getAllProjects = async (req, res) => {
  try {
    const projects = await prisma.project.findMany({
      orderBy: { createdAt: "desc" },
    });
    res.json(projects);
  } catch (error) {
    console.error("[getAllProjects Error]", error);
    res.status(500).json({ error: "Gagal mengambil data project." });
  }
};

// -------------------------------------------------------
// [GET] /api/projects/:id
// Ambil satu project by ID (Public)
// -------------------------------------------------------
export const getProjectById = async (req, res) => {
  const { id } = req.params;
  try {
    const project = await prisma.project.findUnique({ where: { id } });
    if (!project) {
      return res.status(404).json({ error: "Project tidak ditemukan." });
    }
    res.json(project);
  } catch (error) {
    console.error("[getProjectById Error]", error);
    res.status(500).json({ error: "Gagal mengambil data project." });
  }
};

// -------------------------------------------------------
// [POST] /api/projects
// Tambah project baru (Protected - butuh JWT)
// -------------------------------------------------------
export const createProject = async (req, res) => {
  const { title, description, tech_stack, image_url, live_link, github_link } =
    req.body;

  // Validasi wajib (mencegah card kosong di frontend)
  if (!title || !description || !image_url || !tech_stack) {
    return res.status(400).json({
      error: "Field title, description, tech_stack, dan image_url wajib diisi.",
    });
  }

  try {
    // ⚠️ SUPABASE STORAGE:
    // image_url yang dikirim harus berupa URL publik dari Supabase Storage
    // Upload gambar dilakukan di uploadMiddleware.js sebelum controller ini dijalankan
    const newProject = await prisma.project.create({
      data: {
        title: title.trim(),
        description: description.trim(),
        tech_stack: tech_stack.trim(),
        image_url,
        live_link: live_link?.trim() || null,
        github_link: github_link?.trim() || null,
      },
    });
    res.status(201).json({
      message: "Project berhasil ditambahkan.",
      project: newProject,
    });
  } catch (error) {
    console.error("[createProject Error]", error);
    res.status(500).json({ error: "Gagal menyimpan project." });
  }
};

// -------------------------------------------------------
// [PUT] /api/projects/:id
// Update project (Protected - butuh JWT)
// -------------------------------------------------------
export const updateProject = async (req, res) => {
  const { id } = req.params;
  const { title, description, tech_stack, image_url, live_link, github_link } =
    req.body;

  // Validasi field wajib
  if (!title || !description || !image_url || !tech_stack) {
    return res.status(400).json({
      error: "Field title, description, tech_stack, dan image_url wajib diisi.",
    });
  }

  try {
    const existing = await prisma.project.findUnique({ where: { id } });
    if (!existing) {
      return res.status(404).json({ error: "Project tidak ditemukan." });
    }

    const updated = await prisma.project.update({
      where: { id },
      data: {
        title: title.trim(),
        description: description.trim(),
        tech_stack: tech_stack.trim(),
        image_url,
        live_link: live_link?.trim() || null,
        github_link: github_link?.trim() || null,
      },
    });
    res.json({ message: "Project berhasil diupdate.", project: updated });
  } catch (error) {
    console.error("[updateProject Error]", error);
    res.status(500).json({ error: "Gagal mengupdate project." });
  }
};

// -------------------------------------------------------
// [DELETE] /api/projects/:id
// Hapus project (Protected - butuh JWT)
// -------------------------------------------------------
export const deleteProject = async (req, res) => {
  const { id } = req.params;
  try {
    const existing = await prisma.project.findUnique({ where: { id } });
    if (!existing) {
      return res.status(404).json({ error: "Project tidak ditemukan." });
    }

    await prisma.project.delete({ where: { id } });
    res.json({ message: "Project berhasil dihapus." });
  } catch (error) {
    console.error("[deleteProject Error]", error);
    res.status(500).json({ error: "Gagal menghapus project." });
  }
};
