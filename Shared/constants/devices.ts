import { DeviceCategory, DeviceCategoryInfo } from '../types/device';

export const DEVICE_CATEGORIES: DeviceCategoryInfo[] = [
  {
    id: 'printer',
    name: 'Printers',
    icon: 'Printer',
    description: 'Receipt and document printers',
  },
  {
    id: 'pinpad',
    name: 'Pinpads',
    icon: 'CreditCard',
    description: 'Payment terminals and card readers',
  },
  {
    id: 'scanner',
    name: 'Scanner/Scales',
    icon: 'Scan',
    description: 'Barcode scanners and weighing scales',
  },
  {
    id: 'register',
    name: 'Registers',
    icon: 'Monitor',
    description: 'Point of sale terminals',
  },
  {
    id: 'firewall',
    name: 'Firewalls',
    icon: 'Shield',
    description: 'Network security devices',
  },
  {
    id: 'switch',
    name: 'Network Switches',
    icon: 'Network',
    description: 'Network infrastructure',
  },
  {
    id: 'handheld',
    name: 'Handhelds',
    icon: 'Smartphone',
    description: 'Mobile scanning devices',
  },
  {
    id: 'esl',
    name: 'ESL Tags',
    icon: 'Tag',
    description: 'Electronic shelf labels',
  },
  {
    id: 'touchscreen',
    name: 'Touchscreens',
    icon: 'TouchpadIcon',
    description: 'Touch-enabled displays',
  },
] as const;

// Helper function to check if a category exists
export function isValidDeviceCategory(category: string): category is DeviceCategory {
  return DEVICE_CATEGORIES.some(c => c.id === category);
}
