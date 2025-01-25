import { useState, useEffect } from 'react';
import { fetchQualifications } from './../services/qualificationService';

export const useQualifications = () => {
  const [qualifications, setQualifications] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadQualifications = async () => {
      try {
        const data = await fetchQualifications();
        setQualifications(data);
      } catch (error) {
        console.error('Failed to fetch qualifications:', error);
      } finally {
        setLoading(false);
      }
    };

    loadQualifications();
  }, []);

  return { qualifications, loading };
}; 