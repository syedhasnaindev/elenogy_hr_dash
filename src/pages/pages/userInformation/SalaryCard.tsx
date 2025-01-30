import { UilMoneyBill } from '@iconscout/react-unicons';
import classNames from 'classnames';
import Button from 'components/base/Button';
import LeadInfoItem from 'components/info-items/LeadInfoItem';
import { Card } from 'react-bootstrap';

interface Salary {
  Salary_ID: number;
  Salary: number;
  Grade: string;
  created_at: string;
}

interface Designation {
  Designation_ID: number;
  Designation_Name: string;
  Description: string;
  salaries?: Salary[]; // Salaries is an array
}

interface UserMapping {
  designation?: Designation;
}

interface SalaryCardProps {
  className?: string;
  user_mappings?: UserMapping[];
}

const SalaryCard = ({ className, user_mappings }: SalaryCardProps) => {
  return (
    <Card className={classNames(className)}>
      <Card.Body>
        <div className="d-flex align-items-center mb-5">
          <h3>Salary Details</h3>
          <Button variant="link" className="px-3">
            Edit
          </Button>
        </div>

        {user_mappings && user_mappings.length > 0 ? (
          user_mappings.map((mapping, index) =>
            mapping.designation &&
            mapping.designation.salaries &&
            mapping.designation.salaries.length > 0
              ? mapping.designation.salaries.map(salary => (
                  <div key={salary.Salary_ID}>
                    <LeadInfoItem
                      className="mb-4"
                      label="Salary Amount"
                      icon={UilMoneyBill}
                    >
                      <p className="mb-0 text-body-secondary">
                        Rs {salary.Salary}
                      </p>
                    </LeadInfoItem>
                    <LeadInfoItem
                      className="mb-4"
                      label="Effective Date"
                      icon={UilMoneyBill}
                    >
                      <p className="mb-0 text-body-secondary">
                        {new Date(salary.created_at).toLocaleDateString()}
                      </p>
                    </LeadInfoItem>
                  </div>
                ))
              : null
          )
        ) : (
          <p className="text-body-secondary">No salary details found.</p>
        )}
      </Card.Body>
    </Card>
  );
};

export default SalaryCard;
