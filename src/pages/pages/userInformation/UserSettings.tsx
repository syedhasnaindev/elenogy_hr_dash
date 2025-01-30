import Button from 'components/base/Button';
import DatePicker from 'components/base/DatePicker';
import ReactSelect from 'components/base/ReactSelect';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import FormWizard from 'components/form-wizard/FormWizard';
import { defaultBreadcrumbItems } from 'data/commonData';
import { Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import PersonalInfoForm from './PersonalInfoForm';
import AddressForm from './AddressForm';
import QualificationForm from './QualificationForm';
import { useState } from 'react';
import { createUserSettings } from './../../../services/personalInformationService'; // Adjust the path based on your file structure
import Department from './Department';
import Role from './Role';
import Designation from './Designation';
import Salary from './Salary';
import Credentials from './Credentials';

interface UserSettingProps {
  User_Id: number;
}

const UserSetting: React.FC<UserSettingProps> = ({ User_Id }) => {
  const steps = ['Department', 'Designation', 'Role', 'Salary', 'Credentials'];

  const [formData, setFormData] = useState({
    User_Id: User_Id, // Initialize with prop value
    Department_ID: '', // Changed to match API expectations
    Designation_ID: '', // Changed to match API expectations
    Login_Name: '',
    Hash_Password: '',
    Role_Name: '',
    Role_Type: '',
    Grade: '',
    Salary: '',
    Comment: ''
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (name: string, value: string | number) => {
    console.log(`Updating ${name} with value:`, value); // Debug log
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const submitForm = async () => {
    setLoading(true);
    setSuccessMessage('');
    setErrorMessage('');

    console.log('Submitting form data:', formData); // Debug log

    try {
      const response = await createUserSettings({
        ...formData,
        User_Id: Number(User_Id) // Ensure User_Id is a number
      });
      setSuccessMessage('User settings created successfully!');
    } catch (error: any) {
      setErrorMessage(
        error.response?.data?.message || 'Failed to create user settings'
      );
      console.error('Submission error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleStepContent = (step: number) => {
    switch (step) {
      case 0:
        return <Department value={formData} onChange={handleInputChange} />;
      case 1:
        return <Designation value={formData} onChange={handleInputChange} />;
      case 2:
        return <Role value={formData} onChange={handleInputChange} />;
      case 3:
        return <Salary value={formData} onChange={handleInputChange} />;
      case 4:
        return <Credentials value={formData} onChange={handleInputChange} />;
    }
  };

  return (
    <div>
      <PageBreadcrumb items={defaultBreadcrumbItems} />
      <h2 className="mb-4">Create a user</h2>
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
      {successMessage && (
        <div className="alert alert-success">{successMessage}</div>
      )}
      <FormWizard
        steps={steps}
        renderStepContent={handleStepContent}
        onFinish={submitForm}
      />
    </div>
  );
};
export default UserSetting;
