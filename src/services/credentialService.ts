import { apiRequest } from './apiService';

// Fetch credentials (GET request)
export const fetchCredentials = async () => {
    return await apiRequest('/credentials', 'GET');
};

// Create a new credential (POST request)
export const createCredential = async (credentialData: any) => {
    return await apiRequest('/credentials', 'POST', credentialData);
};

// Get a specific credential (GET request)
export const getCredential = async (id: string) => {
    return await apiRequest(`/credentials/${id}`, 'GET');
};

// Update a credential (PUT request)
export const updateCredential = async (id: string, credentialData: any) => {
    return await apiRequest(`/credentials/${id}`, 'PUT', credentialData);
};

// Delete a credential (DELETE request)
export const deleteCredential = async (id: string) => {
    return await apiRequest(`/credentials/${id}`, 'DELETE');
}; 