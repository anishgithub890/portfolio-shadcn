'use client';

import { useEffect, useState } from 'react';
import { Loader } from 'lucide-react';
import Image from 'next/image';

import { SafeTestimonial, SafeUser } from '@/app/types';
import { Preview } from '@/components/preview';
import Container from '@/components/container';
import ClientOnly from '@/components/client-only';

interface TestimonialCardProps {
  data: SafeTestimonial;
  currentUser?: SafeUser | null;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ data }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 3 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      <ClientOnly>
        {isLoading ? (
          <Container>
            <Loader className="w-8 h-8 animate-spin" />
          </Container>
        ) : (
          <figure className="md:flex bg-slate-100 hover:bg-slate-200 justify-center transition rounded-sm p-8 md:p-0 hover:-translate-y-2 duration-300">
            <div className="pt-6 md:p-8 text-center space-y-4">
              <div className="flex justify-center">
                <Image src={data.imageUrl} alt="" width="100" height="100" />
              </div>
              <figcaption className="font-medium">
                <div className="text-sky-500 text-sm font-medium">
                  {data.name}
                </div>
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
        )}
      </ClientOnly>
    </>
  );
};

export default TestimonialCard;
