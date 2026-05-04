import { motion } from "framer-motion";
import { Search, TestTube, Brain, Rocket, Zap } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GridBackground, GlowOrb } from "@/components/ui/BackgroundEffects";
import RadialOrbitalTimeline, { type TimelineItem } from "@/components/ui/radial-orbital-timeline";

const timelineData: TimelineItem[] = [
  {
    id: 1,
    title: "Track",
    date: "Phase 1",
    content: "First, we set up proper tracking. No data, no decisions. We audit your current setup and build a clean measurement foundation.",
    category: "Foundation",
    icon: Search,
    relatedIds: [2],
    status: "completed",
    energy: 100,
  },
  {
    id: 2,
    title: "Test",
    date: "Phase 2",
    content: "Controlled experiments across audiences, creatives, and offers. We find your winning combinations through systematic testing.",
    category: "Experimentation",
    icon: TestTube,
    relatedIds: [1, 3],
    status: "completed",
    energy: 85,
  },
  {
    id: 3,
    title: "Learn",
    date: "Phase 3",
    content: "Data becomes insights. We analyze what works, why it works, and how to make it work even better. Every test teaches.",
    category: "Analysis",
    icon: Brain,
    relatedIds: [2, 4],
    status: "in-progress",
    energy: 65,
  },
  {
    id: 4,
    title: "Scale",
    date: "Phase 4",
    content: "Winners get budget. Losers get cut. We scale what's proven while continuously testing new opportunities.",
    category: "Growth",
    icon: Rocket,
    relatedIds: [3],
    status: "pending",
    energy: 40,
  },
];

export function ProcessSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <GridBackground className="opacity-15" />
      <GlowOrb className="top-1/4 right-0" color="primary" size="lg" />
      <GlowOrb className="bottom-1/4 left-0" color="primary" size="md" />
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-8">
          <motion.div 
            className="pill-gradient mb-4 inline-flex"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Our Process</span>
          </motion.div>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            How We <span className="text-primary">Actually Work</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            No mysterious "strategies." No vague promises. 
            Just a clear, repeatable system that produces results.
          </p>
        </AnimatedSection>

        {/* Orbital Timeline */}
        <AnimatedSection delay={0.2}>
          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[500px] h-[500px] bg-primary/3 rounded-full blur-[100px]" />
            </div>
            
            <RadialOrbitalTimeline timelineData={timelineData} />
          </div>
        </AnimatedSection>

        {/* Bottom Stats */}
        <AnimatedSection delay={0.4} className="mt-16 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { label: "Consistent experimentation", value: "12+ Tests / Month" },
              { label: "Decision-grade data", value: "50K+ Events Tracked" },
              { label: "Scaled with confidence", value: "Only Proven Winners" },
              { label: "No blind spend", value: "Validated Scaling" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-6 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ 
                  scale: 1.05,
                  borderColor: "hsl(8 83% 51% / 0.3)"
                }}
              >
                <div className="font-display text-lg md:text-xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <p className="text-xs md:text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
          {/* Red dot signature */}
          <div className="absolute bottom-0 right-1/4 w-1 h-1 rounded-full bg-primary opacity-40" aria-hidden="true" />
        </AnimatedSection>
      </div>
    </section>
  );
}
