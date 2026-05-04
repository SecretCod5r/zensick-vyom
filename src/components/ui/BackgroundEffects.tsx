import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
}

export function StarField({ count = 50 }: { count?: number }) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const newParticles: Particle[] = [];
    for (let i = 0; i < count; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 2,
      });
    }
    setParticles(newParticles);
  }, [count]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            opacity: [particle.opacity * 0.3, particle.opacity, particle.opacity * 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export function GlowOrb({
  className = "",
  color = "primary",
  size = "md",
  animate = true,
}: {
  className?: string;
  color?: "primary" | "accent" | "secondary";
  size?: "sm" | "md" | "lg" | "xl";
  animate?: boolean;
}) {
  const colorClasses = {
    primary: "bg-primary/15",
    accent: "bg-primary/10",
    secondary: "bg-primary/10",
  };

  const sizeClasses = {
    sm: "w-48 h-48",
    md: "w-72 h-72",
    lg: "w-96 h-96",
    xl: "w-[500px] h-[500px]",
  };

  const blurClasses = {
    sm: "blur-[60px]",
    md: "blur-[100px]",
    lg: "blur-[120px]",
    xl: "blur-[150px]",
  };

  return (
    <motion.div
      className={`absolute rounded-full ${colorClasses[color]} ${sizeClasses[size]} ${blurClasses[size]} ${className}`}
      animate={
        animate
          ? {
              scale: [1, 1.1, 1],
              opacity: [0.5, 0.8, 0.5],
            }
          : undefined
      }
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

export function GridBackground({ className = "" }: { className?: string }) {
  return (
    <div
      className={`absolute inset-0 opacity-30 ${className}`}
      style={{
        backgroundImage: `
          linear-gradient(rgba(232, 52, 26, 0.06) 1px, transparent 1px),
          linear-gradient(90deg, rgba(232, 52, 26, 0.06) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }}
    />
  );
}

export function RadialGlow({ className = "" }: { className?: string }) {
  return (
    <div
      className={`absolute pointer-events-none ${className}`}
      style={{
        background:
          "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(232, 52, 26, 0.1), transparent)",
      }}
    />
  );
}

export function HeroGlow() {
  return (
    <>
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(232, 52, 26, 0.12), transparent 70%)",
        }}
      />
      <motion.div
        className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(232, 52, 26, 0.06), transparent 60%)",
        }}
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </>
  );
}
