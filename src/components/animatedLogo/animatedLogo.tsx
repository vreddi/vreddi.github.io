"use client";

import React from "react";
import { motion } from "framer-motion";

export function AnimatedLogo({
  x = 300,
  y = 80,
  duration = 16,
  color = "#60a5fa",
}) {
  return (
    <motion.svg
      style={{ position: "absolute", left: x, top: y }}
      width={40}
      height={40}
      viewBox="0 0 40 40"
      initial={{ y: 0, scale: 1 }}
      animate={{
        y: [0, -20, 0],
        scale: [1, 1.08, 1],
      }}
      transition={{
        duration,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      }}
    >
      <circle cx="20" cy="20" r="18" fill={color} opacity={0.7} />
    </motion.svg>
  );
}
