// ============================================================
// src/components/TopBar.jsx
// Top navigation bar (mobile-friendly, with logout)
// ============================================================

import { useState } from "react";
import { FiMenu, FiX, FiGrid, FiPlusSquare, FiLogOut } from "react-icons/fi";
import { useAuth } from "../context/AuthContext";

const navItems = [
  { icon: FiGrid, label: "Dashboard", id: "dashboard" },
  { icon: FiPlusSquare, label: "Tambah Project", id: "add" },
];

export default function TopBar({ activePage, setActivePage }) {
  const { logout } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <header
        className="md:hidden flex items-center justify-between px-4 py-3 sticky top-0 z-50"
        style={{ background: "#141414", borderBottom: "1px solid #2a2a2a" }}
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#ededed] flex items-center justify-center">
            <span className="text-bg font-black text-xs">JF</span>
          </div>
          <span className="text-sm font-bold text-[#ededed]">Portfolio CMS</span>
        </div>
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="p-2 rounded-lg text-muted hover:text-[#ededed] transition-colors cursor-pointer"
        >
          {mobileOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 animate-fade-in"
          style={{ background: "rgba(0,0,0,0.7)" }}
          onClick={() => setMobileOpen(false)}
        >
          <aside
            className="absolute top-0 left-0 h-full w-64 flex flex-col py-4"
            style={{ background: "#141414", borderRight: "1px solid #2a2a2a" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-4 pb-4 mb-2" style={{ borderBottom: "1px solid #2a2a2a" }}>
              <p className="text-sm font-bold text-[#ededed]">Menu</p>
            </div>
            <nav className="flex-1 px-3 space-y-1">
              {navItems.map(({ icon: Icon, label, id }) => (
                <button
                  key={id}
                  onClick={() => { setActivePage(id); setMobileOpen(false); }}
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors cursor-pointer"
                  style={{
                    background: activePage === id ? "rgba(237,237,237,0.08)" : "transparent",
                    color: activePage === id ? "#ededed" : "#737373",
                  }}
                >
                  <Icon size={16} /> {label}
                </button>
              ))}
            </nav>
            <div className="px-3 pt-4" style={{ borderTop: "1px solid #2a2a2a" }}>
              <button
                onClick={logout}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-muted hover:text-red-400 transition-colors cursor-pointer"
              >
                <FiLogOut size={16} /> Logout
              </button>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}
