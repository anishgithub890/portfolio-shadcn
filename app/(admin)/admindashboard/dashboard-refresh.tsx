'use client';

import * as React from 'react';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

const DashboardRefresh = () => {
  const router = useRouter();

  return (
    <>
      <div className="pt-2 flex flex-col sm:flex-row gap-4">
        <Button
          variant="outline"
          onClick={() => router.refresh()}
          className="p-6 text-md"
        >
          Refresh Data
        </Button>
      </div>
    </>
  );
};

export default DashboardRefresh;
