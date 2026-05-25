export type UserRole = 'ADMIN' | 'MANAGER' | 'EMPLOYEE';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatarUrl?: string;
}

export interface Employee extends User {
  department: string;
  jobTitle: string;
  startDate: string;
  status: 'ACTIVE' | 'INACTIVE' | 'ON_LEAVE';
}

export interface Project {
  id: string;
  name: string;
  description: string;
  status: 'PLANNING' | 'IN_PROGRESS' | 'COMPLETED' | 'ON_HOLD';
  startDate: string;
  endDate?: string;
  managerId: string;
  teamIds: string[];
}

export interface Task {
  id: string;
  projectId: string;
  title: string;
  description: string;
  status: 'TODO' | 'IN_PROGRESS' | 'REVIEW' | 'DONE';
  priority: 'LOW' | 'MEDIUM' | 'HIGH' | 'URGENT';
  assigneeId: string;
  dueDate: string;
}

export interface InternalRequest {
  id: string;
  requesterId: string;
  type: 'LEAVE' | 'EQUIPMENT' | 'ACCESS' | 'OTHER';
  title: string;
  description: string;
  status: 'PENDING' | 'APPROVED' | 'REJECTED';
  createdAt: string;
  updatedAt: string;
}