import prisma from '@/lib/prismadb';

import { TestimonialForm } from './components/testimonial-form';
import Container from '@/components/container';
import ClientOnly from '@/components/client-only';
import InvalidState from '@/components/invalid-state';

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

  if (!testimonial) {
    return (
      <ClientOnly>
        <div className="pt-24">
          <InvalidState
            showReset
            name="Admin Testimonial"
            link="/admintestimonials"
          />
        </div>
      </ClientOnly>
    );
  }

  return (
    <div className="flex-col pt-14">
      <Container>
        <div className="flex-1 space-y-4 p-8 pt-6">
          <TestimonialForm initialData={testimonial} />
        </div>
      </Container>
    </div>
  );
};

export default AdminTestimonialPage;
