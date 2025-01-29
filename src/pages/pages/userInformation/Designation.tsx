import Button from 'components/base/Button';
import DatePicker from 'components/base/DatePicker';
import ReactSelect from 'components/base/ReactSelect';

import { Col, FloatingLabel, Form, Row } from 'react-bootstrap';
// import {FormWizard} from 'components/form-wizard/FormWizard';
import { useDesignation } from "hooks/useDesignations";

interface DepartmentFormProps {
  value: any;
  onChange: (name: string, value: string) => void;
}

interface Designation {
  Designation_ID: number;
  Designation_Name: string;
}

const Designation: React.FC<DepartmentFormProps> = ({ value, onChange }) => {

  // Ensure correct type usage
  const { Designation, loading } = useDesignation() as {
    Designation: Designation[] | null;
    loading: boolean;
  };

  const departmentOptions = Designation?.map(Designation => ({
    value: Designation.Designation_ID,
    label: Designation.Designation_Name
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
                value={departmentOptions.find(option => option.value === value.Designation_ID)}
                onChange={handleSelectChange}
                isLoading={loading}
                placeholder="Select Designation"
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Designation;
