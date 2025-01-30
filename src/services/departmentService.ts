// userService.js
import { apiRequest } from './apiService';
import { useAuth0 } from '@auth0/auth0-react';
// Fetch departments (GET request)
export const fetchDepartments = async () => {
  return await apiRequest('/departments', 'GET');
};

// Create a new department (POST request)
export const createDepartment = async (departmentData: any) => {
  return await apiRequest('/departments', 'POST', departmentData);
};

// Update a department (PUT request)
export const updateDepartment = async (
  departmentId: string,
  departmentData: any
) => {
  return await apiRequest(
    `/departments/${departmentId}`,
    'PUT',
    departmentData
  );
};

// Delete a department (DELETE request)
export const deleteDepartment = async (departmentId: string) => {
  return await apiRequest(`/departments/${departmentId}`, 'DELETE');
};

// You can add more functions for other department-related endpoints here
