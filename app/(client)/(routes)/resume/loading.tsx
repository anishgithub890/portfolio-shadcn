'use client';

import Container from '@/components/container';
import { Skeleton } from '@/components/ui/skeleton';

const Loading = () => {
  return (
    <Container>
      <div className="w-full h-full p-10 duration-400">
        <div className="mt-2 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-4">
          <Skeleton className="h-4 p-3 w-[550px]" />
          <Skeleton className="h-4 p-5 w-[250px]" />
          <Skeleton className="w-full aspect-square rounded-md md:aspect-[3.2/1]" />
        </div>
      </div>
    </Container>
  );
};

export default Loading;
