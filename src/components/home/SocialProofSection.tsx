import { TrendingUp, Users, Clock, Shield } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { IconCloud, marketingTechSlugs } from "@/components/ui/interactive-icon-cloud";

const proofPoints = [
  {
    icon: TrendingUp,
    label: "Performance First",
    description: "Every decision backed by data",
  },
  {
    icon: Users,
    label: "D2C Focused",
    description: "Built for modern brands",
  },
  {
    icon: Clock,
    label: "Rapid Iteration",
    description: "Weekly optimization cycles",
  },
  {
    icon: Shield,
    label: "Full Transparency",
    description: "Real-time reporting access",
  },
];

export function SocialProofSection() {
  return (
    <section className="py-24 border-t border-border/30 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/2 via-background to-background" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Trust Strip - Text-led horizontal layout with border dividers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-y border-border/40 divide-y sm:divide-y-0 sm:divide-x divide-border/40 mb-20 max-w-6xl mx-auto">
          {proofPoints.map((point) => (
            <div
              key={point.label}
              className="p-6 md:p-8 flex items-start gap-4 hover:bg-card/30 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                <point.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-foreground mb-1">
                  {point.label}
                </h3>
                <p className="text-sm text-muted-foreground leading-snug">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Icon Cloud */}
        <AnimatedSection className="text-center relative">
          <h3 className="font-display text-2xl md:text-3xl font-bold mb-3">
            SYSTEMS WE BUILD{" "}
            <span className="font-serif italic text-muted-foreground/90">
              and
            </span>{" "}
            <span className="text-primary">MANAGE.</span>
          </h3>
          <p className="text-muted-foreground text-sm mb-6 max-w-md mx-auto">
            This is the stack we use to track revenue, attribution, and scale profitably.
          </p>

          <div className="relative max-w-2xl mx-auto h-[350px] md:h-[400px]">
            <IconCloud iconSlugs={marketingTechSlugs} />
          </div>

          {/* Red dot signature */}
          <div
            className="absolute top-12 right-8 w-1.5 h-1.5 rounded-full bg-primary opacity-40"
            aria-hidden="true"
          />
        </AnimatedSection>
      </div>
    </section>
  );
}
