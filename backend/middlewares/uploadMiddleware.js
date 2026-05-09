// ============================================================
// middlewares/uploadMiddleware.js
// Upload gambar ke Supabase Storage
// ============================================================

// ⚠️ ============================================================
// SUPABASE STORAGE INTEGRATION - INI BAGIAN YANG HARUS ANDA ISI
// ============================================================
//
// Cara Kerja:
//   1. Frontend mengirim file gambar via FormData (multipart/form-data)
//   2. Middleware ini menangkap file tersebut dengan multer (in-memory)
//   3. File buffer dikirim ke Supabase Storage
//   4. URL publik gambar disimpan ke req.body.image_url
//   5. Controller membaca req.body.image_url dan menyimpannya ke DB
//
// LANGKAH YANG HARUS ANDA LAKUKAN DI SUPABASE:
//   1. Buka Supabase Dashboard > Storage
//   2. Buat bucket baru bernama "project-images" (atau nama lain)
//   3. Set bucket menjadi PUBLIC (agar gambar bisa diakses tanpa auth)
//   4. Copy SUPABASE_URL dan SUPABASE_SERVICE_ROLE_KEY ke .env
//
// LETAK PENGISIAN DI KODE INI:
//   - Baris yang bertanda "⚠️ GANTI" adalah tempat Anda tidak perlu ganti
//     karena sudah otomatis baca dari .env. Pastikan .env-nya benar!
//   - BUCKET_NAME di baris ~47: ganti jika nama bucket Anda berbeda
// ============================================================

import multer from "multer";
import { createClient } from "@supabase/supabase-js";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

// ⚠️ SUPABASE STEP 2: Pastikan SUPABASE_URL dan SUPABASE_SERVICE_ROLE_KEY ada di .env
const supabase = createClient(
  process.env.SUPABASE_URL,         // ⚠️ GANTI di .env: SUPABASE_URL
  process.env.SUPABASE_SERVICE_ROLE_KEY  // ⚠️ GANTI di .env: SUPABASE_SERVICE_ROLE_KEY
);

// ⚠️ SUPABASE STEP 3: Ganti nama bucket jika berbeda dari yang Anda buat
const BUCKET_NAME = "project-images";

// Konfigurasi multer - simpan di memori (tidak ke disk)
const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|gif|webp/;
  const extname = allowedTypes.test(
    path.extname(file.originalname).toLowerCase()
  );
  const mimetype = allowedTypes.test(file.mimetype);

  if (extname && mimetype) {
    cb(null, true);
  } else {
    cb(new Error("Hanya file gambar (jpg, png, gif, webp) yang diizinkan!"));
  }
};

export const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 }, // Maks 5MB
});

// -------------------------------------------------------
// uploadToSupabase
// Middleware yang dijalankan setelah multer
// Mengupload file ke Supabase Storage dan menyimpan URL-nya
// -------------------------------------------------------
export const uploadToSupabase = async (req, res, next) => {
  // Jika tidak ada file (misal request PUT tanpa ganti gambar), lewati
  if (!req.file) {
    return next();
  }

  try {
    const file = req.file;
    // Buat nama file unik agar tidak tabrakan
    const fileName = `${Date.now()}-${Math.random().toString(36).slice(2)}-${file.originalname.replace(/\s/g, "_")}`;

    // Upload ke Supabase Storage
    const { data, error } = await supabase.storage
      .from(BUCKET_NAME)
      .upload(fileName, file.buffer, {
        contentType: file.mimetype,
        upsert: false,
      });

    if (error) {
      console.error("[Supabase Upload Error]", error);
      return res.status(500).json({ error: "Gagal mengupload gambar ke storage." });
    }

    // Ambil URL publik dari gambar yang berhasil diupload
    const { data: publicData } = supabase.storage
      .from(BUCKET_NAME)
      .getPublicUrl(data.path);

    // Simpan URL ke req.body agar controller bisa membacanya
    req.body.image_url = publicData.publicUrl;
    next();
  } catch (err) {
    console.error("[uploadToSupabase Error]", err);
    res.status(500).json({ error: "Terjadi kesalahan saat upload gambar." });
  }
};
