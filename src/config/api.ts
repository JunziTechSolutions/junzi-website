export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://formhero-339761699392.us-south1.run.app';

export const API_ENDPOINTS = {
  health: '/api/health',
  forms: '/api/forms',
} as const;

export const API_CONFIG = {
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
}; 