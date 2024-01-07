import prisma from '@/lib/prismadb';
import getCurrentUser from '@/app/actions/getCurrentUser';

import { TermForm } from './components/term-form';
import Container from '@/components/container';
import ClientOnly from '@/components/client-only';
import InvalidState from '@/components/invalid-state';
import RoleState from '@/components/role-state';

const AdminTermPage = async ({
  params,
}: {
  params: { admintermId: string };
}) => {
  const term = await prisma.term.findFirst({
    where: {
      id: params.admintermId,
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

  if (!term) {
    return (
      <ClientOnly>
        <div className="pt-24">
          <InvalidState showReset name="Admin Contact" link="/admincontacts" />
        </div>
      </ClientOnly>
    );
  }

  return (
    <div className="flex-col pt-14">
      <Container>
        <div className="flex-1 space-y-4 p-8 pt-6">
          <TermForm initialData={term} />
        </div>
      </Container>
    </div>
  );
};

export default AdminTermPage;
