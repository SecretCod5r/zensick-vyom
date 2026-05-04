"use client";

import { PulseBeams } from "@/components/ui/pulse-beams";
import { motion } from "framer-motion";

// Define beam paths for visual connectivity between sections
const connectivityBeams = [
  {
    path: "M 100 50 Q 250 100 400 50 Q 550 0 700 50",
    gradientConfig: {
      initial: { x1: "0%", x2: "0%", y1: "0%", y2: "0%" },
      animate: { x1: ["0%", "100%"], x2: ["0%", "100%"], y1: ["0%", "0%"], y2: ["0%", "0%"] },
      transition: { duration: 3, repeat: Infinity, repeatType: "loop", ease: "linear", delay: 0 },
    },
    connectionPoints: [
      { cx: 100, cy: 50, r: 4 },
      { cx: 400, cy: 50, r: 6 },
      { cx: 700, cy: 50, r: 4 },
    ],
  },
  {
    path: "M 150 80 Q 300 120 450 80 Q 600 40 750 80",
    gradientConfig: {
      initial: { x1: "100%", x2: "100%", y1: "0%", y2: "0%" },
      animate: { x1: ["100%", "0%"], x2: ["100%", "0%"], y1: ["0%", "0%"], y2: ["0%", "0%"] },
      transition: { duration: 4, repeat: Infinity, repeatType: "loop", ease: "linear", delay: 1 },
    },
    connectionPoints: [
      { cx: 150, cy: 80, r: 3 },
      { cx: 750, cy: 80, r: 3 },
    ],
  },
  {
    path: "M 50 100 Q 200 60 350 100 Q 500 140 650 100 Q 800 60 850 100",
    gradientConfig: {
      initial: { x1: "0%", x2: "0%", y1: "0%", y2: "0%" },
      animate: { x1: ["0%", "100%"], x2: ["0%", "100%"], y1: ["0%", "0%"], y2: ["0%", "0%"] },
      transition: { duration: 5, repeat: Infinity, repeatType: "loop", ease: "linear", delay: 2 },
    },
  },
];

interface PulseBeamsConnectorProps {
  className?: string;
  height?: number;
}

export function PulseBeamsConnector({ className = "", height = 150 }: PulseBeamsConnectorProps) {
  return (
    <motion.div 
      className={`w-full flex justify-center ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <PulseBeams
        beams={connectivityBeams}
        width={900}
        height={height}
        baseColor="hsl(var(--primary) / 0.2)"
        accentColor="hsl(var(--primary) / 0.4)"
        gradientColors={{
        start: "#e8341a",
          middle: "#c42a15",
          end: "#e8341a",
        }}
        className="max-w-4xl"
      />
    </motion.div>
  );
}

export default PulseBeamsConnector;
