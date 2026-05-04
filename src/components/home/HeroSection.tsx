import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Users, DollarSign, LineChart, FlaskConical, Eye } from "lucide-react";
import { StarField, HeroGlow, GridBackground } from "@/components/ui/BackgroundEffects";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import ProceduralGroundBackground from "@/components/ui/procedural-ground-background";
import DisplayCards from "@/components/ui/display-cards";

const displayCardsData = [{
  icon: <TrendingUp className="size-4 text-primary" />,
  title: "ROAS Tracking",
  description: "Real-time campaign performance",
  date: "Live data",
  iconClassName: "text-primary",
  titleClassName: "text-primary",
  className: "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0"
}, {
  icon: <Users className="size-4 text-primary" />,
  title: "Audience Insights",
  description: "Deep behavioral analysis",
  date: "Updated hourly",
  iconClassName: "text-primary",
  titleClassName: "text-primary",
  className: "[grid-area:stack] translate-x-12 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0"
}, {
  icon: <DollarSign className="size-4 text-primary" />,
  title: "Revenue Attribution",
  description: "Every rupee tracked",
  date: "Just now",
  iconClassName: "text-primary",
  titleClassName: "text-primary",
  className: "[grid-area:stack] translate-x-24 translate-y-20 hover:translate-y-10"
}];

export function HeroSection() {
  return <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      {/* WebGL Background */}
      <div className="absolute inset-0 z-0">
        <ProceduralGroundBackground />
      </div>
      
      {/* Additional Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background/80 pointer-events-none z-[1]" />
      <HeroGlow />
      <StarField count={60} />
      <GridBackground className="opacity-10" />

      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-2xl my-[5px]">
            {/* Badge */}
            <AnimatedSection delay={0}>
              <div className="pill-gradient mb-8 inline-flex">
                <motion.div className="w-2 h-2 rounded-full bg-primary" animate={{
                scale: [1, 1.3, 1],
                opacity: [1, 0.6, 1],
              }} transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }} />
                <span className="text-sm font-medium text-foreground/80">
                  Performance Marketing & Analytics Agency
                </span>
              </div>
            </AnimatedSection>

            {/* Headline */}
            <AnimatedSection delay={0.1}>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                We Don't Guess.{" "}
                <span className="text-primary">
                  We Track, Test & Scale.
                </span>
              </h1>
            </AnimatedSection>

            {/* Subheadline */}
            <AnimatedSection delay={0.2}>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed">
                Stop burning budget on blind scaling. ZENSICK builds data-driven 
                growth engines that turn ad spend into predictable revenue.
              </p>
            </AnimatedSection>

            {/* CTAs */}
            <AnimatedSection delay={0.3}>
              <div className="flex flex-col sm:flex-row items-start gap-4 mb-12">
                <Link to="/contact">
                  <Button variant="pill" size="xl" className="group btn-shimmer">
                    Book a Call
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="pillOutline" size="xl" className="btn-glow">
                    Get a Free Audit
                  </Button>
                </Link>
              </div>
            </AnimatedSection>

            {/* Stats Row */}
            <StaggerContainer className="grid grid-cols-3 gap-6" staggerDelay={0.1}>
              <StaggerItem>
                <motion.div 
                  className="group text-center p-4 rounded-xl border border-border/50 bg-muted/30 backdrop-blur-sm hover:border-primary/50 hover:bg-muted/50 transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <div className="flex items-center justify-center mb-2">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <LineChart className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <p className="text-sm font-semibold text-foreground mb-1">Analytics-First</p>
                  <p className="text-xs text-muted-foreground">GA4 + GTM setup included</p>
                </motion.div>
              </StaggerItem>

              <StaggerItem>
                <motion.div 
                  className="group text-center p-4 rounded-xl border border-border/50 bg-muted/30 backdrop-blur-sm hover:border-primary/50 hover:bg-muted/50 transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <div className="flex items-center justify-center mb-2">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <FlaskConical className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <p className="text-sm font-semibold text-foreground mb-1">Testing Framework</p>
                  <p className="text-xs text-muted-foreground">A/B tests before scaling</p>
                </motion.div>
              </StaggerItem>

              <StaggerItem>
                <motion.div 
                  className="group text-center p-4 rounded-xl border border-border/50 bg-muted/30 backdrop-blur-sm hover:border-primary/50 hover:bg-muted/50 transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <div className="flex items-center justify-center mb-2">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Eye className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <p className="text-sm font-semibold text-foreground mb-1">Full Transparency</p>
                  <p className="text-xs text-muted-foreground">Live dashboards & reports</p>
                </motion.div>
              </StaggerItem>
            </StaggerContainer>
          </div>

          {/* Right Content - Display Cards */}
          <AnimatedSection delay={0.4} className="hidden lg:block">
            <motion.div initial={{
            opacity: 0,
            x: 50
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8,
            delay: 0.5
          }} className="relative">
              {/* Glow behind cards */}
              <div className="absolute inset-0 bg-primary/5 blur-[80px] rounded-full" />
              <DisplayCards cards={displayCardsData} />
            </motion.div>
          </AnimatedSection>
        </div>
      </div>

      {/* Red dot signature */}
      <div className="absolute bottom-8 right-12 w-1.5 h-1.5 rounded-full bg-primary opacity-40 z-30" aria-hidden="true" />
    </section>;
}
