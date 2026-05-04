import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ShuffleCards } from "@/components/ui/testimonial-cards";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import vyreLogo from "@/assets/vyre-logo.png";
import starrvaultLogo from "@/assets/starrvault-logo.png";
import tanishLogo from "@/assets/tanish-creation-logo.png";

const testimonials = [{
  id: 3,
  testimonial: "We've been in textiles for 60 years. ZENSICK built us a proper digital presence in weeks and we got an order worth 20 lakhs within only 2 weeks of running ads.",
  author: "Tanish Creation",
  role: "Textile & Fashion Brand",
  avatarUrl: tanishLogo
}, {
  id: 1,
  testimonial: "ZENSICK transformed our analytics approach. We went from guessing to knowing exactly what drives our revenue.",
  author: "Keshav Bhagat",
  role: "Founder & CEO @ VYRE",
  avatarUrl: vyreLogo
}, {
  id: 2,
  testimonial: "They didn't just run ads, they built the entire growth infrastructure our SaaS needed to scale confidently.",
  author: "Team STARRVAULT",
  role: "SaaS Productivity Platform",
  avatarUrl: starrvaultLogo
}];

export function TestimonialsSection() {
  return <section className="py-24 relative overflow-visible">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/2 to-background" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <motion.div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/8 border border-primary/20 mb-6" whileHover={{
          scale: 1.05
        }}>
            <Quote className="w-4 h-4 text-primary" />
            <span className="text-sm uppercase tracking-wider text-primary font-semibold">
              Client Success Stories
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            <span className="text-primary">Trusted</span> by Growth Leaders
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">See why D2C brands choose ZENSICK for their marketing and analytics needs.</p>
        </AnimatedSection>

        <div className="flex flex-col items-center justify-center gap-12">
          <ShuffleCards testimonials={testimonials} />

          <AnimatedSection direction="up" className="w-full max-w-md">
            <motion.div className="flex items-center justify-center gap-4 p-4 rounded-xl bg-card/50 backdrop-blur-xl border border-border/50" initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} whileHover={{
              scale: 1.02,
              borderColor: "hsl(var(--primary) / 0.3)"
            }}>
                  <div className="text-3xl font-display font-bold text-primary">
                    98%
                  </div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction Rate</div>
                </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>;
}
