export interface Technician {
  id: string;
  name: string;
  email: string;
  proficiencies: string[];
  status: 'available' | 'busy' | 'offline';
  avatar?: string;
}
