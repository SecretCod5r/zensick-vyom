"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  handleShuffle: () => void;
  testimonial: string;
  position: "front" | "middle" | "back";
  id: number;
  author: string;
  role?: string;
  avatarUrl?: string;
}

export function TestimonialCard({
  handleShuffle,
  testimonial,
  position,
  id,
  author,
  role,
  avatarUrl,
}: TestimonialCardProps) {
  const dragRef = React.useRef(0);
  const isFront = position === "front";

  return (
    <motion.div
      style={{
        zIndex: position === "front" ? "2" : position === "middle" ? "1" : "0",
      }}
      animate={{
        rotate: position === "front" ? "-6deg" : position === "middle" ? "0deg" : "6deg",
        x: position === "front" ? "0%" : position === "middle" ? "33%" : "66%",
      }}
      drag={true}
      dragElastic={0.35}
      dragListener={isFront}
      dragConstraints={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
      onDragStart={(e: any) => {
        dragRef.current = e.clientX;
      }}
      onDragEnd={(e: any) => {
        if (dragRef.current - e.clientX > 150) {
          handleShuffle();
        }
        dragRef.current = 0;
      }}
      transition={{ duration: 0.35 }}
      className={cn(
        "absolute left-0 top-0 grid h-[450px] w-[350px] select-none place-content-center space-y-6 rounded-2xl border border-primary/30 bg-card p-6 shadow-xl backdrop-blur-xl",
        isFront ? "cursor-grab active:cursor-grabbing" : ""
      )}
    >
      <img
        src={avatarUrl || `https://i.pravatar.cc/128?img=${id}`}
        alt={`Avatar of ${author}`}
        className="pointer-events-none mx-auto h-32 w-32 rounded-full border-2 border-primary/40 bg-muted object-cover"
      />
      <span className="text-center text-lg italic text-foreground/80">
        "{testimonial}"
      </span>
      <div className="text-center">
        <span className="block text-base font-semibold text-primary">{author}</span>
        {role && (
          <span className="block text-sm text-muted-foreground mt-1">{role}</span>
        )}
      </div>
    </motion.div>
  );
}

interface Testimonial {
  id: number;
  testimonial: string;
  author: string;
  role?: string;
  avatarUrl?: string;
}

interface ShuffleCardsProps {
  testimonials: Testimonial[];
  className?: string;
}

export function ShuffleCards({ testimonials, className }: ShuffleCardsProps) {
  const [positions, setPositions] = React.useState<("front" | "middle" | "back")[]>(["front", "middle", "back"]);

  const handleShuffle = () => {
    const newPositions = [...positions];
    const last = newPositions.pop();
    if (last) newPositions.unshift(last);
    setPositions(newPositions as ("front" | "middle" | "back")[]);
  };

  return (
    <div className={cn("grid min-h-[500px] place-content-center -ml-8 md:-ml-12", className)}>
      <div className="relative h-[450px] w-[350px]">
        {testimonials.slice(0, 3).map((testimonial, index) => (
          <TestimonialCard
            key={testimonial.id}
            {...testimonial}
            handleShuffle={handleShuffle}
            position={positions[index]}
          />
        ))}
      </div>
    </div>
  );
}

export default ShuffleCards;
