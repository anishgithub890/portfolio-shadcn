'use client';

import Image from 'next/image';

import { SafeUser } from '@/app/types';
import { HeadingTheme } from '@/components/ui/heading-theme';

interface ProjectHeadProps {
  name: string;
  imageUrl: string;
  id: string;
  currentUser?: SafeUser | null;
}

const ProjectHead: React.FC<ProjectHeadProps> = ({ name, imageUrl }) => {
  return (
    <>
      <HeadingTheme title={name} />
      <div
        className="
        w-full
        h-[60vh]
        overflow-hidden
        rounded-xl
        relative
        "
      >
        <Image
          src={imageUrl}
          alt="Image"
          fill
          className="object-cover w-full"
        />
      </div>
    </>
  );
};

export default ProjectHead;
