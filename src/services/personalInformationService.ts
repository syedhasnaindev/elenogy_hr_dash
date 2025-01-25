import { apiRequest } from './apiService';

// Fetch personal information (GET request)
export const fetchPersonalInformation = async () => {
    return await apiRequest('/personal-information', 'GET');
};

// Create new personal information (POST request)
export const createPersonalInformation = async (personalInfoData: any) => {
    return await apiRequest('/personal-information', 'POST', personalInfoData);
};

// Get specific personal information (GET request)
export const getPersonalInformation = async (id: string) => {
    return await apiRequest(`/personal-information/${id}`, 'GET');
};

// Update personal information (PUT request)
export const updatePersonalInformation = async (id: string, personalInfoData: any) => {
    return await apiRequest(`/personal-information/${id}`, 'PUT', personalInfoData);
};

// Delete personal information (DELETE request)
export const deletePersonalInformation = async (id: string) => {
    return await apiRequest(`/personal-information/${id}`, 'DELETE');
}; 