// components/SeattleValleyBackground.tsx
import { SeattleSkyline } from "../seattleSkyline";
import { AnimatedCloud } from "../animatedCloud";
import { AnimatedLogo } from "../animatedLogo";

export default function SeattleValleyBackground() {
  return (
    <div className="absolute inset-0 w-full h-[250px] overflow-hidden -z-10">
      <SeattleSkyline />
      {/* Clouds */}
      <AnimatedCloud x={100} y={30} duration={26} />
      <AnimatedCloud x={400} y={50} duration={20} />
      {/* Logos (replace with real logos as needed) */}
      <AnimatedLogo x={300} y={110} duration={14} color="#10b981" />{" "}
      {/* e.g., Amazon green */}
      <AnimatedLogo x={600} y={80} duration={18} color="#fbbf24" />{" "}
      {/* e.g., Microsoft yellow */}
      {/* Add as many as you want! */}
    </div>
  );
}
