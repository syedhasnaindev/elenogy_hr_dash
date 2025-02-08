import Button from 'components/base/Button';
import DatePicker from 'components/base/DatePicker';
import ReactSelect from 'components/base/ReactSelect';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import FormWizard from 'components/form-wizard/FormWizard';
import { defaultBreadcrumbItems } from 'data/commonData';
import { Col, FloatingLabel, Form, Row, Spinner, Alert } from 'react-bootstrap';
import PersonalInfoForm from './PersonalInfoForm';
import AddressForm from './AddressForm';
import QualificationForm from './QualificationForm';
import { useState } from 'react';
import { createPersonalInformation } from './../../../services/personalInformationService';
import { motion } from 'framer-motion';

const UserInfo = () => {
  const steps = ['Personal Info', 'Address', 'Qualification'];

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const [formData, setFormData] = useState({
    First_Name: '',
    Last_Name: '',
    Mobile: '',
    Personal_Email: '',
    Secondary_Email: '',
    Login_Name: '',
    DOB: '',
    Registered_On: '',
    Blood_Group: '',
    Address_Type: '',
    Street: '',
    City: '',
    State: '',
    Zip_Code: '',
    Country: '',
    Degree_Type: '',
    Degree_Name: '',
    Institute_Name: '',
    Completed_On: '',
    Percentage: '',
    Grade: ''
  });

  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const submitForm = async () => {
    setLoading(true);
    setSuccessMessage('');
    setErrorMessage('');

    try {
      await createPersonalInformation(formData);
      setSuccessMessage('🎉 Personal information created successfully!');
    } catch (error) {
      setErrorMessage(
        '❌ Failed to create personal information. Please try again.'
      );
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <PersonalInfoForm value={formData} onChange={handleInputChange} />
        );
      case 1:
        return <AddressForm value={formData} onChange={handleInputChange} />;
      case 2:
        return (
          <QualificationForm value={formData} onChange={handleInputChange} />
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <PageBreadcrumb items={defaultBreadcrumbItems} />
      <h2 className="mb-4">Create a User</h2>

      {/* Success & Error Messages */}
      {successMessage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Alert variant="success">{successMessage}</Alert>
        </motion.div>
      )}
      {errorMessage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Alert variant="danger">{errorMessage}</Alert>
        </motion.div>
      )}

      {/* Form Wizard */}
      {loading ? (
        <div className="text-center mt-4">
          <Spinner animation="border" variant="primary" />
          <p>Submitting...</p>
        </div>
      ) : (
        <FormWizard
          steps={steps}
          renderStepContent={handleStepContent}
          onFinish={submitForm}
        />
      )}
    </div>
  );
};

export default UserInfo;
