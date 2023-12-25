'use client';

import { ColumnDef } from '@tanstack/react-table';
import { CellAction } from './cell-action';
// import { Preview } from '@/components/preview';

export type ProjectColumn = {
  id: string;
  name: string;
  viewUrl: string;
  githubUrl: string;
  // explanation: string;
  isFeatured: boolean;
  createdAt: string;
};

export const columns: ColumnDef<ProjectColumn>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'githubUrl',
    header: 'View Url',
  },
  {
    accessorKey: 'viewUrl',
    header: 'Github Url',
  },
  {
    accessorKey: 'isFeatured',
    header: 'Featured',
  },
  // {
  //   accessorKey: 'explanation',
  //   header: 'Explanation',
  //   cell: ({ row }) => (
  //     <div className="flex items-center">
  //       <Preview value={row.original.explanation} />
  //     </div>
  //   ),
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
