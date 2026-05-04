import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Target, PenTool, BarChart3, Globe, Megaphone } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { GlowOrb } from "@/components/ui/BackgroundEffects";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const services = [
  {
    icon: Target,
    title: "Performance Marketing",
    description: "Meta, Google, and YouTube campaigns built on testing frameworks. We find what works, then scale it relentlessly.",
    features: ["Multi-step funnels", "A/B testing", "Audience research", "CRO & offer testing"],
    isHighlighted: false,
  },
  {
    icon: PenTool,
    title: "Creative Ads",
    description: "Data-informed creative direction. Reels, carousels, and ad copy built to test, iterate, and convert.",
    features: ["Shot & AI reels", "Carousel ads", "Creative testing", "Brand guide alignment"],
    isHighlighted: true,
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Custom dashboards, proper attribution, and insights that actually matter. Know exactly where your money goes.",
    features: ["GA4 + Conversion API", "Looker Studio 360°", "Weekly insight calls", "Competitor analysis"],
    isHighlighted: false,
  },
  {
    icon: Globe,
    title: "Website Development & SEO",
    description: "Custom-built sites on Shopify, Wix, Odoo & WordPress. SEO infrastructure that turns traffic into conversions.",
    features: ["Custom websites", "On-page + AI SEO", "Landing pages", "Full integrations"],
    isHighlighted: false,
  },
  {
    icon: Megaphone,
    title: "Influencer Marketing",
    description: "Strategic influencer partnerships that drive real results. We identify, manage, and optimize creator campaigns.",
    features: ["Creator outreach", "Campaign strategy", "Content collaboration", "ROI tracking"],
    isHighlighted: false,
  },
];

export function ServicesSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/5 to-background" />
      <GlowOrb className="top-1/4 -left-48" color="primary" size="lg" />
      <GlowOrb className="bottom-1/4 -right-48" color="primary" size="md" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <span className="pill-gradient mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-sm font-medium">What We Do</span>
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Five Things. <span className="text-primary">Done Right.</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We don't do everything. We do five things obsessively well.
            That's how you get results, not excuses.
          </p>
        </AnimatedSection>

        {/* Services Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12" staggerDelay={0.1}>
          {services.map((service, index) => (
            <StaggerItem key={service.title}>
              <motion.div
                className="relative h-full"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="relative h-full rounded-xl p-[2px]">
                  <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                    borderWidth={2}
                  />

                  <div
                    className={`relative h-full p-8 rounded-xl ${
                      service.isHighlighted
                        ? "bg-gradient-to-br from-primary/10 via-card to-card border border-primary/20"
                        : "bg-card border border-border"
                    }`}
                  >
                    <div className="relative z-10">
                      <motion.div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-[#111114] border border-primary/30"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <service.icon className="w-7 h-7 text-primary" />
                      </motion.div>

                      <h3 className="font-display text-xl font-bold mb-3 text-foreground">
                        {service.title}
                      </h3>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, i) => (
                          <motion.li
                            key={feature}
                            className="flex items-center gap-3 text-sm"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * i }}
                          >
                            <motion.div
                              className="w-1.5 h-1.5 rounded-full bg-primary"
                              initial={{ scale: 0 }}
                              whileInView={{ scale: 1 }}
                              viewport={{ once: true }}
                            />
                            <span className="text-muted-foreground">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>

                      <Link
                        to="/services"
                        className="inline-flex items-center gap-2 font-medium text-sm group/link link-underline text-foreground"
                      >
                        Learn more
                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA */}
        <AnimatedSection className="text-center relative">
          <Link to="/services">
            <Button variant="pillOutline" size="lg" className="btn-glow">
              See All Services
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          {/* Red dot signature */}
          <div className="absolute -bottom-4 left-1/2 ml-24 w-1 h-1 rounded-full bg-primary opacity-40" aria-hidden="true" />
        </AnimatedSection>
      </div>
    </section>
  );
}
