'use client';

import { useRouter } from 'next/navigation';

import CustomeButton from './custome-button';
import { Heading } from './ui/heading';
import Image from 'next/image';

interface EmptyStateProps {
  title?: string;
  description?: string;
  showReset?: boolean;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  title = "OOOPS! It's Empty",
  description = "Looks like you haven't added any data yet..!!",
  showReset,
}) => {
  const router = useRouter();
  return (
    <div className="h-[60vh flex flex-col gap-2 justify-center items-center pt-[12rem]">
      <Image src="/images/empty.png" alt="empty" width={200} height={200} />
      <Heading center title={title} description={description} />
      <div className="w-48 mt-4">
        {showReset && (
          <CustomeButton
            outline
            label="Home"
            onClick={() => router.push('/')}
          />
        )}
      </div>
    </div>
  );
};

export default EmptyState;
