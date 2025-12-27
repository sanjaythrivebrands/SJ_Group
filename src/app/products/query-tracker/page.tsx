'use client';

import { 
  MessageCircle, 
  Ticket, 
  Clock, 
  BarChart3, 
  Bot, 
  Users,
  Inbox,
  Zap
} from 'lucide-react';
import { ProductTemplate } from '@/components';

const features = [
  {
    icon: Ticket,
    title: 'Ticket Management',
    description: 'Centralized ticketing system for managing all customer queries and requests.',
  },
  {
    icon: MessageCircle,
    title: 'Omnichannel Support',
    description: 'Handle queries from email, chat, phone, and social media in one place.',
  },
  {
    icon: Clock,
    title: 'SLA Management',
    description: 'Define and track service level agreements with automatic escalations.',
  },
  {
    icon: Bot,
    title: 'AI Assistance',
    description: 'AI-powered suggestions and automated responses for faster resolution.',
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    description: 'Real-time metrics on response times, resolution rates, and customer satisfaction.',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Internal notes, mentions, and ticket assignments for team coordination.',
  },
];

const modules = [
  { name: 'Ticket Queue', description: 'Prioritized queue with smart sorting and filtering' },
  { name: 'Knowledge Base', description: 'Self-service portal with searchable articles' },
  { name: 'Live Chat', description: 'Real-time chat widget for website integration' },
  { name: 'Email Integration', description: 'Convert emails to tickets automatically' },
  { name: 'Automation Rules', description: 'Auto-assign, tag, and route tickets based on rules' },
  { name: 'Customer Portal', description: 'Branded portal for customers to track their queries' },
  { name: 'Reporting', description: 'Detailed reports on team performance and trends' },
  { name: 'Feedback Collection', description: 'CSAT surveys and feedback forms' },
];

const highlights = [
  'Omnichannel support',
  'AI-powered responses',
  'SLA tracking',
  'Knowledge base',
  'Customer portal',
  'Advanced analytics',
];

export default function QueryTrackerPage() {
  return (
    <ProductTemplate
      subtitle="Customer Support"
      title="Query Tracker"
      description="A smart customer query management system that helps support teams resolve issues faster, improve customer satisfaction, and gain insights into support operations."
      gradient="from-orange-500 to-red-500"
      features={features}
      modules={modules}
      highlights={highlights}
    />
  );
}

