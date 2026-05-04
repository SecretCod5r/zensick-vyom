"use client";

import { ZoomParallax } from "@/components/ui/zoom-parallax";

// Marketing and analytics themed images for the parallax effect
const caseStudyImages = [
  {
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80",
    alt: "Analytics dashboard with performance metrics",
  },
  {
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80",
    alt: "Marketing data visualization and insights",
  },
  {
    src: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=800&fit=crop&crop=entropy&auto=format&q=80",
    alt: "Performance tracking and optimization",
  },
  {
    src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80",
    alt: "Team collaboration on strategy",
  },
  {
    src: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=800&fit=crop&crop=entropy&auto=format&q=80",
    alt: "Growth chart and revenue metrics",
  },
  {
    src: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80",
    alt: "Digital marketing campaign",
  },
  {
    src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80",
    alt: "Strategic planning meeting",
  },
];

export function ZoomParallaxSection() {
  return (
    <section className="relative">
      {/* Zoom Parallax Effect */}
      <ZoomParallax images={caseStudyImages} />
      
      {/* Bottom gradient overlay for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
    </section>
  );
}

export default ZoomParallaxSection;
