'use client';

import { SafeResume, SafeUser } from '@/app/types';
import ClientOnly from '@/components/client-only';
import { Preview } from '@/components/preview';

interface ResumeCardProps {
  data: SafeResume;
  currentUser?: SafeUser | null;
}

const ResumeCard: React.FC<ResumeCardProps> = ({ data }) => {
  return (
    <>
      <ClientOnly>
        <div className="md:flex bg-slate-100 hover:bg-slate-200 transition rounded-sm shadow-md p-8 md:p-0">
          <div className="flex items-center font-medium dark:text-zinc-900">
            <Preview value={data.note} />
          </div>
        </div>
      </ClientOnly>
    </>
  );
};

export default ResumeCard;
