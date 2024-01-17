import prisma from '@/lib/prismadb';
import getCurrentUser from '@/app/actions/getCurrentUser';

import Container from '@/components/container';
import ClientOnly from '@/components/client-only';
import RoleState from '@/components/role-state';
import { ProfileForm } from './components/profile-form';

const EditProfilePage = async ({
  params,
}: {
  params: { profileId: string };
}) => {
  const user = await prisma.user.findFirst({
    where: {
      id: params.profileId,
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
        <div className="flex-1 max-w-screen-sm mx-auto space-y-4 p-8 pt-6">
          <ProfileForm initialData={user} />
        </div>
      </Container>
    </div>
  );
};

export default EditProfilePage;
