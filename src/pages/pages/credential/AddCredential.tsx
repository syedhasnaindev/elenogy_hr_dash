import { useState } from 'react';
import { createCredential } from '../../../services/credentialService';
import { useNavigate } from 'react-router-dom';
import PageBreadcrumb from 'components/common/PageBreadcrumb';

const AddCredential = () => {
  const [credentialData, setCredentialData] = useState({
    loginName: '',
    hashPassword: '',
    // Add other fields as necessary
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentialData({ ...credentialData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await createCredential(credentialData);
      navigate('/credentials'); // Redirect to credentials list
    } catch (error) {
      console.error('Failed to create credential:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <PageBreadcrumb items={[{ label: 'Add Credential', active: true }]} />
      <h2>Add Credential</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Login Name:</label>
          <input
            type="text"
            name="loginName"
            value={credentialData.loginName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Hash Password:</label>
          <input
            type="password"
            name="hashPassword"
            value={credentialData.hashPassword}
            onChange={handleChange}
            required
          />
        </div>
        {/* Add other fields as necessary */}
        <button type="submit" disabled={loading}>
          {loading ? 'Adding...' : 'Add Credential'}
        </button>
      </form>
    </div>
  );
};

export default AddCredential; 