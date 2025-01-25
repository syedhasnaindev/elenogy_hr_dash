import { useState } from 'react';
import { createDepartment } from '../../../services/departmentService';
import { useNavigate } from 'react-router-dom';
import PageBreadcrumb from 'components/common/PageBreadcrumb';

const AddDepartment = () => {
  const [departmentData, setDepartmentData] = useState({
    name: '',
    description: '',
    // Add other fields as necessary
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDepartmentData({ ...departmentData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await createDepartment(departmentData);
      navigate('/departments'); // Redirect to departments list
    } catch (error) {
      console.error('Failed to create department:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <PageBreadcrumb items={[{ label: 'Add Department', active: true }]} />
      <h2>Add Department</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Department Name:</label>
          <input
            type="text"
            name="name"
            value={departmentData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={departmentData.description}
            onChange={handleChange}
            required
          />
        </div>
        {/* Add other fields as necessary */}
        <button type="submit" disabled={loading}>
          {loading ? 'Adding...' : 'Add Department'}
        </button>
      </form>
    </div>
  );
};

export default AddDepartment; 