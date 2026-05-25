import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

export const employeeSchema = z.object({
  name: z.string().min(2, 'Name is too short'),
  email: z.string().email('Invalid email address'),
  role: z.enum(['ADMIN', 'MANAGER', 'EMPLOYEE']),
  department: z.string().min(2, 'Department is required'),
  jobTitle: z.string().min(2, 'Job title is required'),
});

export const projectSchema = z.object({
  name: z.string().min(3, 'Project name is too short'),
  description: z.string().min(10, 'Description is too short'),
  status: z.enum(['PLANNING', 'IN_PROGRESS', 'COMPLETED', 'ON_HOLD']),
  startDate: z.string(),
  managerId: z.string(),
});