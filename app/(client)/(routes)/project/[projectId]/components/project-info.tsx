'use client';

import { SafeUser } from '@/app/types';
import { IconType } from 'react-icons';
import Link from 'next/link';
import { BsGithub } from 'react-icons/bs';
import { BiLinkExternal } from 'react-icons/bi';
import { Preview } from '@/components/preview';
import { UserAvatar } from '@/components/user-avatar';

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
          <div>Hosted by {user?.name}</div>
          <UserAvatar src={user?.imageUrl} />
        </div>
      </div>
      <hr />
      <div className="text-lg font-light text-neutral-900">{name}</div>
      <div className="text-lg font-light text-neutral-500">
        <Preview value={explanation} />
      </div>
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
      <hr />
    </div>
  );
};

export default ProjectInfo;
