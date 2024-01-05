'use client';

import { Preview } from '@/components/preview';

interface ContactInfoProps {
  name?: string;
  email?: string;
  message?: string;
}

const AdminContactInfo: React.FC<ContactInfoProps> = ({
  name,
  email,
  message,
}) => {
  return (
    <div className="col-span-8 flex flex-col gap-8">
      <div className="text-start font-semibold">
        <h2 className="text-2xl underline underline-offset-[7px] decoration-dashed">
          Complete detail of {name}
        </h2>
      </div>
      <div className="md:flex bg-slate-100 hover:bg-slate-200 transition rounded-md p-8 md:p-0">
        <div className="pt-6 md:p-8 space-y-4">
          <div className="text-lg dark:text-zinc-900 font-medium text-zinc-900">
            Full Name: {name}
          </div>
          <div className="text-lg dark:text-zinc-900 font-medium text-zinc-900">
            Email Address: {email}
          </div>
          <div className="text-md font-medium dark:text-zinc-900 text-zinc-900">
            Message: <Preview value={message!} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminContactInfo;
