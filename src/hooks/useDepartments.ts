import { useState, useEffect } from 'react';
import { fetchDepartments } from './../services/departmentService';

export const useDepartments = () => {
  const [departments, setDepartments] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDepartments = async () => {
      try {
        const data = await fetchDepartments();
        setDepartments(data);
      } catch (error) {
        console.error('Failed to fetch departments:', error);
      } finally {
        setLoading(false);
      }
    };

    loadDepartments();
  }, []);

  return { departments, loading };
};
