// 'use client';

import Link from 'next/link';
import { UserColumn } from '../adminusers/components/columns';
import { TestimonialColumn } from '../admintestimonials/components/columns';
import { User } from '@prisma/client';
import { SafeUser } from '@/app/types';
import getCurrentUser from '@/app/actions/getCurrentUser';
import getTestimonials from '@/app/actions/getTestimonials';
import prisma from '@/lib/prismadb';
import { FeedbackColumn } from '../adminfeedbacks/components/columns';

interface DashboardCardProps {
  test: TestimonialColumn[];
  feed: FeedbackColumn[];
}

const DashboardCard: React.FC<DashboardCardProps> = async ({ test, feed }) => {
  return (
    <>
      <div
        className="
        pt-8
        grid 
        grid-cols-1 
        sm:grid-cols-1 
        md:grid-cols-2 
        lg:grid-cols-3
        xl:grid-cols-3
        2xl:grid-cols-4
        gap-4
        "
      >
        <figure className="md:flex bg-slate-100 hover:bg-slate-200 justify-center transition rounded-sm p-8 md:p-0">
          <div className="md:p-8 text-center space-y-4">
            <Link href="/adminusers" className="dark:text-zinc-900 flex gap-2">
              <p className="font-semibold hover:underline hover:underline-offset-2 transition">
                Manage Testimonials
              </p>
              {`[${test.length}]`}
              <p></p>
            </Link>
          </div>
        </figure>
        <figure className="md:flex bg-slate-100 hover:bg-slate-200 justify-center transition rounded-sm p-8 md:p-0">
          <div className="md:p-8 text-center space-y-4">
            <Link href="/adminusers" className="dark:text-zinc-900 flex gap-2">
              <p className="font-semibold hover:underline hover:underline-offset-2 transition">
                Manage Feedbacks
              </p>
              {`[${feed.length}]`}
              <p></p>
            </Link>
          </div>
        </figure>
      </div>
    </>
  );
};

export default DashboardCard;
