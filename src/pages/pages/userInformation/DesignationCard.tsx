import { UilBuilding } from '@iconscout/react-unicons';
import classNames from 'classnames';
import Button from 'components/base/Button';
import LeadInfoItem from 'components/info-items/LeadInfoItem';
import { Card } from 'react-bootstrap';

interface Designation {
  Designation_ID: number;
  Designation_Name: string;
  Description: string;
}

interface UserMapping {
  designation?: Designation; // Single object, not an array
}

interface LeadProfileCardProps {
  className?: string;
  user_mappings?: UserMapping[]; // Now it's an array
}

const DesignationCard = ({
  className,
  user_mappings
}: LeadProfileCardProps) => {
  return (
    <Card className={classNames(className)}>
      <Card.Body>
        <div className="d-flex align-items-center mb-5">
          <h3>Designation</h3>
          <Button variant="link" className="px-3">
            Edit
          </Button>
        </div>

        {user_mappings && user_mappings.length > 0 ? (
          user_mappings.map((mapping, index) =>
            mapping.designation ? (
              <div>
                <LeadInfoItem
                  className="mb-4"
                  key={mapping.designation.Designation_ID || index}
                  label="Designation Name"
                  icon={UilBuilding}
                >
                  <p className="mb-0 text-body-secondary">
                    {mapping.designation.Designation_Name}
                  </p>
                </LeadInfoItem>
                <LeadInfoItem
                  className="mb-4"
                  key={mapping.designation.Designation_ID || index}
                  label="Description"
                  icon={UilBuilding}
                >
                  <p className="mb-0 text-body-secondary">
                    {mapping.designation.Description}
                  </p>
                </LeadInfoItem>
              </div>
            ) : null
          )
        ) : (
          <p className="text-body-secondary">No designations found.</p>
        )}
      </Card.Body>
    </Card>
  );
};

export default DesignationCard;
