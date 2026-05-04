import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Target, PenTool, BarChart3, Check, Sparkles, Zap, Globe, Megaphone, Search, BarChart2, Tag, MousePointerClick, LineChart, ShoppingBag, type LucideIcon } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import ProceduralGroundBackground from "@/components/ui/procedural-ground-background";

const services = [
{
  icon: Target,
  title: "Performance Marketing",
  description: "Full-funnel paid acquisition across Meta, Google, and YouTube. We build testing frameworks, find winning audiences, and scale what works relentlessly.",
  includes: [
  "Meta + Google + YouTube Ads",
  "Advanced multi-step funnel development",
  "Full custom landing page",
  "Audience research & segmentation",
  "Advanced A/B testing",
  "SEO setup + integration + indexing",
  "Influencer marketing",
  "Offer testing & conversion rate optimization",
  "Weekly optimization (bidding, audience refinement, creative scaling)"],

  idealFor: "D2C brands ready to scale with systematic, data-driven paid acquisition.",
  gradient: "from-red-600 to-red-700"
},
{
  icon: PenTool,
  title: "Creative Ads",
  description: "Data-informed creative direction. We build ads that don't just look good—they perform. Every creative is built to test, iterate, and convert.",
  includes: [
  "Professional AI or shot reels (concept, script, shooting, editing)",
  "Carousel ads (design + copy)",
  "Ad copywriting & hook frameworks",
  "A/B creative testing framework",
  "Creative direction & brand guide",
  "Format optimization (static, video, UGC)",
  "Creative testing matrix",
  "Performance-based iteration"],

  idealFor: "Brands that want creative systems, not one-off ads.",
  gradient: "from-red-500 to-red-600"
},
{
  icon: BarChart3,
  title: "Analytics & Reporting",
  description: "This is our unfair advantage. Proper tracking, real attribution, custom dashboards. Know exactly where your money goes and what it produces.",
  includes: [
  "GA4 full conversion API + advanced event mapping",
  "Meta Pixel + Conversion API integration",
  "360° Looker Studio dashboard",
  "Weekly insight calls with strategy recommendations",
  "Competitor ad analysis",
  "Weekly automated reporting",
  "Fortnightly performance audit & optimization suggestions"],

  idealFor: "Brands who want clarity on their marketing spend and real insights, not vanity metrics.",
  gradient: "from-red-600 to-red-800"
},
{
  icon: Globe,
  title: "Website Development & SEO",
  description: "Custom-built websites and SEO infrastructure that turn traffic into conversions. We build on Shopify, Wix, Odoo, and WordPress.",
  includes: [
  "Custom website development",
  "On-page SEO + AI SEO",
  "Google Search Console integration",
  "Brand-style conversion-focused landing pages",
  "Domain, payment & delivery integrations",
  "Meta Pixel, GSC & GA4 setup"],

  idealFor: "Brands that need a high-converting online presence from the ground up.",
  gradient: "from-red-500 to-red-700"
},
{
  icon: Megaphone,
  title: "Influencer Marketing",
  description: "Strategic influencer partnerships that drive real results. We identify, manage, and optimize influencer campaigns aligned with your brand goals.",
  includes: [
  "Influencer identification & outreach",
  "Campaign strategy & management",
  "Content collaboration & brand alignment",
  "Performance tracking & ROI measurement"],

  idealFor: "Brands looking to amplify reach through authentic creator partnerships.",
  gradient: "from-red-600 to-red-700"
}];


const allPlansInclude = [
"Strategic onboarding call",
"Real-time reporting access",
"Monthly growth recommendations",
"Full transparency on ad spend",
"Dedicated performance manager",
"Weekly strategy calls",
"Monthly growth roadmap",
"Priority access + same-day response"];


const tools: { name: string; category: string; icon: LucideIcon }[] = [
{ name: "GA4", category: "Analytics", icon: BarChart2 },
{ name: "Google Tag Manager", category: "Tracking", icon: Tag },
{ name: "Meta Ads", category: "Advertising", icon: Megaphone },
{ name: "Google Ads", category: "Advertising", icon: MousePointerClick },
{ name: "Looker Studio", category: "Reporting", icon: LineChart },
{ name: "Shopify", category: "E-Commerce", icon: ShoppingBag }];


export default function Services() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-24 relative overflow-hidden min-h-[60vh] flex items-center">
          <ProceduralGroundBackground />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}>

                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm uppercase tracking-wider text-primary font-semibold">
                  Services
                </span>
              </motion.div>

              <motion.h1
                className="font-display text-4xl md:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}>

                We Don't Guess.{" "}
                <span className="text-gradient-primary">
We Predict.</span>
              </motion.h1>

              <motion.p className="text-lg text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}>

                Performance marketing, creative systems, analytics, web development, and influencer partnerships, built to scale brands, not inflate vanity metrics.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Services Detail */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/3 to-background" />

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="space-y-32">
              {services.map((service, index) =>
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start group/section">

                  {/* Content */}
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <motion.div
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-8 shadow-2xl`}
                    whileHover={{ rotate: [0, -5, 5, 0], scale: 1.05 }}
                    transition={{ duration: 0.5 }}>

                      <service.icon className="w-10 h-10 text-white" />
                    </motion.div>

                    <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Ideal For */}
                    <div className="space-y-4 mb-8">
                      <motion.div
                      className="bg-card/50 backdrop-blur-xl border border-primary/20 rounded-2xl p-5"
                      whileHover={{ borderColor: "hsl(8 83% 51% / 0.3)" }}>

                        <p className="text-sm font-bold text-primary mb-2 flex items-center gap-2">
                          <Zap className="w-4 h-4" />
                          Ideal for:
                        </p>
                        <p className="text-sm text-muted-foreground">{service.idealFor}</p>
                      </motion.div>
                    </div>

                    <Link to="/contact">
                      <Button className="btn-shimmer h-12 px-6">
                        Get Started
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  </div>

                  {/* Includes */}
                  <div className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className="relative rounded-3xl p-[1px]">
                      <GlowingEffect
                      spread={50}
                      glow={true}
                      disabled={false}
                      proximity={100}
                      inactiveZone={0.5}
                      borderWidth={2} />


                      <div className="relative bg-card/50 backdrop-blur-xl rounded-3xl p-8 border border-primary/10">
                        <h3 className="font-display font-bold text-lg mb-6 flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                            <Check className="w-4 h-4 text-white" />
                          </div>
                          What's Included
                        </h3>
                        <ul className="space-y-4">
                          {service.includes.map((item) =>
                        <motion.li
                          key={item}
                          className="flex items-start gap-3"
                          whileHover={{ x: 5 }}>

                              <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                              <span className="text-muted-foreground">{item}</span>
                            </motion.li>
                        )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </section>

        {/* All Plans Include */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div
              className="text-center max-w-2xl mx-auto mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}>

              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6"
                whileHover={{ scale: 1.05 }}>

                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm uppercase tracking-wider text-primary font-semibold">
                  Essentials
                </span>
              </motion.div>

              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Every Client Gets  
              </h2>
              <p className="text-muted-foreground text-lg">
                Zero lock-ins. Growth decides continuation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
              {allPlansInclude.map((item, index) =>
              <motion.div
                key={item}
                className="relative bg-card/50 backdrop-blur-xl border border-primary/10 rounded-2xl p-5 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{
                  y: -5,
                  borderColor: "hsl(8 83% 51% / 0.3)",
                  boxShadow: "0 20px 40px -20px hsl(8 83% 51% / 0.2)"
                }}>

                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-3">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="font-medium text-sm text-foreground">{item}</p>
                </motion.div>
              )}
            </div>
          </div>
        </section>

        {/* Tools Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div
              className="text-center max-w-2xl mx-auto mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}>

              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6"
                whileHover={{ scale: 1.05 }}>

                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm uppercase tracking-wider text-primary font-semibold">
                  Our Stack
                </span>
              </motion.div>

              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Tools We Use
              </h2>
              <p className="text-muted-foreground text-lg">
                Industry-standard platforms. No proprietary black boxes.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-5 max-w-3xl mx-auto">
              {tools.map((tool, index) =>
              <motion.div
                key={tool.name}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}>

                  <motion.div
                  className="relative bg-card/50 backdrop-blur-xl border border-primary/10 rounded-2xl p-5 text-center h-full"
                  whileHover={{
                    y: -5,
                    borderColor: "hsl(8 83% 51% / 0.3)",
                    boxShadow: "0 20px 40px -20px hsl(8 83% 51% / 0.2)"
                  }}>

                    <tool.icon className="w-7 h-7 text-primary mx-auto mb-3" />
                    <p className="font-semibold mb-1">{tool.name}</p>
                    <p className="text-xs text-primary">{tool.category}</p>
                  </motion.div>
                </motion.div>
              )}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div
              className="relative rounded-3xl p-[1px] max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}>

              <div className="relative bg-card/50 backdrop-blur-xl rounded-3xl p-12 border border-primary/10 text-center overflow-hidden">
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />

                <div className="relative z-10">
                  <motion.h2 
                    className="font-display text-3xl md:text-4xl font-bold mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                  >
                    Not Sure Which Service You Need?
                  </motion.h2>
                  <motion.p 
                    className="text-muted-foreground text-lg mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    Start with a free audit. We'll analyze your current setup and
                    recommend the right approach for your goals.
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Link to="/contact">
                      <Button className="btn-shimmer h-14 px-8 text-base">
                        Get a Free Audit
                        <ArrowRight className="w-5 h-5" />
                      </Button>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>);

}