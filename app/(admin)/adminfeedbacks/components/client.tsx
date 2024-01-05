'use client';

import { useRouter } from 'next/navigation';

import { DataTable } from '@/components/ui/data-table';
import { HeadingTheme } from '@/components/ui/heading-theme';
import { Separator } from '@/components/ui/separator';
import { ApiList } from '@/components/ui/api-list';

import { columns, FeedbackColumn } from './columns';

interface FeedbackClientProps {
  data: FeedbackColumn[];
}

export const FeedbackClient: React.FC<FeedbackClientProps> = ({ data }) => {
  const router = useRouter();

  return (
    <>
      <div className="flex items-center justify-between">
        <HeadingTheme
          title={`Feedback (${data.length})`}
          description="Manage feedback for your portfolio"
        />
      </div>
      <Separator />
      <DataTable searchKey="type" columns={columns} data={data} />
      <HeadingTheme title="API" description="API Calls for Feedbacks" />
      <Separator />
      <ApiList entityName="feedbacks" entityIdName="adminfeedbackId" />
    </>
  );
};
