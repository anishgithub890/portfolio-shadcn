import { format } from 'date-fns';

import prisma from '@/lib/prismadb';
import getCurrentUser from '@/app/actions/getCurrentUser';

import { ContactColumn } from './components/columns';
import { ContactClient } from './components/client';
import Container from '@/components/container';
import RoleState from '@/components/role-state';

const AdminContactsPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <RoleState showReset title="Unauthorized" description="Please login" />
    );
  }

  const contacts = await prisma.contact.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  const formattedcontacts: ContactColumn[] = contacts.map((item) => ({
    id: item.id,
    name: item.name,
    email: item.email,
    message: item.message,
    createdAt: format(item.createdAt, 'MMMM do, yyyy'),
  }));

  return (
    <div className="flex-col pt-1">
      <Container>
        {currentUser?.role == 'user' ? (
          <div>
            <RoleState showReset />
          </div>
        ) : currentUser?.role == 'admin' ? (
          <>
            <div className="flex-1 space-y-4 p-8 pt-6">
              <ContactClient data={formattedcontacts} />
            </div>
          </>
        ) : (
          <></>
        )}
      </Container>
    </div>
  );
};

export default AdminContactsPage;
