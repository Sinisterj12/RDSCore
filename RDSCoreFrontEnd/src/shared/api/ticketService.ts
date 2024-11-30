import { API_CONFIG } from './config';

// Type definitions
interface Ticket {
    id: string;
    store: string;
    issue: string;
    status: string;
    priority: string;
    // ... other ticket properties
}

class TicketService {
    private baseUrl: string;

    constructor() {
        this.baseUrl = API_CONFIG.BASE_URL + API_CONFIG.ENDPOINTS.TICKETS;
    }

    // Get all tickets
    async getTickets(): Promise<Ticket[]> {
        try {
            const response = await fetch(this.baseUrl);
            if (!response.ok) throw new Error('Failed to fetch tickets');
            return response.json();
        } catch (error) {
            console.error('Error fetching tickets:', error);
            throw error;
        }
    }

    // Get ticket by ID
    async getTicketById(id: string): Promise<Ticket> {
        try {
            const response = await fetch(`${this.baseUrl}/${id}`);
            if (!response.ok) throw new Error('Failed to fetch ticket');
            return response.json();
        } catch (error) {
            console.error(`Error fetching ticket ${id}:`, error);
            throw error;
        }
    }

    // Create new ticket
    async createTicket(ticketData: Partial<Ticket>): Promise<Ticket> {
        try {
            const response = await fetch(this.baseUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(ticketData),
            });
            if (!response.ok) throw new Error('Failed to create ticket');
            return response.json();
        } catch (error) {
            console.error('Error creating ticket:', error);
            throw error;
        }
    }

    // Update ticket
    async updateTicket(id: string, updateData: Partial<Ticket>): Promise<Ticket> {
        try {
            const response = await fetch(`${this.baseUrl}/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updateData),
            });
            if (!response.ok) throw new Error('Failed to update ticket');
            return response.json();
        } catch (error) {
            console.error(`Error updating ticket ${id}:`, error);
            throw error;
        }
    }
}

export const ticketService = new TicketService();
