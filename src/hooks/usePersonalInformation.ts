import { useState, useEffect } from 'react';
import { fetchPersonalInformation } from './../services/personalInformationService';

export const usePersonalInformation = () => {
  const [personalInformation, setPersonalInformation] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPersonalInformation = async () => {
      try {
        const data = await fetchPersonalInformation();
        setPersonalInformation(data);
      } catch (error) {
        console.error('Failed to fetch personal information:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPersonalInformation();
  }, []);

  return { personalInformation, loading };
}; 