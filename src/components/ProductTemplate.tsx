'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, CheckCircle, LucideIcon, Star } from 'lucide-react';
import { PageHero, GlassCard, AnimatedSection, StaggerContainer, StaggerItem } from '@/components';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface Module {
  name: string;
  description: string;
}

interface ProductTemplateProps {
  subtitle: string;
  title: string;
  description: string;
  gradient: string;
  features: Feature[];
  modules: Module[];
  highlights: string[];
  ctaText?: string;
  ctaLink?: string;
}

export function ProductTemplate({
  subtitle,
  title,
  description,
  gradient,
  features,
  modules,
  highlights,
  ctaText = 'Request Demo',
  ctaLink = '/contact',
}: ProductTemplateProps) {
  return (
    <div className="min-h-screen">
      <PageHero
        subtitle={subtitle}
        title={title}
        description={description}
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
          <Link href="/contact">
            <motion.button
              className="btn-secondary"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Sales
            </motion.button>
          </Link>
        </div>
      </PageHero>

      {/* Product Highlights */}
      <AnimatedSection className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-2 px-4 py-2 glass-card"
              >
                <Star className="w-4 h-4 text-[var(--neon-blue)]" />
                <span className="text-sm font-medium text-[var(--foreground)]">{highlight}</span>
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
              Powerful <span className="neon-text">Features</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto"
            >
              Everything you need to streamline your operations and drive growth.
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

      {/* Modules Section */}
      <AnimatedSection className="py-24 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--neon-blue)] rounded-full filter blur-[200px] opacity-20" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-[var(--foreground)]"
            >
              Core <span className="neon-text">Modules</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto"
            >
              Comprehensive modules designed to cover all your business needs.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {modules.map((module, index) => (
              <motion.div
                key={module.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 glass-card"
              >
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${gradient} flex items-center justify-center flex-shrink-0`}>
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-[var(--foreground)] mb-1">{module.name}</h3>
                  <p className="text-[var(--foreground-muted)] text-sm">{module.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Integration Section */}
      <AnimatedSection className="py-24 relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-[var(--foreground)]"
              >
                Seamless <span className="neon-text">Integration</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="mt-4 text-lg text-[var(--foreground-muted)] leading-relaxed"
              >
                Connect with your existing tools and workflows effortlessly. Our platform 
                integrates with hundreds of popular applications and supports custom API connections.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mt-8 space-y-4"
              >
                {[
                  'REST API & Webhooks',
                  'SSO & LDAP Integration',
                  'Third-party App Marketplace',
                  'Custom Integration Support',
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${gradient}`} />
                    <span className="text-[var(--foreground)]">{item}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <GlassCard className="p-8">
                <div className="grid grid-cols-3 gap-4">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div
                      key={i}
                      className="aspect-square rounded-xl bg-[var(--glass-bg)] border border-[var(--glass-border)] flex items-center justify-center"
                    >
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${gradient} opacity-60`} />
                    </div>
                  ))}
                </div>
                <p className="text-center text-sm text-[var(--foreground-muted)] mt-4">
                  100+ integrations available
                </p>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--neon-blue)]/5 via-transparent to-[var(--neon-purple)]/5" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <GlassCard className="p-12 md:p-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
              Start Your Free Trial Today
            </h2>
            <p className="text-lg text-[var(--foreground-muted)] mb-8 max-w-2xl mx-auto">
              Experience the full power of our platform with a 14-day free trial. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <motion.button
                  className="btn-primary flex items-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  className="btn-secondary"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Schedule Demo
                </motion.button>
              </Link>
            </div>
          </GlassCard>
        </div>
      </AnimatedSection>
    </div>
  );
}

