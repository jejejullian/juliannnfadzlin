// ============================================================
// controllers/authController.js
// Login admin dan generate JWT Token
// ============================================================

import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

// -------------------------------------------------------
// [POST] /api/auth/login
// Login admin dengan password statis dari .env
// -------------------------------------------------------
export const login = (req, res) => {
  const { password } = req.body;

  if (!password) {
    return res.status(400).json({ error: "Password wajib diisi." });
  }

  // ⚠️ SUPABASE/ENV STEP:
  // ADMIN_PASSWORD dan JWT_SECRET diisi di file .env
  // Jangan pernah hardcode password di sini!
  if (password !== process.env.ADMIN_PASSWORD) {
    return res.status(401).json({ error: "Password salah." });
  }

  // Generate token JWT yang berlaku 7 hari
  const token = jwt.sign(
    { role: "admin" },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );

  res.json({
    message: "Login berhasil.",
    token,
  });
};
