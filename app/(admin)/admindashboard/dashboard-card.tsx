import Link from 'next/link';
import { TestimonialColumn } from '../admintestimonials/components/columns';
import { FeedbackColumn } from '../adminfeedbacks/components/columns';
import { ContactColumn } from '../admincontacts/components/columns';

interface DashboardCardProps {
  test: TestimonialColumn[];
  feed: FeedbackColumn[];
  cont: ContactColumn[];
}

const DashboardCard: React.FC<DashboardCardProps> = async ({
  test,
  feed,
  cont,
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
      </div>
    </>
  );
};

export default DashboardCard;
