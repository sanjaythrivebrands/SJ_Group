'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Snowflake {
  id: number;
  x: number;
  delay: number;
  duration: number;
  size: number;
}

export function Snowfall() {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);

  useEffect(() => {
    const flakes: Snowflake[] = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 15 + Math.random() * 20,
      size: 0.5 + Math.random() * 0.5,
    }));
    setSnowflakes(flakes);
  }, []);

  return (
    <div className="snowfall">
      {snowflakes.map((flake) => (
        <motion.div
          key={flake.id}
          className="snowflake"
          style={{
            left: `${flake.x}%`,
            fontSize: `${flake.size}rem`,
          }}
          initial={{ y: -20, x: 0, opacity: 0 }}
          animate={{
            y: '100vh',
            x: 100,
            opacity: [0, 1, 1, 0.3],
          }}
          transition={{
            duration: flake.duration,
            delay: flake.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          ❄
        </motion.div>
      ))}
    </div>
  );
}

