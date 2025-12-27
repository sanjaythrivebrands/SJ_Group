'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, ChevronLeft, Check } from 'lucide-react';

interface ServiceConfig {
  step1: {
    label: string;
    options: string[];
  };
  step2: {
    label: string;
    options: string[];
  };
  step3: {
    label: string;
    options: string[];
  };
}

const serviceConfigs: Record<string, ServiceConfig> = {
  powerbi: {
    step1: {
      label: 'Choose type of development',
      options: ['New Dashboard', 'Dashboard Enhancement', 'Data Integration', 'Custom Visualization'],
    },
    step2: {
      label: 'Select number of dashboard pages',
      options: ['1-3 pages', '4-10 pages', '11-20 pages', '20+ pages'],
    },
    step3: {
      label: 'Select functions',
      options: ['Real-time data refresh', 'Automated report generation', 'Custom KPI tracking', 'Data export capabilities', 'Interactive filters', 'Scheduled reports'],
    },
  },
  'data-analysis': {
    step1: {
      label: 'Choose type of development',
      options: ['Statistical Analysis', 'Predictive Modeling', 'Data Mining', 'Trend Analysis', 'Custom Analytics'],
    },
    step2: {
      label: 'Select data sources',
      options: ['Database', 'CSV/Excel', 'API Integration', 'Cloud Storage', 'Real-time Streams', 'Multiple Sources'],
    },
    step3: {
      label: 'Select functions',
      options: ['Data cleansing', 'Automated processing', 'Custom algorithms', 'Report generation', 'Data visualization', 'Export capabilities'],
    },
  },
  amazon: {
    step1: {
      label: 'Choose type of development',
      options: ['Sales Report Automation', 'Inventory Report Automation', 'Financial Report Automation', 'Complete Automation Suite'],
    },
    step2: {
      label: 'Select marketplace',
      options: ['Amazon US', 'Amazon UK', 'Amazon EU', 'Amazon CA', 'Amazon AU', 'Multiple Marketplaces'],
    },
    step3: {
      label: 'Select automation period',
      options: ['Daily', 'Weekly', 'Monthly', 'Real-time', 'Custom Schedule'],
    },
  },
  shopify: {
    step1: {
      label: 'Choose type of development',
      options: ['Sales Report Automation', 'Inventory Report Automation', 'Customer Analytics Automation', 'Complete Automation Suite'],
    },
    step2: {
      label: 'Select target',
      options: ['Single Store', 'Multiple Stores', 'Store + Marketplace', 'Enterprise Multi-store'],
    },
    step3: {
      label: 'Select automation period',
      options: ['Daily', 'Weekly', 'Monthly', 'Real-time', 'Custom Schedule'],
    },
  },
  webdev: {
    step1: {
      label: 'Choose type of development',
      options: ['Website Development', 'Web Application', 'E-commerce Platform', 'Progressive Web App', 'Custom Solution'],
    },
    step2: {
      label: 'Select tech stack',
      options: ['React/Next.js', 'Vue.js', 'Angular', 'Node.js', 'Python/Django', 'PHP/Laravel', 'Custom Stack'],
    },
    step3: {
      label: 'Select functions',
      options: ['User Authentication', 'Payment Integration', 'CMS Integration', 'API Development', 'Database Design', 'Third-party Integrations'],
    },
  },
  mobile: {
    step1: {
      label: 'Choose type of development',
      options: ['Native iOS', 'Native Android', 'Cross-platform (React Native)', 'Cross-platform (Flutter)', 'Hybrid App'],
    },
    step2: {
      label: 'Select device',
      options: ['iPhone', 'iPad', 'Android Phone', 'Android Tablet', 'All Devices', 'Wearables'],
    },
    step3: {
      label: 'Select functions',
      options: ['Push Notifications', 'In-app Purchases', 'Offline Mode', 'Biometric Auth', 'Location Services', 'Camera Integration'],
    },
  },
  portal: {
    step1: {
      label: 'Choose type of development',
      options: ['Employee Portal', 'Client Portal', 'Vendor Portal', 'Custom Business Portal', 'ERP Integration'],
    },
    step2: {
      label: 'Select target',
      options: ['Single Organization', 'Multi-tenant', 'Enterprise', 'SaaS Platform'],
    },
    step3: {
      label: 'Select functions',
      options: ['User Management', 'Document Management', 'Workflow Automation', 'Reporting & Analytics', 'API Integration', 'Custom Modules'],
    },
  },
  helium: {
    step1: {
      label: 'Choose type of development',
      options: ['Keyword Research Automation', 'Competitor Analysis Automation', 'Product Tracking Automation', 'Complete Automation Suite'],
    },
    step2: {
      label: 'Select target',
      options: ['Single Product', 'Product Line', 'Full Catalog', 'Competitor Analysis'],
    },
    step3: {
      label: 'Select functions',
      options: ['Daily scraping', 'Weekly reports', 'Monthly analysis', 'Real-time monitoring', 'Custom schedule', 'Data export'],
    },
  },
  uiux: {
    step1: {
      label: 'Choose type of development',
      options: ['UI Design', 'UX Research & Design', 'Design System', 'Prototyping', 'Complete Design Package'],
    },
    step2: {
      label: 'Select target',
      options: ['Web Application', 'Mobile Application', 'Dashboard/Admin Panel', 'E-commerce', 'Landing Pages'],
    },
    step3: {
      label: 'Select functions',
      options: ['User Research', 'Wireframing', 'Prototyping', 'Design System', 'Usability Testing', 'Design Handoff'],
    },
  },
  ai: {
    step1: {
      label: 'Choose type of development',
      options: ['Custom Chatbot', 'AI Assistant', 'Multi-agent System', 'LLM Fine-tuning', 'Knowledge Base Integration'],
    },
    step2: {
      label: 'Select target',
      options: ['Customer Support', 'Internal Operations', 'Sales Automation', 'Content Generation', 'Data Analysis'],
    },
    step3: {
      label: 'Select functions',
      options: ['Natural Language Processing', 'Context Awareness', 'Multi-language Support', 'Integration APIs', 'Analytics Dashboard', 'Custom Training'],
    },
  },
};

interface ServiceSelectionFlowProps {
  isOpen: boolean;
  onClose: () => void;
  serviceId: string;
  serviceName: string;
}

export function ServiceSelectionFlow({
  isOpen,
  onClose,
  serviceId,
  serviceName,
}: ServiceSelectionFlowProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState<{
    step1: string[];
    step2: string[];
    step3: string[];
  }>({
    step1: [],
    step2: [],
    step3: [],
  });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const config = serviceConfigs[serviceId] || serviceConfigs.powerbi;

  const handleOptionToggle = (step: 'step1' | 'step2' | 'step3', option: string) => {
    setSelectedOptions((prev) => {
      const current = prev[step];
      const updated = current.includes(option)
        ? current.filter((o) => o !== option)
        : [...current, option];
      return { ...prev, [step]: updated };
    });
  };

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    // Here you would send the data to your backend
    console.log('Form Data:', {
      serviceId,
      serviceName,
      selections: selectedOptions,
      formData,
    });
    
    setIsSubmitting(false);
    alert('Thank you! We will contact you soon.');
    onClose();
    // Reset form
    setCurrentStep(1);
    setSelectedOptions({ step1: [], step2: [], step3: [] });
    setFormData({ name: '', email: '', contact: '', company: '', message: '' });
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return selectedOptions.step1.length > 0;
      case 2:
        return selectedOptions.step2.length > 0;
      case 3:
        return selectedOptions.step3.length > 0;
      case 4:
        return formData.name && formData.email && formData.contact;
      default:
        return false;
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-[var(--card-bg)] rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
              {/* Header */}
              <div className="sticky top-0 bg-[var(--card-bg)] border-b border-[var(--card-border)] p-6 flex items-start justify-between z-10">
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-bold text-[var(--foreground)] mb-2">
                    {serviceName}
                  </h2>
                  <div className="flex items-center gap-2 mt-4">
                    {[1, 2, 3, 4].map((step) => (
                      <div key={step} className="flex items-center">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                            currentStep >= step
                              ? 'bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] text-white'
                              : 'bg-[var(--background-secondary)] text-[var(--foreground-muted)]'
                          }`}
                        >
                          {currentStep > step ? <Check className="w-4 h-4" /> : step}
                        </div>
                        {step < 4 && (
                          <div
                            className={`w-12 h-0.5 mx-2 ${
                              currentStep > step
                                ? 'bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]'
                                : 'bg-[var(--background-secondary)]'
                            }`}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="ml-4 p-2 rounded-lg hover:bg-[var(--background-secondary)] transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-6 h-6 text-[var(--foreground-muted)]" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                <AnimatePresence mode="wait">
                  {currentStep === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      <h3 className="text-xl font-bold text-[var(--foreground)] mb-6">
                        {config.step1.label}
                      </h3>
                      <div className="grid gap-3">
                        {config.step1.options.map((option) => (
                          <motion.button
                            key={option}
                            onClick={() => handleOptionToggle('step1', option)}
                            className={`p-4 rounded-xl border-2 text-left transition-all ${
                              selectedOptions.step1.includes(option)
                                ? 'border-[var(--primary)] bg-[var(--primary-muted)]'
                                : 'border-[var(--card-border)] hover:border-[var(--primary)]/50'
                            }`}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-medium text-[var(--foreground)]">{option}</span>
                              {selectedOptions.step1.includes(option) && (
                                <Check className="w-5 h-5 text-[var(--primary)]" />
                              )}
                            </div>
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {currentStep === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      <h3 className="text-xl font-bold text-[var(--foreground)] mb-6">
                        {config.step2.label}
                      </h3>
                      <div className="grid gap-3">
                        {config.step2.options.map((option) => (
                          <motion.button
                            key={option}
                            onClick={() => handleOptionToggle('step2', option)}
                            className={`p-4 rounded-xl border-2 text-left transition-all ${
                              selectedOptions.step2.includes(option)
                                ? 'border-[var(--primary)] bg-[var(--primary-muted)]'
                                : 'border-[var(--card-border)] hover:border-[var(--primary)]/50'
                            }`}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-medium text-[var(--foreground)]">{option}</span>
                              {selectedOptions.step2.includes(option) && (
                                <Check className="w-5 h-5 text-[var(--primary)]" />
                              )}
                            </div>
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {currentStep === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      <h3 className="text-xl font-bold text-[var(--foreground)] mb-6">
                        {config.step3.label}
                      </h3>
                      <div className="grid gap-3">
                        {config.step3.options.map((option) => (
                          <motion.button
                            key={option}
                            onClick={() => handleOptionToggle('step3', option)}
                            className={`p-4 rounded-xl border-2 text-left transition-all ${
                              selectedOptions.step3.includes(option)
                                ? 'border-[var(--primary)] bg-[var(--primary-muted)]'
                                : 'border-[var(--card-border)] hover:border-[var(--primary)]/50'
                            }`}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-medium text-[var(--foreground)]">{option}</span>
                              {selectedOptions.step3.includes(option) && (
                                <Check className="w-5 h-5 text-[var(--primary)]" />
                              )}
                            </div>
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {currentStep === 4 && (
                    <motion.form
                      key="step4"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      onSubmit={handleSubmit}
                    >
                      <h3 className="text-xl font-bold text-[var(--foreground)] mb-6">
                        Fill in your details
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                            Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-[var(--card-border)] bg-[var(--background)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                            placeholder="Your full name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                            Email *
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-[var(--card-border)] bg-[var(--background)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                            placeholder="your.email@example.com"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                            Contact Number *
                          </label>
                          <input
                            type="tel"
                            required
                            value={formData.contact}
                            onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-[var(--card-border)] bg-[var(--background)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                            placeholder="+1 (555) 123-4567"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                            Company
                          </label>
                          <input
                            type="text"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-[var(--card-border)] bg-[var(--background)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                            placeholder="Your company name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-[var(--foreground)] mb-2">
                            Message
                          </label>
                          <textarea
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            rows={4}
                            className="w-full px-4 py-3 rounded-xl border border-[var(--card-border)] bg-[var(--background)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] resize-none"
                            placeholder="Tell us more about your requirements..."
                          />
                        </div>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>

              {/* Footer */}
              <div className="sticky bottom-0 bg-[var(--card-bg)] border-t border-[var(--card-border)] p-6 flex items-center justify-between">
                <button
                  onClick={handleBack}
                  disabled={currentStep === 1}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    currentStep === 1
                      ? 'text-[var(--foreground-muted)] cursor-not-allowed'
                      : 'text-[var(--foreground)] hover:bg-[var(--background-secondary)]'
                  }`}
                >
                  <ChevronLeft className="w-5 h-5" />
                  Back
                </button>
                {currentStep < 4 ? (
                  <button
                    onClick={handleNext}
                    disabled={!canProceed()}
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                      canProceed()
                        ? 'bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white hover:scale-105'
                        : 'bg-[var(--background-secondary)] text-[var(--foreground-muted)] cursor-not-allowed'
                    }`}
                  >
                    Next
                    <ChevronRight className="w-5 h-5" />
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    disabled={!canProceed() || isSubmitting}
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                      canProceed() && !isSubmitting
                        ? 'bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white hover:scale-105'
                        : 'bg-[var(--background-secondary)] text-[var(--foreground-muted)] cursor-not-allowed'
                    }`}
                  >
                    {isSubmitting ? 'Sending...' : 'Send'}
                    {!isSubmitting && <ChevronRight className="w-5 h-5" />}
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

