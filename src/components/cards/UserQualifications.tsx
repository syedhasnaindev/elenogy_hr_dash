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

interface Qualification {
  Education_ID: number;
  User_ID: number;
  Degree_Type: string;
  Degree_Name: string;
  Institute_Name: string;
  Completed_On: string;
  Percentage: string;
  Grade: string;
}

interface UserQualificationCardProps {
  className?: string;
  qualifications: Qualification[];
}

const UserQualifications = ({
  className,
  qualifications = []
}: UserQualificationCardProps) => {
  return (
    <>
      <Card className={classNames(className)}>
        <Card.Body>
          <div className="d-flex align-items-center mb-5">
            <h3>Qualification</h3>
            <Button variant="link" className="px-3">
              Edit
            </Button>
          </div>
          {qualifications.map(qualification => (
            <div key={qualification.Education_ID} className="mb-5">
              <LeadInfoItem
                className="mb-4"
                label="Degree Type"
                icon={UilEstate}
                value={qualification.Degree_Type}
              />
              <LeadInfoItem
                className="mb-4"
                label="Degree Name"
                icon={UilMapPinAlt}
                value={qualification.Degree_Name}
              />
              <LeadInfoItem
                className="mb-4"
                label="Institute Name"
                icon={UilMap}
                value={qualification.Institute_Name}
              />
              <LeadInfoItem
                className="mb-4"
                label="Percentage"
                icon={UilWindsock}
                value={qualification.Percentage}
              />
              <LeadInfoItem
                className="mb-4"
                label="Grade"
                icon={UilWindsock}
                value={qualification.Grade}
              />
              <LeadInfoItem
                label="Completed On"
                icon={UilWindsock}
                value={qualification.Completed_On}
              />
            </div>
          ))}
        </Card.Body>
      </Card>
    </>
  );
};

export default UserQualifications;
