import { useState, useEffect } from "react";

export default function LoadingScreen({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Accelerate near the end
        const increment = prev < 60 ? 3 : prev < 85 ? 2 : 1;
        return Math.min(prev + increment, 100);
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      // Small delay before exit animation
      const timeout = setTimeout(() => {
        setIsExiting(true);
      }, 400);
      return () => clearTimeout(timeout);
    }
  }, [progress]);

  useEffect(() => {
    if (isExiting) {
      // Wait for exit animation to complete, then unmount
      const timeout = setTimeout(() => {
        onFinish();
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [isExiting, onFinish]);

  const containerStyle = {
    position: "fixed",
    inset: 0,
    zIndex: 9999,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0a0a0a",
    overflow: "hidden",
  };

  const gridOverlayStyle = {
    position: "absolute",
    inset: 0,
    opacity: 0.03,
    backgroundImage:
      "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
    backgroundSize: "60px 60px",
  };

  const curtainCommonStyle = {
    position: "absolute",
    left: 0,
    right: 0,
    height: "50%",
    backgroundColor: "#0a0a0a",
    zIndex: 2,
    transition: "transform 0.8s cubic-bezier(0.76, 0, 0.24, 1)",
  };

  const contentStyle = {
    position: "relative",
    zIndex: 3,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "40px",
    opacity: isExiting ? 0 : 1,
    transform: isExiting ? "scale(0.9)" : "scale(1)",
    transition: "opacity 0.5s cubic-bezier(0.76, 0, 0.24, 1), transform 0.5s cubic-bezier(0.76, 0, 0.24, 1)",
  };

  const cornerDecorationStyle = {
    position: "absolute",
    bottom: "30px",
    color: "#262626",
    fontSize: "11px",
    letterSpacing: "3px",
    textTransform: "uppercase",
    zIndex: 3,
    opacity: isExiting ? 0 : 1,
    transition: "opacity 0.4s ease",
    animation: "subtitleReveal 1s cubic-bezier(0.16, 1, 0.3, 1) 0.7s both",
  };

  return (
    <div className="loading-screen" style={containerStyle}>
      <div style={gridOverlayStyle} />

      {/* Top curtain (slides up on exit) */}
      <div
        style={{
          ...curtainCommonStyle,
          top: 0,
          transform: isExiting ? "translateY(-100%)" : "translateY(0)",
        }}
      />

      {/* Bottom curtain (slides down on exit) */}
      <div
        style={{
          ...curtainCommonStyle,
          bottom: 0,
          transform: isExiting ? "translateY(100%)" : "translateY(0)",
        }}
      />

      {/* Center content */}
      <div style={contentStyle}>
        {/* Logo */}
        <div
          className="loading-logo"
          style={{
            fontFamily: '"nicomoji", sans-serif',
            fontSize: "clamp(48px, 10vw, 80px)",
            color: "#ededed",
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
            color: "#525252",
            fontSize: "clamp(11px, 2vw, 14px)",
            letterSpacing: "6px",
            textTransform: "uppercase",
            fontWeight: 400,
            animation: "subtitleReveal 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both",
          }}
        >
          Portfolio
        </p>

        {/* Progress bar container */}
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
          {/* Track */}
          <div
            style={{
              width: "100%",
              height: "1px",
              backgroundColor: "rgba(237, 237, 237, 0.1)",
              borderRadius: "2px",
              overflow: "hidden",
            }}
          >
            {/* Fill */}
            <div
              style={{
                height: "100%",
                width: `${progress}%`,
                backgroundColor: "#ededed",
                borderRadius: "2px",
                transition: "width 0.1s ease-out",
              }}
            />
          </div>

          {/* Percentage */}
          <span
            style={{
              color: "#525252",
              fontSize: "12px",
              fontFamily: "monospace",
              letterSpacing: "2px",
            }}
          >
            {String(progress).padStart(3, "0")}
          </span>
        </div>
      </div>

      {/* Corner decorations */}
      <span style={{ ...cornerDecorationStyle, left: "30px" }}>© 2025</span>
      <span style={{ ...cornerDecorationStyle, right: "30px" }}>Front-End Developer</span>
    </div>
  );
}

