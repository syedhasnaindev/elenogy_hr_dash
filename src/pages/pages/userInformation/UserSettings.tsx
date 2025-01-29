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
  const steps = ['Department', 'Designation', "Role", 'Salary', 'Credentials'];

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const submitForm = async () => {
    // e.preventDefault();
    setLoading(true);
    setSuccessMessage('');
    setErrorMessage('');

    try {
      const response = await createUserSettings(formData);
      setSuccessMessage('Personal information created successfully!');
    } catch (error) {
      setErrorMessage('Failed to create personal information. Please try again.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  const [formData, setFormData] = useState({
    Department_ID: '',
    Designation_ID: '',
    User_Id: User_Id,
    Login_Name: '',
    Hash_Password: '',
    Role_Name: '',
    Role_Type: '',
    Grade: '',
    Salary:'',
   
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
      case 0: return <Department value={formData} onChange={handleInputChange} />;
      case 1: return <Designation value={formData} onChange={handleInputChange} />;
      case 2: return <Role value={formData} onChange={handleInputChange} />;
      case 3: return <Salary value={formData} onChange={handleInputChange} />;
      case 4: return <Credentials value={formData} onChange={handleInputChange} />;
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

export default UserSetting;
