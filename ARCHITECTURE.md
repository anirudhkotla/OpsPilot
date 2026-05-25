# System Architecture - OpsPilot

## 1. Tech Stack
- **Frontend**: Next.js 14+ (App Router), React, TypeScript.
- **Styling**: Tailwind CSS for utility-first responsive design.
- **Authentication**: JWT (JSON Web Tokens) stored in secure cookies or local storage.
- **Backend**: Next.js API Routes (Edge/Node.js runtime).
- **API Style**: RESTful JSON APIs.
- **Validation**: Zod for schema validation (client and server side).

## 2. Directory Structure
The project follows a modular architecture to ensure scalability and separation of concerns:

```text
src/
  app/
    (auth)/           # Authentication routes (login, register)
    dashboard/        # Main overview and metrics
    employees/        # Employee directory and profile management
    projects/         # Project and team management
    requests/         # Internal request system
    admin/            # Admin settings and audit logs
    api/              # REST API Endpoints
      auth/           # JWT issuance and verification
      employees/      # Employee CRUD
      projects/       # Project/Task CRUD
      requests/       # Request/Approval logic
  components/
    ui/               # Atomic UI components (Button, Input, Modal)
    layout/           # Shared layouts (Sidebar, Navbar, Footer)
    forms/            # Reusable form logic and components
    tables/           # Data tables with sorting/filtering
  modules/            # Business logic and domain-specific state
    auth/             # Auth providers and logic
    employees/        # Employee-specific hooks and helpers
    projects/         # Project-specific logic
    requests/         # Workflow and approval logic
    notifications/    # Notification state management
    audit/            # Audit log formatting and logic
  lib/                # Shared utilities and configuration
    api/              # API client (fetch wrappers)
    auth/             # JWT and session helpers
    validation/       # Zod schemas for data integrity
    permissions/      # RBAC (Role-Based Access Control) logic
    hooks/            # Global custom React hooks
    types/            # Global TypeScript interfaces/types
  middleware.ts       # Route protection and auth verification
tests/                # Unit, integration, and E2E tests
```

## 3. Data Flow & Integration
1. **Client Interaction**: Users interact with React components in the `app/` directory.
2. **State & Logic**: Components use hooks from `modules/` or `lib/hooks/` to manage local state and trigger actions.
3. **API Requests**: Data fetching is handled by `lib/api/` which calls the `app/api/` routes.
4. **Middleware**: The `middleware.ts` intercepts requests to ensure the user has a valid JWT for protected routes.
5. **Server Processing**: API routes validate input using `lib/validation/`, check permissions via `lib/permissions/`, and interact with the data layer.
6. **Response**: JSON responses are returned to the client, updating the UI accordingly.

## 4. Security Architecture
- **JWT**: Tokens contain user ID and role, signed with a server-side secret.
- **RBAC**: A centralized permission utility determines if a user can perform an action based on their role.
- **Input Sanitization**: All API inputs are validated against Zod schemas to prevent injection and malformed data.
