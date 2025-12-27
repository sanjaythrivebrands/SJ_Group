'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, CheckCircle, LucideIcon } from 'lucide-react';
import { PageHero, GlassCard, AnimatedSection, StaggerContainer, StaggerItem } from '@/components';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface Benefit {
  text: string;
}

interface ServiceTemplateProps {
  subtitle: string;
  title: string;
  description: string;
  gradient: string;
  features: Feature[];
  benefits: Benefit[];
  stats: { value: string; label: string }[];
  ctaText?: string;
  ctaLink?: string;
}

export function ServiceTemplate({
  subtitle,
  title,
  description,
  gradient,
  features,
  benefits,
  stats,
  ctaText = 'Get Started',
  ctaLink = '/contact',
}: ServiceTemplateProps) {
  return (
    <div className="min-h-screen">
      <PageHero
        subtitle={subtitle}
        title={title}
        description={description}
      >
        <Link href={ctaLink}>
          <motion.button
            className="btn-primary flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {ctaText}
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </Link>
      </PageHero>

      {/* Stats Section */}
      <AnimatedSection className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 text-center"
              >
                <div className="text-3xl md:text-4xl font-bold neon-text">{stat.value}</div>
                <div className="text-sm text-[var(--foreground-muted)] mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Features Section */}
      <AnimatedSection className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-[var(--neon-purple)] rounded-full filter blur-[200px] opacity-20" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-[var(--foreground)]"
            >
              Key <span className="neon-text">Features</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto"
            >
              Discover the powerful capabilities that set us apart.
            </motion.p>
          </div>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <StaggerItem key={feature.title}>
                <GlassCard className="h-full">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-5`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--foreground)] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-[var(--foreground-muted)] leading-relaxed">
                    {feature.description}
                  </p>
                </GlassCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </AnimatedSection>

      {/* Benefits Section */}
      <AnimatedSection className="py-24 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--neon-blue)] rounded-full filter blur-[200px] opacity-20" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-[var(--foreground)]"
              >
                Why Choose <span className="neon-text">Us</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="mt-4 text-lg text-[var(--foreground-muted)] leading-relaxed"
              >
                Experience the difference that comes with industry-leading expertise and dedication to excellence.
              </motion.p>
            </div>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 glass-card"
                >
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${gradient} flex items-center justify-center flex-shrink-0`}>
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-[var(--foreground)] font-medium">{benefit.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--neon-blue)]/5 via-transparent to-[var(--neon-purple)]/5" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <GlassCard className="p-12 md:p-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-[var(--foreground-muted)] mb-8 max-w-2xl mx-auto">
              Contact our team today to learn how we can help transform your business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <motion.button
                  className="btn-primary flex items-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Contact Us
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link href="/about">
                <motion.button
                  className="btn-secondary"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Learn More
                </motion.button>
              </Link>
            </div>
          </GlassCard>
        </div>
      </AnimatedSection>
    </div>
  );
}

