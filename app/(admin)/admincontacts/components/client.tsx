'use client';

import { Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/ui/data-table';
import { HeadingTheme } from '@/components/ui/heading-theme';
import { Separator } from '@/components/ui/separator';
import { ApiList } from '@/components/ui/api-list';

import { columns, ContactColumn } from './columns';

interface ContactClientProps {
  data: ContactColumn[];
}

export const ContactClient: React.FC<ContactClientProps> = ({ data }) => {
  const router = useRouter();

  return (
    <>
      <div className="flex items-center justify-between">
        <HeadingTheme
          title={`Contact (${data.length})`}
          description="Manage contacts for your portfolio"
        />
        <Button onClick={() => router.push(`/admincontacts/new`)}>
          <Plus className="mr-2 h-4 w-4" /> Add Contact
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="name" columns={columns} data={data} />
      <HeadingTheme title="API" description="API Calls for Contacts" />
      <Separator />
      <ApiList entityName="contacts" entityIdName="admincontactId" />
    </>
  );
};
