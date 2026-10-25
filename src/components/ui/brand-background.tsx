import React from "react";

interface BrandBackgroundProps {
  className?: string;
}

export function BrandBackground({ className = "" }: BrandBackgroundProps) {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {/* Base navy tint */}
      <div className="absolute inset-0 bg-[#0d0f1e]" />

      {/* Radial red glow (#e8341a / primary) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 30%, hsl(8 83% 51% / 0.12), transparent 75%)",
        }}
      />

      {/* 72px square grid at ~1.5% opacity */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(232, 52, 26, 0.015) 1px, transparent 1px),
            linear-gradient(90deg, rgba(232, 52, 26, 0.015) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
        }}
      />
    </div>
  );
}

export default BrandBackground;
