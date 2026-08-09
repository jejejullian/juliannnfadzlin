"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";

export default function LoadingScreen({ onFinish }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const increment = prev < 60 ? 3 : prev < 85 ? 2 : 1;
        return Math.min(prev + increment, 100);
      });
    }, 30);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const timeout = setTimeout(onFinish, 400);
      return () => clearTimeout(timeout);
    }
  }, [progress, onFinish]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: "var(--color-dark)" }}
    >
      {/* Background grid pattern — statis, tidak animasi */}
      <div
        className="absolute inset-0"
        style={{
          opacity: 0.03,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Top curtain */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-1/2 z-[2]"
        style={{ backgroundColor: "var(--color-dark)" }}
        exit={{ y: "-100%" }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      />

      {/* Bottom curtain */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1/2 z-[2]"
        style={{ backgroundColor: "var(--color-dark)" }}
        exit={{ y: "100%" }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      />

      {/* Center content */}
      <motion.div
        className="relative z-[3] flex flex-col items-center gap-10"
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
      >
        {/* Logo */}
        <div
          style={{
            fontFamily: '"nicomoji", sans-serif',
            fontSize: "clamp(48px, 10vw, 80px)",
            color: "var(--color-light)",
            letterSpacing: "8px",
            lineHeight: 1,
            animation: "logoReveal 1s cubic-bezier(0.16, 1, 0.3, 1) forwards",
          }}
        >
          FDZLN
        </div>

        {/* Subtitle */}
        <p
          style={{
            color: "var(--color-muted-dark)",
            fontSize: "clamp(11px, 2vw, 14px)",
            letterSpacing: "6px",
            textTransform: "uppercase",
            fontWeight: 400,
            animation: "subtitleReveal 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both",
          }}
        >
          Portfolio
        </p>

        {/* Progress bar */}
        <div
          style={{
            width: "clamp(180px, 40vw, 280px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
            animation: "subtitleReveal 1s cubic-bezier(0.16, 1, 0.3, 1) 0.5s both",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "1px",
              backgroundColor: "var(--color-track)",
              borderRadius: "2px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: "100%",
                width: `${progress}%`,
                backgroundColor: "var(--color-light)",
                borderRadius: "2px",
                transition: "width 0.1s ease-out",
              }}
            />
          </div>

          <span
            style={{
              color: "var(--color-muted-dark)",
              fontSize: "12px",
              fontFamily: "monospace",
              letterSpacing: "2px",
            }}
          >
            {String(progress).padStart(3, "0")}
          </span>
        </div>
      </motion.div>

      {/* Corner decorations */}
      <motion.span
        className="absolute bottom-[30px] left-[30px] z-[3]"
        style={{ color: "var(--color-ghost)", fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase" }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        © 2025
      </motion.span>

      <motion.span
        className="absolute bottom-[30px] right-[30px] z-[3]"
        style={{ color: "var(--color-ghost)", fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase" }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        Front-End Developer
      </motion.span>
    </motion.div>
  );
}