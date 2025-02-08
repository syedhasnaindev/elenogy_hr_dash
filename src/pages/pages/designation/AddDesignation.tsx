import { useState } from "react";
import { createDesignation } from "../../../services/designationService";
import { useNavigate } from "react-router-dom";
import PageBreadcrumb from "components/common/PageBreadcrumb";
import { useDepartments } from "hooks/useDepartments";
import { Alert, Spinner } from "react-bootstrap";
import { motion } from "framer-motion";

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
    Designation_Name: "",
    Description: "",
    Department_Id: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Ensure correct type usage
  const { departments, loading: deptLoading } = useDepartments() as {
    departments: Department[] | null;
    loading: boolean;
  };

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setDesignationData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      await createDesignation(designationData);
      setSuccessMessage("✅ Designation added successfully!");
      setTimeout(() => navigate("/analogy/designations/add-designations"), 2000);
    } catch (error) {
      setErrorMessage("❌ Failed to create designation. Please try again.");
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <PageBreadcrumb items={[{ label: "Add Designation", active: true }]} />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <div className="card p-4 shadow">
          <h2 className="mb-4">Add Designation</h2>

          {/* Success & Error Messages */}
          {successMessage && <Alert variant="success">{successMessage}</Alert>}
          {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}

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
                disabled={deptLoading}
              >
                <option value="">Select Department</option>
                {departments?.map((dept) => (
                  <option key={dept.Department_ID} value={dept.Department_ID}>
                    {dept.Department_Name}
                  </option>
                ))}
              </select>
            </div>

            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? <Spinner animation="border" size="sm" /> : "Add Designation"}
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default AddDesignation;
