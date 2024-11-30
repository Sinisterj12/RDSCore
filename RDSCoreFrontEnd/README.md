![RDS Core Logo](https://via.placeholder.com/150)

![npm](https://img.shields.io/badge/npm-v1.0.0-blue)
![license](https://img.shields.io/badge/license-MIT-green)
![build](https://img.shields.io/badge/build-passing-brightgreen)

# RDS Core Support System

A comprehensive technical support system consisting of two main applications:
1. Customer Portal - For end-users to submit and track support tickets
2. Management Portal - For RDS Core staff to manage tickets and remote technicians

## Key Files and Directories

### Customer Portal
Main files and directories for the customer-facing interface:

```
src/customer/
├── pages/
│   └── Dashboard.tsx       # Main customer dashboard with tickets, alerts, and stats
├── components/
│   ├── Header.tsx         # Navigation and branding
│   ├── AlertConsole.tsx   # System alerts display
│   ├── DeviceSelector.tsx # Device management interface
│   ├── FeedbackModal.tsx  # Customer feedback form
│   ├── RDSTeam.tsx        # Team information display
│   └── SupportInfo.tsx    # Contact information component
└── data/
    └── devices.ts         # Device categories and initial data
```

### Management Portal
Main files and directories for the management interface:

```
src/management/
├── pages/
│   └── Dashboard.tsx      # Main management dashboard with tech overview
└── components/           
    └── TeamManager.tsx    # Manage team members and assignments
```

### Shared Code
Common code used by both portals:

```
src/shared/
├── api/                  # API integration layer
├── contexts/             # Context providers for shared state
└── types/                # Shared TypeScript interfaces
```

### Main Application Files

```
src/
├── App.tsx               # Main application component with routing
├── main.tsx              # Application entry point
└── index.css             # Global styles
```

## Development Setup

### Prerequisites
- Node.js 18+
- npm 9+

### Setup
1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Access the applications:
- Customer Portal: http://localhost:5173/
- Management Portal: http://localhost:5173/management

## Architecture

The system uses a monorepo approach where both applications share the same codebase but are logically separated. This allows for:
- Code sharing between applications
- Single deployment pipeline
- Consistent development experience
- Easier maintenance of shared components

### Communication
- Both portals communicate through a shared API layer
- Real-time updates using WebSocket connections
