import { apiRequest } from './apiService';

// Fetch salaries (GET request)
export const fetchSalaries = async () => {
  return await apiRequest('/salaries', 'GET');
};

// Create a new salary (POST request)
export const createSalary = async (salaryData: any) => {
  return await apiRequest('/salaries', 'POST', salaryData);
};

// Get a specific salary (GET request)
export const getSalary = async (id: string) => {
  return await apiRequest(`/salaries/${id}`, 'GET');
};

// Update a salary (PUT request)
export const updateSalary = async (id: string, salaryData: any) => {
  return await apiRequest(`/salaries/${id}`, 'PUT', salaryData);
};

// Delete a salary (DELETE request)
export const deleteSalary = async (id: string) => {
  return await apiRequest(`/salaries/${id}`, 'DELETE');
};
