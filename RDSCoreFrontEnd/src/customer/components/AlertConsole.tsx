import React from 'react';
import { Bell, XCircle } from 'lucide-react';
import { Alert } from '../types';

interface AlertConsoleProps {
  alerts: Alert[];
  onDismiss: (id: string) => void;
}

const AlertConsole: React.FC<AlertConsoleProps> = ({ alerts, onDismiss }) => {
  return (
    <div className="bg-gray-900 text-white rounded-lg p-4 mb-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Bell className="w-5 h-5" />
          <h3 className="text-lg font-semibold">Tech Support Alerts</h3>
        </div>
        <span className="text-sm text-gray-400">{alerts.length} messages</span>
      </div>
      <div className="space-y-3 max-h-48 overflow-y-auto">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className={`flex items-start justify-between p-3 rounded ${
              alert.type === 'error' ? 'bg-red-900/50' :
              alert.type === 'warning' ? 'bg-yellow-900/50' :
              alert.type === 'success' ? 'bg-green-900/50' :
              'bg-blue-900/50'
            }`}
          >
            <p className="text-sm">{alert.message}</p>
            <button
              onClick={() => onDismiss(alert.id)}
              className="text-gray-400 hover:text-white"
            >
              <XCircle className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlertConsole;