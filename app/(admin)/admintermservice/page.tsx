import { format } from 'date-fns';

import prisma from '@/lib/prismadb';
import getCurrentUser from '@/app/actions/getCurrentUser';

import { TermColumn } from './components/columns';
import { TermClient } from './components/client';
import Container from '@/components/container';
import RoleState from '@/components/role-state';

const AdminTermsPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <RoleState title="Unauthorized" description="Please login" />;
  }

  const terms = await prisma.term.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  const formattedTerms: TermColumn[] = terms.map((item) => ({
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
              <TermClient data={formattedTerms} />
            </div>
          </>
        ) : (
          <></>
        )}
      </Container>
    </div>
  );
};

export default AdminTermsPage;
