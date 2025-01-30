import { useState } from 'react';
import { createPersonalInformation } from '../../../services/personalInformationService';
import { useNavigate } from 'react-router-dom';
import PageBreadcrumb from 'components/common/PageBreadcrumb';

const AddPersonalInformation = () => {
  const [personalInfoData, setPersonalInfoData] = useState({
    name: '',
    email: ''
    // Add other fields as necessary
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPersonalInfoData({ ...personalInfoData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await createPersonalInformation(personalInfoData);
      navigate('/personal-information'); // Redirect to personal information list
    } catch (error) {
      console.error('Failed to create personal information:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <PageBreadcrumb
        items={[{ label: 'Add Personal Information', active: true }]}
      />
      <h2>Add Personal Information</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={personalInfoData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={personalInfoData.email}
            onChange={handleChange}
            required
          />
        </div>
        {/* Add other fields as necessary */}
        <button type="submit" disabled={loading}>
          {loading ? 'Adding...' : 'Add Personal Information'}
        </button>
      </form>
    </div>
  );
};

export default AddPersonalInformation;
