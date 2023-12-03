'use client';

import { Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/ui/data-table';
import { HeadingTheme } from '@/components/ui/heading-theme';
import { Separator } from '@/components/ui/separator';
import { ApiList } from '@/components/ui/api-list';

import { columns, ResumeColumn } from './columns';

interface ResumeClientProps {
  data: ResumeColumn[];
}

export const ResumeClient: React.FC<ResumeClientProps> = ({ data }) => {
  const router = useRouter();

  return (
    <>
      <div className="flex items-center justify-between">
        <HeadingTheme
          title={`Resume (${data.length})`}
          description="Manage resume for your portfolio"
        />
        <Button onClick={() => router.push(`/adminresume/new`)}>
          <Plus className="mr-2 h-4 w-4" /> Add New
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="note" columns={columns} data={data} />
      <HeadingTheme title="API" description="API Calls for Resumes" />
      <Separator />
      <ApiList entityName="resume" entityIdName="adminresumeId" />
    </>
  );
};
