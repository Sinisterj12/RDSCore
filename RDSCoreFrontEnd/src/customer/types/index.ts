export interface Technician {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: 'available' | 'busy' | 'offline';
  specialty: string[];
  avatar?: string;
  currentTask?: string;
}
