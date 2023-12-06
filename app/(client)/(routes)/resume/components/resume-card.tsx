'use client';

import { SafeResume, SafeUser } from '@/app/types';
import { Preview } from '@/components/preview';
import { Button } from '@/components/ui/button';
import { HeadingTheme } from '@/components/ui/heading-theme';

interface ResumeCardProps {
  data: SafeResume;
  currentUser?: SafeUser | null;
}

const ResumeCard: React.FC<ResumeCardProps> = ({ data }) => {
  return (
    <>
      <div className="md:flex bg-slate-100 hover:bg-slate-200 transition rounded-xl p-8 md:p-0">
        <div className="flex items-center font-medium dark:text-zinc-900">
          <Preview value={data.note} />
        </div>
      </div>
    </>
  );
};

export default ResumeCard;
