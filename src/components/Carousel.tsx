'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface CarouselItem {
  id: string;
  title: string;
  description: string;
  href: string;
  gradient: string;
  icon: string;
}

interface CarouselProps {
  items: CarouselItem[];
  speed?: number;
}

export function Carousel({ items, speed = 30 }: CarouselProps) {
  // Duplicate items for infinite scroll effect
  const duplicatedItems = [...items, ...items];

  return (
    <div className="carousel-container overflow-hidden w-full">
      <motion.div
        className="flex gap-6"
        animate={{
          x: [0, -50 * items.length + '%'],
        }}
        transition={{
          x: {
            duration: speed,
            repeat: Infinity,
            ease: 'linear',
          },
        }}
      >
        {duplicatedItems.map((item, index) => (
          <Link key={`${item.id}-${index}`} href={item.href} className="flex-shrink-0">
            <motion.div
              className="w-72 h-48 rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden group cursor-pointer"
              style={{
                background: `linear-gradient(135deg, ${item.gradient})`,
              }}
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ duration: 0.3 }}
            >
              {/* Icon */}
              <div className="text-4xl">{item.icon}</div>
              
              {/* Content */}
              <div>
                <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                <p className="text-white/80 text-sm line-clamp-2">{item.description}</p>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          </Link>
        ))}
      </motion.div>
    </div>
  );
}

