import { useState, useEffect } from 'react';
import { fetchSalaries } from './../services/salaryService';

export const useSalaries = () => {
  const [salaries, setSalaries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadSalaries = async () => {
      try {
        const data = await fetchSalaries();
        setSalaries(data);
      } catch (error) {
        console.error('Failed to fetch salaries:', error);
      } finally {
        setLoading(false);
      }
    };

    loadSalaries();
  }, []);

  return { salaries, loading };
}; 