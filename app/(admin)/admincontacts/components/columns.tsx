'use client';

import { ColumnDef } from '@tanstack/react-table';
import { CellAction } from './cell-action';

export type ContactColumn = {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
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
