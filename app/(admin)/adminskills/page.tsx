import { format } from 'date-fns';

import prisma from '@/lib/prismadb';

import { SkillColumn } from './components/columns';
import { SkillClient } from './components/client';
import Container from '@/components/container';

const AdminSkillsPage = async () => {
  const skills = await prisma.skill.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  const formattedSkills: SkillColumn[] = skills.map((item) => ({
    id: item.id,
    label: item.label,
    createdAt: format(item.createdAt, 'MMMM do, yyyy'),
  }));

  return (
    <div className="flex-col pt-14">
      <Container>
        <div className="flex-1 space-y-4 p-8 pt-6">
          <SkillClient data={formattedSkills} />
        </div>
      </Container>
    </div>
  );
};

export default AdminSkillsPage;
