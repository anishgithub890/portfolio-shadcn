'use client';

import Image from 'next/image';
import { SafeSkill, SafeUser } from '@/app/types';

interface SkillCardProps {
  data: SafeSkill;
  currentUser?: SafeUser | null;
}

const SkillCard: React.FC<SkillCardProps> = ({ data }) => {
  return (
    <>
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
          "
          >
            <Image
              fill
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
    </>
  );
};

export default SkillCard;
