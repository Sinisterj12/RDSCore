// Dashboard section IDs
export const DASHBOARD_SECTIONS = {
  TICKETS: 'tickets',
  TEAM: 'team',
  DEVICES: 'devices',
  SETTINGS: 'settings',
  ALERTS: 'alerts',
  STORES: 'stores',
  SYSTEM: 'system',
} as const;

export type DashboardSection = typeof DASHBOARD_SECTIONS[keyof typeof DASHBOARD_SECTIONS];

// Section permissions (who can access what)
export const SECTION_PERMISSIONS = {
  [DASHBOARD_SECTIONS.TICKETS]: ['customer', 'technician', 'admin'],
  [DASHBOARD_SECTIONS.TEAM]: ['technician', 'admin'],
  [DASHBOARD_SECTIONS.DEVICES]: ['customer', 'technician', 'admin'],
  [DASHBOARD_SECTIONS.SETTINGS]: ['admin'],
  [DASHBOARD_SECTIONS.ALERTS]: ['customer', 'technician', 'admin'],
  [DASHBOARD_SECTIONS.STORES]: ['admin'],
  [DASHBOARD_SECTIONS.SYSTEM]: ['admin'],
} as const;
