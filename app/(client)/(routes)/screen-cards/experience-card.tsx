'use client';

import { useEffect, useState } from 'react';
import { Loader } from 'lucide-react';
import { SafeExperience, SafeUser } from '@/app/types';

import { Preview } from '@/components/preview';
import { Badge } from '@/components/ui/badge';
import Container from '@/components/container';

interface ExperienceCardProps {
  data: SafeExperience;
  currentUser?: SafeUser | null;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ data }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 2 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {isLoading ? (
        <Container>
          <Loader className="w-8 h-8 animate-spin" />
        </Container>
      ) : (
        <figure className="md:flex bg-slate-100 hover:bg-slate-200 transition rounded-xl p-8 md:p-0 hover:-translate-y-2 duration-300">
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
      )}
    </>
  );
};

export default ExperienceCard;
