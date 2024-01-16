'use client';

import { SafeUser } from '@/app/types';
import Container from '@/components/container';

interface ProfileClientProps {
  currentUser?: SafeUser | null;
}

const EditProfileClient = ({ currentUser }: ProfileClientProps) => {
  return (
    <Container>
      <div className="max-w-screen-sm mx-auto pt-6">
        <div className="flex flex-col gap-6">
          <div className="w-full h-[60vh] overflow-hidden items-center justify-center text-center relative">
            <div className="text-xl space-y-4 pt-2 pb-2 gap-4 border-4 rounded-md">
              <div className="text-start pl-2 break-all">
                <p className="font-bold">
                  Name :&nbsp;
                  <span className="text-2xl font-extrabold text-violet-600 dark:text-white">
                    {currentUser?.name}
                  </span>
                </p>
                <p className="font-bold">
                  Email :&nbsp;
                  <span className="text-2xl font-extrabold text-violet-600 dark:text-white">
                    {currentUser?.email}
                  </span>
                </p>
                <p className="font-bold">
                  Role :&nbsp;
                  <span className="text-2xl font-extrabold text-violet-600 dark:text-white">
                    {currentUser?.role}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default EditProfileClient;
