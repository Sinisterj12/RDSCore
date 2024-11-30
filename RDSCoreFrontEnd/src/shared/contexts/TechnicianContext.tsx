import React, { createContext, useContext, useState } from 'react';
import type { Technician } from '../../customer/types';

interface TechnicianContextType {
  technicians: Technician[];
  addTechnician: (tech: Omit<Technician, 'id'>) => void;
  updateTechnician: (tech: Technician) => void;
  deleteTechnician: (id: string) => void;
}

const TechnicianContext = createContext<TechnicianContextType | undefined>(undefined);

// Initial mock data
const initialTechnicians: Technician[] = [
  {
    id: '1',
    name: 'John Smith',
    email: 'john.smith@rdscore.com',
    phone: '(555) 123-4567',
    status: 'available',
    specialty: ['printer', 'register'],
    currentTask: 'Reviewing POS system alerts',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    email: 'sarah.j@rdscore.com',
    phone: '(555) 234-5678',
    status: 'busy',
    specialty: ['network', 'security'],
    currentTask: 'Troubleshooting network issues at Store #123',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
  }
];

export const TechnicianProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [technicians, setTechnicians] = useState<Technician[]>(initialTechnicians);

  const addTechnician = (tech: Omit<Technician, 'id'>) => {
    const newTech = {
      ...tech,
      id: String(Date.now())
    };
    setTechnicians(prev => [...prev, newTech]);
  };

  const updateTechnician = (tech: Technician) => {
    setTechnicians(prev => prev.map(t => t.id === tech.id ? tech : t));
  };

  const deleteTechnician = (id: string) => {
    setTechnicians(prev => prev.filter(t => t.id !== id));
  };

  return (
    <TechnicianContext.Provider value={{
      technicians,
      addTechnician,
      updateTechnician,
      deleteTechnician
    }}>
      {children}
    </TechnicianContext.Provider>
  );
};

export const useTechnicians = () => {
  const context = useContext(TechnicianContext);
  if (context === undefined) {
    throw new Error('useTechnicians must be used within a TechnicianProvider');
  }
  return context;
};
