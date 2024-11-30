// Common date/time formatting and manipulation functions
export function formatDate(date: string | Date): string {
  const d = new Date(date);
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export function formatTime(date: string | Date): string {
  const d = new Date(date);
  return d.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });
}

export function formatDuration(minutes: number): string {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
}

export function isWithinBusinessHours(date: Date = new Date()): boolean {
  const hours = date.getHours();
  const day = date.getDay();
  // Assuming business hours are 8 AM to 5 PM, Monday (1) through Friday (5)
  return day >= 1 && day <= 5 && hours >= 8 && hours < 17;
}

export function getNextBusinessDay(date: Date = new Date()): Date {
  const next = new Date(date);
  next.setDate(next.getDate() + 1);
  
  // Skip weekends
  while (next.getDay() === 0 || next.getDay() === 6) {
    next.setDate(next.getDate() + 1);
  }
  
  return next;
}
