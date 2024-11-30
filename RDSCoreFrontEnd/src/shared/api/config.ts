// API configuration
export const API_CONFIG = {
    // This will come from environment variables in production
    BASE_URL: process.env.REACT_APP_API_URL || 'http://localhost:3001/api',
    
    // API endpoints
    ENDPOINTS: {
        TICKETS: '/tickets',
        TECHNICIANS: '/technicians',
        STORES: '/stores',
        CRM: '/crm'
    }
};
