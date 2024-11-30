export const API_ENDPOINTS = {
    TICKETS: '/tickets',
    TECHNICIANS: '/technicians',
    STORES: '/stores',
    CRM: '/crm'
} as const;

export const API_ROUTES = {
    // Ticket routes
    CREATE_TICKET: `${API_ENDPOINTS.TICKETS}/create`,
    UPDATE_TICKET: `${API_ENDPOINTS.TICKETS}/update`,
    GET_TICKET: `${API_ENDPOINTS.TICKETS}/get`,
    LIST_TICKETS: `${API_ENDPOINTS.TICKETS}/list`,
    
    // Technician routes
    LIST_TECHNICIANS: `${API_ENDPOINTS.TECHNICIANS}/list`,
    UPDATE_TECHNICIAN_STATUS: `${API_ENDPOINTS.TECHNICIANS}/status`,
    
    // Store routes
    GET_STORE_CONFIG: `${API_ENDPOINTS.STORES}/config`,
    UPDATE_STORE_CONFIG: `${API_ENDPOINTS.STORES}/config/update`,
    
    // CRM routes
    GET_CUSTOMER: `${API_ENDPOINTS.CRM}/customer`,
    UPDATE_CUSTOMER: `${API_ENDPOINTS.CRM}/customer/update`
} as const;
