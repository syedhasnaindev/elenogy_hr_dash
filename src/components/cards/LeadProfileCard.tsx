import Avatar from 'components/base/Avatar';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

interface LeadProfileCardProps {
  className?: string;
  name?: string;
  role?: string;
  company?: string;
  companyLink?: string;
  avatarSrc?: string;
}

const LeadProfileCard = ({
  className,
  name = 'Default Name',
  role = 'Default Role',
  company = 'Default Company',
  companyLink = '#',
  avatarSrc
}: LeadProfileCardProps) => {
  return (
    <Card className={classNames(className)}>
      <Card.Body>
        <Row className="align-items-center g-3 text-center text-xxl-start">
          <Col xs={12} xxl="auto">
            <Avatar
              size="5xl"
              src={avatarSrc || 'path/to/default/avatar.webp'} // Use a default avatar if none is provided
              className="d-inline-block"
            />
          </Col>
          <Col xs={12} sm="auto" className="flex-1">
            <h3 className="fw-bolder mb-2">{name}</h3>
            <p className="mb-0">{role}</p>
            <Link to={companyLink} className="fw-bold">
              {company}
            </Link>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default LeadProfileCard;
