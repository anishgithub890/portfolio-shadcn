'use client';

import { SafeUser } from '@/app/types';
import Link from 'next/link';
import { BsGithub } from 'react-icons/bs';
import { BiLinkExternal } from 'react-icons/bi';
import { Preview } from '@/components/preview';
import { UserAvatar } from '@/components/user-avatar';
import { Separator } from '@/components/ui/separator';

interface ProjectInfoProps {
  user: SafeUser;
  name: string;
  explanation: string;
  viewUrl: string | null;
  githubUrl: string | null;
}

const ProjectInfo: React.FC<ProjectInfoProps> = ({
  user,
  name,
  explanation,
  viewUrl,
  githubUrl,
}) => {
  return (
    <div className="col-span-8 flex flex-col gap-8">
      <div className="md:flex bg-slate-100 hover:bg-slate-200 transition rounded-xl p-8 md:p-0">
        <div className="pt-6 md:p-8 space-y-4">
          <div className="flex flex-col gap-2">
            <div
              className="
                  text-xl
                  font-semibold
                  flex
                  flex-row
                  items-center
                  gap-2
                  "
            >
              <div className="dark:text-zinc-900">Hosted by {user?.name}</div>
              <UserAvatar src={user?.imageUrl} />
            </div>
          </div>
          <Separator orientation="horizontal" />
          <div className="text-lg dark:text-zinc-900 font-medium text-zinc-900">
            {name}
          </div>
          <div className="text-md font-medium dark:text-white text-zinc-900">
            <Preview value={explanation} />
          </div>
          <Separator orientation="horizontal" />
          <div className="flex gap-6">
            <Link href={`${githubUrl}`} target="_blank">
              <button className="py-2 rounded-sm px-4 text-slate-700 border border-[#C778DD] hover:bg-[#C778DD33] duration-150">
                <BsGithub className="text-2xl" />
              </button>
            </Link>
            <Link href={`${viewUrl}`} target="_blank">
              <button className="py-2 rounded-sm flex gap-2 px-4 text-slate-700 border border-[#C778DD] hover:bg-[#C778DD33] duration-150">
                Live <BiLinkExternal className="text-2xl" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;
