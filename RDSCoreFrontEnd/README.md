# AI-Friendly README for RDS Core Frontend

## Project Overview

Welcome to the **RDS Core Frontend**! This project is part of a larger system designed to simplify store-level operations and management. The frontend is built using **React** and **TypeScript**, with styling provided by **Tailwind CSS**.

### Purpose
- Simplify store-level operations and management.

### Current Status
- In development, with recent updates to the dashboard and shared components.
- Still working on the gui for the management portal.
- getting the management theme more in line with the customer theme.
- working on the customer theme, needs to be more red.
- Need to name project RDS Core and add a logo to the management portal
- Need to re-design the management portal, it's not looking right.
- Need to add a login form to the management portal.
- Need to add a stores section to the management portal, we keep track of store numbers.
- Need to add a customer theme to the customer portal.
- Need to add a management theme to the management portal.
- Need to add a stores section to the management portal, we keep track of store numbers.
- Need to add login form to the customer portal.
- Need to add a stores section to the customer portal where we register their app/store number.

## Your Learning Goals

- **React & TypeScript**: Enhance your skills in building modern web applications.
- **Tailwind CSS**: Learn to use Tailwind CSS for styling and responsive design. 
- **UI/UX Design**: Focus on creating a user-friendly interface.
- **Project Management**: Learn to organize and manage a growing codebase.

## Current Challenges

- **State Management**: Understanding and implementing effective state management techniques.
- **Responsive Design**: Ensuring the application looks great on all devices.
- **Performance Optimization**: Identifying and addressing performance bottlenecks.

## Recent Changes

- **Dashboard Redesign**: Implemented a new, modern dashboard layout with interactive elements.
- **Shared Components**: Moved shared components and utilities to a centralized location for better organization.
- **Code Cleanup**: Removed unused imports and improved code readability.

## Shared Folder

The `Shared` folder contains:
- **Types**: Common TypeScript types used across the application.
- **Constants**: Shared constants for API endpoints, statuses, etc.
- **Utilities**: Reusable utility functions for validation and formatting.

## Future Plans

- **Lazy Loading**: Implement lazy loading for improved performance.
- **Real-Time Features**: Add WebSockets for real-time updates and notifications.
- **User Feedback**: Gather and incorporate user feedback to enhance the user experience.

## How to Use This README

This README serves as a guide to catch the AI assistant up to date as it picks up where it left off last time. It provides context about the project's current state, your learning objectives, and the challenges you're facing.

---

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

## Additional Notes

- Remember to review the shared folder for any reusable components.
- Check the current challenges section for areas to focus on when you return.
