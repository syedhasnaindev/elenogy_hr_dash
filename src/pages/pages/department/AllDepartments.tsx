import { Stack } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useDepartments } from '../../../hooks/useDepartments';
import { useAuth0 } from "@auth0/auth0-react";
import starterImg from 'assets/img/spot-illustrations/2.png';
import starterDarkImg from 'assets/img/spot-illustrations/dark_2.png';
import Button from 'components/base/Button';
import { Link } from 'react-router-dom';
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
  const { departments, loading } = useDepartments() as {
    departments: any | null;
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
      accessorKey: 'Department_ID',
      header: 'Department ID',
    },
    {
      accessorKey: 'Department_Name',
      header: 'Department Name',
    },
    {
      accessorKey: 'Description',
      header: 'Location',
    },
    {
      accessorKey: 'created_at',
      header: 'Created At',
    },
    {
      accessorKey: 'Department_Owner_Id',
      header: 'Department Owner Id',
      
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
    data: departments,
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
        <h2 className="mb-4">Departments</h2>
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
