'use client';

import Container from '@/components/container';
import { Skeleton } from '@/components/ui/skeleton';

const Loading = () => {
  return (
    <Container>
      <div className="w-full h-full p-10 duration-500 max-w-screen-sm mx-auto">
        <div className="mt-2 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-4">
          <Skeleton className="h-4 p-3 w-[150px]" />
          <Skeleton className="h-4 p-6 w-[650px]" />
          <Skeleton className="h-4 p-3 w-[150px]" />
          <Skeleton className="h-4 p-6 w-[650px]" />
          <Skeleton className="h-4 p-3 w-[150px]" />
          <Skeleton className="h-4 p-6 w-[650px]" />
          <Skeleton className="h-4 p-3 w-[150px]" />
          <Skeleton className="h-4 p-6 w-[250px]" />
          <Skeleton className="h-4 p-4 w-[100px]" />
        </div>
      </div>
    </Container>
  );
};

export default Loading;
