import { format } from 'date-fns';

import prisma from '@/lib/prismadb';
import getCurrentUser from '@/app/actions/getCurrentUser';

import { TestimonialColumn } from './components/columns';
import { TestimonialClient } from './components/client';
import Container from '@/components/container';
import RoleState from '@/components/role-state';

const AdminTestimonialsPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <RoleState title="Unauthorized" description="Please login" />;
  }

  const testimonials = await prisma.testimonial.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  const formattedTestimonials: TestimonialColumn[] = testimonials.map(
    (item) => ({
      id: item.id,
      name: item.name,
      role: item.role,
      createdAt: format(item.createdAt, 'MMMM do, yyyy'),
    })
  );

  return (
    <div className="flex-col pt-14">
      <Container>
        {currentUser?.role == 'user' ? (
          <div>
            <RoleState showReset />
          </div>
        ) : currentUser?.role == 'admin' ? (
          <>
            <div className="flex-1 space-y-4 p-8 pt-6">
              <TestimonialClient data={formattedTestimonials} />
            </div>
          </>
        ) : (
          <></>
        )}
      </Container>
    </div>
  );
};

export default AdminTestimonialsPage;
