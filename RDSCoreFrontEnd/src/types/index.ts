export type DeviceCategory = 
  | 'printer' 
  | 'pinpad' 
  | 'scanner' 
  | 'register' 
  | 'firewall' 
  | 'switch' 
  | 'handheld' 
  | 'esl' 
  | 'touchscreen';

export interface Device {
  id: string;
  name: string;
  model: string;
  category: DeviceCategory;
  image?: string;
  manufacturer: string;
  isActive: boolean;
}

export interface DeviceCategoryInfo {
  id: DeviceCategory;
  name: string;
  icon: string;
  description: string;
}

export interface TroubleshootingStep {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
}

export interface SupportTicket {
  id: string;
  deviceId: string;
  storeId: string;
  description: string;
  status: 'open' | 'in-progress' | 'resolved';
  createdAt: string;
  technicianId?: string;
}

export interface Alert {
  id: string;
  message: string;
  type: 'info' | 'warning' | 'error' | 'success';
  createdAt: string;
  expiresAt?: string;
}

export interface StoreConfig {
  id: string;
  name: string;
  registerType: string;
  supportPhone: string;
  supportEmail: string;
}

export interface Technician {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: 'available' | 'busy' | 'out-of-office';
  specialty: DeviceCategory[];
  avatar?: string;
}

export interface Feedback {
  id: string;
  ticketId: string;
  rating: number;
  comment: string;
  createdAt: string;
  storeId: string;
}