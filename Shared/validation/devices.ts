import { Device, DeviceCategory } from '../types/device';
import { DEVICE_CATEGORIES } from '../constants/devices';

export const DEVICE_VALIDATION = {
  serialNumber: {
    pattern: /^[A-Z0-9]{6,20}$/,
    required: true,
    message: 'Serial number must be 6-20 characters (letters and numbers only)',
  },
  model: {
    minLength: 2,
    maxLength: 50,
    required: true,
  },
  name: {
    minLength: 2,
    maxLength: 100,
    required: true,
  },
} as const;

export function validateSerialNumber(serialNumber: string): string | null {
  if (!serialNumber && DEVICE_VALIDATION.serialNumber.required) {
    return 'Serial number is required';
  }
  if (!DEVICE_VALIDATION.serialNumber.pattern.test(serialNumber)) {
    return DEVICE_VALIDATION.serialNumber.message;
  }
  return null;
}

// Common device status checks
export function isDeviceActive(device: Device): boolean {
  return device.status === 'active';
}

export function needsMaintenance(device: Device, daysThreshold: number = 90): boolean {
  if (!device.lastMaintenance) return true;
  
  const lastMaintenance = new Date(device.lastMaintenance);
  const daysSinceLastMaintenance = Math.floor(
    (Date.now() - lastMaintenance.getTime()) / (1000 * 60 * 60 * 24)
  );
  
  return daysSinceLastMaintenance >= daysThreshold;
}
