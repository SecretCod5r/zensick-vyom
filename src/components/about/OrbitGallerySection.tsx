"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Suspense } from "react";
import { motion } from "framer-motion";
import { ParticleSphere } from "@/components/ui/3d-orbit-gallery";

export function OrbitGallerySection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Our Universe of <span className="text-gradient-primary">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A glimpse into the world of data, creativity, and growth that powers everything we do.
          </p>
        </motion.div>

        <motion.div 
          className="h-[500px] md:h-[600px] w-full rounded-3xl overflow-hidden bg-background/50 backdrop-blur-sm border border-primary/10"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Canvas>
            <PerspectiveCamera makeDefault position={[0, 0, 20]} fov={60} />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <Suspense fallback={null}>
              <ParticleSphere />
            </Suspense>
            <OrbitControls 
              enableZoom={false} 
              enablePan={false}
              autoRotate
              autoRotateSpeed={0.5}
              minPolarAngle={Math.PI / 3}
              maxPolarAngle={Math.PI / 1.5}
            />
          </Canvas>
        </motion.div>
      </div>
    </section>
  );
}

export default OrbitGallerySection;
