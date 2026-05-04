import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Zap } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { MagnetizeButton } from "@/components/ui/magnetize-button";
import { PulseBeams } from "@/components/ui/pulse-beams";

const beams = [
  {
    path: "M269 220.5H16.5C10.9772 220.5 6.5 224.977 6.5 230.5V398.5",
    gradientConfig: {
      initial: { x1: "0%", x2: "0%", y1: "80%", y2: "100%" },
      animate: {
        x1: ["0%", "0%", "200%"],
        x2: ["0%", "0%", "180%"],
        y1: ["80%", "0%", "0%"],
        y2: ["100%", "20%", "20%"],
      },
      transition: { duration: 2, repeat: Infinity, repeatType: "loop", ease: "linear", repeatDelay: 2, delay: 0 },
    },
    connectionPoints: [{ cx: 6.5, cy: 398.5, r: 6 }, { cx: 269, cy: 220.5, r: 6 }],
  },
  {
    path: "M568 200H841C846.523 200 851 195.523 851 190V40",
    gradientConfig: {
      initial: { x1: "0%", x2: "0%", y1: "80%", y2: "100%" },
      animate: {
        x1: ["20%", "100%", "100%"],
        x2: ["0%", "90%", "90%"],
        y1: ["80%", "80%", "-20%"],
        y2: ["100%", "100%", "0%"],
      },
      transition: { duration: 2, repeat: Infinity, repeatType: "loop", ease: "linear", repeatDelay: 2, delay: 0.5 },
    },
    connectionPoints: [{ cx: 851, cy: 34, r: 6.5 }, { cx: 568, cy: 200, r: 6 }],
  },
  {
    path: "M425.5 274V333C425.5 338.523 421.023 343 415.5 343H152C146.477 343 142 347.477 142 353V426.5",
    gradientConfig: {
      initial: { x1: "0%", x2: "0%", y1: "80%", y2: "100%" },
      animate: {
        x1: ["20%", "100%", "100%"],
        x2: ["0%", "90%", "90%"],
        y1: ["80%", "80%", "-20%"],
        y2: ["100%", "100%", "0%"],
      },
      transition: { duration: 2, repeat: Infinity, repeatType: "loop", ease: "linear", repeatDelay: 2, delay: 1 },
    },
    connectionPoints: [{ cx: 142, cy: 427, r: 6.5 }, { cx: 425.5, cy: 274, r: 6 }],
  },
];

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Pulse Beams Background */}
      <div className="absolute inset-0 opacity-30">
        <PulseBeams
          beams={beams}
          className="w-full h-full"
          gradientColors={{
            start: "hsl(8, 83%, 51%)",
            middle: "hsl(8, 83%, 40%)",
            end: "hsl(8, 83%, 55%)",
          }}
        />
      </div>

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/3 to-background" />
      
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(232, 52, 26, 0.06) 1px, transparent 1px),
              linear-gradient(90deg, rgba(232, 52, 26, 0.06) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>
      
      {/* Animated glow orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full"
        style={{
          background: "radial-gradient(ellipse, hsl(var(--primary) / 0.1), transparent 70%)",
        }}
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          className="relative p-12 md:p-16 text-center max-w-4xl mx-auto rounded-3xl overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Glass background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background/80 to-background/90 backdrop-blur-xl border border-primary/10 rounded-3xl" />
          
          <div className="relative z-10">
            <AnimatedSection delay={0.1}>
              <motion.div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/8 border border-primary/20 mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-sm uppercase tracking-wider text-primary font-semibold">
                  Ready to Scale?
                </span>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
                Let's Build Your{" "}
                <span className="text-primary">Growth Engine</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
                Start with a free audit. We'll analyze your current setup and show 
                you exactly where the opportunities are. No fluff. No sales pitch. 
                Just data.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/contact">
                  <MagnetizeButton 
                    text="Book a Call" 
                    attractingText="Let's Connect!"
                    className="h-12 px-8 text-base rounded-full"
                  />
                </Link>
                
                <Link to="/contact">
                  <InteractiveHoverButton 
                    text="Get Free Audit" 
                    className="h-12 px-8 text-base"
                  />
                </Link>
              </div>
            </AnimatedSection>

            {/* Trust indicators */}
            <AnimatedSection delay={0.5}>
              <div className="flex items-center justify-center gap-6 mt-10 pt-8 border-t border-primary/10">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  Free 30-minute consultation
                </div>
                <div className="hidden sm:block w-px h-4 bg-border" />
                <div className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground">
                  <Zap className="w-4 h-4 text-primary" />
                  No commitment required
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Red dot signature */}
          <div className="absolute top-6 right-8 w-1.5 h-1.5 rounded-full bg-primary opacity-40" aria-hidden="true" />
        </motion.div>
      </div>
    </section>
  );
}
