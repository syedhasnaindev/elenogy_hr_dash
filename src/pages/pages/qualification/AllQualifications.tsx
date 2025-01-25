
import { useQualifications } from '../../../hooks/useQualifications';

import PageBreadcrumb from 'components/common/PageBreadcrumb';

import AdvanceTable from 'components/base/AdvanceTable';
import AdvanceTableProvider from 'providers/AdvanceTableProvider';
import { ColumnDef } from '@tanstack/react-table';
import AdvanceTableFooter from 'components/base/AdvanceTableFooter';
import RevealDropdown, {
  RevealDropdownTrigger
} from 'components/base/RevealDropdown';
import ActionDropdownItems from 'components/common/ActionDropdownItems';
import useAdvanceTable from 'hooks/useAdvanceTable';

const AllDepartments = () => {
  // const { user } = useAuth0();
  const { qualifications, loading } = useQualifications() as {
    qualifications: any | null;
    loading: boolean;
  };
  interface PageBreadcrumbItem {
    label: string;
    url?: string;
    active?: boolean;
  }
  // console.log(departments
  const defaultBreadcrumbItems: PageBreadcrumbItem[] = [
    {
      label: 'Page 1',
      url: '#!'
    },
    {
      label: 'Page 2',
      url: '#!'
    },
    {
      label: 'Default',
      active: true
    }
  ];
  // Define columns for the AdvanceTable
  const columns: ColumnDef<any>[] = [
    {
      accessorKey: 'Education_ID',
      header: 'Qualification ID',
    },
    {
      accessorKey: 'User_ID',
      header: 'User_ID',
    },
    {
      accessorKey: 'Institute_Name',
      header: 'Institute_Name',
    },
    {
      accessorKey: 'Degree_Type',
      header: 'Department Name',
    },
    {
      accessorKey: 'Degree_Name',
      header: 'Degree_Name',
    },
    {
      accessorKey: 'Completed_On',
      header: 'Completed_On',
    },
    {
      accessorKey: 'Institute_Name',
      header: 'Department Owner Id',
      
    },
    {
      accessorKey: 'Percentage',
      header: 'Percentage',
      
    },
    {
      accessorKey: 'Grade',
      header: 'Grade',
      
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
        headerProps: { style: { width: '7%' } },
        cellProps: { className: 'text-end' }
      }
    }
  ];
  const table = useAdvanceTable({
    data: qualifications,
    columns: columns,
    pageSize: 10,
    pagination: true,
    sortable: true,
    selection: true
  });
  return (
    <div style={{height:'100%'}}>
      <PageBreadcrumb items={defaultBreadcrumbItems} />
      <div className="mb-9">
        <h2 className="mb-4">Qualification</h2>
        {/* <h2>{user?.name}</h2> */}
        {loading ? (
          <p>Loading...</p>
        ) : (
          <AdvanceTableProvider {...table} >
            <div className="mx-n4 px-4 mx-lg-n6 px-lg-6 bg-body-emphasis border-top border-bottom border-translucent position-relative top-1">
            <AdvanceTable
              tableProps={{ className: 'phoenix-table fs-9  ' }}
            />
            <AdvanceTableFooter pagination />
            </div>
            
          </AdvanceTableProvider>
        )}
      </div>
    </div>
  );
};

export default AllDepartments;
