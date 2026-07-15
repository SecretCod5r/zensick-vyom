import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GridBackground, GlowOrb } from "@/components/ui/BackgroundEffects";
import { ArrowRight, Calendar, Clock, User, TrendingUp, BarChart3, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogPosts = [
{
  id: 1,
  slug: "ai-powered-growth-strategies",
  title: "AI-Powered Growth: How Automation is Revolutionizing Revenue Optimization",
  excerpt: "Discover how AI-driven strategies are transforming the way businesses approach growth marketing. From predictive analytics to automated bidding, learn the tools reshaping the industry.",
  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
  category: "AI & Automation",
  author: "ZENSICK Team",
  date: "Jan 25, 2026",
  readTime: "8 min read",
  icon: Zap
},
{
  id: 2,
  slug: "smart-analytics-real-time-insights",
  title: "Smart Analytics: Unlocking Real-Time Performance Insights for Better Decisions",
  excerpt: "Real-time analytics aren't just a luxury—they're a necessity. Learn how to set up dashboards that provide actionable insights and help you make data-driven decisions instantly.",
  image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
  category: "Analytics",
  author: "ZENSICK Team",
  date: "Jan 20, 2026",
  readTime: "6 min read",
  icon: BarChart3
},
{
  id: 3,
  slug: "conversion-engine-customer-acquisition",
  title: "Building a Conversion Engine: 10x Your Customer Acquisition",
  excerpt: "Customer acquisition costs are rising, but the right conversion engine can multiply your results. Here's our proven framework for building high-converting funnels.",
  image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=500&fit=crop",
  category: "Conversion",
  author: "ZENSICK Team",
  date: "Jan 15, 2026",
  readTime: "10 min read",
  icon: TrendingUp
}];


function BlogCard({ post, index }: {post: typeof blogPosts[0];index: number;}) {
  const Icon = post.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
      whileHover={{ y: -8 }}
      className="group">
      
      <Link to={`/blog/${post.slug}`} className="block">
        <div className="relative rounded-2xl overflow-hidden border border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
          {/* Image */}
          <div className="relative h-56 overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
            
            {/* Category Badge */}
            <div className="absolute top-4 left-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium">
                <Icon className="w-3 h-3" />
                {post.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="font-display text-xl font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
              {post.title}
            </h3>
            <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
              {post.excerpt}
            </p>

            {/* Meta */}
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <User className="w-3 h-3" />
                {post.author}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {post.readTime}
              </span>
            </div>

            {/* Read More */}
            <div className="mt-4 pt-4 border-t border-border/50">
              <span className="inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                Read Article
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>);

}

import { SEO } from "@/components/seo/SEO";

export default function Blog() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Growth Blog | Digital Strategy & Analytics Insights" 
        description="Read the latest insights on digital growth strategy, analytics, performance marketing, and data-driven decision making from ZENSICK."
        canonicalUrl="https://www.zensick.com/blog"
      />
      <Navbar />
      
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <GridBackground className="opacity-10" />
          <GlowOrb className="top-0 right-1/4" color="primary" size="lg" />
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
              <motion.div
                className="pill-gradient mb-6 inline-flex"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}>
                
                <span className="text-sm font-medium">Insights & Strategies</span>
              </motion.div>
              
              <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
                The ZENSICK <span className="text-gradient-vibrant">Blog</span>
              </h1>
              
              <p className="text-muted-foreground text-lg md:text-xl">
                Deep dives into digital strategy, analytics, and growth. 
                Learn from our experiences scaling brands through data-driven decisions.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) =>
              <BlogCard key={post.id} post={post} index={index} />
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-20">
          <div className="container mx-auto px-4 md:px-6">
            <AnimatedSection>
              <motion.div 
                className="relative rounded-3xl overflow-hidden border border-primary/20 bg-gradient-to-br from-primary/10 via-background to-accent/10 p-12 text-center"
                whileHover={{ borderColor: "hsl(8 83% 51% / 0.4)" }}
              >
                <GlowOrb className="top-0 left-1/4" color="primary" size="md" />
                
                <motion.h2 
                  className="font-display text-3xl md:text-4xl font-bold mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  Want These Strategies Applied to <span className="text-gradient">Your Brand?</span>
                </motion.h2>
                <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                  Stop reading about growth, start experiencing it. Book a free strategy call and let's discuss how we can scale your business.
                </p>
                <Link to="/contact">
                  <Button variant="pill" size="xl" className="btn-shimmer">
                    Book a Free Strategy Call
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
              </motion.div>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <Footer />
    </div>);

}