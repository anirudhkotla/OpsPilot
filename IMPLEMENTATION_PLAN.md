# Implementation Plan - OpsPilot

## Phase 1: Project Initialization
1. **Setup:** Initialize Next.js with TypeScript and Tailwind CSS.
2. **Structure:** Create the directory structure as defined in `ARCHITECTURE.md`.
3. **Base UI:** Implement the main layout (Sidebar, Header) and theme configuration.

## Phase 2: Authentication & Middleware
1. **Auth Logic:** Implement JWT generation and verification in `src/modules/auth`.
2. **API Routes:** Create `/api/auth/login` and `/api/auth/logout`.
3. **Middleware:** Configure `middleware.ts` to protect `/dashboard` and sub-routes.
4. **UI:** Build the Login page.

## Phase 3: Employee Directory
1. **API:** Implement CRUD endpoints for employees in `/api/employees`.
2. **Components:** Build the employee table with search and filter.
3. **Pages:** Create the directory listing and individual profile views.

## Phase 4: Team & Project Management
1. **Data Model:** Define types for Teams and Projects.
2. **API:** Implement endpoints for project creation and team assignment.
3. **UI:** Build the Project dashboard and Team management views.

## Phase 5: Task Workflows & Requests
1. **Workflow Logic:** Implement status transition logic and approval states.
2. **Request System:** Build the form for submitting internal requests.
3. **Manager View:** Create the approval dashboard for managers/admins.

## Phase 6: Notifications & Audit Logs
1. **Audit System:** Implement a global logging utility used by all API routes.
2. **Notifications:** Setup a basic notification center (polling or mock socket).
3. **Admin UI:** Build the Audit Log viewer and Admin settings panel.

## Phase 7: Testing & Final Polish
1. **Unit Testing:** Test core modules (Auth, Permissions).
2. **Integration Testing:** Test end-to-end flows (Request -> Approval -> Notification).
3. **UI/UX:** Final Tailwind styling pass and responsiveness check.
