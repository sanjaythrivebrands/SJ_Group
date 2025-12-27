'use client';

import { 
  Users, 
  Calendar, 
  FileText, 
  BarChart3, 
  Clock, 
  Award,
  CreditCard,
  UserCheck
} from 'lucide-react';
import { ProductTemplate } from '@/components';

const features = [
  {
    icon: Users,
    title: 'Employee Management',
    description: 'Comprehensive employee database with profiles, documents, and organizational hierarchy.',
  },
  {
    icon: Calendar,
    title: 'Leave Management',
    description: 'Automated leave requests, approvals, and balance tracking with policy compliance.',
  },
  {
    icon: Clock,
    title: 'Time & Attendance',
    description: 'Real-time attendance tracking with biometric integration and shift management.',
  },
  {
    icon: CreditCard,
    title: 'Payroll Processing',
    description: 'Automated payroll calculations, tax deductions, and direct deposit management.',
  },
  {
    icon: BarChart3,
    title: 'Performance Reviews',
    description: '360-degree feedback, goal tracking, and performance analytics dashboards.',
  },
  {
    icon: Award,
    title: 'Training & Development',
    description: 'Learning management system for employee training and skill development tracking.',
  },
];

const modules = [
  { name: 'Core HR', description: 'Employee records, org charts, and document management' },
  { name: 'Recruitment', description: 'Job postings, applicant tracking, and onboarding workflows' },
  { name: 'Time & Attendance', description: 'Clock in/out, overtime tracking, and shift scheduling' },
  { name: 'Leave Management', description: 'Leave policies, requests, approvals, and balance tracking' },
  { name: 'Payroll', description: 'Salary processing, tax calculations, and payment disbursement' },
  { name: 'Performance', description: 'Goals, reviews, feedback, and performance analytics' },
  { name: 'Training', description: 'Course management, certifications, and skill tracking' },
  { name: 'Employee Self-Service', description: 'Personal dashboard for employees to manage their info' },
];

const highlights = [
  'Cloud-based & On-premise options',
  'Mobile apps for iOS & Android',
  'Multi-language support',
  'GDPR compliant',
  'Real-time analytics',
  'API integrations',
];

export default function HRMSPage() {
  return (
    <ProductTemplate
      subtitle="Human Resources"
      title="HRMS Platform"
      description="A comprehensive Human Resource Management System that simplifies HR operations, enhances employee experience, and provides actionable insights for strategic decision-making."
      gradient="from-blue-500 to-cyan-500"
      features={features}
      modules={modules}
      highlights={highlights}
    />
  );
}

