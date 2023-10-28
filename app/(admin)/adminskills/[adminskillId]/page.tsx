import prisma from '@/lib/prismadb';

import { SkillForm } from './components/billboard-form';

const BillboardPage = async ({
  params,
}: {
  params: { adminskillId: string; storeId?: string; userId?: string };
}) => {
  const skill = await prisma.skill.findFirst({
    where: {
      id: params.adminskillId,
      // userId: params.userId,
      // id: params.userId,
      // id: params.storeId,
    },
  });

  return (
    <div className="flex-col pt-14">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <SkillForm initialData={skill} />
      </div>
    </div>
  );
};

export default BillboardPage;
