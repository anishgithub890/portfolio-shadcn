import prisma from '@/lib/prismadb';
import getCurrentUser from '@/app/actions/getCurrentUser';

import { ExperienceForm } from './components/experience-form';
import Container from '@/components/container';
import ClientOnly from '@/components/client-only';
import RoleState from '@/components/role-state';

const AdminExperiencePage = async ({
  params,
}: {
  params: { adminexperienceId: string };
}) => {
  const experience = await prisma.experience.findFirst({
    where: {
      id: params.adminexperienceId,
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
          <ExperienceForm initialData={experience} />
        </div>
      </Container>
    </div>
  );
};

export default AdminExperiencePage;
