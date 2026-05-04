import { motion } from "framer-motion";
import { TrendingUp, Users, Clock, Shield } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { IconCloud, marketingTechSlugs } from "@/components/ui/interactive-icon-cloud";

const proofPoints = [{
  icon: TrendingUp,
  label: "Performance First",
  description: "Every decision backed by data"
}, {
  icon: Users,
  label: "D2C Focused",
  description: "Built for modern brands"
}, {
  icon: Clock,
  label: "Rapid Iteration",
  description: "Weekly optimization cycles"
}, {
  icon: Shield,
  label: "Full Transparency",
  description: "Real-time reporting access"
}];

export function SocialProofSection() {
  return <section className="py-24 border-t border-border/30 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/2 via-background to-background" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Trust Badges */}
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20" staggerDelay={0.1}>
          {proofPoints.map((point, index) => <StaggerItem key={point.label}>
              <div className="relative h-full rounded-2xl p-[1px] group">
                <GlowingEffect spread={40} glow={true} disabled={false} proximity={80} inactiveZone={0.6} borderWidth={1} />
                <motion.div className="relative h-full bg-card/50 backdrop-blur-xl rounded-2xl p-6 text-center border border-border/50 overflow-hidden" whileHover={{
              y: -5
            }} transition={{
              type: "spring",
              stiffness: 300
            }}>
                  <div className="relative z-10">
                    <motion.div className="w-14 h-14 rounded-2xl bg-[#111114] border border-primary/30 mx-auto mb-4 flex items-center justify-center" whileHover={{
                  rotate: [0, -10, 10, 0]
                }} transition={{
                  duration: 0.5
                }}>
                      <point.icon className="w-7 h-7 text-primary" />
                    </motion.div>
                    <h3 className="font-display font-bold text-lg mb-2">{point.label}</h3>
                    <p className="text-sm text-muted-foreground">{point.description}</p>
                  </div>
                </motion.div>
              </div>
            </StaggerItem>)}
        </StaggerContainer>

        {/* Interactive Icon Cloud */}
        <AnimatedSection className="text-center relative">
          <motion.div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/8 border border-primary/20 mb-4" whileHover={{
          scale: 1.05
        }}>
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-sm uppercase tracking-wider text-primary font-semibold">
              Systems We Build & Manage
            </span>
          </motion.div>
          
          <p className="text-muted-foreground text-sm mb-4 max-w-md mx-auto">
            This is the stack we use to track revenue, attribution, and scale profitably.
          </p>
          
          <div className="relative max-w-2xl mx-auto h-[350px] md:h-[400px]">
            <IconCloud iconSlugs={marketingTechSlugs} />
          </div>
          
          {/* Red dot signature */}
          <div className="absolute top-12 right-8 w-1.5 h-1.5 rounded-full bg-primary opacity-40" aria-hidden="true" />
        </AnimatedSection>
      </div>
    </section>;
}
