'use client';

import { SafePrivacy, SafeUser } from '@/app/types';
import ClientOnly from '@/components/client-only';
import { Preview } from '@/components/preview';

interface PrivacyCardProps {
  data: SafePrivacy;
  currentUser?: SafeUser | null;
}

const PrivacyCard: React.FC<PrivacyCardProps> = ({ data }) => {
  return (
    <>
      <ClientOnly>
        <div className="md:flex bg-slate-100 hover:bg-slate-200/100 transition rounded-sm p-8 md:p-0">
          <div className="flex items-center font-medium dark:text-zinc-900">
            <Preview value={data.note} />
          </div>
        </div>
      </ClientOnly>
    </>
  );
};

export default PrivacyCard;
