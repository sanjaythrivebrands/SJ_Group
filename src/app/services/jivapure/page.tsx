'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowRight,
  Leaf, 
  Droplets, 
  Sun, 
  Award, 
  Recycle, 
  Heart,
  Shield,
  Sparkles,
  Star
} from 'lucide-react';
import { PageHero, GlassCard, AnimatedSection, StaggerContainer, StaggerItem } from '@/components';
import { useLanguage } from '@/lib/i18n/LanguageProvider';

const features = [
  {
    icon: Leaf,
    title: '100% Natural',
    description: 'Products crafted from pure, organic ingredients sourced from sustainable farms worldwide.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Droplets,
    title: 'Pure Formulations',
    description: 'Clean formulas free from harmful chemicals, parabens, and artificial additives.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Sun,
    title: 'Wellness Focus',
    description: 'Products designed to enhance overall well-being and promote a healthier lifestyle.',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Award,
    title: 'Certified Quality',
    description: 'Third-party tested and certified for purity, potency, and safety standards.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Recycle,
    title: 'Eco-Friendly',
    description: 'Sustainable packaging and environmentally conscious manufacturing processes.',
    color: 'from-teal-500 to-green-500',
  },
  {
    icon: Heart,
    title: 'Cruelty Free',
    description: 'Never tested on animals. Ethical practices throughout our entire supply chain.',
    color: 'from-pink-500 to-rose-500',
  },
];

const stats = [
  { value: '50+', label: 'Product Range' },
  { value: '100K+', label: 'Happy Customers' },
  { value: '100%', label: 'Natural' },
  { value: '0', label: 'Harmful Chemicals' },
];

const benefits = [
  'Premium ingredients sourced from organic, sustainable sources',
  'Transparent labeling with full ingredient disclosure',
  'Backed by scientific research and development',
  'Carbon-neutral shipping and eco-friendly packaging',
  'Satisfaction guarantee on all products',
  'Supporting local farming communities globally',
];

export default function JivaPurePage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <PageHero
        subtitle={t('services.jivapure.subtitle')}
        title={t('services.jivapure.title')}
        description={t('services.jivapure.description')}
      />

      {/* Stats Section */}
      <AnimatedSection className="py-16 bg-[var(--background)]">
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
                <div className="text-3xl md:text-4xl font-bold gradient-text">{stat.value}</div>
                <div className="text-sm text-[var(--foreground-muted)] mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Features Section */}
      <AnimatedSection className="py-24 bg-[var(--background-secondary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-[var(--foreground)]"
            >
              Why Choose <span className="gradient-text">JivaPure</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto"
            >
              Experience the power of nature with our premium wellness products.
            </motion.p>
          </div>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <StaggerItem key={feature.title}>
                <GlassCard className="h-full">
                  <motion.div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-5`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <feature.icon className="w-7 h-7 text-white" />
                  </motion.div>
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
      <AnimatedSection className="py-24 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-[var(--foreground)]"
              >
                Pure <span className="gradient-text">Benefits</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="mt-4 text-lg text-[var(--foreground-muted)] leading-relaxed"
              >
                Experience the difference that comes with truly natural products, 
                crafted with care and backed by science.
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
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
                    <Star className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-[var(--foreground)] font-medium">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-24 bg-[var(--background-secondary)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <GlassCard className="p-12 md:p-16 bg-gradient-to-br from-[var(--primary)]/5 to-[var(--secondary)]/5">
            <Sparkles className="w-16 h-16 mx-auto text-[var(--primary)] mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
              Start Your Wellness Journey
            </h2>
            <p className="text-lg text-[var(--foreground-muted)] mb-8 max-w-2xl mx-auto">
              Discover the transformative power of natural wellness products and embrace a healthier lifestyle.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <motion.button
                  className="btn-primary flex items-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Explore Products
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  className="btn-secondary"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Contact Us
                </motion.button>
              </Link>
            </div>
          </GlassCard>
        </div>
      </AnimatedSection>
    </div>
  );
}
