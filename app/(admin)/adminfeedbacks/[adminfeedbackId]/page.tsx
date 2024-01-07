import getCurrentUser from '@/app/actions/getCurrentUser';
import getAdminFeedbackById from '@/app/actions/getAdminFeedback';

import Container from '@/components/container';
import ClientOnly from '@/components/client-only';
import InvalidState from '@/components/invalid-state';
import AdminFeedbackClient from './components/feedback-client';

interface IParams {
  adminfeedbackId?: string;
}

const AdminFeedbackPage = async ({ params }: { params: IParams }) => {
  const feedback = await getAdminFeedbackById(params);
  const currentUser = await getCurrentUser();

  if (!feedback) {
    return (
      <ClientOnly>
        <div className="pt-24">
          <InvalidState
            showReset
            name="Admin Feedback"
            link="/adminfeedbacks"
          />
        </div>
      </ClientOnly>
    );
  }

  return (
    <div className="flex-col pt-14">
      <Container>
        <div className="flex-1 space-y-4 p-8 pt-6">
          <AdminFeedbackClient feedback={feedback} currentUser={currentUser} />
        </div>
      </Container>
    </div>
  );
};

export default AdminFeedbackPage;
