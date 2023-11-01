'use client';

import { ColumnDef } from '@tanstack/react-table';

export type ExperienceColumn = {
  id: string;
  year: string;
  language: string;
  description: string;
  createdAt: string;
};

export const columns = [];
