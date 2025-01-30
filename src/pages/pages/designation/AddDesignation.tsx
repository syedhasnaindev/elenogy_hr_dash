import { useState } from 'react';
import { createDesignation } from '../../../services/designationService';
import { useNavigate } from 'react-router-dom';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import { useDepartments } from 'hooks/useDepartments';

// Define Type for Designation Data
interface DesignationData {
  Designation_Name: string;
  Description: string;
  Department_Id: string;
}

// Define Type for Department
interface Department {
  Department_ID: number;
  Department_Name: string;
}

const AddDesignation = () => {
  const [designationData, setDesignationData] = useState<DesignationData>({
    Designation_Name: '',
    Description: '',
    Department_Id: ''
  });

  // Ensure correct type usage
  const { departments, loading } = useDepartments() as {
    departments: Department[] | null;
    loading: boolean;
  };

  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setDesignationData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createDesignation(designationData);
      navigate('/analogy/designations/add-designations');
    } catch (error) {
      console.error('Failed to create designation:', error);
    }
  };

  return (
    <div className="container">
      <PageBreadcrumb items={[{ label: 'Add Designation', active: true }]} />
      <div className="card p-4 shadow">
        <h2 className="mb-4">Add Designation</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Designation Name:</label>
            <input
              type="text"
              className="form-control"
              name="Designation_Name"
              value={designationData.Designation_Name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Description:</label>
            <input
              type="text"
              className="form-control"
              name="Description"
              value={designationData.Description}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Department:</label>
            <select
              className="form-select"
              name="Department_Id"
              value={designationData.Department_Id}
              onChange={handleChange}
              required
              disabled={loading}
            >
              <option value="">Select Department</option>
              {departments?.map(dept => (
                <option key={dept.Department_ID} value={dept.Department_ID}>
                  {dept.Department_Name}
                </option>
              ))}
            </select>
          </div>
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? 'Adding...' : 'Add Designation'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddDesignation;
