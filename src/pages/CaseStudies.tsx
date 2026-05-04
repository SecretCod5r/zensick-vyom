import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Target, BarChart3, Sparkles, Lightbulb } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import ProceduralGroundBackground from "@/components/ui/procedural-ground-background";
import AnimatedCardStack from "@/components/ui/animated-card-stack";
import { ZoomParallaxSection } from "@/components/casestudies/ZoomParallaxSection";
import { PulseBeamsConnector } from "@/components/home/PulseBeamsConnector";
const caseStudies = [
  {
    title: "TANISH CREATION",
    category: "Legacy Business → Digital Transition",
    subtitle: "Textile Manufacturing (60+ years) · Offline-to-Online",
    context: "A 60-year textile business entering online for the first time. Primary goal: bulk enquiries. Secondary: retail sales.",
    challenge: "No digital positioning. No bulk-focused landing structure. No tracking infrastructure. No B2B clarity. No event optimization. Running ads immediately would waste spend.",
    approach: [
      "Homepage restructure — Retail vs Bulk split, trust strip, reviews + FAQ, clear CTA hierarchy",
      "Bulk landing page — 500m minimum positioning, WhatsApp-focused conversion, production clarity",
      "Tracking setup — Meta Business Manager, Pixel + CAPI, GA4 property, lead-focused strategy",
      "Instagram setup — structured content plan, bulk-first messaging",
      "Ad campaign: ₹1,200 spent, 200 inquiries, ₹5.61 per conversation",
    ],
    results: {
      presence: { before: "None", after: "Fully structured" },
      funnel: { before: "No funnel", after: "Lead-optimized" },
      foundation: { before: "0%", after: "100% complete, campaign live" },
      results: { before: "0", after: "₹20 lakh bulk order + FirstCry India partnership secured" },
    },
    insight: "Before driving traffic, we built a system that could capture and measure bulk intent. The results followed before we even scaled spend.",
    gradient: "from-red-600 to-red-800",
  },
  {
    title: "VYRE",
    category: "E-commerce Foundation & Growth Architecture",
    subtitle: "Gen Z Streetwear · Pre-Scale D2C",
    context: "VYRE was a Gen Z streetwear startup built around emotionally heavy, minimal, chaos-inspired design. Strong aesthetic vision — but no digital infrastructure, no analytics, no scalable funnel. This became ZENSICK's first full-stack engagement.",
    challenge: "No conversion-optimized website. No tracking system. No AOV strategy. No structured pre-order logic. No analytics visibility. Scaling without structure would burn money.",
    approach: [
      "Full Shopify build — dark Gen Z-aligned UI, conversion-focused product pages, urgency triggers",
      "AOV optimization — incentive cart bar, mystery box mechanic for inventory + hype",
      "Tracking architecture — Meta Pixel with CAPI, GA4, Looker Studio dashboard, custom events",
      "Operational setup — Razorpay, Shiprocket + IThink logistics, domain + policy structuring",
    ],
    results: {
      roas: { before: "0x", after: "2.8x" },
      cac: { before: "N/A", after: "₹420" },
      status: { before: "No store", after: "Fully operational D2C" },
    },
    insight: "The first unlock wasn't ads. It was building infrastructure that could measure them.",
    gradient: "from-red-600 to-red-700",
  },
  {
    title: "STARRVAULT",
    category: "SaaS Growth Architecture",
    subtitle: "Privacy-First Productivity SaaS · Post-MVP",
    context: "Starrvault had 18 users, a working product, but no growth funnel, no activation definition, and no retention tracking. They didn't want vanity signups — they wanted meaningful users.",
    challenge: "No activation metric. No D1/D7 retention tracking. No event architecture. No paid experiment history. No funnel visibility. They were ready to market — but blind.",
    approach: [
      "Funnel mapping — Awareness → Signup → Activation → Retention",
      "Activation framework — D1/D7 retention, feature adoption, time-to-first-value",
      "Tracking architecture — GA4 event mapping, custom conversion events, user-level tracking",
      "30-day growth blueprint — measurement → controlled acquisition → retention optimization",
    ],
    results: {
      visibility: { before: "0%", after: "95%" },
      confidence: { before: "Gut-based", after: "Data-driven" },
      activation: { before: "Undefined", after: "Defined & tracked" },
    },
    insight: "Ads amplify activation problems. They don't fix them.",
    gradient: "from-red-500 to-red-600",
  },
  {
    title: "TORAL",
    category: "Conversion & Brand Foundation",
    subtitle: "Affordable Women's Handbags · Offline Reseller → D2C",
    context: "Toral was entering online for the first time with a generic Shopify template, supplier-style product titles, no brand identity, no trust positioning, and no conversion logic.",
    challenge: "Running ads at this stage would burn capital. The store wasn't conversion-ready. Website graded 6.5/10 with major trust & conversion gaps.",
    approach: [
      "Full website audit — identified trust & conversion gaps across the entire funnel",
      "Homepage rebuild — benefit-driven hero, trust bar, bestseller prioritization",
      "Branding upgrade — renamed 22 products, shifted positioning from reseller → D2C brand",
      "Strategic 30-day roadmap — Phase 1: conversion fixes, Phase 2: controlled traffic",
    ],
    results: {
      perception: { before: "Reseller", after: "D2C Brand" },
      trust: { before: "Low", after: "High" },
      structure: { before: "Template", after: "Conversion-ready" },
    },
    insight: "Traffic wasn't the problem. Trust and structure were.",
    gradient: "from-red-500 to-red-700",
  },
];

import { SEO } from "@/components/seo/SEO";

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="D2C Case Studies & Marketing Results" 
        description="See how we've helped D2C brands scale from scratch, restructure their analytics, and achieve measurable ROAS. Real problems, real results."
        canonicalUrl="https://zensick.com/case-studies"
      />
      <Navbar />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-24 relative overflow-hidden min-h-[60vh] flex items-center">
          <ProceduralGroundBackground />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.div 
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-sm uppercase tracking-wider text-primary font-semibold">
                    Case Studies
                  </span>
                </motion.div>
                
                <motion.h1 
                  className="font-display text-4xl md:text-5xl font-bold mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Thought Process Over{" "}
                  <span className="text-gradient-primary">Vanity Metrics</span>
                </motion.h1>
                
                <motion.p 
                  className="text-lg text-muted-foreground"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Real projects. Real challenges. We share the thinking behind the results, 
                  not just the highlight reel.
                </motion.p>
              </div>
              
              {/* Animated Card Stack */}
              <motion.div
                className="hidden lg:flex justify-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <AnimatedCardStack />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Zoom Parallax Section */}
        <ZoomParallaxSection />

        {/* Honest Note */}
        <section className="py-12 relative">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div 
              className="relative bg-card rounded-2xl p-6 max-w-3xl mx-auto text-center border border-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-muted-foreground">
                <span className="text-primary font-bold">A note on honesty:</span> These are real clients. 
                Real problems. We share the thinking behind the results, not just the highlight reel.
              </p>
            </motion.div>
          </div>
        </section>

        {/* PulseBeams Connector */}
        <PulseBeamsConnector className="py-8" />

        {/* Case Studies */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/3 to-background" />
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="space-y-32">
              {caseStudies.map((study, index) => (
                <motion.div 
                  key={study.title} 
                  className="relative"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  {/* Case Number */}
                  <div className="absolute -top-12 left-0 font-display text-[120px] font-bold text-primary/5 select-none pointer-events-none">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                      <motion.div 
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${study.gradient} mb-6`}
                        whileHover={{ scale: 1.05 }}
                      >
                        <span className="text-sm font-semibold text-white">
                          {study.category}
                        </span>
                      </motion.div>
                      
                      <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">
                        {study.title}
                      </h2>
                      {study.subtitle && (
                        <p className="text-muted-foreground text-sm uppercase tracking-wider mb-8">{study.subtitle}</p>
                      )}

                      {/* Context */}
                      {study.context && (
                        <div className="mb-10">
                          <h3 className="font-display font-bold text-xl mb-4 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                              <Sparkles className="w-5 h-5 text-white" />
                            </div>
                            The Context
                          </h3>
                          <p className="text-muted-foreground text-lg leading-relaxed">
                            {study.context}
                          </p>
                        </div>
                      )}

                      {/* Challenge */}
                      <div className="mb-10">
                        <h3 className="font-display font-bold text-xl mb-4 flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                            <Target className="w-5 h-5 text-white" />
                          </div>
                          The Real Problem
                        </h3>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                          {study.challenge}
                        </p>
                      </div>

                      {/* Approach */}
                      <div className="mb-10">
                        <h3 className="font-display font-bold text-xl mb-4 flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                            <BarChart3 className="w-5 h-5 text-white" />
                          </div>
                          What We Did
                        </h3>
                        <ul className="space-y-4">
                          {study.approach.map((step, i) => (
                            <motion.li 
                              key={i} 
                              className="flex items-start gap-4"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: i * 0.1 }}
                            >
                              <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary flex-shrink-0">
                                {i + 1}
                              </span>
                              <span className="text-muted-foreground text-lg">{step}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Insight */}
                      <div className="relative rounded-2xl p-[1px]">
                        <div className="relative bg-card/50 backdrop-blur-xl rounded-2xl p-6 border border-primary/20">
                          <h3 className="font-display font-bold mb-3 flex items-center gap-2 text-primary">
                            <Lightbulb className="w-5 h-5" />
                            Key Insight
                          </h3>
                          <p className="text-muted-foreground italic text-lg">"{study.insight}"</p>
                        </div>
                      </div>
                    </div>

                    {/* Results Card */}
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="relative rounded-3xl p-[1px] sticky top-32">
                        <GlowingEffect
                          spread={50}
                          glow={true}
                          disabled={false}
                          proximity={100}
                          inactiveZone={0.5}
                          borderWidth={2}
                        />
                        
                        <div className="relative bg-card/50 backdrop-blur-xl rounded-3xl p-8 border border-primary/10">
                          <h3 className="font-display font-bold text-xl mb-8 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                              <TrendingUp className="w-5 h-5 text-white" />
                            </div>
                            What Changed
                          </h3>
                          <div className="space-y-6">
                            {Object.entries(study.results).map(([key, value], i) => (
                              <motion.div 
                                key={key} 
                                className="border-b border-border/30 pb-6 last:border-0 last:pb-0"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                              >
                                <p className="text-sm text-muted-foreground uppercase tracking-wider mb-3">
                                  {key.replace(/([A-Z])/g, ' $1').trim()}
                                </p>
                                <div className="flex items-center gap-4">
                                  <span className="text-muted-foreground line-through text-lg">
                                    {value.before}
                                  </span>
                                  <ArrowRight className="w-5 h-5 text-primary" />
                                  <span className="text-2xl font-display font-bold text-gradient-primary">
                                    {value.after}
                                  </span>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-background to-background" />
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div 
              className="relative rounded-3xl p-[1px] max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative bg-card/50 backdrop-blur-xl rounded-3xl p-12 border border-primary/10 text-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
                
                <div className="relative z-10">
                  <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                    Want to Be Our Next Success Story?
                  </h2>
                  <p className="text-muted-foreground text-lg mb-8">
                    Let's talk about your challenges. No pitch deck, no pressure. 
                    Just an honest conversation about whether we're the right fit.
                  </p>
                  <Link to="/contact">
                    <Button className="btn-shimmer h-14 px-8 text-base">
                      Book a Call
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
