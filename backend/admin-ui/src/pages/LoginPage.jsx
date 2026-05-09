// ============================================================
// src/pages/LoginPage.jsx
// Halaman login admin — style sesuai portfolio (dark + minimal)
// ============================================================

import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { FiLock, FiMail, FiEye, FiEyeOff } from "react-icons/fi";

export default function LoginPage() {
  const { login, loginLoading, error, setError } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) return;
    try {
      await login(email, password);
    } catch (err) {
      // Error handled by context
    }
  };

  return (
    <div className="min-h-screen bg-bg flex items-center justify-center px-4">
      {/* Background subtle grid */}
      <div
        className="fixed inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,#ededed,#ededed 1px,transparent 1px,transparent 60px),repeating-linear-gradient(90deg,#ededed,#ededed 1px,transparent 1px,transparent 60px)",
        }}
      />

      <div className="w-full max-w-sm animate-fade-up relative z-10">
        {/* Logo / Brand */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#ededed] mb-5">
            <span className="text-bg font-black text-xl">JF</span>
          </div>
          <h1 className="text-2xl font-bold text-[#ededed] tracking-tight">
            Portfolio Admin
          </h1>
          <p className="text-sm text-muted mt-1">
            Masuk untuk mengelola project
          </p>
        </div>

        {/* Card */}
        <div
          className="rounded-2xl p-8"
          style={{
            background: "var(--color-surface)",
            border: "1px solid var(--color-border)",
          }}
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Field */}
            <div>
              <label className="block text-xs font-medium text-muted uppercase tracking-widest mb-2">
                Admin Email
              </label>
              <div className="relative">
                <FiMail
                  size={15}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-muted"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError(null);
                  }}
                  placeholder="admin@example.com"
                  className="w-full pl-10 pr-4 py-3 rounded-xl text-sm text-[#ededed] placeholder-muted outline-none transition-all duration-200"
                  style={{
                    background: "var(--color-surface-2)",
                    border: error ? "1px solid var(--color-danger)" : "1px solid var(--color-border)",
                  }}
                  onFocus={(e) => {
                    if (!error) e.target.style.borderColor = "#ededed";
                    e.target.style.boxShadow = "0 0 0 3px rgba(237,237,237,0.06)";
                  }}
                  onBlur={(e) => {
                    if (!error) e.target.style.borderColor = "#2a2a2a";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-xs font-medium text-muted uppercase tracking-widest mb-2">
                Admin Password
              </label>
              <div className="relative">
                <FiLock
                  size={15}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-muted"
                />
                <input
                  id="admin-password"
                  type={showPass ? "text" : "password"}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (error) setError(null);
                  }}
                  placeholder="Masukkan password..."
                  autoComplete="current-password"
                  className="w-full pl-10 pr-12 py-3 rounded-xl text-sm text-[#ededed] placeholder-muted outline-none transition-all duration-200"
                  style={{
                    background: "var(--color-surface-2)",
                    border: error ? "1px solid var(--color-danger)" : "1px solid var(--color-border)",
                  }}
                  onFocus={(e) => {
                    if (!error) e.target.style.borderColor = "#ededed";
                    e.target.style.boxShadow = "0 0 0 3px rgba(237,237,237,0.06)";
                  }}
                  onBlur={(e) => {
                    if (!error) e.target.style.borderColor = "#2a2a2a";
                    e.target.style.boxShadow = "none";
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPass((v) => !v)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted hover:text-[#ededed] transition-colors"
                >
                  {showPass ? <FiEyeOff size={15} /> : <FiEye size={15} />}
                </button>
              </div>
              {error && (
                <p className="text-xs text-red-400 mt-2 flex items-center gap-1">
                  <span>⚠</span> {error}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              id="login-btn"
              type="submit"
              disabled={loginLoading || !email.trim() || !password.trim()}
              className="w-full py-3 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              style={{
                background:
                  loginLoading || !email.trim() || !password.trim() ? "var(--color-surface-2)" : "var(--color-accent)",
                color:
                  loginLoading || !email.trim() || !password.trim() ? "var(--color-muted)" : "var(--color-bg)",
                border: "1px solid var(--color-border)",
              }}
              onMouseEnter={(e) => {
                if (!loginLoading && email.trim() && password.trim())
                  e.currentTarget.style.background = "#ffffff";
              }}
              onMouseLeave={(e) => {
                if (!loginLoading && email.trim() && password.trim())
                  e.currentTarget.style.background = "#ededed";
              }}
            >
              {loginLoading ? (
                <>
                  <span
                    className="w-4 h-4 rounded-full border-2 border-current border-t-transparent animate-spin-slow"
                  />
                  Memverifikasi...
                </>
              ) : (
                "Masuk ke Dashboard"
              )}
            </button>
          </form>
        </div>

        <p className="text-center text-xs text-border mt-6">
          Julian Nur Fadzlin — Portfolio CMS
        </p>
      </div>
    </div>
  );
}
