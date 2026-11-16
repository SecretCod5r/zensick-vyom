import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { SocialProofSection } from "@/components/home/SocialProofSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { WhyDifferentSection } from "@/components/home/WhyDifferentSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CTASection } from "@/components/home/CTASection";
import { WavePath } from "@/components/ui/wave-path";
import { PulseBeamsConnector } from "@/components/home/PulseBeamsConnector";
import { SEO } from "@/components/seo/SEO";

const homeSchema = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://zensick.com/#website",
    "name": "ZENSICK",
    "url": "https://zensick.com/",
    "description": "Strategy-first, analytics-driven digital growth company scaling brands through integrated performance marketing and actionable intelligence.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://zensick.com/blog?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://zensick.com/#localbusiness",
    "name": "ZENSICK",
    "url": "https://zensick.com/",
    "logo": "https://zensick.com/favicon.png",
    "image": "https://zensick.com/og-image.png",
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Delhi",
      "addressCountry": "IN"
    },
    "description": "360° Digital Growth Company specializing in Performance Marketing, Analytics, Creative Ad Production, and Retention.",
    "founder": {
      "@type": "Person",
      "name": "Vyom"
    },
    "sameAs": [
      "https://www.linkedin.com/company/zensick"
    ]
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="360° Digital Growth Company | Performance Marketing & Analytics" 
        description="We don't guess. We predict. ZENSICK is a strategy-first, analytics-driven digital growth company scaling D2C brands through performance marketing, attribution, and growth engineering."
        canonicalUrl="https://zensick.com/"
        keywords="performance marketing, digital growth agency, analytics, ROAS optimization, D2C marketing, Meta ads, Google ads, revenue attribution, Delhi"
        schema={homeSchema}
      />
      <Navbar />
      <main>
        <HeroSection />
        
        {/* Wave Divider */}
        <div className="flex justify-center">
          <WavePath className="w-[70%]" />
        </div>
        
        <SocialProofSection />
        
        {/* Wave Divider */}
        <div className="flex justify-center">
          <WavePath className="w-[70%]" />
        </div>
        
        <ServicesSection />
        
        {/* Wave Divider */}
        <div className="flex justify-center">
          <WavePath className="w-[70%]" />
        </div>
        
        <ProcessSection />
        
        {/* PulseBeams Visual Connector */}
        <PulseBeamsConnector className="py-12" />
        
        <WhyDifferentSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
