import Button from 'components/base/Button';
import DatePicker from 'components/base/DatePicker';
import ReactSelect from 'components/base/ReactSelect';

import { Col, FloatingLabel, Form, Row } from 'react-bootstrap';
// import {FormWizard} from 'components/form-wizard/FormWizard';
interface AddressFormProps {

  value: any;

  onChange: (name: string, value: string) => void;

}
const UserInfo : React.FC<AddressFormProps> = ({ value, onChange }) => {

  return (
    <div>
     
    
      <Row>
        <Col xs={12} xl={9}>
          <Row as="form" className="g-3 mb-6">
            <Col sm={6} md={6}>
              <FloatingLabel
                controlId="floatingInputGrid"
                label="Address Type"
              >
                <Form.Control type="text" placeholder="Address Type" 
                value={value.Address_Type}
                onChange={(e) => onChange('Address_Type', e.target.value)}
                />
              </FloatingLabel>
            </Col>
            <Col sm={6} md={6}>
              <FloatingLabel
                controlId="floatingInputGrid"
                label="Last Name"
              >
                <Form.Control type="text" placeholder="Street" 
                value={value.Street}
                onChange={(e)=>onChange('Street', e.target.value)}
                />
              </FloatingLabel>
            </Col>
           
            <Col sm={6} md={6}>
            <FloatingLabel
                controlId="floatingInputGrid"
                label="City"
              >
                <Form.Control type="text" placeholder="City"
                value={value.City}
                onChange={(e)=>onChange('City', e.target.value)}
                />
              </FloatingLabel>
            </Col>
            <Col sm={6} md={6}>
            <FloatingLabel
                controlId="floatingInputGrid"
                label="State"
              >
                <Form.Control type="text" placeholder="State"
                value={value.State}
                onChange={(e)=>onChange('State', e.target.value)}
                />
              </FloatingLabel>
            </Col>
            <Col sm={6} md={6}>
            <FloatingLabel
                controlId="floatingInputGrid"
                label="Zip Code"
              >
                <Form.Control type="email" placeholder="Zip Code" 
                value={value.Zip_Code}
                onChange={(e)=>onChange('Zip_Code', e.target.value)}
                />
              </FloatingLabel>
            </Col>
            <Col sm={6} md={6}>
            <FloatingLabel
                controlId="floatingInputGrid"
                label="Country"
              >
                <Form.Control type="text" placeholder="Country" 
                value={value.Country}
                onChange={(e)=>onChange('Country', e.target.value)}
                />
              </FloatingLabel>
            </Col>
           
           
          
           
          
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default UserInfo;
