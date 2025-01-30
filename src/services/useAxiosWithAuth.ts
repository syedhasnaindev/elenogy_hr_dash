import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';

const apiClient = axios.create({
  baseURL: process.env.API_URL
});

export const useAxiosWithAuth = () => {
  const { getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    const requestInterceptor = apiClient.interceptors.request.use(
      async config => {
        try {
          const token = await getAccessTokenSilently();
          config.headers.Authorization = `Bearer ${token}`;
        } catch (error) {
          console.error('Error fetching the token', error);
        }
        return config;
      }
    );

    return () => {
      apiClient.interceptors.request.eject(requestInterceptor);
    };
  }, [getAccessTokenSilently]);

  return apiClient;
};
