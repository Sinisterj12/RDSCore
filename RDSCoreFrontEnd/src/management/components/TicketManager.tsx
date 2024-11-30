import React, { useState } from 'react';
import { Search, Filter, MoreVertical, Calendar, MapPin, User } from 'lucide-react';

// Mock data for frontend development
const MOCK_TICKETS = [
  {
    id: 'TK-001',
    store: 'Store #123',
    location: 'Atlanta, GA',
    issue: 'POS System Error',
    status: 'open',
    priority: 'high',
    assignedTo: 'John Smith',
    created: '2024-03-30T10:30:00',
    lastUpdated: '2024-03-30T14:45:00',
    description: 'Register 2 showing network connectivity issues'
  },
  {
    id: 'TK-002',
    store: 'Store #456',
    location: 'Miami, FL',
    issue: 'Printer Offline',
    status: 'in_progress',
    priority: 'medium',
    assignedTo: 'Sarah Johnson',
    created: '2024-03-30T09:15:00',
    lastUpdated: '2024-03-30T13:20:00',
    description: 'Receipt printer not responding after power outage'
  }
];

const TicketManager: React.FC = () => {
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [tickets] = useState(MOCK_TICKETS);

  // Filter tickets based on status and search query
  const filteredTickets = tickets.filter(ticket => {
    const matchesStatus = filterStatus === 'all' || ticket.status === filterStatus;
    const matchesSearch = 
      searchQuery === '' ||
      ticket.store.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.issue.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-white">Ticket Management</h1>
          <p className="text-gray-400">Manage and track support tickets across all locations</p>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-white rounded-lg p-4 mb-6 flex items-center justify-between">
          <div className="flex items-center flex-1 max-w-md">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search tickets by ID, store, or description..."
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Status</option>
              <option value="open">Open</option>
              <option value="in_progress">In Progress</option>
              <option value="resolved">Resolved</option>
              <option value="closed">Closed</option>
            </select>
            
            <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200">
              <Filter className="h-5 w-5 text-gray-600" />
              <span>More Filters</span>
            </button>
          </div>
        </div>

        {/* Tickets List */}
        <div className="bg-white rounded-lg border-2 border-blue-200">
          <div className="divide-y divide-gray-200">
            {filteredTickets.map((ticket) => (
              <div key={ticket.id} className="p-6 hover:bg-gray-50">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3">
                      <span className="text-lg font-semibold text-gray-900">#{ticket.id}</span>
                      <span className={`px-3 py-1 text-sm rounded-full ${
                        ticket.priority === 'high' ? 'bg-red-100 text-red-800' :
                        ticket.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {ticket.priority.charAt(0).toUpperCase() + ticket.priority.slice(1)} Priority
                      </span>
                      <span className={`px-3 py-1 text-sm rounded-full ${
                        ticket.status === 'open' ? 'bg-blue-100 text-blue-800' :
                        ticket.status === 'in_progress' ? 'bg-purple-100 text-purple-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {ticket.status.split('_').map(word => 
                          word.charAt(0).toUpperCase() + word.slice(1)
                        ).join(' ')}
                      </span>
                    </div>
                    
                    <h3 className="mt-2 text-lg font-medium text-gray-900">{ticket.issue}</h3>
                    <p className="mt-1 text-sm text-gray-500">{ticket.description}</p>
                    
                    <div className="mt-4 flex items-center space-x-6 text-sm text-gray-500">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {ticket.store} - {ticket.location}
                      </div>
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        Assigned to {ticket.assignedTo}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        Updated {new Date(ticket.lastUpdated).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                  
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <MoreVertical className="h-5 w-5 text-gray-400" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketManager;
