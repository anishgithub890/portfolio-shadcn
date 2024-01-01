import { format } from 'date-fns';

import prisma from '@/lib/prismadb';
import getCurrentUser from '@/app/actions/getCurrentUser';

import { FeedbackColumn } from './components/columns';
import { FeedbackClient } from './components/client';
import Container from '@/components/container';
import RoleState from '@/components/role-state';

const AdminFeedbacksPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <RoleState title="Unauthorized" description="Please login" />;
  }

  const feedbacks = await prisma.feedback.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  const formattedfeedbacks: FeedbackColumn[] = feedbacks.map((item) => ({
    id: item.id,
    type: item.type,
    comment: item.comment,
    createdAt: format(item.createdAt, 'MMMM do, yyyy'),
  }));

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
              <FeedbackClient data={formattedfeedbacks} />
            </div>
          </>
        ) : (
          <></>
        )}
      </Container>
    </div>
  );
};

export default AdminFeedbacksPage;
