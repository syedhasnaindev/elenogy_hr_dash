import { useState, useEffect } from 'react';
import { fetchDesignation } from './../services/designationService';

export const useDesignation = () => {
  const [Designation, setDesignation] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDesignation = async () => {
      try {
        const data = await fetchDesignation();
        setDesignation(data);
      } catch (error) {
        console.error('Failed to fetch Designation:', error);
      } finally {
        setLoading(false);
      }
    };

    loadDesignation();
  }, []);

  return { Designation, loading };
};
