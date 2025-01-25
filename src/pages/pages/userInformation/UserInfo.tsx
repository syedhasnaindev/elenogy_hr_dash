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
// import {FormWizard} from 'components/form-wizard/FormWizard';
const UserInfo = () => {
  const steps = ['Personal Info', 'Address', 'Qualification'];
  

  const submitForm = () => {
    console.log('Form submitted');
    
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
    address:{
      Address_Type:'',
      Street:'',
      City:'',
      State:'',
      Zip_Code:'',
      Country:'',
    },
    Qualification:{
      Degree_Type:'',
      Degree_Name:'',
      Institute_Name:'',
      Completed_On:'',
      Percentage:'',
      Grade:'',  
    }
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
    switch(step) {
      case 0: return <PersonalInfoForm value={formData} onChange={handleInputChange}  />;
      case 1: return <AddressForm value={formData.address} onChange={handleInputChange} />;
      case 2: return <QualificationForm value={formData.Qualification} onChange={handleInputChange} />;
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
