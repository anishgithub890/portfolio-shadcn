'use client';

import { SafeTestimonial, SafeUser } from '@/app/types';
import { Preview } from '@/components/preview';
import Image from 'next/image';

interface TestimonialCardProps {
  data: SafeTestimonial;
  currentUser?: SafeUser | null;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ data }) => {
  return (
    <>
      <figure className="md:flex bg-slate-100 hover:bg-slate-200 justify-center transition rounded-sm p-8 md:p-0 hover:-translate-y-2 duration-300">
        <div className="pt-6 md:p-8 text-center space-y-4">
          <div className="flex justify-center">
            <Image src={data.imageUrl} alt="" width="100" height="100" />
          </div>
          <figcaption className="font-medium">
            <div className="text-sky-500 text-sm font-medium">{data.name}</div>
            <div className="text-zinc-700 pl-1">{data.role}</div>
            <div className="text-zinc-700 pl-1">{data.company}</div>
          </figcaption>
          <blockquote>
            <div className="flex items-center font-medium dark:text-zinc-700">
              <Preview value={data.comment} />
            </div>
          </blockquote>
        </div>
      </figure>
    </>
  );
};

export default TestimonialCard;
