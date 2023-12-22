'use client';

import { SafeImage, SafeProject, SafeUser } from '@/app/types';
import Gallery from '@/components/gallery';
import GalleryTab from '@/components/gallery/gallery-tab';
import { Preview } from '@/components/preview';
import Image from 'next/image';

interface ProjectCardProps {
  data: SafeProject;
  images: SafeImage;
  // data: SafeImage;
  currentUser?: SafeUser | null;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ data, images }) => {
  return (
    <>
      <figure className="md:flex bg-slate-100 hover:bg-slate-200 transition rounded-xl p-8 md:p-0">
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          {/* <GalleryTab /> */}
          <Gallery images={data.images} />
        </div>
      </figure>
    </>
  );
};

export default ProjectCard;
