# Implementation Plan - OpsPilot

This document outlines the step-by-step procedure for building the OpsPilot dashboard.

## Phase 1: Project Initialization & Foundation
1. **Setup**: Initialize Next.js with TypeScript, Tailwind CSS, and ESLint.
2. **Structure**: Create the directory tree as defined in `ARCHITECTURE.md`.
3. **Types**: Define core TypeScript interfaces for User, Employee, Project, Task, and Request in `src/lib/types/`.
4. **Validation**: Create Zod schemas for authentication and basic CRUD in `src/lib/validation/`.

## Phase 2: Authentication & Security
1. **JWT Logic**: Implement JWT signing and verification utilities in `src/lib/auth/`.
2. **API Auth**: Create `/api/auth/login` and `/api/auth/me` endpoints.
3. **Middleware**: Implement `middleware.ts` to protect `/dashboard`, `/admin`, and other private routes.
4. **UI**: Build Login and Registration pages using Tailwind and React Hook Form.

## Phase 3: Core Layout & Employee Directory
1. **Layout**: Build the `DashboardLayout` with a responsive Sidebar and Navbar.
2. **Directory UI**: Implement the Employee list view with search and filtering.
3. **Employee API**: Create CRUD endpoints for employees in `/api/employees/`.
4. **Profiles**: Build individual employee profile pages.

## Phase 4: Project & Team Management
1. **Project UI**: Build the Projects dashboard and individual project detail views.
2. **Team Assignment**: Implement logic to add/remove employees from teams/projects.
3. **Project API**: Create endpoints for project and team management.

## Phase 5: Task Workflows & Approvals
1. **Task Board**: Implement a task list or kanban-style board for projects.
2. **Approval System**: Build the logic for "Request -> Review -> Approve/Reject" workflows.
3. **Request UI**: Create forms for internal requests (e.g., leave, equipment).
4. **Workflow API**: Implement endpoints that handle status transitions and notifications.

## Phase 6: Notifications & Audit Logs
1. **Notification Center**: Build a real-time notification dropdown and a dedicated inbox page.
2. **Audit Dashboard**: Implement the Admin-only view for system audit logs.
3. **Logging Logic**: Integrate audit logging into all write-heavy API routes.

## Phase 7: Admin Panel & Final Polish
1. **Admin UI**: Build the settings panel for role management and system configuration.
2. **Testing**: Write unit tests for business logic and integration tests for API routes.
3. **Optimization**: Perform a final pass on responsive design and performance (Lighthouse audit).
