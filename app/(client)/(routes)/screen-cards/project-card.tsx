'use client';

import { useRouter } from 'next/navigation';

import { SafeProject } from '@/app/types';
import { Preview } from '@/components/preview';

interface ProjectCardProps {
  data: SafeProject;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ data }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/project/${data?.id}`);
  };

  return (
    <>
      <div className="md:flex bg-slate-100 hover:bg-slate-200 transition rounded-xl p-8 md:p-0">
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <div className="flex items-center font-medium dark:text-zinc-700">
            <Preview value={data.explanation} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
