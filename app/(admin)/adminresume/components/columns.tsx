'use client';

import { ColumnDef } from '@tanstack/react-table';
import { CellAction } from './cell-action';

import { Preview } from '@/components/preview';

export type ResumeColumn = {
  id: string;
  note: string;
  createdAt: string;
};

export const columns: ColumnDef<ResumeColumn>[] = [
  {
    accessorKey: 'note',
    header: 'Resume-Note',
    cell: ({ row }) => (
      <div className="flex items-center">
        {<Preview value={row.original.note.substring(50)} />}
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
