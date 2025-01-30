import Button from 'components/base/Button';
import DatePicker from 'components/base/DatePicker';
import ReactSelect from 'components/base/ReactSelect';

import { Col, FloatingLabel, Form, Row } from 'react-bootstrap';
// import {FormWizard} from 'components/form-wizard/FormWizard';
interface QualificationFormProps {
  value: any;

  onChange: (name: string, value: string) => void;
}
const UserInfo: React.FC<QualificationFormProps> = ({ value, onChange }) => {
  return (
    <div>
      <Row className="g-3 justify-content-center my-5">
        <Col xs={12} xl={9}>
          <Row as="form" className="g-3 mb-6">
            <Col sm={6} md={6}>
              <FloatingLabel controlId="floatingInputGrid" label="Degree Type">
                <Form.Control
                  type="text"
                  placeholder="Degree Type"
                  value={value.Degree_Type}
                  onChange={e => onChange('Degree_Type', e.target.value)}
                />
              </FloatingLabel>
            </Col>
            <Col sm={6} md={6}>
              <FloatingLabel controlId="floatingInputGrid" label="Degree Name">
                <Form.Control
                  type="text"
                  placeholder="Degree Name"
                  value={value.Degree_Name}
                  onChange={e => onChange('Degree_Name', e.target.value)}
                />
              </FloatingLabel>
            </Col>

            <Col sm={6} md={6}>
              <FloatingLabel
                controlId="floatingInputGrid"
                label="Institute Name"
              >
                <Form.Control
                  type="text"
                  placeholder="Institute Name"
                  value={value.Institute_Name}
                  onChange={e => onChange('Institute_Name', e.target.value)}
                />
              </FloatingLabel>
            </Col>
            <Col sm={6} md={6}>
              <DatePicker
                render={(_, ref) => {
                  return (
                    <Form.Floating>
                      <Form.Control
                        type="text"
                        placeholder="Completed on "
                        ref={ref}
                        id="Completed on "
                        value={value.Completed_on}
                        onChange={e => onChange('Completed_on', e.target.value)}
                      />
                      <label htmlFor="Completed on " className="ps-6">
                        Completed on
                      </label>
                    </Form.Floating>
                  );
                }}
              />
            </Col>
            <Col sm={6} md={6}>
              <FloatingLabel controlId="floatingInputGrid" label="Percentage">
                <Form.Control
                  type="number"
                  placeholder="Percentage"
                  value={value.Percentage}
                  onChange={e => onChange('Percentage', e.target.value)}
                />
              </FloatingLabel>
            </Col>
            <Col sm={6} md={6}>
              <FloatingLabel controlId="floatingInputGrid" label="Grade">
                <Form.Control
                  type="text"
                  placeholder="Grade"
                  value={value.Grade}
                  onChange={e => onChange('Grade', e.target.value)}
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
