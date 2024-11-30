import React, { useState } from 'react';
import { Users, Ticket, Settings, MessageCircle, Bell, Store, Server } from 'lucide-react';
import TicketManager from '../components/TicketManager';
import TeamManager from '../components/TeamManager';

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
      color: 'text-blue-600'
    },
    {
      id: 'team',
      name: 'Team Management',
      description: 'Manage technician profiles, availability, and assignments',
      icon: Users,
      stats: '8 Online',
      color: 'text-green-600'
    },
    {
      id: 'stores',
      name: 'Store Management',
      description: 'Configure store settings, manage locations and equipment',
      icon: Store,
      stats: '156 Active',
      color: 'text-purple-600'
    },
    {
      id: 'alerts',
      name: 'Alert Management',
      description: 'Configure system alerts, maintenance notifications, and customer communications',
      icon: Bell,
      stats: '3 Active',
      color: 'text-yellow-600'
    },
    {
      id: 'feedback',
      name: 'Feedback Management',
      description: 'Review and respond to customer feedback and suggestions',
      icon: MessageCircle,
      stats: '12 New',
      color: 'text-pink-600'
    },
    {
      id: 'system',
      name: 'System Settings',
      description: 'Configure global settings, API keys, and system preferences',
      icon: Server,
      color: 'text-gray-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-white">RDS Core Management</h1>
          <p className="text-gray-400">Central operations dashboard</p>
        </div>

        {!activeSection ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className="bg-gray-800 border-2 border-gray-700 rounded-lg p-6 transition-all hover:scale-102 hover:shadow-lg hover:border-gray-600 text-left"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`p-3 rounded-lg bg-gray-700 ${section.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{section.name}</h3>
                      {section.stats && (
                        <span className="text-sm text-gray-400">{section.stats}</span>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm">{section.description}</p>
                </button>
              );
            })}
          </div>
        ) : (
          <div>
            <button
              onClick={() => setActiveSection(null)}
              className="mb-6 text-gray-400 hover:text-white flex items-center space-x-2"
            >
              <span>← Back to Dashboard</span>
            </button>
            
            {activeSection === 'tickets' && <TicketManager />}
            {activeSection === 'team' && <TeamManager />}
            {/* Other sections will be added here */}
          </div>
        )}
      </div>
    </div>
  );
};

export default ManagementDashboard;
