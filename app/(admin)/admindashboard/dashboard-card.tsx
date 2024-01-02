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
        <figure className="md:flex bg-slate-100 hover:bg-slate-200 justify-center transition rounded-sm p-8 md:p-0">
          <div className="md:p-8 text-center space-y-4">
            <Link href="/adminusers" className="dark:text-zinc-900 flex gap-2">
              <p className="font-semibold hover:underline hover:underline-offset-2 transition">
                Manage Users
              </p>
              {`[${usr.length}]`}
            </Link>
          </div>
        </figure>

        <figure className="md:flex bg-slate-100 hover:bg-slate-200 justify-center transition rounded-sm p-8 md:p-0">
          <div className="md:p-8 text-center space-y-4">
            <Link
              href="/admintestimonials"
              className="dark:text-zinc-900 flex gap-2"
            >
              <p className="font-semibold hover:underline hover:underline-offset-2 transition">
                Manage Testimonials
              </p>
              {`[${test.length}]`}
            </Link>
          </div>
        </figure>

        <figure className="md:flex bg-slate-100 hover:bg-slate-200 justify-center transition rounded-sm p-8 md:p-0">
          <div className="md:p-8 text-center space-y-4">
            <Link href="/adminskills" className="dark:text-zinc-900 flex gap-2">
              <p className="font-semibold hover:underline hover:underline-offset-2 transition">
                Manage Skills
              </p>
              {`[${skl.length}]`}
            </Link>
          </div>
        </figure>

        <figure className="md:flex bg-slate-100 hover:bg-slate-200 justify-center transition rounded-sm p-8 md:p-0">
          <div className="md:p-8 text-center space-y-4">
            <Link href="/adminskills" className="dark:text-zinc-900 flex gap-2">
              <p className="font-semibold hover:underline hover:underline-offset-2 transition">
                Manage Experiences
              </p>
              {`[${exp.length}]`}
            </Link>
          </div>
        </figure>

        <figure className="md:flex bg-slate-100 hover:bg-slate-200 justify-center transition rounded-sm p-8 md:p-0">
          <div className="md:p-8 text-center space-y-4">
            <Link
              href="/adminprojects"
              className="dark:text-zinc-900 flex gap-2"
            >
              <p className="font-semibold hover:underline hover:underline-offset-2 transition">
                Manage Projects
              </p>
              {`[${prj.length}]`}
            </Link>
          </div>
        </figure>

        <figure className="md:flex bg-slate-100 hover:bg-slate-200 justify-center transition rounded-sm p-8 md:p-0">
          <div className="md:p-8 text-center space-y-4">
            <Link href="/adminresume" className="dark:text-zinc-900 flex gap-2">
              <p className="font-semibold hover:underline hover:underline-offset-2 transition">
                Manage Resume
              </p>
              {`[${rsm.length}]`}
            </Link>
          </div>
        </figure>

        <figure className="md:flex bg-slate-100 hover:bg-slate-200 justify-center transition rounded-sm p-8 md:p-0">
          <div className="md:p-8 text-center space-y-4">
            <Link
              href="/adminfeedbacks"
              className="dark:text-zinc-900 flex gap-2"
            >
              <p className="font-semibold hover:underline hover:underline-offset-2 transition">
                Manage Feedbacks
              </p>
              {`[${feed.length}]`}
            </Link>
          </div>
        </figure>

        <figure className="md:flex bg-slate-100 hover:bg-slate-200 justify-center transition rounded-sm p-8 md:p-0">
          <div className="md:p-8 text-center space-y-4">
            <Link
              href="/admincontacts"
              className="dark:text-zinc-900 flex gap-2"
            >
              <p className="font-semibold hover:underline hover:underline-offset-2 transition">
                Manage Contacts
              </p>
              {`[${cont.length}]`}
            </Link>
          </div>
        </figure>

        <figure className="md:flex bg-slate-100 hover:bg-slate-200 justify-center transition rounded-sm p-8 md:p-0">
          <div className="md:p-8 text-center space-y-4">
            <Link
              href="/adminprivacypolicy"
              className="dark:text-zinc-900 flex gap-2"
            >
              <p className="font-semibold hover:underline hover:underline-offset-2 transition">
                Manage Privacy
              </p>
              {`[${pri.length}]`}
            </Link>
          </div>
        </figure>

        <figure className="md:flex bg-slate-100 hover:bg-slate-200 justify-center transition rounded-sm p-8 md:p-0">
          <div className="md:p-8 text-center space-y-4">
            <Link
              href="/admintermservice"
              className="dark:text-zinc-900 flex gap-2"
            >
              <p className="font-semibold hover:underline hover:underline-offset-2 transition">
                Manage Term
              </p>
              {`[${trm.length}]`}
            </Link>
          </div>
        </figure>
      </div>
    </>
  );
};

export default DashboardCard;
