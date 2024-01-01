import prisma from '@/lib/prismadb';

import { FeedbackForm } from './components/feedback-form';
import Container from '@/components/container';

const AdminFeedbackPage = async ({
  params,
}: {
  params: { adminfeedbackId: string };
}) => {
  const feedback = await prisma.feedback.findFirst({
    where: {
      id: params.adminfeedbackId,
    },
  });

  return (
    <div className="flex-col pt-14">
      <Container>
        <div className="flex-1 space-y-4 p-8 pt-6">
          <FeedbackForm initialData={feedback} />
        </div>
      </Container>
    </div>
  );
};

export default AdminFeedbackPage;
