'use client';

import { ColumnDef } from '@tanstack/react-table';
import { CellAction } from './cell-action';

import { Preview } from '@/components/preview';

export type TermColumn = {
  id: string;
  note: string;
  isFeatured: boolean;
  createdAt: string;
};

export const columns: ColumnDef<TermColumn>[] = [
  {
    accessorKey: 'note',
    header: 'Terms-Note',
    cell: ({ row }) => (
      <div className="flex items-center">
        {<Preview value={row.original.note.slice(0, 100)} />}
      </div>
    ),
  },
  {
    accessorKey: 'isFeatured',
    header: 'Featured',
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
