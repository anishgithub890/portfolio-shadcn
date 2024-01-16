import { format } from 'date-fns';

import prisma from '@/lib/prismadb';
import getCurrentUser from '@/app/actions/getCurrentUser';

import { SkillColumn } from './components/columns';
import { SkillClient } from './components/client';
import Container from '@/components/container';
import RoleState from '@/components/role-state';

const AdminSkillsPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <RoleState title="Unauthorized" description="Please login" />;
  }

  const skills = await prisma.skill.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  const formattedSkills: SkillColumn[] = skills.map((item) => ({
    id: item.id,
    label: item.label,
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
              <SkillClient data={formattedSkills} />
            </div>
          </>
        ) : (
          <></>
        )}
      </Container>
    </div>
  );
};

export default AdminSkillsPage;
