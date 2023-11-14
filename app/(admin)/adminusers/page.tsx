import { format } from 'date-fns';

import prisma from '@/lib/prismadb';
import getCurrentUser from '@/app/actions/getCurrentUser';

import { UserColumn } from './components/columns';
import { UserClient } from './components/client';
import Container from '@/components/container';
import RoleState from '@/components/role-state';

const AdminUsersPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <RoleState title="Unauthorized" description="Please login" />;
  }

  const users = await prisma.user.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  const formattedusers: UserColumn[] = users.map((item) => ({
    id: item.id,
    name: item.name,
    email: item.email,
    role: item.role,
    createdAt: format(item.createdAt, 'MMMM do, yyyy'),
  }));

  return (
    <div className="flex-col pt-14">
      <Container>
        {currentUser?.role == 'user' ? (
          <div>
            <RoleState
              title="OOOPS! ACCESS DENIED"
              description="This page not for users....!"
            />
          </div>
        ) : currentUser?.role == 'admin' ? (
          <>
            <div className="flex-1 space-y-4 p-8 pt-6">
              <UserClient data={formattedusers} />
            </div>
          </>
        ) : (
          <></>
        )}
      </Container>
    </div>
  );
};

export default AdminUsersPage;
