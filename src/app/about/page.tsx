'use client';

import { motion } from 'framer-motion';
import { 
  Target, 
  Eye, 
  Award,
  Users,
  Globe,
  Lightbulb,
  Shield,
  TrendingUp,
  Rocket,
  Heart,
  Zap,
  BarChart3
} from 'lucide-react';
import { PageHero, GlassCard, AnimatedSection, StaggerContainer, StaggerItem } from '@/components';
import { useLanguage } from '@/lib/i18n/LanguageProvider';

// Values data
const values = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    titleKey: 'about.values.innovation',
    description: 'Constantly pushing boundaries to create breakthrough solutions that shape the future.',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Shield,
    title: 'Integrity',
    titleKey: 'about.values.integrity',
    description: 'Upholding the highest ethical standards in every interaction and decision we make.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Users,
    title: 'Collaboration',
    titleKey: 'about.values.collaboration',
    description: 'Fostering partnerships and teamwork to achieve exceptional outcomes together.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: TrendingUp,
    title: 'Excellence',
    titleKey: 'about.values.excellence',
    description: 'Striving for perfection in every product, service, and customer experience we deliver.',
    color: 'from-violet-500 to-purple-500',
  },
];

// Stats data
const stats = [
  { value: '2015', label: 'Founded' },
  { value: '50+', label: 'Enterprise Clients' },
  { value: '200+', label: 'Team Members' },
  { value: '15+', label: 'Countries Served' },
];

// Infographic data
const infographics = [
  {
    title: 'Global Reach',
    value: '15+',
    description: 'Countries with active operations',
    icon: Globe,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Team Growth',
    value: '200+',
    description: 'Talented professionals',
    icon: Users,
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Client Satisfaction',
    value: '98%',
    description: 'Client retention rate',
    icon: Heart,
    color: 'from-pink-500 to-rose-500',
  },
  {
    title: 'Projects Delivered',
    value: '500+',
    description: 'Successful implementations',
    icon: Rocket,
    color: 'from-violet-500 to-purple-500',
  },
];

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <PageHero
        subtitle={t('about.hero.subtitle')}
        title={t('about.hero.title')}
        description={t('about.hero.description')}
      />

      {/* Stats Section with Animation */}
      <AnimatedSection className="py-16 relative bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 text-center group"
              >
                <motion.div 
                  className="text-3xl md:text-4xl font-bold gradient-text"
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2, type: 'spring' }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-[var(--foreground-muted)] mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Vision & Mission Section */}
      <AnimatedSection className="py-24 relative overflow-hidden bg-[var(--background-secondary)]">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <GlassCard className="p-8 h-full">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-[var(--foreground)] mb-4">{t('about.vision.title')}</h2>
                <p className="text-lg text-[var(--foreground-muted)] leading-relaxed">
                  {t('about.vision.text')}
                </p>
              </GlassCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <GlassCard className="p-8 h-full">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--secondary)] to-[var(--primary)] flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-[var(--foreground)] mb-4">{t('about.mission.title')}</h2>
                <p className="text-lg text-[var(--foreground-muted)] leading-relaxed">
                  {t('about.mission.text')}
                </p>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Infographics Section */}
      <AnimatedSection className="py-24 relative overflow-hidden bg-[var(--background)]">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-[var(--foreground)]"
            >
              Our <span className="gradient-text">Impact</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto"
            >
              Measurable results that demonstrate our commitment to excellence.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {infographics.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="text-center p-8 h-full group">
                  <motion.div
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-5`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <item.icon className="w-10 h-10 text-white" />
                  </motion.div>
                  <motion.div
                    className="text-4xl font-bold gradient-text mb-2"
                    initial={{ scale: 0.5 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2, type: 'spring' }}
                  >
                    {item.value}
                  </motion.div>
                  <h3 className="text-lg font-bold text-[var(--foreground)] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[var(--foreground-muted)]">
                    {item.description}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Values Section */}
      <AnimatedSection className="py-24 relative overflow-hidden bg-[var(--background-secondary)]">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-[var(--foreground)]"
            >
              {t('about.values.title').split(' ').map((word, i, arr) => (
                <span key={i}>
                  {i === arr.length - 1 ? <span className="gradient-text">{word}</span> : word + ' '}
                </span>
              ))}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto"
            >
              {t('about.values.subtitle')}
            </motion.p>
          </div>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <GlassCard className="h-full text-center p-8">
                  <motion.div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mx-auto mb-5`}
                    whileHover={{ scale: 1.1, rotate: 10 }}
                  >
                    <value.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-[var(--foreground)] mb-3">
                    {t(value.titleKey)}
                  </h3>
                  <p className="text-[var(--foreground-muted)] leading-relaxed">
                    {value.description}
                  </p>
                </GlassCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </AnimatedSection>

      {/* Culture Section */}
      <AnimatedSection className="py-24 relative overflow-hidden bg-[var(--background-secondary)]">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-[var(--foreground)]"
              >
                {t('about.culture.title').split(' ').map((word, i, arr) => (
                  <span key={i}>
                    {i === arr.length - 1 ? <span className="gradient-text">{word}</span> : word + ' '}
                  </span>
                ))}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="mt-4 text-lg text-[var(--foreground-muted)] leading-relaxed"
              >
                {t('about.culture.text')} We foster an environment of continuous learning, 
                open collaboration, and bold experimentation.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mt-8 space-y-4"
              >
                {[
                  'Remote-first, flexible work culture',
                  'Continuous learning & development programs',
                  'Quarterly innovation hackathons',
                  'Comprehensive health & wellness benefits',
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-[var(--primary)]" />
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
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { icon: Rocket, label: 'Innovation', sub: 'Always Pushing Forward', color: 'text-[var(--primary)]' },
                    { icon: Globe, label: 'Global', sub: 'Distributed Team', color: 'text-blue-500' },
                    { icon: Heart, label: 'Care', sub: 'People First', color: 'text-pink-500' },
                    { icon: Award, label: 'Excellence', sub: 'High Standards', color: 'text-yellow-500' },
                  ].map((item, index) => (
                    <motion.div
                      key={item.label}
                      className="text-center p-4"
                      whileHover={{ scale: 1.05 }}
                    >
                      <item.icon className={`w-10 h-10 mx-auto ${item.color} mb-3`} />
                      <div className="text-xl font-bold text-[var(--foreground)]">{item.label}</div>
                      <div className="text-sm text-[var(--foreground-muted)]">{item.sub}</div>
                    </motion.div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
