import prisma from '@/lib/prismadb';

import { TermForm } from './components/term-form';
import Container from '@/components/container';

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
