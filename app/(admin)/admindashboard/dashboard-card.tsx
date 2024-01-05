import Link from 'next/link';
import { GiSkills } from 'react-icons/gi';
import { MdReviews } from 'react-icons/md';
import { GoProjectSymlink } from 'react-icons/go';
import { MdEditNote } from 'react-icons/md';
import { VscFeedback } from 'react-icons/vsc';
import { SiGnuprivacyguard } from 'react-icons/si';
import { MdOutlineMiscellaneousServices } from 'react-icons/md';
import { Contact, Medal, Users } from 'lucide-react';

import { TestimonialColumn } from '../admintestimonials/components/columns';
import { FeedbackColumn } from '../adminfeedbacks/components/columns';
import { ContactColumn } from '../admincontacts/components/columns';
import { SkillColumn } from '../adminskills/components/columns';
import { ExperienceColumn } from '../adminexperiences/components/columns';
import { ProjectColumn } from '../adminprojects/components/columns';
import { UserColumn } from '../adminusers/components/columns';
import { ResumeColumn } from '../adminresume/components/columns';
import { PrivacyColumn } from '../adminprivacypolicy/components/columns';
import { TermColumn } from '../admintermservice/components/columns';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';

interface DashboardCardProps {
  usr: UserColumn[];
  test: TestimonialColumn[];
  feed: FeedbackColumn[];
  cont: ContactColumn[];
  skl: SkillColumn[];
  exp: ExperienceColumn[];
  prj: ProjectColumn[];
  rsm: ResumeColumn[];
  pri: PrivacyColumn[];
  trm: TermColumn[];
}

const DashboardCard: React.FC<DashboardCardProps> = async ({
  test,
  feed,
  cont,
  skl,
  exp,
  prj,
  usr,
  rsm,
  pri,
  trm,
}) => {
  const MNG = [
    {
      name: 'Manage Users',
      link: '/adminusers',
      count: `[${usr.length}]`,
      icon: Users,
      color: 'text-violet-500',
      tooltip: 'User Read, write, update and delete ',
    },
    {
      name: 'Manage Testimonials',
      link: '/admintestimonials',
      count: `[${test.length}]`,
      icon: MdReviews,
      color: 'text-violet-500',
      tooltip: 'Testimonial Read, write, update and delete ',
    },
    {
      name: 'Manage Skills',
      link: '/adminskills',
      count: `[${skl.length}]`,
      icon: GiSkills,
      color: 'text-pink-700',
      tooltip: 'Skill Read, write, update and delete ',
    },
    {
      name: 'Manage Experiences',
      link: '/adminexperiences',
      count: `[${exp.length}]`,
      icon: Medal,
      color: 'text-red-500',
      tooltip: 'Experience Read, write, update and delete ',
    },
    {
      name: 'Manage Projects',
      link: '/adminprojects',
      count: `[${prj.length}]`,
      icon: GoProjectSymlink,
      color: 'text-sky-500',
      tooltip: 'Project Read, write, update and delete ',
    },
    {
      name: 'Manage Resume',
      link: '/adminresume',
      count: `[${rsm.length}]`,
      icon: MdEditNote,
      color: 'text-black-500',
      tooltip: 'Resume Read, write, update and delete ',
    },
    {
      name: 'Manage Feedbacks',
      link: '/adminfeedbacks',
      count: `[${feed.length}]`,
      icon: VscFeedback,
      color: 'text-green-700',
      tooltip: 'Feedback Read and delete ',
    },
    {
      name: 'Manage Contacts',
      link: '/admincontacts',
      count: `[${cont.length}]`,
      icon: Contact,
      color: 'text-black-500',
      tooltip: 'Contact Read and delete ',
    },
    {
      name: 'Manage Privacy',
      link: '/adminprivacypolicy',
      count: `[${pri.length}]`,
      icon: SiGnuprivacyguard,
      color: 'text-sky-500',
      tooltip: 'Privacy-Policy Read, write, update and delete ',
    },
    {
      name: 'Manage Term',
      link: '/admintermservice',
      count: `[${trm.length}]`,
      icon: MdOutlineMiscellaneousServices,
      color: 'text-black-500',
      tooltip: 'Term-Service Read, write, update and delete ',
    },
  ];
  return (
    <>
      <div
        className="
        pt-5
        grid 
        grid-cols-1 
        sm:grid-cols-1 
        md:grid-cols-1
        lg:grid-cols-2
        xl:grid-cols-3
        2xl:grid-cols-4
        gap-4
        "
      >
        {MNG.map((data, key) => (
          <div key={key}>
            <div className="md:flex bg-slate-100 hover:bg-slate-200 transition rounded-md p-8 md:p-0">
              <div className="md:p-8 text-center md:text-left space-y-4">
                <div className="flex gap-4 dark:text-zinc-900">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="absolute rounded-xl bg-slate-300 p-4">
                          <data.icon className={cn('h-6 w-6', data.color)} />
                        </div>
                      </TooltipTrigger>
                      <TooltipTrigger asChild>
                        <Link
                          href={data.link}
                          className="dark:text-zinc-900 flex gap-2"
                        >
                          <div className="text-center flex">
                            <p className="p-4 break-all text-md pl-[5rem] font-semibold hover:underline hover:underline-offset-2 transition">
                              {data.name} {data.count}
                            </p>
                          </div>
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="font-semibold text-md p-2">
                          {data.tooltip}
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DashboardCard;
