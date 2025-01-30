import { Stack } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useRoles } from '../../../hooks/useRoles';
import { useAuth0 } from '@auth0/auth0-react';
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

const AllRoles = () => {
  // const { user } = useAuth0();
  const { roles, loading } = useRoles() as {
    roles: any | null;
    loading: boolean;
  };
  interface PageBreadcrumbItem {
    label: string;
    url?: string;
    active?: boolean;
  }
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
      accessorKey: 'Role_Id',
      header: 'Role ID'
    },
    {
      accessorKey: 'Role_Name',
      header: 'Role Name'
    },
    {
      accessorKey: 'Role_Type',
      header: 'Role_Type'
    },
    {
      accessorKey: 'created_at',
      header: 'Created At'
    },
    {
      accessorKey: 'User_Id',
      header: 'User_Id'
    },
    {
      accessorKey: 'Department_Id',
      header: 'Department_Id'
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
        headerProps: { style: { width: '7%' } },
        cellProps: { className: 'text-end' }
      }
    }
  ];
  const table = useAdvanceTable({
    data: roles,
    columns: columns,
    pageSize: 10,
    pagination: true,
    sortable: true,
    selection: true
  });
  return (
    <div style={{ height: '100%' }}>
      <PageBreadcrumb items={defaultBreadcrumbItems} />
      <div className="mb-9">
        <h2 className="mb-4">Roles</h2>
        {/* <h2>{user?.name}</h2> */}
        {loading ? (
          <p>Loading...</p>
        ) : (
          <AdvanceTableProvider {...table}>
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

export default AllRoles;
