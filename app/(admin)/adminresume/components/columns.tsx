'use client';

import { ColumnDef } from '@tanstack/react-table';
import { CellAction } from './cell-action';

export type ResumeColumn = {
  id: string;
  note: string;
  createdAt: string;
};

export const columns: ColumnDef<ResumeColumn>[] = [
  {
    accessorKey: 'note',
    header: 'Resume-Note',
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
