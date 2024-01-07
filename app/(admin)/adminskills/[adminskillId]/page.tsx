import prisma from '@/lib/prismadb';
import getCurrentUser from '@/app/actions/getCurrentUser';

import { SkillForm } from './components/skill-form';
import Container from '@/components/container';
import ClientOnly from '@/components/client-only';
import InvalidState from '@/components/invalid-state';
import RoleState from '@/components/role-state';

const AdminSkillPage = async ({
  params,
}: {
  params: { adminskillId: string };
}) => {
  const skill = await prisma.skill.findFirst({
    where: {
      id: params.adminskillId,
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

  if (!skill) {
    return (
      <ClientOnly>
        <div className="pt-24">
          <InvalidState showReset name="Admin Skill" link="/adminskills" />
        </div>
      </ClientOnly>
    );
  }

  return (
    <div className="flex-col pt-14">
      <Container>
        <div className="flex-1 space-y-4 p-8 pt-6">
          <SkillForm initialData={skill} />
        </div>
      </Container>
    </div>
  );
};

export default AdminSkillPage;
