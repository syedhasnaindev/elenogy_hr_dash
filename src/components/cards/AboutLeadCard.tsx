import {
  UilBuilding,
  UilCheckCircle,
  UilClock,
  UilDollarAlt,
  UilEnvelopeAlt,
  UilFileCheckAlt,
  UilGlobe,
  UilPhone,
  UilPostcard
} from '@iconscout/react-unicons';
import classNames from 'classnames';
import Badge from 'components/base/Badge';
import Button from 'components/base/Button';
import LeadInfoItem from 'components/info-items/LeadInfoItem';
import { currencyFormat } from 'helpers/utils';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface LeadProfileCardProps {
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

const AboutLeadCard = ({
  className,
  login_name = 'login_name',
  Personal_Email = 'Personal_Email',
  Secondary_Email = 'Secondary_Email',
  Registered_On = '00-00-00',
  Mobile = '987654321',
  DOB = '00-00-00',
  Blood_Group = 'Unknown',
  User_Id = -1
}: LeadProfileCardProps) => {
  return (
    <Card className={classNames(className)}>
      <Card.Body>
        <div className="d-flex align-items-center mb-5">
          <h3>About User</h3>
          <Button variant="link" className="px-3">
            Edit
          </Button>
        </div>
        <LeadInfoItem className="mb-4" label="Login Name" icon={UilEnvelopeAlt}>
          <p className="mb-0 text-body-secondary">{login_name}</p>
        </LeadInfoItem>
        <LeadInfoItem
          className="mb-4"
          label="Personal Email"
          icon={UilEnvelopeAlt}
        >
          <Link to="mailto:ansolo5@jeemail.com">{Personal_Email}</Link>
        </LeadInfoItem>
        <LeadInfoItem
          className="mb-4"
          label="Secondry Email"
          icon={UilEnvelopeAlt}
        >
          <Link to="mailto:ansolo5@jeemail.com">{Secondary_Email}</Link>
        </LeadInfoItem>
        <LeadInfoItem className="mb-4" label="Phone" icon={UilPhone}>
          <a href="tel:+1234567890">{Mobile}</a>
        </LeadInfoItem>

        {/* <LeadInfoItem className="mb-4" label="Website" icon={UilGlobe}>
          <a href="#!">www.bb.ru.com</a>
        </LeadInfoItem> */}

        <LeadInfoItem className="mb-4" label="Blood Group" icon={UilBuilding}>
          <p className="mb-0 text-body-secondary">{Blood_Group}</p>
        </LeadInfoItem>
        <LeadInfoItem className="mb-4" label="DOB" icon={UilClock}>
          <p className="mb-0 text-body-secondary">{DOB}</p>
        </LeadInfoItem>
        <LeadInfoItem className="mb-4" label="Regitered On" icon={UilClock}>
          <p className="mb-0 text-body-secondary">{Registered_On}</p>
        </LeadInfoItem>
        <LeadInfoItem className="mb-4" label="User ID" icon={UilBuilding}>
          <p className="mb-0 text-body-secondary">{User_Id}</p>
        </LeadInfoItem>
      </Card.Body>
    </Card>
  );
};

export default AboutLeadCard;
