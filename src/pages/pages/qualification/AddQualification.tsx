import { useState } from 'react';
import { createQualification } from '../../../services/qualificationService';
import { useNavigate } from 'react-router-dom';
import PageBreadcrumb from 'components/common/PageBreadcrumb';

const AddQualification = () => {
  const [qualificationData, setQualificationData] = useState({
    name: '',
    description: ''
    // Add other fields as necessary
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setQualificationData({ ...qualificationData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await createQualification(qualificationData);
      navigate('/qualifications'); // Redirect to qualifications list
    } catch (error) {
      console.error('Failed to create qualification:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <PageBreadcrumb items={[{ label: 'Add Qualification', active: true }]} />
      <h2>Add Qualification</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Qualification Name:</label>
          <input
            type="text"
            name="name"
            value={qualificationData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={qualificationData.description}
            onChange={handleChange}
            required
          />
        </div>
        {/* Add other fields as necessary */}
        <button type="submit" disabled={loading}>
          {loading ? 'Adding...' : 'Add Qualification'}
        </button>
      </form>
    </div>
  );
};

export default AddQualification;
