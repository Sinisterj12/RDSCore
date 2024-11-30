import { Ticket } from '../../types/ticket';
import { Technician } from '../../types/technician';
import { StoreConfig } from '../../types/store';

export interface ApiResponse<T> {
    success: boolean;
    data?: T;
    error?: string;
    timestamp: string;
}

export interface PaginatedResponse<T> {
    items: T[];
    total: number;
    page: number;
    pageSize: number;
    hasMore: boolean;
}

export interface TicketResponse extends ApiResponse<Ticket> {}
export interface TechnicianResponse extends ApiResponse<Technician> {}
export interface StoreConfigResponse extends ApiResponse<StoreConfig> {}

export interface TicketListResponse extends ApiResponse<PaginatedResponse<Ticket>> {}
