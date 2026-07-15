import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Target, PenTool, BarChart3, Globe, Lightbulb, Heart, Brain } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { GlowOrb } from "@/components/ui/BackgroundEffects";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const services = [
  {
    icon: Lightbulb,
    title: "Marketing Strategy",
    description: "Define positioning, identify opportunities, and create scalable growth roadmaps before execution begins.",
    features: ["Branding", "Growth Strategy", "GTM Planning", "Customer Journey Mapping"],
    isHighlighted: false,
  },
  {
    icon: PenTool,
    title: "Creative + Content",
    description: "High-performing visual content designed to capture attention, communicate value, and drive results.",
    features: ["Ad Creatives", "Video & Motion", "Social Media", "UGC & Testimonials"],
    isHighlighted: false,
  },
  {
    icon: Target,
    title: "Performance Marketing",
    description: "Data-driven paid acquisition across digital platforms, continuously optimized for measurable ROI.",
    features: ["Meta Ads", "Lead Generation", "Ecommerce Ads", "A/B Testing"],
    isHighlighted: false,
  },
  {
    icon: Heart,
    title: "CRM & Retention",
    description: "Nurture leads, retain customers, and maximize lifetime value through personalized lifecycle marketing.",
    features: ["CRM Setup", "Email Marketing", "WhatsApp Marketing", "Lifecycle Automation"],
    isHighlighted: false,
  },
  {
    icon: Brain,
    title: "Analytics & Intelligence",
    description: "Robust tracking systems and actionable dashboards. Know exactly what's working and where to scale.",
    features: ["GA4 + GTM", "Meta Pixel + CAPI", "Dashboarding", "Attribution"],
    isHighlighted: true,
  },
  {
    icon: Globe,
    title: "Web Development & SEO",
    description: "High-performing digital experiences that convert visitors into customers with long-term organic visibility.",
    features: ["Website Development", "Shopify", "Landing Pages", "SEO & CRO"],
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
            Six Verticals. <span className="text-primary">Done Right.</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We don't do everything. We do six things obsessively well.
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
