// ============================================================
// src/context/AuthContext.jsx
// Global auth state — login, logout, token persistence
// ============================================================

import { createContext, useContext, useState, useEffect } from "react";
import { loginApi } from "../lib/api";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem("admin_token"));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const isAuthenticated = !!token;

  const login = async (password) => {
    setLoading(true);
    setError(null);
    try {
      const data = await loginApi(password);
      localStorage.setItem("admin_token", data.token);
      setToken(data.token);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("admin_token");
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, loading, error, setError }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
