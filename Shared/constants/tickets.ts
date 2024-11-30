// Ticket ID format
export const TICKET_PREFIX = 'TK';

// Ticket filters
export const TICKET_FILTERS = {
  STATUS: 'status',
  PRIORITY: 'priority',
  STORE: 'store',
  TECHNICIAN: 'technician',
  DATE: 'date',
} as const;

// Default ticket sort
export const DEFAULT_TICKET_SORT = {
  field: 'created',
  direction: 'desc'
} as const;

// Time windows for ticket metrics
export const TICKET_TIME_WINDOWS = {
  RESPONSE: 1000 * 60 * 30, // 30 minutes for initial response
  RESOLUTION: 1000 * 60 * 60 * 4, // 4 hours for resolution
} as const;
