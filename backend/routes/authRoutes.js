// ============================================================
// routes/authRoutes.js
// Endpoint untuk autentikasi admin
// ============================================================

import express from "express";
import { login } from "../controllers/authController.js";

const router = express.Router();

// POST /api/auth/login - Login admin dan dapatkan JWT token
router.post("/login", login);

export default router;
