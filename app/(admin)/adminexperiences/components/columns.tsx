'use client';

import { ColumnDef } from '@tanstack/react-table';
import { CellAction } from './cell-action';

export type ExperienceColumn = {
  id: string;
  year: string;
  language: string;
  // description: string;
  createdAt: string;
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
  // {
  //   accessorKey: 'description',
  //   header: 'Description',
  // },
  {
    accessorKey: 'createdAt',
    header: 'Date',
  },
  {
    id: 'actions',
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
