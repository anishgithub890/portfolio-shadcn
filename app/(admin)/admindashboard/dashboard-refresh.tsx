'use client';

import * as React from 'react';
import { IoMdRefresh } from 'react-icons/io';

import { useRouter } from 'next/navigation';
import CustomeButton from '@/components/custome-button';
import { Button } from '@/components/ui/button';

const DashboardRefresh = () => {
  const router = useRouter();

  return (
    <>
      <div className="pt-2 flex flex-col sm:flex-row gap-4">
        {/* <Button
          variant="outline"
          onClick={() => router.refresh()}
          className="p-6 text-md"
        >
          <div className="flex flex-row">
            <IoMdRefresh />
            <p>Refresh Data</p>
          </div>
        </Button> */}

        <CustomeButton
          outline
          label="Refresh Data"
          icon={IoMdRefresh}
          onClick={() => router.refresh()}
        />
      </div>
    </>
  );
};

export default DashboardRefresh;
