'use client';

import { 
  Layout, 
  CheckSquare, 
  Users, 
  Calendar, 
  MessageSquare, 
  PieChart,
  Folders,
  Zap
} from 'lucide-react';
import { ProductTemplate } from '@/components';

const features = [
  {
    icon: Layout,
    title: 'Project Dashboard',
    description: 'Intuitive dashboards providing real-time visibility into project status and metrics.',
  },
  {
    icon: CheckSquare,
    title: 'Task Management',
    description: 'Create, assign, and track tasks with dependencies, priorities, and deadlines.',
  },
  {
    icon: Calendar,
    title: 'Timeline & Gantt',
    description: 'Visual project timelines with drag-and-drop Gantt chart functionality.',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Real-time collaboration with comments, mentions, and file sharing.',
  },
  {
    icon: PieChart,
    title: 'Resource Planning',
    description: 'Allocate resources efficiently with workload balancing and capacity planning.',
  },
  {
    icon: MessageSquare,
    title: 'Communication Hub',
    description: 'Integrated messaging, video calls, and discussion boards for seamless communication.',
  },
];

const modules = [
  { name: 'Project Portfolio', description: 'Manage multiple projects with portfolio-level insights' },
  { name: 'Task Boards', description: 'Kanban, list, and calendar views for task management' },
  { name: 'Time Tracking', description: 'Log hours, track billable time, and generate timesheets' },
  { name: 'Document Management', description: 'Centralized file storage with version control' },
  { name: 'Reporting & Analytics', description: 'Custom reports, dashboards, and data exports' },
  { name: 'Automation', description: 'Workflow automation and recurring task creation' },
  { name: 'Client Portal', description: 'External access for clients to view project progress' },
  { name: 'Mobile App', description: 'Full-featured mobile app for on-the-go project management' },
];

const highlights = [
  'Unlimited projects',
  'Agile & Waterfall support',
  'Custom workflows',
  'Time tracking built-in',
  'Client collaboration',
  'Slack & Teams integration',
];

export default function ProjectHubPage() {
  return (
    <ProductTemplate
      subtitle="Project Management"
      title="ProjectHub"
      description="A powerful project management platform that helps teams plan, execute, and deliver projects on time and within budget with complete visibility and control."
      gradient="from-purple-500 to-pink-500"
      features={features}
      modules={modules}
      highlights={highlights}
    />
  );
}

