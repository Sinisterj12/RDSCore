import React, { useState } from 'react';
import { Users, MessageSquare, MessageCircle } from 'lucide-react';
import AlertConsole from '../components/AlertConsole';
import SupportInfo from '../components/SupportInfo';
import FeedbackModal from '../components/FeedbackModal';
import RDSTeam from '../components/RDSTeam';

const CustomerDashboard: React.FC = () => {
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);

  const stats = [
    { 
      name: 'Open Tickets', 
      value: '12', 
      icon: MessageSquare, 
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200'
    },
    { 
      name: 'Active Technicians', 
      value: '8', 
      icon: Users, 
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    { 
      name: 'Submit Feedback', 
      value: 'Click Here', 
      icon: MessageCircle, 
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      onClick: () => setIsFeedbackModalOpen(true)
    }
  ];

  const mockAlerts = [
    {
      id: '1',
      message: 'System maintenance scheduled for tonight at 2 AM EST',
      type: 'info',
      createdAt: new Date().toISOString(),
    },
    {
      id: '2',
      message: 'New firmware update available for Epson TM-H6000V printers',
      type: 'warning',
      createdAt: new Date().toISOString(),
    }
  ];

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="space-y-6">
        <AlertConsole 
          alerts={mockAlerts} 
          onDismiss={(id) => console.log('Dismissed alert:', id)} 
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <button
                key={stat.name}
                onClick={stat.onClick}
                className={`${stat.bgColor} ${stat.borderColor} border-2 rounded-lg p-6 transition-transform hover:scale-102 hover:shadow-lg ${stat.onClick ? 'cursor-pointer' : 'cursor-default'}`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-800">{stat.name}</p>
                    <p className="text-2xl font-bold mt-1">{stat.value}</p>
                  </div>
                  <Icon className={`w-8 h-8 ${stat.color}`} />
                </div>
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white border-2 border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Activity</h3>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                  <p className="text-sm">Ticket #{i} updated - Awaiting customer response</p>
                </div>
              ))}
            </div>
          </div>
          
          <SupportInfo 
            phone="1-800-RDS-HELP"
            email="support@rdscore.com"
          />
        </div>

        <RDSTeam />

        {isFeedbackModalOpen && (
          <FeedbackModal 
            isOpen={isFeedbackModalOpen}
            onClose={() => setIsFeedbackModalOpen(false)}
          />
        )}
      </div>
    </main>
  );
};

export default CustomerDashboard;
