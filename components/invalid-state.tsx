'use client';

import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';

interface InvalidStateProps {
  showReset?: boolean;
}

const InvalidState: React.FC<InvalidStateProps> = ({ showReset }) => {
  const router = useRouter();
  return (
    <div className="h-[35vh] flex flex-col gap-2 justify-center items-center">
      <p className="text-center border p-2 rounded-sm text-rose-700 bg-rose-100">
        oops! invalid url...
      </p>
      <div className="pt-2">
        {showReset && (
          <Button
            variant="outline"
            size="sm"
            onClick={() => router.push('/project')}
          >
            Project
          </Button>
        )}
      </div>
    </div>
  );
};

export default InvalidState;
