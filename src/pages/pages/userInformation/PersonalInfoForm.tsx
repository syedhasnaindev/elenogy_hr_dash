import Button from 'components/base/Button';
import DatePicker from 'components/base/DatePicker';
import ReactSelect from 'components/base/ReactSelect';

import { Col, FloatingLabel, Form, Row } from 'react-bootstrap';
// import {FormWizard} from 'components/form-wizard/FormWizard';

interface PersonalInfoFormProps {
  value: any;

  onChange: (name: string, value: string) => void;
}
const PersonalInfoForm: React.FC<PersonalInfoFormProps> = ({
  value,
  onChange
}) => {
  return (
    <div>
      <Row className="g-3 justify-content-center my-5">
        <Col xs={12} xl={9}>
          <Row as="form" className="g-3 mb-6">
            <Col sm={6} md={6}>
              <FloatingLabel controlId="floatingInputGrid" label="Firts Name">
                <Form.Control
                  type="text"
                  placeholder="Firts Name"
                  value={value.First_Name}
                  onChange={e => onChange('First_Name', e.target.value)}
                />
              </FloatingLabel>
            </Col>
            <Col sm={6} md={6}>
              <FloatingLabel controlId="floatingInputGrid" label="Last Name">
                <Form.Control
                  type="text"
                  placeholder="Last Name"
                  value={value.Last_Name}
                  onChange={e => onChange('Last_Name', e.target.value)}
                />
              </FloatingLabel>
            </Col>
            <Col sm={6} md={3}>
              <FloatingLabel controlId="floatingInputGrid" label="Blood Group">
                <Form.Control
                  type="text"
                  placeholder="Blood Group"
                  value={value.Blood_Group}
                  onChange={e => onChange('Blood_Group', e.target.value)}
                />
              </FloatingLabel>
            </Col>

            <Col sm={6} md={5}>
              <FloatingLabel controlId="floatingInputGrid" label="Mobile">
                <Form.Control
                  type="number"
                  placeholder="Mobile"
                  value={value.Mobile}
                  onChange={e => onChange('Mobile', e.target.value)}
                />
              </FloatingLabel>
            </Col>
            <Col sm={6} md={4}>
              <FloatingLabel
                controlId="floatingInputGrid"
                label="Personal Email"
              >
                <Form.Control
                  type="email"
                  placeholder="Personal Email"
                  value={value.Personal_Email}
                  onChange={e => onChange('Personal_Email', e.target.value)}
                />
              </FloatingLabel>
            </Col>
            <Col sm={6} md={4}>
              <FloatingLabel
                controlId="floatingInputGrid"
                label="Secondary Email"
              >
                <Form.Control
                  type="email"
                  placeholder="Secondary Email"
                  value={value.Secondary_Email}
                  onChange={e => onChange('Secondary_Email', e.target.value)}
                />
              </FloatingLabel>
            </Col>
            <Col sm={6} md={4}>
              <FloatingLabel controlId="floatingInputGrid" label="Login Name">
                <Form.Control
                  type="text"
                  placeholder="Login Name"
                  value={value.Login_Name}
                  onChange={e => onChange('Login_Name', e.target.value)}
                />
              </FloatingLabel>
            </Col>

            <Col sm={6} md={4}>
              <FloatingLabel controlId="floatingSelectAdmin" label="Status">
                <Form.Select
                  value={value.Status}
                  onChange={e => onChange('Status', e.target.value)}
                >
                  <option>Select Status</option>
                  <option value="1">Pending</option>
                  <option value="2">Verified</option>
                  <option value="3">Cancelled</option>
                </Form.Select>
              </FloatingLabel>
            </Col>
            <Col sm={6} md={4}>
              <DatePicker
                render={(_, ref) => {
                  return (
                    <Form.Floating>
                      <Form.Control
                        type="text"
                        placeholder="DOB"
                        ref={ref}
                        id="DOB"
                        value={value.DOB}
                        onChange={e => onChange('DOB', e.target.value)}
                      />
                      <label htmlFor="DOB" className="ps-6">
                        DOB
                      </label>
                    </Form.Floating>
                  );
                }}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default PersonalInfoForm;
