import { useState } from 'react';
import { createUserMapping } from '../../../services/userMappingService';
import { useNavigate } from 'react-router-dom';
import PageBreadcrumb from 'components/common/PageBreadcrumb';

const AddUserMapping = () => {
  const [userMappingData, setUserMappingData] = useState({
    userId: '',
    mappingDetails: '',
    // Add other fields as necessary
  });
  
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserMappingData({ ...userMappingData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await createUserMapping(userMappingData);
      navigate('/user-mappings'); // Redirect to user mappings list
    } catch (error) {
      console.error('Failed to create user mapping:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <PageBreadcrumb items={[{ label: 'Add User Mapping', active: true }]} />
      <h2>Add User Mapping</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>User ID:</label>
          <input
            type="text"
            name="userId"
            value={userMappingData.userId}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Mapping Details:</label>
          <input
            type="text"
            name="mappingDetails"
            value={userMappingData.mappingDetails}
            onChange={handleChange}
            required
          />
        </div>
        {/* Add other fields as necessary */}
        <button type="submit" disabled={loading}>
          {loading ? 'Adding...' : 'Add User Mapping'}
        </button>
      </form>
    </div>
  );
};

export default AddUserMapping; 