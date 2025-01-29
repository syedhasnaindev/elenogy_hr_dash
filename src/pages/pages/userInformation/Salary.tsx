import Button from 'components/base/Button';
import DatePicker from 'components/base/DatePicker';
import ReactSelect from 'components/base/ReactSelect';

import { Col, FloatingLabel, Form, Row } from 'react-bootstrap';
// import {FormWizard} from 'components/form-wizard/FormWizard';


interface DesignationProps {

  value: any;

  onChange: (name: string, value: string) => void;

}
const Designation: React.FC<DesignationProps> = ({ value, onChange }) => {

  return (
    <div>
     
    
      <Row>
        <Col xs={12} xl={9}>
          <Row as="form" className="g-3 mb-6">
            <Col sm={6} md={6}>
              <FloatingLabel
                controlId="floatingInputGrid"
                label="Grade"
              >
                <Form.Control 
                type="text"
                 placeholder="Grade"
                 value={value.Grade}
        onChange={(e) => onChange('Grade', e.target.value)}
                 
                 />
              </FloatingLabel>
            </Col>
            <Col sm={6} md={6}>
              <FloatingLabel
                controlId="floatingInputGrid"
                label="Salary"
              >
                <Form.Control type="number" placeholder="Salary"
                value = {value.Salary}
                onChange={(e) => onChange('Salary', e.target.value)}
                />
              </FloatingLabel>
            </Col>
           
           
          
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Designation;
