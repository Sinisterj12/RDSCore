// CRM API Service

interface CRMTicket {
    id: string;
    subject: string;
    status: string;
    priority: string;
    customer: {
        store: string;
        location: string;
    };
    // Add other fields based on your CRM's API response
}

class CRMService {
    private apiKey: string;
    private apiUrl: string;

    constructor() {
        this.apiKey = import.meta.env.VITE_CRM_API_KEY;
        this.apiUrl = import.meta.env.VITE_CRM_API_URL;
    }

    private getHeaders() {
        return {
            'Authorization': `Bearer ${this.apiKey}`,
            'Content-Type': 'application/json'
        };
    }

    // Fetch tickets from CRM
    async getTickets(): Promise<CRMTicket[]> {
        try {
            const response = await fetch(`${this.apiUrl}/tickets`, {
                headers: this.getHeaders()
            });

            if (!response.ok) {
                throw new Error('Failed to fetch tickets from CRM');
            }

            const tickets = await response.json();
            return this.transformTickets(tickets);
        } catch (error) {
            console.error('Error fetching CRM tickets:', error);
            throw error;
        }
    }

    // Get single ticket details
    async getTicketDetails(ticketId: string): Promise<CRMTicket> {
        try {
            const response = await fetch(`${this.apiUrl}/tickets/${ticketId}`, {
                headers: this.getHeaders()
            });

            if (!response.ok) {
                throw new Error('Failed to fetch ticket details from CRM');
            }

            return response.json();
        } catch (error) {
            console.error(`Error fetching ticket ${ticketId}:`, error);
            throw error;
        }
    }

    // Transform CRM ticket format to our app's format
    private transformTickets(crmTickets: any[]): CRMTicket[] {
        return crmTickets.map(ticket => ({
            id: ticket.id,
            subject: ticket.subject || ticket.title,
            status: ticket.status.toLowerCase(),
            priority: ticket.priority.toLowerCase(),
            customer: {
                store: ticket.store || ticket.location,
                location: ticket.city || ticket.store_location
            }
            // Add more field mappings based on your CRM's response format
        }));
    }

    // Update ticket status
    async updateTicketStatus(ticketId: string, status: string): Promise<CRMTicket> {
        try {
            const response = await fetch(`${this.apiUrl}/tickets/${ticketId}`, {
                method: 'PATCH',
                headers: this.getHeaders(),
                body: JSON.stringify({ status })
            });

            if (!response.ok) {
                throw new Error('Failed to update ticket status');
            }

            return response.json();
        } catch (error) {
            console.error(`Error updating ticket ${ticketId}:`, error);
            throw error;
        }
    }
}

export const crmService = new CRMService();
