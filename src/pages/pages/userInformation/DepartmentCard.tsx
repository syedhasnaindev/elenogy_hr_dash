import { UilBuilding } from '@iconscout/react-unicons';
import classNames from 'classnames';
import Button from 'components/base/Button';
import LeadInfoItem from 'components/info-items/LeadInfoItem';
import { Card } from 'react-bootstrap';

interface Department {
  Department_ID: number;
  Department_Name: string;
  Description: string;
}

interface UserMapping {
  department?: Department; // Single object, not an array
}

interface DepartmentProps {
  className?: string;
  user_mappings?: UserMapping[]; // Now it's an array
}

const DepartmentCard = ({ className, user_mappings }: DepartmentProps) => {
  return (
    <Card className={classNames(className)}>
      <Card.Body>
        <div className="d-flex align-items-center mb-5">
          <h3>Department</h3>
          <Button variant="link" className="px-3">
            Edit
          </Button>
        </div>

        {user_mappings && user_mappings.length > 0 ? (
          user_mappings.map((mapping, index) =>
            mapping.department ? (
              <div>
                <LeadInfoItem
                  className="mb-4"
                  key={mapping.department.Department_ID || index}
                  label="Designation Name"
                  icon={UilBuilding}
                >
                  <p className="mb-0 text-body-secondary">
                    {mapping.department.Department_Name}
                  </p>
                </LeadInfoItem>
                <LeadInfoItem
                  className="mb-4"
                  key={mapping.department.Department_ID || index}
                  label="Description"
                  icon={UilBuilding}
                >
                  <p className="mb-0 text-body-secondary">
                    {mapping.department.Description}
                  </p>
                </LeadInfoItem>
              </div>
            ) : null
          )
        ) : (
          <p className="text-body-secondary">No department found.</p>
        )}
      </Card.Body>
    </Card>
  );
};

export default DepartmentCard;
