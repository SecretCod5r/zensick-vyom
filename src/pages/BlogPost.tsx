import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GridBackground, GlowOrb } from "@/components/ui/BackgroundEffects";
import { ArrowLeft, Calendar, Clock, User, Share2, ArrowRight, TrendingUp, BarChart3, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogPostsContent = {
  "ai-powered-growth-strategies": {
    title: "AI-Powered Growth: How Automation is Revolutionizing Revenue Optimization",
    excerpt: "Discover how AI-driven strategies are transforming the way businesses approach growth marketing.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop",
    category: "AI & Automation",
    author: "ZENSICK Team",
    date: "Jan 25, 2026",
    readTime: "8 min read",
    icon: Zap,
    content: `
## The AI Revolution in Marketing

The marketing landscape is undergoing a seismic shift. AI-powered tools are no longer optional—they're essential for staying competitive. At ZENSICK, we've seen firsthand how automation can transform underperforming campaigns into revenue-generating machines.

### Why AI Matters for Growth

Traditional marketing relies heavily on gut instinct and historical data. While experience matters, AI brings something new to the table: **predictive intelligence**. Machine learning algorithms can analyze patterns humans simply can't see, identifying opportunities for optimization before problems arise.

#### Key Benefits:
- **Automated Bidding**: Platforms like Google and Meta now offer smart bidding that adjusts in real-time based on conversion likelihood
- **Predictive Analytics**: Forecast customer behavior and lifetime value with remarkable accuracy
- **Creative Optimization**: AI can test thousands of creative variations to find winning combinations
- **Audience Discovery**: Machine learning identifies high-value customer segments you never knew existed

### Real-World Implementation

When we implemented AI-powered bidding for an e-commerce client, we saw a **47% reduction in CAC** within the first month. The algorithm identified that late-night shoppers on mobile had 3x higher conversion rates—something our manual analysis had missed.

### The Human + AI Partnership

AI doesn't replace marketers—it empowers them. The best results come from combining machine efficiency with human creativity and strategic thinking. We use AI to handle the heavy lifting of data analysis and optimization, freeing our team to focus on strategy and creative development.

### Getting Started

Ready to implement AI in your marketing stack? Here's our recommended approach:

1. **Audit your current data** - AI is only as good as the data it learns from
2. **Start with one channel** - Don't try to automate everything at once
3. **Set clear KPIs** - Define what success looks like before you begin
4. **Monitor and iterate** - AI needs guidance and regular optimization

The future of marketing is intelligent automation. The question isn't whether to adopt AI—it's how quickly you can implement it effectively.
    `,
  },
  "smart-analytics-real-time-insights": {
    title: "Smart Analytics: Unlocking Real-Time Performance Insights for Better Decisions",
    excerpt: "Learn how to set up dashboards that provide actionable insights and help you make data-driven decisions instantly.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop",
    category: "Analytics",
    author: "ZENSICK Team",
    date: "Jan 20, 2026",
    readTime: "6 min read",
    icon: BarChart3,
    content: `
## The Power of Real-Time Data

In the fast-paced world of digital marketing, yesterday's data is ancient history. Real-time analytics give you the power to react instantly to market changes, optimize campaigns on the fly, and spot opportunities before your competitors.

### Building Your Analytics Foundation

Before you can leverage real-time insights, you need a solid foundation. Here's what we recommend:

#### Essential Tracking Setup:
- **Google Analytics 4**: The new standard for web analytics
- **Conversion API**: Server-side tracking for accuracy
- **UTM Parameters**: Consistent campaign tagging
- **Custom Events**: Track what matters to your business

### Dashboard Design Principles

A great dashboard tells a story. It should answer your most important questions at a glance while allowing you to drill deeper when needed.

#### Key Metrics to Monitor:
1. **Revenue & ROAS** - The ultimate measure of success
2. **CAC by Channel** - Where are your efficient acquisitions coming from?
3. **Conversion Rate Trends** - Are you improving over time?
4. **Attribution Paths** - How do customers find you?

### Looker Studio Best Practices

We build custom Looker Studio dashboards for all our clients. Here are the principles we follow:

- **Lead with insights, not data** - Every chart should answer a question
- **Use consistent formatting** - Make comparison easy
- **Include context** - Show benchmarks and historical trends
- **Enable filtering** - Let users explore the data themselves

### From Data to Action

The real value of analytics isn't in the numbers—it's in the decisions they inform. Every dashboard we build includes a clear "so what" for each metric, helping teams understand not just what's happening, but what to do about it.

### Getting Started

Start simple. Track the metrics that directly impact your revenue, then expand from there. Remember: a dashboard you actually use is infinitely more valuable than a comprehensive one gathering dust.
    `,
  },
  "conversion-engine-customer-acquisition": {
    title: "Building a Conversion Engine: 10x Your Customer Acquisition",
    excerpt: "Customer acquisition costs are rising, but the right conversion engine can multiply your results.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&h=600&fit=crop",
    category: "Conversion",
    author: "ZENSICK Team",
    date: "Jan 15, 2026",
    readTime: "10 min read",
    icon: TrendingUp,
    content: `
## The Conversion Engine Framework

At ZENSICK, we don't just run ads—we build conversion engines. These are systematic, repeatable processes that turn traffic into customers with predictable efficiency.

### The Three Pillars of Conversion

Every successful conversion engine is built on three pillars:

#### 1. Traffic Quality
Not all traffic is created equal. We focus on:
- **Intent-based targeting**: Reaching people actively searching for solutions
- **Lookalike audiences**: Finding more people like your best customers
- **Retargeting**: Re-engaging warm prospects effectively

#### 2. Landing Page Optimization
Your landing page is where the magic happens. Key elements include:
- **Clear value proposition** above the fold
- **Social proof** that builds trust
- **Friction-free forms** that don't ask for too much
- **Mobile optimization** for the majority of traffic

#### 3. Offer Strategy
The right offer can dramatically improve conversion rates:
- **Lead magnets** that provide genuine value
- **Risk reversal** through guarantees
- **Urgency and scarcity** used ethically
- **Clear CTAs** that tell users exactly what to do

### The Testing Framework

We run an average of 12 tests per month for our clients. Here's our approach:

1. **Hypothesis Generation** - What do we think will improve results?
2. **Test Design** - Create variants with meaningful differences
3. **Statistical Significance** - Wait for enough data before drawing conclusions
4. **Documentation** - Record learnings for future optimization

### Case Study: 3.2x ROAS Improvement

A recent e-commerce client came to us with a 1.8x ROAS—barely profitable. Within 90 days, we achieved a 3.2x ROAS through:

- Restructured campaigns focusing on high-intent keywords
- New landing pages with stronger social proof
- Improved product imagery and descriptions
- Retargeting sequences for abandoned carts

### Building Your Own Conversion Engine

The key is systematic iteration. Test, learn, optimize, repeat. Small improvements compound over time into massive results. Start with your biggest leak—whether that's traffic quality, landing page conversion, or offer appeal—and work your way through.

Remember: a 10% improvement at each stage of your funnel can result in a 33% improvement in overall conversion. That's the power of a true conversion engine.
    `,
  },
};

function BlogContent({ content }: { content: string }) {
  const lines = content.trim().split('\n');
  const elements: React.ReactNode[] = [];
  let currentList: string[] = [];
  let listType: 'ul' | 'ol' | null = null;
  let key = 0;

  const flushList = () => {
    if (currentList.length > 0 && listType) {
      const ListTag = listType;
      elements.push(
        <ListTag key={key++} className={listType === 'ul' ? 'list-disc pl-6 my-4 space-y-2' : 'list-decimal pl-6 my-4 space-y-2'}>
          {currentList.map((item, i) => (
            <li key={i} className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>') }} />
          ))}
        </ListTag>
      );
      currentList = [];
      listType = null;
    }
  };

  const parseInline = (text: string) => {
    return text.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>');
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    if (!line) {
      flushList();
      continue;
    }

    // Headers
    if (line.startsWith('#### ')) {
      flushList();
      elements.push(<h4 key={key++} className="text-lg font-bold text-foreground mt-8 mb-3" dangerouslySetInnerHTML={{ __html: parseInline(line.slice(5)) }} />);
    } else if (line.startsWith('### ')) {
      flushList();
      elements.push(<h3 key={key++} className="text-xl font-bold text-foreground mt-10 mb-4" dangerouslySetInnerHTML={{ __html: parseInline(line.slice(4)) }} />);
    } else if (line.startsWith('## ')) {
      flushList();
      elements.push(<h2 key={key++} className="text-2xl font-bold text-foreground mt-12 mb-6" dangerouslySetInnerHTML={{ __html: parseInline(line.slice(3)) }} />);
    }
    // Unordered list
    else if (line.startsWith('- ')) {
      if (listType !== 'ul') {
        flushList();
        listType = 'ul';
      }
      currentList.push(line.slice(2));
    }
    // Ordered list
    else if (/^\d+\.\s/.test(line)) {
      if (listType !== 'ol') {
        flushList();
        listType = 'ol';
      }
      currentList.push(line.replace(/^\d+\.\s/, ''));
    }
    // Paragraph
    else {
      flushList();
      elements.push(<p key={key++} className="text-muted-foreground leading-relaxed my-4" dangerouslySetInnerHTML={{ __html: parseInline(line) }} />);
    }
  }

  flushList();
  return <div className="space-y-2">{elements}</div>;
}

import { SEO } from "@/components/seo/SEO";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPostsContent[slug as keyof typeof blogPostsContent] : null;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const Icon = post.icon;

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title={`${post.title}`}
        description={post.excerpt}
        canonicalUrl={`https://zensick.com/blog/${slug}`}
        ogType="article"
      />
      <Navbar />
      
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <GridBackground className="opacity-10" />
          <GlowOrb className="top-0 right-1/4" color="primary" size="lg" />
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            {/* Back Link */}
            <AnimatedSection>
              <Link 
                to="/blog" 
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>
            </AnimatedSection>

            {/* Header */}
            <AnimatedSection className="max-w-4xl mx-auto">
              <div className="mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  <Icon className="w-4 h-4" />
                  {post.category}
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-5xl font-bold mb-6 leading-tight">
                {post.title}
              </h1>

              <p className="text-muted-foreground text-lg md:text-xl mb-8">
                {post.excerpt}
              </p>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
                <span className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {post.author}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
                <button className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Share2 className="w-4 h-4" />
                  Share
                </button>
              </div>
            </AnimatedSection>

            {/* Featured Image */}
            <AnimatedSection delay={0.1} className="max-w-5xl mx-auto mb-12">
              <div className="relative rounded-2xl overflow-hidden border border-border/50">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Content */}
        <section className="relative">
          <div className="container mx-auto px-4 md:px-6">
            <AnimatedSection delay={0.2} className="max-w-3xl mx-auto">
              <article className="prose prose-invert prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-h4:text-lg prose-p:text-muted-foreground prose-p:leading-relaxed prose-li:text-muted-foreground prose-strong:text-foreground prose-a:text-primary prose-a:no-underline hover:prose-a:underline">
                <BlogContent content={post.content} />
              </article>
            </AnimatedSection>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-20">
          <div className="container mx-auto px-4 md:px-6">
            <AnimatedSection className="max-w-4xl mx-auto">
              <div className="relative rounded-3xl overflow-hidden border border-primary/20 bg-gradient-to-br from-primary/10 via-background to-accent/10 p-12 text-center">
                <GlowOrb className="top-0 left-1/4" color="primary" size="md" />
                
                <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                  Ready to Implement These <span className="text-gradient">Strategies?</span>
                </h2>
                <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                  Let's discuss how we can apply these principles to grow your business. Book a free strategy call with our team.
                </p>
                <Link to="/contact">
                  <Button variant="pill" size="xl" className="btn-shimmer">
                    Book a Free Strategy Call
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
