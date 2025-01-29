import Button from 'components/base/Button';
import DatePicker from 'components/base/DatePicker';
import ReactSelect from 'components/base/ReactSelect';

import { Col, FloatingLabel, Form, Row } from 'react-bootstrap';
// import {FormWizard} from 'components/form-wizard/FormWizard';
import {useDepartments} from "hooks/useDepartments";

interface DepartmentFormProps {
  value: any;
  onChange: (name: string, value: string) => void;
}

interface Departments {
  Department_ID: number;
  Department_Name: string;
}

const Department: React.FC<DepartmentFormProps> = ({ value, onChange }) => {

  // Ensure correct type usage
  const { departments, loading } = useDepartments() as {
    departments: Departments[] | null;
    loading: boolean;
  };

  const departmentOptions = departments?.map(department => ({
    value: department.Department_ID,
    label: department.Department_Name
  })) || [];

  const handleSelectChange = (selectedOption: any) => {
    onChange('Department_ID', selectedOption ? selectedOption.value : '');
  };

  return (
    <div>
      <Row>
        <Col xs={12} xl={9}>
          <Row as="form" className="g-3 mb-6">
            <Col sm={6} md={6}>
            <Form.Label>Department</Form.Label>
                <ReactSelect
                  options={departmentOptions}
                  value={departmentOptions.find(option => option.value === value.Department_ID)}
                  onChange={handleSelectChange}
                  isLoading={loading}
                  name='Department_Id'
                  placeholder="Select Department"
                />
             
              <input type='hidden' name='User_Id' value={value.User_Id}></input>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Department;
