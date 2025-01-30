import { apiRequest } from './apiService';

// Fetch user mappings (GET request)
export const fetchUserMappings = async () => {
  return await apiRequest('/user-mappings', 'GET');
};

// Create a new user mapping (POST request)
export const createUserMapping = async (userMappingData: any) => {
  return await apiRequest('/user-mappings', 'POST', userMappingData);
};

// Get a specific user mapping (GET request)
export const getUserMapping = async (id: string) => {
  return await apiRequest(`/user-mappings/${id}`, 'GET');
};

// Update a user mapping (PUT request)
export const updateUserMapping = async (id: string, userMappingData: any) => {
  return await apiRequest(`/user-mappings/${id}`, 'PUT', userMappingData);
};

// Delete a user mapping (DELETE request)
export const deleteUserMapping = async (id: string) => {
  return await apiRequest(`/user-mappings/${id}`, 'DELETE');
};
