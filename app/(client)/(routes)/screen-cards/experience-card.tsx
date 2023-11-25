'use client';

import { SafeExperience, SafeUser } from '@/app/types';

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
            <div className="text-sky-500">{data.year}</div>
            <div className="text-slate-700">{data.language}</div>
          </figcaption>
          <blockquote>
            <p className="text-lg font-medium">{data.description}</p>
          </blockquote>
        </div>
      </figure>
    </>
  );
};

export default ExperienceCard;
