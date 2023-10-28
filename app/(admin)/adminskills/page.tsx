import { format } from 'date-fns';

import prisma from '@/lib/prismadb';

import { SkillColumn } from './components/columns';
import { SkillClient } from './components/client';

const AdminSkillsPage = async ({ params }: { params: { storeId: string } }) => {
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
      <div className="flex-1 space-y-4 p-8 pt-6">
        <SkillClient data={formattedSkills} />
      </div>
    </div>
  );
};

export default AdminSkillsPage;
