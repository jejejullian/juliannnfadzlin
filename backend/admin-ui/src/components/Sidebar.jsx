// ============================================================
// src/components/Sidebar.jsx
// Navigasi sidebar admin
// ============================================================

import { FiGrid, FiPlusSquare, FiLogOut, FiExternalLink } from "react-icons/fi";
import { useAuth } from "../context/AuthContext";

const navItems = [
  { icon: FiGrid, label: "Dashboard", id: "dashboard" },
  { icon: FiPlusSquare, label: "Tambah Project", id: "add" },
];

export default function Sidebar({ activePage, setActivePage }) {
  const { logout } = useAuth();

  return (
    <aside
      className="hidden md:flex flex-col w-60 min-h-screen shrink-0"
      style={{
        background: "#141414",
        borderRight: "1px solid #2a2a2a",
      }}
    >
      {/* Brand */}
      <div
        className="px-6 py-6 flex items-center gap-3"
        style={{ borderBottom: "1px solid #2a2a2a" }}
      >
        <div className="w-9 h-9 rounded-xl bg-[#ededed] flex items-center justify-center shrink-0">
          <span className="text-[#0a0a0a] font-black text-xs">JF</span>
        </div>
        <div>
          <p className="text-sm font-bold text-[#ededed] leading-none">Portfolio CMS</p>
          <p className="text-xs text-[#737373] mt-0.5">Admin Panel</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map(({ icon: Icon, label, id }) => {
          const isActive = activePage === id;
          return (
            <button
              key={id}
              id={`nav-${id}`}
              onClick={() => setActivePage(id)}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer"
              style={{
                background: isActive ? "rgba(237,237,237,0.08)" : "transparent",
                color: isActive ? "#ededed" : "#737373",
                border: isActive
                  ? "1px solid rgba(237,237,237,0.1)"
                  : "1px solid transparent",
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.background = "rgba(237,237,237,0.04)";
                  e.currentTarget.style.color = "#ededed";
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "#737373";
                }
              }}
            >
              <Icon size={16} />
              {label}
            </button>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="px-3 py-4" style={{ borderTop: "1px solid #2a2a2a" }}>
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-[#737373] hover:text-[#ededed] transition-colors duration-200 mb-1 cursor-pointer"
        >
          <FiExternalLink size={16} />
          Lihat Portfolio
        </a>
        <button
          id="logout-btn"
          onClick={logout}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-[#737373] hover:text-red-400 transition-colors duration-200 cursor-pointer"
        >
          <FiLogOut size={16} />
          Logout
        </button>
      </div>
    </aside>
  );
}
