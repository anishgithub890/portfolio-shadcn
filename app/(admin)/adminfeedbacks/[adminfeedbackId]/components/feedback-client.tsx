'use client';

import { SafeFeedback, SafeUser } from '@/app/types';

import Container from '@/components/container';
import AdminFeedbackInfo from './feedback-info';

interface FeedbackClientProps {
  feedback: SafeFeedback;
  currentUser?: SafeUser | null;
}

const AdminFeedbackClient: React.FC<FeedbackClientProps> = ({ feedback }) => {
  return (
    <Container>
      <div
        className="
          max-w-screen-lg 
          mx-auto
          pt-24
        "
      >
        <div className="flex flex-col gap-6">
          <div
            className="
              grid 
              grid-cols-1 
              md:grid-cols-7 
              md:gap-10 
              mt-6
              pb-6
            "
          >
            <AdminFeedbackInfo
              type={feedback.type}
              comment={feedback.comment}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AdminFeedbackClient;
