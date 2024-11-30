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
  category: DeviceCategory;
  model: string;
  serialNumber: string;
  status: 'active' | 'inactive' | 'maintenance';
  manufacturer: string;
  lastMaintenance?: string;
  notes?: string;
  image?: string;
}

export interface DeviceCategoryInfo {
  id: DeviceCategory;
  name: string;
  icon: string;
  description: string;
}
