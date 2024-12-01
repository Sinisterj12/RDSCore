import React from 'react';
import { motion } from 'framer-motion';

interface DashboardCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  stats?: string;
  color: string;
  onClick: () => void;
  isActive?: boolean;
}

const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  icon,
  description,
  stats,
  color,
  onClick,
  isActive = false,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`relative overflow-hidden rounded-xl backdrop-blur-lg ${
        isActive 
          ? 'bg-gradient-to-br from-gray-800/90 to-gray-900/90 border-2 border-blue-500/50' 
          : 'bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/30'
      } transition-all duration-300 cursor-pointer group`}
      onClick={onClick}
    >
      {/* Glow Effect */}
      <div 
        className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 ${color} blur-xl`}
      />

      <div className="relative p-6 h-full">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className={`p-3 rounded-lg ${color} bg-opacity-10`}>
            {icon}
          </div>
          {stats && (
            <span className="px-3 py-1 text-sm rounded-full bg-gray-700/50 text-gray-300">
              {stats}
            </span>
          )}
        </div>

        {/* Content */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
          <p className="text-gray-400 text-sm">{description}</p>
        </div>

        {/* Interactive Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gray-700/30 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
      </div>
    </motion.div>
  );
};

export default DashboardCard;
