import { useState, useEffect } from 'react';

const useFetch = <T>(apiCall: () => Promise<{ data: T }>) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      try {
        const response = await apiCall();
        setData(response.data);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      } finally {
        setLoading(false);
      }
    })();
  }, [apiCall]);

  return { data, loading };
};

export { useFetch };
