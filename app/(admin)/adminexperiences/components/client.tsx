'use client';

import { Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/ui/data-table';
import { HeadingTheme } from '@/components/ui/heading-theme';
import { Separator } from '@/components/ui/separator';
import { ApiList } from '@/components/ui/api-list';

import { columns, ExperienceColumn } from './columns';

interface ExperienceClientProps {
  data: ExperienceColumn[];
}

export const ExperienceClient: React.FC<ExperienceClientProps> = ({ data }) => {
  const router = useRouter();

  return (
    <>
      <div className="flex items-center justify-between">
        <HeadingTheme
          title={`Experience (${data.length})`}
          description="Manage experience for your portfolio"
        />
        <Button onClick={() => router.push(`/adminexperiences/new`)}>
          <Plus className="mr-2 h-4 w-4" /> Add New
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="language" columns={columns} data={data} />
      <HeadingTheme title="API" description="API Calls for Experiences" />
      <Separator />
      <ApiList entityName="experiences" entityIdName="experienceId" />
    </>
  );
};
