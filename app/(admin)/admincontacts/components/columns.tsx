'use client';

import { ColumnDef } from '@tanstack/react-table';
import { CellAction } from './cell-action';
import { Preview } from '@/components/preview';

export type ContactColumn = {
  id?: string;
  name?: string;
  email?: string;
  message?: string;
  createdAt?: string;
};

export const columns: ColumnDef<ContactColumn>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'message',
    header: 'Message',
    cell: ({ row }) => (
      <div className="flex items-center">
        <Preview value={row.original.message!.substring(0, 200)} />
      </div>
    ),
  },
  {
    accessorKey: 'createdAt',
    header: 'Date',
  },
  {
    id: 'actions',
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
