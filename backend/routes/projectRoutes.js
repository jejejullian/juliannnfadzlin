// ============================================================
// routes/projectRoutes.js
// Endpoint API untuk Project
// ============================================================

import express from "express";
import { protect } from "../middlewares/authMiddleware.js";
import { upload, uploadToSupabase } from "../middlewares/uploadMiddleware.js";
import {
  getAllProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
} from "../controllers/projectController.js";

const router = express.Router();

// -------------------------------------------------------
// PUBLIC ROUTES (Tidak butuh token)
// -------------------------------------------------------

// GET /api/projects - Ambil semua project (untuk frontend portofolio)
router.get("/", getAllProjects);

// GET /api/projects/:id - Ambil detail satu project
router.get("/:id", getProjectById);

// -------------------------------------------------------
// PROTECTED ROUTES (Butuh JWT Bearer Token)
// Urutan middleware penting:
//   1. protect     → Cek token dulu
//   2. upload.single("image") → Tangkap file dari FormData
//   3. uploadToSupabase → Upload ke Supabase Storage, simpan URL ke req.body
//   4. Controller  → Simpan data ke database
// -------------------------------------------------------

// POST /api/projects - Tambah project baru
router.post(
  "/",
  protect,
  upload.single("image"),
  uploadToSupabase,
  createProject
);

// PUT /api/projects/:id - Update project
router.put(
  "/:id",
  protect,
  upload.single("image"),
  uploadToSupabase,
  updateProject
);

// DELETE /api/projects/:id - Hapus project
router.delete("/:id", protect, deleteProject);

export default router;
