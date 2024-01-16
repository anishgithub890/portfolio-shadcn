'use client';

// import getCurrentUser from '@/app/actions/getCurrentUser';
import { SafeUser } from '@/app/types';

interface ProfileClientProps {
  currentUser?: SafeUser | null;
}

const EditProfileClient = ({ currentUser }: ProfileClientProps) => {
  //   const currentUser = getCurrentUser();
  return (
    <>
      <div>{currentUser?.name}</div>
    </>
  );
};

export default EditProfileClient;
