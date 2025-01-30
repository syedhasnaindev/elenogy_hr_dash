// userService.js
import { apiRequest } from './apiService';
import { useAuth0 } from '@auth0/auth0-react';
// Fetch Designations (GET request)
export const fetchDesignation = async () => {
  return await apiRequest('/designations', 'GET');
};

// Create a new Designation (POST request)
export const createDesignation = async (DesignationData: any) => {
  return await apiRequest('/designations', 'POST', DesignationData);
};

// Update a Designation (PUT request)
export const updateDesignation = async (
  DesignationId: string,
  DesignationData: any
) => {
  return await apiRequest(
    `/designations/${DesignationId}`,
    'PUT',
    DesignationData
  );
};

// Delete a Designation (DELETE request)
export const deleteDesignation = async (DesignationId: string) => {
  return await apiRequest(`/designations/${DesignationId}`, 'DELETE');
};

// You can add more functions for other Designation-related endpoints here
