import { Stack } from 'react-bootstrap';
import { useUserMappings } from '../../../hooks/useUserMappings';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import AdvanceTable from 'components/base/AdvanceTable';
import AdvanceTableProvider from 'providers/AdvanceTableProvider';
import { ColumnDef } from '@tanstack/react-table';
import AdvanceTableFooter from 'components/base/AdvanceTableFooter';
import RevealDropdown, { RevealDropdownTrigger } from 'components/base/RevealDropdown';
import ActionDropdownItems from 'components/common/ActionDropdownItems';

const AllUserMappings = () => {
  const { userMappings, loading } = useUserMappings();

  const columns: ColumnDef<any>[] = [
    {
      accessorKey: 'id',
      header: 'User Mapping ID',
    },
    {
      accessorKey: 'userId',
      header: 'User ID',
    },
    {
      accessorKey: 'mappingDetails',
      header: 'Mapping Details',
    },
    {
      id: 'action',
      cell: () => (
        <RevealDropdownTrigger>
          <RevealDropdown>
            <ActionDropdownItems />
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
            <AdvanceTable
              tableProps={{ className: 'phoenix-table fs-9' }}
            />
            <AdvanceTableFooter pagination />
          </AdvanceTableProvider>
        )}
      </div>
    </div>
  );
};

export default AllUserMappings; 