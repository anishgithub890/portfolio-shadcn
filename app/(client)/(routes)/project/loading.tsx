'use client';

import Container from '@/components/container';
import { Skeleton } from '@/components/ui/skeleton';

const Loading = () => {
  return (
    <Container>
      <div className="w-full h-full p-8 pt-24">
        <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Skeleton className="aspect-square rounded-xl" />
          <Skeleton className="aspect-square rounded-xl" />
          <Skeleton className="aspect-square rounded-xl" />
          <Skeleton className="aspect-square rounded-xl" />
          <Skeleton className="aspect-square rounded-xl" />
          <Skeleton className="aspect-square rounded-xl" />
        </div>
      </div>
    </Container>
  );
};

export default Loading;
