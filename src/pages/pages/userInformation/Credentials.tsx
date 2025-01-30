import Button from 'components/base/Button';
import DatePicker from 'components/base/DatePicker';
import ReactSelect from 'components/base/ReactSelect';
import generateUniquePassword from 'helpers/password-generator';
import { Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import { useEffect, useState, useRef } from 'react';

interface DesignationProps {
  value: any;
  onChange: (name: string, value: string) => void;
}

const Designation: React.FC<DesignationProps> = ({ value, onChange }) => {
  const [password, setPassword] = useState('');
  const isPasswordGenerated = useRef(false); // Ref to track if password is already generated

  useEffect(() => {
    const createPassword = async () => {
      // Only generate the password if it hasn't been generated already
      if (!isPasswordGenerated.current) {
        const uniquePassword = await generateUniquePassword(14);
        console.log('Generated Unique Password:', uniquePassword);
        setPassword(uniquePassword);
        onChange('Hash_Password', uniquePassword); // Automatically set the password in the parent
        isPasswordGenerated.current = true; // Mark the password as generated
      }
    };

    createPassword();
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div>
      <Row>
        <Col xs={12} xl={9}>
          <Row as="form" className="g-3 mb-6">
            <Col sm={6} md={6}>
              <FloatingLabel controlId="floatingInputGrid" label="Login Name">
                <Form.Control
                  type="text"
                  placeholder="Login Name"
                  value={value.Login_Name}
                  onChange={e => onChange('Login_Name', e.target.value)}
                />
              </FloatingLabel>
            </Col>
            <Col sm={6} md={6}>
              <FloatingLabel
                controlId="floatingInputGrid"
                label="Hash Password"
              >
                <Form.Control
                  type="text"
                  placeholder="Hash Password"
                  value={password}
                  disabled={true}
                  onChange={e => onChange('Hash_Password', e.target.value)}
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
