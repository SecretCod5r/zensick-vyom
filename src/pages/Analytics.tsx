import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, Target, TrendingUp, Eye, Database, Zap } from "lucide-react";
import { BeamsBackground } from "@/components/ui/beams-background";
import { WavePath } from "@/components/ui/wave-path";
import { motion } from "framer-motion";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const philosophy = [
  {
    icon: Database,
    title: "Measurement Before Marketing",
    description: "If you can't measure it, don't spend money on it. We set up proper tracking before we touch a single ad dollar."
  },
  {
    icon: Eye,
    title: "Radical Transparency",
    description: "You get full access to every dashboard, every data point. No hiding behind PDFs or 'proprietary methodologies.'"
  },
  {
    icon: Target,
    title: "Metrics That Matter",
    description: "ROAS. CAC. LTV. Contribution margin. We track what impacts your bottom line, not vanity metrics."
  }
];

const kpis = [
  { name: "ROAS", description: "Return on Ad Spend", why: "The ultimate measure of ad efficiency" },
  { name: "CAC", description: "Customer Acquisition Cost", why: "What it actually costs to get a customer" },
  { name: "LTV", description: "Lifetime Value", why: "How much a customer is worth over time" },
  { name: "Contribution Margin", description: "Revenue minus variable costs", why: "Real profitability per order" },
  { name: "MER", description: "Marketing Efficiency Ratio", why: "Total revenue / total marketing spend" },
  { name: "Blended CPA", description: "Total cost per acquisition", why: "True cost including all channels" }
];

function DashboardPie({ title, data }: { title: string; data: { name: string; value: number; color: string }[] }) {
  return (
    <motion.div 
      className="bg-muted/80 border border-border/50 rounded-lg p-3"
      whileHover={{ scale: 1.05, borderColor: "hsl(8 83% 51% / 0.3)" }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <p className="text-[10px] text-muted-foreground mb-1 text-center">{title}</p>
      <ResponsiveContainer width="100%" height={80}>
        <PieChart>
          <Pie data={data} dataKey="value" cx="50%" cy="50%" innerRadius={20} outerRadius={35} strokeWidth={0}>
            {data.map((entry, i) => (
              <Cell key={i} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            content={({ active, payload }) =>
              active && payload?.[0] ? (
                <div className="bg-popover border border-border rounded px-2 py-1 text-[10px] shadow-md">
                  {payload[0].name}: {payload[0].value}%
                </div>
              ) : null
            }
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="flex flex-wrap justify-center gap-x-3 gap-y-0.5 mt-1">
        {data.map((d) => (
          <div key={d.name} className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: d.color }} />
            <span className="text-[9px] text-muted-foreground">{d.name}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function Analytics() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24">
        {/* Hero with Beams Background */}
        <BeamsBackground className="min-h-[70vh] flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 text-center max-w-3xl mx-auto px-4"
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                style={{ willChange: "transform" }}
              >
                <BarChart3 className="w-4 h-4 text-primary" />
              </motion.div>
              <span className="text-sm font-medium text-muted-foreground">
                Our Unfair Advantage
              </span>
            </motion.div>
            <motion.h1 
              className="font-display text-4xl md:text-6xl font-bold mb-6 text-foreground"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Analytics Is <span className="text-gradient">Everything</span>
            </motion.h1>
            <motion.p 
              className="text-lg text-muted-foreground mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Most agencies treat tracking as an afterthought. We treat it as the foundation. 
              Without proper data, you're just guessing. We don't guess.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Link to="/contact">
                <LiquidButton size="xl">
                  Get a Free Audit
                  <ArrowRight className="w-5 h-5" />
                </LiquidButton>
              </Link>
            </motion.div>
          </motion.div>
        </BeamsBackground>

        {/* Philosophy */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {philosophy.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
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
                    <div className="relative glass-card p-8">
                      <motion.div 
                        className="w-14 h-14 rounded-2xl bg-[#111114] border border-primary/30 flex items-center justify-center mb-6"
                        whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <item.icon className="w-7 h-7 text-primary" />
                      </motion.div>
                      <h3 className="font-display text-xl font-bold mb-3">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Wave Divider */}
        <motion.div 
          className="flex justify-center py-8"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <WavePath className="w-[70%]" />
        </motion.div>

        {/* Attribution Approach */}
        <section className="py-20 bg-section-gradient">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <motion.span 
                  className="inline-block text-sm uppercase tracking-wider text-primary font-semibold mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  Attribution
                </motion.span>
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                  No Perfect Model. Just Practical Decisions.
                </h2>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  Let's be real: iOS broke a lot of attribution. Platform numbers are inflated. Last-click is incomplete. Multi-touch is complex.
                </p>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  Our approach: Use multiple data points. Trust incrementality tests over platform 
                  reporting. Make decisions based on blended metrics and directional trends, not 
                  false precision.
                </p>
                <div className="space-y-4">
                  {[
                    { title: "Platform + GA4 + Blended", desc: "Triangulate data sources for real picture" },
                    { title: "Incrementality Testing", desc: "Geo holdouts and lift studies when budget allows" },
                    { title: "MER as North Star", desc: "Total revenue / total spend doesn't lie" },
                  ].map((item, i) => (
                    <motion.div 
                      key={item.title}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Zap className="w-5 h-5 text-primary mt-1" />
                      </motion.div>
                      <div>
                        <p className="font-medium">{item.title}</p>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Mock Dashboard */}
              <motion.div 
                className="glass-card p-6 relative overflow-hidden"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="absolute top-3 left-6 flex items-center gap-2">
                  <motion.div 
                    className="w-3 h-3 rounded-full bg-destructive/50"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                    style={{ willChange: "transform" }}
                  />
                  <motion.div 
                    className="w-3 h-3 rounded-full bg-accent/50"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                    style={{ willChange: "transform" }}
                  />
                  <motion.div 
                    className="w-3 h-3 rounded-full bg-primary/50"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                    style={{ willChange: "transform" }}
                  />
                </div>
                <div className="pt-8 space-y-5">
                  {/* Dashboard Header */}
                  <motion.div 
                    className="flex items-center justify-between"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    <div>
                      <p className="text-xs text-muted-foreground">Sample Brand</p>
                      <p className="font-display font-bold text-lg">Analytics Dashboard</p>
                    </div>
                    <motion.div 
                      className="px-3 py-1.5 bg-muted/80 border border-border/50 rounded-md text-xs text-muted-foreground"
                      whileHover={{ borderColor: "hsl(8 83% 51% / 0.3)" }}
                    >
                      Last 30 days
                    </motion.div>
                  </motion.div>

                  {/* KPI Row */}
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: "Gross Sales", value: "₹12.4L", tooltip: "Total revenue before deductions" },
                      { label: "Orders", value: "1,847", tooltip: "Total completed orders in the period" },
                      { label: "Avg. Order Value", value: "₹672", tooltip: "Average revenue per order" },
                      { label: "Conv. Rate", value: "3.2%", tooltip: "Percentage of visitors who purchased" },
                      { label: "Ad Spend", value: "₹3.8L", tooltip: "Total amount spent on advertising" },
                      { label: "ROAS", value: "3.26x", tooltip: "Return on Ad Spend — revenue per rupee spent" },
                    ].map((kpi, i) => (
                      <HoverCard key={kpi.label} openDelay={100} closeDelay={50}>
                        <HoverCardTrigger asChild>
                          <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 + i * 0.05 }}
                            whileHover={{ scale: 1.08, boxShadow: "0 0 20px hsl(8 83% 51% / 0.3)" }}
                            className="p-3 bg-muted/80 border border-border/50 rounded-lg cursor-default group"
                          >
                            <p className="text-[10px] text-muted-foreground mb-0.5 group-hover:text-foreground/70 transition-colors">{kpi.label}</p>
                            <p className="text-lg font-display font-bold text-foreground group-hover:text-primary transition-colors">{kpi.value}</p>
                          </motion.div>
                        </HoverCardTrigger>
                        <HoverCardContent side="top" className="w-auto max-w-[200px] px-3 py-2 text-xs bg-card border border-primary/20 shadow-lg shadow-primary/10">
                          <p className="text-muted-foreground">{kpi.tooltip}</p>
                        </HoverCardContent>
                      </HoverCard>
                    ))}
                  </div>

                  {/* Mini Charts Row */}
                  <div className="grid grid-cols-3 gap-3">
                    <DashboardPie
                      title="Device Split"
                      data={[
                        { name: "Mobile", value: 69, color: "hsl(8 83% 51%)" },
                        { name: "Desktop", value: 31, color: "hsl(220 70% 55%)" },
                      ]}
                    />
                    <DashboardPie
                      title="Channel Group"
                      data={[
                        { name: "Direct", value: 42, color: "hsl(8 83% 51%)" },
                        { name: "Paid Social", value: 35, color: "hsl(220 70% 55%)" },
                        { name: "Organic", value: 23, color: "hsl(150 60% 45%)" },
                      ]}
                    />
                    <DashboardPie
                      title="New vs Returning"
                      data={[
                        { name: "New", value: 62, color: "hsl(8 83% 51%)" },
                        { name: "Returning", value: 38, color: "hsl(45 90% 55%)" },
                      ]}
                    />
                  </div>

                  {/* Bottom Stats */}
                  <div className="grid grid-cols-2 gap-3">
                    <motion.div 
                      className="bg-muted/80 border border-border/50 rounded-lg p-3"
                      whileHover={{ borderColor: "hsl(8 83% 51% / 0.3)", scale: 1.03 }}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <motion.div animate={{ y: [0, -3, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                          <TrendingUp className="w-3.5 h-3.5 text-primary" />
                        </motion.div>
                        <span className="text-[10px] text-muted-foreground">Revenue Trend</span>
                      </div>
                      <span className="text-sm font-bold text-foreground">↑ 23% <span className="text-[10px] text-muted-foreground font-normal">vs last month</span></span>
                    </motion.div>
                    <motion.div 
                      className="bg-muted/80 border border-border/50 rounded-lg p-3"
                      whileHover={{ borderColor: "hsl(8 83% 51% / 0.3)", scale: 1.03 }}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <Target className="w-3.5 h-3.5 text-primary" />
                        <span className="text-[10px] text-muted-foreground">Blended CPA</span>
                      </div>
                      <span className="text-sm font-bold">₹206 <span className="text-[10px] text-muted-foreground font-normal">target ₹250</span></span>
                    </motion.div>
                  </div>
                </div>
                <p className="text-center text-[10px] text-muted-foreground mt-4 opacity-60">
                  Sample dashboard · Powered by Looker Studio + GA4
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* KPIs */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div 
              className="text-center max-w-2xl mx-auto mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl font-bold mb-4">
                KPIs We Actually Care About
              </h2>
              <p className="text-muted-foreground">
                Not impressions. Not reach. Real metrics that tie to revenue.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {kpis.map((kpi, index) => (
                <motion.div
                  key={kpi.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ y: -6, boxShadow: "0 20px 40px -20px hsl(8 83% 51% / 0.2)" }}
                  className="glass-card p-6 cursor-default"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <motion.div 
                      className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center"
                      whileHover={{ scale: 1.15, backgroundColor: "hsl(8 83% 51% / 0.2)" }}
                    >
                      <span className="font-display font-bold text-primary text-sm">
                        {kpi.name.substring(0, 2)}
                      </span>
                    </motion.div>
                    <div>
                      <p className="font-display font-bold">{kpi.name}</p>
                      <p className="text-xs text-muted-foreground">{kpi.description}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{kpi.why}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-section-gradient">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div 
              className="glass-card p-12 text-center max-w-3xl mx-auto relative overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Animated background glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
                style={{ willChange: "opacity" }}
              />
              <div className="relative z-10">
                <motion.h2 
                  className="font-display text-3xl font-bold mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  Want to See Your Real Numbers?
                </motion.h2>
                <motion.p 
                  className="text-muted-foreground mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  Get a free tracking audit. We'll show you what's broken, 
                  what's missing, and what you're not seeing.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <Link to="/contact">
                    <LiquidButton size="xl">
                      Get a Free Audit
                      <ArrowRight className="w-5 h-5" />
                    </LiquidButton>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
