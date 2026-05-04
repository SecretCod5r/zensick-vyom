import { motion } from "framer-motion";
import { Check, X, Zap } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const differences = [
  {
    us: "Analytics-first mindset",
    them: "Launch first, measure maybe",
  },
  {
    us: "Transparent reporting you can access",
    them: "Monthly PDF summaries",
  },
  {
    us: "Scale based on proven data",
    them: "Blind budget increases",
  },
  {
    us: "Focus on metrics that matter (ROAS, CAC, LTV)",
    them: "Vanity metrics (reach, impressions)",
  },
  {
    us: "Honest about what's working and what's not",
    them: "'Everything is going great!'",
  },
];

export function WhyDifferentSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/2 to-background" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/8 border border-primary/20 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm uppercase tracking-wider text-primary font-semibold">
              Why ZENSICK
            </span>
          </motion.div>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            We're Not <span className="text-primary">Another Agency</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            There's a reason most agencies avoid showing you the numbers. 
            We're built different.
          </p>
        </AnimatedSection>

        {/* Comparison Table */}
        <AnimatedSection className="max-w-3xl mx-auto" delay={0.2}>
          <div className="relative rounded-3xl p-[1px]">
            <GlowingEffect
              spread={50}
              glow={true}
              disabled={false}
              proximity={100}
              inactiveZone={0.5}
              borderWidth={2}
            />
            
            <motion.div 
              className="relative bg-card/50 backdrop-blur-xl rounded-3xl overflow-hidden border border-primary/10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Header Row — No Z icon, just ZENSICK text */}
              <div className="grid grid-cols-2 gap-4 p-6 border-b border-border/50 bg-primary/3">
                <div className="flex items-center gap-3">
                  <span className="font-display font-bold text-xl tracking-[0.15em] uppercase">ZENSICK</span>
                  {/* Red dot signature */}
                  <div className="w-1.5 h-1.5 rounded-full bg-primary opacity-60" aria-hidden="true" />
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center">
                    <span className="text-muted-foreground text-sm">?</span>
                  </div>
                  <span className="font-display font-medium text-lg text-muted-foreground">
                    Typical Agency
                  </span>
                </div>
              </div>

              {/* Comparison Rows */}
              {differences.map((diff, index) => (
                <motion.div
                  key={index}
                  className="grid grid-cols-2 gap-4 p-6 border-b border-border/30 last:border-b-0 hover:bg-primary/3 transition-all duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                >
                  <div className="flex items-start gap-3">
                    <motion.div 
                      className="w-7 h-7 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5"
                      whileHover={{ scale: 1.2 }}
                    >
                      <Check className="w-4 h-4 text-white" />
                    </motion.div>
                    <span className="text-foreground font-medium">{diff.us}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="w-4 h-4 text-destructive" />
                    </div>
                    <span className="text-muted-foreground">{diff.them}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
