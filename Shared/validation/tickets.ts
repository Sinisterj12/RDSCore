export const TICKET_VALIDATION = {
  subject: {
    minLength: 5,
    maxLength: 100,
    required: true,
  },
  message: {
    minLength: 10,
    maxLength: 1000,
    required: true,
  },
  priority: {
    required: true,
    allowedValues: ['low', 'medium', 'high', 'urgent'] as const,
  },
} as const;

export function validateTicketSubject(subject: string): string | null {
  if (!subject && TICKET_VALIDATION.subject.required) {
    return 'Subject is required';
  }
  if (subject.length < TICKET_VALIDATION.subject.minLength) {
    return `Subject must be at least ${TICKET_VALIDATION.subject.minLength} characters`;
  }
  if (subject.length > TICKET_VALIDATION.subject.maxLength) {
    return `Subject must be no more than ${TICKET_VALIDATION.subject.maxLength} characters`;
  }
  return null;
}

export function validateTicketMessage(message: string): string | null {
  if (!message && TICKET_VALIDATION.message.required) {
    return 'Message is required';
  }
  if (message.length < TICKET_VALIDATION.message.minLength) {
    return `Message must be at least ${TICKET_VALIDATION.message.minLength} characters`;
  }
  if (message.length > TICKET_VALIDATION.message.maxLength) {
    return `Message must be no more than ${TICKET_VALIDATION.message.maxLength} characters`;
  }
  return null;
}
