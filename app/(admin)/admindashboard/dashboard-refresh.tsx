'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

const DashboardRefresh = () => {
  const router = useRouter();
  return (
    <>
      <div className="pt-2">
        <Button variant="outline" onClick={() => router.refresh()}>
          Refresh Data
        </Button>
      </div>
    </>
  );
};

export default DashboardRefresh;
