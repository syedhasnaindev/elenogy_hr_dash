import { useState } from 'react';
import { createDesignation } from '../../../services/designationService'; // Assuming you have a designationService
import { useNavigate } from 'react-router-dom';
import PageBreadcrumb from 'components/common/PageBreadcrumb';

const AddDesignation = () => {
  const [designationData, setDesignationData] = useState({
    title: '',
    description: '',
    // Add other fields as necessary
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDesignationData({ ...designationData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await createDesignation(designationData);
      navigate('/designations'); // Redirect to designations list
    } catch (error) {
      console.error('Failed to create designation:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <PageBreadcrumb items={[{ label: 'Add Designation', active: true }]} />
      <h2>Add Designation</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Designation Title:</label>
          <input
            type="text"
            name="title"
            value={designationData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={designationData.description}
            onChange={handleChange}
            required
          />
        </div>
        {/* Add other fields as necessary */}
        <button type="submit" disabled={loading}>
          {loading ? 'Adding...' : 'Add Designation'}
        </button>
      </form>
    </div>
  );
};

export default AddDesignation; 