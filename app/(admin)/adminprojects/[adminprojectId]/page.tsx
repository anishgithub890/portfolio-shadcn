import prisma from '@/lib/prismadb';
import getCurrentUser from '@/app/actions/getCurrentUser';

import { ProjectForm } from './components/project-form';
import Container from '@/components/container';
import ClientOnly from '@/components/client-only';
import InvalidState from '@/components/invalid-state';
import RoleState from '@/components/role-state';

const AdminProjectPage = async ({
  params,
}: {
  params: { adminprojectId: string };
}) => {
  const project = await prisma.project.findFirst({
    where: {
      id: params.adminprojectId,
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

  if (!project) {
    return (
      <ClientOnly>
        <div className="pt-24">
          <InvalidState showReset name="Admin Project" link="/adminprojects" />
        </div>
      </ClientOnly>
    );
  }

  return (
    <div className="flex-col pt-14">
      <Container>
        <div className="flex-1 space-y-4 p-8 pt-6">
          <ProjectForm initialData={project} />
        </div>
      </Container>
    </div>
  );
};

export default AdminProjectPage;
