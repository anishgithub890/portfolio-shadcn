'use client';

import { SafeProject, SafeUser } from '@/app/types';
import { Preview } from '@/components/preview';

interface ProjectCardProps {
  data: SafeProject;
  currentUser?: SafeUser | null;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ data }) => {
  return (
    <>
      <figure className="md:flex bg-slate-100 hover:bg-slate-200 transition rounded-xl p-8 md:p-0">
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <div className="flex items-center font-medium dark:text-zinc-700">
            <Preview value={data.explanation.substring(0, 200)} />
          </div>
        </div>
      </figure>
    </>
  );
};

export default ProjectCard;
