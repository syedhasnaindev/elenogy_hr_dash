import { useState, useEffect } from 'react';
import { Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import axios from 'axios';

interface AddressFormProps {
  value: any;
  onChange: (name: string, value: string) => void;
}

const UserInfo: React.FC<AddressFormProps> = ({ value, onChange }) => {
  const [countries, setCountries] = useState<string[]>([]);
  const [states, setStates] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);

  useEffect(() => {
    // Fetch countries from REST Countries API (No API key required)
    axios
      .get('https://restcountries.com/v3.1/all?fields=name')
      .then(response => {
        const countryNames = response.data
          .map((country: any) => country.name.common)
          .sort();
        setCountries(countryNames);
      })
      .catch(error => console.error('Error fetching countries:', error));
  }, []);

  useEffect(() => {
    if (value.Country) {
      // Fetch states based on selected country
      axios
        .post('https://countriesnow.space/api/v0.1/countries/states', {
          country: value.Country
        })
        .then(response => {
          if (response.data.data && response.data.data.states) {
            setStates(
              response.data.data.states.map((state: any) => state.name).sort()
            );
          }
        })
        .catch(error => console.error('Error fetching states:', error));
    }
  }, [value.Country]);

  useEffect(() => {
    if (value.State) {
      // Fetch cities based on selected state
      axios
        .post('https://countriesnow.space/api/v0.1/countries/state/cities', {
          country: value.Country,
          state: value.State
        })
        .then(response => {
          if (response.data.data) {
            setCities(response.data.data.sort());
          }
        })
        .catch(error => console.error('Error fetching cities:', error));
    }
  }, [value.State]);

  return (
    <div>
      <Row className="g-3 justify-content-center my-5">
        <Col xs={12} xl={9}>
          <Row as="form" className="g-3 mb-6">
            <Col sm={6} md={6}>
              <FloatingLabel controlId="floatingInputGrid" label="Address Type">
                <Form.Control
                  type="text"
                  placeholder="Address Type"
                  value={value.Address_Type}
                  onChange={e => onChange('Address_Type', e.target.value)}
                />
              </FloatingLabel>
            </Col>

            <Col sm={6} md={6}>
              <FloatingLabel controlId="floatingInputGrid" label="Street">
                <Form.Control
                  type="text"
                  placeholder="Street"
                  value={value.Street}
                  onChange={e => onChange('Street', e.target.value)}
                />
              </FloatingLabel>
            </Col>

            {/* Country Dropdown */}
            <Col sm={6} md={6}>
              <FloatingLabel controlId="floatingInputGrid" label="Country">
                <Form.Select
                  value={value.Country || ''}
                  onChange={e => onChange('Country', e.target.value)}
                >
                  <option value="">Select Country</option>
                  {countries.map(country => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </Form.Select>
              </FloatingLabel>
            </Col>

            {/* State Dropdown */}
            <Col sm={6} md={6}>
              <FloatingLabel controlId="floatingInputGrid" label="State">
                <Form.Select
                  value={value.State || ''}
                  onChange={e => onChange('State', e.target.value)}
                  disabled={!value.Country}
                >
                  <option value="">Select State</option>
                  {states.map(state => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </Form.Select>
              </FloatingLabel>
            </Col>

            {/* City Dropdown */}
            <Col sm={6} md={6}>
              <FloatingLabel controlId="floatingInputGrid" label="City">
                <Form.Select
                  value={value.City || ''}
                  onChange={e => onChange('City', e.target.value)}
                  disabled={!value.State}
                >
                  <option value="">Select City</option>
                  {cities.map(city => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </Form.Select>
              </FloatingLabel>
            </Col>

            <Col sm={6} md={6}>
              <FloatingLabel controlId="floatingInputGrid" label="Zip Code">
                <Form.Control
                  type="text"
                  placeholder="Zip Code"
                  value={value.Zip_Code}
                  onChange={e => onChange('Zip_Code', e.target.value)}
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
