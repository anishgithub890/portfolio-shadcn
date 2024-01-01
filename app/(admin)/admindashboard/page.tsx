import getCurrentUser from '@/app/actions/getCurrentUser';
import { format } from 'date-fns';
import DashboardCard from './dashboard-card';
import Container from '@/components/container';
import RoleState from '@/components/role-state';
import prisma from '@/lib/prismadb';
import { TestimonialColumn } from '../admintestimonials/components/columns';
import { FeedbackColumn } from '../adminfeedbacks/components/columns';

const AdminDashboardPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <RoleState title="Unauthorized" description="Please login" />;
  }

  const testimonials = await prisma.testimonial.findMany({});
  const feedbacks = await prisma.feedback.findMany({});

  const testimonialNumber: TestimonialColumn[] = testimonials.map((item) => ({
    id: item.id,
    name: item.name,
    role: item.role,
    isFeatured: item.isFeatured,
    createdAt: format(item.createdAt, 'MMMM do, yyyy'),
  }));
  const feedbackNumber: FeedbackColumn[] = feedbacks.map((item) => ({}));
  return (
    <>
      <Container>
        <div className="flex-col pt-14">
          {currentUser?.role == 'user' ? (
            <div>
              <RoleState showReset />
            </div>
          ) : currentUser?.role == 'admin' ? (
            <div className="flex-1 space-y-4 p-8 pt-6">
              <DashboardCard test={testimonialNumber} feed={feedbackNumber} />
            </div>
          ) : (
            <></>
          )}
        </div>
      </Container>
    </>
  );
};

export default AdminDashboardPage;
