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
const Index = () => {
  return (
    <div className="min-h-screen bg-background">
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
