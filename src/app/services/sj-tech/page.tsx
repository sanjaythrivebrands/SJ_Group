'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowRight,
  BarChart3,
  Database,
  ShoppingCart,
  Store,
  Globe,
  Smartphone,
  Building2,
  Search,
  Palette,
  Bot,
  ChevronRight,
  Zap,
  Users,
  Clock
} from 'lucide-react';
import { PageHero, GlassCard, AnimatedSection, ServiceSelectionFlow } from '@/components';
import { LogoLoop } from '@/components/LogoLoop';
import { useLanguage } from '@/lib/i18n/LanguageProvider';

interface ServiceOffering {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
  color: string;
}

const offerings: ServiceOffering[] = [
  {
    id: 'powerbi',
    icon: BarChart3,
    title: 'Power BI Dashboarding',
    description: 'Transform your raw data into stunning, interactive dashboards that drive informed decision-making across your organization.',
    features: ['Custom dashboard design', 'Real-time data visualization', 'KPI tracking & monitoring', 'Automated report generation'],
    color: 'from-yellow-500 to-orange-500',
  },
  {
    id: 'data-analysis',
    icon: Database,
    title: 'Data Analysis',
    description: 'Extract meaningful insights from your data with advanced analytics, statistical modeling, and predictive analysis.',
    features: ['Statistical analysis', 'Trend identification', 'Predictive modeling', 'Data mining & cleansing'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'amazon',
    icon: ShoppingCart,
    title: 'Amazon Sellercentral Report Automation',
    description: 'Automate your Amazon seller reports and gain real-time insights into your sales performance, inventory, and customer metrics.',
    features: ['Automated sales reports', 'Inventory tracking', 'Performance analytics', 'Profit margin analysis'],
    color: 'from-orange-500 to-amber-500',
  },
  {
    id: 'shopify',
    icon: Store,
    title: 'Shopify Report Automation',
    description: 'Streamline your Shopify store analytics with automated reporting solutions that save time and improve accuracy.',
    features: ['Sales trend analysis', 'Customer behavior insights', 'Inventory optimization', 'Revenue forecasting'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 'webdev',
    icon: Globe,
    title: 'Website/Webapp Development',
    description: 'Build modern, responsive, and high-performance web applications tailored to your business needs.',
    features: ['Custom web applications', 'E-commerce platforms', 'Progressive web apps', 'CMS development'],
    color: 'from-violet-500 to-purple-500',
  },
  {
    id: 'mobile',
    icon: Smartphone,
    title: 'iOS/Android App Development',
    description: 'Create native and cross-platform mobile applications that deliver exceptional user experiences.',
    features: ['Native iOS development', 'Native Android development', 'Cross-platform solutions', 'App maintenance & updates'],
    color: 'from-pink-500 to-rose-500',
  },
  {
    id: 'portal',
    icon: Building2,
    title: 'Business Portal/Custom Software',
    description: 'Design and develop custom business portals and software solutions that streamline your operations.',
    features: ['Custom ERP solutions', 'Employee portals', 'Client management systems', 'Workflow automation'],
    color: 'from-indigo-500 to-blue-500',
  },
  {
    id: 'helium',
    icon: Search,
    title: 'Helium 10 Data Scraping',
    description: 'Leverage Helium 10 data to gain competitive insights and optimize your Amazon product listings.',
    features: ['Keyword research automation', 'Competitor analysis', 'Product tracking', 'Market trend analysis'],
    color: 'from-teal-500 to-cyan-500',
  },
  {
    id: 'uiux',
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Create intuitive and visually stunning user interfaces that enhance user engagement and satisfaction.',
    features: ['User research & testing', 'Wireframing & prototyping', 'Visual design systems', 'Accessibility optimization'],
    color: 'from-fuchsia-500 to-pink-500',
  },
  {
    id: 'ai',
    icon: Bot,
    title: 'Custom Agentic AI Chat Models',
    description: 'Build intelligent AI-powered chatbots and virtual assistants tailored to your business workflows.',
    features: ['Custom LLM fine-tuning', 'Multi-agent systems', 'Knowledge base integration', 'Conversational AI flows'],
    color: 'from-emerald-500 to-teal-500',
  },
];

const stats = [
  { value: '200+', label: 'Projects Delivered', icon: Zap },
  { value: '50+', label: 'Enterprise Clients', icon: Building2 },
  { value: '150+', label: 'Tech Experts', icon: Users },
  { value: '98%', label: 'Client Retention', icon: Clock },
];

export default function SJTechPage() {
  const { t } = useLanguage();
  const [selectedService, setSelectedService] = useState<ServiceOffering | null>(null);
  const [isFlowOpen, setIsFlowOpen] = useState(false);

  const handleServiceClick = (offering: ServiceOffering) => {
    setSelectedService(offering);
    setIsFlowOpen(true);
  };

  const handleCloseFlow = () => {
    setIsFlowOpen(false);
    setSelectedService(null);
  };

  return (
    <div className="min-h-screen">
      <PageHero
        subtitle={t('services.sjtech.subtitle')}
        title={t('services.sjtech.title')}
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-2xl md:text-3xl font-bold gradient-text mt-4"
        >
          {t('services.sjtech.tagline')}
        </motion.p>
      </PageHero>

      {/* Stats Section */}
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
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold gradient-text">{stat.value}</div>
                <div className="text-sm text-[var(--foreground-muted)] mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Key Offerings Section */}
      <AnimatedSection className="py-24 relative overflow-hidden bg-[var(--background-secondary)]">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-[var(--foreground)]"
            >
              Key <span className="gradient-text">Offerings</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto"
            >
              Comprehensive technology solutions tailored to drive your business forward.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {offerings.map((offering, index) => (
              <motion.div
                key={offering.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="expandable-card"
              >
                <GlassCard 
                  className="cursor-pointer transition-all duration-300 hover:ring-2 hover:ring-[var(--primary)]"
                  hover={false}
                  onClick={() => handleServiceClick(offering)}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${offering.color} flex items-center justify-center flex-shrink-0`}>
                      <offering.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold text-[var(--foreground)]">
                          {offering.title}
                        </h3>
                        <ChevronRight className="w-5 h-5 text-[var(--foreground-muted)]" />
                      </div>
                      <p className="text-[var(--foreground-muted)] mt-2 leading-relaxed">
                        {offering.description}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Technology Logos Section */}
      <AnimatedSection className="py-16 relative overflow-hidden bg-[var(--background)]">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold text-[var(--foreground)] mb-2"
            >
              Built with Leading Technologies
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-sm text-[var(--foreground-muted)]"
            >
              Trusted by developers worldwide
            </motion.p>
          </div>
          <div className="py-8 bg-[var(--background-secondary)] rounded-2xl px-8 overflow-hidden relative">
            <LogoLoop
              logos={[
                { src: 'https://cdn.simpleicons.org/react/61DAFB', alt: 'React', title: 'React' },
                { src: 'https://cdn.simpleicons.org/nextdotjs/000000', alt: 'Next.js', title: 'Next.js' },
                { src: 'https://cdn.simpleicons.org/typescript/3178C6', alt: 'TypeScript', title: 'TypeScript' },
                { src: 'https://cdn.simpleicons.org/nodedotjs/339933', alt: 'Node.js', title: 'Node.js' },
                { src: 'https://cdn.simpleicons.org/python/3776AB', alt: 'Python', title: 'Python' },
                { src: 'https://cdn.simpleicons.org/docker/2496ED', alt: 'Docker', title: 'Docker' },
                { src: 'https://cdn.simpleicons.org/amazonaws/232F3E', alt: 'AWS', title: 'AWS' },
                { src: 'https://cdn.simpleicons.org/github/181717', alt: 'GitHub', title: 'GitHub' },
                { src: 'https://cdn.simpleicons.org/mongodb/47A248', alt: 'MongoDB', title: 'MongoDB' },
                { src: 'https://cdn.simpleicons.org/postgresql/4169E1', alt: 'PostgreSQL', title: 'PostgreSQL' },
                { src: 'https://cdn.simpleicons.org/redis/DC382D', alt: 'Redis', title: 'Redis' },
                { src: 'https://cdn.simpleicons.org/kubernetes/326CE5', alt: 'Kubernetes', title: 'Kubernetes' },
              ]}
              speed={60}
              direction="left"
              logoHeight={40}
              gap={48}
              pauseOnHover={true}
              fadeOut={true}
              fadeOutColor="var(--background-secondary)"
              scaleOnHover={true}
              className="w-full"
            />
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-24 relative overflow-hidden bg-[var(--background)]">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <GlassCard className="p-12 md:p-16 bg-gradient-to-br from-[var(--primary)]/5 to-[var(--secondary)]/5">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
              Ready to Move Forward?
            </h2>
            <p className="text-lg text-[var(--foreground-muted)] mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how our technology solutions can transform your business operations and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <motion.button
                  className="btn-primary flex items-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Start a Project
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link href="/about">
                <motion.button
                  className="btn-secondary"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Learn About Us
                </motion.button>
              </Link>
            </div>
          </GlassCard>
        </div>
      </AnimatedSection>

      {/* Service Selection Flow */}
      {selectedService && (
        <ServiceSelectionFlow
          isOpen={isFlowOpen}
          onClose={handleCloseFlow}
          serviceId={selectedService.id}
          serviceName={selectedService.title}
        />
      )}
    </div>
  );
}
