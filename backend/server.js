// ============================================================
// server.js - Entry Point Utama Backend Portfolio
// ============================================================

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import projectRoutes from "./routes/projectRoutes.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// -------------------------------------------------------
// MIDDLEWARE GLOBAL
// -------------------------------------------------------
app.use(
  cors({
    // ⚠️ SUPABASE/DEPLOY STEP: Ganti origin ini dengan URL frontend Anda
    // Contoh: "https://your-portfolio.vercel.app"
    origin: process.env.FRONTEND_URL || "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// -------------------------------------------------------
// ROUTES
// -------------------------------------------------------
app.use("/api/projects", projectRoutes);
app.use("/api/auth", authRoutes);

// Health check endpoint
app.get("/", (req, res) => {
  res.json({
    status: "OK",
    message: "Portfolio Backend API is running 🚀",
    version: "1.0.0",
  });
});

// -------------------------------------------------------
// 404 Handler
// -------------------------------------------------------
app.use((req, res) => {
  res.status(404).json({ error: "Endpoint tidak ditemukan." });
});

// -------------------------------------------------------
// Global Error Handler
// -------------------------------------------------------
app.use((err, req, res, next) => {
  console.error("[Server Error]", err);
  res.status(500).json({ error: "Terjadi kesalahan pada server." });
});

// -------------------------------------------------------
// START SERVER
// -------------------------------------------------------
app.listen(PORT, () => {
  console.log(`✅ Server berjalan di http://localhost:${PORT}`);
});
