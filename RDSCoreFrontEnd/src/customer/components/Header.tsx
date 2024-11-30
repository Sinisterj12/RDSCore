import React, { useState } from 'react';
import { Settings, Home, Wrench, Users, MessageSquare } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import CreateTicket from './CreateTicket';

const Header: React.FC = () => {
  const [isTicketModalOpen, setIsTicketModalOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Dashboard', path: '/', icon: Home },
    { name: 'Device Management', path: '/devices', icon: Wrench },
    { name: 'RDS Team', path: '/team', icon: Users },
  ];

  return (
    <>
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Settings className="w-8 h-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">RDS Core</h1>
            </div>
            <nav className="flex items-center space-x-4">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`flex items-center space-x-2 px-4 py-2 text-sm font-medium rounded-md ${
                      location.pathname === item.path
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
              <button
                onClick={() => setIsTicketModalOpen(true)}
                className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Create Ticket</span>
              </button>
            </nav>
          </div>
        </div>
      </header>
      <CreateTicket isOpen={isTicketModalOpen} onClose={() => setIsTicketModalOpen(false)} />
    </>
  );
};

export default Header;