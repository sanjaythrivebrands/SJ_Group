'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowRight, 
  Shirt,
  Sparkles,
  Palette,
  TrendingUp,
  Package,
  BarChart3,
  ShoppingBag,
  Star,
  Zap,
  Gem,
  PenTool
} from 'lucide-react';
import Image from 'next/image';
import { PageHero, GlassCard, AnimatedSection, StaggerContainer, StaggerItem } from '@/components';
import { useLanguage } from '@/lib/i18n/LanguageProvider';

// Product categories
const categories = [
  {
    id: 'anime',
    name: 'Anime Collection',
    description: 'Vibrant anime-inspired designs featuring popular characters and artistic interpretations.',
    products: ['Hoodies', 'T-Shirts', 'Shirts'],
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=400&fit=crop&q=80',
    gradient: 'from-pink-500 to-violet-500',
    icon: Palette,
  },
  {
    id: 'abstract',
    name: 'Abstract Designs',
    description: 'Modern abstract patterns with bold colors and geometric shapes.',
    products: ['Hoodies', 'T-Shirts', 'Shirts'],
    image: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=400&h=400&fit=crop&q=80',
    gradient: 'from-blue-500 to-cyan-500',
    icon: Gem,
  },
  {
    id: 'text',
    name: 'Text & Typography',
    description: 'Statement pieces with creative typography and meaningful quotes.',
    products: ['Hoodies', 'T-Shirts', 'Shirts'],
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=400&fit=crop&q=80',
    gradient: 'from-orange-500 to-red-500',
    icon: PenTool,
  },
  {
    id: 'solid',
    name: 'Solid Essentials',
    description: 'Premium quality basics in timeless solid colors for everyday wear.',
    products: ['Hoodies', 'T-Shirts', 'Shirts'],
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=400&h=400&fit=crop&q=80',
    gradient: 'from-gray-600 to-gray-800',
    icon: Star,
  },
];

// Product types
const productTypes = [
  {
    name: 'Hoodies',
    icon: Shirt,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=600&fit=crop&q=80',
    features: ['Premium cotton blend', 'Comfortable fit', 'Durable print quality', 'Multiple size options'],
    priceRange: '$45 - $85',
  },
  {
    name: 'T-Shirts',
    icon: Shirt,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop&q=80',
    features: ['100% organic cotton', 'Breathable fabric', 'Eco-friendly dyes', 'Unisex sizing'],
    priceRange: '$25 - $45',
  },
  {
    name: 'Shirts',
    icon: Shirt,
    image: 'https://images.unsplash.com/photo-1594938291221-94f18b6d6608?w=600&h=600&fit=crop&q=80',
    features: ['Premium fabric blend', 'Smart casual style', 'Easy care material', 'Professional look'],
    priceRange: '$35 - $65',
  },
];

// Features
const features = [
  {
    icon: Sparkles,
    title: 'Premium Quality',
    description: 'Every piece is crafted with the finest materials for lasting comfort and durability.',
  },
  {
    icon: Palette,
    title: 'Unique Designs',
    description: 'Original artwork and designs you won\'t find anywhere else.',
  },
  {
    icon: Package,
    title: 'Fast Shipping',
    description: 'Quick processing and worldwide delivery to your doorstep.',
  },
  {
    icon: TrendingUp,
    title: 'Trending Styles',
    description: 'Stay ahead with the latest fashion trends and seasonal collections.',
  },
];

// Stats
const stats = [
  { value: '10K+', label: 'Happy Customers' },
  { value: '500+', label: 'Unique Designs' },
  { value: '50+', label: 'Countries Shipped' },
  { value: '4.9', label: 'Customer Rating' },
];

export default function MeloraPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <PageHero
        subtitle={t('services.melora.subtitle')}
        title={t('services.melora.title')}
        description="Premium retail clothing solutions featuring unique designs across anime, abstract, typography, and solid collections. High-quality hoodies, t-shirts, and shirts for every style."
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

      {/* Categories Section */}
      <AnimatedSection className="py-24 bg-[var(--background-secondary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-[var(--foreground)]"
            >
              Our <span className="gradient-text">Collections</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto"
            >
              Explore our diverse range of clothing categories, each with its unique style and character.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="h-full text-center group">
                  <motion.div
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center mx-auto mb-5 overflow-hidden`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Image
                      src={category.image}
                      alt={category.name}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">
                    {category.name}
                  </h3>
                  <p className="text-[var(--foreground-muted)] text-sm mb-4 leading-relaxed">
                    {category.description}
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.products.map((product) => (
                      <span
                        key={product}
                        className="px-3 py-1 text-xs rounded-full bg-[var(--primary-muted)] text-[var(--primary)] font-medium"
                      >
                        {product}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Product Types Section */}
      <AnimatedSection className="py-24 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-[var(--foreground)]"
            >
              Product <span className="gradient-text">Range</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto"
            >
              Quality apparel for every occasion, from casual streetwear to smart casual.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {productTypes.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="h-full relative overflow-hidden">
                  <div className="relative h-48 w-full mb-6 rounded-xl overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--foreground)] mb-2">
                    {product.name}
                  </h3>
                  <p className="text-lg text-[var(--primary)] font-semibold mb-4">
                    {product.priceRange}
                  </p>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-[var(--foreground-muted)]">
                        <Star className="w-4 h-4 text-[var(--primary)]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Features Section */}
      <AnimatedSection className="py-24 bg-[var(--background-secondary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <StaggerItem key={feature.title}>
                <GlassCard className="h-full text-center">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center mx-auto mb-5">
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

      {/* 3D Visual Section */}
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
                Designed for <span className="gradient-text">Excellence</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="mt-4 text-lg text-[var(--foreground-muted)] leading-relaxed"
              >
                Every piece in our collection is designed with attention to detail, 
                using premium materials and sustainable manufacturing practices.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mt-8 space-y-4"
              >
                {[
                  'Eco-friendly production methods',
                  'Ethically sourced materials',
                  'Quality assurance testing',
                  'Sustainable packaging',
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-[var(--primary)]" />
                    <span className="text-[var(--foreground)]">{item}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <GlassCard className="p-8 relative overflow-hidden">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { src: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop&q=80', alt: 'Hoodie' },
                    { src: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop&q=80', alt: 'T-Shirt' },
                    { src: 'https://images.unsplash.com/photo-1594938291221-94f18b6d6608?w=400&h=400&fit=crop&q=80', alt: 'Shirt' },
                    { src: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=400&fit=crop&q=80', alt: 'Design' },
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      className="aspect-square rounded-2xl overflow-hidden relative"
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/20 to-[var(--secondary)]/20" />
                    </motion.div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <p className="text-[var(--foreground-muted)]">
                    Browse our full collection
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-24 bg-[var(--background-secondary)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <GlassCard className="p-12 md:p-16 bg-gradient-to-br from-[var(--primary)]/5 to-[var(--secondary)]/5">
            <ShoppingBag className="w-16 h-16 mx-auto text-[var(--primary)] mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
              Ready to Elevate Your Style?
            </h2>
            <p className="text-lg text-[var(--foreground-muted)] mb-8 max-w-2xl mx-auto">
              Discover our complete collection and find the perfect pieces that express your unique personality.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <motion.button
                  className="btn-primary flex items-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Shop Now
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
