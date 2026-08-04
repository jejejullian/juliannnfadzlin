"use client";

import { motion } from "motion/react";

export default function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
}) {
  const hiddenPosition = {
    up: { y: 50 },
    down: { y: -50 },
    left: { x: -50 },
    right: { x: 50 },
    scale: { scale: 0.92 },
  };

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...hiddenPosition[direction] }}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: delay / 1000, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}