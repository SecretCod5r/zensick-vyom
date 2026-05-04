import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const footerLinks = {
  company: [
    { name: "About", href: "/about" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "Performance Marketing", href: "/services" },
    { name: "Analytics & Reporting", href: "/analytics" },
    { name: "Creative Strategy", href: "/services" },
  ],
  resources: [
    { name: "Free Audit", href: "/contact" },
    { name: "Book a Call", href: "/contact" },
  ],
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export function Footer() {
  return (
    <footer className="relative border-t border-border/30 overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/3 via-background to-background" />

      <motion.div 
        className="container mx-auto px-4 md:px-6 py-16 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div className="lg:col-span-1" variants={itemVariants}>
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <motion.span 
                className="font-display font-bold text-2xl tracking-[0.25em] uppercase text-foreground group-hover:text-primary transition-colors"
                whileHover={{ letterSpacing: "0.3em" }}
                transition={{ duration: 0.3 }}
              >
                ZENSICK
              </motion.span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              We don't guess. We track, test, and scale.
            </p>
            {/* Red dot signature */}
            <div className="relative">
              <motion.div 
                className="w-1.5 h-1.5 rounded-full bg-primary opacity-50 mb-6" 
                aria-hidden="true"
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>
            <div className="flex items-center gap-4">
              <motion.a
                href="https://www.linkedin.com/company/zensick"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-card/50 backdrop-blur-xl border border-border/50 flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                aria-label="LinkedIn"
                whileHover={{ scale: 1.15, y: -3, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5 text-foreground" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </motion.a>
              <motion.a
                href="https://www.instagram.com/zensick.agency"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-card/50 backdrop-blur-xl border border-border/50 flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                aria-label="Instagram"
                whileHover={{ scale: 1.15, y: -3, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5 text-foreground" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </motion.a>
            </div>
          </motion.div>

          {/* Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-primary mb-6">
              Company
            </h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link, i) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.05 }}
                >
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm flex items-center gap-1 group"
                  >
                    <motion.span whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
                      {link.name}
                    </motion.span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-primary mb-6">
              Services
            </h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link, i) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.35 + i * 0.05 }}
                >
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm flex items-center gap-1 group"
                  >
                    <motion.span whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
                      {link.name}
                    </motion.span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-primary mb-6">
              Get Started
            </h4>
            <ul className="space-y-4">
              {footerLinks.resources.map((link, i) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.05 }}
                >
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm flex items-center gap-1 group"
                  >
                    <motion.span whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
                      {link.name}
                    </motion.span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div 
          className="mt-16 pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4"
          variants={itemVariants}
        >
          <div className="flex items-center gap-3">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} ZENSICK. All rights reserved.
            </p>
            {/* Red dot signature */}
            <motion.div 
              className="w-1 h-1 rounded-full bg-primary opacity-40" 
              aria-hidden="true"
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="text-muted-foreground hover:text-foreground text-sm transition-colors hover:text-primary">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-muted-foreground hover:text-foreground text-sm transition-colors hover:text-primary">
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
