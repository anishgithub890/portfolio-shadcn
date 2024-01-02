import Link from 'next/link';
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
    },
    {
      name: 'Manage Testimonials',
      link: '/admintestimonials',
      count: `[${test.length}]`,
    },
    {
      name: 'Manage Skills',
      link: '/adminskills',
      count: `[${skl.length}]`,
    },
    {
      name: 'Manage Experiences',
      link: '/adminexperiences',
      count: `[${exp.length}]`,
    },
    {
      name: 'Manage Projects',
      link: '/adminprojects',
      count: `[${prj.length}]`,
    },
    {
      name: 'Manage Resume',
      link: '/adminresume',
      count: `[${rsm.length}]`,
    },
    {
      name: 'Manage Feedbacks',
      link: '/adminfeedbacks',
      count: `[${feed.length}]`,
    },
    {
      name: 'Manage Feedbacks',
      link: '/adminfeedbacks',
      count: `[${feed.length}]`,
    },
    {
      name: 'Manage Contacts',
      link: '/admincontacts',
      count: `[${cont.length}]`,
    },
    {
      name: 'Manage Privacy',
      link: '/adminprivacypolicy',
      count: `[${pri.length}]`,
    },
    {
      name: 'Manage Term',
      link: '/admintermservice',
      count: `[${trm.length}]`,
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
        md:grid-cols-2 
        lg:grid-cols-3
        xl:grid-cols-3
        2xl:grid-cols-4
        gap-4
        "
      >
        {MNG.map(({ name, link, count }, key) => (
          <div key={key}>
            <figure className="md:flex bg-slate-100 hover:bg-slate-200 justify-center transition rounded-sm p-8 md:p-0">
              <div className="md:p-8 text-center space-y-4">
                <Link href={link} className="dark:text-zinc-900 flex gap-2">
                  <p className="font-semibold hover:underline hover:underline-offset-2 transition">
                    {name}
                  </p>
                  {count}
                </Link>
              </div>
            </figure>
          </div>
        ))}
      </div>
    </>
  );
};

export default DashboardCard;
