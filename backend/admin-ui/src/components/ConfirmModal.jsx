// ============================================================
// src/components/ConfirmModal.jsx
// Modal konfirmasi sebelum hapus project
// ============================================================

import { FiAlertTriangle } from "react-icons/fi";

export default function ConfirmModal({ isOpen, title, message, onConfirm, onCancel, loading }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4 animate-fade-in"
      style={{ background: "rgba(0,0,0,0.8)" }}
      onClick={onCancel}
    >
      <div
        className="w-full max-w-sm rounded-2xl p-6 animate-fade-up"
        style={{ background: "#141414", border: "1px solid #2a2a2a" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Icon */}
        <div className="w-11 h-11 rounded-xl bg-red-500/10 flex items-center justify-center mb-4">
          <FiAlertTriangle size={20} className="text-red-400" />
        </div>

        {/* Content */}
        <h3 className="text-base font-bold text-[#ededed] mb-2">{title}</h3>
        <p className="text-sm text-[#737373] leading-relaxed mb-6">{message}</p>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onCancel}
            disabled={loading}
            className="flex-1 py-2.5 rounded-xl text-sm font-medium text-[#737373] hover:text-[#ededed] transition-colors cursor-pointer"
            style={{ background: "#1c1c1c", border: "1px solid #2a2a2a" }}
          >
            Batal
          </button>
          <button
            id="confirm-delete-btn"
            onClick={onConfirm}
            disabled={loading}
            className="flex-1 py-2.5 rounded-xl text-sm font-semibold transition-colors cursor-pointer flex items-center justify-center gap-2"
            style={{ background: "#ef4444", color: "#fff" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#dc2626")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#ef4444")}
          >
            {loading ? (
              <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin-slow" />
            ) : (
              "Ya, Hapus"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
