![RDS Core Logo](https://via.placeholder.com/150)

![npm](https://img.shields.io/badge/npm-v1.0.0-blue)
![license](https://img.shields.io/badge/license-MIT-green)
![build](https://img.shields.io/badge/build-passing-brightgreen)

# RDS Core Support System

A comprehensive technical support system consisting of two main applications:
1. Customer Portal - For end-users to submit and track support tickets
2. Management Portal - For RDS Core staff to manage tickets and remote technicians

## Project Structure

Here's an overview of the entire project structure:

```
RDSCoreFrontEnd/
├── .bolt/                  # Bolt configuration (if applicable)
├── .env                    # Environment variables
├── .gitignore              # Git ignore file
├── README.md               # Project documentation
├── eslint.config.js        # ESLint configuration
├── index.html              # Main HTML file
├── node_modules/           # Node.js modules
├── package-lock.json       # Package lock file
├── package.json            # Project dependencies
├── postcss.config.js       # PostCSS configuration
├── src/                    # Source code directory
│   ├── App.tsx             # Main application component with routing
│   ├── main.tsx            # Application entry point
│   ├── index.css           # Global styles
│   ├── customer/           # Customer-facing portal components
│   ├── management/         # Management portal components
│   ├── shared/             # Shared code between both portals
│   ├── components/         # Additional components
│   ├── data/               # Data files
│   └── types/              # TypeScript types
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.app.json       # TypeScript configuration for the app
├── tsconfig.json           # TypeScript configuration
├── tsconfig.node.json      # TypeScript configuration for Node
└── vite.config.ts          # Vite configuration
```

## Key Files and Directories

### Customer Portal
Main files and directories for the customer-facing interface:

```
src/customer/
├── components/            # UI components for customer portal
│   ├── AlertConsole.tsx   # System alerts display
│   ├── CreateTicket.tsx   # Ticket creation form
│   ├── DeviceSelector.tsx # Device management interface
│   ├── FeedbackModal.tsx  # Customer feedback form
│   ├── Header.tsx         # Navigation and branding
│   ├── RDSTeam.tsx        # Team information display
│   └── SupportInfo.tsx    # Contact information component
├── data/
│   └── devices.ts         # Device categories and initial data
├── pages/
│   └── Dashboard.tsx      # Main customer dashboard with tickets, alerts, and stats
└── types/
    └── index.ts           # TypeScript types for customer portal
```

### Management Portal
Main files and directories for the management interface:

```
src/management/
├── components/            # UI components for management portal
│   ├── TeamManager.tsx    # Manage team members and assignments
│   └── TicketManager.tsx  # Manage support tickets
├── pages/
│   └── Dashboard.tsx      # Main management dashboard with tech overview
```

### Shared Code
Common code used by both portals:

```
src/shared/
├── api/                  # API integration layer
├── contexts/             # Context providers for shared state
├── types/                # Shared TypeScript interfaces
└── utils/                # Shared utility functions
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

The system is structured to support both the RDS Management and Customer Portals, with shared components and services to ensure consistency and efficiency.

### Shared Folder
- **Shared Components**: Common components and services used by both the front-end and back-end.
- **API Integration**: Centralized API layer for communication between portals and external services.

### Portals
- **Customer Portal**: Provides end-users with access to support ticket submission, tracking, and feedback.
- **Management Portal**: Allows RDS staff to manage support tickets, technicians, and system settings.

### Communication
- **API Layer**: Both portals communicate through a shared API layer, ensuring seamless data flow and interaction.
- **WebSockets**: Real-time updates and notifications across the system.

This architecture allows for a scalable and maintainable system, facilitating future enhancements and integrations.
