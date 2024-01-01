'use client';

import { ColumnDef } from '@tanstack/react-table';
import { CellAction } from './cell-action';

export type FeedbackColumn = {
  id?: string;
  type?: string;
  comment?: string;
  createdAt?: string;
};

export const columns: ColumnDef<FeedbackColumn>[] = [
  {
    accessorKey: 'type',
    header: 'Type',
  },
  {
    accessorKey: 'comment',
    header: 'Comment',
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
