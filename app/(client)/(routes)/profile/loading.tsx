'use client';

import Container from '@/components/container';
import { Skeleton } from '@/components/ui/skeleton';

const Loading = () => {
  return (
    <Container>
      <div className="w-full h-full p-10 duration-500 max-w-screen-sm mx-auto">
        <div className="mt-2 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-4">
          <Skeleton className="w-full aspect-square rounded-sm md:aspect-[2.2/1]" />
        </div>
      </div>
    </Container>
  );
};

export default Loading;