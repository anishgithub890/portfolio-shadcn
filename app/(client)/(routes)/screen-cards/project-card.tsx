'use client';

import { useRouter } from 'next/navigation';

import { SafeProject, SafeUser } from '@/app/types';
import { Preview } from '@/components/preview';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  data: SafeProject;
  currentUser?: SafeUser | null;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ data }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/project/${data?.id}`);
  };

  return (
    <>
      <div className="md:flex bg-slate-100 hover:bg-slate-200/75 transition rounded-xl p-8 md:p-0">
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <div onClick={handleClick} className="items-center">
            <Image
              src={data.imageUrl}
              alt=""
              width={`900`}
              height={`900`}
              className="rounded-md cursor-pointer"
            />
          </div>
          <div className="flex-col items-center font-medium dark:text-zinc-700">
            <Preview value={data.explanation.substring(0, 400)} />
            <strong
              onClick={handleClick}
              className="text-rose-700 pl-4 text-sm cursor-pointer"
            >
              ...readmore
            </strong>
          </div>
          <div className="pt-1 pb-4">
            <Separator orientation="horizontal" />
          </div>
          <div className="flex gap-4">
            <Link href={`${data.githubUrl}`} target="_blank">
              <button className="py-2 rounded-sm px-4 text-slate-700 border border-[#C778DD] hover:bg-[#C778DD33] duration-150">
                <Github className="text-2xl" />
              </button>
            </Link>
            <Link href={`${data.viewUrl}`} target="_blank">
              <button className="py-2 rounded-sm flex gap-2 px-4 text-slate-700 border border-[#C778DD] hover:bg-[#C778DD33] duration-150">
                Live <ExternalLink className="text-2xl" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
