import { DeviceCategory } from '../types/device';

// Map of supported manufacturers for each device category
export const DEVICE_MANUFACTURERS: Record<DeviceCategory, string[]> = {
  printer: ['Epson', 'Star', 'Zebra', 'Brother', 'HP'],
  pinpad: ['Verifone', 'Ingenico', 'PAX', 'Clover'],
  scanner: ['Zebra', 'Honeywell', 'Datalogic', 'Symbol'],
  register: ['HP', 'Dell', 'Lenovo', 'Toshiba'],
  firewall: ['Cisco', 'Fortinet', 'Palo Alto', 'SonicWall'],
  switch: ['Cisco', 'HP', 'Juniper', 'Aruba'],
  handheld: ['Zebra', 'Honeywell', 'Datalogic'],
  esl: ['SoluM', 'Hanshow', 'Pricer'],
  touchscreen: ['Elo', 'HP', 'Dell', 'ViewSonic'],
} as const;

// Common model prefixes for each manufacturer
export const MODEL_PREFIXES = {
  Epson: ['TM-', 'LQ-'],
  Star: ['TSP', 'SP'],
  Zebra: ['ZD', 'ZT', 'TC'],
  Verifone: ['VX', 'P'],
  Ingenico: ['iCT', 'iWL', 'Lane'],
  Cisco: ['ISR', 'ASA', 'Catalyst'],
} as const;

// Function to validate if a manufacturer is supported for a device category
export function isManufacturerSupported(
  category: DeviceCategory,
  manufacturer: string
): boolean {
  return DEVICE_MANUFACTURERS[category]?.includes(manufacturer) ?? false;
}
