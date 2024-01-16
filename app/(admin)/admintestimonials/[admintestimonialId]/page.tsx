import prisma from '@/lib/prismadb';
import getCurrentUser from '@/app/actions/getCurrentUser';

import { TestimonialForm } from './components/testimonial-form';
import Container from '@/components/container';
import ClientOnly from '@/components/client-only';
import RoleState from '@/components/role-state';

const AdminTestimonialPage = async ({
  params,
}: {
  params: { admintestimonialId: string };
}) => {
  const testimonial = await prisma.testimonial.findFirst({
    where: {
      id: params.admintestimonialId,
    },
  });

  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <ClientOnly>
        <div className="pt-24">
          <RoleState />
        </div>
      </ClientOnly>
    );
  }

  return (
    <div className="flex-col pt-1">
      <Container>
        <div className="flex-1 space-y-4 p-8 pt-6">
          <TestimonialForm initialData={testimonial} />
        </div>
      </Container>
    </div>
  );
};

export default AdminTestimonialPage;
