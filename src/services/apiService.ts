import axios from 'axios';
// import { useAuth0 } from '@auth0/auth0-react';

export const apiRequest = async (endpoint: string, method: string, data?: any, config?: any) => {
    // const { getAccessTokenSilently } = useAuth0();
    const token = localStorage.getItem('token')


  try {
    const response = await axios({
        baseURL: 'http://localhost:8000/api',
      url: endpoint,
      method: method,
      data: data,
      headers: {
        'Authorization': `Bearer ${token}`, // Add the API token to the headers
        ...config?.headers // Merge with any additional headers from config
      },
      ...config
    });
    return response.data;
  } catch (error) {
    console.error(`Error with ${method} request to ${endpoint}:`, error);
    throw error;
  }
};
