import React from 'react';
import { motion } from 'framer-motion';

interface MetricProps {
  label: string;
  value: string | number;
  change?: number;
  color: string;
}

const Metric: React.FC<MetricProps> = ({ label, value, change, color }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-lg p-4 backdrop-blur-sm border border-gray-700/30"
  >
    <div className="flex items-center justify-between">
      <span className="text-gray-400 text-sm">{label}</span>
      {change !== undefined && (
        <span className={`text-sm ${change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
          {change > 0 ? '+' : ''}{change}%
        </span>
      )}
    </div>
    <div className="mt-2 flex items-baseline">
      <span className={`text-2xl font-semibold ${color}`}>{value}</span>
    </div>
  </motion.div>
);

const StatusMetrics: React.FC = () => {
  const metrics: MetricProps[] = [
    { label: 'System Health', value: '98%', change: 2, color: 'text-green-400' },
    { label: 'Active Tickets', value: '24', change: -5, color: 'text-blue-400' },
    { label: 'Response Time', value: '1.2m', change: -12, color: 'text-purple-400' },
    { label: 'Online Techs', value: '8', change: 0, color: 'text-yellow-400' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {metrics.map((metric, index) => (
        <Metric key={index} {...metric} />
      ))}
    </div>
  );
};

export default StatusMetrics;
