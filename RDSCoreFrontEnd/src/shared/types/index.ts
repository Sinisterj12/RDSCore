// Shared types between customer and management portals

export interface Ticket {
  id: string;
  title: string;
  description: string;
  status: 'open' | 'in_progress' | 'resolved' | 'closed';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  createdAt: string;
  updatedAt: string;
  customerId: string;
  assignedTechId?: string;
}

export interface Technician {
  id: string;
  name: string;
  email: string;
  status: 'available' | 'busy' | 'offline';
  activeTickets: string[];
  specialties: string[];
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  company: string;
  devices: Device[];
}

export interface Device {
  id: string;
  type: string;
  model: string;
  serialNumber: string;
  lastMaintenance?: string;
}

export interface SystemAlert {
  id: string;
  message: string;
  type: 'info' | 'warning' | 'error' | 'success';
  createdAt: string;
  expiresAt?: string;
}
