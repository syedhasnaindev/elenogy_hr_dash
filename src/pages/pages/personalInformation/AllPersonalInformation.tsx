import { Stack } from 'react-bootstrap';
import { usePersonalInformation } from '../../../hooks/usePersonalInformation';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import AdvanceTable from 'components/base/AdvanceTable';
import AdvanceTableProvider from 'providers/AdvanceTableProvider';
import { ColumnDef } from '@tanstack/react-table';
import AdvanceTableFooter from 'components/base/AdvanceTableFooter';
import RevealDropdown, { RevealDropdownTrigger } from 'components/base/RevealDropdown';
import ActionDropdownItems from 'components/common/ActionDropdownItems';

const AllPersonalInformation = () => {
  const { personalInformation, loading } = usePersonalInformation();

  const columns: ColumnDef<any>[] = [
    {
      accessorKey: 'id',
      header: 'Personal Info ID',
    },
    {
      accessorKey: 'name',
      header: 'Name',
    },
    {
      accessorKey: 'email',
      header: 'Email',
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
    data: personalInformation,
    columns,
    pageSize: 10,
    pagination: true,
    sortable: true,
    selection: true
  };

  return (
    <div style={{ height: '100%' }}>
      <PageBreadcrumb items={[{ label: 'Personal Information', active: true }]} />
      <div className="mb-9">
        <h2 className="mb-4">Personal Information</h2>
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

export default AllPersonalInformation; 