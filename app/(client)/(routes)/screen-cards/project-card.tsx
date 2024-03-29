'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink, Github } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { SafeProject, SafeUser } from '@/app/types';
import { Preview } from '@/components/preview';
import { Separator } from '@/components/ui/separator';
import ClientOnly from '@/components/client-only';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

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
      <ClientOnly>
        <div className="md:flex bg-slate-100 hover:bg-slate-200 transition rounded-md hover:shadow-2xl shadow-md p-8 md:p-0 hover:-translate-y-1 duration-300">
          <div className="pt-4 md:p-8 text-left space-y-[1px]">
            <div onClick={handleClick} className="items-center">
              <Image
                src={data.imageUrl}
                alt=""
                width="900"
                height="900"
                className="rounded-md border-2 border-zinc-400/80 cursor-pointer"
              />
            </div>
            <div className="flex-col items-center font-medium dark:text-zinc-900">
              <h2 className="text-2xl font-semibold hover:underline transition">
                {data.name}
              </h2>
            </div>
            <div className="flex-col items-center font-medium dark:text-zinc-900">
              <Preview value={data.explanation.substring(0, 300)} />
              <strong
                onClick={handleClick}
                className="text-rose-700 hover:text-rose-600 transition pl-4 text-sm cursor-pointer"
              >
                ...readmore
              </strong>
            </div>
            <div className="pt-1 pb-4">
              <Separator orientation="horizontal" />
            </div>
            <div className="flex gap-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link href={`${data.githubUrl}`} target="_blank">
                      <button className="py-2 rounded-sm px-4 text-slate-700 border border-[#C778DD] hover:bg-[#C778DD33] transition duration-150">
                        <Github className="text-2xl" />
                      </button>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="font-semibold text-md p-1">
                      Github source code
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link href={`${data.viewUrl}`} target="_blank">
                      <button className="py-2 rounded-sm flex gap-2 px-4 text-slate-700 border border-[#C778DD] hover:bg-[#C778DD33] transition duration-150">
                        Live <ExternalLink className="text-2xl" />
                      </button>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="font-semibold text-md p-1">Live demo</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
      </ClientOnly>
    </>
  );
};

export default ProjectCard;
