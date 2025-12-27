'use client';

import { 
  Package, 
  QrCode, 
  MapPin, 
  Wrench, 
  BarChart3, 
  Shield,
  Bell,
  History
} from 'lucide-react';
import { ProductTemplate } from '@/components';

const features = [
  {
    icon: Package,
    title: 'Asset Inventory',
    description: 'Complete inventory of all physical and digital assets with detailed specifications.',
  },
  {
    icon: QrCode,
    title: 'QR/Barcode Scanning',
    description: 'Quick asset identification and tracking using QR codes and barcode scanning.',
  },
  {
    icon: MapPin,
    title: 'Location Tracking',
    description: 'Real-time GPS tracking for mobile assets and equipment across locations.',
  },
  {
    icon: Wrench,
    title: 'Maintenance Scheduling',
    description: 'Preventive maintenance scheduling with automated reminders and work orders.',
  },
  {
    icon: BarChart3,
    title: 'Depreciation Tracking',
    description: 'Automatic depreciation calculations and asset value reporting.',
  },
  {
    icon: History,
    title: 'Audit Trail',
    description: 'Complete history of asset movements, assignments, and modifications.',
  },
];

const modules = [
  { name: 'Asset Registry', description: 'Centralized database for all asset information' },
  { name: 'Check-in/Check-out', description: 'Track asset assignments and returns' },
  { name: 'Maintenance Management', description: 'Schedule and track maintenance activities' },
  { name: 'Depreciation Calculator', description: 'Automated depreciation and valuation' },
  { name: 'Reporting Suite', description: 'Comprehensive reports and analytics' },
  { name: 'Mobile Scanner', description: 'Mobile app for field scanning and updates' },
  { name: 'Alerts & Notifications', description: 'Automated alerts for maintenance and warranties' },
  { name: 'Integration Hub', description: 'Connect with ERP, accounting, and procurement systems' },
];

const highlights = [
  'Unlimited assets',
  'QR & barcode support',
  'GPS tracking',
  'Maintenance alerts',
  'Custom fields',
  'Multi-location support',
];

export default function AssetTrackerPage() {
  return (
    <ProductTemplate
      subtitle="Asset Management"
      title="Asset Tracker"
      description="A comprehensive asset management solution that helps organizations track, maintain, and optimize their physical and digital assets throughout their lifecycle."
      gradient="from-green-500 to-emerald-500"
      features={features}
      modules={modules}
      highlights={highlights}
    />
  );
}

