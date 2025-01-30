import { useState, useEffect } from 'react';
import { fetchUserMappings } from './../services/userMappingService';

export const useUserMappings = () => {
  const [userMappings, setUserMappings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUserMappings = async () => {
      try {
        const data = await fetchUserMappings();
        setUserMappings(data);
      } catch (error) {
        console.error('Failed to fetch user mappings:', error);
      } finally {
        setLoading(false);
      }
    };

    loadUserMappings();
  }, []);

  return { userMappings, loading };
};
