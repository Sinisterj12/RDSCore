import React, { useState } from 'react';
import { Device, DeviceCategory } from '../types';
import { deviceCategories, initialDevices } from '../data/devices';
import * as Icons from 'lucide-react';

const DeviceSelector: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<DeviceCategory | null>(null);
  const [showAllModels, setShowAllModels] = useState(false);

  const getIcon = (iconName: string) => {
    const Icon = (Icons as any)[iconName];
    return Icon ? <Icon className="w-8 h-8" /> : <Icons.HelpCircle className="w-8 h-8" />;
  };

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-gray-100 mb-6">Select Device Category</h2>
      
      {/* Category Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {deviceCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => {
              setSelectedCategory(category.id);
              setShowAllModels(false);
            }}
            className={`
              relative p-6 rounded-lg border-2 transition-all duration-200
              ${selectedCategory === category.id 
                ? 'border-red-500 bg-gray-800 shadow-red-500/20 shadow-lg' 
                : 'border-gray-700 bg-gray-800 hover:border-red-500/50'}
            `}
          >
            <div className="flex flex-col items-center space-y-3 text-center">
              <div className={`
                p-3 rounded-full 
                ${selectedCategory === category.id ? 'text-red-500' : 'text-gray-400'}
              `}>
                {getIcon(category.icon)}
              </div>
              <span className="font-medium text-gray-200">{category.name}</span>
            </div>
          </button>
        ))}
      </div>

      {/* Selected Category Devices */}
      {selectedCategory && (
        <div className="mt-8 space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold text-gray-200">
              {deviceCategories.find(c => c.id === selectedCategory)?.name}
            </h3>
            <button
              onClick={() => setShowAllModels(!showAllModels)}
              className="text-sm text-red-400 hover:text-red-300"
            >
              {showAllModels ? 'Show Common Models' : 'View All Models'}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {initialDevices
              .filter(device => device.category === selectedCategory)
              .slice(0, showAllModels ? undefined : 3)
              .map((device) => (
                <button
                  key={device.id}
                  className="bg-gray-800 border-2 border-gray-700 p-6 rounded-lg hover:border-red-500/50 transition-all duration-200"
                >
                  <div className="flex items-center space-x-4">
                    {getIcon(deviceCategories.find(c => c.id === device.category)?.icon || 'HelpCircle')}
                    <div className="text-left">
                      <h3 className="font-semibold text-lg text-gray-200">{device.name}</h3>
                      <p className="text-sm text-gray-400">{device.manufacturer}</p>
                    </div>
                  </div>
                </button>
              ))}
          </div>
        </div>
      )}

      {/* Back Button */}
      {selectedCategory && (
        <button
          onClick={() => {
            setSelectedCategory(null);
            setShowAllModels(false);
          }}
          className="mt-6 text-sm text-red-400 hover:text-red-300 flex items-center space-x-2"
        >
          <Icons.ArrowLeft className="w-4 h-4" />
          <span>Back to Categories</span>
        </button>
      )}
    </div>
  );
};

export default DeviceSelector;