import prisma from '@/lib/prismadb';

import { TestimonialForm } from './components/testimonial-form';
import Container from '@/components/container';

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
