
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
import useAdvanceTable from 'hooks/useAdvanceTable';

const AllUserInfo = () => {
    // const { user } = useAuth0();
    const { personalInformation, loading } = usePersonalInformation() as {
        personalInformation: any | null;
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
    const actions: ActionItem[] = [
        {
            eventKey: '1',
            label: 'View',
            type: 'redirect',
            url: '/analogy/user-details/:',
        },
        {
            eventKey: '2',
            label: 'Export',
            type: 'function',
            callback: () => console.log('Export action clicked'),
        },
        {
            eventKey: '3',
            label: 'Go to Google',
            type: 'redirect',
            url: 'https://www.google.com',
        },
        {
            eventKey: '4',
            label: 'Remove',
            type: 'function',
            callback: () => alert('Remove action clicked'),
            className: 'text-danger',
            divider: true,
        },
    ];
    // Define columns for the AdvanceTable
    const columns: ColumnDef<any>[] = [
        {
            accessorKey: 'First_Name',
            header: 'First Name',
        },
        {
            accessorKey: 'Mobile',
            header: 'Mobile',
        },
        {
            accessorKey: 'Personal_Email',
            header: 'Personal Email',
        },
        {
            accessorKey: 'Secondary_Email',
            header: 'Secondary Email',
        },
        {
            accessorKey: 'Login_Name',
            header: 'Login Name',
        },
        {
            accessorKey: 'DOB',
            header: 'DOB',
        },
        {
            accessorKey: 'Registered_On',
            header: 'Registered On',
        },
        {
            accessorKey: 'Blood_Group',
            header: 'Blood Group',
        },
        {
            id: 'action',
            cell: ({ row }) => {
                const userId = row.original.User_Id; // Assuming each row has an `id` field

                const actions: ActionItem[] = [
                    {
                        eventKey: '1',
                        label: 'View',
                        type: 'redirect',
                        url: `/analogy/user-details/${userId}`,
                    },
                    {
                        eventKey: '2',
                        label: 'Export',
                        type: 'function',
                        callback: () => console.log('Export action clicked'),
                    },
                    {
                        eventKey: '3',
                        label: 'Go to Google',
                        type: 'redirect',
                        url: 'https://www.google.com',
                    },
                    {
                        eventKey: '4',
                        label: 'Remove',
                        type: 'function',
                        callback: () => alert('Remove action clicked'),
                        className: 'text-danger',
                        divider: true,
                    },
                ];

                return (
                    <RevealDropdownTrigger>
                        <RevealDropdown>
                            <ActionDropdownItems actions={actions} />
                        </RevealDropdown>
                    </RevealDropdownTrigger>
                );
            },
            meta: {
                headerProps: { style: { width: '7%' } },
                cellProps: { className: 'text-end' }
            }
        }
    ];
    const table = useAdvanceTable({
        data: personalInformation,
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
                <h2 className="mb-4">All User </h2>
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

export default AllUserInfo;
