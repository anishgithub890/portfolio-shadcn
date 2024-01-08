import prisma from '@/lib/prismadb';
import getCurrentUser from '@/app/actions/getCurrentUser';

import { ResumeForm } from './components/resume-form';
import Container from '@/components/container';
import ClientOnly from '@/components/client-only';
import RoleState from '@/components/role-state';

const AdminResumePage = async ({
  params,
}: {
  params: { adminresumeId: string };
}) => {
  const resume = await prisma.resume.findFirst({
    where: {
      id: params.adminresumeId,
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
          <ResumeForm initialData={resume} />
        </div>
      </Container>
    </div>
  );
};

export default AdminResumePage;
