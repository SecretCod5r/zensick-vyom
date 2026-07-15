import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Home, Briefcase, BarChart3, FolderOpen, Users, BookOpen, Mail } from "lucide-react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { TubelightNavBar } from "@/components/ui/tubelight-navbar";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

const navLinks = [
  { name: "Services", href: "/services" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
];

const tubelightItems = [
  { name: "Home", url: "/", icon: Home },
  { name: "Services", url: "/services", icon: Briefcase },
  { name: "Case Studies", url: "/case-studies", icon: FolderOpen },
  { name: "Blog", url: "/blog", icon: BookOpen },
  { name: "About", url: "/about", icon: Users },
  { name: "Contact", url: "/contact", icon: Mail },
];

function ZensickWordmark() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const dotX = useSpring(0, { stiffness: 300, damping: 25 });
  const dotY = useSpring(0, { stiffness: 300, damping: 25 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    dotX.set(x);
    dotY.set(y);
  };

  const letters = "ZENSICK".split("");

  return (
    <div
      ref={containerRef}
      className="relative flex items-center cursor-pointer select-none"
      style={{ minWidth: 120, minHeight: 32 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); dotX.set(0); dotY.set(0); }}
      onMouseMove={handleMouseMove}
    >
      {/* Letters */}
      <div className="flex items-center">
        {letters.map((letter, i) => (
          <motion.span
            key={i}
            className="font-display font-bold text-xl tracking-[0.25em] uppercase text-foreground inline-block"
            animate={{
              opacity: isHovered ? 0 : 1,
              scale: isHovered ? 0.3 : 1,
              filter: isHovered ? "blur(6px)" : "blur(0px)",
            }}
            transition={{
              duration: 0.35,
              delay: isHovered ? i * 0.03 : (letters.length - i) * 0.02,
              ease: [0.4, 0, 0.2, 1],
            }}
          >
            {letter}
          </motion.span>
        ))}
      </div>

      {/* Red dot that follows cursor */}
      <motion.div
        className="absolute rounded-full bg-primary pointer-events-none"
        style={{
          x: dotX,
          y: dotY,
          left: "50%",
          top: "50%",
          marginLeft: -5,
          marginTop: -5,
        }}
        animate={{
          width: isHovered ? 10 : 0,
          height: isHovered ? 10 : 0,
          opacity: isHovered ? 1 : 0,
          boxShadow: isHovered
            ? "0 0 20px hsl(8 83% 51% / 0.6), 0 0 40px hsl(8 83% 51% / 0.3)"
            : "0 0 0px transparent",
        }}
        transition={{
          width: { duration: 0.3, delay: isHovered ? 0.2 : 0 },
          height: { duration: 0.3, delay: isHovered ? 0.2 : 0 },
          opacity: { duration: 0.25, delay: isHovered ? 0.15 : 0 },
          boxShadow: { duration: 0.4 },
        }}
      />
    </div>
  );
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || isMobileMenuOpen ? "glass py-3 bg-background/95 backdrop-blur-md" : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            {/* Wordmark */}
            <Link to="/" className="flex items-center">
              <ZensickWordmark />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex lg:hidden items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-sm font-medium link-underline transition-colors ${
                    location.pathname === link.href
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <Link to="/contact">
                <InteractiveHoverButton 
                  text="Get Free Audit" 
                  className="h-9 text-sm"
                />
              </Link>
              <Link to="/contact">
                <Button variant="pill" size="sm" className="btn-shimmer">
                  Book a Call
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden mt-4 py-4 border-t border-border overflow-hidden"
              >
                <div className="flex flex-col gap-4">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={link.href}
                        className={`text-base font-medium py-2 block transition-colors ${
                          location.pathname === link.href
                            ? "text-primary"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                  <motion.div 
                    className="flex flex-col gap-3 pt-4 border-t border-border"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Link to="/contact">
                      <Button variant="pillOutline" className="w-full">
                        Get Free Audit
                      </Button>
                    </Link>
                    <Link to="/contact">
                      <Button variant="pill" className="w-full btn-shimmer">
                        Book a Call
                      </Button>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Tubelight Navigation Bar - Desktop Only */}
      <div className="hidden lg:block">
        <TubelightNavBar items={tubelightItems} />
      </div>
    </>
  );
}
