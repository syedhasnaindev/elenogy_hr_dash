import { UilBuilding } from '@iconscout/react-unicons';
import classNames from 'classnames';
import Button from 'components/base/Button';
import LeadInfoItem from 'components/info-items/LeadInfoItem';
import { Card } from 'react-bootstrap';

interface Credentials {
  User_Id: number;
  Login_Name: string;
  Hash_Password: string;
}

interface UserMapping {
  credentials?: Credentials; // Single object, not an array
}

interface CredentialCardProps {
  className?: string;
  user_mappings?: UserMapping[]; // Now it's an array
}

const DesignationCard = ({ className, user_mappings }: CredentialCardProps) => {
  return (
    <Card className={classNames(className)}>
      <Card.Body>
        <div className="d-flex align-items-center mb-5">
          <h3>Credential</h3>
          <Button variant="link" className="px-3">
            Edit
          </Button>
        </div>

        {user_mappings && user_mappings.length > 0 ? (
          user_mappings.map((mapping, index) =>
            mapping.credentials ? (
              <div>
                <LeadInfoItem
                  className="mb-4"
                  key={mapping.credentials.User_Id || index}
                  label="Login Name"
                  icon={UilBuilding}
                >
                  <p className="mb-0 text-body-secondary">
                    {mapping.credentials.Login_Name}
                  </p>
                </LeadInfoItem>
                <LeadInfoItem
                  className="mb-4"
                  key={mapping.credentials.User_Id || index}
                  label="Hash Password"
                  icon={UilBuilding}
                >
                  <p className="mb-0 text-body-secondary">
                    {mapping.credentials.Hash_Password}
                  </p>
                </LeadInfoItem>
              </div>
            ) : null
          )
        ) : (
          <p className="text-body-secondary">No credentials found.</p>
        )}
      </Card.Body>
    </Card>
  );
};

export default DesignationCard;
