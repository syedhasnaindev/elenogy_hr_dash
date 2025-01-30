import { apiRequest } from './apiService';

// Fetch roles (GET request)
export const fetchRoles = async () => {
  return await apiRequest('/roles', 'GET');
};

// Create a new role (POST request)
export const createRole = async (roleData: any) => {
  return await apiRequest('/roles', 'POST', roleData);
};

// Get a specific role (GET request)
export const getRole = async (id: string) => {
  return await apiRequest(`/roles/${id}`, 'GET');
};

// Update a role (PUT request)
export const updateRole = async (id: string, roleData: any) => {
  return await apiRequest(`/roles/${id}`, 'PUT', roleData);
};

// Delete a role (DELETE request)
export const deleteRole = async (id: string) => {
  return await apiRequest(`/roles/${id}`, 'DELETE');
};
