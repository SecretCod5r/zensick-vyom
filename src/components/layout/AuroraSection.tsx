"use client";

import { AuroraBackground } from "@/components/ui/aurora-background";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AuroraSectionProps {
  children: ReactNode;
  className?: string;
  showRadialGradient?: boolean;
  intensity?: "subtle" | "medium" | "strong";
}

export function AuroraSection({ 
  children, 
  className,
  showRadialGradient = true,
  intensity = "medium" 
}: AuroraSectionProps) {
  const intensityClasses = {
    subtle: "[&_.aurora-layer]:opacity-20",
    medium: "[&_.aurora-layer]:opacity-40",
    strong: "[&_.aurora-layer]:opacity-60",
  };

  return (
    <AuroraBackground 
      showRadialGradient={showRadialGradient}
      className={cn(
        "min-h-0 bg-transparent", // Override default min-height and background
        intensityClasses[intensity],
        className
      )}
    >
      {children}
    </AuroraBackground>
  );
}

export default AuroraSection;
