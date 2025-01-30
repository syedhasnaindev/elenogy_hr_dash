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

interface Role {
  Role_Id: number;
  Role_Type: string;
  Role_Name: string;
  created_at: string;
}

interface RoleCardProps {
  className?: string;
  role: Role[];
}

const RoleCard = ({ className, role = [] }: RoleCardProps) => {
  return (
    <>
      <Card className={classNames(className)}>
        <Card.Body>
          <div className="d-flex align-items-center mb-5">
            <h3>Role</h3>
            <Button variant="link" className="px-3">
              Edit
            </Button>
          </div>
          {role.map(roles => (
            <div key={roles.Role_Id} className="mb-5">
              <LeadInfoItem
                className="mb-4"
                label="Role Type"
                icon={UilEstate}
                value={roles.Role_Type}
              />
              <LeadInfoItem
                className="mb-4"
                label="Role Name"
                icon={UilMapPinAlt}
                value={roles.Role_Name}
              />
              <LeadInfoItem
                className="mb-4"
                label="Created At"
                icon={UilMapPinAlt}
                value={roles.created_at}
              />
            </div>
          ))}
        </Card.Body>
      </Card>
    </>
  );
};

export default RoleCard;
