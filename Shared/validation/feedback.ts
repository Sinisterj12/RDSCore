import { Feedback } from '../types/feedback';

export const FEEDBACK_VALIDATION = {
  comment: {
    minLength: 10,
    maxLength: 1000,
    required: true,
  },
  rating: {
    min: 1,
    max: 5,
    required: true,
  }
} as const;

export const FEEDBACK_CATEGORIES = {
  SUPPORT: 'support',
  TECHNICAL: 'technical',
  RESPONSE_TIME: 'response_time',
  RESOLUTION: 'resolution',
  OTHER: 'other',
} as const;

export type FeedbackCategory = typeof FEEDBACK_CATEGORIES[keyof typeof FEEDBACK_CATEGORIES];

export function validateFeedback(feedback: Partial<Feedback>): string | null {
  if (!feedback.comment && FEEDBACK_VALIDATION.comment.required) {
    return 'Feedback comment is required';
  }
  
  if (feedback.comment) {
    if (feedback.comment.length < FEEDBACK_VALIDATION.comment.minLength) {
      return `Comment must be at least ${FEEDBACK_VALIDATION.comment.minLength} characters`;
    }
    if (feedback.comment.length > FEEDBACK_VALIDATION.comment.maxLength) {
      return `Comment must be no more than ${FEEDBACK_VALIDATION.comment.maxLength} characters`;
    }
  }

  if (feedback.rating !== undefined) {
    if (feedback.rating < FEEDBACK_VALIDATION.rating.min || 
        feedback.rating > FEEDBACK_VALIDATION.rating.max) {
      return `Rating must be between ${FEEDBACK_VALIDATION.rating.min} and ${FEEDBACK_VALIDATION.rating.max}`;
    }
  }

  return null;
}
