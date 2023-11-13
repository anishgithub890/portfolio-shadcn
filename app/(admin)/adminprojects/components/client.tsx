'use client';

import { Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/ui/data-table';
import { HeadingTheme } from '@/components/ui/heading-theme';
import { Separator } from '@/components/ui/separator';
import { ApiList } from '@/components/ui/api-list';

import { columns, ProjectColumn } from './columns';

interface ProjectClientProps {
  data: ProjectColumn[];
}

export const ProjectClient: React.FC<ProjectClientProps> = ({ data }) => {
  const router = useRouter();

  return (
    <>
      <div className="flex items-center justify-between">
        <HeadingTheme
          title={`Project (${data.length})`}
          description="Manage project for your portfolio"
        />
        <Button onClick={() => router.push(`/adminprojects/new`)}>
          <Plus className="mr-2 h-4 w-4" /> Add New
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="name" columns={columns} data={data} />
      <HeadingTheme title="API" description="API Calls for Projects" />
      <Separator />
      <ApiList entityName="projects" entityIdName="adminprojectId" />
    </>
  );
};
