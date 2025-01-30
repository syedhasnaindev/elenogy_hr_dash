import { useState } from 'react';
import { createRole } from '../../../services/roleService';
import { useNavigate } from 'react-router-dom';
import PageBreadcrumb from 'components/common/PageBreadcrumb';

const AddRole = () => {
  const [roleData, setRoleData] = useState({
    user_id: '',
    role_name: '',
    department_id: '',
    role_type: ''
    // Add other fields as necessary
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRoleData({ ...roleData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await createRole(roleData);
      navigate('/roles'); // Redirect to roles list
    } catch (error) {
      console.error('Failed to create role:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <PageBreadcrumb items={[{ label: 'Add Role', active: true }]} />
      <h2>Add Role</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Role Name:</label>
          <input
            type="text"
            name="Role_name"
            value={roleData.role_name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            name="Role_type"
            value={roleData.role_type}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>user_id:</label>
          <input
            type="number"
            name="User_id"
            value={roleData.user_id}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="number"
            name="Ddsepartment_id"
            value={roleData.department_id}
            onChange={handleChange}
            required
          />
        </div>
        {/* Add other fields as necessary */}
        <button type="submit" disabled={loading}>
          {loading ? 'Adding...' : 'Add Role'}
        </button>
      </form>
    </div>
  );
};

export default AddRole;
