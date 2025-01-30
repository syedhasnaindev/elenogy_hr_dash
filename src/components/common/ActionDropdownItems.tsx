import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

// Define the type for each action item
interface ActionItem {
  eventKey: string;
  label: string;
  type: 'redirect' | 'function';
  url?: string; // URL is optional for 'redirect' type actions
  callback?: () => void; // Callback function is optional for 'function' type actions
  className?: string;
  divider?: boolean; // Optional divider
}

// Define the props for the component
interface ActionDropdownItemsProps {
  actions?: ActionItem[]; // Optional, if not provided, default actions will be used
}

const ActionDropdownItems: React.FC<ActionDropdownItemsProps> = ({
  actions
}) => {
  // Default actions for demo if no actions are passed
  const navigate = useNavigate(); // Initialize useNavigate

  const defaultActions: ActionItem[] = [
    {
      eventKey: '1',
      label: 'View',
      type: 'function',
      callback: () => alert('View action clicked')
    },
    {
      eventKey: '2',
      label: 'Export',
      type: 'function',
      callback: () => console.log('Export action clicked')
    },
    {
      eventKey: '3',
      label: 'Go to Google',
      type: 'redirect',
      url: 'https://www.google.com'
    },
    {
      eventKey: '4',
      label: 'Remove',
      type: 'function',
      callback: () => alert('Remove action clicked'),
      className: 'text-danger',
      divider: true
    }
  ];

  // Use the passed actions or fallback to default actions
  const actionsToRender = actions || defaultActions;

  const handleActionClick = (action: ActionItem) => {
    if (action.type === 'redirect' && action.url) {
      if (action.url.startsWith('http')) {
        // External URL (e.g., Google)
        window.location.href = action.url;
      } else {
        // Internal route, use navigate to switch views
        navigate(action.url);
      }
    } else if (action.type === 'function' && action.callback) {
      action.callback(); // Call the provided callback function
    }
  };

  return (
    <>
      {actionsToRender.map((action, index) => (
        <React.Fragment key={index}>
          <Dropdown.Item
            eventKey={action.eventKey}
            className={action.className}
            onClick={() => handleActionClick(action)}
          >
            {action.label}
          </Dropdown.Item>
          {action.divider && <Dropdown.Divider />}
        </React.Fragment>
      ))}
    </>
  );
};

export default ActionDropdownItems;
