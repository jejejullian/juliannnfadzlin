// ============================================================
// middlewares/authMiddleware.js
// Verifikasi JWT Token untuk proteksi endpoint admin
// ============================================================

import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

// -------------------------------------------------------
// protect
// Middleware yang dipasang pada route POST, PUT, DELETE
// Hanya request dengan Bearer Token valid yang bisa lewat
// -------------------------------------------------------
export const protect = (req, res, next) => {
  const authHeader = req.headers.authorization;

  // Cek apakah header Authorization ada dan berformat "Bearer <token>"
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({
      error: "Akses ditolak. Token tidak ditemukan.",
    });
  }

  const token = authHeader.split(" ")[1];

  try {
    // ⚠️ SUPABASE/ENV STEP:
    // JWT_SECRET harus sama persis dengan yang ada di .env saat login
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.admin = decoded; // { role: "admin", iat, exp }
    next();
  } catch (error) {
    return res.status(401).json({
      error: "Token tidak valid atau sudah expired. Silakan login ulang.",
    });
  }
};
