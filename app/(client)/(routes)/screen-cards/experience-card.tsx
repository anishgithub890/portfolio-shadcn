'use client';

import { SafeExperience, SafeUser } from '@/app/types';
import { Preview } from '@/components/preview';
import { Badge } from '@/components/ui/badge';

interface ExperienceCardProps {
  data: SafeExperience;
  currentUser?: SafeUser | null;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ data }) => {
  return (
    <>
      <figure className="md:flex bg-slate-100 hover:bg-slate-200 transition rounded-xl p-8 md:p-0">
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <figcaption className="font-medium">
            <Badge variant="outline">
              <div className="text-sky-500 text-sm font-medium">
                {data.year}
              </div>
            </Badge>
            <div className="text-zinc-700 pl-1">{data.language}</div>
          </figcaption>
          <blockquote>
            <div className="flex items-center font-medium dark:text-zinc-700">
              <Preview value={data.description} />
            </div>
          </blockquote>
        </div>
      </figure>
    </>
  );
};

export default ExperienceCard;
