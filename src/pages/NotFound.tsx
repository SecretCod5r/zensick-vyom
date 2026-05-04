import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowLeft, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24">
        <section className="min-h-[70vh] flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />

          <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="font-display text-[120px] md:text-[180px] font-bold text-primary/10 leading-none select-none">
                404
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="-mt-12 md:-mt-16"
            >
              <h1 className="font-display text-3xl md:text-5xl font-bold mb-4">
                Page Not <span className="text-gradient-primary">Found</span>
              </h1>
              <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
                The page you're looking for doesn't exist or has been moved.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/">
                  <Button className="btn-shimmer h-12 px-6">
                    <Home className="w-4 h-4" />
                    Back to Home
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="h-12 px-6 border-primary/30 hover:border-primary/60">
                    <ArrowLeft className="w-4 h-4" />
                    Contact Us
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
