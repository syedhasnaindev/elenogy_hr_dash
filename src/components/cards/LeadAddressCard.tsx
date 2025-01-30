import {
  UilEstate,
  UilMap,
  UilMapPinAlt,
  UilWindsock
} from '@iconscout/react-unicons';
import classNames from 'classnames';
import Button from 'components/base/Button';
import LeadInfoItem from 'components/info-items/LeadInfoItem';
import { Card } from 'react-bootstrap';

interface UserQualificationCardProps {
  className?: string;
  login_name?: string;
  Personal_Email?: string;
  Secondary_Email?: string;
  Registered_On?: string;
  Mobile?: string;
  DOB?: string;
  Blood_Group?: string;
  User_Id?: number;
}

const LeadAddressCard = ({
  className,
  login_name = 'login_name',
  Personal_Email = 'Personal_Email',
  Secondary_Email = 'Secondary_Email',
  Registered_On = '00-00-00',
  Mobile = '987654321',
  DOB = '00-00-00',
  Blood_Group = 'Unknown',
  User_Id = -1
}: UserQualificationCardProps) => {
  return (
    <Card className={classNames(className)}>
      <Card.Body>
        <div className="d-flex align-items-center mb-5">
          <h3>Address</h3>
          <Button variant="link" className="px-3">
            Edit
          </Button>
        </div>
        <LeadInfoItem
          className="mb-4"
          label="Street"
          icon={UilEstate}
          value="38/2 Penelope street"
        />
        <LeadInfoItem
          className="mb-4"
          label="Zip Code"
          icon={UilMapPinAlt}
          value="1425"
        />
        <LeadInfoItem
          className="mb-4"
          label="City"
          icon={UilMap}
          value="Qualimando"
        />
        <LeadInfoItem
          label="Country"
          icon={UilWindsock}
          value="United Empire of Brekania"
        />
      </Card.Body>
    </Card>
  );
};

export default LeadAddressCard;
