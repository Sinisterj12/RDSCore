// Ticket Status
export const TICKET_STATUS = {
  OPEN: 'open',
  IN_PROGRESS: 'in-progress',
  RESOLVED: 'resolved',
  CLOSED: 'closed',
} as const;

export type TicketStatus = typeof TICKET_STATUS[keyof typeof TICKET_STATUS];

// Ticket Priority
export const TICKET_PRIORITY = {
  LOW: 'low',
  MEDIUM: 'medium',
  HIGH: 'high',
  URGENT: 'urgent',
} as const;

export type TicketPriority = typeof TICKET_PRIORITY[keyof typeof TICKET_PRIORITY];

// Technician Status
export const TECHNICIAN_STATUS = {
  AVAILABLE: 'available',
  BUSY: 'busy',
  OFFLINE: 'offline',
} as const;

export type TechnicianStatus = typeof TECHNICIAN_STATUS[keyof typeof TECHNICIAN_STATUS];

// Device Status
export const DEVICE_STATUS = {
  ACTIVE: 'active',
  INACTIVE: 'inactive',
  MAINTENANCE: 'maintenance',
} as const;

export type DeviceStatus = typeof DEVICE_STATUS[keyof typeof DEVICE_STATUS];
