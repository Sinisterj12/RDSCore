import { Device, DeviceCategoryInfo } from '../types';
import {
  Printer,
  CreditCard,
  Scan,
  Monitor,
  Shield,
  Network,
  Smartphone,
  Tag,
  TouchpadIcon,
} from 'lucide-react';

export const deviceCategories: DeviceCategoryInfo[] = [
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
    description: 'POS terminals and registers',
  },
  {
    id: 'firewall',
    name: 'Firewalls',
    icon: 'Shield',
    description: 'Network security devices',
  },
  {
    id: 'switch',
    name: 'Switches',
    icon: 'Network',
    description: 'Network switches',
  },
  {
    id: 'handheld',
    name: 'Handhelds',
    icon: 'Smartphone',
    description: 'Mobile scanners and handhelds',
  },
  {
    id: 'esl',
    name: 'ESLs',
    icon: 'Tag',
    description: 'Electronic shelf labels',
  },
  {
    id: 'touchscreen',
    name: 'Touchscreens',
    icon: 'TouchpadIcon',
    description: 'Touch display monitors',
  },
];

export const initialDevices: Device[] = [
  // Printers
  {
    id: 'printer-1',
    name: 'Epson TM-H6000III',
    model: 'TM-H6000III',
    category: 'printer',
    manufacturer: 'Epson',
    isActive: true,
  },
  {
    id: 'printer-2',
    name: 'Epson TM-H6000IV',
    model: 'TM-H6000IV',
    category: 'printer',
    manufacturer: 'Epson',
    isActive: true,
  },
  // Pinpads
  {
    id: 'pinpad-1',
    name: 'Equinox L5300',
    model: 'L5300',
    category: 'pinpad',
    manufacturer: 'Equinox',
    isActive: true,
  },
  {
    id: 'pinpad-2',
    name: 'Verifone MX915',
    model: 'MX915',
    category: 'pinpad',
    manufacturer: 'Verifone',
    isActive: true,
  },
  // Registers
  {
    id: 'register-1',
    name: 'Fujitsu TP3K',
    model: 'TP3K',
    category: 'register',
    manufacturer: 'Fujitsu',
    isActive: true,
  },
  {
    id: 'register-2',
    name: 'NCR XR7',
    model: 'XR7',
    category: 'register',
    manufacturer: 'NCR',
    isActive: true,
  },
];