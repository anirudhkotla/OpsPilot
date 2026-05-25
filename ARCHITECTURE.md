# System Architecture - OpsPilot

## 1. Overview
OpsPilot is built as a modern full-stack web application using the Next.js App Router. It follows a modular architecture to ensure maintainability and scalability.

## 2. Tech Stack
- **Frontend:** Next.js (React), TypeScript, Tailwind CSS.
- **Backend:** Next.js API Routes (Node.js).
- **Authentication:** JWT (JSON Web Tokens).
- **State Management:** React Hooks (Context/Reducer) or specialized libraries like TanStack Query for server state.

## 3. Directory Structure
```text
src/
├── app/                  # Next.js App Router (Pages & Layouts)
│   ├── dashboard/        # Main dashboard view
│   ├── employees/        # Employee directory pages
│   ├── projects/         # Project management pages
│   ├── requests/         # Internal request system pages
│   ├── admin/            # Admin settings and audit logs
│   └── api/              # Backend API Routes
│       ├── auth/         # JWT Auth endpoints
│       ├── employees/    # Employee CRUD
│       ├── projects/     # Project/Team endpoints
│       └── requests/     # Workflow/Approval endpoints
├── components/           # Reusable UI Components
│   ├── ui/               # Atomic components (buttons, inputs)
│   ├── layout/           # Shell, Sidebar, Navbar
│   ├── forms/            # Form-specific components
│   └── tables/           # Data grid components
├── modules/              # Business logic per domain
│   ├── auth/             # Auth logic & providers
│   ├── employees/        # Employee domain logic
│   ├── projects/         # Project domain logic
│   ├── requests/         # Workflow logic
│   ├── notifications/    # Notification handlers
│   └── audit/            # Logging utilities
├── lib/                  # Shared utilities
│   ├── api/              # API client/fetchers
│   ├── auth/             # JWT helpers
│   ├── validation/       # Zod schemas
│   ├── permissions/      # RBAC helpers
│   ├── hooks/            # Custom React hooks
│   └── types/            # TypeScript interfaces
└── middleware.ts         # Auth & RBAC protection
```

## 4. Data Flow
1. **Client Request:** User interacts with a React component.
2. **Middleware:** Validates JWT and checks role permissions.
3. **API Route:** Processes the request, interacts with the database (via Prisma/Supabase), and returns JSON.
4. **UI Update:** Component re-renders based on the API response.

## 5. Security Architecture
- **JWT:** Stored in HttpOnly cookies to prevent XSS.
- **RBAC:** Middleware intercepts requests to `/admin` or `/api/admin` to verify roles.
- **Validation:** All incoming data is validated using Zod schemas in API routes.
