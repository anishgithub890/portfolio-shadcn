'use client';

import { ColumnDef } from '@tanstack/react-table';
import { CellAction } from './cell-action';

export type ExperienceColumn = {
  id?: string;
  year?: string;
  language?: string;
  isFeatured?: boolean;
  createdAt?: string;
};

export const columns: ColumnDef<ExperienceColumn>[] = [
  {
    accessorKey: 'year',
    header: 'Year',
  },
  {
    accessorKey: 'language',
    header: 'Language',
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
