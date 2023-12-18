import prisma from '@/lib/prismadb';

import { UserForm } from './components/user-form';
import Container from '@/components/container';

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
