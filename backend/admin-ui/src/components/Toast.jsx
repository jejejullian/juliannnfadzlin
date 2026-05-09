// ============================================================
// src/components/Toast.jsx
// Notifikasi toast (success / error) di sudut kanan atas
// ============================================================

import { useEffect } from "react";
import { FiCheckCircle, FiXCircle, FiX } from "react-icons/fi";

export default function Toast({ toast, onClose }) {
  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(onClose, 3500);
    return () => clearTimeout(t);
  }, [toast, onClose]);

  if (!toast) return null;

  const isSuccess = toast.type === "success";

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-4 rounded-2xl shadow-2xl animate-fade-up"
      style={{
        background: "#141414",
        border: `1px solid ${isSuccess ? "rgba(34,197,94,0.3)" : "rgba(239,68,68,0.3)"}`,
        minWidth: "280px",
        maxWidth: "380px",
      }}
    >
      {isSuccess ? (
        <FiCheckCircle size={18} className="text-green-400 shrink-0" />
      ) : (
        <FiXCircle size={18} className="text-red-400 shrink-0" />
      )}
      <p className="text-sm text-[#ededed] flex-1">{toast.message}</p>
      <button
        onClick={onClose}
        className="text-[#737373] hover:text-[#ededed] transition-colors cursor-pointer shrink-0"
      >
        <FiX size={16} />
      </button>
    </div>
  );
}
