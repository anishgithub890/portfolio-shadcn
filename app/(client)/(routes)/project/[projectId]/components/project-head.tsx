'use client';

import { SafeUser } from '@/app/types';
import Image from 'next/image';
import Loading from '@/components/loading';
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
        <Loading /> ?
        {
          <Image
            src={imageUrl}
            alt="Image"
            fill
            className="object-cover w-full"
          />
        }
        : {''}
      </div>
    </>
  );
};

export default ProjectHead;
