import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { Calendar, MessageCircle, Mail, ArrowRight, Clock, CheckCircle, Sparkles, Zap } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import ProceduralGroundBackground from "@/components/ui/procedural-ground-background";

const expectations = [
"15-minute discovery call to understand your business",
"Quick audit of your current marketing setup",
"Honest feedback on whether we're the right fit",
"No pressure, no hard sell"];


export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const company = formData.get("company") as string || "N/A";
    const budget = formData.get("budget") as string || "N/A";
    const interest = formData.get("interest") as string;
    const message = formData.get("message") as string;

    const whatsappNumber = "918130592339";
    
    const rawText = `*New Lead from Website*\n\n*Name:* ${name}\n*Email:* ${email}\n*Company:* ${company}\n*Budget:* ${budget}\n*Interest:* ${interest}\n*Message:* ${message}`;
    const encodedText = encodeURIComponent(rawText);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

    const newWindow = window.open(whatsappUrl, "_blank");
    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
      window.location.href = whatsappUrl;
    }

    toast({
      title: "Redirecting to WhatsApp...",
      description: "Opening chat to send your details."
    });
    
    (e.target as HTMLFormElement).reset();
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-24 relative overflow-hidden min-h-[50vh] flex items-center">
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
                  Let's Talk
                </span>
              </motion.div>
              
              <motion.h1
                className="font-display text-4xl md:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}>

                Ready to{" "}
                <span className="text-gradient-primary">Scale Smart?</span>
              </motion.h1>
              
              <motion.p
                className="text-lg text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}>

                Whether you want a free audit, have questions, or are ready to work together, we're here. No gatekeeping. No forms that go nowhere.
              
              </motion.p>
            </div>
          </div>
        </section>

        {/* Contact Options */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/3 to-background" />
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* Quick Actions */}
                <motion.div 
                  className="space-y-6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
                >
                {/* Book a Call */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="relative group">

                  <div className="relative rounded-2xl p-[1px]">
                    <GlowingEffect
                      spread={40}
                      glow={true}
                      disabled={false}
                      proximity={80}
                      inactiveZone={0.6}
                      borderWidth={1} />

                    <div className="relative bg-card/50 backdrop-blur-xl rounded-2xl p-6 border border-primary/10">
                      <motion.div
                        className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 shadow-lg shadow-primary/20"
                        whileHover={{ rotate: [0, -10, 10, 0] }}>

                        <Calendar className="w-7 h-7 text-white" />
                      </motion.div>
                      <h3 className="font-display text-xl font-bold mb-2">Book a Call</h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        Schedule a 15-minute discovery call. We'll talk about your goals and see if there's a fit.
                      </p>
                      <a href="https://calendly.com/connect-zensick/discovery" target="_blank" rel="noopener noreferrer">
                        <Button className="btn-shimmer w-full">
                          Schedule Now
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </a>
                    </div>
                  </div>
                </motion.div>

                {/* WhatsApp */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="relative group">

                  <div className="relative bg-card/50 backdrop-blur-xl rounded-2xl p-6 border border-green-500/20 hover:border-green-500/40 transition-all duration-300">
                    <div className="w-14 h-14 rounded-2xl bg-green-500/20 flex items-center justify-center mb-4">
                      <MessageCircle className="w-7 h-7 text-green-500" />
                    </div>
                    <h3 className="font-display text-xl font-bold mb-2">WhatsApp</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Quick question? Prefer chat? Hit us up on WhatsApp for a faster response.
                    </p>
                    <a
                      href="https://wa.link/phidzl"
                      target="_blank"
                      rel="noopener noreferrer">

                      <Button variant="outline" className="w-full border-green-500/30 hover:border-green-500/60 hover:bg-green-500/10">
                        Message Us
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </a>
                  </div>
                </motion.div>

                {/* Email */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="relative group">

                  <div className="relative bg-card/50 backdrop-blur-xl rounded-2xl p-6 border border-primary/10 hover:border-primary/30 transition-all duration-300">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                      <Mail className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-display text-xl font-bold mb-2">Email</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Prefer email? We respond within 24 hours on business days.
                    </p>
                    <a href="mailto:connect@zensick.com">
                      <Button variant="outline" className="w-full border-primary/30 hover:border-primary/60 hover:bg-primary/5">
                        connect@zensick.com
                      </Button>
                    </a>
                  </div>
                </motion.div>
                </motion.div>

              {/* Contact Form */}
              <motion.div
                className="lg:col-span-2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}>

                <div className="relative rounded-3xl p-[1px]">
                  <GlowingEffect
                    spread={60}
                    glow={true}
                    disabled={false}
                    proximity={100}
                    inactiveZone={0.4}
                    borderWidth={2} />

                  
                  <div className="relative bg-card/50 backdrop-blur-xl rounded-3xl p-8 border border-primary/10">
                    <div className="flex items-center gap-3 mb-2">
                      <Zap className="w-5 h-5 text-primary" />
                      <h2 className="font-display text-2xl font-bold">
                        Send Us a Message
                      </h2>
                    </div>
                    <p className="text-muted-foreground mb-8">
                      Tell us about your business and what you're looking for. We'll get back to you quickly.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium mb-2">
                            Name
                          </label>
                          <Input
                            id="name"
                            name="name"
                            placeholder="Your name"
                            required
                            className="bg-background/50 border-primary/10 focus:border-primary/50 h-12" />

                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium mb-2">
                            Email
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="you@company.com"
                            required
                            className="bg-background/50 border-primary/10 focus:border-primary/50 h-12" />

                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium mb-2">
                            Company
                          </label>
                          <Input
                            id="company"
                            name="company"
                            placeholder="Your company"
                            className="bg-background/50 border-primary/10 focus:border-primary/50 h-12" />

                        </div>
                        <div>
                          <label htmlFor="budget" className="block text-sm font-medium mb-2">
                            Monthly Ad Budget
                          </label>
                          <Input
                            id="budget"
                            name="budget"
                            placeholder="e.g., ₹5-10L/month"
                            className="bg-background/50 border-primary/10 focus:border-primary/50 h-12" />

                        </div>
                      </div>

                      <div>
                        <label htmlFor="interest" className="block text-sm font-medium mb-2">
                          What are you interested in?
                        </label>
                        <select
                          id="interest"
                          name="interest"
                          className="w-full h-12 px-4 rounded-xl bg-background/50 border border-primary/10 text-foreground focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                          required>

                          <option value="">Select an option</option>
                          <option value="audit">Free Audit</option>
                          <option value="performance">Performance Marketing</option>
                          <option value="analytics">Analytics & Reporting</option>
                          <option value="creative">Creative Strategy</option>
                          <option value="full">Full Service</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">
                          Tell us about your goals
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="What are you trying to achieve? What challenges are you facing?"
                          rows={4}
                          required
                          className="bg-background/50 border-primary/10 focus:border-primary/50 resize-none" />

                      </div>

                      <Button
                        type="submit"
                        className="btn-shimmer h-14 px-8 w-full md:w-auto text-base"
                        disabled={isSubmitting}>

                        {isSubmitting ? "Sending..." : "Send Message"}
                        <ArrowRight className="w-5 h-5" />
                      </Button>
                    </form>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What to Expect */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
          
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div
              className="max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}>

              <div className="relative rounded-3xl p-[1px]">
                <div className="relative bg-card/50 backdrop-blur-xl rounded-3xl p-10 border border-primary/10">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="font-display text-2xl font-bold">
                      What Happens Next?
                    </h2>
                  </div>
                  <ul className="space-y-5">
                    {expectations.map((item, index) =>
                    <motion.li
                      key={index}
                      className="flex items-start gap-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}>

                        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 mt-0.5 shadow-lg shadow-primary/20">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-muted-foreground text-lg">{item}</span>
                      </motion.li>
                    )}
                  </ul>
                  <p className="text-sm text-muted-foreground mt-8 pt-6 border-t border-border/50">
                    We typically respond within 24 hours on business days. If it's urgent, WhatsApp is fastest.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>);

}