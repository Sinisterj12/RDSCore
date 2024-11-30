export interface Alert {
  id: string;
  message: string;
  type: 'info' | 'warning' | 'error' | 'success';
  createdAt: string;
  expiresAt?: string;
}
