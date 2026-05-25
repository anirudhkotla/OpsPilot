# Software Requirements Specification (SRS) - OpsPilot

## 1. Introduction
OpsPilot is a comprehensive internal company operations dashboard designed to streamline team management, project tracking, and internal workflows. It serves as a centralized hub for employees, managers, and administrators to interact and manage company resources.

## 2. Project Overview
- **Project Name:** OpsPilot
- **Objective:** Build a Next.js-based operations dashboard with role-based access control.
- **Target Audience:** Internal company staff (Employees, Managers, Admins).

## 3. Functional Requirements

### 3.1 Authentication & Authorization
- **JWT Authentication:** Secure login using JSON Web Tokens.
- **Role-Based Access Control (RBAC):**
  - **Admin:** Full access to all modules, audit logs, and system settings.
  - **Manager:** Access to team/project management and approval workflows.
  - **Employee:** Access to personal tasks, directory, and request system.
- **Session Management:** Secure handling of tokens via HTTP-only cookies.

### 3.2 Employee Directory
- **Listing:** View all employees with search and filter capabilities.
- **Profiles:** Detailed view of employee information, roles, and team assignments.
- **Management (Admin/Manager):** Ability to add, update, or deactivate employee records.

### 3.3 Team & Project Management
- **Teams:** Create and manage functional teams.
- **Projects:** Assign projects to teams with timelines and milestones.
- **Resource Allocation:** Track which employees are assigned to which projects.

### 3.4 Task Workflows & Approvals
- **Task Creation:** Assign tasks within projects.
- **Status Tracking:** Kanban or list view with statuses (Todo, In Progress, Review, Done).
- **Approvals:** Specific tasks or requests requiring manager/admin sign-off.

### 3.5 Internal Request System
- **Submission:** Employees can submit requests (e.g., hardware, leave, access).
- **Tracking:** Real-time status updates on submitted requests.
- **Resolution:** Managers can approve, deny, or comment on requests.

### 3.6 Notifications Center
- **Alerts:** Real-time notifications for task assignments, mentions, and approval updates.
- **History:** View past notifications.

### 3.7 Audit Log Dashboard
- **Activity Tracking:** Log all critical actions (logins, data changes, approvals).
- **Filtering:** Search logs by user, date, or action type.

### 3.8 Admin Settings Panel
- **System Config:** Manage global settings, roles, and permissions.
- **Integrations:** Configure external API keys or service connections.

## 4. Non-Functional Requirements
- **Performance:** Page loads under 2 seconds; API responses under 500ms.
- **Security:** Data encryption at rest and in transit; protection against OWASP Top 10.
- **Usability:** Responsive design (Mobile/Desktop) using Tailwind CSS.
- **Scalability:** Modular architecture to support future feature additions.

## 5. Acceptance Criteria
- Successful JWT login and redirection based on role.
- Functional CRUD for Employees and Projects.
- Working approval flow for internal requests.
- Audit logs correctly capturing system events.
- Responsive UI across major browsers and devices.
