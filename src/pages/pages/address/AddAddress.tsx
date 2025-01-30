import { useState } from 'react';
import { createAddress } from '../../../services/addressService';
import { useNavigate } from 'react-router-dom';
import PageBreadcrumb from 'components/common/PageBreadcrumb';

const AddAddress = () => {
  const [addressData, setAddressData] = useState({
    street: '',
    city: ''
    // Add other fields as necessary
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAddressData({ ...addressData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await createAddress(addressData);
      navigate('/addresses'); // Redirect to addresses list
    } catch (error) {
      console.error('Failed to create address:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <PageBreadcrumb items={[{ label: 'Add Address', active: true }]} />
      <h2>Add Address</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Street:</label>
          <input
            type="text"
            name="street"
            value={addressData.street}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>City:</label>
          <input
            type="text"
            name="city"
            value={addressData.city}
            onChange={handleChange}
            required
          />
        </div>
        {/* Add other fields as necessary */}
        <button type="submit" disabled={loading}>
          {loading ? 'Adding...' : 'Add Address'}
        </button>
      </form>
    </div>
  );
};

export default AddAddress;
