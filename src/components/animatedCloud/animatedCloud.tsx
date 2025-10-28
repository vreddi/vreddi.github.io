"use client";

import React from "react";
import { motion } from "framer-motion";

export function AnimatedCloud({ x = 100, y = 50, duration = 18 }) {
  return (
    <motion.svg
      style={{ position: "absolute", left: x, top: y }}
      width={80}
      height={32}
      viewBox="0 0 80 32"
      fill="none"
      initial={{ x: -100 }}
      animate={{ x: [-100, 1200] }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
    >
      <ellipse cx="20" cy="16" rx="20" ry="14" fill="#e0e7ef" />
      <ellipse cx="50" cy="16" rx="25" ry="12" fill="#f1f5f9" />
    </motion.svg>
  );
}
