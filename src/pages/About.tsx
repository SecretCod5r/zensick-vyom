import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Target, Zap, Eye, TrendingUp, Sparkles } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import vyomImage from "@/assets/vyom-founder.jpeg";
import zensickEmblem from "@/assets/zensick-emblem.png";
import { TeamSection } from "@/components/about/TeamSection";

const beliefs = [
  {
    icon: Target,
    title: "Data Before Drama",
    description: "Opinions are cheap. Data is expensive. We invest in measurement so we can have real conversations, not guessing games.",
  },
  {
    icon: Eye,
    title: "Transparency Is Non-Negotiable",
    description: "You should see everything we see. No hidden dashboards, no 'proprietary' excuses. Your money, your data.",
  },
  {
    icon: Zap,
    title: "Speed Beats Perfection",
    description: "A good test run today beats a perfect campaign next month. We move fast, learn faster, and optimize relentlessly.",
  },
  {
    icon: TrendingUp,
    title: "Results, Not Reports",
    description: "Anyone can make a pretty PDF. We care about the numbers that actually hit your bank account.",
  },
];

const stats = [
  { value: "100%", label: "Data Transparency" },
  { value: "0", label: "Vanity Metrics" },
  { value: "24/7", label: "Dashboard Access" },
  { value: "∞", label: "Growth Potential" },
];

import { SEO } from "@/components/seo/SEO";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="About Us | D2C Performance Agency in Delhi" 
        description="Learn about ZENSICK, the performance marketing agency in Delhi. We focus on transparent tracking, data-driven decisions, and sustainable D2C growth."
        canonicalUrl="https://zensick.com/about"
      />
      <Navbar />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-24 relative overflow-hidden min-h-[60vh] flex items-center">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm uppercase tracking-wider text-primary font-semibold">
                  About ZENSICK
                </span>
              </motion.div>
              
              <motion.h1 
                className="font-display text-4xl md:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                We're Not Your Typical{" "}
                <span className="text-gradient-primary">Agency</span>
              </motion.h1>
              
              <motion.p 
                className="text-lg text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                We started ZENSICK because we got tired of the BS. Vanity metrics. 
                Black-box reporting. Agencies that hide behind complexity.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Founder Vision */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/3 to-background" />
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <motion.div 
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6"
                  whileHover={{ scale: 1.05 }}
                >
                  <Zap className="w-4 h-4 text-primary" />
                  <span className="text-sm uppercase tracking-wider text-primary font-semibold">
                    The Vision
                  </span>
                </motion.div>
                
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                  Why ZENSICK Exists
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Most marketing agencies operate on information asymmetry. They know 
                    things you don't, and they keep it that way. It's good for their business, 
                    bad for yours.
                  </p>
                  <p>
                    We believe that's backwards. When you understand your data as well as we do, 
                    you make better decisions. Better decisions mean better results. Better 
                    results mean you keep working with us.
                  </p>
                  <p>
                    ZENSICK was built on a simple premise: <span className="text-foreground font-semibold">
                    make the client smarter, not more dependent.</span> When you hire us, you get 
                    a team that's obsessed with teaching you what we see, not hiding it.
                  </p>
                  <p className="text-foreground font-medium">
                    We're young. We're hungry. And we're building the agency we wish existed 
                    when we were on the brand side.
                  </p>
                </div>
              </motion.div>

              {/* Stats Card with Glow */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="relative rounded-3xl p-[1px]">
                  <GlowingEffect
                    spread={60}
                    glow={true}
                    disabled={false}
                    proximity={100}
                    inactiveZone={0.4}
                    borderWidth={2}
                  />
                  
                  <div className="relative bg-card/50 backdrop-blur-xl rounded-3xl p-10 border border-primary/10 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
                    
                    <div className="relative z-10">
                      <div className="text-center mb-10">
                        <div className="mb-6 flex justify-center">
                          <img src={zensickEmblem} alt="ZENSICK" className="w-24 h-24 rounded-full object-cover" />
                        </div>
                        <h3 className="font-display text-2xl font-bold mb-2">ZENSICK</h3>
                        <p className="text-muted-foreground">Performance Marketing & Analytics</p>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        {stats.map((stat, index) => (
                          <motion.div 
                            key={stat.label}
                            className="bg-background/50 backdrop-blur-sm p-5 rounded-2xl text-center border border-primary/10"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -3, borderColor: "hsl(8 83% 51% / 0.3)" }}
                          >
                            <p className="text-3xl font-display font-bold text-gradient-primary">{stat.value}</p>
                            <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>


        {/* Beliefs Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/3 to-background" />
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div 
              className="text-center max-w-2xl mx-auto mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-foreground">
                What We Believe
              </h2>
              <p className="text-muted-foreground text-lg">
                These aren't just words on a page. They're the filter through which 
                we make every decision.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {beliefs.map((belief, index) => (
                <motion.div
                  key={belief.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="relative rounded-2xl p-[1px]">
                    <GlowingEffect
                      spread={40}
                      glow={true}
                      disabled={false}
                      proximity={80}
                      inactiveZone={0.6}
                      borderWidth={1}
                    />
                    
                    <div className="relative bg-card rounded-2xl p-8 border border-border h-full">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                      
                      <div className="relative z-10">
                         <motion.div 
                          className="w-14 h-14 rounded-2xl bg-[#111114] border border-primary/30 flex items-center justify-center mb-6"
                          whileHover={{ rotate: [0, -10, 10, 0] }}
                          transition={{ duration: 0.5 }}
                        >
                          <belief.icon className="w-7 h-7 text-primary-foreground" />
                        </motion.div>
                        <h3 className="font-display text-xl font-bold mb-3 text-foreground">
                          {belief.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {belief.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <TeamSection />

        {/* Founder Message */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/3 to-background" />
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div 
              className="text-center max-w-2xl mx-auto mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-foreground">
                A Message From the Guy Behind{" "}
                <span className="text-gradient-primary">ZENSICK</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-5xl mx-auto items-start">
              <motion.div
                className="lg:col-span-2 flex flex-col items-center"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="relative rounded-3xl overflow-hidden border-2 border-primary/20 shadow-2xl shadow-primary/10">
                  <img
                    src={vyomImage}
                    alt="Vyom — Founder of ZENSICK"
                    className="w-full max-w-[320px] object-cover aspect-[3/4]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="font-display text-lg font-bold text-foreground">Vyom</p>
                    <p className="text-sm text-muted-foreground">Founder, ZENSICK</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="lg:col-span-3 space-y-5 text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-foreground font-semibold text-lg">
                  ZENSICK started because marketing agencies have a weird talent:
                </p>
                <p className="text-foreground font-medium text-xl italic">
                  Making simple things look complicated.
                </p>
                <p>
                  Vanity metrics. Black-box dashboards. Reports that look impressive but somehow 
                  never answer the one question that matters:
                </p>
                <p className="text-foreground font-semibold text-lg border-l-2 border-primary pl-4">
                  "Is this actually making money?"
                </p>
                <p>I got tired of that.</p>
                <p>So ZENSICK was built differently.</p>
                <p>
                  We track everything. We show everything. And if something isn't working, 
                  we say it instead of hiding behind a prettier graph.
                </p>
                <p>
                  We're still early. Still building. Still testing things daily.
                </p>
                <p>But the goal is simple:</p>
                <p className="text-foreground font-semibold text-lg">
                  Build the kind of agency that doesn't treat transparency like a marketing feature.
                </p>
                <p className="text-foreground font-medium text-xl">
                  It should be the default.
                </p>
                <p className="text-primary font-display font-bold mt-6">
                  — Vyom<br />
                  <span className="text-muted-foreground text-sm font-normal">Founder, ZENSICK</span>
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Ambition */}
        <section className="py-24 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div 
              className="max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <TrendingUp className="w-4 h-4 text-primary" />
                <span className="text-sm uppercase tracking-wider text-primary font-semibold">
                  Where We're Going
                </span>
              </motion.div>
              
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                The Long Game
              </h2>
              <div className="text-muted-foreground text-lg leading-relaxed space-y-4">
                <p>
                  We're not trying to be the biggest agency. We're trying to be the 
                  most honest one. The one that brands trust because we've earned it.
                </p>
                <p>
                  In five years, we want to be known as the team that changed how 
                  agencies work with data. The ones who made transparency the industry 
                  standard, not the exception.
                </p>
                <p className="text-foreground font-semibold text-xl">
                  That's the vision. And we're building it one client at a time.
                </p>
              </div>
            </motion.div>
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
                    Like What You See?
                  </h2>
                  <p className="text-muted-foreground text-lg mb-8">
                    If this sounds like the kind of agency you want to work with, 
                    let's talk. No pressure, no pitch. Just a conversation.
                  </p>
                  <Link to="/contact">
                    <Button className="btn-shimmer h-14 px-8 text-base">
                      Get in Touch
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
