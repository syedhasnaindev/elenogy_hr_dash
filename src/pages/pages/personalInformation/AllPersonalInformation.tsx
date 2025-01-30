import { Stack } from 'react-bootstrap';
import { usePersonalInformation } from '../../../hooks/usePersonalInformation';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import AdvanceTable from 'components/base/AdvanceTable';
import AdvanceTableProvider from 'providers/AdvanceTableProvider';
import { ColumnDef } from '@tanstack/react-table';
import AdvanceTableFooter from 'components/base/AdvanceTableFooter';
import RevealDropdown, {
  RevealDropdownTrigger
} from 'components/base/RevealDropdown';
import ActionDropdownItems from 'components/common/ActionDropdownItems';

const AllPersonalInformation = () => {
  const { personalInformation, loading } = usePersonalInformation();
  interface ActionItem {
    eventKey: string;
    label: string;
    type: 'redirect' | 'function';
    url?: string;
    callback?: () => void;
    className?: string;
    divider?: boolean;
  }
  const actions: ActionItem[] = [
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
  const columns: ColumnDef<any>[] = [
    {
      accessorKey: 'id',
      header: 'Personal Info ID'
    },
    {
      accessorKey: 'name',
      header: 'Name'
    },
    {
      accessorKey: 'email',
      header: 'Email'
    },
    {
      id: 'action',
      cell: () => (
        <RevealDropdownTrigger>
          <RevealDropdown>
            <ActionDropdownItems actions={actions} />
          </RevealDropdown>
        </RevealDropdownTrigger>
      ),
      meta: {
        headerProps: { style: { width: '7%' }, className: 'text-end' },
        cellProps: { className: 'text-end' }
      }
    }
  ];

  const table = {
    data: personalInformation,
    columns,
    pageSize: 10,
    pagination: true,
    sortable: true,
    selection: true
  };

  return (
    <div style={{ height: '100%' }}>
      <PageBreadcrumb
        items={[{ label: 'Personal Information', active: true }]}
      />
      <div className="mb-9">
        <h2 className="mb-4">Personal Information</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <AdvanceTableProvider {...table}>
            <AdvanceTable tableProps={{ className: 'phoenix-table fs-9' }} />
            <AdvanceTableFooter pagination />
          </AdvanceTableProvider>
        )}
      </div>
    </div>
  );
};

export default AllPersonalInformation;
