import { useState } from 'react';
import { createDepartment } from '../../../services/departmentService';
import { useNavigate } from 'react-router-dom';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import {
  TextField,
  Button,
  CircularProgress,
  Box,
  Typography
} from '@mui/material';

const AddDepartment = () => {
  const [departmentData, setDepartmentData] = useState({
    Department_Name: '',
    Description: ''
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDepartmentData({ ...departmentData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await createDepartment(departmentData);
      navigate('/analogy/departments/add-department'); // Redirect to departments list
    } catch (error) {
      console.error('Failed to create department:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 600,
        margin: '0 auto',
        mt: 5,
        p: 3,
        borderRadius: 2,
        boxShadow: 3,
        backgroundColor: 'background.paper'
      }}
    >
      <PageBreadcrumb items={[{ label: 'Add Department', active: true }]} />
      <Typography variant="h4" sx={{ mb: 2, fontWeight: 'bold' }}>
        Add Department
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box sx={{ mb: 3 }}>
          <TextField
            label="Department Name"
            name="Department_Name"
            value={departmentData.Department_Name}
            onChange={handleChange}
            fullWidth
            variant="outlined"
            required
            sx={{ mb: 2 }}
          />
          <TextField
            label="Description"
            name="Description"
            value={departmentData.Description}
            onChange={handleChange}
            fullWidth
            variant="outlined"
            required
            sx={{ mb: 2 }}
          />
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            disabled={loading}
            sx={{ width: '100%', padding: '12px', fontSize: '16px' }}
          >
            {loading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              'Add Department'
            )}
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default AddDepartment;
