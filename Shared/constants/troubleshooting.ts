import { DeviceCategory } from '../types/device';

// Common troubleshooting steps by device category
export const COMMON_ISSUES: Record<DeviceCategory, string[]> = {
  printer: [
    'Paper jam',
    'Not printing',
    'Poor print quality',
    'Offline status',
  ],
  pinpad: [
    'Not connecting',
    'Card reader error',
    'Display issues',
    'Payment declined',
  ],
  scanner: [
    'Not scanning',
    'Red light not on',
    'Beeping continuously',
    'Scale not weighing',
  ],
  register: [
    'Won\'t boot up',
    'Screen frozen',
    'Application crash',
    'Slow performance',
  ],
  firewall: [
    'Internet connectivity',
    'VPN issues',
    'Configuration errors',
  ],
  switch: [
    'Port down',
    'Network slow',
    'Link light off',
  ],
  handheld: [
    'Battery issues',
    'Won\'t scan',
    'WiFi problems',
  ],
  esl: [
    'Not updating',
    'Display blank',
    'Wrong price shown',
  ],
  touchscreen: [
    'Touch not calibrated',
    'Display flickering',
    'Touch not responding',
  ],
} as const;

// Basic troubleshooting steps that apply to all devices
export const BASIC_STEPS = [
  'Check power connection',
  'Verify cables are connected',
  'Restart the device',
  'Contact RDS Support if issue persists'
] as const;
