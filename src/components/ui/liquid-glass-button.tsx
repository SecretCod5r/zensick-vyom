"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const liquidbuttonVariants = cva(
  "inline-flex items-center transition-colors justify-center cursor-pointer gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
  {
    variants: {
      variant: {
        default: "bg-transparent hover:scale-105 duration-300 transition text-primary",
        destructive: "bg-destructive text-white hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 text-xs gap-1.5 px-4 has-[>svg]:px-4",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        xl: "h-12 rounded-md px-8 has-[>svg]:px-6",
        xxl: "h-14 rounded-md px-10 has-[>svg]:px-8",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "xxl",
    },
  }
);

function LiquidButton({
  className,
  variant,
  size,
  asChild = false,
  children,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof liquidbuttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <>
      <GlassFilter />
      <Comp
        className={cn(
          liquidbuttonVariants({ variant, size, className }),
          "relative overflow-hidden"
        )}
        {...props}
      >
        {/* Main gradient background */}
        <span
          className="absolute inset-0 rounded-[inherit]"
          style={{
            background: "hsl(8 83% 51%)",
          }}
        />

        {/* Outer glow */}
        <span
          className="absolute -inset-[3px] z-0 rounded-[inherit] opacity-60"
          style={{
            background: "hsl(8 83% 51%)",
            filter: "blur(12px)",
          }}
        />

        {/* Inner shimmer overlay */}
        <span
          className="absolute inset-0 z-[1] rounded-[inherit] opacity-40"
          style={{
            background: "linear-gradient(to right, transparent, hsl(0 0% 100% / 0.3) 50%, transparent)",
          }}
        />

        {/* Text content */}
        <span className="relative z-10 flex items-center gap-2 font-semibold text-white drop-shadow-sm">
          {children}
        </span>

        {/* Border gradient */}
        <span
          className="absolute inset-0 z-[2] rounded-[inherit] border border-white/20"
          style={{
            background: "linear-gradient(135deg, hsl(0 0% 100% / 0.1), transparent 50%, hsl(0 0% 100% / 0.05))",
          }}
        />
      </Comp>
    </>
  );
}

function GlassFilter() {
  return (
    <svg className="absolute h-0 w-0" aria-hidden="true">
      <defs>
        <filter id="glass-distortion" x="-50%" y="-50%" width="200%" height="200%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.015"
            numOctaves="3"
            seed="1"
            result="noise"
          />
          <feGaussianBlur in="noise" stdDeviation="1" result="blurredNoise" />
          <feDisplacementMap
            in="SourceGraphic"
            in2="blurredNoise"
            scale="12"
            xChannelSelector="R"
            yChannelSelector="G"
            result="displaced"
          />
          <feGaussianBlur in="displaced" stdDeviation="0.5" result="finalBlur" />
          <feMerge>
            <feMergeNode in="finalBlur" />
          </feMerge>
        </filter>
      </defs>
    </svg>
  );
}

export { LiquidButton, liquidbuttonVariants };
