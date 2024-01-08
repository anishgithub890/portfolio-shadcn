import prisma from '@/lib/prismadb';
import getCurrentUser from '@/app/actions/getCurrentUser';

import { PrivacyForm } from './components/privacy-form';
import Container from '@/components/container';
import ClientOnly from '@/components/client-only';
import RoleState from '@/components/role-state';

const AdminPrivacyPage = async ({
  params,
}: {
  params: { adminprivacyId: string };
}) => {
  const privacy = await prisma.privacy.findFirst({
    where: {
      id: params.adminprivacyId,
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
    <div className="flex-col pt-14">
      <Container>
        <div className="flex-1 space-y-4 p-8 pt-6">
          <PrivacyForm initialData={privacy} />
        </div>
      </Container>
    </div>
  );
};

export default AdminPrivacyPage;
