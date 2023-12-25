'use client';

import * as React from 'react';
import Autoplay from 'embla-carousel-autoplay';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { SafeTestimonial, SafeUser } from '@/app/types';
import { Preview } from '@/components/preview';
import { TestimonialColumn } from '@/app/(admin)/admintestimonials/components/columns';

interface TestimonialCardProps {
  data: SafeTestimonial;
  testimonialdata: TestimonialColumn[];
  currentUser?: SafeUser | null;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  data,
  testimonialdata,
}) => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <div>
      <Carousel
        plugins={[plugin.current]}
        className="w-full max-w-xs"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <figure className="md:flex bg-slate-100 hover:bg-slate-200 transition rounded-sm p-8 md:p-0">
                    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                      <figcaption className="font-medium">
                        <div className="text-sky-500 text-sm font-medium">
                          {data.name}
                        </div>
                        <div className="text-zinc-700 pl-1">{data.company}</div>
                      </figcaption>
                      <blockquote>
                        <div className="flex items-center font-medium dark:text-zinc-700">
                          <Preview value={data.comment} />
                        </div>
                      </blockquote>
                    </div>
                  </figure>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
// {testimonialdata.length + 1}
export default TestimonialCard;
