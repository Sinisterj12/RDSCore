# RDS Core Support System

A comprehensive technical support system consisting of two main applications:
1. Customer Portal - For end-users to submit and track support tickets
2. Management Portal - For RDS Core staff to manage tickets and remote technicians

## Key Files for Development

### Customer Portal
Main files to edit for the customer-facing interface:

```
src/customer/
├── pages/
│   └── Dashboard.tsx       # Main customer dashboard with tickets, alerts, and stats
├── components/
│   ├── Header.tsx         # Navigation and branding
│   ├── AlertConsole.tsx   # System alerts display
│   ├── DeviceSelector.tsx # Device management interface
│   ├── FeedbackModal.tsx  # Customer feedback form
│   ├── RDSTeam.tsx       # Team information display
│   └── SupportInfo.tsx    # Contact information component
└── data/
    └── devices.ts         # Device categories and initial data
```

### Management Portal
Main files to edit for the management interface:

```
src/management/
├── pages/
│   └── Dashboard.tsx      # Main management dashboard with tech overview
└── components/           # Add new components here for:
    └── [Future]         # - Ticket management
                        # - Tech assignment
                        # - Performance metrics
                        # - System settings
```

### Shared Code
Common code used by both portals:

```
src/shared/
├── api/                 # API integration layer
├── types/              # Shared TypeScript interfaces
│   └── index.ts        # Common types for tickets, users, etc.
└── utils/              # Shared utility functions
```

## Component Connections

### Customer Portal Flow
1. `App.tsx` → Root component with routing
2. `customer/components/Header.tsx` → Present on all customer pages
3. `customer/pages/Dashboard.tsx` → Main customer view, includes:
   - AlertConsole for system notifications
   - Stats cards for tickets and technicians
   - Recent activity feed
   - Support contact information
4. Other pages:
   - `/devices` → DeviceSelector component
   - `/team` → RDSTeam component

### Management Portal Flow
1. `App.tsx` → Contains `/management` route
2. `management/pages/Dashboard.tsx` → Main management view, includes:
   - Active tickets overview
   - Technician status
   - System metrics
   - Performance indicators

## URL Routes
- Customer Portal:
  - `/` → Customer Dashboard
  - `/devices` → Device Management
  - `/team` → Team Information

- Management Portal:
  - `/management` → Management Dashboard
  - `/management/*` → Future management routes

## Development Workflow

### Adding New Features
1. Customer Portal:
   - Add new components in `src/customer/components/`
   - Add new pages in `src/customer/pages/`
   - Update routing in `App.tsx`

2. Management Portal:
   - Add new components in `src/management/components/`
   - Add new pages in `src/management/pages/`
   - Update routing in `App.tsx`

3. Shared Features:
   - Add shared types to `src/shared/types/index.ts`
   - Add shared utilities to `src/shared/utils/`
   - Add API integrations to `src/shared/api/`

### Running the Application
```bash
npm run dev
```
- Customer Portal: http://localhost:5173/
- Management Portal: http://localhost:5173/management

## Project Structure

```
project/
├── src/
│   ├── customer/           # Customer-facing portal components
│   │   ├── components/     # UI components for customer portal
│   │   ├── pages/         # Page components for customer routes
│   │   └── types/         # TypeScript types for customer portal
│   │
│   ├── management/        # Management portal components
│   │   ├── components/    # UI components for management portal
│   │   ├── pages/        # Page components for management routes
│   │   └── types/        # TypeScript types for management portal
│   │
│   ├── shared/           # Shared code between both portals
│   │   ├── api/         # API integration layer
│   │   ├── types/       # Shared TypeScript types
│   │   └── utils/       # Shared utility functions
│   │
│   ├── App.tsx          # Main application component with routing
│   └── main.tsx         # Application entry point
│
├── public/              # Static assets
├── .bolt/              # Bolt configuration
├── package.json        # Project dependencies
└── README.md           # Project documentation
```

## Applications

### Customer Portal
- End-user facing application for submitting and tracking support tickets
- Features:
  - Ticket submission and tracking
  - System alerts and notifications
  - Support contact information
  - Feedback submission

### Management Portal
- Internal application for RDS Core staff
- Features:
  - Ticket management and assignment
  - Remote technician management
  - Performance metrics and reporting
  - System-wide alerts management

## Development

### Prerequisites
- Node.js 18+
- npm 9+

### Setup
1. Install dependencies:
```bash
npm install
```

2. Start development server:
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
- Shared TypeScript types ensure type safety across applications

## Security
- Role-based access control (RBAC) for management portal
- Secure API endpoints with authentication
- Protected routes for management interface
