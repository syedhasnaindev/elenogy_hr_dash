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
import { createPersonalInformation } from './../../../services/personalInformationService'; // Adjust the path based on your file structure

// import {FormWizard} from 'components/form-wizard/FormWizard';
const UserInfo = () => {
  const steps = ['Personal Info', 'Address', 'Qualification'];

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const submitForm = async () => {
    // e.preventDefault();
    setLoading(true);
    setSuccessMessage('');
    setErrorMessage('');

    try {
      const response = await createPersonalInformation(formData);
      setSuccessMessage('Personal information created successfully!');
    } catch (error) {
      setErrorMessage('Failed to create personal information. Please try again.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

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
    Grade: '',

  });

  const handleInputChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // console.log('Form submitted:', formData);
    // try {
    //   const response = await axios.post('https://your-api-endpoint.com/submit', formData);
    //   console.log('Form submitted successfully:', response.data);
    //   alert('Form submitted successfully!');
    // } catch (error) {
    //   console.error('Error submitting form:', error);
    //   alert('Failed to submit the form. Please try again.');
    // }
  };
  const handleStepContent = (step: number) => {
    switch (step) {
      case 0: return <PersonalInfoForm value={formData} onChange={handleInputChange} />;
      case 1: return <AddressForm value={formData} onChange={handleInputChange} />;
      case 2: return <QualificationForm value={formData} onChange={handleInputChange} />;
      // case 1: return <AddressForm />;
      // case 2: return <PaymentForm />;
    }
  };

  return (
    <div>
      <PageBreadcrumb items={defaultBreadcrumbItems} />
      <h2 className="mb-4">Create a user</h2>
      {/* <Form > */}
      <FormWizard

        steps={steps}
        //  optionalSteps={[1]} // Address is optional
        renderStepContent={handleStepContent}
        onFinish={() => submitForm()}
      />
      {/* </Form> */}


    </div>
  );
};

export default UserInfo;
