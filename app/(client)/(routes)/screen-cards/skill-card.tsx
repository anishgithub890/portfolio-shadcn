'use client';

import { useEffect, useState } from 'react';
import { Loader } from 'lucide-react';
import Image from 'next/image';

import { SafeSkill, SafeUser } from '@/app/types';
import Container from '@/components/container';
import ClientOnly from '@/components/client-only';

interface SkillCardProps {
  data: SafeSkill;
  currentUser?: SafeUser | null;
}

const SkillCard: React.FC<SkillCardProps> = ({ data }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 1 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <ClientOnly>
        {isLoading ? (
          <Container>
            <Loader className="w-8 h-8 animate-spin" />
          </Container>
        ) : (
          <div className="col-span-1 cursor-pointer group">
            <div className="flex flex-col gap-2 w-[6rem] ml-5 mr-5 pt-6 text-center">
              <div
                className="
                aspect-square 
                w-[6rem] 
                relative 
                overflow-hidden 
                gap-2
                rounded-xl
                shadow-xl
                "
              >
                <Image
                  height="900"
                  width="900"
                  className="
                  object-cover 
                  h-[6rem] 
                  w-[6rem] 
                  group-hover:scale-110
                  bg-neutral-100
                  hover:bg-neutral-200
                  rounded-md
                  transition           
                 "
                  src={data.imageUrl}
                  alt="Listing"
                />
              </div>
              <div className="text-center text-zinc-700 dark:text-white text-sm font-serif">
                {data.label}
              </div>
            </div>
          </div>
        )}
      </ClientOnly>
    </>
  );
};

export default SkillCard;
