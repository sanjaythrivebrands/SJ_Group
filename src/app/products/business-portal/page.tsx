'use client';

import { 
  Building2, 
  LayoutDashboard, 
  FileText, 
  Users, 
  Bell, 
  Lock,
  Workflow,
  Globe
} from 'lucide-react';
import { ProductTemplate } from '@/components';

const features = [
  {
    icon: LayoutDashboard,
    title: 'Unified Dashboard',
    description: 'Single pane of glass for all business operations, metrics, and insights.',
  },
  {
    icon: Workflow,
    title: 'Workflow Engine',
    description: 'Build and automate business processes with visual workflow designer.',
  },
  {
    icon: FileText,
    title: 'Document Center',
    description: 'Centralized document management with templates and e-signatures.',
  },
  {
    icon: Users,
    title: 'Stakeholder Portal',
    description: 'Secure portals for vendors, partners, and customers to collaborate.',
  },
  {
    icon: Bell,
    title: 'Notifications Hub',
    description: 'Centralized notifications across all integrated applications.',
  },
  {
    icon: Lock,
    title: 'Access Control',
    description: 'Granular role-based permissions and audit logging.',
  },
];

const modules = [
  { name: 'Executive Dashboard', description: 'High-level KPIs and business metrics' },
  { name: 'Process Automation', description: 'Visual workflow builder with triggers and actions' },
  { name: 'Document Management', description: 'Store, organize, and share business documents' },
  { name: 'Vendor Portal', description: 'Manage vendor relationships and communications' },
  { name: 'Approval Workflows', description: 'Multi-level approval chains for business requests' },
  { name: 'Reporting Engine', description: 'Custom report builder with scheduled delivery' },
  { name: 'Integration Platform', description: 'Connect with ERP, CRM, and other business systems' },
  { name: 'Mobile Access', description: 'Full-featured mobile app for business on the go' },
];

const highlights = [
  'Unified platform',
  'Custom workflows',
  'Multi-portal support',
  'Enterprise security',
  'Custom branding',
  'API-first design',
];

export default function BusinessPortalPage() {
  return (
    <ProductTemplate
      subtitle="Enterprise Platform"
      title="Business Portal"
      description="An all-in-one enterprise portal that unifies business operations, automates workflows, and provides a seamless experience for employees, vendors, and customers."
      gradient="from-indigo-500 to-violet-500"
      features={features}
      modules={modules}
      highlights={highlights}
    />
  );
}

