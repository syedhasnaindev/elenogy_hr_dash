import { apiRequest } from './apiService';

// Fetch addresses (GET request)
export const fetchAddresses = async () => {
  return await apiRequest('/addresses', 'GET');
};

// Create a new address (POST request)
export const createAddress = async (addressData: any) => {
  return await apiRequest('/addresses', 'POST', addressData);
};

// Get a specific address (GET request)
export const getAddress = async (id: string) => {
  return await apiRequest(`/addresses/${id}`, 'GET');
};

// Update an address (PUT request)
export const updateAddress = async (id: string, addressData: any) => {
  return await apiRequest(`/addresses/${id}`, 'PUT', addressData);
};

// Delete an address (DELETE request)
export const deleteAddress = async (id: string) => {
  return await apiRequest(`/addresses/${id}`, 'DELETE');
};
