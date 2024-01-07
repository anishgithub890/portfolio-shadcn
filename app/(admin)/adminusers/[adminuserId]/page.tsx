import prisma from '@/lib/prismadb';

import { UserForm } from './components/user-form';
import Container from '@/components/container';
import ClientOnly from '@/components/client-only';
import InvalidState from '@/components/invalid-state';

const AdminUserPage = async ({
  params,
}: {
  params: { adminuserId: string };
}) => {
  const user = await prisma.user.findFirst({
    where: {
      id: params.adminuserId,
    },
  });

  if (!user) {
    return (
      <ClientOnly>
        <div className="pt-24">
          <InvalidState showReset name="Admin User" link="/adminusers" />
        </div>
      </ClientOnly>
    );
  }

  return (
    <div className="flex-col pt-14">
      <Container>
        <div className="flex-1 space-y-4 p-8 pt-6">
          <UserForm initialData={user} />
        </div>
      </Container>
    </div>
  );
};

export default AdminUserPage;
