'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

interface Image {
  src: string;
  alt?: string;
}

interface ZoomParallaxProps {
  /** Array of images to be displayed in the parallax effect max 7 images */
  images: Image[];
}

// Default marketing/analytics themed images
const defaultImages: Image[] = [
  {
    src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
    alt: 'Analytics dashboard',
  },
  {
    src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
    alt: 'Marketing data visualization',
  },
  {
    src: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=800&fit=crop&crop=entropy&auto=format&q=80',
    alt: 'Performance metrics',
  },
  {
    src: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
    alt: 'Team collaboration',
  },
  {
    src: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=800&fit=crop&crop=entropy&auto=format&q=80',
    alt: 'Growth chart',
  },
  {
    src: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
    alt: 'Digital marketing',
  },
  {
    src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
    alt: 'Strategy meeting',
  },
];

export function ZoomParallax({ images = defaultImages }: ZoomParallaxProps) {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const scales = [scale4, scale5, scale6, scale5, scale6, scale8, scale9];

  return (
    <div ref={container} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        {images.slice(0, 7).map(({ src, alt }, index) => {
          const scale = scales[index % scales.length];

          return (
            <motion.div
              key={index}
              style={{ scale }}
              className={`absolute top-0 flex h-full w-full items-center justify-center 
                ${index === 0 ? '[&>div]:relative [&>div]:h-[25vh] [&>div]:w-[25vw]' : ''} 
                ${index === 1 ? '[&>div]:!-top-[30vh] [&>div]:!left-[5vw] [&>div]:!h-[30vh] [&>div]:!w-[35vw]' : ''} 
                ${index === 2 ? '[&>div]:!-top-[10vh] [&>div]:!-left-[25vw] [&>div]:!h-[45vh] [&>div]:!w-[20vw]' : ''} 
                ${index === 3 ? '[&>div]:!left-[27.5vw] [&>div]:!h-[25vh] [&>div]:!w-[25vw]' : ''} 
                ${index === 4 ? '[&>div]:!top-[27.5vh] [&>div]:!left-[5vw] [&>div]:!h-[25vh] [&>div]:!w-[20vw]' : ''} 
                ${index === 5 ? '[&>div]:!top-[27.5vh] [&>div]:!-left-[22.5vw] [&>div]:!h-[25vh] [&>div]:!w-[30vw]' : ''} 
                ${index === 6 ? '[&>div]:!top-[22.5vh] [&>div]:!left-[25vw] [&>div]:!h-[15vh] [&>div]:!w-[15vw]' : ''}`}
            >
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={src}
                  alt={alt || `Parallax image ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default ZoomParallax;
