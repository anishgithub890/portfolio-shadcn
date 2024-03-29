import { format } from 'date-fns';

import prisma from '@/lib/prismadb';
import getCurrentUser from '@/app/actions/getCurrentUser';

import { PrivacyColumn } from './components/columns';
import { PrivacyClient } from './components/client';
import Container from '@/components/container';
import RoleState from '@/components/role-state';

const AdminPrivacyPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <RoleState title="Unauthorized" description="Please login" />;
  }

  const privacys = await prisma.privacy.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  const formattedPrivacies: PrivacyColumn[] = privacys.map((item) => ({
    id: item.id,
    note: item.note,
    isFeatured: item.isFeatured,
    createdAt: format(item.createdAt, 'MMMM do, yyyy'),
  }));

  return (
    <div className="flex-col pt-1">
      <Container>
        {currentUser?.role == 'user' ? (
          <div>
            <RoleState
              showReset
              title="Unauthorized"
              description="Please login"
            />
          </div>
        ) : currentUser?.role == 'admin' ? (
          <>
            <div className="flex-1 space-y-4 p-8 pt-6">
              <PrivacyClient data={formattedPrivacies} />
            </div>
          </>
        ) : (
          <></>
        )}
      </Container>
    </div>
  );
};

export default AdminPrivacyPage;
