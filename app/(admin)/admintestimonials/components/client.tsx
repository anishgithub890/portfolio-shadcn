'use client';

import { Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/ui/data-table';
import { HeadingTheme } from '@/components/ui/heading-theme';
import { Separator } from '@/components/ui/separator';
import { ApiList } from '@/components/ui/api-list';

import { columns, TestimonialColumn } from './columns';

interface TestimonialClientProps {
  data: TestimonialColumn[];
}

export const TestimonialClient: React.FC<TestimonialClientProps> = ({
  data,
}) => {
  const router = useRouter();

  return (
    <>
      <div className="flex items-center justify-between">
        <HeadingTheme
          title={`Testimonials (${data.length})`}
          description="Manage testimonial for your portfolio"
        />
        <Button onClick={() => router.push(`/admintestimonials/new`)}>
          <Plus className="mr-2 h-4 w-4" /> Add New
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="name" columns={columns} data={data} />
      <HeadingTheme title="API" description="API calls for testimonials" />
      <Separator />
      <ApiList entityName="testimonials" entityIdName="admintestimonialId" />
    </>
  );
};
