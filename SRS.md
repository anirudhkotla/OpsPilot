# Software Requirements Specification (SRS) - OpsPilot

## 1. Introduction
OpsPilot is a comprehensive internal company operations dashboard designed to streamline team management, project tracking, and administrative workflows. It serves as a central hub for employees, managers, and admins to interact with company resources and processes.

## 2. Core Modules
- **Authentication & RBAC**: Secure login with JWT and role-based permissions (Admin, Manager, Employee).
- **Employee Directory**: Centralized database of staff with profiles, contact info, and organizational hierarchy.
- **Team/Project Management**: Tools to organize teams, assign members, and track project milestones.
- **Task Workflows**: Task creation, assignment, status tracking, and multi-stage approval cycles.
- **Internal Request System**: Formal system for equipment, leave, or support requests with tracking.
- **Notifications Center**: Real-time alerts and an inbox for task updates, mentions, and approval requests.
- **Audit Log Dashboard**: Tracking system changes, data modifications, and user actions for compliance and security.
- **Admin Settings Panel**: Global configuration for roles, permissions, and system-wide defaults.

## 3. Functional Requirements
- **Authentication**: Users must be able to log in securely. Sessions are managed via JWT.
- **Authorization**: Access to specific modules (e.g., Admin Panel) must be restricted based on user roles.
- **Employee Management**: CRUD operations for employee profiles.
- **Project Tracking**: Ability to create projects, set deadlines, and link tasks.
- **Approval Logic**: Specific requests (e.g., leave) must require manager or admin approval before completion.
- **Auditability**: Every significant action (create, update, delete) must be logged with a timestamp and user ID.

## 4. Non-Functional Requirements
- **Security**: All API routes must be protected; sensitive data must be encrypted.
- **Usability**: The interface must be intuitive and responsive across desktop and tablet devices.
- **Performance**: Page transitions and data fetching should be optimized using Next.js Server Components and efficient caching.
- **Maintainability**: Codebase must follow the suggested modular structure with strict TypeScript typing.

## 5. Assumptions & Constraints
- **Assumption**: A database (e.g., PostgreSQL via Supabase or similar) will be provided for persistence.
- **Constraint**: The application must be built using the Next.js App Router.
- **Constraint**: Authentication must be JWT-based, not session-cookie based.

## 6. Acceptance Criteria
- Successful login redirects to the dashboard.
- Unauthorized users are redirected to the login page by middleware.
- Admins can see the Audit Log; standard employees cannot.
- Requests follow the defined approval workflow status changes.
