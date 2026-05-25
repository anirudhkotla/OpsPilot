# Software Requirements Specification (SRS) - OpsPilot

## 1. Introduction
OpsPilot is a comprehensive internal company operations dashboard designed to streamline team management, project tracking, and administrative workflows. It serves as a centralized hub for employees to manage tasks, requests, and organizational data.

## 2. Functional Requirements

### 2.1 Authentication & Role-Based Access Control (RBAC)
- **Login/Logout:** Secure authentication using JWT.
- **Roles:** Admin, Manager, and Employee.
- **Permissions:** Granular access control to modules based on roles.

### 2.2 Employee Directory
- **Profile Management:** View and edit employee profiles.
- **Search/Filter:** Find employees by name, department, or role.
- **Org Chart:** Visual representation of company hierarchy.

### 2.3 Team & Project Management
- **Project CRUD:** Create, read, update, and delete projects.
- **Team Assignment:** Assign employees to specific teams and projects.
- **Status Tracking:** Monitor project progress and milestones.

### 2.4 Task Workflows with Approvals
- **Task Creation:** Assign tasks with deadlines and priorities.
- **Approval Flow:** Multi-stage approval process for critical tasks.
- **Status Updates:** Real-time tracking of task completion.

### 2.5 Internal Request System
- **Request Submission:** Employees can submit requests (e.g., leave, equipment, budget).
- **Review Pipeline:** Managers can approve, reject, or request more info.

### 2.6 Notifications Center
- **Real-time Alerts:** In-app notifications for task updates and approvals.
- **Email Integration:** Optional email alerts for urgent requests.

### 2.7 Audit Log Dashboard
- **Activity Tracking:** Log all major actions (auth, data changes, approvals).
- **Searchable Logs:** Admins can filter logs by user, date, or action type.

### 2.8 Admin Settings Panel
- **System Config:** Manage global settings, roles, and categories.
- **User Management:** Invite new users and manage account statuses.

## 3. Non-Functional Requirements
- **Performance:** Page loads under 2 seconds; API responses under 500ms.
- **Security:** JWT-based session management; HTTPS only; Input validation.
- **Scalability:** Support for up to 1000 concurrent internal users.
- **Usability:** Responsive design using Tailwind CSS; Accessible UI components.

## 4. Assumptions & Constraints
- **Tech Stack:** Next.js 14+ (App Router), TypeScript, Tailwind CSS.
- **Auth:** Stateless JWT authentication.
- **API:** RESTful API routes within Next.js.
- **Environment:** Deployment targeted for Vercel.

## 5. Risks & Mitigations
- **Data Security:** Risk of unauthorized access. *Mitigation: Strict RBAC and middleware-level checks.*
- **Logic Complexity:** Complex approval workflows. *Mitigation: Modular workflow engine design.*

## 6. Acceptance Criteria
- Users can log in and see only the modules permitted by their role.
- Employee directory displays correct data and supports filtering.
- Task approval flow correctly transitions states and notifies relevant parties.
- Audit logs accurately record every state-changing operation.
