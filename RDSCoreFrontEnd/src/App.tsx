import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { TechnicianProvider } from './shared/contexts/TechnicianContext';

// Customer Portal Components
import CustomerHeader from './customer/components/Header';
import CustomerDashboard from './customer/pages/Dashboard';
import DeviceSelector from './customer/components/DeviceSelector';
import RDSTeam from './customer/components/RDSTeam';

// Management Portal Components
import ManagementDashboard from './management/pages/Dashboard';
import TicketManager from './management/components/TicketManager';

function App() {
  return (
    <TechnicianProvider>
      <Router>
        {/* Customer Portal Layout */}
        <Routes>
          {/* Customer Portal Routes */}
          <Route path="/" element={
            <div className="min-h-screen bg-gray-900">
              <CustomerHeader />
              <CustomerDashboard />
            </div>
          } />
          <Route path="/devices" element={
            <div className="min-h-screen bg-gray-900">
              <CustomerHeader />
              <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <DeviceSelector />
              </main>
            </div>
          } />
          <Route path="/team" element={
            <div className="min-h-screen bg-gray-900">
              <CustomerHeader />
              <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <RDSTeam />
              </main>
            </div>
          } />

          {/* Management Portal Routes */}
          <Route path="/management" element={<ManagementDashboard />} />
          <Route path="/management/tickets" element={<TicketManager />} />
          
          {/* Catch all route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </TechnicianProvider>
  );
}

export default App;
