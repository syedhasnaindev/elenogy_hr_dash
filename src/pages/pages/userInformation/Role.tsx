import Button from 'components/base/Button';
import DatePicker from 'components/base/DatePicker';
import ReactSelect from 'components/base/ReactSelect';

import { Col, FloatingLabel, Form, Row } from 'react-bootstrap';
// import {FormWizard} from 'components/form-wizard/FormWizard';


interface RoleProps {

  value: any;

  onChange: (name: string, value: string) => void;

}
const Role: React.FC<RoleProps> = ({ value, onChange }) => {

  return (
    <div>
     
    
      <Row>
        <Col xs={12} xl={9}>
          <Row as="form" className="g-3 mb-6">
            <Col sm={6} md={6}>
              <FloatingLabel
                controlId="floatingInputGrid"
                label="Role Name"
              >
                <Form.Control 
                type="text"
                 placeholder="Role Name"
                 value={value.Role_Name}
        onChange={(e) => onChange('Role_Name', e.target.value)}
                 
                 />
              </FloatingLabel>
            </Col>
            <Col sm={6} md={6}>
              <FloatingLabel
                controlId="floatingInputGrid"
                label="Comment"
              >
                <Form.Control type="text" placeholder="Comment"
                value = {value.Comment}
                onChange={(e) => onChange('Comment', e.target.value)}
                />
              </FloatingLabel>
            </Col>
            <Col sm={6} md={6}>
              <FloatingLabel
                controlId="floatingInputGrid"
                label="Role_Type"
              >
                <Form.Control type="text" placeholder="Role_Type"
                value = {value.Role_Type}
                onChange={(e) => onChange('Role_Type', e.target.value)}
                />
              </FloatingLabel>
            </Col>
           
           
          
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Role;
