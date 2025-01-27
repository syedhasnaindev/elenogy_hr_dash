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
    Education_ID?: number;
    Degree_Type?: string;
    Degree_Name?: string;
    Institute_Name?: string;
    Percentage?: string;
    Grade?: string;
    Completed_On?: string;
    User_Id?: number;
  
  }
  
  const LeadAddressCard = ({
    className,
    Education_ID = -1,
    Degree_Type = "Personal_Email",
    Degree_Name="Secondary_Email",
    Institute_Name= "00-00-00",
    Percentage='987654321',
    Grade= "00-00-00",
    User_Id=-1,
    Completed_On="00-00-00"
  }: UserQualificationCardProps) => {
    return (
      <Card className={classNames(className)}>
        <Card.Body>
          <div className="d-flex align-items-center mb-5">
            <h3>Qualifications</h3>
            <Button variant="link" className="px-3">
              Edit
            </Button>
          </div>
          <LeadInfoItem
            className="mb-4"
            label="Degree_Type"
            icon={UilEstate}
            value={Degree_Type}
          />
          <LeadInfoItem
            className="mb-4"
            label="Degree_Name"
            icon={UilMapPinAlt}
            value={Degree_Name}
          />
          <LeadInfoItem
            className="mb-4"
            label="Institute_Name"
            icon={UilMap}
            value={Institute_Name}
          />
          <LeadInfoItem
            label="Percentage"
            icon={UilWindsock}
            value={Percentage}
          />
          <LeadInfoItem
            label="Grade"
            icon={UilWindsock}
            value={Grade}
          />
          <LeadInfoItem
            label="Completed_On"
            icon={UilWindsock}
            value={Completed_On}
          />
        </Card.Body>
      </Card>
    );
  };
  
  export default LeadAddressCard;
  