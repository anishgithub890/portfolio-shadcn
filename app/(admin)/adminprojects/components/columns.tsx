'use client';

import { ColumnDef } from '@tanstack/react-table';
import { CellAction } from './cell-action';
import { Preview } from '@/components/preview';

export type ProjectColumn = {
  id: string;
  name: string;
  explanation: string;
  createdAt: string;
};

export const columns: ColumnDef<ProjectColumn>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'explanation',
    header: 'Explanation',
    cell: ({ row }) => (
      <div className="flex items-center">
        <Preview value={row.original.explanation} />
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
