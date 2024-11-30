import { Alert } from '../types/alert';

export const ALERT_TYPES = {
  INFO: 'info',
  WARNING: 'warning',
  ERROR: 'error',
  SUCCESS: 'success',
} as const;

export type AlertType = typeof ALERT_TYPES[keyof typeof ALERT_TYPES];

export const ALERT_PRIORITIES = {
  LOW: 0,
  MEDIUM: 1,
  HIGH: 2,
  CRITICAL: 3,
} as const;

export const ALERT_EXPIRY = {
  INFO: 1000 * 60 * 30, // 30 minutes
  WARNING: 1000 * 60 * 60, // 1 hour
  ERROR: 1000 * 60 * 60 * 24, // 24 hours
  SUCCESS: 1000 * 60 * 15, // 15 minutes
} as const;

export function createAlert(
  message: string,
  type: AlertType = ALERT_TYPES.INFO,
  expiresIn: number = ALERT_EXPIRY[type]
): Omit<Alert, 'id'> {
  return {
    message,
    type,
    createdAt: new Date().toISOString(),
    expiresAt: new Date(Date.now() + expiresIn).toISOString(),
  };
}

export function isAlertExpired(alert: Alert): boolean {
  if (!alert.expiresAt) return false;
  return new Date(alert.expiresAt) <= new Date();
}

export function sortAlertsByPriority(alerts: Alert[]): Alert[] {
  return [...alerts].sort((a, b) => {
    const priorityA = a.type === 'error' ? 3 : 
                     a.type === 'warning' ? 2 : 
                     a.type === 'success' ? 1 : 0;
    const priorityB = b.type === 'error' ? 3 : 
                     b.type === 'warning' ? 2 : 
                     b.type === 'success' ? 1 : 0;
    return priorityB - priorityA;
  });
}
