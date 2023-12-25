'use client';

import { Loader } from '@/components/ui/loader';
import Container from '@/components/container';

const Loading = () => {
  return (
    <Container>
      <div className="flex h-[60vh] w-full items-center justify-center pt-24">
        <Loader />
      </div>
    </Container>
  );
};

export default Loading;
