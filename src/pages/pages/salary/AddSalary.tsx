import { useState } from 'react';
import { createSalary } from '../../../services/salaryService';
import { useNavigate } from 'react-router-dom';
import PageBreadcrumb from 'components/common/PageBreadcrumb';

const AddSalary = () => {
  const [salaryData, setSalaryData] = useState({
    amount: '',
    employeeId: '',
    // Add other fields as necessary
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSalaryData({ ...salaryData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await createSalary(salaryData);
      navigate('/salaries'); // Redirect to salaries list
    } catch (error) {
      console.error('Failed to create salary:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <PageBreadcrumb items={[{ label: 'Add Salary', active: true }]} />
      <h2>Add Salary</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Amount:</label>
          <input
            type="number"
            name="amount"
            value={salaryData.amount}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Employee ID:</label>
          <input
            type="text"
            name="employeeId"
            value={salaryData.employeeId}
            onChange={handleChange}
            required
          />
        </div>
        {/* Add other fields as necessary */}
        <button type="submit" disabled={loading}>
          {loading ? 'Adding...' : 'Add Salary'}
        </button>
      </form>
    </div>
  );
};

export default AddSalary; 