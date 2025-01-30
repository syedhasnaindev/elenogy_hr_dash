import { useState, useEffect } from 'react';
import { fetchCredentials } from './../services/credentialService';

export const useCredentials = () => {
  const [credentials, setCredentials] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCredentials = async () => {
      try {
        const data = await fetchCredentials();
        setCredentials(data);
      } catch (error) {
        console.error('Failed to fetch credentials:', error);
      } finally {
        setLoading(false);
      }
    };

    loadCredentials();
  }, []);

  return { credentials, loading };
};
