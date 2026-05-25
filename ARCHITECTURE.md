# System Architecture - OpsPilot

## 1. Technology Stack
- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State Management:** React Context / Hooks
- **Authentication:** JWT (JSON Web Tokens)
- **API:** Next.js Route Handlers (RESTful)
- **Components:** Headless UI / Radix UI (via Tailwind)

## 2. High-Level Architecture
OpsPilot follows a modern Full-Stack Next.js architecture where the frontend and backend are integrated within the same deployment unit.

### 2.1 Frontend (Client-Side)
- **React Server Components (RSC):** Used for data fetching and static layouts to improve performance.
- **Client Components:** Used for interactive elements like forms, modals, and real-time notifications.
- **Layouts:** Persistent navigation and sidebar across the dashboard.

### 2.2 Backend (Server-Side)
- **API Routes:** Located in `src/app/api/`, handling business logic and data persistence.
- **Middleware:** `middleware.ts` handles route protection and JWT verification.
- **Services/Modules:** Logic encapsulated in `src/modules/` for reusability.

## 3. Data Flow
1. **User Action:** User interacts with a Client Component (e.g., submitting a request).
2. **API Call:** Client sends a request to a Next.js Route Handler with a JWT in the header/cookie.
3. **Validation:** Middleware/Route Handler validates the JWT and checks user permissions.
4. **Processing:** The `module` logic processes the request (e.g., updating a database).
5. **Response:** API returns JSON data to the client.
6. **UI Update:** React updates the UI state based on the response.

## 4. Directory Structure
```text
src/
├── app/                    # Next.js App Router
│   ├── (auth)/             # Authentication routes
│   ├── dashboard/          # Main dashboard view
│   ├── employees/          # Employee directory pages
│   ├── projects/           # Project management pages
│   ├── requests/           # Internal request system
│   ├── admin/              # Admin settings and audit logs
│   └── api/                # REST API Route Handlers
├── components/             # Shared UI components
│   ├── ui/                 # Base components (buttons, inputs)
│   ├── layout/             # Sidebar, Header, Footer
│   ├── forms/              # Reusable form logic
│   └── tables/             # Data tables with sorting/filtering
├── modules/                # Business logic by feature
│   ├── auth/               # JWT logic, login/logout
│   ├── employees/          # Directory logic
│   ├── projects/           # Project/Team logic
│   ├── requests/           # Workflow/Approval logic
│   ├── notifications/      # Alerting system
│   └── audit/              # Logging logic
├── lib/                    # Shared utilities
│   ├── api/                # Fetch wrappers
│   ├── auth/               # Token helpers
│   ├── validation/         # Zod schemas
│   ├── permissions/        # RBAC helpers
│   └── hooks/              # Custom React hooks
├── types/                  # TypeScript interfaces
└── middleware.ts           # Route protection
```

## 5. Security Model
- **Authentication:** JWT stored in `HttpOnly` cookies to prevent XSS.
- **Authorization:** Server-side checks in API routes and Middleware based on user roles.
- **Input Validation:** Strict schema validation using Zod on both client and server.
