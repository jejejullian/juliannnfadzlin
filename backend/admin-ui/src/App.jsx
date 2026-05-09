// ============================================================
// src/App.jsx
// Root component — routing + auth gate + layout
// ============================================================

import { useState, useCallback } from "react";
import { AuthProvider, useAuth } from "./context/AuthContext";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import AddProjectPage from "./pages/AddProjectPage";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";
import Toast from "./components/Toast";

function AdminApp() {
  const { isAuthenticated, loading } = useAuth();
  const [activePage, setActivePage] = useState("dashboard");
  const [toast, setToast] = useState(null);

  const showToast = useCallback((type, message) => {
    setToast({ type, message });
  }, []);

  const closeToast = useCallback(() => setToast(null), []);

  if (loading) {
    return (
      <div className="min-h-screen bg-bg flex items-center justify-center">
        <div className="w-8 h-8 rounded-full border-2 border-border border-t-accent animate-spin-slow" />
      </div>
    );
  }

  if (!isAuthenticated) return <LoginPage />;

  const pageProps = { setActivePage, showToast };

  return (
    <div className="flex min-h-screen bg-bg">
      {/* Sidebar (Desktop) */}
      <Sidebar activePage={activePage} setActivePage={setActivePage} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* TopBar (Mobile) */}
        <TopBar activePage={activePage} setActivePage={setActivePage} />

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto">
          {activePage === "dashboard" && <DashboardPage {...pageProps} />}
          {activePage === "add" && <AddProjectPage {...pageProps} />}
        </main>
      </div>

      {/* Toast Notification */}
      <Toast toast={toast} onClose={closeToast} />
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AdminApp />
    </AuthProvider>
  );
}
