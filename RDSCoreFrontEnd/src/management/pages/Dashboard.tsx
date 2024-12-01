import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Ticket, MessageCircle, Bell, Store, Server, Activity } from 'lucide-react';
import TicketManager from '../components/TicketManager';
import TeamManager from '../components/TeamManager';
import DashboardCard from '../components/DashboardCard';
import StatusMetrics from '../components/StatusMetrics';

interface ManagementSection {
  id: string;
  name: string;
  description: string;
  icon: React.ElementType;
  stats?: string;
  color: string;
}

const ManagementDashboard: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const sections: ManagementSection[] = [
    {
      id: 'tickets',
      name: 'Ticket Management',
      description: 'View and manage support tickets, assign technicians, and track resolution status',
      icon: Ticket,
      stats: '24 Active',
      color: 'text-blue-500'
    },
    {
      id: 'team',
      name: 'Team Management',
      description: 'Manage technician profiles, availability, and assignments',
      icon: Users,
      stats: '8 Online',
      color: 'text-green-500'
    },
    {
      id: 'stores',
      name: 'Store Management',
      description: 'Configure store settings, manage locations and equipment',
      icon: Store,
      stats: '156 Active',
      color: 'text-purple-500'
    },
    {
      id: 'alerts',
      name: 'Alert Management',
      description: 'Configure system alerts, maintenance notifications, and customer communications',
      icon: Bell,
      stats: '3 Active',
      color: 'text-yellow-500'
    },
    {
      id: 'system',
      name: 'System Health',
      description: 'Monitor system performance, view logs, and manage configurations',
      icon: Server,
      stats: '98% Uptime',
      color: 'text-emerald-500'
    },
    {
      id: 'support',
      name: 'Support Center',
      description: 'Access support resources, documentation, and communication tools',
      icon: MessageCircle,
      stats: '2m Avg. Response',
      color: 'text-pink-500'
    }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'tickets':
        return <TicketManager />;
      case 'team':
        return <TeamManager />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-3xl font-bold text-white"
            >
              Management Dashboard
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 mt-2"
            >
              Monitor and manage your RDS system
            </motion.p>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-4"
          >
            <div className="flex items-center space-x-2 bg-gray-800/50 rounded-lg px-4 py-2 border border-gray-700/30">
              <Activity className="h-5 w-5 text-green-400" />
              <span className="text-gray-300">System Status: Operational</span>
            </div>
          </motion.div>
        </div>

        {/* Status Metrics */}
        <StatusMetrics />

        {/* Main Content */}
        <AnimatePresence mode="wait">
          {activeSection ? (
            <motion.div
              key="content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mb-8"
            >
              <button
                onClick={() => setActiveSection(null)}
                className="mb-4 text-gray-400 hover:text-white flex items-center space-x-2"
              >
                <span>← Back to Dashboard</span>
              </button>
              {renderContent()}
            </motion.div>
          ) : (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {sections.map((section) => (
                <DashboardCard
                  key={section.id}
                  title={section.name}
                  icon={<section.icon className={`h-6 w-6 ${section.color}`} />}
                  description={section.description}
                  stats={section.stats}
                  color={section.color}
                  onClick={() => setActiveSection(section.id)}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ManagementDashboard;
