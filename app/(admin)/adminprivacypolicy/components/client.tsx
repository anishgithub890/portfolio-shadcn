'use client';

import { Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/ui/data-table';
import { HeadingTheme } from '@/components/ui/heading-theme';
import { Separator } from '@/components/ui/separator';
import { ApiList } from '@/components/ui/api-list';

import { columns, PrivacyColumn } from './columns';

interface PrivacyClientProps {
  data: PrivacyColumn[];
}

export const PrivacyClient: React.FC<PrivacyClientProps> = ({ data }) => {
  const router = useRouter();

  return (
    <>
      <div className="flex items-center justify-between">
        <HeadingTheme
          title={`Privacy Policy (${data.length})`}
          description="Manage privacy policy for your portfolio"
        />
        <Button onClick={() => router.push(`/adminprivacypolicy/new`)}>
          <Plus className="mr-2 h-4 w-4" /> Add New
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="note" columns={columns} data={data} />
      <HeadingTheme title="API" description="API Calls for Privacy Policy" />
      <Separator />
      <ApiList entityName="privacy" entityIdName="adminprivacyId" />
    </>
  );
};
