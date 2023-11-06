'use client';

import { Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/ui/data-table';
import { HeadingTheme } from '@/components/ui/heading-theme';
import { Separator } from '@/components/ui/separator';
import { ApiList } from '@/components/ui/api-list';

import { columns, ChapterColumn } from './columns';

interface ChapterClientProps {
  data: ChapterColumn[];
}

export const ChapterClient: React.FC<ChapterClientProps> = ({ data }) => {
  // const params = useParams();
  const router = useRouter();

  return (
    <>
      <div className="flex items-center justify-between">
        <HeadingTheme
          title={`Chapters (${data.length})`}
          description="Manage chapter for your portfolio"
        />
        <Button onClick={() => router.push(`/adminchapters/new`)}>
          <Plus className="mr-2 h-4 w-4" /> Add New
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="label" columns={columns} data={data} />
      <HeadingTheme title="API" description="API Calls for Chapters" />
      <Separator />
      <ApiList entityName="chapters" entityIdName="chapterId" />
    </>
  );
};
