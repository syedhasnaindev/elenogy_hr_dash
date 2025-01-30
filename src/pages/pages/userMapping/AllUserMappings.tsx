import { Stack } from 'react-bootstrap';
import { useUserMappings } from '../../../hooks/useUserMappings';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import AdvanceTable from 'components/base/AdvanceTable';
import AdvanceTableProvider from 'providers/AdvanceTableProvider';
import { ColumnDef } from '@tanstack/react-table';
import AdvanceTableFooter from 'components/base/AdvanceTableFooter';
import RevealDropdown, {
  RevealDropdownTrigger
} from 'components/base/RevealDropdown';
import ActionDropdownItems from 'components/common/ActionDropdownItems';
import { aC } from '@fullcalendar/core/internal-common';

const AllUserMappings = () => {
  const { userMappings, loading } = useUserMappings();
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
      header: 'User Mapping ID'
    },
    {
      accessorKey: 'userId',
      header: 'User ID'
    },
    {
      accessorKey: 'mappingDetails',
      header: 'Mapping Details'
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
    data: userMappings,
    columns,
    pageSize: 10,
    pagination: true,
    sortable: true,
    selection: true
  };

  return (
    <div style={{ height: '100%' }}>
      <PageBreadcrumb items={[{ label: 'User Mappings', active: true }]} />
      <div className="mb-9">
        <h2 className="mb-4">User Mappings</h2>
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

export default AllUserMappings;
