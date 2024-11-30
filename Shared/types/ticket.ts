export interface Ticket {
  id: string;
  subject: string;
  message: string;
  status: 'open' | 'in-progress' | 'resolved' | 'closed';
  createdAt: string;
  updatedAt: string;
  customerId: string;
  technicianId?: string;
  priority: 'low' | 'medium' | 'high' | 'urgent';
}
