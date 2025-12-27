'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
  onClick?: () => void;
}

export function GlassCard({ 
  children, 
  className = '', 
  hover = true,
  delay = 0,
  onClick 
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}
      whileHover={hover ? { 
        y: -8,
        transition: { duration: 0.3 }
      } : undefined}
      onClick={onClick}
      className={`glass-card p-6 ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      {children}
    </motion.div>
  );
}

interface GlassCardHeaderProps {
  icon?: ReactNode;
  title: string;
  subtitle?: string;
}

export function GlassCardHeader({ icon, title, subtitle }: GlassCardHeaderProps) {
  return (
    <div className="flex items-start gap-4 mb-4">
      {icon && (
        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center text-white">
          {icon}
        </div>
      )}
      <div>
        <h3 className="text-xl font-bold text-[var(--foreground)]">{title}</h3>
        {subtitle && (
          <p className="text-sm text-[var(--foreground-muted)] mt-1">{subtitle}</p>
        )}
      </div>
    </div>
  );
}
