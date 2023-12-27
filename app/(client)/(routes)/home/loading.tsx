'use client';

import Container from '@/components/container';
import { Skeleton } from '@/components/ui/skeleton';

const Loading = () => {
  return (
    <Container>
      <div className="w-full h-full p-10">
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-4">
          <Skeleton className="w-full aspect-square rounded-xl md:aspect-[3.2/1]" />
          <Skeleton className="w-full aspect-square rounded-xl md:aspect-[3.2/1]" />
        </div>
      </div>
    </Container>
  );
};

export default Loading;
