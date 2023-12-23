'use client';

import Image from 'next/image';
import { MouseEventHandler } from 'react';
import { useRouter } from 'next/navigation';

import usePreviewModal from '@/hooks/use-preview-modal';
import { SafeImage, SafeProject } from '@/app/types';
import { Preview } from '@/components/preview';

interface ProjectCardProps {
  data: SafeProject;
  image: SafeImage;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ data, image }) => {
  const previewModal = usePreviewModal();
  const router = useRouter();

  const handleClick = () => {
    router.push(`/project/${data?.id}`);
  };

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    previewModal.onOpen(data);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4"
    >
      {/* Image & actions */}
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          // src={image?.url[1]}
          src={'/images/empty.png'}
          alt=""
          fill
          className="aspect-square object-cover rounded-md"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5"></div>
      </div>
      {/* Description */}
      <div>
        <p className="font-semibold text-lg">{data.name}</p>
        <p className="text-sm text-gray-500">
          <Preview value={data.explanation} />
        </p>
      </div>
      {/* Price & Reiew */}
      <div className="flex items-center justify-between"></div>
    </div>
  );
};

export default ProjectCard;
