import React from "react";

export function SeattleSkyline() {
  return (
    <svg
      viewBox="0 0 1200 250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
    >
      {/* Mountains */}
      <path
        d="M0 180 L90 100 L220 180 L320 150 L600 190 L1200 180 L1200 250 L0 250 Z"
        fill="#cbd5e1"
      />
      {/* Space Needle */}
      <rect x="460" y="75" width="16" height="70" fill="#374151" />
      <ellipse cx="468" cy="75" rx="32" ry="7" fill="#64748b" />
      {/* Other buildings */}
      <rect x="510" y="110" width="30" height="45" fill="#64748b" />
      <rect x="550" y="130" width="28" height="50" fill="#475569" />
      <rect x="600" y="120" width="24" height="60" fill="#334155" />
      <rect x="640" y="140" width="20" height="40" fill="#64748b" />
      {/* You can add more rectangles/ellipses for detail */}
    </svg>
  );
}
