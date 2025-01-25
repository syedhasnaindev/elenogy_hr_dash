import { apiRequest } from './apiService';

// Fetch qualifications (GET request)
export const fetchQualifications = async () => {
    return await apiRequest('/qualifications', 'GET');
};

// Create a new qualification (POST request)
export const createQualification = async (qualificationData: any) => {
    return await apiRequest('/qualifications', 'POST', qualificationData);
};

// Get a specific qualification (GET request)
export const getQualification = async (id: string) => {
    return await apiRequest(`/qualifications/${id}`, 'GET');
};

// Update a qualification (PUT request)
export const updateQualification = async (id: string, qualificationData: any) => {
    return await apiRequest(`/qualifications/${id}`, 'PUT', qualificationData);
};

// Delete a qualification (DELETE request)
export const deleteQualification = async (id: string) => {
    return await apiRequest(`/qualifications/${id}`, 'DELETE');
}; 